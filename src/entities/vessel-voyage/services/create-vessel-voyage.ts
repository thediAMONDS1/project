import { right } from "@/shared/lib/either";

import { vesselVoyageRepository } from "../repositories/vessel-voyage";

export const createVesselVoyage = async ({
  estimated_date_departure,
}: {
  vessel_voyage_id: string;
  estimated_date_departure: Date;
}) => {
  const vessel_voyage = await vesselVoyageRepository.saveVesselVoyage({
    estimated_date_departure: estimated_date_departure.toISOString(),
  });

  return right(vessel_voyage);
};
