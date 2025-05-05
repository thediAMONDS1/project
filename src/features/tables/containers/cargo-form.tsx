import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/cargo";
import { getCargoData } from "@/entities/cargo/repositories/cargo";
import { getCurrentUser } from "@/entities/user/services/get-current-user";

export default async function CargoForm() {
  const data = await getCargoData();
  const user = await getCurrentUser();
  console.log(user);
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Cargos"}
      formcomponent={undefined}
      columns={columns}
      data={data}
    />
  );
}
