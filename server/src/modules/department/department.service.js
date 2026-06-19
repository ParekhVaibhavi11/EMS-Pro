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

export const getDepartmentsService =
  async () => {

    const departments =
      await prisma.department.findMany({
        where: {
          isActive: true
        },

        orderBy: {
          name: "asc"
        }
      });

    return departments;
};

export const getDepartmentByIdService =
  async (id) => {

    const department =
      await prisma.department.findUnique({
        where: {
          id
        },

        include: {
          employees: {
            select: {
              id: true,
              employeeCode: true,
              firstName: true,
              lastName: true,
              designation: true,
              isActive: true
            }
          }
        }
      });

    if (!department) {
      throw new Error(
        "Department not found"
      );
    }

    return department;
};

export const assignManagerService =
  async (
    departmentId,
    managerId
  ) => {

    const department =
      await prisma.department.findUnique({
        where: {
          id: departmentId
        }
      });

    if (!department) {
      throw new Error(
        "Department not found"
      );
    }

    const manager =
      await prisma.employee.findUnique({
        where: {
          id: managerId
        },

        include: {
          user: true
        }
      });

    if (!manager) {
      throw new Error(
        "Manager not found"
      );
    }

    if (
      manager.user.role !== "MANAGER"
    ) {
      throw new Error(
        "Selected employee is not a manager"
      );
    }

    const updatedDepartment =
      await prisma.department.update({
        where: {
          id: departmentId
        },

        data: {
          managerId
        }
      });

    return updatedDepartment;
};