"use client";

import { Label } from "@/shared/ui/label";
import { Switch } from "@/shared/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { useState } from "react";
import { Button } from "@/shared/ui/button";

interface SettingsFieldsProps {
  formData: FormData;
  errors?: {
    id?: string;
    theme?: string;
    language?: string;
    _errors?: string;
  };
}

export function SettingsFields({ errors }: SettingsFieldsProps) {
  const [language, setLanguage] = useState("ru");
  const [theme, setTheme] = useState("bl");
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Theme</Label>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger id="theme-select">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bl">Black</SelectItem>
              <SelectItem value="wh">White</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Language</Label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger id="language-select">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ru">Russian</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Delete account</Label>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>

      {errors?._errors && (
        <div className="text-red-500 text-sm mt-2">{errors._errors}</div>
      )}
    </div>
  );
}
