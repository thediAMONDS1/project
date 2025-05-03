"use client";
import { SubmitButton } from "@/shared/ui/submit-button";
import { useActionState } from "@/shared/lib/react";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SettingsFormState } from "../../profile/actions/profile";
import { SettingsFields } from "../ui/fields";
import { SettingsLayout } from "../ui/settings-layout";
import { editSettingsAction } from "../actions/settings";

export function SettingsForm() {
  const [formState, action, isPending] = useActionState(
    editSettingsAction,
    {} as SettingsFormState
  );
  return (
    <>
      <SettingsLayout
        fields={<SettingsFields {...formState} />}
        actions={
          <SubmitButton isPending={isPending}>Save Changes</SubmitButton>
        }
        error={<ErrorMessage error={formState.errors?._errors} />}
        action={action}
      />
    </>
  );
}
