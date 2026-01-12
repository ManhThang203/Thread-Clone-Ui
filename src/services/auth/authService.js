import http from "@/utils/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentUser = createAsyncThunk(
  "User/getCurrentUser",
  async () => {
    const response = await http.get("/auth/user");
    return response.data;
  },
);

export const register = async (data) => {
  try {
    const response = await http.post("/auth/register", data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data) => {
  try {
    const response = await http.post("/auth/login", data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  const response = await http.post("/auth/logout");
  return response.data;
};

export const checkExistsEmail = async (email) => {
  const response = await http.get(`/auth/check-email?email=${email}`);
  return response.data.exists;
};
