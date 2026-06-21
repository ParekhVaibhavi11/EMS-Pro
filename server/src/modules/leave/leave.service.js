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

      where: {

        employee: {

          user: {

            role: "MANAGER"

          }

        }

      },

      include: {

        employee: {

          select: {

            id: true,

            employeeCode: true,

            firstName: true,

            lastName: true,

            designation: true,

            user: {

              select: {

                role: true

              }

            }

          }

        }

      },

      orderBy: {

        createdAt: "desc"

      }

    });

};

export const approveLeaveService =
  async (
    leaveId,
    approverId,
    approverRole
  ) => {

    return prisma.leave.update({

      where: {
        id: leaveId
      },

      data: {

        status: "APPROVED",

        approvedBy:
          approverId,

        approvedRole:
          approverRole,

        approvedAt:
          new Date()

      }

    });

};

export const rejectLeaveService =
  async (
    leaveId,
    approverId,
    approverRole
  ) => {

    return prisma.leave.update({

      where: {
        id: leaveId
      },

      data: {

        status: "REJECTED",

        approvedBy:
          approverId,

        approvedRole:
          approverRole,

        approvedAt:
          new Date()

      }

    });

};