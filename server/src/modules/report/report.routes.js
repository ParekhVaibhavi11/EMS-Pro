import express from "express";

import {
  getDashboardStats,
  getDetailedReports
}
from "./report.controller.js";

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

router.get(
  "/dashboard",
  authenticate,
  authorize("ADMIN"),
  getDashboardStats
);

router.get(
  "/summary",
  authenticate,
  authorize("ADMIN"),
  getDetailedReports
);

export default router;