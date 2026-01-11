// React
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

import { useDispatch } from "react-redux";
import { useCurrentUser } from "@/features/auth";
import { useForm } from "react-hook-form";
import * as authServices from "@/services/auth";
import FormLogin from "@/components/FormLogin";
import HeaderLogin from "@/components/HeaderLogin";
import FooterLogin from "@/components/FooterLogin";
import QRCode from "@/components/QRCode";
import HeaderLoginMobile from "@/components/HeaderLoginMobile";
import { LOCAL_STORAGE_KEYS } from "@/configs";

import { toast } from "sonner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const currentUser = useCurrentUser();

  const loginInputRef = useRef(null);

  const passwordInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setFocus,
  } = useForm({
    defaultValues: {
      login: "thang221",
      password: "Thang2121",
    },
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

  const onSubmit = async (data) => {
    if (!data.login?.trim()) {
      setFocus("login");
      toast.error("Vui lòng nhập tên người dùng, email hoặc số điện thoại");
      return;
    }
    if (!data.password?.trim()) {
      setFocus("password");
      toast.error("Vui lòng nhập mật khẩu");
      return;
    }
    console.log(data);

    try {
      const response = await toast.promise(authServices.login(data), {
        loading: "Đang đăng nhập...",
        success: () => {
          return "Đăng nhập thành công! Chào mừng bạn quay lại.";
        },
        error: (err) => {
          const msg =
            err?.response?.data?.message ||
            "Tài khoản hoặc mật khẩu không đúng";
          return `Đăng nhập thất bại: ${msg}`;
        },
      });
      console.log(response.data);

      // Nếu code chạy xuống được đây, nghĩa là login THÀNH CÔNG
      const { access_token, refresh_token } = response;
      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, access_token);
      localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refresh_token);

      await dispatch(authServices.getCurrentUser());
    } catch (error) {
      // Khi login thất bại, nó sẽ nhảy vào đây.
      // KHÔNG CẦN toast.error ở đây nữa vì toast.promise đã hiển thị rồi.
      console.error("Login flow error:", error);
    }
  };

  return (
    <>
      <HeaderLogin />
      <HeaderLoginMobile />
      <FormLogin
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        isFormValid={isFormValid}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        loginInputRef={loginInputRef}
        passwordInputRef={passwordInputRef}
        isSubmitting={isSubmitting}
      />

      <QRCode />
      <FooterLogin />
    </>
  );
};

export default LoginForm;
