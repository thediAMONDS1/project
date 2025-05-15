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
  createCargoLoadAction,
  CreateCargoLoadFormState,
} from "../actions/create-cargo-load";
import { useActionState } from "@/shared/lib/react";
import { CreateFormLayout } from "../../create-form-layouts";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SubmitButton } from "@/shared/ui/submit-button";
import { CargoLoadFields } from "../fields/cargo-load-fields";

type CargoActIn = {
  id: bigint;
  act_in_number: number;
};
type VesselVoyage = {
  id: bigint;
};

export function CreateCargoLoadButton({
  vessel_voyage,
  cargo_act_in,
}: {
  vessel_voyage: VesselVoyage[];
  cargo_act_in: CargoActIn[];
}) {
  const [open, setOpen] = useState(false);

  const [formState, action, isPending] = useActionState(
    createCargoLoadAction,
    {} as CreateCargoLoadFormState
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Cargo Load
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Cargo Load</DialogTitle>
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={
            <CargoLoadFields
              {...formState}
              cargo_act_in={cargo_act_in}
              vessel_voyage={vessel_voyage}
            />
          }
          actions={
            <SubmitButton isPending={isPending}>Create Cargo Load</SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
