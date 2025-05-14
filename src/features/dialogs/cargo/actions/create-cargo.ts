"use server";

import { createCargo } from "@/entities/cargo/server";
import { sessionService } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateCargoFormState = {
  formData: FormData;
  errors?: {
    cargo_name?: string;
    _errors?: string;
  };
};

const formDataSchema = z.object({
  cargo_name: z.string().min(3, "Cargo name must be at least 3 characters"),
});

export const createCargoAction = async (
  _state: CreateCargoFormState,
  formData: FormData
): Promise<CreateCargoFormState> => {
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
        cargo_name: formattedErrors.cargo_name?._errors.join(", "),
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
