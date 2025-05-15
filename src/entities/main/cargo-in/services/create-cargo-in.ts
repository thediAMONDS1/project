import { right } from "@/shared/lib/either";
import { cargoInRepository } from "../repositories/cargo-in";

export const createCargoIn = async ({
  cargo_id,
  weight_brutto,
  weight_brutto_rest,
  cargo_act_in_id,
  warehouse,
  wagon_id,
  user_id,
  add_info,
}: {
  cargo_id: number;
  weight_brutto: number;
  weight_brutto_rest: number;
  cargo_act_in_id: number;
  warehouse: number;
  wagon_id: number;
  user_id: string;
  add_info: string;
}) => {
  const cargo_in = await cargoInRepository.saveCargoIn({
    cargo: {
      connect: {
        id: cargo_id,
      },
    },
    weight_brutto_start: weight_brutto, // вес с учетом схемы
    weight_brutto_rest,
    cargo_act_in: {
      connect: {
        id: cargo_act_in_id,
      },
    },
    warehouse,
    wagon: {
      connect: {
        id: wagon_id,
      },
    },
    user: {
      connect: {
        id: user_id,
      },
    },
    add_info,
  });

  return right(cargo_in);
};
