import { sessionService } from "@/entities/ref/user/server";
import { redirect } from "next/navigation";

export default async function () {
  const session = await sessionService.verifySession();
  if (session) {
    redirect("/tables/cargos-in");
  } else {
    redirect("/sign-in");
  }
}
