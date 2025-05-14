import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";

export function CargoInFields({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: Record<string, string>;
}) {
  const fieldIds = {
    cargo_id: useId(),
    weight_brutto: useId(),
    weight_brutto_rest: useId(),
    cargo_act_in_id: useId(),
    warehouse: useId(),
    storage_type_id: useId(),
    wagon_id: useId(),
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
        "Cargo ID",
        fieldIds.cargo_id,
        "cargo_id",
        "Enter cargo ID",
        "number",
        errors?.cargo_id,
        formData?.get("cargo_id")?.toString()
      )}
      {renderField(
        "Weight Brutto",
        fieldIds.weight_brutto,
        "weight_brutto",
        "Enter weight brutto",
        "number",
        errors?.weight_brutto,
        formData?.get("weight_brutto")?.toString()
      )}
      {renderField(
        "Weight Brutto Rest",
        fieldIds.weight_brutto_rest,
        "weight_brutto_rest",
        "Enter weight brutto rest",
        "number",
        errors?.weight_brutto_rest,
        formData?.get("weight_brutto_rest")?.toString()
      )}
      {renderField(
        "Cargo Act In ID",
        fieldIds.cargo_act_in_id,
        "cargo_act_in_id",
        "Enter cargo act in ID",
        "number",
        errors?.cargo_act_in_id,
        formData?.get("cargo_act_in_id")?.toString()
      )}
      {renderField(
        "Warehouse",
        fieldIds.warehouse,
        "warehouse",
        "Enter warehouse number",
        "number",
        errors?.warehouse,
        formData?.get("warehouse")?.toString()
      )}
      {renderField(
        "Storage Type ID",
        fieldIds.storage_type_id,
        "storage_type_id",
        "Enter storage type ID",
        "number",
        errors?.storage_type_id,
        formData?.get("storage_type_id")?.toString()
      )}
      {renderField(
        "Wagon ID",
        fieldIds.wagon_id,
        "wagon_id",
        "Enter wagon ID",
        "number",
        errors?.wagon_id,
        formData?.get("wagon_id")?.toString()
      )}
    </>
  );
}
