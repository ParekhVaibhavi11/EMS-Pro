import api from "./axios";

const getToken = () =>
  localStorage.getItem("token");

export const getPayrolls =
  async () => {

    const response =
      await api.get(
        "/payroll",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;
};

export const createPayroll =
  async (data) => {

    const response =
      await api.post(
        "/payroll",
        data,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;
};

export const markPayrollPaid =
  async (id) => {

    const response =
      await api.patch(
        `/payroll/${id}/pay`,
        {},
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;
};