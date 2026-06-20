import { z } from "zod";

export const createLeaveSchema =
  z.object({

    employeeId:
      z.string(),

    leaveType:
      z.string(),

    startDate:
      z.string(),

    endDate:
      z.string(),

    reason:
      z.string().optional()

  });