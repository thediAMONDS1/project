import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "shipper_name",
    header: "Название поставщика",
  },
  {
    accessorKey: "contact",
    header: "Контакт",
  },
  {
    accessorKey: "add_info",
    header: "Доп. информация",
  },
];
