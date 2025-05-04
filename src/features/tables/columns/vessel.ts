import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "vessel_name",
    header: "Vessel name",
  },
  {
    accessorKey: "user_id",
    header: "User id",
  },
];
