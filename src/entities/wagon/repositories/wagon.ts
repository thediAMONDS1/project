import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

export function saveWagon(wagon: Prisma.WagonCreateInput) {
  return prisma.wagon.upsert({
    where: {
      id: wagon.id,
    },
    create: wagon,
    update: wagon,
  });
}
export async function getWagonData() {
  const wagons = await prisma.wagon.findMany();
  return wagons;
}

export const wagonRepository = {
  saveWagon,
  getWagonData,
};
