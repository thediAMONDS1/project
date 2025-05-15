import { ConsigneeId } from "@/kernel/consignee";

export type ConsigneeEntity = {
  id: ConsigneeId;
  consignee_name: string;
  add_info: string;
  contact: string;
};
