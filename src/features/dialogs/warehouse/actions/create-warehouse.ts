"use server";

import { createWarehouse } from "@/entities/ref/warehouse/server";
import { sessionService } from "@/entities/ref/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateWarehouseFormState = {
  formData: FormData;
  errors?: {
    warehouse_number?: string;
    warehouse_type?: string;
    add_info?: string;
    _errors?: string;
  };
};

const formDataSchema = z.object({
  warehouse_number: z.coerce.number().int().positive({
    message: "Номер склада должен быть положительным целым числом",
  }),
  warehouse_type: z.string().min(1, "Тип склада обязателен"),
  add_info: z
    .string()
    .optional()
    .transform((val) =>
      val?.trim() === "" || val === undefined ? "Без комментариев" : val
    ),
});

export const createWarehouseAction = async (
  _state: CreateWarehouseFormState,
  formData: FormData
): Promise<CreateWarehouseFormState> => {
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
        warehouse_number: formattedErrors.warehouse_number?._errors.join(", "),
        warehouse_type: formattedErrors.warehouse_type?._errors.join(", "),
        _errors: formattedErrors._errors?.join(", "),
      },
    };
  }

  const createResult = await createWarehouse(result.data);

  if (createResult.type === "right") {
    redirect("/tables/warehouses");
  }

  return {
    formData,
    errors: {
      _errors: createResult.error ?? "Failed to create Warehouse",
    },
  };
};
