"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { sessionService } from "@/entities/user/server";
import { createVessel } from "@/entities/ref/vessel/server";

export type CreateVesselFormState = {
  formData: FormData;
  errors?: {
    vessel_name?: string;
    _errors?: string;
  };
};

const formDataSchema = z.object({
  vessel_name: z.string().min(1, "Название судна обязательно"),
  add_info: z
    .string()
    .optional()
    .transform((val) =>
      val?.trim() === "" || val === undefined ? "Без комментариев" : val
    ),
});

export const createVesselAction = async (
  _state: CreateVesselFormState,
  formData: FormData
): Promise<CreateVesselFormState> => {
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
        vessel_name: formattedErrors.vessel_name?._errors.join(", "),
        _errors: formattedErrors._errors?.join(", "),
      },
    };
  }

  const createResult = await createVessel({
    ...result.data,
  });

  if (createResult.type === "right") {
    redirect("/tables/vessels");
  }

  return {
    formData,
    errors: {
      _errors: createResult.error ?? "Failed to create Vessel",
    },
  };
};
