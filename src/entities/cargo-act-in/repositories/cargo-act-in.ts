import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

type CreateInput = Prisma.CargoActInCreateInput;
type UpdateInput = Prisma.CargoActInUpdateInput;

export async function saveCargoActIn(
  cargoActIn: Partial<CreateInput> & { id?: number }
) {
  const { id, ...data } = cargoActIn;

  if (id) {
    return prisma.cargoActIn.update({
      where: { id },
      data: data as UpdateInput,
    });
  }

  return prisma.cargoActIn.create({
    data: data as CreateInput,
  });
}

export async function getCargoActInData() {
  const cargosActIn = await prisma.cargoActIn.findMany({
    select: {
      id: true,
      act_in_number: true,
      act_in_date: true,
      statusId: true,
      supplier_id: true,
      rail_waybill: true,
      user_id: true,
    },
  });

  return cargosActIn.map((cargoActIn: any) => ({
    ...cargoActIn,
    act_in_date: cargoActIn.act_in_date
      ? new Date(cargoActIn.act_in_date).toLocaleDateString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : null,
  }));
}

export const cargoActInRepository = {
  saveCargoActIn,
  getCargoActInData,
};
