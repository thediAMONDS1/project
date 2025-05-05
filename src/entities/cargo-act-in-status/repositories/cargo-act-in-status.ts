import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";
type CreateInput = Prisma.CargoActInStatusCreateInput;
type UpdateInput = Prisma.CargoActInStatusUpdateInput;

export async function saveCargoActInStatus(
  cargo_act_in_status: Partial<CreateInput> & { id?: number }
) {
  if (cargo_act_in_status.id) {
    const { id, ...data } = cargo_act_in_status;
    return prisma.cargoActInStatus.update({
      where: { id },
      data: data as UpdateInput,
    });
  } else {
    return prisma.cargoActInStatus.create({
      data: cargo_act_in_status as CreateInput,
    });
  }
}
export async function getCargoActInStatusData() {
  const cargos_act_in_status = await prisma.cargoActInStatus.findMany({
    select: {
      id: true,
    },
  });

  return cargos_act_in_status.map((cargo_act_in_status: any) => ({
    ...cargo_act_in_status,
  }));
}

export const cargoActInStatusRepository = {
  saveCargoActInStatus,
  getCargoActInStatusData,
};
