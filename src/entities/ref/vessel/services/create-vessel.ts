import { right } from "@/shared/lib/either";
import { vesselRepository } from "../repositories/vessel";

export const createVessel = async ({
  vessel_name,
  user_id,
  add_info,
}: {
  vessel_name: string;
  user_id: string;
  add_info: string;
}) => {
  const vessel = await vesselRepository.saveVessel({
    vessel_name,
    user: {
      connect: {
        id: user_id,
      },
    },
    add_info,
  });

  return right(vessel);
};
