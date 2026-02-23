"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const subject = (formData.get("subject") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const to = process.env.CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (to && apiKey) {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "CRLC Website <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `[CRLC Contact] ${subject ?? "New message"} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject ?? "—"}\n\n${message}`,
    });
  } else {
    console.log("[Contact — no RESEND_API_KEY] →", to, { name, email, subject, message });
  }

  return { status: "success" };
}
