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
  createOrderAction,
  CreateOrderFormState,
} from "../actions/create-order";
import { useActionState } from "@/shared/lib/react";
import { CreateFormLayout } from "../ui/create-form-layouts";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SubmitButton } from "@/shared/ui/submit-button";
import { OrderFields } from "../ui/order-fields";

export function CreateOrderButton() {
  const [open, setOpen] = useState(false);

  const [formState, action, isPending] = useActionState(
    createOrderAction,
    {} as CreateOrderFormState
  );
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Order
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle />
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={<OrderFields {...formState} />}
          actions={
            <SubmitButton isPending={isPending}>Create Order</SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
