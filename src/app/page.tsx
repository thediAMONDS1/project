import { sessionService } from "@/entities/user/server";
import { redirect } from "next/navigation";

export default async function () {
  const session = await sessionService.verifySession();
  if (session) {
    redirect("/tables/my-orders");
  } else {
    redirect("/sign-in");
  }
}
