import express from "express";

import {
  createEmployee,
    getEmployees,
    getEmployeeById
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

export default router;