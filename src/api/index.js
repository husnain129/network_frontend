import axios from "axios";
import { API_URL } from "../settting";

const API = () => {
  const URL = API_URL;
  const jwt = localStorage.getItem("token");
  return {
    get: async (url, query = {}) => {
      return (
        await axios.get(`${URL}${url}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          params: query || {},
        })
      ).data;
    },
    post: async (url, body) => {
      const res = await axios.post(`${URL}${url}`, body, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      });
      // console.log(res);
      // if (res.status < 200 || res.status >= 400) throw new Error("Fetch error");

      return res.data;
    },

    put: async (url, body) => {
      const res = await axios.put(`${URL}${url}`, body, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      });
      return res.data;
    },
    delete: async (url) => {
      return (
        await axios.delete(`${URL}${url}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
      ).data;
    },
  };
};

export default API;
