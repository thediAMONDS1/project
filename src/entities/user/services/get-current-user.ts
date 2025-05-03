import { userRepository } from "../repositories/user";
import { sessionService } from "./session";

export const getCurrentUser = async () => {
  const { session } = await sessionService.verifySession();

  const user = await userRepository.getUser({ id: session.id });

  if (!user) {
    return null;
  }
  return {
    id: user.id,
    login: user.login,
    role: user.role,
    created_at: user.created_at,
    email: user.profile?.email || "",
    name: user.profile?.name || "",
    last_name: user.profile?.last_name || "",
    phone: user.profile?.phone || "",
  };
};
