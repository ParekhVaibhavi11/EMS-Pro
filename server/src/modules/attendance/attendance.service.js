import prisma from "../../config/prisma.js";

export const markAttendanceService =
  async (data) => {

    const today =
      new Date();

    today.setHours(
      0, 0, 0, 0
    );

    const existing =
      await prisma.attendance.findFirst({
        where: {
          employeeId:
            data.employeeId,

          date: today
        }
      });

    if (existing) {

      throw new Error(
        "Attendance already marked today"
      );

    }

    return prisma.attendance.create({

      data: {
        employeeId:
          data.employeeId,

        date: today,

        status:
          data.status,

        checkIn:
          new Date()
      }

    });

};

export const getAttendanceService =
  async () => {

    return prisma.attendance.findMany({

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
        date: "desc"
      }

    });

};

export const getAttendanceByEmployeeService =
  async (employeeId) => {

    return prisma.attendance.findMany({

      where: {
        employeeId
      },

      orderBy: {
        date: "desc"
      }

    });

};