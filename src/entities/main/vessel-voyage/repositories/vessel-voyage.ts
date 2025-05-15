import { Prisma } from "@prisma/client";
import { prisma } from "@/shared/lib/db";

type CreateInput = Prisma.vessel_voyageCreateInput;
type UpdateInput = Prisma.vessel_voyageUpdateInput;

export async function saveVesselVoyage(
  vesselVoyage: Partial<CreateInput> & { id?: number }
) {
  if (vesselVoyage.id) {
    const { id, ...data } = vesselVoyage;
    return prisma.vessel_voyage.update({
      where: { id },
      data: data as UpdateInput,
    });
  } else {
    return prisma.vessel_voyage.create({
      data: vesselVoyage as CreateInput,
    });
  }
}

export async function getVesselVoyageData() {
  const vessels_voyage = await prisma.vessel_voyage.findMany({
    select: {
      id: true,
      estimated_date_departure: true,
      vessel_id: true,
      user_id: true,
    },
  });

  return vessels_voyage.map((vessel_voyage: any) => ({
    ...vessel_voyage,
    estimated_date_departure: vessel_voyage.estimated_date_departure
      ? new Date(vessel_voyage.estimated_date_departure).toLocaleDateString(
          "ru-RU",
          {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }
        )
      : null,
  }));
}

export async function getVesselVoyageId() {
  const ids = await prisma.vessel_voyage.findMany({
    select: {
      id: true,
    },
  });

  return ids;
}

export const vesselVoyageRepository = {
  saveVesselVoyage,
  getVesselVoyageData,
  getVesselVoyageId,
};
