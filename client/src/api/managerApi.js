import api from "./axios";

const getToken = () => {

  return localStorage.getItem(
    "token"
  );

};

export const getManagers =
  async () => {

    const response =
      await api.get(
        "/managers",
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;
};

export const getManagerById =
  async (id) => {

    const response =
      await api.get(
        `/managers/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${getToken()}`
          }
        }
      );

    return response.data;
};

export const createManager =
  async (data) => {

    const response =
      await api.post(
        "/managers",
        data,
        {
          headers: {
            Authorization:
              `Bearer ${
                localStorage.getItem(
                  "token"
                )
              }`
          }
        }
      );

    return response.data;
};

export const updateManager =
  async (id, data) => {

    const response =
      await api.put(
        `/managers/${id}`,
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

export const deactivateManager =
  async (id) => {

    const response =
      await api.patch(
        `/managers/${id}/deactivate`,
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

export const activateManager =
  async (id) => {

    const response =
      await api.patch(
        `/managers/${id}/activate`,
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