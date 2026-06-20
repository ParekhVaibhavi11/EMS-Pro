import bcrypt from "bcrypt";
import prisma from "../../config/prisma.js";

export const createManagerService = async (
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

  const managerCount =
    await prisma.user.count({
      where: {
        role: "MANAGER"
      }
    });

  const employeeCode =
    `MGR${String(managerCount + 1)
      .padStart(3, "0")}`;

  const temporaryPassword =
    `${data.firstName}@123`;

  const hashedPassword =
    await bcrypt.hash(
      temporaryPassword,
      10
    );

  const user =
    await prisma.user.create({
      data: {
        username:
          data.email.split("@")[0],

        email: data.email,

        password: hashedPassword,

        role: "MANAGER"
      }
    });

  const manager =
    await prisma.employee.create({
      data: {
        employeeCode,

        firstName: data.firstName,
        lastName: data.lastName,

        phone: data.phone,

        designation:
          data.designation,

        salary: data.salary,

        joiningDate:
          new Date(),

        userId: user.id
      }
    });

  return {
    manager,
    credentials: {
      email: user.email,
      password:
        temporaryPassword
    }
  };
};

export const getManagersService =
  async () => {

    const managers =
      await prisma.employee.findMany({

        where: {
          user: {
            role: "MANAGER"
          }
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

    return managers;
};

export const getManagerByIdService =
  async (id) => {

    return prisma.employee.findUnique({
      where: { id },

      include: {
        user: true,
        department: true
      }
    });

  };

export const updateManagerService =
  async (id, data) => {

    const manager =
      await prisma.employee.findUnique({
        where: { id },
      });

    if (!manager) {
      throw new Error(
        "Manager not found"
      );
    }

    return prisma.employee.update({
      where: { id },

      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        designation: data.designation,
        salary: data.salary,
      },

      include: {
        user: true,
        department: true,
      },
    });
};

export const deactivateManagerService =
  async (id) => {

    return prisma.employee.update({
      where: { id },

      data: {
        isActive: false,
      },
    });
};

export const activateManagerService =
  async (id) => {

    return prisma.employee.update({
      where: { id },

      data: {
        isActive: true,
      },
    });
};