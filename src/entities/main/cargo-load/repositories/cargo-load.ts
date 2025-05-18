import { Prisma } from "@prisma/client";
import { prisma } from "@/shared/lib/db";

type CreateInput = Prisma.cargo_loadCreateInput;
type UpdateInput = Prisma.cargo_loadUpdateInput;

export async function saveCargoLoad(
  cargoLoad: Partial<CreateInput> & { id?: number }
) {
  if (cargoLoad.id) {
    const { id, ...data } = cargoLoad;
    return prisma.cargo_load.update({
      where: { id },
      data: data as UpdateInput,
    });
  } else {
    return prisma.cargo_load.create({
      data: cargoLoad as CreateInput,
    });
  }
}

export async function getCargoLoadData() {
  const cargos = await prisma.cargo_load.findMany({
    select: {
      id: true,
      load_date: true,
      vessel_voyage_id: true,
      weight_brutto: true,
      cargo_act_in_id: true,
      shipper_id: true,
      consignee_id: true,
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
export async function updateCargoLoad(id: bigint, data: UpdateInput) {
  return prisma.cargo_load.update({
    where: { id: Number(id) },
    data,
  });
}
export async function deleteCargoLoad(id: number | bigint) {
  const numericId = typeof id === "bigint" ? Number(id) : id;
  return await prisma.cargo_load.delete({
    where: { id: numericId },
  });
}

export const cargoLoadRepository = {
  saveCargoLoad,
  getCargoLoadData,
  updateCargoLoad,
  deleteCargoLoad,
};
