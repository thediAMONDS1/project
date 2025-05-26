"use client";

import { BottomLink } from "../ui/bottom-link";
import { SubmitButton } from "../../../shared/ui/submit-button";
import { AuthFields } from "../ui/fields";
import { AuthFormLayout } from "../ui/auth-layout";
import { useActionState } from "@/shared/lib/react";
import { signInAction, SignInFormState } from "../actions/sign-in";
import { ErrorMessage } from "@/shared/ui/alert-description";

export function SignInForm() {
  const [formState, action, isPending] = useActionState(
    signInAction,
    {} as SignInFormState
  );
  return (
    <AuthFormLayout
      title="Вход"
      description="С возвращением! Пожалуйста, войдите в свой аккаунт"
      action={action}
      fields={<AuthFields {...formState} />}
      actions={<SubmitButton isPending={isPending}>Войти</SubmitButton>}
      error={<ErrorMessage error={formState.errors?._errors} />}
      link={
        <BottomLink
          text="Нет аккаунта? "
          linktext="Зарегистрироваться"
          url="/sign-up"
        />
      }
    />
  );
}
