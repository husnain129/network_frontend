import API from ".";

export const UserApi = () => {
  const api = API();
  return {
    login: (body) => {
      return api.post("/user/login", body);
    },
    create: (body) => {
      return api.post("/user", body);
    },
  };
};
