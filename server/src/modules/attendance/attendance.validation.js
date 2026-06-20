import { z } from "zod";

export const markAttendanceSchema =
  z.object({
    employeeId: z.string(),
    status: z.string()
  });