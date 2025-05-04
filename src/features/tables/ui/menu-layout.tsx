"use client";

import { Button } from "@/shared/ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { motion } from "framer-motion";
import Link from "next/link";
import { tables } from "./menu-items";

export default function MenuLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <div className="ml-10 container">
        <div className="flex flex-col container mx-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="justify-start w-min text-white text-4xl px-1 py-0.5 h-auto focus-visible:ring-0 hover:text-black hover:bg-white transition-colors"
              >
                <span className="font-bold">Menu</span>
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
              {tables.map((table) => {
                const Icon = table.icon;
                const isActive = pathname === table.href;
                return (
                  <Link key={table.name} href={table.href} passHref>
                    <DropdownMenuItem
                      className={`cursor-pointer flex items-center py-2 px-3 rounded-md transition-colors ${
                        isActive
                          ? "bg-slate-200 dark:bg-slate-700 font-semibold"
                          : "hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <Icon className="mr-2 w-4 h-4" />
                      <span>{table.name}</span>
                      {isActive && (
                        <div className="ml-auto bg-green-500 h-2 w-2 rounded-full" />
                      )}
                    </DropdownMenuItem>
                  </Link>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: isOpen ? 0 : "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-64 h-full bg-black text-white p-4 z-50"
          >
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Menu className="w-10 h-10 text-white" />
                <span className="text-xl font-bold">CoalFlow</span>
              </div>
            </Link>

            <Button
              variant={"outline"}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="w-6 h-6 text-white" />
            </Button>
            <div className="flex flex-col space-y-4 mt-12">
              {tables.map((table) => {
                const isActive = pathname === table.href;
                return (
                  <Link key={table.href} href={table.href} passHref>
                    <Button
                      variant={isActive ? "default" : "outline"}
                      className={isActive ? "bg-white text-black" : ""}
                    >
                      {table.name}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
