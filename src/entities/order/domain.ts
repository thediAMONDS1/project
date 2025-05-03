import { OrderId } from "@/kernel/orders";

export type OrderEntity = {
  id: OrderId;
  type: string;
  weight: number;
  departure_point: string;
  destination_point: string;
  departure_date: Date;
  arrival_date: Date;
  status: string;
  carrier: string;
};
