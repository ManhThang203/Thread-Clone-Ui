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
    return response.data;
  } catch (error) {
    // Lấy thông tin lỗi chi tiết từ response
    const errorMessage =
      error.response?.data?.message || error.message || "Lỗi đăng nhập";
    throw new Error(errorMessage);
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
