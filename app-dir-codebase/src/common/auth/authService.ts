import { fetchApi } from "../fetch/fetchCrud";

export const authService = {
  login: async (payload: any) => {
    const res = await fetchApi.post({ url: "/admins/login", data: payload });
    return res;
  },

  logout: async (payload: any) => {
    const res = await fetchApi.get({ url: "/admins/logout" });
    return res;
  },

  signUp: async (payload: any) => {
    console.log("signUp ...");
  },
};
