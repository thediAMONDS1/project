import { left, right } from "@/shared/lib/either";
import { cargoActInRepository } from "../repositories/cargo-act-in";

export const createCargoActIn = async ({
  cargo_act_in_name,
}: {
  cargo_act_in_name: string;
}) => {
  return right(cargo_act_in_name);
};
