import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "act_in_number",
    header: "Act in number",
  },
  {
    accessorKey: "act_in_date",
    header: "Act in date",
  },
  {
    accessorKey: "status_id",
    header: "Status id",
  },
  {
    accessorKey: "supplier_id",
    header: "Supplier id",
  },
  {
    accessorKey: "rail_waybill",
    header: "Rail waybill",
  },
  {
    accessorKey: "user_id",
    header: "User id",
  },
];
