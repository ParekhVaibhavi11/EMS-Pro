import prisma from "../../config/prisma.js";

export const getEmployeeProfileService =
  async (userId) => {

    return prisma.employee.findUnique({

      where: {
        userId
      },

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

};

export const getEmployeeAttendanceService =
  async (userId) => {

    const employee =
      await prisma.employee.findUnique({
        where: {
          userId
        }
      });

    return prisma.attendance.findMany({

      where: {
        employeeId:
          employee.id
      },

      orderBy: {
        date: "desc"
      }

    });

};

export const getEmployeeLeavesService =
  async (userId) => {

    const employee =
      await prisma.employee.findUnique({
        where: {
          userId
        }
      });

    return prisma.leave.findMany({

      where: {
        employeeId:
          employee.id
      },

      orderBy: {
        createdAt: "desc"
      }

    });

};

export const getEmployeePayrollService =
  async (userId) => {

    const employee =
      await prisma.employee.findUnique({
        where: {
          userId
        }
      });

    return prisma.payroll.findMany({

      where: {
        employeeId:
          employee.id
      },

      orderBy: {
        createdAt: "desc"
      }

    });

};

export const getEmployeeDashboardService =
  async (userId) => {

    const employee =
      await prisma.employee.findUnique({
        where: {
          userId
        }
      });

    const attendanceCount =
      await prisma.attendance.count({

        where: {
          employeeId:
            employee.id,

          status: "PRESENT"
        }

      });

    const approvedLeaves =
      await prisma.leave.count({

        where: {
          employeeId:
            employee.id,

          status: "APPROVED"
        }

      });

    const pendingLeaves =
      await prisma.leave.count({

        where: {
          employeeId:
            employee.id,

          status: "PENDING"
        }

      });

    const latestPayroll =
      await prisma.payroll.findFirst({

        where: {
          employeeId:
            employee.id
        },

        orderBy: {
          createdAt: "desc"
        }

      });

    return {

      attendanceCount,

      approvedLeaves,

      pendingLeaves,

      latestPayroll

    };

};