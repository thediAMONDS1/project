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
  createVesselVoyageAction,
  CreateVesselVoyageFormState,
} from "../actions/create-vessel-voyage";
import { useActionState } from "@/shared/lib/react";
import { CreateFormLayout } from "../../create-form-layouts";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SubmitButton } from "@/shared/ui/submit-button";
import { VesselVoyageFields } from "../fields/vessel-voyage-fields";
type Vessel = {
  id: bigint;
  vessel_name: string;
};

export function CreateVesselVoyageButton({ vessel }: { vessel: Vessel[] }) {
  const [open, setOpen] = useState(false);

  const [formState, action, isPending] = useActionState(
    createVesselVoyageAction,
    {} as CreateVesselVoyageFormState
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Vessel Voyage
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Vessel Voyage</DialogTitle>
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={<VesselVoyageFields {...formState} vessel={vessel} />}
          actions={
            <SubmitButton isPending={isPending}>Create Voyage</SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
