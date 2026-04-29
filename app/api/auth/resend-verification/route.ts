import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateRawToken, hashToken, normalizeEmail } from "@/lib/auth";
import { buildVerifyEmailLink, sendEmail } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = normalizeEmail(String(body.email ?? ""));

    if (!email) {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        fullName: true,
        emailVerifiedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "If this email exists, a verification email has been sent." });
    }

    if (user.emailVerifiedAt) {
      return NextResponse.json({ message: "Email is already verified." });
    }

    const rawToken = generateRawToken();
    const tokenHash = hashToken(rawToken);
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await prisma.emailVerificationToken.deleteMany({ where: { userId: user.id } });
    await prisma.emailVerificationToken.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt,
      },
    });

    const verifyLink = buildVerifyEmailLink(rawToken, user.email);

    await sendEmail({
      to: user.email,
      subject: "Verify your BE-FIT account",
      text: `Click this link to verify your BE-FIT account: ${verifyLink}`,
      html: `<p>Hello ${user.fullName},</p><p>Click below to verify your account:</p><p><a href="${verifyLink}">Verify Email</a></p>`,
    });

    return NextResponse.json({ message: "Verification email sent." });
  } catch (error) {
    console.error("Resend verification failed", error);
    return NextResponse.json({ message: "Unable to resend verification email right now." }, { status: 500 });
  }
}
