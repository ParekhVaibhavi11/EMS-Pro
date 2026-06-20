import express from "express";

import {
  createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deactivateEmployee,
    activateEmployee
} from "./employee.controller.js";

import {
  authenticate
} from "../../middleware/auth.middleware.js";

import {
  authorize
} from "../../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createEmployee
);

router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  getEmployees
);

router.get(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  getEmployeeById
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  updateEmployee
);

router.patch(
  "/:id/deactivate",
  authenticate,
  authorize("ADMIN"),
  deactivateEmployee
);

router.patch(
  "/:id/activate",
  authenticate,
  authorize("ADMIN"),
  activateEmployee
);
export default router;