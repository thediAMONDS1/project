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

type Warehouse = {
  id: bigint;
  warehouse_number: number;
};

export function CargoInFields({
  errors,
  formData,
  cargo,
  cargo_act_in,
  wagon,
  warehouse,
}: {
  formData?: FormData;
  errors?: Record<string, string>;
  cargo: Cargo[];
  cargo_act_in: CargoActIn[];
  wagon: Wagon[];
  warehouse: Warehouse[];
}) {
  const fieldIds = {
    cargo_id: useId(),
    weight_brutto: useId(),
    weight_brutto_rest: useId(),
    cargo_act_in_id: useId(),
    warehouse_id: useId(),
    wagon_id: useId(),
  };

  const renderTextField = (
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
    placeholder: string,
    options: { id: bigint; label: string }[],
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
          {options.map((item) => (
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
      {renderSelectField(
        "Груз",
        fieldIds.cargo_id,
        "cargo_id",
        "Выберите груз",
        cargo.map((item) => ({ id: item.id, label: item.cargo_name })),
        errors?.cargo_id,
        formData?.get("cargo_id")?.toString()
      )}
      {renderTextField(
        "Вес",
        fieldIds.weight_brutto,
        "weight_brutto",
        "Введите вес",
        "number",
        errors?.weight_brutto,
        formData?.get("weight_brutto")?.toString()
      )}
      {renderTextField(
        "Остаток веса",
        fieldIds.weight_brutto_rest,
        "weight_brutto_rest",
        "Введите остаток веса",
        "number",
        errors?.weight_brutto_rest,
        formData?.get("weight_brutto_rest")?.toString()
      )}
      {renderSelectField(
        "Акт приёма груза",
        fieldIds.cargo_act_in_id,
        "cargo_act_in_id",
        "Выберите акт приёма",
        cargo_act_in.map((item) => ({
          id: item.id,
          label: item.act_in_number.toString(),
        })),
        errors?.cargo_act_in_id,
        formData?.get("cargo_act_in_id")?.toString()
      )}
      {renderSelectField(
        "Склад",
        fieldIds.warehouse_id,
        "warehouse_id",
        "Выберите склад",
        warehouse.map((item) => ({
          id: item.id,
          label: item.warehouse_number.toString(),
        })),
        errors?.warehouse_id,
        formData?.get("warehouse_id")?.toString()
      )}
      {renderSelectField(
        "Вагон",
        fieldIds.wagon_id,
        "wagon_id",
        "Выберите вагон",
        wagon.map((item) => ({
          id: item.id,
          label: item.wagon_number.toString(),
        })),
        errors?.wagon_id,
        formData?.get("wagon_id")?.toString()
      )}
    </>
  );
}
