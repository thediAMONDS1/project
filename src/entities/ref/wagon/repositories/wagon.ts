import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

export function saveWagon(wagon: Prisma.ref_wagonCreateInput) {
  return prisma.ref_wagon.create({
    data: wagon,
  });
}

export async function getWagonData() {
  const wagons = await prisma.ref_wagon.findMany();
  return wagons;
}

export async function getWagonNumber() {
  const wagons = await prisma.ref_wagon.findMany({
    select: {
      id: true,
      wagon_number: true,
    },
  });
  return wagons;
}

export const wagonRepository = {
  saveWagon,
  getWagonData,
  getWagonNumber,
};
