import { getCurrentUser } from "@/entities/user/services/get-current-user";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
  allowedRoles = null,
}: {
  children: React.ReactNode;
  allowedRoles?: string[] | null;
}) {
  const user = await getCurrentUser();

  if (allowedRoles && (!user || !allowedRoles.includes(user.role))) {
    redirect("/error");
  }

  return <>{children}</>;
}
