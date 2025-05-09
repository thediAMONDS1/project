"use client";

import { Button } from "@/shared/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { tables } from "./menu-items";

export default function MenuLayout({ role }: { role: string }) {
  const pathname = usePathname();
  const availableTables = tables.filter((table) => table.roles?.includes(role));

  return (
    <div className="w-min container">
      <div className="flex flex-col container pl-10">
        <div className="text-slate-500 font-medium mb-2 px-1">
          Available Tables
        </div>
        <div className="flex flex-col space-y-2 w-full min-w-[240px]">
          {availableTables.map((table) => {
            const Icon = table.icon;
            const table_name = "/tables" + table.href;
            const isActive = pathname === table_name;
            return (
              <Link key={table.name} href={table_name}>
                <Button
                  variant={isActive ? "default" : "outline"}
                  className={`flex items-center justify-start w-full text-left ${
                    isActive ? "bg-slate-200 font-semibold" : ""
                  }`}
                >
                  <Icon className="mr-1 w-4 h-4" />
                  {table.name}
                  <div className="h-2 w-2 rounded-full" />
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
