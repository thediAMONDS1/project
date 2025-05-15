import { right } from "@/shared/lib/either";
import { warehouseRepository } from "../repositories/warehouse";

export const createWarehouse = async ({
  warehouse_number,
  warehouse_type,
  add_info,
}: {
  warehouse_number: number;
  warehouse_type: string;
  add_info: string;
}) => {
  const warehouse = await warehouseRepository.saveWarehouse({
    warehouse_number,
    warehouse_type,
    add_info,
  });

  return right(warehouse);
};
