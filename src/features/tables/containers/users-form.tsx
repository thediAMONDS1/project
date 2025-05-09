import { getUserData } from "@/entities/user/repositories/user";
import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/users";
import { getCurrentUser } from "@/entities/user/services/get-current-user";

export default async function UsersForm() {
  const data = await getUserData();
  const user = await getCurrentUser();

  return (
    <TableLayout
      role={user?.role || ""}
      title={"Users"}
      form_component={undefined}
      columns={columns}
      data={data}
    />
  );
}
