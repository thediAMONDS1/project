import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "load_date",
    header: "Дата загрузки",
  },
  {
    accessorKey: "vessel_voyage_id",
    header: "ID рейса судна",
  },
  {
    accessorKey: "weight_brutto",
    header: "Вес брутто",
  },
  {
    accessorKey: "cargo_act_in_id",
    header: "ID акта поступления груза",
  },
  {
    accessorKey: "shipper_id",
    header: "Отправитель",
  },
  {
    accessorKey: "consignee_id",
    header: "Получатель",
  },
  {
    accessorKey: "user_id",
    header: "ID пользователя",
  },
];
