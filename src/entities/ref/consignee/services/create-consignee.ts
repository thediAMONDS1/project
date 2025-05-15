import { right } from "@/shared/lib/either";
import { consigneeRepository } from "../repositories/consignee";

export const createConsignee = async ({
  consignee_name,
  add_info,
  contact,
  user_id,
}: {
  consignee_name: string;
  add_info: string;
  contact: string;
  user_id: string;
}) => {
  const consignee = await consigneeRepository.saveConsignee({
    consignee_name,
    add_info,
    contact,
    user: { connect: { id: user_id } },
  });

  return right(consignee);
};
