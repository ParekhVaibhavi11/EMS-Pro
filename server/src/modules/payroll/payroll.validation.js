import { z } from "zod";

export const createPayrollSchema =
  z.object({

    employeeId:
      z.string(),

    month:
      z.number(),

    year:
      z.number(),

    bonus:
      z.number()
      .optional(),

    deductions:
      z.number()
      .optional(),

    tax:
      z.number()
      .optional()

  });