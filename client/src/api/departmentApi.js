import api from "./axios";

const getToken = () =>
  localStorage.getItem(
    "token"
  );

export const getDepartments =
  async () => {

    const response =
      await api.get(
        "/departments",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;
};

export const getDepartmentById =
  async (id) => {

    const response =
      await api.get(
        `/departments/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;
};

export const createDepartment =
  async (data) => {

    const response =
      await api.post(
        "/departments",
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


export const assignManager =
  async (
    departmentId,
    managerId
  ) => {

    const response =
      await api.post(
        `/departments/${departmentId}/assign-manager`,
        {
          managerId
        },
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;
};