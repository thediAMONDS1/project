import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/cargo-act-in-status";
import { getCargoActInStatusData } from "@/entities/cargo-act-in-status/repositories/cargo-act-in-status";
import { getCurrentUser } from "@/entities/user/services/get-current-user";

export default async function CargoActInStatusForm() {
  const data = await getCargoActInStatusData();
  const user = await getCurrentUser();
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Cargos act in status"}
      formcomponent={undefined}
      columns={columns}
      data={data}
    />
  );
}
