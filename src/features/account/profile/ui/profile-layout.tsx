"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import React from "react";
import { CircleUser } from "lucide-react";
import { Sidebar } from "../../ui/sidebar";

export function ProfileLayout({
  data,
  fields,
  actions,
  error,
  action,
}: {
  data?: {
    login?: string;
    role?: string;
  };
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
            <CardTitle className="text-2xl font-bold">Profile</CardTitle>
            <CardDescription>Update your profile information.</CardDescription>
            <div className="text-left">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <CircleUser className="h-5 w-5" />
                {data?.login}
              </h2>
              <p className="text-sm text-muted-foreground">{data?.role}</p>
            </div>
            <Avatar className="w-32 h-32 mx-auto">
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
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
