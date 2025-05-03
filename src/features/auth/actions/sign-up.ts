"use server";

import { createUser, sessionService } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type SignUpFormState = {
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
  login: z.string().min(5).regex(englishOnlyPattern, englishOnlyErrorMessage),
  password: z
    .string()
    .min(5)
    .regex(englishOnlyPattern, englishOnlyErrorMessage),
});
export const signUpAction = async (
  state: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> => {
  const data = Object.fromEntries(formData.entries());
  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    const formatedErrors = result.error.format();

    return {
      formData,
      errors: {
        login: formatedErrors.login?._errors.join(", "),
        password: formatedErrors.password?._errors.join(", "),
        _errors: formatedErrors._errors?.join(", "),
      },
    };
  }
  const createUserResult = await createUser(result.data);
  if (createUserResult.type === "right") {
    await sessionService.addSession(createUserResult.value);
    redirect("/profile");
  }
  const errors = {
    "user-login-exists": "User with this login already exists",
  }[createUserResult.error];
  return {
    formData,
    errors: {
      _errors: errors,
    },
  };
};
