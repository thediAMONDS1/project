import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/wagon";
import { getWagonData } from "@/entities/wagon/repositories/wagon";
import { getCurrentUser } from "@/entities/user/services/get-current-user";

export default async function WagonForm() {
  const data = await getWagonData();
  const user = await getCurrentUser();
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Wagons"}
      form_component={undefined}
      columns={columns}
      data={data}
    />
  );
}
