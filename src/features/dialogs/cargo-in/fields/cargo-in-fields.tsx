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

type Cargo = {
  id: bigint;
  cargo_name: string;
};

type CargoActIn = {
  id: bigint;
  act_in_number: number;
};

type Wagon = {
  id: bigint;
  wagon_number: number;
};

export function CargoInFields({
  errors,
  formData,
  cargo,
  cargo_act_in,
  wagon,
}: {
  formData?: FormData;
  errors?: Record<string, string>;
  cargo: Cargo[];
  cargo_act_in: CargoActIn[];
  wagon: Wagon[];
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

  const renderSelectField = (
    label: string,
    id: string,
    name: string,
    error?: string,
    defaultValue?: string
  ) => (
    <div className="space-y-2 w-full">
      <Label htmlFor={id}>{label}</Label>
      <Select name={name} defaultValue={defaultValue}>
        <SelectTrigger
          className={`w-full px-4 py-4 ${error ? "border-destructive/50" : ""}`}
        >
          <SelectValue placeholder="Select cargo" />
        </SelectTrigger>
        <SelectContent>
          {cargo.map((item) => (
            <SelectItem key={item.id.toString()} value={item.id.toString()}>
              {item.cargo_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <div className="text-xs text-destructive">{error}</div>}
    </div>
  );

  const renderCargoActInSelect = (
    label: string,
    id: string,
    name: string,
    error?: string,
    defaultValue?: string
  ) => (
    <div className="space-y-2 w-full">
      <Label htmlFor={id}>{label}</Label>
      <Select name={name} defaultValue={defaultValue}>
        <SelectTrigger
          className={`w-full px-4 py-4 ${error ? "border-destructive/50" : ""}`}
        >
          <SelectValue placeholder="Select Cargo Act In" />
        </SelectTrigger>
        <SelectContent>
          {cargo_act_in.map((item) => (
            <SelectItem key={item.id.toString()} value={item.id.toString()}>
              {item.act_in_number}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <div className="text-xs text-destructive">{error}</div>}
    </div>
  );

  const renderWagonSelect = (
    label: string,
    id: string,
    name: string,
    error?: string,
    defaultValue?: string
  ) => (
    <div className="space-y-2 w-full">
      <Label htmlFor={id}>{label}</Label>
      <Select name={name} defaultValue={defaultValue}>
        <SelectTrigger
          className={`w-full px-4 py-4 ${error ? "border-destructive/50" : ""}`}
        >
          <SelectValue placeholder="Select Wagon" />
        </SelectTrigger>
        <SelectContent>
          {wagon.map((item) => (
            <SelectItem key={item.id.toString()} value={item.id.toString()}>
              {item.wagon_number}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <div className="text-xs text-destructive">{error}</div>}
    </div>
  );

  return (
    <>
      {renderSelectField(
        "Cargo",
        fieldIds.cargo_id,
        "cargo_id",
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
      {renderCargoActInSelect(
        "Cargo Act In ID",
        fieldIds.cargo_act_in_id,
        "cargo_act_in_id",
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
      {renderWagonSelect(
        "Wagon",
        fieldIds.wagon_id,
        "wagon_id",
        errors?.wagon_id,
        formData?.get("wagon_id")?.toString()
      )}
    </>
  );
}
