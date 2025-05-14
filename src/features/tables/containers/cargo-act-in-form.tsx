import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/cargo-act-in";
import { getCargoActInData } from "@/entities/cargo-act-in/repositories/cargo-act-in";
import { getCurrentUser } from "@/entities/user/services/get-current-user";
import { CreateCargoActInButton } from "@/features/dialogs/cargo-act-in/containers/dialog-form";

export default async function CargoActInForm() {
  const data = await getCargoActInData();
  const user = await getCurrentUser();

  return (
    <TableLayout
      role={user?.role || ""}
      title={"Cargos act in"}
      form_component={<CreateCargoActInButton />}
      columns={columns}
      data={data}
    />
  );
}
