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
  getTeam,
  getAttendance,
  getLeaves,
  approveLeave,
  rejectLeave,
  getReports

}
from "./managerPortal.controller.js";

const router =
  express.Router();

router.use(
  authenticate
);

router.use(
  authorize("MANAGER")
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
  "/team",
  getTeam
);

router.get(
  "/attendance",
  getAttendance
);

router.get(
  "/leaves",
  getLeaves
);

router.patch(
  "/leaves/:id/approve",
  approveLeave
);

router.patch(
  "/leaves/:id/reject",
  rejectLeave
);

router.get(
  "/reports",
  getReports
);

export default router;