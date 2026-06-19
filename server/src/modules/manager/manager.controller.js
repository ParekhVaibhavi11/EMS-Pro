import {
  createManagerSchema
} from "./manager.validation.js";

import {
  createManagerService,
  getManagersService
} from "./manager.service.js";

export const createManager =
  async (req, res) => {

    try {

      const validatedData =
        createManagerSchema.parse(
          req.body
        );

      const result =
        await createManagerService(
          validatedData
        );

      res.status(201).json({
        success: true,
        data: result
      });

    } catch (error) {

      res.status(400).json({
        success: false,
        message: error.message
      });

    }

  };

  export const getManagers =
  async (req, res) => {

    try {

      const managers =
        await getManagersService();

      res.status(200).json({
        success: true,
        count: managers.length,
        data: managers
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });

    }

  };