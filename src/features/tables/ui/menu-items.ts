import {
  Users,
  Train,
  Ship,
  PackageCheck,
  PackageSearch,
  Package,
  Compass,
  ClipboardList,
} from "lucide-react";

export const tables = [
  {
    name: "Users",
    href: "/users",
    icon: Users,
    roles: ["admin"],
  },
  {
    name: "Orders",
    href: "/my-orders",
    icon: ClipboardList,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Wagons",
    href: "/wagons",
    icon: Train,
    roles: ["admin", "manager"],
  },
  {
    name: "Vessels",
    href: "/vessels",
    icon: Ship,
    roles: ["admin", "manager"],
  },
  {
    name: "Vessels voyage",
    href: "/vessels-voyage",
    icon: Compass,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Cargos",
    href: "/cargos",
    icon: Package,
    roles: ["admin", "manager"],
  },
  {
    name: "Cargos load",
    href: "/cargos-load",
    icon: PackageCheck,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Cargos in",
    href: "/cargos-in",
    icon: PackageSearch,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Cargos act in",
    href: "/cargos-act-in",
    icon: Package,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Cargos act in status",
    href: "/cargos-act-in-status",
    icon: ClipboardList,
    roles: ["admin", "manager"],
  },
];
