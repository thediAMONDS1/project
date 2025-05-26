import { Dialog, DialogContent, DialogTitle } from "@/shared/ui/dialog";
import { ColumnDef } from "@tanstack/react-table";

interface RowDetailsProps<TData> {
  row: TData | null;
  onClose: () => void;
  title?: string;
  columns?: ColumnDef<TData, any>[];
  status?: { id: bigint; status_name: string }[];
  cargo?: { id: bigint; cargo_name: string }[];
  cargo_act_in?: { id: bigint; act_in_number: number }[];
  wagon?: { id: bigint; wagon_number: number }[];
  vessel?: { id: bigint; vessel_name: string }[];
  shipper?: { id: bigint; shipper_name: string }[];
  consignee?: { id: bigint; consignee_name: string }[];
  warehouse?: { id: bigint; warehouse_number: number }[];
}

export function RowDetails<TData>({
  row,
  onClose,
  title,
  columns = [],
  status,
  cargo,
  cargo_act_in,
  wagon,
  vessel,
  shipper,
  consignee,
  warehouse,
}: RowDetailsProps<TData>) {
  const headersMap = new Map(
    columns
      .filter((col) => typeof (col as any).accessorKey === "string")
      .map((col) => [(col as any).accessorKey as string, col.header as string])
  );

  const lookupMaps = {
    status_id: new Map(status?.map((s) => [s.id, s.status_name])),
    cargo_id: new Map(cargo?.map((c) => [c.id, c.cargo_name])),
    cargo_act_in_id: new Map(
      cargo_act_in?.map((c) => [c.id, c.act_in_number.toString()])
    ),
    wagon_id: new Map(wagon?.map((w) => [w.id, w.wagon_number.toString()])),
    vessel_id: new Map(vessel?.map((v) => [v.id, v.vessel_name])),
    shipper_id: new Map(shipper?.map((s) => [s.id, s.shipper_name])),
    consignee_id: new Map(consignee?.map((c) => [c.id, c.consignee_name])),
    warehouse_id: new Map(
      warehouse?.map((w) => [w.id, w.warehouse_number.toString()])
    ),
  };

  function resolveDisplayValue(key: string, value: any): string {
    const map = (lookupMaps as any)[key] as Map<bigint, string> | undefined;
    if (map && value !== null && value !== undefined) {
      return map.get(BigInt(value)) ?? String(value);
    }
    return String(value);
  }

  return (
    <Dialog open={!!row} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>
          <div>
            <div>Детали строки</div>
            {title && <div className="text-sm text-gray-500">Из '{title}'</div>}
          </div>
        </DialogTitle>
        {row && (
          <div className="p-4">
            {Object.entries(row).map(([key, value]) => (
              <p key={key}>
                <strong>{headersMap.get(key) || key}:</strong>{" "}
                {resolveDisplayValue(key, value)}
              </p>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
