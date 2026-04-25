import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createSessionToken, normalizeEmail, setSessionCookie, verifyPassword } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = normalizeEmail(String(body.email ?? ""));
    const password = String(body.password ?? "");
    const rememberMe = Boolean(body.rememberMe);

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        passwordHash: true,
        fullName: true,
        role: true,
        emailVerifiedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
    }

    const isPasswordValid = await verifyPassword(password, user.passwordHash);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
    }

    if (!user.emailVerifiedAt) {
      return NextResponse.json(
        {
          message: "Please verify your email before signing in.",
          code: "EMAIL_NOT_VERIFIED",
          email: user.email,
        },
        { status: 403 },
      );
    }

    const token = await createSessionToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    await setSessionCookie(token, rememberMe);

    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date(), isActive: true },
    });

    return NextResponse.json({
      message: "Signed in successfully.",
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login failed", error);
    return NextResponse.json({ message: "Unable to log in right now." }, { status: 500 });
  }
}
