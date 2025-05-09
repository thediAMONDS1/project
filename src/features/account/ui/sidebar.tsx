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
            <span>Profile</span>
          </Button>
        </Link>
        <Link href="/settings">
          <Button
            variant={pathname === "/account/settings" ? "default" : "outline"}
            className="flex items-center gap-3 p-5 w-full"
          >
            <Settings size={18} />
            <span>Settings</span>
          </Button>
        </Link>
      </div>
      <div className="bg-white/5 rounded-lg p-4">
        <Link href="/">
          <Button
            variant="outline"
            className="flex items-center gap-3 p-5 w-full"
          >
            <ArrowLeft size={18} />
            <span>"Back to"</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
