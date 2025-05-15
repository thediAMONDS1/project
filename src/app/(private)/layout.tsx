import { sessionService } from "@/entities/ref/user/server";
import { Button } from "@/shared/ui/button";
import { redirect } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/logo.png";

import Link from "next/link";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = await sessionService.verifySession();
  return (
    <div>
      <header className="px-10 py-2 flex items-center justify-between border-b border-b-primary/20 ">
        <div className="text-xl">
          <Link href="/my-orders">
            <Image src={logo} alt="CoalFlow logo" width={75} />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-lg">
            <Link href={"/profile"}>{session.login}</Link>
          </div>
          <form
            action={async () => {
              "use server";
              await sessionService.deleteSession();
              redirect("/sign-in");
            }}
          >
            <Button variant="destructive" size="sm">
              Sign out
            </Button>
          </form>
        </div>
      </header>

      {children}
    </div>
  );
}
