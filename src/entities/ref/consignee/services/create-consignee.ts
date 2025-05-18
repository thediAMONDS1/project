import { right } from "@/shared/lib/either";
import { consigneeRepository } from "../repositories/consignee";

export const createConsignee = async ({
  consignee_name,
  add_info,
  contact,
}: {
  consignee_name: string;
  add_info: string;
  contact: string;
}) => {
  const consignee = await consigneeRepository.saveConsignee({
    consignee_name,
    add_info,
    contact,
  });

  return right(consignee);
};
