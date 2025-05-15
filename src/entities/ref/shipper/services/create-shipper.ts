import { right } from "@/shared/lib/either";
import { shipperRepository } from "../repositories/shipper";

export const createShipper = async ({
  shipper_name,
  add_info,
  contact,
  user_id,
}: {
  shipper_name: string;
  add_info: string;
  contact: string;
  user_id: string;
}) => {
  const shipper = await shipperRepository.saveShipper({
    shipper_name,
    add_info,
    contact,
    user: { connect: { id: user_id } },
  });

  return right(shipper);
};
