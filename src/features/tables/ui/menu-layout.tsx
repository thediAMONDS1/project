"use client";

import { Button } from "@/shared/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { tables, referenceTables } from "./menu-items";

export default function MenuLayout({ role }: { role: string }) {
  const pathname = usePathname();

  const filterByRole = (items: typeof tables) =>
    items.filter((item) => item.roles?.includes(role));

  const renderSection = (title: string, items: typeof tables) => (
    <>
      <div className="text-slate-500 font-medium mt-4 mb-2 px-1">{title}</div>
      <div className="flex flex-col space-y-2 w-full min-w-[240px]">
        {items.map((item) => {
          const Icon = item.icon;
          const tablePath = "/tables" + item.href;
          const isActive = pathname === tablePath;
          return (
            <Link key={item.name} href={tablePath}>
              <Button
                variant={isActive ? "default" : "outline"}
                className={`flex items-center justify-start w-full text-left ${
                  isActive ? "bg-slate-200 font-semibold" : ""
                }`}
              >
                <Icon className="mr-1 w-4 h-4" />
                {item.name}
              </Button>
            </Link>
          );
        })}
      </div>
    </>
  );

  return (
    <div className="w-min container">
      <div className="flex flex-col container pl-10">
        {renderSection("Основные таблицы", filterByRole(tables))}
        {renderSection("Справочники", filterByRole(referenceTables))}
      </div>
    </div>
  );
}
