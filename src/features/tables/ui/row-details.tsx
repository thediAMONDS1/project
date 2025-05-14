import { Dialog, DialogContent, DialogTitle } from "@/shared/ui/dialog";
import { ColumnDef } from "@tanstack/react-table";

interface RowDetailsProps<TData> {
  row: TData | null;
  onClose: () => void;
  title?: string;
  columns?: ColumnDef<TData, any>[];
}

export function RowDetails<TData>({
  row,
  onClose,
  title,
  columns = [],
}: RowDetailsProps<TData>) {
  const headersMap = new Map(
    columns
      .filter((col) => typeof (col as any).accessorKey === "string")
      .map((col) => [(col as any).accessorKey as string, col.header as string])
  );

  return (
    <Dialog open={!!row} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Row Details{title ? ` - ${title}` : ""}</DialogTitle>
        {row && (
          <div className="p-4">
            {Object.entries(row).map(([key, value]) => (
              <p key={key}>
                <strong>{headersMap.get(key) || key}:</strong> {String(value)}
              </p>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
