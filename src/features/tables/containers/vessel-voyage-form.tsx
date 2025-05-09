import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/vessel-voyage";

import { getCurrentUser } from "@/entities/user/services/get-current-user";
import { getVesselVoyageData } from "@/entities/vessel-voyage/repositories/vessel-voyage";

export default async function VesselVoyageForm() {
  const data = await getVesselVoyageData();
  const user = await getCurrentUser();

  return (
    <TableLayout
      role={user?.role || ""}
      title={"Vessels voyage"}
      form_component={undefined}
      columns={columns}
      data={data}
    />
  );
}
