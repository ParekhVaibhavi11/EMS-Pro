import prisma from "../../config/prisma.js";

export const createPayrollService =
  async (data) => {

    const existing =
      await prisma.payroll.findFirst({

        where: {
          employeeId:
            data.employeeId,

          month:
            data.month,

          year:
            data.year
        }

      });

    if (existing) {

      throw new Error(
        "Payroll already generated for this month"
      );

    }

    const employee =
      await prisma.employee.findUnique({

        where: {
          id:
            data.employeeId
        }

      });

    if (!employee) {

      throw new Error(
        "Employee not found"
      );

    }

    const basicSalary =
      Number(
        employee.salary
      );

    const bonus =
      Number(
        data.bonus || 0
      );

    const deductions =
      Number(
        data.deductions || 0
      );

    const tax =
      Number(
        data.tax || 0
      );

    const netSalary =
      basicSalary +
      bonus -
      deductions -
      tax;

    return prisma.payroll.create({

      data: {

        employeeId:
          data.employeeId,

        month:
          data.month,

        year:
          data.year,

        basicSalary,

        bonus,

        deductions,

        tax,

        netSalary

      }

    });

};

export const getPayrollsService =
  async () => {

    return prisma.payroll.findMany({

      include: {

        employee: {

          select: {
            id: true,
            employeeCode: true,
            firstName: true,
            lastName: true,
            designation: true
          }

        }

      },

      orderBy: {
        createdAt: "desc"
      }

    });

};

export const getPayrollByEmployeeService =
  async (employeeId) => {

    return prisma.payroll.findMany({

      where: {
        employeeId
      },

      orderBy: {
        createdAt: "desc"
      }

    });

};

export const markPayrollPaidService =
  async (id) => {

    return prisma.payroll.update({

      where: {
        id
      },

      data: {
        paymentStatus:
          "PAID"
      }

    });

};