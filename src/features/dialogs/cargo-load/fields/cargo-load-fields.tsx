import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";

export function CargoLoadFields({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: Record<string, string>;
}) {
  const fieldIds = {
    load_date: useId(),
    vessel_voyage_id: useId(),
    weight_brutto: useId(),
    cargo_act_in_id: useId(),
    shipper: useId(),
    consignee: useId(),
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
        "Load Date",
        fieldIds.load_date,
        "load_date",
        "Enter load date",
        "date",
        errors?.load_date,
        formData?.get("load_date")?.toString()
      )}
      {renderField(
        "Vessel Voyage ID",
        fieldIds.vessel_voyage_id,
        "vessel_voyage_id",
        "Enter vessel voyage ID",
        "number",
        errors?.vessel_voyage_id,
        formData?.get("vessel_voyage_id")?.toString()
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
        "Cargo Act In ID",
        fieldIds.cargo_act_in_id,
        "cargo_act_in_id",
        "Enter cargo act in ID",
        "number",
        errors?.cargo_act_in_id,
        formData?.get("cargo_act_in_id")?.toString()
      )}
      {renderField(
        "Shipper",
        fieldIds.shipper,
        "shipper",
        "Enter shipper ID",
        "number",
        errors?.shipper,
        formData?.get("shipper")?.toString()
      )}
      {renderField(
        "Consignee",
        fieldIds.consignee,
        "consignee",
        "Enter consignee ID",
        "number",
        errors?.consignee,
        formData?.get("consignee")?.toString()
      )}
    </>
  );
}
