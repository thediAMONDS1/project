import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "cargo_id",
    header: "Cargo id",
  },
  {
    accessorKey: "weight_brutto",
    header: "Weight brutto",
  },
  {
    accessorKey: "weight_brutto_rest",
    header: "Weight brutto rest",
  },
  {
    accessorKey: "cargo_act_in_id",
    header: "Cargo act in id",
  },
  {
    accessorKey: "warehouse",
    header: "Warehouse",
  },
  {
    accessorKey: "storage_type_id",
    header: "Storage type id",
  },
  {
    accessorKey: "wagon_id",
    header: "Wagon id",
  },
  {
    accessorKey: "user_id",
    header: "User id",
  },
];
