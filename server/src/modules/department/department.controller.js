import { createDepartmentSchema } from "./department.validation.js";
import { createDepartmentService } from "./department.service.js";

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