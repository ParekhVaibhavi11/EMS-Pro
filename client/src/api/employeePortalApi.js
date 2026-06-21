import api from "./axios";

const getToken = () =>
  localStorage.getItem("token");

export const getEmployeeDashboard =
  async () => {

    const response =
      await api.get(
        "/employee/dashboard",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;

};

export const getEmployeeProfile =
  async () => {

    const response =
      await api.get(
        "/employee/profile",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;

};

export const getEmployeeAttendance =
  async () => {

    const response =
      await api.get(
        "/employee/attendance",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;

};

export const getEmployeeLeaves =
  async () => {

    const response =
      await api.get(
        "/employee/leaves",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;

};

export const getEmployeePayroll =
  async () => {

    const response =
      await api.get(
        "/employee/payroll",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;

};