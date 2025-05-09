import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/cargo-load";
import { getCargoLoadData } from "@/entities/cargo-load/repositories/cargo-load";
import { getCurrentUser } from "@/entities/user/services/get-current-user";

export default async function CargoLoadForm() {
  const data = await getCargoLoadData();
  const user = await getCurrentUser();
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Cargos load"}
      form_component={undefined}
      columns={columns}
      data={data}
    />
  );
}
