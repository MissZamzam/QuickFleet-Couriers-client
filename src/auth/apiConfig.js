import axios from "axios";

const base =
  process.env.NODE_ENV === "production"
    ? "hosting"
    : "http://localhost:3004";

const api = axios.create({
  baseURL: base,
});

export default api;
