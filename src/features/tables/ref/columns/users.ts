import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "email",
    header: "Электронная почта",
  },
  {
    accessorKey: "phone",
    header: "Телефон",
  },
  {
    accessorKey: "name",
    header: "Имя",
  },
  {
    accessorKey: "last_name",
    header: "Фамилия",
  },
  {
    accessorKey: "login",
    header: "Логин",
  },
  {
    accessorKey: "role",
    header: "Роль",
  },
  {
    accessorKey: "created_at",
    header: "Дата создания",
  },
];
