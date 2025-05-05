import { Prisma } from "@prisma/client";
import { prisma } from "@/shared/lib/db";

type CreateInput = Prisma.VesselCreateInput;
type UpdateInput = Prisma.VesselUpdateInput;

export async function saveVessel(
  vessel: Partial<CreateInput> & { id?: number }
) {
  if (vessel.id) {
    const { id, ...data } = vessel;
    return prisma.vessel.update({
      where: { id },
      data: data as UpdateInput,
    });
  } else {
    return prisma.vessel.create({
      data: vessel as CreateInput,
    });
  }
}

export async function getVesselData() {
  const vessels = await prisma.vessel.findMany({
    select: {
      id: true,
    },
  });

  return vessels.map((vessel: any) => ({
    ...vessel,
  }));
}

export const vesselRepository = {
  saveVessel,
  getVesselData,
};
