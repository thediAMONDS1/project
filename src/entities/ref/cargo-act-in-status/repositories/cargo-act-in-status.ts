import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

type CreateInput = Prisma.ref_cargo_act_in_statusCreateInput;
type UpdateInput = Prisma.ref_cargo_act_in_statusUpdateInput;

export async function saveCargoActInStatus(
  cargo_act_in_status: Partial<CreateInput> & { id?: number }
) {
  if (cargo_act_in_status.id) {
    const { id, ...data } = cargo_act_in_status;
    return prisma.ref_cargo_act_in_status.update({
      where: { id },
      data: data as UpdateInput,
    });
  } else {
    return prisma.ref_cargo_act_in_status.create({
      data: cargo_act_in_status as CreateInput,
    });
  }
}

export async function getCargoActInStatusData() {
  const cargos_act_in_status = await prisma.ref_cargo_act_in_status.findMany({
    select: {
      id: true,
      status_name: true,
    },
  });

  return cargos_act_in_status.map((cargo_act_in_status) => ({
    ...cargo_act_in_status,
  }));
}

export const cargoActInStatusRepository = {
  saveCargoActInStatus,
  getCargoActInStatusData,
};
