import { z } from "zod";

export const createManagerSchema =
  z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),

    email: z.email(),

    phone: z.string().min(10),

    designation: z.string().min(2),

    salary: z.number().positive()
  });