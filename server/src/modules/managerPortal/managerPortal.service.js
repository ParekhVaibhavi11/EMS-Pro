import prisma from "../../config/prisma.js";

const getManagerDepartment =
  async (userId) => {

    const manager =
      await prisma.employee.findUnique({

        where: {
          userId
        },

        include: {
          managedDepartment: true
        }

      });

    if (
      !manager ||
      !manager.managedDepartment
    ) {

      throw new Error(
        "No department assigned"
      );

    }

    return manager.managedDepartment;

};

export const getManagerDashboardService =
  async (userId) => {

    const department =
      await getManagerDepartment(
        userId
      );

    const teamSize =
      await prisma.employee.count({

        where: {
          departmentId:
            department.id,

          user: {
            role:
              "EMPLOYEE"
          }
        }

      });

    const pendingLeaves =
      await prisma.leave.count({

        where: {

          status:
            "PENDING",

          employee: {

            departmentId:
              department.id,

            user: {
              role:
                "EMPLOYEE"
            }

          }

        }

      });

    const attendanceToday =
      await prisma.attendance.count({

        where: {

          status:
            "PRESENT",

          employee: {

            departmentId:
              department.id

          }

        }

      });

    return {

      department:
        department.name,

      teamSize,

      pendingLeaves,

      attendanceToday

    };

};

export const getManagerProfileService =
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

        managedDepartment:
          true

      }

    });

};

export const getManagerTeamService =
  async (userId) => {

    const department =
      await getManagerDepartment(
        userId
      );

    return prisma.employee.findMany({

      where: {

        departmentId:
          department.id,

        user: {
          role:
            "EMPLOYEE"
        }

      },

      include: {

        user: {

          select: {

            email: true

          }

        }

      },

      orderBy: {

        firstName:
          "asc"

      }

    });

};

export const getManagerAttendanceService =
  async (userId) => {

    const department =
      await getManagerDepartment(
        userId
      );

    return prisma.attendance.findMany({

      where: {

        employee: {

          departmentId:
            department.id

        }

      },

      include: {

        employee: {

          select: {

            employeeCode: true,

            firstName: true,

            lastName: true

          }

        }

      },

      orderBy: {

        date:
          "desc"

      }

    });

};

export const getManagerLeavesService =
  async (userId) => {

    const department =
      await getManagerDepartment(
        userId
      );

    return prisma.leave.findMany({

      where: {

        employee: {

          departmentId:
            department.id,

          user: {
            role:
              "EMPLOYEE"
          }

        }

      },

      include: {

        employee: {

          select: {

            employeeCode: true,

            firstName: true,

            lastName: true,

            designation: true

          }

        }

      },

      orderBy: {

        createdAt:
          "desc"

      }

    });

};

export const approveManagerLeaveService =
  async (
    leaveId,
    managerId
  ) => {

    return prisma.leave.update({

      where: {
        id: leaveId
      },

      data: {

        status:
          "APPROVED",

        approvedBy:
          managerId,

        approvedRole:
          "MANAGER",

        approvedAt:
          new Date()

      }

    });

};

export const rejectManagerLeaveService =
  async (
    leaveId,
    managerId
  ) => {

    return prisma.leave.update({

      where: {
        id: leaveId
      },

      data: {

        status:
          "REJECTED",

        approvedBy:
          managerId,

        approvedRole:
          "MANAGER",

        approvedAt:
          new Date()

      }

    });

};

export const getManagerReportsService =
  async (userId) => {

    const department =
      await getManagerDepartment(
        userId
      );

    const totalEmployees =
      await prisma.employee.count({

        where: {

          departmentId:
            department.id

        }

      });

    const activeEmployees =
      await prisma.employee.count({

        where: {

          departmentId:
            department.id,

          isActive:
            true

        }

      });

    const totalLeaves =
      await prisma.leave.count({

        where: {

          employee: {

            departmentId:
              department.id

          }

        }

      });

    const totalAttendance =
      await prisma.attendance.count({

        where: {

          employee: {

            departmentId:
              department.id

          }

        }

      });

    return {

      department:
        department.name,

      totalEmployees,

      activeEmployees,

      inactiveEmployees:
        totalEmployees -
        activeEmployees,

      totalLeaves,

      totalAttendance

    };

};