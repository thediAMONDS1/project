import { left, right } from "@/shared/lib/either";
import { userRepository } from "../repositories/user";
import cuid from "cuid";
import { passwordService } from "./password";

export const createUser = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  const userWithLogin = await userRepository.getUser({ login });

  if (userWithLogin) {
    return left("user-login-exists" as const);
  }

  const { hash, salt } = await passwordService.hashPassword(password);

  const user = {
    id: cuid(),
    login,
    passwordHash: hash,
    salt,
    role: "user",
    created_at: new Date(),
  };

  const profile = {
    id: cuid(),
    user_id: user.id,
    email: "",
    name: "",
    last_name: "",
    phone: "",
  };
  const savedUser = await userRepository.saveUser(user, profile);

  return right(savedUser);
};
