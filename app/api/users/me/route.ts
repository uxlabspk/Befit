import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, isStrongPassword, verifyPassword, verifySession } from "@/lib/auth";
import { getMemberOverview } from "@/lib/member";

export const runtime = "nodejs";

export async function GET() {
  const session = await verifySession();

  if (!session) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const member = await getMemberOverview(session.userId);

  if (!member) {
    return NextResponse.json({ user: null }, { status: 404 });
  }

  return NextResponse.json({ user: member });
}

export async function PUT(request: NextRequest) {
  const session = await verifySession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const body = await request.json();
  const fullName = String(body.fullName ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const avatarUrl = String(body.avatarUrl ?? "").trim();
  const address = String(body.address ?? "").trim();
  const city = String(body.city ?? "").trim();
  const country = String(body.country ?? "").trim();
  const currentProgramTrack = String(body.currentProgramTrack ?? "").trim();
  const currentPassword = String(body.currentPassword ?? "");
  const newPassword = String(body.newPassword ?? "");
  const confirmPassword = String(body.confirmPassword ?? "");
  const nextProgramTrack =
    currentProgramTrack === "GYM"
      ? "GYM"
      : currentProgramTrack === "LOCAL_HOME"
        ? "LOCAL_HOME"
        : null;

  if (!fullName) {
    return NextResponse.json({ message: "Full name is required." }, { status: 400 });
  }

  if (currentProgramTrack && !nextProgramTrack) {
    return NextResponse.json({ message: "Invalid training track." }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: {
      id: true,
      passwordHash: true,
      profile: {
        select: {
          id: true,
        },
      },
    },
  });

  if (!user) {
    return NextResponse.json({ message: "Member not found." }, { status: 404 });
  }

  if (newPassword || currentPassword || confirmPassword) {
    if (!currentPassword || !newPassword || !confirmPassword) {
      return NextResponse.json(
        { message: "Current password, new password, and confirmation are required." },
        { status: 400 },
      );
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json({ message: "Passwords do not match." }, { status: 400 });
    }

    if (!isStrongPassword(newPassword)) {
      return NextResponse.json({ message: "Password must be at least 8 characters long." }, { status: 400 });
    }

    const passwordValid = await verifyPassword(currentPassword, user.passwordHash);
    if (!passwordValid) {
      return NextResponse.json({ message: "Current password is incorrect." }, { status: 400 });
    }
  }

  await prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: { id: session.userId },
      data: {
        fullName,
        phone: phone || null,
        avatarUrl: avatarUrl || null,
        ...(newPassword
          ? {
              passwordHash: await hashPassword(newPassword),
            }
          : {}),
      },
    });

    if (user.profile) {
      await tx.userProfile.update({
        where: { userId: session.userId },
        data: {
          address: address || null,
          city: city || null,
          country: country || null,
          profilePhotoUrl: avatarUrl || null,
          ...(nextProgramTrack ? { currentProgramTrack: nextProgramTrack } : {}),
        },
      });
    } else {
      await tx.userProfile.create({
        data: {
          userId: session.userId,
          address: address || null,
          city: city || null,
          country: country || null,
          profilePhotoUrl: avatarUrl || null,
          ...(nextProgramTrack ? { currentProgramTrack: nextProgramTrack } : {}),
        },
      });
    }
  });

  const updated = await getMemberOverview(session.userId);

  return NextResponse.json({
    message: "Settings saved successfully.",
    user: updated,
  });
}
