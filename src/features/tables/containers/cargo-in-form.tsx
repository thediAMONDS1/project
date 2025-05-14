import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/cargo-in";
import { getCargoInData } from "@/entities/cargo-in/repositories/cargo-in";
import { getCurrentUser } from "@/entities/user/services/get-current-user";
import { CreateCargoInButton } from "@/features/dialogs/cargo-in/containers/dialog-form";

export default async function CargoInForm() {
  const data = await getCargoInData();
  const user = await getCurrentUser();
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Cargos in"}
      form_component={<CreateCargoInButton />}
      columns={columns}
      data={data}
    />
  );
}
