import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import React, { useId } from "react";

type Vessel = {
  id: bigint;
  vessel_name: string;
};

export function VesselVoyageFields({
  errors,
  formData,
  vessel,
}: {
  formData?: FormData;
  errors?: Record<string, string>;
  vessel: Vessel[];
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

  const renderSelect = (
    label: string,
    id: string,
    name: string,
    items: { id: bigint; label: string }[],
    placeholder: string,
    error?: string,
    defaultValue?: string
  ) => (
    <div className="space-y-2 w-full">
      <Label htmlFor={id}>{label}</Label>
      <Select name={name} defaultValue={defaultValue}>
        <SelectTrigger
          className={`w-full px-4 py-4 ${error ? "border-destructive/50" : ""}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.id.toString()} value={item.id.toString()}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <div className="text-xs text-destructive">{error}</div>}
    </div>
  );

  return (
    <>
      {renderField(
        "Расчетная дата отправления",
        fieldIds.estimated_date_departure,
        "estimated_date_departure",
        "ГГГГ-ММ-ДД",
        "date",
        errors?.estimated_date_departure,
        formData?.get("estimated_date_departure")?.toString()
      )}
      {renderSelect(
        "Судно",
        fieldIds.vessel_id,
        "vessel_id",
        vessel.map((v) => ({ id: v.id, label: v.vessel_name })),
        "Выберите судно",
        errors?.vessel_id,
        formData?.get("vessel_id")?.toString()
      )}
    </>
  );
}
