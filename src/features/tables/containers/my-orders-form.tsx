import {
  getMyOrderData,
  getOrderData,
} from "@/entities/order/repositories/order";
import TableLayout from "../ui/table-form-layout";
import { columns } from "../columns/orders";
import { CreateOrderButton } from "@/features/create-order/containers/dialog-form";
import { sessionService } from "@/entities/user/server";

export default async function MyOrdersForm() {
  const { session } = await sessionService.verifySession();

  const data = await getMyOrderData(session.login);
  return (
    <TableLayout
      title={"My orders"}
      formcomponent={<CreateOrderButton />}
      columns={columns}
      data={data}
    />
  );
}
