"use client";
import type { ColumnDef } from "@tanstack/react-table";
import type React from "react";

import { DataTable } from "./data-table";

import { Footer } from "@/features/footer/footer";
import MenuLayout from "./menu-layout";

interface TableData {
  [key: string]: any;
}

export default function TableLayout({
  title,
  formcomponent,
  columns,
  data,
}: {
  title: string;
  formcomponent: React.ReactNode;
  columns: ColumnDef<TableData>[];
  data: TableData[];
}) {
  return (
    <div className="flex pt-6">
      <MenuLayout />
      <div className="flex flex-col mx-96">
        <DataTable
          title={title}
          columns={columns}
          data={data}
          formcomponent={formcomponent}
        />
        <Footer />
      </div>
    </div>
  );
}
