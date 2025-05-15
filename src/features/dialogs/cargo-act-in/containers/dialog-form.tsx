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
  createCargoActInAction,
  CreateCargoActInFormState,
} from "../actions/create-cargo-act-in";
import { useActionState } from "@/shared/lib/react";
import { CreateFormLayout } from "../../create-form-layouts";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SubmitButton } from "@/shared/ui/submit-button";
import { CargoActInFields } from "../fields/cargo-act-in-fields";

type Status = {
  id: bigint;
  status_name: string;
};

export function CreateCargoActInButton({ status }: { status: Status[] }) {
  const [open, setOpen] = useState(false);

  const [formState, action, isPending] = useActionState(
    createCargoActInAction,
    {} as CreateCargoActInFormState
  );
  console.log(status);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Cargo Act In
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Cargo Act In</DialogTitle>
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={<CargoActInFields {...formState} status={status} />}
          actions={
            <SubmitButton isPending={isPending}>Create Cargo Act</SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
