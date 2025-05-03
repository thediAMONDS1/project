"use client";

import { Button } from "@/shared/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function MenuLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="flex justify-between items-center ">
        <Button variant={"outline"} onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" /> Menu
        </Button>
      </nav>
    </div>
  );
}
