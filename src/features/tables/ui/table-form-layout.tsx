"use client";
import type { ColumnDef } from "@tanstack/react-table";
import type React from "react";

import { DataTable } from "./data-table";

import { Footer } from "@/features/footer/footer";
import MenuLayout from "./menu-layout";

interface TableData {
  [key: string]: any;
}
type Status = {
  id: bigint;
  status_name: string;
};
type Cargo = {
  id: bigint;
  cargo_name: string;
};
type CargoActIn = {
  id: bigint;
  act_in_number: number;
};
type Wagon = {
  id: bigint;
  wagon_number: number;
};
type Vessel = {
  id: bigint;
  vessel_name: string;
};
export default function TableLayout({
  role,
  title,
  form_component,
  columns,
  data,
  status,
  cargo,
  cargo_act_in,
  wagon,
  vessel,
}: {
  role: string;
  title: string;
  form_component: React.ReactNode;
  columns: ColumnDef<TableData>[];
  data: TableData[];
  status?: Status[];
  cargo?: Cargo[];
  cargo_act_in?: CargoActIn[];
  wagon?: Wagon[];
  vessel?: Vessel[];
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
              status={status}
              cargo={cargo}
              cargo_act_in={cargo_act_in}
              wagon={wagon}
              vessel={vessel}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
