import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

type CreateInput = Prisma.cargo_act_inCreateInput;
type UpdateInput = Prisma.cargo_act_inUpdateInput;

export async function saveCargoActIn(
  cargoActIn: Partial<CreateInput> & { id?: number }
) {
  const { id, ...data } = cargoActIn;

  if (id) {
    return prisma.cargo_act_in.update({
      where: { id },
      data: data as UpdateInput,
    });
  }

  return prisma.cargo_act_in.create({
    data: data as CreateInput,
  });
}

export async function getCargoActInIds() {
  return prisma.cargo_act_in.findMany({
    select: {
      id: true,
    },
  });
}

export async function getCargoActInNumber() {
  return prisma.cargo_act_in.findMany({
    select: {
      id: true,
      act_in_number: true,
    },
  });
}

export async function getCargoActInData() {
  const cargosActIn = await prisma.cargo_act_in.findMany({
    select: {
      id: true,
      act_in_number: true,
      act_in_date: true,
      status_id: true,
      shipper_id: true,
      consignee_id: true,
      rail_waybill: true,
      user_id: true,
    },
  });

  return cargosActIn.map((cargoActIn) => ({
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
  getCargoActInIds,
  getCargoActInNumber,
};
