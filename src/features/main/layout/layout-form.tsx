"use client";

import ore_logo from "../../../../public/ore-logo.png";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

export function Layout() {
  return (
    <>
      <div className="block">
        <header
          className={`fixed top-0 left-0 w-full px-10 py-2 flex items-center bg-black justify-between z-30`}
        >
          <div className="text-xl">
            <Link href="/">
              <Image src={ore_logo} alt="CoalFlow logo" width={40} />
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/sign-in">
              <Button size="sm">Sign in</Button>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}
