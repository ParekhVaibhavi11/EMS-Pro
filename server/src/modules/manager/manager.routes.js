import express from "express";

import {
  createManager,
    getManagers
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

export default router;