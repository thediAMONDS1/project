import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";

export function WagonFields({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: {
    wagon_number?: string;
    wagon_type?: string;
  };
}) {
  const fieldIds = {
    wagon_number: useId(),
    wagon_type: useId(),
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
        "Wagon Number",
        fieldIds.wagon_number,
        "wagon_number",
        "Enter the wagon number",
        "number",
        errors?.wagon_number,
        formData?.get("wagon_number")?.toString()
      )}
      {renderField(
        "Wagon Type",
        fieldIds.wagon_type,
        "wagon_type",
        "Enter the wagon type",
        "text",
        errors?.wagon_type,
        formData?.get("wagon_type")?.toString()
      )}
    </>
  );
}
