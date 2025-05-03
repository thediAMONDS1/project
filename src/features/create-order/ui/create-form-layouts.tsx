import { CardContent } from "@/shared/ui/card";
import React from "react";

export function CreateFormLayout({
  actions,
  fields,
  error,
  action,
}: {
  fields: React.ReactNode;
  actions: React.ReactNode;
  error: React.ReactNode;
  action: (formData: FormData) => void;
}) {
  return (
    <>
      <CardContent>
        <form action={action} className="space-y-4">
          {fields}
          {error}
          {actions}
        </form>
      </CardContent>
    </>
  );
}
