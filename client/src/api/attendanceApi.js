import api from "./axios";

const getToken = () =>
  localStorage.getItem(
    "token"
  );

export const getAttendance =
  async () => {

    const response =
      await api.get(
        "/attendance",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;
};

export const markAttendance =
  async (data) => {

    const response =
      await api.post(
        "/attendance",
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