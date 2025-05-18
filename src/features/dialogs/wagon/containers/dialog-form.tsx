"use client";
import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";

import {
  createWagonAction,
  CreateWagonFormState,
} from "../actions/create-wagon";
import { useActionState } from "@/shared/lib/react";
import { CreateFormLayout } from "../../create-form-layouts";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SubmitButton } from "@/shared/ui/submit-button";
import { WagonFields } from "../fields/wagon-fields";

export function CreateWagonButton() {
  const [open, setOpen] = useState(false);

  const [formState, action, isPending] = useActionState(
    createWagonAction,
    {} as CreateWagonFormState
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Добавить вагон
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавление вагона</DialogTitle>
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={<WagonFields {...formState} />}
          actions={
            <SubmitButton isPending={isPending}>Добавить вагон</SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
