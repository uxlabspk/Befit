import { prisma } from "@/lib/prisma";

export function formatLabel(value: string | null | undefined): string {
  if (!value) return "—";

  return value
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function formatDate(value: Date | string | null | undefined): string {
  if (!value) return "—";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(typeof value === "string" ? new Date(value) : value);
}

export function formatDateTime(value: Date | string | null | undefined): string {
  if (!value) return "—";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(typeof value === "string" ? new Date(value) : value);
}

export function getInitials(name: string | null | undefined): string {
  if (!name) return "U";

  return name
    .split(" ")
    .map((part) => part.trim()[0])
    .filter(Boolean)
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export async function getMemberOverview(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      fullName: true,
      role: true,
      avatarUrl: true,
      phone: true,
      isActive: true,
      lastLoginAt: true,
      createdAt: true,
      emailVerifiedAt: true,
      profile: {
        select: {
          address: true,
          city: true,
          country: true,
          profilePhotoUrl: true,
          currentProgramTrack: true,
          membershipTier: true,
        },
      },
      pointsProgress: {
        select: {
          totalPoints: true,
          lastAwardedAt: true,
          currentLevel: {
            select: {
              id: true,
              name: true,
              rankOrder: true,
              minPoints: true,
              maxPoints: true,
              unlockAnimalAvatar: true,
            },
          },
        },
      },
      counsellingWallet: {
        select: {
          totalCallsPurchased: true,
          totalCallsUsed: true,
        },
      },
      subscriptions: {
        orderBy: { endsAt: "desc" },
        take: 1,
        select: {
          status: true,
          startsAt: true,
          endsAt: true,
          autoRenew: true,
        },
      },
      enrollments: {
        where: { status: "APPROVED" },
        orderBy: { updatedAt: "desc" },
        take: 1,
        select: {
          track: true,
          tier: true,
          status: true,
          startsAt: true,
          endsAt: true,
        },
      },
      feeStatusHistory: {
        orderBy: { changedAt: "desc" },
        take: 1,
        select: {
          subscriptionStatus: true,
          note: true,
          changedAt: true,
        },
      },
    },
  });

  if (!user) {
    return null;
  }

  const profile = user.profile;
  const enrollment = user.enrollments[0] ?? null;
  const subscription = user.subscriptions[0] ?? null;
  const points = user.pointsProgress ?? null;
  const level = points?.currentLevel ?? null;
  const wallet = user.counsellingWallet ?? null;
  const programTrack = profile?.currentProgramTrack ?? enrollment?.track ?? null;

  const [foodLogs, waterLogs, bookings, leaderboard, notifications] = await Promise.all([
    prisma.foodLog.findMany({
      where: { userId },
      orderBy: { loggedAt: "desc" },
      take: 4,
      select: {
        id: true,
        foodName: true,
        calories: true,
        servingNote: true,
        pointsAwarded: true,
        loggedAt: true,
      },
    }),
    prisma.waterLog.findMany({
      where: { userId },
      orderBy: { loggedAt: "desc" },
      take: 4,
      select: {
        id: true,
        milliliters: true,
        pointsAwarded: true,
        loggedAt: true,
      },
    }),
    prisma.counsellingBooking.findMany({
      where: { memberId: userId },
      orderBy: { createdAt: "desc" },
      take: 3,
      select: {
        id: true,
        status: true,
        createdAt: true,
        slot: {
          select: {
            startsAt: true,
            endsAt: true,
            isActive: true,
          },
        },
        coach: {
          select: {
            fullName: true,
          },
        },
      },
    }),
    programTrack
      ? prisma.leaderboardEntry.findMany({
          where: {
            track: programTrack,
            periodYear: new Date().getFullYear(),
            periodMonth: new Date().getMonth() + 1,
          },
          orderBy: { rank: "asc" },
          take: 5,
          select: {
            rank: true,
            totalPoints: true,
            isChampionOfMonth: true,
            user: {
              select: {
                fullName: true,
                avatarUrl: true,
              },
            },
            levelTier: {
              select: {
                name: true,
              },
            },
          },
        })
      : [],
    prisma.notificationDelivery.findMany({
      where: {
        userId,
        status: { in: ["QUEUED", "SENT", "READ"] },
      },
      orderBy: { id: "desc" },
      take: 3,
      select: {
        id: true,
        status: true,
        notification: {
          select: {
            title: true,
            body: true,
            type: true,
          },
        },
      },
    }),
  ]);

  return {
    user,
    profile,
    enrollment,
    subscription,
    points,
    level,
    wallet,
    foodLogs,
    waterLogs,
    bookings,
    leaderboard,
    notifications,
    derived: {
      displayName: user.fullName || user.email,
      avatarUrl: user.avatarUrl ?? profile?.profilePhotoUrl ?? null,
      programTrack,
      membershipTier: profile?.membershipTier ?? enrollment?.tier ?? null,
      remainingCalls: Math.max((wallet?.totalCallsPurchased ?? 0) - (wallet?.totalCallsUsed ?? 0), 0),
      subscriptionStatus: subscription?.status ?? "—",
      progressPercent:
        level && points
          ? level.maxPoints && level.maxPoints > level.minPoints
            ? Math.max(
                0,
                Math.min(
                  100,
                  ((points.totalPoints - level.minPoints) / (level.maxPoints - level.minPoints)) * 100,
                ),
              )
            : 100
          : 0,
    },
  };
}
