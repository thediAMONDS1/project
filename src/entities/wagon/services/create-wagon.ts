import { right } from "@/shared/lib/either";
import { wagonRepository } from "../repositories/wagon";

export const createWagon = async ({
  wagon_number,
  wagon_type,
}: {
  wagon_number: number;
  wagon_type: string;
}) => {
  const wagon = await wagonRepository.saveWagon({
    wagon_number,
    wagon_type,
  });

  return right(wagon);
};
