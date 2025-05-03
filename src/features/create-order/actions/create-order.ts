"use server";

import { createOrder } from "@/entities/order/server";
import { sessionService } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateOrderFormState = {
  formData: FormData;
  errors?: {
    type?: string;
    weight?: string;
    departure_point?: string;
    destination_point?: string;
    departure_date?: string;
    arrival_date?: string;
    status?: string;
    carrier?: string;
    _errors?: string;
  };
};

const formDataSchema = z.object({
  type: z.string().min(3, "Type must be at least 3 characters"),
  weight: z.number().positive("Weight must be a positive number").optional(),
  departure_point: z
    .string()
    .min(3, "Departure point must be at least 3 characters"),
  destination_point: z
    .string()
    .min(3, "Destination point must be at least 3 characters"),
  departure_date: z
    .date()
    .max(new Date("9999-12-31"), "Date must be correct ('DD-MM-YYYY')")
    .optional(),
  arrival_date: z
    .date()
    .max(new Date("9999-12-31"), "Date must be correct ('DD-MM-YYYY')")
    .optional(),
  status: z.string().min(3, "Status must be at least 3 characters").optional(),
  carrier: z
    .string()
    .min(3, "Carrier must be at least 3 characters")
    .optional(),
  created_by: z.string(), // Пользователь, создавший заказ
  created_at: z.date(), // Время создания заказа
});

export const createOrderAction = async (
  state: CreateOrderFormState,
  formData: FormData
): Promise<CreateOrderFormState> => {
  const { session } = await sessionService.verifySession();
  if (!session) {
    // Если сессия не найдена, перенаправляем на страницу входа
    redirect("/sign-in");
    return {
      formData,
      errors: {
        _errors: "Session not found. Please log in.",
      },
    };
  }

  // Извлекаем данные пользователя из сессии
  const userData = {
    created_by: session.login, // Логин пользователя
    created_at: new Date(), // Текущее время
  };

  const data = Object.fromEntries(formData.entries());

  // Преобразуем данные и добавляем информацию о пользователе
  const result = formDataSchema.safeParse({
    ...data,
    weight:
      data.weight && !isNaN(Number(data.weight))
        ? parseFloat(data.weight as string)
        : undefined,
    departure_date: data.departure_date
      ? new Date(data.departure_date as string)
      : undefined,
    arrival_date: data.arrival_date
      ? new Date(data.arrival_date as string)
      : undefined,
    status: data.status ?? undefined,
    carrier: data.carrier ?? undefined,
    created_by: userData.created_by,
    created_at: userData.created_at,
  });

  if (!result.success) {
    const formattedErrors = result.error.format();
    return {
      formData,
      errors: {
        type: formattedErrors.type?._errors.join(", "),
        weight: formattedErrors.weight?._errors.join(", "),
        departure_point: formattedErrors.departure_point?._errors.join(", "),
        destination_point:
          formattedErrors.destination_point?._errors.join(", "),
        departure_date: formattedErrors.departure_date?._errors.join(", "),
        arrival_date: formattedErrors.arrival_date?._errors.join(", "),
        status: formattedErrors.status?._errors.join(", "),
        carrier: formattedErrors.carrier?._errors.join(", "),
        _errors: formattedErrors._errors?.join(", "),
      },
    };
  }

  const createOrderResult = await createOrder(result.data);
  if (createOrderResult.type === "right") {
    redirect("/my-orders");
  }

  return {
    formData,
    errors: {
      _errors: createOrderResult.error,
    },
  };
};
