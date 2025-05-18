"use server";

import { createWagon } from "@/entities/ref/wagon/server";
import { sessionService } from "@/entities/ref/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateWagonFormState = {
  formData: FormData;
  errors?: {
    wagon_number?: string;
    wagon_type?: string;
    add_info?: string;
    _errors?: string;
  };
};

const formDataSchema = z.object({
  wagon_number: z.coerce.number().int().positive({
    message: "Номер вагона должен быть положительным целым числом",
  }),
  wagon_type: z.string().min(1, "Тип вагона обязателен"),
  add_info: z
    .string()
    .optional()
    .transform((val) =>
      val?.trim() === "" || val === undefined ? "Без комментариев" : val
    ),
});

export const createWagonAction = async (
  _state: CreateWagonFormState,
  formData: FormData
): Promise<CreateWagonFormState> => {
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
        wagon_number: formattedErrors.wagon_number?._errors.join(", "),
        wagon_type: formattedErrors.wagon_type?._errors.join(", "),
        _errors: formattedErrors._errors?.join(", "),
      },
    };
  }

  const createResult = await createWagon(result.data);

  if (createResult.type === "right") {
    redirect("/tables/wagons");
  }

  return {
    formData,
    errors: {
      _errors: createResult.error ?? "Failed to create Wagon",
    },
  };
};
