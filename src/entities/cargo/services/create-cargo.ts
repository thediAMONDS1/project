import { left, right } from "@/shared/lib/either";
import { cargoRepository } from "../repositories/cargo";

export const createCargo = async ({ cargo_name }: { cargo_name: string }) => {
  const cargo = await cargoRepository.saveCargo({
    cargo_name,
  });

  return right(cargo);
};
