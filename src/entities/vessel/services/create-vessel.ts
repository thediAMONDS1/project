import { right } from "@/shared/lib/either";
import { vesselRepository } from "../repositories/vessel";

export const createVessel = async ({
  vessel_name,
}: {
  vessel_name: string;
}) => {
  const vessel = await vesselRepository.saveVessel({
    vessel_name,
  });

  return right(vessel);
};
