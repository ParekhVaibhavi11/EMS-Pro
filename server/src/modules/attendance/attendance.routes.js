import express from "express";

import {
  markAttendance,
  getAttendance,
  getAttendanceByEmployee
}
from "./attendance.controller.js";

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
  authorize(
    "ADMIN",
    "MANAGER"
  ),
  markAttendance
);

router.get(
  "/",
  authenticate,
  authorize(
    "ADMIN",
    "MANAGER"
  ),
  getAttendance
);

router.get(
  "/employee/:employeeId",
  authenticate,
  getAttendanceByEmployee
);

export default router;