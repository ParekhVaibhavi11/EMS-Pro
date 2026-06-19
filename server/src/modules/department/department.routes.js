import express from "express";

import {
  createDepartment
} from "./department.controller.js";

import {
  authenticate
} from "../../middleware/auth.middleware.js";

import {
  authorize
} from "../../middleware/role.middleware.js";

import {
  getDepartments,
  getDepartmentById,
  assignManager
} from "./department.controller.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createDepartment
);

router.get(
  "/",
  authenticate,
  getDepartments
);

router.get(
  "/:id",
  authenticate,
  getDepartmentById
);

router.post(
  "/:departmentId/assign-manager",
  authenticate,
  authorize("ADMIN"),
  assignManager
);

export default router;