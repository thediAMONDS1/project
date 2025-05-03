"use server";

import { sessionService, editUser } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type SettingsFormState = {
  formData: FormData;
  errors?: {
    id?: string;
    theme?: string;
    language?: string;
    _errors?: string;
  };
};

const formDataSchema = z.object({
  id: z.string().min(10, "Invalid user ID"),
  theme: z.enum(["light", "dark"]).optional(),
  language: z.enum(["en", "ru"]).optional(),
});

export const editSettingsAction = async (
  state: SettingsFormState,
  formData: FormData
): Promise<SettingsFormState> => {
  const { session } = await sessionService.verifySession();
  const data = {
    id: session.id,
    theme: formData.get("theme")?.toString() || undefined,
    language: formData.get("language")?.toString() || undefined,
  };
  data.id = session.id;
  const result = formDataSchema.safeParse(data);
  console.log(data);
  console.log(result);

  if (!result.success) {
    const formattedErrors = result.error.format();
    const errors: SettingsFormState["errors"] = {};

    if (data.id && formattedErrors.id) {
      errors.id = formattedErrors.id._errors.join(", ");
    }
    if (data.theme && formattedErrors.theme) {
      errors.theme = formattedErrors.theme._errors.join(", ");
    }
    if (data.language && formattedErrors.language) {
      errors.language = formattedErrors.language._errors.join(", ");
    }
    if (formattedErrors._errors) {
      errors._errors = formattedErrors._errors.join(", ");
    }

    return {
      formData,
      errors: Object.keys(errors).length > 0 ? errors : undefined,
    };
  }

  const updateResult = await editUser(result.data);

  if (updateResult.type === "right") {
    redirect("/account-settings");
  }

  return {
    formData,
    errors: {
      _errors: "Failed to update account settings",
    },
  };
};
