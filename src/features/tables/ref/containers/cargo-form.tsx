import TableLayout from "../../ui/table-form-layout";
import { columns } from "../columns/cargo";
import { getCargoData } from "@/entities/ref/cargo/repositories/cargo";
import { getCurrentUser } from "@/entities/ref/user/services/get-current-user";
import { CreateCargoButton } from "@/features/dialogs/cargo/containers/dialog-form";

export default async function CargoForm() {
  const data = await getCargoData();
  const user = await getCurrentUser();
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Грузы"}
      form_component={<CreateCargoButton />}
      columns={columns}
      data={data}
    />
  );
}
