import TableLayout from "../../ui/table-form-layout";

import { getShipperData } from "@/entities/ref/shipper/repositories/shipper";
import { getCurrentUser } from "@/entities/ref/user/services/get-current-user";
import { CreateShipperButton } from "@/features/dialogs/shipper/containers/dialog-form";
import { columns } from "../columns/shipper";

export default async function ShipperForm() {
  const data = await getShipperData();
  const user = await getCurrentUser();

  return (
    <TableLayout
      role={user?.role || ""}
      title={"Поставщики"}
      form_component={<CreateShipperButton />}
      columns={columns}
      data={data}
    />
  );
}
