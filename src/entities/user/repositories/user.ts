import { prisma } from "@/shared/lib/db";
import { UserEntity, UserProfileEntity } from "../domain";
import { Prisma } from "@prisma/client";
import { left, right } from "@/shared/lib/either";

export async function saveUser(
  user: UserEntity,
  profile: UserProfileEntity,
  passwordHash: string,
  salt: string
): Promise<UserEntity> {
  const createdUser = await prisma.user.create({
    data: {
      login: user.login,
      password_hash: passwordHash,
      salt: salt,
      role: user.role || "user",
      created_at: user.created_at || new Date(),
      profile: {
        create: {
          email: profile.email,
          name: profile.name,
          last_name: profile.last_name,
          phone: profile.phone,
        },
      },
    },
    include: { profile: true },
  });

  return {
    id: createdUser.id,
    login: createdUser.login,
    role: createdUser.role,
    created_at: createdUser.created_at,
  };
}

export function getUser(where: Prisma.UserWhereInput) {
  return prisma.user.findFirst({
    where,
    include: { profile: true },
  });
}

export async function getUserData() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      login: true,
      role: true,
      created_at: true,
      profile: {
        select: {
          email: true,
          name: true,
          last_name: true,
          phone: true,
        },
      },
    },
  });

  return users.map((user) => ({
    id: user.id,
    login: user.login,
    role: user.role,
    created_at: user.created_at.toISOString().split("T")[0],
    email: user.profile?.email || null,
    name: user.profile?.name || null,
    last_name: user.profile?.last_name || null,
    phone: user.profile?.phone || null,
  }));
}

export const editUser = async ({
  id,
  phone,
  email,
  name,
  last_name,
}: {
  id: string;
  phone: string;
  email: string;
  name: string;
  last_name: string;
}) => {
  const user = await getUser({ id });

  if (!user) {
    return left("user-not-found" as const);
  }

  const updatedProfile = await prisma.userProfile.update({
    where: { user_id: id },
    data: { phone, email, name, last_name },
  });

  return right(updatedProfile);
};

export async function getUserCount() {
  const count = await prisma.user.count();
  return count;
}

export const userRepository = {
  saveUser,
  getUser,
  getUserData,
  editUser,
  getUserCount,
};
