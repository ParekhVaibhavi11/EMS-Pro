import api from "./axios";

const getToken = () =>
  localStorage.getItem("token");

const config = {
  headers: {
    Authorization:
      `Bearer ${getToken()}`
  }
};

export const getManagerDashboard =
  () =>
    api.get(
      "/manager/dashboard",
      config
    );

export const getManagerProfile =
  () =>
    api.get(
      "/manager/profile",
      config
    );

export const getManagerTeam =
  () =>
    api.get(
      "/manager/team",
      config
    );

export const getManagerAttendance =
  () =>
    api.get(
      "/manager/attendance",
      config
    );

export const getManagerLeaves =
  () =>
    api.get(
      "/manager/leaves",
      config
    );

export const approveLeave =
  (id) =>
    api.patch(
      `/manager/leaves/${id}/approve`,
      {},
      config
    );

export const rejectLeave =
  (id) =>
    api.patch(
      `/manager/leaves/${id}/reject`,
      {},
      config
    );

export const getManagerReports =
  () =>
    api.get(
      "/manager/reports",
      config
    );