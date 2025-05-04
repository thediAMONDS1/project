import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "wagon_number",
    header: "Wagon number",
  },
  {
    accessorKey: "wagon_type",
    header: "Wagon type",
  },
];
