import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";
type CreateInput = Prisma.CargoInCreateInput;
type UpdateInput = Prisma.CargoInUpdateInput;

export async function saveCargoIn(
  cargoin: Partial<CreateInput> & { id?: number }
) {
  const { id, ...data } = cargoin;

  if (id) {
    return prisma.cargoIn.update({
      where: { id },
      data: data as UpdateInput,
    });
  }

  return prisma.cargoIn.create({
    data: data as CreateInput,
  });
}

export async function getCargoInData() {
  const cargos_in = await prisma.cargoIn.findMany({
    select: {
      id: true,
    },
  });

  return cargos_in.map((cargo_in: any) => ({
    ...cargo_in,
  }));
}

export const cargoInRepository = {
  saveCargoIn,
  getCargoInData,
};
