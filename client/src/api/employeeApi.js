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

export const getEmployeeById =
  async (id) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        `/employees/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    return response.data;
};

export const updateEmployee =
  async (id, employeeData) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.put(
        `/employees/${id}`,
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

export const deactivateEmployee =
  async (id) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.patch(
        `/employees/${id}/deactivate`,
        {},
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    return response.data;
};

export const activateEmployee =
  async (id) => {

    const token =
      localStorage.getItem("token");

    return api.patch(
      `/employees/${id}/activate`,
      {},
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );
};