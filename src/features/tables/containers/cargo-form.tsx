import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/cargo-act-in";
import { getCargoData } from "@/entities/cargo/repositories/cargo";

export default async function CargoActInForm() {
  const data = await getCargoData();
  return (
    <TableLayout
      title={"Cargos"}
      formcomponent={undefined}
      columns={columns}
      data={data}
    />
  );
}
