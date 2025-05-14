import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";

export function VesselVoyageFields({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: Record<string, string>;
}) {
  const fieldIds = {
    estimated_date_departure: useId(),
    vessel_id: useId(),
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
        "Estimated Departure Date",
        fieldIds.estimated_date_departure,
        "estimated_date_departure",
        "YYYY-MM-DD",
        "date",
        errors?.estimated_date_departure,
        formData?.get("estimated_date_departure")?.toString()
      )}
      {renderField(
        "Vessel ID",
        fieldIds.vessel_id,
        "vessel_id",
        "Enter vessel ID",
        "number",
        errors?.vessel_id,
        formData?.get("vessel_id")?.toString()
      )}
    </>
  );
}
