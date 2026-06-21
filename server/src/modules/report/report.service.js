import prisma from "../../config/prisma.js";

export const getDashboardStatsService =
  async () => {

    const totalEmployees =
      await prisma.employee.count();

    const activeEmployees =
      await prisma.employee.count({
        where: {
          isActive: true
        }
      });

    const totalDepartments =
      await prisma.department.count();

    const totalManagers =
      await prisma.employee.count({
        where: {
          user: {
            role: "MANAGER"
          }
        }
      });

    const totalLeaves =
      await prisma.leave.count();

    const pendingLeaves =
      await prisma.leave.count({
        where: {
          status: "PENDING"
        }
      });

    const totalPayrolls =
      await prisma.payroll.count();

    const paidPayrolls =
      await prisma.payroll.count({
        where: {
          paymentStatus: "PAID"
        }
      });

    const attendanceToday =
      await prisma.attendance.count({
        where: {
          status: "PRESENT"
        }
      });

    return {

      totalEmployees,

      activeEmployees,

      totalDepartments,

      totalManagers,

      totalLeaves,

      pendingLeaves,

      totalPayrolls,

      paidPayrolls,

      attendanceToday

    };

};

export const getDetailedReportsService =
  async () => {

    const totalEmployees =
      await prisma.employee.count();

    const activeEmployees =
      await prisma.employee.count({
        where: {
          isActive: true
        }
      });

    const inactiveEmployees =
      await prisma.employee.count({
        where: {
          isActive: false
        }
      });

    const presentEmployees =
      await prisma.attendance.count({
        where: {
          status: "PRESENT"
        }
      });

    const absentEmployees =
      await prisma.attendance.count({
        where: {
          status: "ABSENT"
        }
      });

    const approvedLeaves =
      await prisma.leave.count({
        where: {
          status: "APPROVED"
        }
      });

    const rejectedLeaves =
      await prisma.leave.count({
        where: {
          status: "REJECTED"
        }
      });

    const totalPayrollAmount =
      await prisma.payroll.aggregate({
        _sum: {
          netSalary: true
        }
      });

    return {

      employeeReport: {
        totalEmployees,
        activeEmployees,
        inactiveEmployees
      },

      attendanceReport: {
        presentEmployees,
        absentEmployees
      },

      leaveReport: {
        approvedLeaves,
        rejectedLeaves
      },

      payrollReport: {
        totalPayrollAmount:
          totalPayrollAmount._sum
            .netSalary || 0
      }

    };

};