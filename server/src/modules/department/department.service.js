import prisma from "../../config/prisma.js";

export const createDepartmentService =
  async (data) => {

    const existing =
      await prisma.department.findUnique({
        where: {
          name: data.name
        }
      });

    if (existing) {
      throw new Error(
        "Department already exists"
      );
    }

    const department =
      await prisma.department.create({
        data
      });

    return department;
};