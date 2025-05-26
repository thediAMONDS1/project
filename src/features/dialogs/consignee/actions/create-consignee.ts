"use server";

import { createConsignee } from "@/entities/ref/consignee/services/create-consignee";
import { sessionService } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateConsigneeFormState = {
  formData: FormData;
  errors?: {
    consignee_name?: string;
    add_info?: string;
    contact?: string;
    _errors?: string;
  };
};

const formDataSchema = z.object({
  consignee_name: z.string().min(1, "Название грузополучателя обязательно"),
  add_info: z
    .string()
    .optional()
    .transform((val) =>
      val?.trim() === "" || val === undefined ? "Без комментариев" : val
    ),
  contact: z.string().default(""),
});

export const createConsigneeAction = async (
  _state: CreateConsigneeFormState,
  formData: FormData
): Promise<CreateConsigneeFormState> => {
  const { session } = await sessionService.verifySession();
  if (!session) {
    redirect("/sign-in");
  }

  const data = Object.fromEntries(formData.entries());
  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    const formattedErrors = result.error.format();
    return {
      formData,
      errors: {
        consignee_name: formattedErrors.consignee_name?._errors.join(", "),
        add_info: formattedErrors.add_info?._errors.join(", "),
        contact: formattedErrors.contact?._errors.join(", "),
        _errors: formattedErrors._errors?.join(", "),
      },
    };
  }

  const createResult = await createConsignee(result.data);

  if (createResult.type === "right") {
    redirect("/tables/consignees");
  }

  return {
    formData,
    errors: {
      _errors: createResult.error ?? "Failed to create Consignee",
    },
  };
};
