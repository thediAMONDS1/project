"use server";

import { sessionService, verifyUserPassword } from "@/entities/ref/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type SignInFormState = {
  formData: FormData;
  errors?: {
    login?: string;
    password?: string;
    _errors?: string;
  };
};

const englishOnlyPattern = /^[a-zA-Z0-9]+$/;
const englishOnlyErrorMessage = "Must contain only English letters or numbers";

const formDataSchema = z.object({
  login: z.string().min(3).regex(englishOnlyPattern, englishOnlyErrorMessage),
  password: z
    .string()
    .min(3)
    .regex(englishOnlyPattern, englishOnlyErrorMessage),
});

export const signInAction = async (
  state: SignInFormState,
  formData: FormData
): Promise<SignInFormState> => {
  const data = Object.fromEntries(formData.entries());
  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    const formatedErrors = result.error.format();
    return {
      formData,
      errors: {
        login: formatedErrors.login?._errors.join(", "),
        password: formatedErrors.password?._errors.join(", "),
        _errors: formatedErrors._errors.join(", "),
      },
    };
  }

  const verifyUserResult = await verifyUserPassword(result.data);

  if (verifyUserResult.type === "right") {
    await sessionService.addSession(verifyUserResult.value);

    redirect("/tables/cargos-in");
  }
  const errors = {
    "wrong-login-or-password": "Incorrect login or password",
  }[verifyUserResult.error];

  return {
    formData,
    errors: {
      _errors: errors,
    },
  };
};
