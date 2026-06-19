import express from "express";

import {
  authenticate
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.get(
  "/protected",
  authenticate,
  (req, res) => {

    res.json({
      success: true,
      message: "Protected Route Accessed",
      user: req.user
    });

  }
);

export default router;