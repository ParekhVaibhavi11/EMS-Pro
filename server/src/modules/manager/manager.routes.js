import express from "express";

import {
  createManager,
    getManagers,
    updateManager,
    deactivateManager,
    activateManager
} from "./manager.controller.js";

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
  createManager
);

router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  getManagers
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  updateManager
);

router.patch(
  "/:id/deactivate",
  authenticate,
  authorize("ADMIN"),
  deactivateManager
);

router.patch(
  "/:id/activate",
  authenticate,
  authorize("ADMIN"),
  activateManager
);

export default router;