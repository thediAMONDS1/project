import TableLayout from "../../ui/table-form-layout";
import { columns } from "../columns/vessel";
import { getVesselData } from "@/entities/ref/vessel/repositories/vessel";
import { getCurrentUser } from "@/entities/ref/user/services/get-current-user";
import { CreateVesselButton } from "@/features/dialogs/vessel/containers/dialog-form";

export default async function VesselVoyageForm() {
  const data = await getVesselData();
  const user = await getCurrentUser();

  return (
    <TableLayout
      role={user?.role || ""}
      title={"Судна"}
      form_component={<CreateVesselButton />}
      columns={columns}
      data={data}
    />
  );
}
