import api from "./axios";

export const getEmployees =
  async () => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        "/employees",
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    return response.data;
};

export const createEmployee =
  async (employeeData) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.post(
        "/employees",
        employeeData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    return response.data;
};