import {
  PackageCheck,
  PackageSearch,
  Package,
  Compass,
  Users,
  Train,
  Ship,
  ClipboardList,
  Clipboard,
  Truck,
} from "lucide-react";

// Основные таблицы
export const tables = [
  {
    name: "Отгрузка грузов",
    href: "/cargos-load",
    icon: PackageCheck,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Прием грузов",
    href: "/cargos-in",
    icon: PackageSearch,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Акты поступления грузов",
    href: "/cargos-act-in",
    icon: Package,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Рейсы судов",
    href: "/vessels-voyage",
    icon: Compass,
    roles: ["admin", "manager", "user"],
  },
];

// Справочники
export const referenceTables = [
  {
    name: "Пользователи",
    href: "/users",
    icon: Users,
    roles: ["admin"],
  },
  {
    name: "Вагоны",
    href: "/wagons",
    icon: Train,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Судна",
    href: "/vessels",
    icon: Ship,
    roles: ["admin", "manager"],
  },

  {
    name: "Грузы",
    href: "/cargos",
    icon: Package,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Статусы актов поступления",
    href: "/cargos-act-in-status",
    icon: ClipboardList,
    roles: ["admin"],
  },
  {
    name: "Склады",
    href: "/warehouses",
    icon: Clipboard,
    roles: ["admin", "manager", "user"],
  },
  {
    name: "Поставщики",
    href: "/shippers",
    icon: Truck,
    roles: ["admin", "manager"],
  },
  {
    name: "Грузополучатели",
    href: "/consignees",
    icon: ClipboardList,
    roles: ["admin", "manager"],
  },
];
