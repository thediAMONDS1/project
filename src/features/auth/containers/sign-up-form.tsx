"use client";

import { BottomLink } from "../ui/bottom-link";
import { SubmitButton } from "../../../shared/ui/submit-button";
import { AuthFields } from "../ui/fields";
import { AuthFormLayout } from "../ui/auth-layout";
import { signUpAction, SignUpFormState } from "../actions/sign-up";
import { useActionState } from "@/shared/lib/react";
import { ErrorMessage } from "@/shared/ui/alert-description";

export function SignUpForm() {
  const [formState, action, isPending] = useActionState(
    signUpAction,
    {} as SignUpFormState
  );

  return (
    <AuthFormLayout
      title="Sign Up"
      description="Create your account to get started"
      action={action}
      fields={<AuthFields {...formState} />}
      actions={<SubmitButton isPending={isPending}>Sign Up</SubmitButton>}
      error={<ErrorMessage error={formState.errors?._errors} />}
      link={
        <BottomLink
          text="Already have an account?"
          linktext="Sign In"
          url="/sign-in"
        />
      }
    />
  );
}
