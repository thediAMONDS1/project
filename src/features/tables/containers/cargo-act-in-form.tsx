import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/cargo-act-in";
import { getCargoActInData } from "@/entities/cargo-act-in/repositories/cargo-act-in";

export default async function CargoActInForm() {
  const data = await getCargoActInData();
  return (
    <TableLayout
      title={"Cargos act in"}
      formcomponent={undefined}
      columns={columns}
      data={data}
    />
  );
}
