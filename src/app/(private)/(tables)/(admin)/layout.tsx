import ProtectedLayout from "@/shared/ui/protected-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProtectedLayout allowedRoles={["admin"]}>{children}</ProtectedLayout>;
}
