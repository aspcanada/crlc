"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "crlc_resources";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getSecret() {
  const secret = process.env.RESOURCES_PAGE_PASSWORD;
  if (!secret) throw new Error("RESOURCES_PAGE_PASSWORD is not set");
  return secret;
}

function createToken(secret: string): string {
  const payload = JSON.stringify({
    v: 1,
    exp: Date.now() + MAX_AGE * 1000,
  });
  const signature = createHmac("sha256", secret)
    .update(payload)
    .digest("hex");
  return Buffer.from(`${payload}.${signature}`).toString("base64url");
}

function verifyToken(token: string, secret: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const [payload, signature] = decoded.split(".");
    if (!payload || !signature) return false;
    const expected = createHmac("sha256", secret).update(payload).digest("hex");
    if (expected.length !== signature.length || !timingSafeEqual(Buffer.from(expected, "utf8"), Buffer.from(signature, "utf8")))
      return false;
    const data = JSON.parse(payload) as { v: number; exp: number };
    return data.v === 1 && data.exp > Date.now();
  } catch {
    return false;
  }
}

export async function isResourcesAuthenticated(): Promise<boolean> {
  const secret = process.env.RESOURCES_PAGE_PASSWORD;
  if (!secret) return false;
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyToken(token, secret);
}

export async function submitResourcesPassword(formData: FormData) {
  const password = formData.get("password")?.toString();
  const secret = getSecret();
  if (!password || password !== secret) {
    return { error: "Invalid password" };
  }
  const token = createToken(secret);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: MAX_AGE,
    path: "/",
  });
  redirect("/resources");
}
