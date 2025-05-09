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
  role,
  title,
  form_component,
  columns,
  data,
}: {
  role: string;
  title: string;
  form_component: React.ReactNode;
  columns: ColumnDef<TableData>[];
  data: TableData[];
}) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex pt-6 flex-grow">
          <MenuLayout role={role} />
          <div className="flex flex-col mx-10  w-full">
            <DataTable
              title={title}
              columns={columns}
              data={data}
              formcomponent={form_component}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
