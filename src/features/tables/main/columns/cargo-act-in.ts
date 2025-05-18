import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "act_in_number",
    header: "Номер акта поступления",
  },
  {
    accessorKey: "act_in_date",
    header: "Дата акта поступления",
  },
  {
    accessorKey: "status_id",
    header: "ID статуса",
  },
  {
    accessorKey: "shipper_id",
    header: "ID грузоотправителя",
  },
  {
    accessorKey: "consignee_id",
    header: "ID грузополучателя",
  },
  {
    accessorKey: "rail_waybill",
    header: "Железнодорожная накладная",
  },
  {
    accessorKey: "user_id",
    header: "ID пользователя",
  },
];
