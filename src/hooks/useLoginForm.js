// React
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { useCurrentUser } from "@/features/auth";
import * as authServices from "@/services/auth";

import { LOCAL_STORAGE_KEYS } from "@/configs";

import { toast } from "sonner";

import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/utils";
import { useTranslation } from "react-i18next";

export const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const currentUser = useCurrentUser();

  const loginInputRef = useRef(null);

  const passwordInputRef = useRef(null);

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setFocus,
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const login = watch("login");
  const password = watch("password");

  // xóa khoảng trắng đầu và cuối
  // Ép kiểu về định dạng boolean
  const isFormValid = !!login?.trim() && !!password?.trim();

  // khi vào trong Login thì focus vào input login
  useEffect(() => {
    setFocus("login");
  }, [setFocus]);

  // Khi token hết hạn chuyển đến trang login và có đường dẫn tiếp tục sau khi đăng nhập thành công thì vào trang đó
  useEffect(() => {
    if (currentUser) {
      const continuePath = params.get("continue") || "/";
      navigate(continuePath);
    }
  }, [currentUser, navigate, params]);

  // Hàm xử lý lỗi validation từ React Hook Form
  const onError = (errors) => {
    // Lấy ra trưởng lỗi đầu tiên
    const firstErrorKey = Object.keys(errors)[0];

    if (!firstErrorKey) return;
    // Lấy ra message của trưởng đó
    const errorValue = errors[firstErrorKey].message;
    let finalMessage = "";

    try {
      // Kiểm tra xem message có phải là string JSON (chứa key và field) không
      if (errorValue.includes("{")) {
        const parsed = JSON.parse(errorValue);

        // Lấy nhãn field đã dịch: ví dụ "Tên người dùng và Email"
        const translatedField = t(parsed.field);

        // Dịch câu thông báo: t("required", { field: "Tên người dùng..." })
        finalMessage = t(parsed.key, { field: translatedField });
      } else {
        // Nếu là chuỗi thuần như "login.invalid" hoặc "password.mismatch"
        finalMessage = t(errorValue);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      finalMessage = t(errorValue);
    }

    toast.error(finalMessage);
  };
  const onSubmit = async (data) => {
    const loginPromise = authServices.login(data);
    toast.promise(loginPromise, {
      pending: () => "Đang đăng nhập...",
      success: () => {
        return "Đăng nhập thành công! Chào mừng bạn quay lại.";
      },
      error: () => {
        return "Vui lòng kiểm tra lại useName, email hay mật khẩu";
      },
    });
    try {
      const response = await loginPromise;

      // Nếu code chạy xuống được đây, nghĩa là login THÀNH CÔNG
      const { access_token, refresh_token } = response;
      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, access_token);
      localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refresh_token);

      dispatch(authServices.getCurrentUser());
    } catch (error) {
      console.log("Login flow error:", error);
    }
  };
  return {
    showPassword,
    loginInputRef,
    passwordInputRef,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    setShowPassword,
    isFormValid,
    onError,
    onSubmit,
  };
};
