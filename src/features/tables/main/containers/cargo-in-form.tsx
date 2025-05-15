import TableLayout from "../../ui/table-form-layout";
import { columns } from "../columns/cargo-in";
import { getCargoInData } from "@/entities/main/cargo-in/repositories/cargo-in";
import { getCurrentUser } from "@/entities/ref/user/services/get-current-user";
import { CreateCargoInButton } from "@/features/dialogs/cargo-in/containers/dialog-form";
import { getCargoData } from "@/entities/ref/cargo/repositories/cargo";
import { getCargoActInNumber } from "@/entities/main/cargo-act-in/repositories/cargo-act-in";
import { getWagonNumber } from "@/entities/ref/wagon/repositories/wagon";

export default async function CargoInForm() {
  const data = await getCargoInData();
  const user = await getCurrentUser();

  const cargo = await getCargoData();
  const cargo_act_in = await getCargoActInNumber();
  const wagon = await getWagonNumber();
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Прием грузов"}
      form_component={
        <CreateCargoInButton
          cargo={cargo}
          cargo_act_in={cargo_act_in}
          wagon={wagon}
        />
      }
      columns={columns}
      data={data}
      cargo={cargo}
      cargo_act_in={cargo_act_in}
      wagon={wagon}
    />
  );
}
