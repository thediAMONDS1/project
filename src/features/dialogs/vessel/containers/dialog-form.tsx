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
  createVesselAction,
  CreateVesselFormState,
} from "../actions/create-vessel"; // обновлён импорт
import { useActionState } from "@/shared/lib/react";
import { CreateFormLayout } from "../../ui/create-form-layouts";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SubmitButton } from "@/shared/ui/submit-button";
import { VesselFields } from "../fields/vessel-fields"; // обновлён импорт

export function CreateVesselButton() {
  const [open, setOpen] = useState(false);

  const [formState, action, isPending] = useActionState(
    createVesselAction,
    {} as CreateVesselFormState
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Vessel
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Vessel</DialogTitle>
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={<VesselFields {...formState} />}
          actions={
            <SubmitButton isPending={isPending}>Create Vessel</SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
