import http from "@/utils/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentUser = createAsyncThunk(
  "User/getCurrentUser",
  async () => {
    const response = await http.get("/auth/user");
    console.log(response);
    return response.data;
  },
);

export const register = async (data) => {
  const response = await http.post("/auth/register", data);

  return response.data;
};

export const login = async (data) => {
  const response = await http.post("/auth/login", data);
  console.log(response.data.access_token, response.data.refresh_token);
  return response.data;
};

export const logout = async () => {
  const response = await http.post("/auth/logout");
  return response.data;
};

export const checkExistsEmail = async (email) => {
  const response = await http.get(`/auth/check-email?email=${email}`);
  return response.data.exists;
};
