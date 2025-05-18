import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";

export function CargoFields({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: {
    cargo_name?: string;
  };
}) {
  const fieldIds = {
    cargo_name: useId(),
  };

  const renderField = (
    label: string,
    id: string,
    name: string,
    placeholder: string,
    type: string,
    error?: string,
    defaultValue?: string | number
  ) => (
    <div className="space-y-2 w-full">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue?.toString()}
        className={`w-full px-4 py-4 ${error ? "border-destructive/50" : ""}`}
      />
      {error && <div className="text-xs text-destructive">{error}</div>}
    </div>
  );

  return (
    <>
      {renderField(
        "Название груза",
        fieldIds.cargo_name,
        "cargo_name",
        "Введите название груза",
        "text",
        errors?.cargo_name,
        formData?.get("cargo_name")?.toString()
      )}
    </>
  );
}
