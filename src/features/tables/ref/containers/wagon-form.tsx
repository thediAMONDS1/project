import TableLayout from "../../ui/table-form-layout";
import { columns } from "../columns/wagon";
import { getWagonData } from "@/entities/ref/wagon/repositories/wagon";
import { getCurrentUser } from "@/entities/user/services/get-current-user";
import { CreateWagonButton } from "@/features/dialogs/wagon/containers/dialog-form";

export default async function WagonForm() {
  const data = await getWagonData();
  const user = await getCurrentUser();

  const formComponent = user?.role !== "user" ? <CreateWagonButton /> : null;

  return (
    <TableLayout
      role={user?.role || ""}
      title={"Вагоны"}
      form_component={formComponent}
      columns={columns}
      data={data}
    />
  );
}
