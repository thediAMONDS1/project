import { right } from "@/shared/lib/either";
import { cargoRepository } from "../repositories/cargo";

export const createCargo = async ({
  cargo_name,
  add_info,
}: {
  cargo_name: string;
  add_info: string;
}) => {
  const cargo = await cargoRepository.saveCargo({
    cargo_name,
    add_info,
  });

  return right(cargo);
};
