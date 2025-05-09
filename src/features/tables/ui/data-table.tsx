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
import React, { useState } from "react";
import { RowDetails } from "./row-details";
import { tables } from "./menu-items";

interface DataTableProps<TData, TValue> {
  title: string;
  titleIcon?: React.ElementType;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  formcomponent?: React.ReactNode;
}

export function DataTable<TData, TValue>({
  title,
  columns,
  data,
  formcomponent,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const [selectedRow, setSelectedRow] = useState<TData | null>(null);

  const table = useReactTable({
    data,
    columns,
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

  const fallbackTable = tables.find((t) => t.name === title);
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
          placeholder="Search..."
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
                    Actions
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
                        show
                      </Button>
                      <Button className="ml-2 border-red-700" variant="outline">
                        delete
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
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end pt-1 text-sm text-muted-foreground">
        Showed {table.getRowModel().rows.length} of
        {" " + table.options.data.length} rows
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

      <RowDetails row={selectedRow} onClose={() => setSelectedRow(null)} />
    </>
  );
}
