import { right } from "@/shared/lib/either";
import { cargoLoadRepository } from "../repositories/cargo-load";

export const createCargoLoad = async ({
  vessel_voyage_id,
  weight_brutto,
  cargo_act_in_id,
  shipper_id,
  consignee_id,
  user_id,
  add_info,
}: {
  vessel_voyage_id: number;
  weight_brutto: number;
  cargo_act_in_id: bigint;
  shipper_id: bigint;
  consignee_id: bigint;
  user_id: string;
  add_info: string;
}) => {
  const cargo_load = await cargoLoadRepository.saveCargoLoad({
    load_date: new Date(),
    weight_brutto,
    shipper: { connect: { id: shipper_id } },
    consignee: { connect: { id: consignee_id } },
    vessel_voyage: {
      connect: {
        id: vessel_voyage_id,
      },
    },
    cargo_act_in: {
      connect: {
        id: cargo_act_in_id,
      },
    },
    user: {
      connect: {
        id: user_id,
      },
    },
    add_info,
  });

  return right(cargo_load);
};
