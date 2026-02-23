"use server";

import { Resend } from "resend";

export type MentorState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitMentorProposal(
  _prev: MentorState,
  formData: FormData,
): Promise<MentorState> {
  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const proposal = (formData.get("proposal") as string | null)?.trim();

  if (!name || !email || !proposal) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const phone = (formData.get("phone") as string | null)?.trim() ?? "—";
  const skills = (formData.get("skills") as string | null)?.trim() ?? "—";
  const ageGroups = formData.getAll("ageGroups").join(", ") || "—";
  const sessions = (formData.get("sessions") as string | null)?.trim() ?? "—";
  const availability = (formData.get("availability") as string | null)?.trim() ?? "—";
  const referral = (formData.get("referral") as string | null)?.trim() ?? "—";

  const to = process.env.CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (to && apiKey) {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "CRLC Website <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `[CRLC Mentor] ${name} — ${skills}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Skills / Passion: ${skills}`,
        `Age groups: ${ageGroups}`,
        `Sessions: ${sessions}`,
        `Availability: ${availability}`,
        ``,
        `Proposal:`,
        proposal,
        ``,
        `Referrals: ${referral}`,
      ].join("\n"),
    });
  } else {
    console.log("[Mentor — no RESEND_API_KEY] →", to, { name, email, skills, proposal });
  }

  return { status: "success" };
}
