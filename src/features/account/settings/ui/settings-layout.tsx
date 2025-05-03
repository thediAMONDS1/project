"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import React from "react";
import { Sidebar } from "../../ui/sidebar";

export function SettingsLayout({
  fields,
  actions,
  error,
  action,
}: {
  fields: React.ReactNode;
  actions: React.ReactNode;
  error: React.ReactNode;
  action: (formData: FormData) => void;
}) {
  return (
    <div className="mt-8 flex items-start justify-center">
      <Sidebar />
      <div className="flex gap-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Settings</CardTitle>
            <CardDescription>Settings layout.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={action} className="space-y-4">
              <div className="space-y-2"></div>
              {fields}
              {error}
              {actions}
            </form>
          </CardContent>
          <CardFooter className="flex justify-end"></CardFooter>
        </Card>
      </div>
    </div>
  );
}
