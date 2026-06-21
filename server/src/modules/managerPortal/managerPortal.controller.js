import {

  getManagerDashboardService,
  getManagerProfileService,
  getManagerTeamService,
  getManagerAttendanceService,
  getManagerLeavesService,
  approveManagerLeaveService,
  rejectManagerLeaveService,
  getManagerReportsService

}
from "./managerPortal.service.js";

export const getDashboard =
  async (req,res) => {

    const data =
      await getManagerDashboardService(
        req.user.id
      );

    res.json({
      success:true,
      data
    });

};

export const getProfile =
  async (req,res) => {

    const data =
      await getManagerProfileService(
        req.user.id
      );

    res.json({
      success:true,
      data
    });

};

export const getTeam =
  async (req,res) => {

    const data =
      await getManagerTeamService(
        req.user.id
      );

    res.json({
      success:true,
      data
    });

};

export const getAttendance =
  async (req,res) => {

    const data =
      await getManagerAttendanceService(
        req.user.id
      );

    res.json({
      success:true,
      data
    });

};

export const getLeaves =
  async (req,res) => {

    const data =
      await getManagerLeavesService(
        req.user.id
      );

    res.json({
      success:true,
      data
    });

};

export const approveLeave =
  async (req,res) => {

    const data =
      await approveManagerLeaveService(

        req.params.id,

        req.user.id

      );

    res.json({
      success:true,
      data
    });

};

export const rejectLeave =
  async (req,res) => {

    const data =
      await rejectManagerLeaveService(

        req.params.id,

        req.user.id

      );

    res.json({
      success:true,
      data
    });

};

export const getReports =
  async (req,res) => {

    const data =
      await getManagerReportsService(
        req.user.id
      );

    res.json({
      success:true,
      data
    });

};