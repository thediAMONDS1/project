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
          Добавить грузополучателя
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавление грузополучателя</DialogTitle>
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={<ConsigneeFields {...formState} />}
          actions={
            <SubmitButton isPending={isPending}>
              Добавить грузополучателя
            </SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
