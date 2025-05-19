import type { ColumnDef } from "@tanstack/react-table";
import type React from "react";

import { DataTable } from "./data-table";

import { Footer } from "@/features/footer/footer";
import MenuLayout from "./menu-layout";
import { deleteCargoIn } from "@/entities/main/cargo-in/repositories/cargo-in";
import { redirect } from "next/dist/server/api-utils";
import { deleteCargoActIn } from "@/entities/main/cargo-act-in/repositories/cargo-act-in";
import { deleteCargoLoad } from "@/entities/main/cargo-load/repositories/cargo-load";
import { deleteVesselVoyage } from "@/entities/main/vessel-voyage/repositories/vessel-voyage";
import { deleteCargoActInStatus } from "@/entities/ref/cargo-act-in-status/repositories/cargo-act-in-status";
import { deleteCargo } from "@/entities/ref/cargo/repositories/cargo";
import { deleteConsignee } from "@/entities/ref/consignee/repositories/consignee";
import { deleteShipper } from "@/entities/ref/shipper/repositories/shipper";
import { deleteVessel } from "@/entities/ref/vessel/repositories/vessel";
import { deleteWagon } from "@/entities/ref/wagon/repositories/wagon";
import { deleteWarehouse } from "@/entities/ref/warehouse/repositories/warehouse";

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
type Shipper = {
  id: bigint;
  shipper_name: string;
};
type Consignee = {
  id: bigint;
  consignee_name: string;
};
type Warehouse = {
  id: bigint;
  warehouse_number: number;
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
  shipper,
  consignee,
  warehouse,
}: {
  role: string;
  title: string;
  form_component?: React.ReactNode;
  action_component?: React.ReactNode;
  columns: ColumnDef<TableData>[];
  data: TableData[];
  status?: Status[];
  cargo?: Cargo[];
  cargo_act_in?: CargoActIn[];
  wagon?: Wagon[];
  vessel?: Vessel[];
  shipper?: Shipper[];
  consignee?: Consignee[];
  warehouse?: Warehouse[];
}) {
  const handleDelete = async (id: bigint, table: string) => {
    "use server";

    switch (table) {
      case "Прием грузов":
        await deleteCargoIn(id);
        break;
      case "Акты поступления грузов":
        await deleteCargoActIn(id);
        break;
      case "Отгрузка грузов":
        await deleteCargoLoad(id);
        break;
      case "Рейсы судов":
        await deleteVesselVoyage(id);
        break;
      case "Грузы":
        await deleteCargo(id);
        break;
      case "Статусы актов поступления":
        await deleteCargoActInStatus(id);
        break;
      case "Грузоотправители":
        await deleteConsignee(id);
        break;
      case "Поставщики":
        await deleteShipper(id);
        break;
      case "Судна":
        await deleteVessel(id);
        break;
      case "Вагоны":
        await deleteWagon(id);
        break;
      case "Склады":
        await deleteWarehouse(id);
        break;
    }
  };
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
              shipper={shipper}
              consignee={consignee}
              warehouse={warehouse}
              onDelete={handleDelete}
              role={role}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
