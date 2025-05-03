import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

export function saveOrder(order: Prisma.OrderCreateInput) {
  return prisma.order.upsert({
    where: {
      id: order.id,
    },
    create: order,
    update: order,
  });
}
export async function getMyOrderData(login: string) {
  const orders = await prisma.order.findMany({
    where: {
      created_by: login,
    },
    select: {
      id: true,
      type: true,
      weight: true,
      departure_point: true,
      destination_point: true,
      departure_date: true,
      arrival_date: true,
      status: true,
      carrier: true,
    },
  });

  return orders.map((order) => ({
    ...order,
    departure_date: order.departure_date
      ? order.departure_date.toString().split("T")[0]
      : null,
    arrival_date: order.arrival_date
      ? order.arrival_date.toString().split("T")[0]
      : null,
  }));
}
export async function getOrderData() {
  const orders = await prisma.order.findMany({
    select: {
      id: true,
      type: true,
      weight: true,
      departure_point: true,
      destination_point: true,
      departure_date: true,
      arrival_date: true,
      status: true,
      carrier: true,
    },
  });

  return orders.map((order) => ({
    ...order,
    departure_date: order.departure_date
      ? order.departure_date.toString().split("T")[0]
      : null,
    arrival_date: order.arrival_date
      ? order.arrival_date.toString().split("T")[0]
      : null,
  }));
}

export async function getOrder() {
  const orders = await prisma.order.findMany({
    select: {
      id: true,
      type: true,
      weight: true,
      departure_point: true,
      destination_point: true,
      departure_date: true,
      arrival_date: true,
      status: true,
      carrier: true,
    },
  });

  return orders.map(({ type, departure_point, destination_point }) => ({
    type,
    departure_point,
    destination_point,
  }));
}

export const orderRepository = {
  saveOrder,
  getOrderData,
  getOrder,
  getMyOrderData,
};
