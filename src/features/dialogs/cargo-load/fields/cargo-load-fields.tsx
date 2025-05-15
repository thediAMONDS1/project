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

type CargoActIn = {
  id: bigint;
  act_in_number: number;
};
type VesselVoyage = {
  id: bigint;
};

export function CargoLoadFields({
  errors,
  formData,
  vessel_voyage,
  cargo_act_in,
}: {
  formData?: FormData;
  errors?: Record<string, string>;
  vessel_voyage: VesselVoyage[];
  cargo_act_in: CargoActIn[];
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

  const renderSelect = (
    label: string,
    id: string,
    name: string,
    items: { id: bigint; label: string | number }[],
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
        "Load Date",
        fieldIds.load_date,
        "load_date",
        "Enter load date",
        "date",
        errors?.load_date,
        formData?.get("load_date")?.toString()
      )}
      {renderSelect(
        "Vessel Voyage",
        fieldIds.vessel_voyage_id,
        "vessel_voyage_id",
        vessel_voyage.map((v) => ({ id: v.id, label: v.id.toString() })),
        "Select vessel voyage ID",
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
      {renderSelect(
        "Cargo Act In",
        fieldIds.cargo_act_in_id,
        "cargo_act_in_id",
        cargo_act_in.map((c) => ({
          id: c.id,
          label: c.act_in_number,
        })),
        "Select cargo act in",
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
