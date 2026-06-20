import {
  createLeaveSchema
}
from "./leave.validation.js";

import {
  createLeaveService,
  getLeavesService,
  approveLeaveService,
  rejectLeaveService
}
from "./leave.service.js";

export const createLeave =
  async (req, res) => {

    try {

      const validatedData =
        createLeaveSchema.parse(
          req.body
        );

      const result =
        await createLeaveService(
          validatedData
        );

      res.status(201).json({
        success: true,
        data: result
      });

    } catch (error) {

      res.status(400).json({
        success: false,
        message:
          error.message
      });

    }

  };

export const getLeaves =
  async (req, res) => {

    try {

      const leaves =
        await getLeavesService();

      res.status(200).json({

        success: true,

        count:
          leaves.length,

        data:
          leaves

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message

      });

    }

  };

export const approveLeave =
  async (req, res) => {

    try {

      const result =
        await approveLeaveService(
          req.params.id
        );

      res.status(200).json({

        success: true,

        data:
          result

      });

    } catch (error) {

      res.status(400).json({

        success: false,

        message:
          error.message

      });

    }

  };

export const rejectLeave =
  async (req, res) => {

    try {

      const result =
        await rejectLeaveService(
          req.params.id
        );

      res.status(200).json({

        success: true,

        data:
          result

      });

    } catch (error) {

      res.status(400).json({

        success: false,

        message:
          error.message

      });

    }

  };