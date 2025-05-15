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
  createShipperAction,
  CreateShipperFormState,
} from "../actions/create-shipper";
import { useActionState } from "@/shared/lib/react";
import { CreateFormLayout } from "../../create-form-layouts";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SubmitButton } from "@/shared/ui/submit-button";
import { ShipperFields } from "../fields/shipper-fields";

export function CreateShipperButton() {
  const [open, setOpen] = useState(false);

  const [formState, action, isPending] = useActionState(
    createShipperAction,
    {} as CreateShipperFormState
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Создать поставщика
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Создать поставщика</DialogTitle>
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={<ShipperFields {...formState} />}
          actions={
            <SubmitButton isPending={isPending}>
              Создать поставщика
            </SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
