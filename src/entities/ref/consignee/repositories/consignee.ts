import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

export function saveConsignee(consignee: Prisma.ref_consigneeCreateInput) {
  return prisma.ref_consignee.create({
    data: consignee,
  });
}

export async function getConsigneeData() {
  const consignees = await prisma.ref_consignee.findMany();
  return consignees;
}

export async function getConsigneeNames() {
  const consignees = await prisma.ref_consignee.findMany({
    select: {
      id: true,
      consignee_name: true,
    },
  });
  return consignees;
}

export async function deleteConsignee(id: number | bigint) {
  const numericId = typeof id === "bigint" ? Number(id) : id;

  return await prisma.ref_consignee.delete({
    where: { id: numericId },
  });
}

export const consigneeRepository = {
  saveConsignee,
  getConsigneeData,
  getConsigneeNames,
  deleteConsignee,
};
