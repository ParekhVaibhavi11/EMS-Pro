import api from "./axios";

const getToken = () =>
  localStorage.getItem("token");

export const getDashboardStats =
  async () => {

    const response =
      await api.get(
        "/reports/dashboard",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;
};

export const getReportsSummary =
  async () => {

    const response =
      await api.get(
        "/reports/summary",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;
};