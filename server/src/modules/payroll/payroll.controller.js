import {
  createPayrollSchema
}
from "./payroll.validation.js";

import {
  createPayrollService,
  getPayrollsService,
  getPayrollByEmployeeService,
  markPayrollPaidService
}
from "./payroll.service.js";

export const createPayroll =
  async (req, res) => {

    try {

      const validatedData =
        createPayrollSchema.parse(
          req.body
        );

      const result =
        await createPayrollService(
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

export const getPayrolls =
  async (req, res) => {

    try {

      const payrolls =
        await getPayrollsService();

      res.status(200).json({

        success: true,

        count:
          payrolls.length,

        data:
          payrolls

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message

      });

    }

  };

export const getPayrollByEmployee =
  async (req, res) => {

    try {

      const payrolls =
        await getPayrollByEmployeeService(
          req.params.employeeId
        );

      res.status(200).json({

        success: true,

        data:
          payrolls

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message

      });

    }

  };

export const markPayrollPaid =
  async (req, res) => {

    try {

      const result =
        await markPayrollPaidService(
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