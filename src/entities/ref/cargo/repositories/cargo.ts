import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

export function saveCargo(cargo: Prisma.ref_cargoCreateInput) {
  return prisma.ref_cargo.create({
    data: {
      cargo_name: cargo.cargo_name,
      add_info: cargo.add_info,
    },
  });
}

export async function getCargoData() {
  const cargos = await prisma.ref_cargo.findMany({
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
