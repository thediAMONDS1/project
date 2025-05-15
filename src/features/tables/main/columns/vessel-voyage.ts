import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "estimated_date_departure",
    header: "Предполагаемая дата отправления",
  },
  {
    accessorKey: "vessel_id",
    header: "ID судна",
  },
  {
    accessorKey: "user_id",
    header: "ID пользователя",
  },
];
