import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateRawToken, hashToken, normalizeEmail } from "@/lib/auth";
import { buildResetPasswordLink, sendEmail } from "@/lib/mailer";

export const runtime = "nodejs";

const GENERIC_RESPONSE = {
  message: "If your email exists, a password reset link has been sent.",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = normalizeEmail(String(body.email ?? ""));

    if (!email) {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, fullName: true },
    });

    if (!user) {
      return NextResponse.json(GENERIC_RESPONSE);
    }

    const rawToken = generateRawToken();
    const tokenHash = hashToken(rawToken);
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await prisma.passwordResetToken.deleteMany({ where: { userId: user.id } });
    await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt,
      },
    });

    const resetLink = buildResetPasswordLink(rawToken);

    await sendEmail({
      to: user.email,
      subject: "Reset your BE-FIT password",
      text: `Reset your password using this link: ${resetLink}`,
      html: `<p>Hello ${user.fullName},</p><p>Reset your password by clicking the link below:</p><p><a href="${resetLink}">Reset Password</a></p>`,
    });

    return NextResponse.json(GENERIC_RESPONSE);
  } catch (error) {
    console.error("Forgot password failed", error);
    return NextResponse.json({ message: "Unable to process this request." }, { status: 500 });
  }
}
