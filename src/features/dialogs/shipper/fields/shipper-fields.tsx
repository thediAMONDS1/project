import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";

export function ShipperFields({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: {
    shipper_name?: string;
    add_info?: string;
    contact?: string;
  };
}) {
  const fieldIds = {
    shipper_name: useId(),
    add_info: useId(),
    contact: useId(),
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
        "Название поставщика",
        fieldIds.shipper_name,
        "shipper_name",
        "Введите название поставщика",
        "text",
        errors?.shipper_name,
        formData?.get("shipper_name")?.toString()
      )}
      {renderField(
        "Контакт",
        fieldIds.contact,
        "contact",
        "Введите контактные данные",
        "text",
        errors?.contact,
        formData?.get("contact")?.toString()
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
