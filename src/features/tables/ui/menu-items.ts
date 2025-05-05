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
    name: "Wagon",
    href: "/wagons",
    icon: Train,
    roles: ["admin", "manager"],
  },
  {
    name: "Vessel",
    href: "/vessels",
    icon: Ship,
    roles: ["admin", "manager"],
  },
  {
    name: "Vessel voyage",
    href: "/vessels-voyage",
    icon: Compass,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Cargo",
    href: "/cargos",
    icon: Package,
    roles: ["admin", "manager"],
  },
  {
    name: "Cargo Load",
    href: "/cargos-load",
    icon: PackageCheck,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Cargo in",
    href: "/cargos-in",
    icon: PackageSearch,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Cargo act in",
    href: "/cargos-act-in",
    icon: Package,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Cargo act in status",
    href: "/cargos-act-in-status",
    icon: ClipboardList,
    roles: ["admin", "manager"],
  },
];
