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

import { useActionState } from "@/shared/lib/react";
import { CreateFormLayout } from "../../create-form-layouts";
import { ErrorMessage } from "@/shared/ui/alert-description";
import { SubmitButton } from "@/shared/ui/submit-button";
import { CargoLoadFields } from "../fields/cargo-load-fields";
import {
  createCargoLoadAction,
  CreateCargoLoadFormState,
} from "../actions/create-cargo-load";

type CargoActIn = { id: bigint; act_in_number: number };
type VesselVoyage = { id: bigint };
type Shipper = { id: bigint; shipper_name: string };
type Consignee = { id: bigint; consignee_name: string };

type CargoLoadFormProps = {
  shipper: Shipper[];
  consignee: Consignee[];
  vessel_voyage: VesselVoyage[];
  cargo_act_in: CargoActIn[];
};

export function CargoLoadButton({
  shipper,
  consignee,
  vessel_voyage,
  cargo_act_in,
}: CargoLoadFormProps) {
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
          Добавить отгрузку груза
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавление отгрузки груза</DialogTitle>
        </DialogHeader>
        <CreateFormLayout
          action={action}
          fields={
            <CargoLoadFields
              {...formState}
              cargo_act_in={cargo_act_in}
              vessel_voyage={vessel_voyage}
              shipper={shipper}
              consignee={consignee}
            />
          }
          actions={
            <SubmitButton isPending={isPending}>
              Добавить отгрузку груза
            </SubmitButton>
          }
          error={<ErrorMessage error={formState.errors?._errors} />}
        />
      </DialogContent>
    </Dialog>
  );
}
