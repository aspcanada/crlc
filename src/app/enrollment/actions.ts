"use server";

import { Resend } from "resend";

export type EnrollmentState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitEnrollment(
  _prev: EnrollmentState,
  formData: FormData,
): Promise<EnrollmentState> {
  const parentName = (formData.get("parentName") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const children = (formData.get("children") as string | null)?.trim();

  if (!parentName || !email || !children) {
    return {
      status: "error",
      message: "Please fill in all required fields.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const phone = (formData.get("phone") as string | null)?.trim() ?? "—";
  const notes = (formData.get("notes") as string | null)?.trim() ?? "—";

  const to = process.env.CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (to && apiKey) {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "CRLC Website <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `[CRLC Enrollment] ${parentName}`,
      text: `Parent / Guardian: ${parentName}\nEmail: ${email}\nPhone: ${phone}\nChildren: ${children}\n\nNotes:\n${notes}`,
    });
  } else {
    console.log("[Enrollment — no RESEND_API_KEY] →", to, { parentName, email, phone, children, notes });
  }

  return { status: "success" };
}
