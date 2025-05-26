"use server";

import { createVesselVoyage } from "@/entities/main/vessel-voyage/server";
import { sessionService } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateVesselVoyageFormState = {
  formData: FormData;
  errors?: Record<string, string> & {
    _errors?: string;
  };
};

const formDataSchema = z.object({
  estimated_date_departure: z.coerce.date(),
  vessel_id: z.coerce.number().int().positive(),
  add_info: z
    .string()
    .optional()
    .transform((val) =>
      val?.trim() === "" || val === undefined ? "Без комментариев" : val
    ),
});

export const createVesselVoyageAction = async (
  _state: CreateVesselVoyageFormState,
  formData: FormData
): Promise<CreateVesselVoyageFormState> => {
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

  const createResult = await createVesselVoyage({
    ...result.data,
    user_id: session.id,
  });
  if (createResult.type === "right") {
    redirect("/tables/vessels-voyage");
  }
  return {
    formData,
    errors: {
      _errors: createResult.error ?? "Failed to create VesselVoyage",
    },
  };
};
