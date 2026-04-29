import { NextRequest, NextResponse } from "next/server";
import { MembershipTier } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  generateRawToken,
  hashPassword,
  hashToken,
  isStrongPassword,
  normalizeEmail,
} from "@/lib/auth";
import { buildVerifyEmailLink, sendEmail } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const fullName = String(body.fullName ?? "").trim();
    const email = normalizeEmail(String(body.email ?? ""));
    const password = String(body.password ?? "");
    const confirmPassword = String(body.confirmPassword ?? "");

    if (!fullName || !email || !password || !confirmPassword) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ message: "Passwords do not match." }, { status: 400 });
    }

    if (!isStrongPassword(password)) {
      return NextResponse.json({ message: "Password must be at least 8 characters long." }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingUser) {
      return NextResponse.json({ message: "An account with this email already exists." }, { status: 409 });
    }

    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        passwordHash,
        role: "USER",
        isActive: false,
        profile: {
          create: {
            membershipTier: MembershipTier.FREE,
          },
        },
      },
      select: {
        id: true,
        email: true,
        fullName: true,
      },
    });

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
    const emailSent = await sendEmail({
      to: user.email,
      subject: "Verify your BE-FIT account",
      text: `Welcome to BE-FIT. Verify your email using this link: ${verifyLink}`,
      html: `<p>Welcome to <strong>BE-FIT</strong>.</p><p>Please verify your email by clicking the link below:</p><p><a href="${verifyLink}">Verify Email</a></p>`,
    });

    return NextResponse.json(
      {
        message: emailSent
          ? "Account created. Please check your inbox to verify your email."
          : "Account created. Email service is not configured yet.",
        emailSent,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Signup failed", error);
    return NextResponse.json({ message: "Unable to sign up right now." }, { status: 500 });
  }
}
