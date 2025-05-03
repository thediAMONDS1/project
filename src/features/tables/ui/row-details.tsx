import { Dialog, DialogContent, DialogTitle } from "@/shared/ui/dialog";

interface RowDetailsProps<TData> {
  row: TData | null;
  onClose: () => void;
}

export function RowDetails<TData>({ row, onClose }: RowDetailsProps<TData>) {
  return (
    <Dialog open={!!row} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Row Details</DialogTitle>
        {row && (
          <div className="p-4">
            {Object.entries(row).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {String(value)}
              </p>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
