import { sessionService } from "@/entities/ref/user/server";
import { MainForm } from "@/features/main/main";
import { redirect } from "next/navigation";

export default async function () {
  // const session = await sessionService.verifySession();
  // if (session) {
  //   redirect("/tables/cargos-in");
  // } else {
  //   redirect("/sign-in");
  // }
  return <MainForm></MainForm>;
}
