import TableLayout from "../../ui/table-form-layout";
import { columns } from "../columns/wagon";
import { getWagonData } from "@/entities/ref/wagon/repositories/wagon";
import { getCurrentUser } from "@/entities/ref/user/services/get-current-user";
import { CreateWagonButton } from "@/features/dialogs/wagon/containers/dialog-form";

export default async function WagonForm() {
  const data = await getWagonData();
  const user = await getCurrentUser();
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Вагоны"}
      form_component={<CreateWagonButton />}
      columns={columns}
      data={data}
    />
  );
}
