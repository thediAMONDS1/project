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

import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";

export function AuthFormLayout({
  actions,
  description,
  fields,
  link,
  title,
  error,
  action,
}: {
  title: string;
  description: string;
  fields: React.ReactNode;
  actions: React.ReactNode;
  link: React.ReactNode;
  error: React.ReactNode;
  action: (formData: FormData) => void;
}) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center text-white p-4">
        <div className="text-center">
          <div className="mb-8">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={320}
                height={320}
                className="mx-auto"
              />
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-center max-w-md mx-auto">
            Our platform is designed to manage the transportation processes of
            bulk mineral cargo. We provide modern tools that simplify logistics,
            enhance efficiency, and ensure transparency. Join us and become part
            of the innovations in the industry.
          </p>
        </div>
      </main>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {title}
          </CardTitle>
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action} className="space-y-4">
            {fields}
            {error}
            {actions}
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">{link}</CardFooter>
      </Card>
    </>
  );
}
