import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "cargo_name",
    header: "Наименование груза",
  },
  {
    accessorKey: "add_info",
    header: "Доп информация",
  },
];
