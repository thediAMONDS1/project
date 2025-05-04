import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

export function saveCargoActIn(cargo_act_in: Prisma.CargoActInCreateInput) {
  return prisma.cargoActIn.upsert({
    where: {
      id: cargo_act_in.id,
    },
    create: cargo_act_in,
    update: cargo_act_in,
  });
}
export async function getCargoActInData() {
  const cargos_act_in = await prisma.cargoActIn.findMany({
    select: {
      id: true,
    },
  });

  return cargos_act_in.map((cargo_act_in: any) => ({
    ...cargo_act_in,
  }));
}

export const cargoActInRepository = {
  saveCargoActIn,
  getCargoActInData,
};
