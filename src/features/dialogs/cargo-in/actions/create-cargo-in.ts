"use server";

import { createCargoIn } from "@/entities/main/cargo-in/server";
import { sessionService } from "@/entities/ref/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateCargoInFormState = {
  formData: FormData;
  errors?: Record<string, string> & {
    _errors?: string;
  };
};

const formDataSchema = z.object({
  cargo_id: z.coerce.number().int().positive(),
  weight_brutto: z.coerce.number().int().positive(),
  weight_brutto_rest: z.coerce.number().int().nonnegative(),
  cargo_act_in_id: z.coerce.number().int().positive(),
  warehouse_id: z.coerce.number().int(),
  wagon_id: z.coerce.number().int().positive(),
  add_info: z
    .string()
    .optional()
    .transform((val) =>
      val?.trim() === "" || val === undefined ? "Без комментариев" : val
    ),
});

export const createCargoInAction = async (
  _state: CreateCargoInFormState,
  formData: FormData
): Promise<CreateCargoInFormState> => {
  const { session } = await sessionService.verifySession();
  if (!session) {
    redirect("/sign-in");
  }

  const data = Object.fromEntries(formData.entries());
  const result = formDataSchema.safeParse(data);

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

  const createResult = await createCargoIn({
    ...result.data,
    user_id: session.id,
  });
  if (createResult.type === "right") {
    redirect("/tables/cargos-in");
  }

  return {
    formData,
    errors: {
      _errors: createResult.error ?? "Failed to create CargoIn",
    },
  };
};
