import { z } from "zod";
import { EXPENSE_TYPES } from "../constants";

export const expenseSchema = z.object({
  item: z.string().trim().min(1, "Item name is required").max(50),
  category: z.string().refine((category) => EXPENSE_TYPES.map((type) => type.value).includes(category), "You must choose a category"),
  amount: z.number().int().positive(),
  createdAt: z.string().optional(),
});

export type ExpenseSchema = z.infer<typeof expenseSchema>;

export type Expense = ExpenseSchema;
