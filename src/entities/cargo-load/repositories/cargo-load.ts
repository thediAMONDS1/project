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
      load_date: true,
      vessel_voyage_id: true,
      weight_brutto: true,
      cargo_act_in_id: true,
      shipper: true,
      consignee: true,
      user_id: true,
    },
  });

  return cargos.map((cargo: any) => ({
    ...cargo,
    load_date: cargo.load_date
      ? new Date(cargo.load_date).toLocaleDateString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : null,
  }));
}

export const cargoLoadRepository = {
  saveCargoLoad,
  getCargoLoadData,
};
