import {

  getEmployeeProfileService,

  getEmployeeAttendanceService,

  getEmployeeLeavesService,

  getEmployeePayrollService,

  getEmployeeDashboardService

}
from "./employeePortal.service.js";

export const getDashboard =
  async (req, res) => {

    const data =
      await getEmployeeDashboardService(
        req.user.id
      );

    res.json({
      success: true,
      data
    });

};

export const getProfile =
  async (req, res) => {

    const data =
      await getEmployeeProfileService(
        req.user.id
      );

    res.json({
      success: true,
      data
    });

};

export const getAttendance =
  async (req, res) => {

    const data =
      await getEmployeeAttendanceService(
        req.user.id
      );

    res.json({
      success: true,
      data
    });

};

export const getLeaves =
  async (req, res) => {

    const data =
      await getEmployeeLeavesService(
        req.user.id
      );

    res.json({
      success: true,
      data
    });

};

export const getPayroll =
  async (req, res) => {

    const data =
      await getEmployeePayrollService(
        req.user.id
      );

    res.json({
      success: true,
      data
    });

};