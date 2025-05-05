import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/vessel";
import { getVesselData } from "@/entities/vessel/repositories/vessel";
import { getCurrentUser } from "@/entities/user/services/get-current-user";

export default async function VesselVoyageForm() {
  const data = await getVesselData();
  const user = await getCurrentUser();
  console.log(user);
  return (
    <TableLayout
      role={user?.role || ""}
      title={"Vessels"}
      formcomponent={undefined}
      columns={columns}
      data={data}
    />
  );
}
