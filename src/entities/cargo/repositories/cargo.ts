import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

export function saveCargo(cargo: Prisma.CargoCreateInput) {
  return prisma.cargo.upsert({
    where: {
      id: cargo.id,
    },
    create: cargo,
    update: cargo,
  });
}
export async function getCargoData() {
  const cargos = await prisma.cargo.findMany({
    select: {
      id: true,
      cargo_name: true,
    },
  });

  return cargos.map((cargo) => ({
    ...cargo,
  }));
}

export const cargoRepository = {
  saveCargo,
  getCargoData,
};
