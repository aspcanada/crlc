"use server";

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

  // In production, forward to cottonwoodrosesociety@gmail.com via Resend / Nodemailer.
  console.log("[Mentor proposal]", {
    name,
    email,
    phone: formData.get("phone"),
    skills: formData.get("skills"),
    proposal,
    ageGroups: formData.getAll("ageGroups"),
    sessions: formData.get("sessions"),
    availability: formData.get("availability"),
    referral: formData.get("referral"),
    submittedAt: new Date().toISOString(),
  });

  return { status: "success" };
}
