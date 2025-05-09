import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/cargo-in";
import { getCargoInData } from "@/entities/cargo-in/repositories/cargo-in";
import { getCurrentUser } from "@/entities/user/services/get-current-user";

export default async function CargoInForm() {
  const data = await getCargoInData();
  const user = await getCurrentUser();
  console.log(user);
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Cargos in"}
      form_component={undefined}
      columns={columns}
      data={data}
    />
  );
}
