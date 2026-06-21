import bcrypt from "bcrypt";
import prisma from "../../config/prisma.js";

export const createEmployeeService = async (
  data
) => {

  const existingUser =
    await prisma.user.findUnique({
      where: {
        email: data.email
      }
    });

  if (existingUser) {
    throw new Error(
      "Email already exists"
    );
  }

  const count =
    await prisma.employee.count();

  const employeeCode =
    `EMP${String(count + 1).padStart(3, "0")}`;

  const generatedPassword =
  `${data.firstName}@123`;

const hashedPassword =
  await bcrypt.hash(
    generatedPassword,
    10
  );


const user =
  await prisma.user.create({

    data: {

      username:
        employeeCode,

      email:
        data.email,

      password:
        hashedPassword,

      role:
        "EMPLOYEE",

    }

  });

  const employee =
    await prisma.employee.create({
      data: {
        employeeCode,

        firstName: data.firstName,
        lastName: data.lastName,

        phone: data.phone,

        gender: data.gender,

        address: data.address,

        designation:
          data.designation,

        salary: data.salary,

        joiningDate:
          new Date(),

        userId: user.id
      }
    });
   return {

  employee,

  credentials: {

    username:
      employeeCode,

    password:
      generatedPassword

  }

};
};

export const getEmployeesService =
  async () => {

    const employees =
      await prisma.employee.findMany({
        include: {
          user: {
            select: {
              email: true,
              role: true
            }
          },

          department: true
        }
      });

    return employees;
};

export const getEmployeeByIdService =
  async (id) => {

    const employee =
      await prisma.employee.findUnique({
        where: {
          id
        },

        include: {
          user: {
            select: {
              email: true,
              role: true,
              isActive: true
            }
          },

          department: true
        }
      });

    if (!employee) {
      throw new Error(
        "Employee not found"
      );
    }

    return employee;
};

export const updateEmployeeService =
  async (id, data) => {

    const employee =
      await prisma.employee.findUnique({
        where: { id }
      });

    if (!employee) {
      throw new Error(
        "Employee not found"
      );
    }

    const updatedEmployee =
      await prisma.employee.update({
        where: { id },

        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          designation: data.designation,
          salary: data.salary
        },

        include: {
          user: true,
          department: true
        }
      });

    return updatedEmployee;
};

export const deactivateEmployeeService =
  async (id) => {

    const employee =
      await prisma.employee.findUnique({
        where: { id }
      });

    if (!employee) {
      throw new Error(
        "Employee not found"
      );
    }

    return prisma.employee.update({
      where: { id },

      data: {
        isActive: false
      }
    });
};

export const activateEmployeeService =
  async (id) => {

    const employee =
      await prisma.employee.findUnique({
        where: { id }
      });

    if (!employee) {
      throw new Error(
        "Employee not found"
      );
    }

    return prisma.employee.update({
      where: { id },

      data: {
        isActive: true
      }
    });
};

  