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
  createConsigneeAction,
  CreateConsigneeFormState,
} from "../actions/create-consignee";
import { useActionState } from "@/shared/lib/react";
import { CreateFormLayout } from "../../create-form-layouts";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SubmitButton } from "@/shared/ui/submit-button";
import { ConsigneeFields } from "../fields/consignee-fields";

export function CreateConsigneeButton() {
  const [open, setOpen] = useState(false);

  const [formState, action, isPending] = useActionState(
    createConsigneeAction,
    {} as CreateConsigneeFormState
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Создать грузополучателя
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Создать грузополучателя</DialogTitle>
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={<ConsigneeFields {...formState} />}
          actions={
            <SubmitButton isPending={isPending}>
              Создать грузополучателя
            </SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
