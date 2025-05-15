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
    accessorKey: "weight_brutto",
    header: "Вес брутто",
  },
  {
    accessorKey: "weight_brutto_rest",
    header: "Остаток веса брутто",
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
    accessorKey: "storage_type_id",
    header: "ID типа хранения",
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
