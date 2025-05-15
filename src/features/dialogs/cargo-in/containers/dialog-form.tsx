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
  createCargoInAction,
  CreateCargoInFormState,
} from "../actions/create-cargo-in";
import { useActionState } from "@/shared/lib/react";
import { CreateFormLayout } from "../../create-form-layouts";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SubmitButton } from "@/shared/ui/submit-button";
import { CargoInFields } from "../fields/cargo-in-fields";

type Cargo = {
  id: bigint;
  cargo_name: string;
};
type CargoActIn = {
  id: bigint;
  act_in_number: number;
};
type Wagon = {
  id: bigint;
  wagon_number: number;
};

export function CreateCargoInButton({
  cargo,
  wagon,
  cargo_act_in,
}: {
  cargo: Cargo[];
  wagon: Wagon[];
  cargo_act_in: CargoActIn[];
}) {
  const [open, setOpen] = useState(false);

  const [formState, action, isPending] = useActionState(
    createCargoInAction,
    {} as CreateCargoInFormState
  );
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Cargo In
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle />
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={
            <CargoInFields
              {...formState}
              cargo={cargo}
              cargo_act_in={cargo_act_in}
              wagon={wagon}
            />
          }
          actions={
            <SubmitButton isPending={isPending}>Create Cargo</SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
