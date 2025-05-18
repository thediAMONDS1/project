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
  createWarehouseAction,
  CreateWarehouseFormState,
} from "../actions/create-warehouse";
import { useActionState } from "@/shared/lib/react";
import { CreateFormLayout } from "../../create-form-layouts";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SubmitButton } from "@/shared/ui/submit-button";
import { WarehouseFields } from "../fields/warehouse-fields";

export function CreateWarehouseButton() {
  const [open, setOpen] = useState(false);

  const [formState, action, isPending] = useActionState(
    createWarehouseAction,
    {} as CreateWarehouseFormState
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Добавить склад
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавление склада</DialogTitle>
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={<WarehouseFields {...formState} />}
          actions={
            <SubmitButton isPending={isPending}>Добавить склад</SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
