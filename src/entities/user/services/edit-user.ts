import { right } from "@/shared/lib/either";
import { userRepository } from "../repositories/user";

export const editUser = async ({
  id,
  phone = "",
  email = "",
  name = "",
  last_name = "",
}: {
  id: string;
  phone?: string;
  email?: string;
  name?: string;
  last_name?: string;
}) => {
  const updatedUser = await userRepository.editUser({
    id,
    phone,
    email,
    name,
    last_name,
  });

  return right(updatedUser);
};
