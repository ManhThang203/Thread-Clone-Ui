import { useState } from "react";
import { useAuthForm } from "./useAuthForm";
import * as authServices from "@/services/auth";
import { LOCAL_STORAGE_KEYS } from "@/configs";
import { useNavigate } from "react-router";

export const useRegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  // Handler cho register
  const handleRegister = async (data) => {
    // Validation bổ sung
    if (data.password !== data.confirmPassword) {
      throw new Error("Mật khẩu xác nhận không khớp");
    }

    // Gọi API register
    const response = await authServices.register({
      username: data.username,
      email: data.email,
      password: data.password,
    });

    // Tự động login sau khi đăng ký
    const { access_token, refresh_token } = response;
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, access_token);
    localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refresh_token);

    if (access_token) {
      localStorage.setItem("accessToken", access_token);
      navigate("/login");
    }
    return response;
  };

  const authForm = useAuthForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
    onSubmitHandler: handleRegister,
    toastMessages: {
      loading: "Đang tạo tài khoản...",
      success: "Đăng ký thành công! Chào mừng bạn đến với ứng dụng.",
      error: "Đăng ký thất bại. Email hoặc username có thể đã tồn tại.",
    },
    focusField: "username",
  });

  const { watch } = authForm;
  const username = watch("username");
  const email = watch("email");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const agreeToTerms = watch("agreeToTerms");

  const isFormValid =
    !!username?.trim() &&
    !!email?.trim() &&
    !!password?.trim() &&
    !!confirmPassword?.trim() &&
    password === confirmPassword &&
    agreeToTerms;

  return {
    ...authForm,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isFormValid,
  };
};
