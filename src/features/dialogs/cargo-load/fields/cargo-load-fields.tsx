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
  shipper,
  consignee,
}: {
  formData?: FormData;
  errors?: Record<string, string>;
  vessel_voyage: VesselVoyage[];
  cargo_act_in: CargoActIn[];
  shipper: { id: bigint; shipper_name: string }[];
  consignee: { id: bigint; consignee_name: string }[];
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
          id={id}
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
        "Дата загрузки",
        fieldIds.load_date,
        "load_date",
        "Введите дату загрузки",
        "date",
        errors?.load_date,
        formData?.get("load_date")?.toString()
      )}
      {renderSelect(
        "Рейс судна",
        fieldIds.vessel_voyage_id,
        "vessel_voyage_id",
        vessel_voyage.map((v) => ({ id: v.id, label: v.id.toString() })),
        "Выберите рейс судна",
        errors?.vessel_voyage_id,
        formData?.get("vessel_voyage_id")?.toString()
      )}
      {renderField(
        "Вес брутто",
        fieldIds.weight_brutto,
        "weight_brutto",
        "Введите вес брутто",
        "number",
        errors?.weight_brutto,
        formData?.get("weight_brutto")?.toString()
      )}
      {renderSelect(
        "Акт приёма груза",
        fieldIds.cargo_act_in_id,
        "cargo_act_in_id",
        cargo_act_in.map((c) => ({
          id: c.id,
          label: c.act_in_number,
        })),
        "Выберите акт приёма груза",
        errors?.cargo_act_in_id,
        formData?.get("cargo_act_in_id")?.toString()
      )}
      {renderSelect(
        "Грузоотправитель",
        fieldIds.shipper,
        "shipper",
        shipper.map((s) => ({ id: s.id, label: s.shipper_name })),
        "Выберите грузоотправителя",
        errors?.shipper,
        formData?.get("shipper")?.toString()
      )}
      {renderSelect(
        "Грузополучатель",
        fieldIds.consignee,
        "consignee",
        consignee.map((c) => ({ id: c.id, label: c.consignee_name })),
        "Выберите грузополучателя",
        errors?.consignee,
        formData?.get("consignee")?.toString()
      )}
    </>
  );
}
