import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";

export function OrderFields({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: {
    type?: string;
    weight?: string;
    departure_point?: string;
    destination_point?: string;
    departure_date?: string;
    arrival_date?: string;
    status?: string;
    carrier?: string;
  };
}) {
  const fieldIds = {
    type: useId(),
    weight: useId(),
    departure_point: useId(),
    destination_point: useId(),
    departure_date: useId(),
    arrival_date: useId(),
    status: useId(),
    carrier: useId(),
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
        "Type",
        fieldIds.type,
        "type",
        "Enter the order type",
        "text",
        errors?.type,
        formData?.get("type")?.toString()
      )}
      {renderField(
        "Weight",
        fieldIds.weight,
        "weight",
        "Enter the weight",
        "number",
        errors?.weight,
        formData?.get("weight")?.toString()
      )}
      {renderField(
        "Departure Point",
        fieldIds.departure_point,
        "departure_point",
        "Enter the departure point",
        "text",
        errors?.departure_point,
        formData?.get("departure_point")?.toString()
      )}
      {renderField(
        "Destination Point",
        fieldIds.destination_point,
        "destination_point",
        "Enter the destination point",
        "text",
        errors?.destination_point,
        formData?.get("destination_point")?.toString()
      )}
      {renderField(
        "Departure Date",
        fieldIds.departure_date,
        "departure_date",
        "",
        "date",
        errors?.departure_date,
        formData?.get("departure_date")?.toString()
      )}
      {renderField(
        "Arrival Date",
        fieldIds.arrival_date,
        "arrival_date",
        "",
        "date",
        errors?.arrival_date,
        formData?.get("arrival_date")?.toString()
      )}
      {renderField(
        "Status",
        fieldIds.status,
        "status",
        "Enter the status",
        "text",
        errors?.status,
        formData?.get("status")?.toString()
      )}
      {renderField(
        "Carrier",
        fieldIds.carrier,
        "carrier",
        "Enter the carrier name",
        "text",
        errors?.carrier,
        formData?.get("carrier")?.toString()
      )}
    </>
  );
}
