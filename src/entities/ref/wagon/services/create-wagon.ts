import { right } from "@/shared/lib/either";
import { wagonRepository } from "../repositories/wagon";

export const createWagon = async ({
  wagon_number,
  wagon_type,
  add_info,
}: {
  wagon_number: number;
  wagon_type: string;
  add_info: string;
}) => {
  const wagon = await wagonRepository.saveWagon({
    wagon_number,
    wagon_type,
    add_info,
  });

  return right(wagon);
};
