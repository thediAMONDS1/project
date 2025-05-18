"use server";

import { createCargoLoad } from "@/entities/main/cargo-load/server";
import { sessionService } from "@/entities/ref/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateCargoLoadFormState = {
  formData: FormData;
  errors?: Record<string, string> & {
    _errors?: string;
  };
};

const formDataSchema = z.object({
  load_date: z.coerce.date(),
  vessel_voyage_id: z.coerce.bigint().positive(),
  weight_brutto: z.coerce.number().int().positive(),
  cargo_act_in_id: z.coerce.bigint().positive(),
  shipper_id: z.coerce.bigint().positive(),
  consignee_id: z.coerce.bigint().positive(),
  add_info: z
    .string()
    .optional()
    .transform((val) =>
      val?.trim() === "" || val === undefined ? "Без комментариев" : val
    ),
});

export const createCargoLoadAction = async (
  _state: CreateCargoLoadFormState,
  formData: FormData
): Promise<CreateCargoLoadFormState> => {
  const { session } = await sessionService.verifySession();
  if (!session) {
    redirect("/sign-in");
  }

  const data = Object.fromEntries(formData.entries());
  const result = formDataSchema.safeParse({
    ...data,
    load_date: data.load_date ? new Date(data.load_date as string) : undefined,
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

  const createResult = await createCargoLoad({
    ...result.data,
    user_id: session.id,
  });

  if (createResult.type === "right") {
    redirect("/tables/cargos-load");
  }

  return {
    formData,
    errors: {
      _errors: createResult.error ?? "Failed to create CargoLoad",
    },
  };
};
