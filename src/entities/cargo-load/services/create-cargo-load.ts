import { right } from "@/shared/lib/either";
import { cargoLoadRepository } from "../repositories/cargo-load";

export const createCargoLoad = async ({
  vessel_voyage_id,
  weight_brutto,
  cargo_act_in_id,
  shipper,
  consignee,
  user_id,
}: {
  vessel_voyage_id: number;
  weight_brutto: number;
  cargo_act_in_id: bigint;
  shipper: number;
  consignee: number;
  user_id: string;
}) => {
  const cargo_load = await cargoLoadRepository.saveCargoLoad({
    load_date: new Date(),
    weight_brutto,
    shipper,
    consignee,
    vesselVoyage: {
      connect: {
        id: vessel_voyage_id,
      },
    },
    cargoActIn: {
      connect: {
        id: cargo_act_in_id,
      },
    },
    user: {
      connect: {
        id: user_id,
      },
    },
  });

  return right(cargo_load);
};
