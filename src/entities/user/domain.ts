import { UserId } from "@/kernel/ids";
import { UserProfileId } from "@/kernel/ids";

export type UserEntity = {
  id: UserId;
  login: string;
  salt: string;
  role: string;
  created_at: Date;
};

export type UserProfileEntity = {
  id: UserProfileId;
  phone: string;
  email: string;
  name: string;
  last_name: string;
  user_id: string;
};

export type SessionEntity = {
  id: string;
  login: string;
  expiredAt: string;
  role: string;
};

export const userToSession = (
  user: UserEntity,
  expiredAt: string
): SessionEntity => {
  return {
    id: user.id,
    login: user.login,
    expiredAt,
    role: user.role,
  };
};
