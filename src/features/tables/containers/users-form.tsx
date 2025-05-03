import { getUserData } from "@/entities/user/repositories/user";
import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/users";

export default async function UsersForm() {
  const data = await getUserData();
  return (
    <TableLayout
      title={"Users"}
      formcomponent={undefined}
      description={"users description"}
      columns={columns}
      data={data}
    />
  );
}
