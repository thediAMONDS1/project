import { left, right } from "@/shared/lib/either";
import { cargoActInStatusRepository } from "../repositories/cargo-act-in-status";

export const createCargoActInStatus = async ({
  status_name,
}: {
  status_name: string;
}) => {
  const cargo_act_in_status =
    await cargoActInStatusRepository.saveCargoActInStatus({
      status_name,
    });

  return right(cargo_act_in_status);
};
