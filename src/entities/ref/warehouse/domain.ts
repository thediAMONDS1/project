import { WarehouseId } from "@/kernel/warehouse";

export type WarehouseEntity = {
  id: WarehouseId;
  warehouse_number: number;
  warehouse_type: string;
  add_info: string;
};
