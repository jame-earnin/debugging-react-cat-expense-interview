import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExpenseSchema, expenseSchema } from "../../types/expense";
import { EXPENSE_TYPES } from "../../constants";
import { useCatFact } from "../hooks/useCatFact.tsx";

interface AddDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (data: ExpenseSchema) => void;
}

export default function AddDialog({
  open,
  onOpenChange,
  onCreate,
}: AddDialogProps) {
  const form = useForm<ExpenseSchema>({
    resolver: zodResolver(expenseSchema),
  });
  const { data, isLoading, isError} = useCatFact({ open });

  const handleCreate = (data: ExpenseSchema) => {
    form.reset({});
    onCreate(data);
    onOpenChange(open);
  };

  const handleOpenChange = (open: boolean) => {
    console.log("handleOpenChange", open);
    if (!open) {
      form.reset({});
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader className="font-medium text-xl">
          Add an expense
        </DialogHeader>

        <div className="flex gap-8">
          <form onSubmit={form.handleSubmit(handleCreate)}>
            <div className="grid grid-cols-2 min-w-[250px] flex-col gap-2 items-center">
              <div>Item</div>
              <div>
                <Controller
                  name="item"
                  control={form.control}
                  rules={{ required: "Item name is required" }}
                  render={({ field, fieldState }) => {
                    return (
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error?.message}
                        placeholder="Item name"
                      />
                    );
                  }}
                />
              </div>
              <div>Category</div>
              <div>
                <Controller
                  control={form.control}
                  name="category"
                  render={({ field, fieldState }) => {
                    return (
                      <>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          
                        >
                          <SelectTrigger placeholder="Select category" >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {EXPENSE_TYPES.map((type) => {
                              return (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <div className="text-xs text-red-500">
                          {fieldState?.error?.message}
                        </div>
                      </>
                    );
                  }}
                />
              </div>
              <div>Amount</div>
              <div>
                <Controller
                  name="amount"
                  control={form.control}
                  render={({ field, fieldState }) => {
                    return (
                      <Input
                        type="number"
                        value={field.value}
                        onChange={(event) =>
                          field.onChange(event.target.valueAsNumber)
                        }
                        placeholder="Item amount"
                        error={fieldState.error?.message}
                      />
                    );
                  }}
                />
              </div>
              <Button type="submit" className="mt-4">
                Submit
              </Button>
            </div>
          </form>
          <div className="w-60">
            <div className="font-medium">😸 Random cat fact:</div>
            {isLoading ? (
              <div className="italic mt-2">Loading...</div>
            ) : isError ?
            (
                <div className="text-sm mt-2">Error loading cat fact</div>
            ) :
             data ? (
              <div className="text-sm mt-2">{data.fact}</div>
            ) : (
              <div className="italic mt-2">No cat fact</div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
