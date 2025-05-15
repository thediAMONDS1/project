import { left, right } from "@/shared/lib/either";
import { cargoActInRepository } from "../repositories/cargo-act-in";

export const createCargoActIn = async ({
  act_in_number,
  act_in_date,
  status_id,
  consignee_id,
  shipper_id,
  rail_waybill,
  user_id,
}: {
  act_in_number: number;
  act_in_date: Date;
  status_id: bigint;
  shipper_id: bigint;
  consignee_id: bigint;
  rail_waybill: number;
  user_id: string;
}) => {
  const act = await cargoActInRepository.saveCargoActIn({
    act_in_number,
    act_in_date,
    status: {
      connect: {
        id: status_id,
      },
    },
    consignee: { connect: { id: consignee_id } },
    shipper: { connect: { id: shipper_id } },
    rail_waybill,
    user: {
      connect: {
        id: user_id,
      },
    },
  });

  return right(act);
};
