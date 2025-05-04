import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "estimated_date_departure",
    header: "Estimated date departure",
  },
  {
    accessorKey: "vessel_id",
    header: "Vessel id",
  },
  {
    accessorKey: "user_id",
    header: "User id",
  },
];
