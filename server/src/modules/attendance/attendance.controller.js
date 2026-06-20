import {
  markAttendanceSchema
}
from "./attendance.validation.js";

import {
  markAttendanceService,
  getAttendanceService,
  getAttendanceByEmployeeService
}
from "./attendance.service.js";

export const markAttendance =
  async (req, res) => {

    try {

      const validatedData =
        markAttendanceSchema.parse(
          req.body
        );

      const result =
        await markAttendanceService(
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

export const getAttendance =
  async (req, res) => {

    try {

      const records =
        await getAttendanceService();

      res.status(200).json({

        success: true,

        count:
          records.length,

        data:
          records

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message

      });

    }

  };

export const getAttendanceByEmployee =
  async (req, res) => {

    try {

      const records =
        await getAttendanceByEmployeeService(
          req.params.employeeId
        );

      res.status(200).json({

        success: true,

        count:
          records.length,

        data:
          records

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message

      });

    }

  };