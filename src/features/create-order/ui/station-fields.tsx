import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";

export function StationFields({
  errors,
  formData,
}: {
  formData?: FormData;
  errors?: {
    name?: string;
    location?: string;
    capacity?: string;
    manager?: string;
    phone?: string;
    email?: string;
    status?: string;
  };
}) {
  const fieldIds = {
    name: useId(),
    location: useId(),
    capacity: useId(),
    manager: useId(),
    phone: useId(),
    email: useId(),
    status: useId(),
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
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue?.toString()}
        className={error ? "border-destructive/50" : ""}
        required
      />
      {error && <div className="text-xs text-destructive">{error}</div>}
    </div>
  );

  return (
    <>
      {renderField(
        "Station Name",
        fieldIds.name,
        "name",
        "Enter station name",
        "text",
        errors?.name,
        formData?.get("name")?.toString()
      )}
      {renderField(
        "Location",
        fieldIds.location,
        "location",
        "Enter location",
        "text",
        errors?.location,
        formData?.get("location")?.toString()
      )}
      {renderField(
        "Capacity",
        fieldIds.capacity,
        "capacity",
        "Enter capacity",
        "number",
        errors?.capacity,
        formData?.get("capacity")?.toString()
      )}
      {renderField(
        "Manager",
        fieldIds.manager,
        "manager",
        "Enter manager name",
        "text",
        errors?.manager,
        formData?.get("manager")?.toString()
      )}
      {renderField(
        "Phone",
        fieldIds.phone,
        "phone",
        "Enter phone number",
        "tel",
        errors?.phone,
        formData?.get("phone")?.toString()
      )}
      {renderField(
        "Email",
        fieldIds.email,
        "email",
        "Enter email",
        "email",
        errors?.email,
        formData?.get("email")?.toString()
      )}
      {renderField(
        "Status",
        fieldIds.status,
        "status",
        "Enter status",
        "text",
        errors?.status,
        formData?.get("status")?.toString()
      )}
    </>
  );
}
