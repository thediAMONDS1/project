import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

export function saveWarehouse(warehouse: Prisma.ref_warehouseCreateInput) {
  return prisma.ref_warehouse.create({
    data: warehouse,
  });
}

export async function getWarehouseData() {
  const warehouses = await prisma.ref_warehouse.findMany();
  return warehouses;
}

export async function getWarehouseNumber() {
  const warehouses = await prisma.ref_warehouse.findMany({
    select: {
      id: true,
      warehouse_number: true,
    },
  });
  return warehouses;
}

export async function deleteWarehouse(id: number | bigint) {
  const numericId = typeof id === "bigint" ? Number(id) : id;
  return await prisma.ref_warehouse.delete({
    where: { id: numericId },
  });
}

export const warehouseRepository = {
  saveWarehouse,
  getWarehouseData,
  getWarehouseNumber,
  deleteWarehouse,
};
