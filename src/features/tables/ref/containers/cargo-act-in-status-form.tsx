import TableLayout from "../../ui/table-form-layout";
import { columns } from "../columns/cargo-act-in-status";
import { getCargoActInStatusData } from "@/entities/ref/cargo-act-in-status/repositories/cargo-act-in-status";
import { getCurrentUser } from "@/entities/ref/user/services/get-current-user";

export default async function CargoActInStatusForm() {
  const data = await getCargoActInStatusData();
  const user = await getCurrentUser();

  return (
    <TableLayout
      role={user?.role || ""}
      title={"Статусы актов поступления"}
      form_component={undefined}
      columns={columns}
      data={data}
    />
  );
}
