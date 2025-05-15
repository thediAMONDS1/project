import { left, right } from "@/shared/lib/either";
import { cargoActInStatusRepository } from "../repositories/cargo-act-in-status";

export const createCargoActInStatus = async ({
  status_name,
  add_info,
}: {
  status_name: string;
  add_info: string;
}) => {
  const cargo_act_in_status =
    await cargoActInStatusRepository.saveCargoActInStatus({
      status_name,
      add_info,
    });

  return right(cargo_act_in_status);
};
