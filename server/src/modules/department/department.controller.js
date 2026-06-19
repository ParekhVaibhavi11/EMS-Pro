import { createDepartmentSchema } from "./department.validation.js";
import { createDepartmentService } from "./department.service.js";
import {
  getDepartmentsService,
  getDepartmentByIdService
} from "./department.service.js";


export const createDepartment = async (req, res) => {
  try {
    const validatedData =
      createDepartmentSchema.parse(req.body);

    const department =
      await createDepartmentService(validatedData);

    res.status(201).json({
      success: true,
      data: department
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }
};

export const getDepartments =
  async (req, res) => {

    try {

      const departments =
        await getDepartmentsService();

      res.status(200).json({
        success: true,
        count: departments.length,
        data: departments
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message
      });

    }

  };

  export const getDepartmentById =
  async (req, res) => {

    try {

      const department =
        await getDepartmentByIdService(
          req.params.id
        );

      res.status(200).json({
        success: true,
        data: department
      });

    } catch (error) {

      res.status(404).json({
        success: false,
        message: error.message
      });

    }

  };