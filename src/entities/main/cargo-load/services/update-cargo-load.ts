import { right, left } from "@/shared/lib/either";
import { cargoLoadRepository } from "../repositories/cargo-load";

export const updateCargoLoad = async (
  id: bigint,
  {
    vessel_voyage_id,
    weight_brutto,
    cargo_act_in_id,
    shipper_id,
    consignee_id,
    user_id,

    load_date,
  }: {
    vessel_voyage_id: bigint;
    weight_brutto: number;
    cargo_act_in_id: bigint;
    shipper_id: bigint;
    consignee_id: bigint;
    user_id: string;

    load_date: Date;
  }
) => {
  try {
    const updated = await cargoLoadRepository.updateCargoLoad(id, {
      load_date,
      weight_brutto,

      shipper: { connect: { id: shipper_id } },
      consignee: { connect: { id: consignee_id } },
      vessel_voyage: {
        connect: { id: vessel_voyage_id },
      },
      cargo_act_in: {
        connect: { id: cargo_act_in_id },
      },
      user: {
        connect: { id: user_id },
      },
    });

    return right(updated);
  } catch (e) {
    return left("Ошибка при обновлении записи.");
  }
};
