"use client";
import { SubmitButton } from "@/shared/ui/submit-button";
import { useActionState } from "@/shared/lib/react";

import { ErrorMessage } from "@/shared/ui/alert-description";
import { editProfileAction, SettingsFormState } from "../actions/profile";

import { ProfileLayout } from "../ui/profile-layout";

import { ProfileFields } from "../ui/fields";

export function ProfileForm({ data }: { data: UserData | null }) {
  const [formState, action, isPending] = useActionState(
    editProfileAction,
    {} as SettingsFormState
  );
  return (
    <>
      <ProfileLayout
        fields={<ProfileFields {...formState} data={data || undefined} />}
        actions={<SubmitButton isPending={isPending}>Сохранить</SubmitButton>}
        error={<ErrorMessage error={formState.errors?._errors} />}
        action={action}
        data={data || undefined}
      />
    </>
  );
}
