import { left, right } from "@/shared/lib/either";
import cuid from "cuid";
import { orderRepository } from "../repositories/order";

export const createOrder = async ({
  type,
  weight = 0,
  departure_point,
  destination_point,
  departure_date = new Date(),
  arrival_date = new Date(),
  status = "",
  carrier = "",
  created_by,
  created_at = new Date(),
}: {
  type: string;
  weight?: number;
  departure_point: string;
  destination_point: string;
  departure_date?: Date;
  arrival_date?: Date;
  status?: string;
  carrier?: string;
  created_by: string;
  created_at: Date;
}) => {
  const order = await orderRepository.saveOrder({
    id: cuid(),
    type,
    weight,
    departure_point,
    destination_point,
    departure_date: departure_date.toISOString(),
    arrival_date: arrival_date.toISOString(),
    status,
    carrier,
    created_by,
    created_at: created_at.toISOString(),
  });

  return right(order);
};
