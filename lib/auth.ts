import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import crypto from "crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE_NAME = "befit_session";
const JWT_EXPIRES_IN_DAYS = Number(process.env.JWT_EXPIRES_IN_DAYS ?? "7");

function getJwtSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is missing in environment variables.");
  }

  return new TextEncoder().encode(secret);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isStrongPassword(password: string): boolean {
  return password.length >= 8;
}

export function generateRawToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export function hashToken(rawToken: string): string {
  return crypto.createHash("sha256").update(rawToken).digest("hex");
}

export async function createSessionToken(payload: {
  userId: string;
  email: string;
  role: string;
}): Promise<string> {
  return new SignJWT({
    sub: payload.userId,
    email: payload.email,
    role: payload.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${JWT_EXPIRES_IN_DAYS}d`)
    .sign(getJwtSecret());
}

export async function setSessionCookie(token: string, rememberMe?: boolean): Promise<void> {
  const cookieStore = await cookies();
  const maxAgeDays = rememberMe ? 30 : JWT_EXPIRES_IN_DAYS;

  cookieStore.set({
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: maxAgeDays * 24 * 60 * 60,
  });
}
