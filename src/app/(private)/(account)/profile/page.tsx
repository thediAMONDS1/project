import { getCurrentUser } from "@/entities/user/services/get-current-user";
import { ProfileForm } from "@/features/account/profile/containers/profile-form";

export default async function Profile() {
  const data = await getCurrentUser();
  return <ProfileForm data={data} />;
}
