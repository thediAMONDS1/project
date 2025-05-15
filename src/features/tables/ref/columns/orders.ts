import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "type",
    header: "Тип",
  },
  {
    accessorKey: "weight",
    header: "Вес",
  },
  {
    accessorKey: "departure_point",
    header: "Точка отправления",
  },
  {
    accessorKey: "destination_point",
    header: "Точка назначения",
  },
  {
    accessorKey: "departure_date",
    header: "Дата отправления",
  },
  {
    accessorKey: "arrival_date",
    header: "Дата прибытия",
  },
  {
    accessorKey: "status",
    header: "Статус",
  },
  {
    accessorKey: "carrier",
    header: "Перевозчик",
  },
];
