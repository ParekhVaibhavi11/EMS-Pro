import {
  createEmployeeService,
  getEmployeesService,
  getEmployeeByIdService
} from "./employee.service.js";

import {
  createEmployeeSchema
} from "./employee.validation.js";



export const createEmployee =
  async (req, res) => {

    try {

      const validatedData =
        createEmployeeSchema.parse(
          req.body
        );

      const result =
        await createEmployeeService(
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

  export const getEmployees =
  async (req, res) => {

    try {

      const employees =
        await getEmployeesService();

      res.status(200).json({
        success: true,
        count: employees.length,
        data: employees
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });

    }

  };

  export const getEmployeeById =
  async (req, res) => {

    try {

      const employee =
        await getEmployeeByIdService(
          req.params.id
        );

      res.status(200).json({
        success: true,
        data: employee
      });

    } catch (error) {

      res.status(404).json({
        success: false,
        message: error.message
      });

    }

  };