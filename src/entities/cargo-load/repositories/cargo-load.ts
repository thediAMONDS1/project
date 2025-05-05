import { Prisma } from "@prisma/client";
import { prisma } from "@/shared/lib/db";

type CreateInput = Prisma.CargoLoadCreateInput;
type UpdateInput = Prisma.CargoLoadUpdateInput;

export async function saveCargoLoad(
  cargoLoad: Partial<CreateInput> & { id?: number }
) {
  if (cargoLoad.id) {
    const { id, ...data } = cargoLoad;
    return prisma.cargoLoad.update({
      where: { id },
      data: data as UpdateInput,
    });
  } else {
    return prisma.cargoLoad.create({
      data: cargoLoad as CreateInput,
    });
  }
}

export async function getCargoLoadData() {
  const cargos = await prisma.cargoLoad.findMany({
    select: {
      id: true,
    },
  });

  return cargos.map((cargo: any) => ({
    ...cargo,
  }));
}

export const cargoLoadRepository = {
  saveCargoLoad,
  getCargoLoadData,
};
