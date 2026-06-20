import express from "express";

import {
  createLeave,
  getLeaves,
  approveLeave,
  rejectLeave
}
from "./leave.controller.js";

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
  createLeave
);

router.get(
  "/",
  authenticate,
  authorize(
    "ADMIN",
    "MANAGER"
  ),
  getLeaves
);

router.patch(
  "/:id/approve",
  authenticate,
  authorize("ADMIN"),
  approveLeave
);

router.patch(
  "/:id/reject",
  authenticate,
  authorize("ADMIN"),
  rejectLeave
);

export default router;