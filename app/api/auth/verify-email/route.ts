import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashToken } from "@/lib/auth";
import { sendEmail } from "@/lib/mailer";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get("token")?.trim() ?? "";

    if (!token) {
      return NextResponse.json({ message: "Verification token is required." }, { status: 400 });
    }

    const tokenHash = hashToken(token);

    const verificationRecord = await prisma.emailVerificationToken.findFirst({
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
            emailVerifiedAt: true,
          },
        },
      },
    });

    if (!verificationRecord) {
      return NextResponse.json({ message: "Invalid or expired verification token." }, { status: 400 });
    }

    if (!verificationRecord.user.emailVerifiedAt) {
      await prisma.$transaction([
        prisma.user.update({
          where: { id: verificationRecord.user.id },
          data: {
            emailVerifiedAt: new Date(),
            isActive: true,
          },
        }),
        prisma.emailVerificationToken.update({
          where: { id: verificationRecord.id },
          data: { usedAt: new Date() },
        }),
        prisma.emailVerificationToken.deleteMany({
          where: {
            userId: verificationRecord.user.id,
            id: { not: verificationRecord.id },
          },
        }),
      ]);

      await sendEmail({
        to: verificationRecord.user.email,
        subject: "Your BE-FIT email is verified",
        text: "Your email has been verified successfully. You can now sign in.",
        html: "<p>Your email has been verified successfully.</p><p>You can now sign in to your account.</p>",
      });
    }

    return NextResponse.json({ message: "Email verified successfully." });
  } catch (error) {
    console.error("Email verification failed", error);
    return NextResponse.json({ message: "Unable to verify email right now." }, { status: 500 });
  }
}
