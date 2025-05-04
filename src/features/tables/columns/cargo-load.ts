import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "load_date",
    header: "Load date",
  },
  {
    accessorKey: "vessel_voyage_id",
    header: "Vessel voyage id",
  },
  {
    accessorKey: "weight_brutto",
    header: "Weight brutto",
  },
  {
    accessorKey: "cargo_act_in_id",
    header: "Cargo act in id",
  },
  {
    accessorKey: "shipper",
    header: "Shipper",
  },
  {
    accessorKey: "consignee",
    header: "Consignee",
  },
  {
    accessorKey: "user_id",
    header: "User id",
  },
];
