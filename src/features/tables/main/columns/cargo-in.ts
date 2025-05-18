import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "cargo_id",
    header: "ID груза",
  },
  {
    accessorKey: "weight_brutto_start",
    header: "Вес",
  },
  {
    accessorKey: "weight_brutto_rest",
    header: "Остаток веса",
  },
  {
    accessorKey: "cargo_act_in_id",
    header: "ID акта поступления груза",
  },
  {
    accessorKey: "warehouse",
    header: "Склад",
  },
  {
    accessorKey: "wagon_id",
    header: "ID вагона",
  },
  {
    accessorKey: "user_id",
    header: "ID пользователя",
  },
];
