import TableLayout from "../../ui/table-form-layout";
import { columns } from "../columns/cargo-act-in";
import { getCargoActInData } from "@/entities/main/cargo-act-in/repositories/cargo-act-in";
import { getCurrentUser } from "@/entities/ref/user/services/get-current-user";
import { CreateCargoActInButton } from "@/features/dialogs/cargo-act-in/containers/dialog-form";
import { getCargoActInStatusData } from "@/entities/ref/cargo-act-in-status/repositories/cargo-act-in-status";
import { getShipperNames } from "@/entities/ref/shipper/repositories/shipper";
import { getConsigneeNames } from "@/entities/ref/consignee/repositories/consignee";

export default async function CargoActInForm() {
  const data = await getCargoActInData();
  const user = await getCurrentUser();

  const status = await getCargoActInStatusData();
  const shipper = await getShipperNames();
  const consignee = await getConsigneeNames();

  return (
    <TableLayout
      role={user?.role || ""}
      title={"Акты поступления грузов"}
      form_component={
        <CreateCargoActInButton
          status={status}
          shipper={shipper}
          consignee={consignee}
        />
      }
      columns={columns}
      data={data}
      status={status}
      shipper={shipper}
      consignee={consignee}
    />
  );
}
