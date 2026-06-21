import api from "./axios";

const getToken = () =>
  localStorage.getItem("token");

export const getProfile =
  async () => {

    const response =
      await api.get(
        "/settings/profile",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;

};

export const updateProfile =
  async (data) => {

    const response =
      await api.put(
        "/settings/profile",
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

export const changePassword =
  async (data) => {

    const response =
      await api.patch(
        "/settings/change-password",
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

export const getSystemSettings =
  async () => {

    const response =
      await api.get(
        "/settings/system",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;

};

export const updateSystemSettings =
  async (data) => {

    const response =
      await api.put(
        "/settings/system",
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