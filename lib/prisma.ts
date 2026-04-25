import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

declare global {
  var prisma: PrismaClient | undefined;
  var pgPool: Pool | undefined;
  var prismaAdapter: PrismaPg | undefined;
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is missing in environment variables.");
}

const pool =
  global.pgPool ??
  new Pool({
    connectionString,
    max: 10,
    connectionTimeoutMillis: 10_000,
    idleTimeoutMillis: 30_000,
  });

const adapter = global.prismaAdapter ?? new PrismaPg(pool);

export const prisma = global.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  global.pgPool = pool;
  global.prismaAdapter = adapter;
  global.prisma = prisma;
}
