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

export const consigneeRepository = {
  saveConsignee,
  getConsigneeData,
  getConsigneeNames,
};
