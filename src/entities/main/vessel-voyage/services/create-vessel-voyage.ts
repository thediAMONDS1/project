import { right } from "@/shared/lib/either";
import { vesselVoyageRepository } from "../repositories/vessel-voyage";

export const createVesselVoyage = async ({
  estimated_date_departure,
  vessel_id,
  user_id,
}: {
  estimated_date_departure: Date;
  vessel_id: number;
  user_id: string;
}) => {
  const vessel_voyage = await vesselVoyageRepository.saveVesselVoyage({
    estimated_date_departure,
    vessel: {
      connect: {
        id: vessel_id,
      },
    },
    user: {
      connect: {
        id: user_id,
      },
    },
  });

  return right(vessel_voyage);
};
