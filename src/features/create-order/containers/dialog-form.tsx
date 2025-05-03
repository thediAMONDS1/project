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
import { ScrollArea } from "@/shared/ui/scroll-area";
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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Order</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4 px-8">
          <CreateFormLayout
            action={action}
            fields={<OrderFields {...formState} />}
            actions={
              <SubmitButton isPending={isPending}>Create Order</SubmitButton>
            }
            error={<ErrorMessage error={formState.errors?._errors} />}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
