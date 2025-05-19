"use client";

import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Mail, Phone, User } from "lucide-react";
import { useState, useEffect } from "react";

export function ProfileFields({
  errors,
  data,
}: {
  errors?: {
    login?: string;
    email?: string;
    phone?: string;
    name?: string;
    last_name?: string;
  };
  data?: {
    login?: string;
    email?: string;
    phone?: string;
    name?: string;
    last_name?: string;
    role?: string;
  };
}) {
  const [email, setEmail] = useState(data?.email || "");
  const [phone, setPhone] = useState(data?.phone || "");
  const [name, setName] = useState(data?.name || "");
  const [last_name, setLastName] = useState(data?.last_name || "");

  useEffect(() => {
    if (data) {
      setEmail(data.email || "");
      setPhone(data.phone || "");
      setName(data.name || "");
      setLastName(data.last_name || "");
    }
  }, [data]);

  return (
    <div className="space-y-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="emailId" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Почта
          </Label>
          <Input
            id="emailId"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors?.email && (
            <div className="text-xs text-destructive mt-1">{errors.email}</div>
          )}
        </div>
        <div className="space-y-2 ">
          <Label htmlFor="phoneId" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Телефон
          </Label>
          <Input
            id="phoneId"
            name="phone"
            placeholder="Enter your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors?.phone && (
            <div className="text-xs text-destructive mt-1">{errors.phone}</div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="nameId" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Имя
          </Label>
          <Input
            id="nameId"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors?.name && (
            <div className="text-xs text-destructive mt-1">{errors.name}</div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastNameId" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Фамилия
          </Label>
          <Input
            id="lastNameId"
            name="last_name"
            placeholder="Enter your last name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors?.last_name && (
            <div className="text-xs text-destructive mt-1">
              {errors.last_name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
