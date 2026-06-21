import express from "express";

import {
  getProfile,
  updateProfile,
  changePassword,
  getSystemSettings,
updateSystemSettings
}
from "./settings.controller.js";

import {
  authenticate
}
from "../../middleware/auth.middleware.js";

const router =
  express.Router();

router.get(
  "/profile",
  authenticate,
  getProfile
);

router.put(
  "/profile",
  authenticate,
  updateProfile
);

router.patch(
  "/change-password",
  authenticate,
  changePassword
);

router.get(
  "/system",
  authenticate,
  getSystemSettings
);

router.put(
  "/system",
  authenticate,
  updateSystemSettings
);

export default router;