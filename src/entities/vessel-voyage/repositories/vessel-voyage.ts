import { Prisma } from "@prisma/client";
import { prisma } from "@/shared/lib/db";

type CreateInput = Prisma.VesselVoyageCreateInput;
type UpdateInput = Prisma.VesselVoyageUpdateInput;

export async function saveVesselVoyage(
  vesselVoyage: Partial<CreateInput> & { id?: number }
) {
  if (vesselVoyage.id) {
    const { id, ...data } = vesselVoyage;
    return prisma.vesselVoyage.update({
      where: { id },
      data: data as UpdateInput,
    });
  } else {
    return prisma.vesselVoyage.create({
      data: vesselVoyage as CreateInput,
    });
  }
}

export async function getVesselVoyageData() {
  const vessels_voyage = await prisma.vesselVoyage.findMany({
    select: {
      id: true,
    },
  });

  return vessels_voyage.map((vessel_voyage: any) => ({
    ...vessel_voyage,
  }));
}

export const vesselVoyageRepository = {
  saveVesselVoyage,
  getVesselVoyageData,
};
