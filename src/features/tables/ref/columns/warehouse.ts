import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "warehouse_number",
    header: "Номер склада",
  },
  {
    accessorKey: "warehouse_type",
    header: "Тип склада",
  },
  {
    accessorKey: "add_info",
    header: "Доп. информация",
  },
];
