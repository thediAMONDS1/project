import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";

export function WarehouseFields({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: {
    warehouse_number?: string;
    warehouse_type?: string;
    add_info?: string;
  };
}) {
  const fieldIds = {
    warehouse_number: useId(),
    warehouse_type: useId(),
    add_info: useId(),
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
        "Номер склада",
        fieldIds.warehouse_number,
        "warehouse_number",
        "Введите номер склада",
        "number",
        errors?.warehouse_number,
        formData?.get("warehouse_number")?.toString()
      )}
      {renderField(
        "Тип склада",
        fieldIds.warehouse_type,
        "warehouse_type",
        "Введите тип склада",
        "text",
        errors?.warehouse_type,
        formData?.get("warehouse_type")?.toString()
      )}
      {renderField(
        "Дополнительная информация",
        fieldIds.add_info,
        "add_info",
        "Введите дополнительную информацию",
        "text",
        errors?.add_info,
        formData?.get("add_info")?.toString()
      )}
    </>
  );
}
