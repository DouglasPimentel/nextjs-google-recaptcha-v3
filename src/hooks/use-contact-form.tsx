"use client";

import React from "react";
import { env } from "#/config/environment";

import { sendContactAction } from "#/actions";

export function useContactForm() {
  const [state, formAction, pending] = React.useActionState(
    sendContactAction,
    null
  );

  const handleSubmit = React.useCallback(
    async (formData: FormData) => {
      if (!window.grecaptcha) {
        console.error("Google reCAPTCHA is not loaded");
        return;
      }

      grecaptcha.ready(async () => {
        try {
          const token = await grecaptcha.execute(
            env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY,
            {
              action: "submit_form",
            }
          );

          formData.append("recaptchaToken", token);

          React.startTransition(() => {
            formAction(formData);
          });
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error("Error executing Google reCAPTCHA: " + error.message);
          }
        }
      });
    },
    [formAction]
  );

  return {
    state,
    pending,
    handleSubmit,
  };
}
