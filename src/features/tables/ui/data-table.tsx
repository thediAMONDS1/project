"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import React, { useMemo, useState } from "react";
import { RowDetails } from "./row-details";
import { referenceTables, tables } from "./menu-items";
import { ConfirmDialog } from "./confirm-dialog";

export function DataTable<TData, TValue>({
  role,
  title,
  columns,
  data,
  formcomponent,
  status,
  cargo,
  cargo_act_in,
  wagon,
  vessel,
  shipper,
  consignee,
  warehouse,
  onDelete,
}: {
  role: string;
  title: string;
  titleIcon?: React.ElementType;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  formcomponent?: React.ReactNode;
  status?: { id: bigint; status_name: string }[];
  cargo?: { id: bigint; cargo_name: string }[];
  cargo_act_in?: { id: bigint; act_in_number: number }[];
  wagon?: { id: bigint; wagon_number: number }[];
  vessel?: { id: bigint; vessel_name: string }[];
  shipper?: { id: bigint; shipper_name: string }[];
  consignee?: { id: bigint; consignee_name: string }[];
  warehouse?: { id: bigint; warehouse_number: number }[];
  onDelete?: (id: bigint, tableName: string) => void;
}) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const [selectedRow, setSelectedRow] = useState<TData | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState<bigint | null>(null);

  const handleDeleteClick = (id: bigint) => {
    setRowToDelete(id);
    setDeleteDialogOpen(true);
  };
  const deletePermissions: Record<string, string[]> = {
    // Основные таблицы
    "Отгрузка грузов": ["admin", "manager", "user"],
    "Прием грузов": ["admin", "manager", "user"],
    "Акты поступления грузов": ["admin", "manager", "user"],
    "Рейсы судов": ["admin", "manager"],

    // Справочники
    Вагоны: ["admin"],
    Судна: ["admin"],
    Грузы: ["admin"],
    "Статусы актов поступления": ["admin"],
    Склады: ["admin"],
    Поставщики: ["admin", "manager"],
    Грузополучатели: ["admin", "manager"],
  };

  const confirmDelete = () => {
    if (rowToDelete && onDelete) {
      onDelete(rowToDelete, title);
    }
    setDeleteDialogOpen(false);
  };

  const enhancedColumns = useMemo(() => {
    return columns.map((col) => {
      if ("accessorKey" in col) {
        switch (col.accessorKey) {
          case "status_id":
            return {
              ...col,
              header: "Статус",
              cell: ({ row }: any) => {
                const found = status?.find(
                  (s) => s.id === row.original.status_id
                );
                return found ? found.status_name : "—";
              },
            };
          case "cargo_id":
            return {
              ...col,
              header: "Груз",
              cell: ({ row }: any) => {
                const found = cargo?.find(
                  (c) => c.id === row.original.cargo_id
                );
                return found ? found.cargo_name : "—";
              },
            };
          case "cargo_act_in_id":
            return {
              ...col,
              header: "Акт поступления",
              cell: ({ row }: any) => {
                const found = cargo_act_in?.find(
                  (c) => c.id === row.original.cargo_act_in_id
                );
                return found ? found.act_in_number : "—";
              },
            };
          case "wagon_id":
            return {
              ...col,
              header: "Вагон",
              cell: ({ row }: any) => {
                const found = wagon?.find(
                  (w) => w.id === row.original.wagon_id
                );
                return found ? found.wagon_number : "—";
              },
            };
          case "vessel_id":
            return {
              ...col,
              header: "Судно",
              cell: ({ row }: any) => {
                const found = vessel?.find(
                  (v) => v.id === row.original.vessel_id
                );
                return found ? found.vessel_name : "—";
              },
            };
          case "shipper_id":
            return {
              ...col,
              header: "Поставщик",
              cell: ({ row }: any) => {
                const found = shipper?.find(
                  (s) => s.id === row.original.shipper_id
                );
                return found ? found.shipper_name : "—";
              },
            };
          case "consignee_id":
            return {
              ...col,
              header: "Грузополучатель",
              cell: ({ row }: any) => {
                const found = consignee?.find(
                  (c) => c.id === row.original.consignee_id
                );
                return found ? found.consignee_name : "—";
              },
            };
          case "warehouse":
            return {
              ...col,
              header: "Склад",
              cell: ({ row }: any) => {
                return row.original.warehouse?.warehouse_number ?? "—";
              },
            };

          default:
            return col;
        }
      }
      return col;
    });
  }, [
    columns,
    status,
    cargo,
    cargo_act_in,
    wagon,
    vessel,
    shipper,
    consignee,
    warehouse,
  ]);

  const table = useReactTable({
    data,
    columns: enhancedColumns,
    state: {
      sorting,
      globalFilter,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const allTables = [...tables, ...referenceTables];
  const fallbackTable = allTables.find((t) => t.name === title);

  const Icon = fallbackTable?.icon;

  return (
    <>
      <div className="justify-start text-white text-4xl px-1 py-0.5 h-auto w-full">
        <span className="font-bold flex items-center">
          {Icon && <Icon className="h-9 w-9 mr-2" />}
          {title}
        </span>
      </div>
      <div className="flex justify-between space-x-4 py-4 ">
        <Input
          placeholder="Поиск..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />
        {formcomponent}
      </div>
      <div className="rounded-md border ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}

                <TableHead>
                  <span className="flex justify-end text-sm text-gray-500">
                    Действия
                  </span>
                </TableHead>
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => setSelectedRow(row.original)}
                      >
                        детали
                      </Button>
                      {deletePermissions[title]?.includes(role) && (
                        <Button
                          className="ml-2 border-red-700"
                          variant="outline"
                          onClick={() =>
                            handleDeleteClick(
                              (row.original as { id: bigint }).id
                            )
                          }
                        >
                          удалить
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + 1}
                  className="h-24 text-center"
                >
                  Без результатов.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end pt-1 text-sm text-muted-foreground">
        Показаны {table.getRowModel().rows.length} из
        {" " + table.options.data.length} записей
      </div>
      <div className="flex items-center justify-end space-x-2 py-2">
        <Button
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Назад
        </Button>
        <Button
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Далее
        </Button>
      </div>

      <RowDetails
        row={selectedRow}
        onClose={() => setSelectedRow(null)}
        title={title}
        columns={columns}
      />
      <ConfirmDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title={title}
      />
    </>
  );
}
