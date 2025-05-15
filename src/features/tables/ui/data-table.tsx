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

export function DataTable<TData, TValue>({
  title,
  columns,
  data,
  formcomponent,
  status,
  cargo,
  cargo_act_in,
  wagon,
  vessel,
}: {
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
}) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const [selectedRow, setSelectedRow] = useState<TData | null>(null);

  const enhancedColumns = useMemo(() => {
    return columns.map((col) => {
      if ("accessorKey" in col) {
        switch (col.accessorKey) {
          case "status_id":
            return {
              ...col,
              header: "Status",
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
              header: "Cargo",
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
              header: "Cargo Act In",
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
              header: "Wagon",
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
              header: "Vessel",
              cell: ({ row }: any) => {
                const found = vessel?.find(
                  (v) => v.id === row.original.vessel_id
                );
                return found ? found.vessel_name : "—";
              },
            };
          default:
            return col;
        }
      }
      return col;
    });
  }, [columns, status, cargo, cargo_act_in, wagon, vessel]);

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
                      <Button className="ml-2 border-red-700" variant="outline">
                        удалить
                      </Button>
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
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>

      <RowDetails
        row={selectedRow}
        onClose={() => setSelectedRow(null)}
        title={title}
        columns={columns}
      />
    </>
  );
}
