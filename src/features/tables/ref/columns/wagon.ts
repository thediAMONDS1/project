import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "wagon_number",
    header: "Номер вагона",
  },
  {
    accessorKey: "wagon_type",
    header: "Тип вагона",
  },
  {
    accessorKey: "add_info",
    header: "Доп информация",
  },
];
