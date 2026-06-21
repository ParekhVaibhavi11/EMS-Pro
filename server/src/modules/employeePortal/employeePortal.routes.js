import express from "express";

import {
  authenticate
}
from "../../middleware/auth.middleware.js";

import {
  authorize
}
from "../../middleware/role.middleware.js";

import {

  getDashboard,

  getProfile,

  getAttendance,

  getLeaves,

  getPayroll

}
from "./employeePortal.controller.js";

const router =
  express.Router();

router.use(
  authenticate
);

router.use(
  authorize("EMPLOYEE")
);

router.get(
  "/dashboard",
  getDashboard
);

router.get(
  "/profile",
  getProfile
);

router.get(
  "/attendance",
  getAttendance
);

router.get(
  "/leaves",
  getLeaves
);

router.get(
  "/payroll",
  getPayroll
);

export default router;