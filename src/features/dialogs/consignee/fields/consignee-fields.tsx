import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";

export function ConsigneeFields({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: {
    consignee_name?: string;
    add_info?: string;
    contact?: string;
  };
}) {
  const fieldIds = {
    consignee_name: useId(),
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
        "Название грузополучателя",
        fieldIds.consignee_name,
        "consignee_name",
        "Введите название грузополучателя",
        "text",
        errors?.consignee_name,
        formData?.get("consignee_name")?.toString()
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
