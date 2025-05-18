import { right } from "@/shared/lib/either";
import { vesselRepository } from "../repositories/vessel";

export const createVessel = async ({
  vessel_name,

  add_info,
}: {
  vessel_name: string;

  add_info: string;
}) => {
  const vessel = await vesselRepository.saveVessel({
    vessel_name,

    add_info,
  });

  return right(vessel);
};
