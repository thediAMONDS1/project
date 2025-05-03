import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "weight",
    header: "Weight",
  },
  {
    accessorKey: "departure_point",
    header: "Departure Point",
  },
  {
    accessorKey: "destination_point",
    header: "Destination Point",
  },
  {
    accessorKey: "departure_date",
    header: "Departure Date",
  },
  {
    accessorKey: "arrival_date",
    header: "Arrival Date",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "carrier",
    header: "Carrier",
  },
];
