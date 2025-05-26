import TableLayout from "../../ui/table-form-layout";
import { columns } from "../columns/warehouse";
import { getWarehouseData } from "@/entities/ref/warehouse/repositories/warehouse";
import { getCurrentUser } from "@/entities/user/services/get-current-user";
import { CreateWarehouseButton } from "@/features/dialogs/warehouse/containers/dialog-form";

export default async function WarehouseForm() {
  const data = await getWarehouseData();
  const user = await getCurrentUser();

  const formComponent =
    user?.role !== "user" ? <CreateWarehouseButton /> : null;

  return (
    <TableLayout
      role={user?.role || ""}
      title={"Склады"}
      form_component={formComponent}
      columns={columns}
      data={data}
    />
  );
}
