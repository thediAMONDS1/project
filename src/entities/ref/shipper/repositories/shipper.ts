import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

export function saveShipper(shipper: Prisma.ref_shipperCreateInput) {
  return prisma.ref_shipper.create({
    data: shipper,
  });
}

export async function getShipperData() {
  const shippers = await prisma.ref_shipper.findMany();
  return shippers;
}

export async function getShipperNames() {
  const shippers = await prisma.ref_shipper.findMany({
    select: {
      id: true,
      shipper_name: true,
    },
  });
  return shippers;
}

export async function deleteShipper(id: number | bigint) {
  const numericId = typeof id === "bigint" ? Number(id) : id;
  return await prisma.ref_shipper.delete({
    where: { id: numericId },
  });
}

export const shipperRepository = {
  saveShipper,
  getShipperData,
  getShipperNames,
  deleteShipper,
};
