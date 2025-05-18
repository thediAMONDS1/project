import { Card, CardContent } from "@/shared/ui/card";
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
    <CardContent className="p-2 flex flex-col justify-between space-y-6">
      <form action={action} className="space-y-6">
        <div className="space-y-4">{fields}</div>
        {error && (
          <div className="text-red-500 text-sm font-medium">{error}</div>
        )}
        <div className="pt-6 border-t border-border">{actions}</div>
      </form>
    </CardContent>
  );
}
