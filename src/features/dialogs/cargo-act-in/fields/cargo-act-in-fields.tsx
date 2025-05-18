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

type Status = {
  id: bigint;
  status_name: string;
};
type Shipper = {
  id: bigint;
  shipper_name: string;
};
type Consignee = {
  id: bigint;
  consignee_name: string;
};

export function CargoActInFields({
  errors,
  formData,
  status,
  shipper,
  consignee,
}: {
  formData?: FormData;
  errors?: Record<string, string>;
  status: Status[];
  shipper: Shipper[];
  consignee: Consignee[];
}) {
  const fieldIds = {
    act_in_number: useId(),
    act_in_date: useId(),
    status_id: useId(),
    shipper_id: useId(),
    consignee_id: useId(),
    rail_waybill: useId(),
  };

  const selectOptions: Record<string, { id: bigint; name: string }[]> = {
    status_id: status.map((s) => ({ id: s.id, name: s.status_name })),
    shipper_id: shipper.map((s) => ({ id: s.id, name: s.shipper_name })),
    consignee_id: consignee.map((c) => ({ id: c.id, name: c.consignee_name })),
  };

  const fieldConfigs = [
    {
      name: "act_in_number",
      label: "Номер акта приёма",
      placeholder: "Введите номер акта приёма",
      type: "number",
    },
    {
      name: "act_in_date",
      label: "Дата акта приёма",
      placeholder: "Введите дату акта приёма",
      type: "date",
    },
    {
      name: "status_id",
      label: "Статус",
      placeholder: "Выберите статус",
      type: "select",
    },
    {
      name: "shipper_id",
      label: "Грузоотправитель",
      placeholder: "Выберите грузоотправителя",
      type: "select",
    },
    {
      name: "consignee_id",
      label: "Грузополучатель",
      placeholder: "Выберите грузополучателя",
      type: "select",
    },
    {
      name: "rail_waybill",
      label: "Железнодорожная накладная",
      placeholder: "Введите номер накладной",
      type: "number",
    },
  ];

  const renderSelectField = (
    label: string,
    id: string,
    name: string,
    options: { id: bigint; name: string }[],
    placeholder: string,
    error?: string,
    defaultValue?: string
  ) => (
    <div className="space-y-2 w-full" key={name}>
      <Label htmlFor={id}>{label}</Label>
      <Select name={name} defaultValue={defaultValue}>
        <SelectTrigger
          className={`w-full px-4 py-4 ${error ? "border-destructive/50" : ""}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.id.toString()} value={opt.id.toString()}>
              {opt.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <div className="text-xs text-destructive">{error}</div>}
    </div>
  );

  const renderInputField = (
    label: string,
    id: string,
    name: string,
    placeholder: string,
    type: string,
    error?: string,
    defaultValue?: string
  ) => (
    <div className="space-y-2 w-full" key={name}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`w-full px-4 py-4 ${error ? "border-destructive/50" : ""}`}
      />
      {error && <div className="text-xs text-destructive">{error}</div>}
    </div>
  );

  return (
    <>
      {fieldConfigs.map(({ name, label, placeholder, type }) => {
        const id = fieldIds[name as keyof typeof fieldIds];
        const error = errors?.[name];
        const defaultValue = formData?.get(name)?.toString() ?? "";

        if (type === "select") {
          const options = selectOptions[name] ?? [];
          return renderSelectField(
            label,
            id,
            name,
            options,
            placeholder,
            error,
            defaultValue
          );
        }

        return renderInputField(
          label,
          id,
          name,
          placeholder,
          type,
          error,
          defaultValue
        );
      })}
    </>
  );
}
