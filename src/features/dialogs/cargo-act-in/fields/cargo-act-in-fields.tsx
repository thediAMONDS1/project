import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";

export function CargoActInFields({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: Record<string, string>;
}) {
  const fieldIds = {
    act_in_number: useId(),
    act_in_date: useId(),
    status_id: useId(),
    supplier_id: useId(),
    rail_waybill: useId(),
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
        "Act In Number",
        fieldIds.act_in_number,
        "act_in_number",
        "Enter act in number",
        "number",
        errors?.act_in_number,
        formData?.get("act_in_number")?.toString()
      )}
      {renderField(
        "Act In Date",
        fieldIds.act_in_date,
        "act_in_date",
        "Enter act in date",
        "date",
        errors?.act_in_date,
        formData?.get("act_in_date")?.toString()
      )}
      {renderField(
        "Status ID",
        fieldIds.status_id,
        "status_id",
        "Enter status ID",
        "number",
        errors?.status_id,
        formData?.get("status_id")?.toString()
      )}
      {renderField(
        "Supplier ID",
        fieldIds.supplier_id,
        "supplier_id",
        "Enter supplier ID",
        "number",
        errors?.supplier_id,
        formData?.get("supplier_id")?.toString()
      )}
      {renderField(
        "Rail Waybill",
        fieldIds.rail_waybill,
        "rail_waybill",
        "Enter rail waybill",
        "number",
        errors?.rail_waybill,
        formData?.get("rail_waybill")?.toString()
      )}
    </>
  );
}
