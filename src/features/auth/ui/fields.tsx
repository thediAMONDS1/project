import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";

export function AuthFields({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: {
    login?: string;
    password?: string;
  };
}) {
  const loginId = useId();
  const passwordId = useId();

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={loginId}>Логин</Label>
        <Input
          id={loginId}
          type="login"
          name="login"
          placeholder="Введите логин"
          required
          defaultValue={formData?.get("login")?.toString()}
          className={errors?.login ? "border-destructive/50" : ""}
        />
        {errors?.login && (
          <div className="text-xs text-destructive">{errors.login}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor={passwordId}>Пароль</Label>
        <Input
          id={passwordId}
          type="password"
          name="password"
          placeholder="Введите пароль"
          required
          defaultValue={formData?.get("password")?.toString()}
          className={errors?.password ? "border-destructive/50" : ""}
        />
        {errors?.password && (
          <div className="text-xs text-destructive">{errors.password}</div>
        )}
      </div>
    </>
  );
}
