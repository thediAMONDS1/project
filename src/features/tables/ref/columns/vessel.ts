import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "vessel_name",
    header: "Название судна",
  },
  {
    accessorKey: "user_id",
    header: "ID пользователя",
  },
];
