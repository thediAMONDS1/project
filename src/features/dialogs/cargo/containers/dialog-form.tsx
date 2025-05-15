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
  createCargoAction,
  CreateCargoFormState,
} from "../actions/create-cargo";
import { useActionState } from "@/shared/lib/react";
import { CreateFormLayout } from "../../create-form-layouts";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SubmitButton } from "@/shared/ui/submit-button";
import { CargoFields } from "../fields/cargo-fields";

export function CreateCargoButton() {
  const [open, setOpen] = useState(false);

  const [formState, action, isPending] = useActionState(
    createCargoAction,
    {} as CreateCargoFormState
  );
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Cargo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle />
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={<CargoFields {...formState} />}
          actions={
            <SubmitButton isPending={isPending}>Create Cargo</SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
