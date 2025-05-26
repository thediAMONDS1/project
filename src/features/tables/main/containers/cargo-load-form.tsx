import TableLayout from "../../ui/table-form-layout";
import { columns } from "../columns/cargo-load";
import { getCargoLoadData } from "@/entities/main/cargo-load/repositories/cargo-load";
import { getCurrentUser } from "@/entities/user/services/get-current-user";
import { CargoLoadButton } from "@/features/dialogs/cargo-load/containers/dialog-form";

import { getCargoActInNumber } from "@/entities/main/cargo-act-in/repositories/cargo-act-in";
import { getVesselVoyageId } from "@/entities/main/vessel-voyage/repositories/vessel-voyage";
import { getShipperNames } from "@/entities/ref/shipper/repositories/shipper";
import { getConsigneeNames } from "@/entities/ref/consignee/repositories/consignee";

export default async function CargoLoadForm() {
  const data = await getCargoLoadData();
  const user = await getCurrentUser();

  const vessel_voyage = await getVesselVoyageId();
  const cargo_act_in = await getCargoActInNumber();
  const shipper = await getShipperNames();
  const consignee = await getConsigneeNames();
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Отгрузка грузов"}
      form_component={
        <CargoLoadButton
          vessel_voyage={vessel_voyage}
          cargo_act_in={cargo_act_in}
          shipper={shipper}
          consignee={consignee}
        />
      }
      columns={columns}
      data={data}
      cargo_act_in={cargo_act_in}
      shipper={shipper}
      consignee={consignee}
    />
  );
}
