"use server";

import { createShipper } from "@/entities/ref/shipper/services/create-shipper";
import { sessionService } from "@/entities/ref/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateShipperFormState = {
  formData: FormData;
  errors?: {
    shipper_name?: string;
    add_info?: string;
    contact?: string;
    _errors?: string;
  };
};

const formDataSchema = z.object({
  shipper_name: z.string().min(1, "Shipper name is required"),
  add_info: z
    .string()
    .optional()
    .transform((val) =>
      val?.trim() === "" || val === undefined ? "No comments" : val
    ),
  contact: z.string().default(""),
});

export const createShipperAction = async (
  _state: CreateShipperFormState,
  formData: FormData
): Promise<CreateShipperFormState> => {
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
        shipper_name: formattedErrors.shipper_name?._errors.join(", "),
        add_info: formattedErrors.add_info?._errors.join(", "),
        contact: formattedErrors.contact?._errors.join(", "),
        _errors: formattedErrors._errors?.join(", "),
      },
    };
  }

  const createResult = await createShipper({
    ...result.data,
    user_id: session.id,
  });

  if (createResult.type === "right") {
    redirect("/tables/shippers");
  }

  return {
    formData,
    errors: {
      _errors: createResult.error ?? "Failed to create Shipper",
    },
  };
};
