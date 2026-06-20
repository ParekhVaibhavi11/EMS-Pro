import express from "express";

import {
  createPayroll,
  getPayrolls,
  getPayrollByEmployee,
  markPayrollPaid
}
from "./payroll.controller.js";

import {
  authenticate
}
from "../../middleware/auth.middleware.js";

import {
  authorize
}
from "../../middleware/role.middleware.js";

const router =
  express.Router();

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createPayroll
);

router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  getPayrolls
);

router.get(
  "/employee/:employeeId",
  authenticate,
  getPayrollByEmployee
);

router.patch(
  "/:id/pay",
  authenticate,
  authorize("ADMIN"),
  markPayrollPaid
);

export default router;