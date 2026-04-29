import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";

const SESSION_COOKIE_NAME = "befit_session";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  return NextResponse.json({ message: "Logged out successfully." });
}
