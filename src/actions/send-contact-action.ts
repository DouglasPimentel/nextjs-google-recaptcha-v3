"use server";

import { env } from "#/config/environment";

type SendContactResponse = {
  success: boolean;
  message: string;
};

export async function sendContactAction(
  _initialState: unknown,
  formData: FormData
): Promise<SendContactResponse> {
  const name: string = formData.get("name")?.toString() ?? "";
  const email: string = formData.get("email")?.toString() ?? "";
  const subject: string = formData.get("subject")?.toString() ?? "";
  const message: string = formData.get("message")?.toString() ?? "";
  const recaptchaToken: string =
    formData.get("recaptchaToken")?.toString() ?? "";

  if (!name || !email || !subject) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  if (!recaptchaToken) {
    return {
      success: false,
      message:
        "Google reCAPTCHA token is missing. Please reload the page and try again.",
    };
  }

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    }
  );

  const data = await response.json();

  if (!data.success || data.score < 0.5 || data.action !== "submit_form") {
    return {
      success: false,
      message: "Google reCAPTCHA verification failed. Please try again.",
    };
  }

  // send data

  return {
    success: true,
    message: "Thank you! Your form has been submitted successfully.",
  };
}
