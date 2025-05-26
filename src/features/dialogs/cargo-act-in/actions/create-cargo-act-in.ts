"use server";

import { createCargoActIn } from "@/entities/main/cargo-act-in/server";
import { sessionService } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateCargoActInFormState = {
  formData: FormData;
  errors?: Record<string, string> & {
    _errors?: string;
  };
};

const formDataSchema = z.object({
  act_in_number: z.coerce.number().int().positive(),
  act_in_date: z.coerce.date(),
  status_id: z.coerce.bigint(),
  shipper_id: z.coerce.bigint(),
  consignee_id: z.coerce.bigint(),
  rail_waybill: z.coerce.number().int().positive(),
  add_info: z
    .string()
    .optional()
    .transform((val) =>
      val?.trim() === "" || val === undefined ? "Без комментариев" : val
    ),
});

export const createCargoActInAction = async (
  _state: CreateCargoActInFormState,
  formData: FormData
): Promise<CreateCargoActInFormState> => {
  const { session } = await sessionService.verifySession();
  if (!session) redirect("/sign-in");

  const data = Object.fromEntries(formData.entries());
  const result = formDataSchema.safeParse({
    ...data,
    act_in_date: data.act_in_date
      ? new Date(data.act_in_date as string)
      : undefined,
  });

  if (!result.success) {
    const formattedErrors = result.error.format();
    const errors: Record<string, string> = {};
    for (const key in formattedErrors) {
      const field = formattedErrors[key as keyof typeof formattedErrors];
      if (field && "_errors" in field) {
        errors[key] = field._errors.join(", ");
      }
    }
    return {
      formData,
      errors,
    };
  }

  const createResult = await createCargoActIn({
    ...result.data,
    user_id: session.id,
  });

  if (createResult.type === "right") {
    redirect("/tables/cargos-act-in");
  }

  return {
    formData,
    errors: {
      _errors: createResult.error ?? "Failed to create CargoActIn",
    },
  };
};
