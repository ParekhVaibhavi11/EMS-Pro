import prisma from "../../config/prisma.js";

export const createLeaveService =
  async (data) => {

    return prisma.leave.create({

      data: {
        employeeId:
          data.employeeId,

        leaveType:
          data.leaveType,

        startDate:
          new Date(
            data.startDate
          ),

        endDate:
          new Date(
            data.endDate
          ),

        reason:
          data.reason
      }

    });

};

export const getLeavesService =
  async () => {

    return prisma.leave.findMany({

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

export const approveLeaveService =
  async (id) => {

    return prisma.leave.update({

      where: { id },

      data: {
        status: "APPROVED"
      }

    });

};

export const rejectLeaveService =
  async (id) => {

    return prisma.leave.update({

      where: { id },

      data: {
        status: "REJECTED"
      }

    });

};