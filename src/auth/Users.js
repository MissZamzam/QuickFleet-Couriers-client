import api from "./apiConfig";

export const getUser = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};


export const getUserPosts = async (id) => {
  const res = await api.get(`/users/${id}/posts`);
  return res.data;
};



export const register = async (user) => {
  const res = await api.post(`/signup`, { user });
  const { token } = res.data;
  if (token) {
    localStorage.setItem("authToken", token);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    return res.data.user;
  }
};

export const login = async (user) => {
  const res = await api.post("/signin", { user });
  const { token } = res.data;
  if (token) {
    localStorage.setItem("authToken", token);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    return res.data.user;
  }
};

export const verify = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/me");
    return res.data;
  }
};

export const logOut = () => {
  localStorage.clear();
  api.defaults.headers.common.authorization = null;
};