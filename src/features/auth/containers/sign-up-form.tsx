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
      title="Регистрация"
      description="Создайте аккаунт, чтобы начать работу"
      action={action}
      fields={<AuthFields {...formState} />}
      actions={
        <SubmitButton isPending={isPending}>Зарегистрироваться</SubmitButton>
      }
      error={<ErrorMessage error={formState.errors?._errors} />}
      link={
        <BottomLink text="Уже есть аккаунт?" linktext="Войти" url="/sign-in" />
      }
    />
  );
}
