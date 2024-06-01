import axios from "axios";

const api = axios.create({ baseURL: "http://fakestoreapi.com" });

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.message)
);

export default api;
