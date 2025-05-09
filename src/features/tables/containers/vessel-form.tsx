import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/vessel";
import { getVesselData } from "@/entities/vessel/repositories/vessel";
import { getCurrentUser } from "@/entities/user/services/get-current-user";

export default async function VesselVoyageForm() {
  const data = await getVesselData();
  const user = await getCurrentUser();

  return (
    <TableLayout
      role={user?.role || ""}
      title={"Vessels"}
      form_component={undefined}
      columns={columns}
      data={data}
    />
  );
}
