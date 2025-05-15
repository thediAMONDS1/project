import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

type CreateInput = Prisma.cargo_inCreateInput;
type UpdateInput = Prisma.cargo_inUpdateInput;

export async function saveCargoIn(
  cargoin: Partial<CreateInput> & { id?: number }
) {
  const { id, ...data } = cargoin;

  if (id) {
    return prisma.cargo_in.update({
      where: { id },
      data: data as UpdateInput,
    });
  }

  return prisma.cargo_in.create({
    data: data as CreateInput,
  });
}

export async function getCargoInData() {
  const cargos_in = await prisma.cargo_in.findMany({
    select: {
      id: true,
      cargo_id: true,
      weight_brutto_start: true,
      weight_brutto_rest: true,
      cargo_act_in_id: true,
      warehouse: true,
      wagon_id: true,
      user_id: true,
    },
  });

  return cargos_in.map((cargo_in) => ({
    ...cargo_in,
  }));
}

export const cargoInRepository = {
  saveCargoIn,
  getCargoInData,
};
