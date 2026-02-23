"use server";

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

  // In production, send an email via Resend / Nodemailer / etc.
  // For now, log and return success so families can confirm receipt.
  console.log("[Enrollment inquiry]", {
    parentName,
    email,
    phone: formData.get("phone"),
    children,
    message: formData.get("notes"),
    submittedAt: new Date().toISOString(),
  });

  return { status: "success" };
}
