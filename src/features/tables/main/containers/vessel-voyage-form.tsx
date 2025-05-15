import TableLayout from "../../ui/table-form-layout";
import { columns } from "../columns/vessel-voyage";

import { getCurrentUser } from "@/entities/ref/user/services/get-current-user";
import { getVesselVoyageData } from "@/entities/main/vessel-voyage/repositories/vessel-voyage";
import { CreateVesselVoyageButton } from "@/features/dialogs/vessel-voyage/containers/dialog-form";
import { getVesselName } from "@/entities/ref/vessel/repositories/vessel";

export default async function VesselVoyageForm() {
  const data = await getVesselVoyageData();
  const user = await getCurrentUser();

  const vessel = await getVesselName();
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Рейсы судов"}
      form_component={<CreateVesselVoyageButton vessel={vessel} />}
      columns={columns}
      data={data}
      vessel={vessel}
    />
  );
}
