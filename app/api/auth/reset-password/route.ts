import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, hashToken, isStrongPassword } from "@/lib/auth";
import { sendEmail } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = String(body.token ?? "").trim();
    const password = String(body.password ?? "");
    const confirmPassword = String(body.confirmPassword ?? "");

    if (!token || !password || !confirmPassword) {
      return NextResponse.json({ message: "Token and password fields are required." }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ message: "Passwords do not match." }, { status: 400 });
    }

    if (!isStrongPassword(password)) {
      return NextResponse.json({ message: "Password must be at least 8 characters long." }, { status: 400 });
    }

    const tokenHash = hashToken(token);

    const resetTokenRecord = await prisma.passwordResetToken.findFirst({
      where: {
        tokenHash,
        usedAt: null,
        expiresAt: {
          gt: new Date(),
        },
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            fullName: true,
          },
        },
      },
    });

    if (!resetTokenRecord) {
      return NextResponse.json({ message: "Invalid or expired reset token." }, { status: 400 });
    }

    const newPasswordHash = await hashPassword(password);

    await prisma.$transaction([
      prisma.user.update({
        where: { id: resetTokenRecord.user.id },
        data: { passwordHash: newPasswordHash },
      }),
      prisma.passwordResetToken.update({
        where: { id: resetTokenRecord.id },
        data: { usedAt: new Date() },
      }),
      prisma.passwordResetToken.deleteMany({
        where: {
          userId: resetTokenRecord.user.id,
          id: { not: resetTokenRecord.id },
        },
      }),
    ]);

    await sendEmail({
      to: resetTokenRecord.user.email,
      subject: "Your BE-FIT password was changed",
      text: "Your password has been successfully reset. If this was not you, contact support immediately.",
      html: "<p>Your password has been successfully reset.</p><p>If this was not you, contact support immediately.</p>",
    });

    return NextResponse.json({ message: "Password reset successful. You can now sign in." });
  } catch (error) {
    console.error("Reset password failed", error);
    return NextResponse.json({ message: "Unable to reset password right now." }, { status: 500 });
  }
}
