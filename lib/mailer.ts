import nodemailer from "nodemailer";

type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

function parseBoolean(value: string | undefined, fallback: boolean): boolean {
  if (value === undefined) {
    return fallback;
  }

  return value.toLowerCase() === "true";
}

function getTransportConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = parseBoolean(process.env.SMTP_SECURE, false);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return {
    host,
    port,
    secure,
    auth: { user, pass },
  };
}

export async function sendEmail(input: SendEmailInput): Promise<boolean> {
  const from = process.env.EMAIL_FROM;
  const transportConfig = getTransportConfig();

  if (!from || !transportConfig) {
    console.warn("Email service is not configured. Skipping email send.");
    return false;
  }

  const transporter = nodemailer.createTransport(transportConfig);

  await transporter.sendMail({
    from,
    to: input.to,
    subject: input.subject,
    text: input.text,
    html: input.html,
  });

  return true;
}

export function buildVerifyEmailLink(token: string): string {
  const baseUrl = process.env.APP_BASE_URL ?? "http://localhost:3000";
  return `${baseUrl}/verify-email?token=${encodeURIComponent(token)}`;
}

export function buildResetPasswordLink(token: string): string {
  const baseUrl = process.env.APP_BASE_URL ?? "http://localhost:3000";
  return `${baseUrl}/reset-password?token=${encodeURIComponent(token)}`;
}
