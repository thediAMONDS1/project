"use client";

import { Button } from "@/shared/ui/button";
import { User, ArrowLeft, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 w-64 px-4 pb-4 bg- text-white rounded-lg">
      <div className="bg-white/5 rounded-lg p-4 flex flex-col gap-2">
        <Link href="/profile">
          <Button
            variant={pathname === "/account/profile" ? "default" : "outline"}
            className="flex items-center gap-3 p-5 w-full"
          >
            <User size={18} />
            <span>Профиль</span>
          </Button>
        </Link>
      </div>
      <div className="bg-white/5 rounded-lg p-4">
        <Link href="/tables/cargos-load">
          <Button
            variant="outline"
            className="flex items-center gap-3 p-5 w-full"
          >
            <ArrowLeft size={18} />
            <span>"Назад"</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
