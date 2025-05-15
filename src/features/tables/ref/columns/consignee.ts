import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "consignee_name",
    header: "Название грузополучателя",
  },
  {
    accessorKey: "contact",
    header: "Контакт",
  },
  {
    accessorKey: "add_info",
    header: "Доп. информация",
  },
  {
    accessorKey: "user_id",
    header: "ID пользователя",
  },
];
