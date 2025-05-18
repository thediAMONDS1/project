import { Prisma } from "@prisma/client";
import { prisma } from "@/shared/lib/db";

type CreateInput = Prisma.ref_vesselCreateInput;
type UpdateInput = Prisma.ref_vesselUpdateInput;

export async function saveVessel(
  vessel: Partial<CreateInput> & { id?: number }
) {
  if (vessel.id) {
    const { id, ...data } = vessel;
    return prisma.ref_vessel.update({
      where: { id },
      data: data as UpdateInput,
    });
  } else {
    return prisma.ref_vessel.create({
      data: vessel as CreateInput,
    });
  }
}

export async function getVesselName() {
  return prisma.ref_vessel.findMany({
    select: {
      id: true,
      vessel_name: true,
    },
  });
}

export async function getVesselData() {
  const vessels = await prisma.ref_vessel.findMany();
  return vessels;
}

export async function deleteVessel(id: number | bigint) {
  const numericId = typeof id === "bigint" ? Number(id) : id;
  return await prisma.ref_vessel.delete({
    where: { id: numericId },
  });
}

export const vesselRepository = {
  saveVessel,
  getVesselData,
  getVesselName,
  deleteVessel,
};
