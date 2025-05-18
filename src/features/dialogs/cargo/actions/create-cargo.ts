"use server";

import { createCargo } from "@/entities/ref/cargo/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateCargoFormState = {
  formData: FormData;
  errors?: {
    cargo_name?: string;
    add_info?: string;
    _errors?: string;
  };
};

const formDataSchema = z.object({
  cargo_name: z
    .string()
    .min(3, "Название груза должно содержать минимум 3 символа"),
  add_info: z.string().default(""),
});

export const createCargoAction = async (
  _state: CreateCargoFormState,
  formData: FormData
): Promise<CreateCargoFormState> => {
  const data = Object.fromEntries(formData.entries());

  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    const formattedErrors = result.error.format();
    return {
      formData,
      errors: {
        cargo_name: formattedErrors.cargo_name?._errors.join(", "),
        add_info: formattedErrors.add_info?._errors?.join(", "),
        _errors: formattedErrors._errors?.join(", "),
      },
    };
  }

  const createResult = await createCargo(result.data);

  if (createResult.type === "right") {
    redirect("/tables/cargos");
  }

  return {
    formData,
    errors: {
      _errors: createResult.error,
    },
  };
};
