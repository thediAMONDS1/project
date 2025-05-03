"use client";
import type { ColumnDef } from "@tanstack/react-table";
import type React from "react";

import { DataTable } from "./data-table";
import MenuLayout from "@/features/tables/ui/menu-layout";
import { Button } from "@/shared/ui/button";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../../public/ore-logo.png";
import {
  X,
  ChevronDown,
  Database,
  Table2,
  Users,
  ShoppingCart,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/shared/ui/dropdown-menu";
import { Footer } from "@/features/footer/footer";

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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(title);

  const tables = [
    {
      name: "My orders",
      icon: <ShoppingCart className="mr-2 h-4 w-4" />,
      href: "/my-orders",
    },
    { name: "Users", icon: <Users className="mr-2 h-4 w-4" />, href: "/users" },
    {
      name: "Statistics",
      icon: <Database className="mr-2 h-4 w-4" />,
      href: "/statistics",
    },
  ];

  return (
    <div className="flex">
      <div className="w-64 fixed h-full pl-4 pt-4">
        <MenuLayout />
      </div>
      <div className="ml-64 container mx-auto px-5 pt-4">
        <div className="flex flex-col container mx-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="justify-start w-min text-white text-4xl px-1 py-0.5 h-auto focus-visible:ring-0 hover:text-black hover:bg-white transition-colors"
              >
                <span className="font-bold">{selectedTable}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-full min-w-[240px] p-2"
              align="start"
            >
              <DropdownMenuLabel className="font-medium text-slate-500">
                Available Tables
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {tables.map((table) => (
                <Link href={table.href} key={table.name}>
                  <DropdownMenuItem
                    className="cursor-pointer flex items-center py-2 px-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                    onClick={() => setSelectedTable(table.name)}
                  >
                    {table.icon}
                    <span>{table.name}</span>
                    {selectedTable === table.name && (
                      <div className="ml-auto bg-green-500 h-2 w-2 rounded-full" />
                    )}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: isOpen ? 0 : "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-64 h-full bg-black text-white p-4 "
          >
            <Link href="/">
              <Image
                src={logo || "/placeholder.svg"}
                alt="CoalFlow logo"
                width={75}
              />
            </Link>
            <Button
              variant={"outline"}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="w-6 h-6 text-white" />
            </Button>
            <div className="flex flex-col space-y-4 mt-12">
              <Link href="/order">
                <Button variant={"outline"}>Orders</Button>
              </Link>
              <Link href="/user">
                <Button variant={"outline"}>Users</Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <DataTable
          columns={columns}
          data={data}
          formcomponent={formcomponent}
        />
        <Footer />
      </div>
    </div>
  );
}
