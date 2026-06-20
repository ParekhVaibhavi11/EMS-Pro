import api from "./axios";

const getToken = () =>
  localStorage.getItem("token");

export const getLeaves =
  async () => {

    const response =
      await api.get(
        "/leaves",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;
};

export const createLeave =
  async (data) => {

    const response =
      await api.post(
        "/leaves",
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

export const approveLeave =
  async (id) => {

    const response =
      await api.patch(
        `/leaves/${id}/approve`,
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

export const rejectLeave =
  async (id) => {

    const response =
      await api.patch(
        `/leaves/${id}/reject`,
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