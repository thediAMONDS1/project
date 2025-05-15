import TableLayout from "../../ui/table-form-layout";

import { getCurrentUser } from "@/entities/ref/user/services/get-current-user";
import { CreateConsigneeButton } from "@/features/dialogs/consignee/containers/dialog-form";
import { columns } from "../columns/consignee";
import { getConsigneeData } from "@/entities/ref/consignee/repositories/consignee";

export default async function ConsigneeForm() {
  const data = await getConsigneeData();
  const user = await getCurrentUser();

  return (
    <TableLayout
      role={user?.role || ""}
      title={"Грузополучатели"}
      form_component={<CreateConsigneeButton />}
      columns={columns}
      data={data}
    />
  );
}
