import axios from "axios";

export const login = async (form) => {
  return await axios.post("https://bbanditsden.onrender.com/auth/login", form);
};

export const register = async (form) => {
  return await axios.post(
    "https://bbanditsden.onrender.com/auth/register",
    form
  );
};

export const getUser = async () => {
  const response = await axios.get(
    "https://bbanditsden.onrender.com/auth/user"
  );
  return response.data.user;
};

export const refreshToken = async () => {
  await axios.post("https://bbanditsden.onrender.com/auth/refresh");
  const user = await getUser();
  return user;
};
