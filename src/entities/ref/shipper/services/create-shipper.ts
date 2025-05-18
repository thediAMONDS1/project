import { right } from "@/shared/lib/either";
import { shipperRepository } from "../repositories/shipper";

export const createShipper = async ({
  shipper_name,
  add_info,
  contact,
}: {
  shipper_name: string;
  add_info: string;
  contact: string;
}) => {
  const shipper = await shipperRepository.saveShipper({
    shipper_name,
    add_info,
    contact,
  });

  return right(shipper);
};
