"use server";

import { sessionService, editUser } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type SettingsFormState = {
  formData: FormData;
  errors?: {
    id?: string;
    login?: string;
    phone?: string;
    email?: string;
    name?: string;
    last_name?: string;
    _errors?: string;
  };
};

const formDataSchema = z.object({
  id: z.string().min(10, "Invalid user ID"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .optional(),
  email: z.string().email("Invalid email address").optional(),
  name: z.string().min(1, "Must be").optional(),
  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .optional(),
});

export const editProfileAction = async (
  state: SettingsFormState,
  formData: FormData
): Promise<SettingsFormState> => {
  const { session } = await sessionService.verifySession();
  const data = {
    id: session.id,
    phone: formData.get("phone")?.toString() || undefined,
    email: formData.get("email")?.toString() || undefined,
    name: formData.get("name")?.toString() || undefined,
    last_name: formData.get("last_name")?.toString() || undefined,
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
    if (data.phone && formattedErrors.phone) {
      errors.phone = formattedErrors.phone._errors.join(", ");
    }
    if (data.email && formattedErrors.email) {
      errors.email = formattedErrors.email._errors.join(", ");
    }
    if (data.name && formattedErrors.name) {
      errors.name = formattedErrors.name._errors.join(", ");
    }
    if (data.last_name && formattedErrors.last_name) {
      errors.last_name = formattedErrors.last_name._errors.join(", ");
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
    redirect("/profile");
  }

  return {
    formData,
    errors: {
      _errors: "Failed to update settings",
    },
  };
};
