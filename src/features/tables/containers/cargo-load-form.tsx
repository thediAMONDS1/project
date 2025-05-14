import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/cargo-load";
import { getCargoLoadData } from "@/entities/cargo-load/repositories/cargo-load";
import { getCurrentUser } from "@/entities/user/services/get-current-user";
import { CreateCargoLoadButton } from "@/features/dialogs/cargo-load/containers/dialog-form";

export default async function CargoLoadForm() {
  const data = await getCargoLoadData();
  const user = await getCurrentUser();
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Cargos load"}
      form_component={<CreateCargoLoadButton />}
      columns={columns}
      data={data}
    />
  );
}
