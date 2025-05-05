import { left, right } from "@/shared/lib/either";
import { wagonRepository } from "../repositories/wagon";

export const createWagon = async ({ wagon_name }: { wagon_name: string }) => {
  return right(wagon_name);
};
