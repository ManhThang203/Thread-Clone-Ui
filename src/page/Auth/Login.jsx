// React
import { useEffect, useState } from "react";
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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const currentUser = useCurrentUser();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }, // ĐÃ SỬA: error → errors
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Watch để kiểm tra form valid
  const email = watch("email");
  const password = watch("password");
  const isFormValid = email?.length > 0 && password?.length > 0;

  useEffect(() => {
    if (currentUser) {
      const continuePath = params.get("continue") || "/";
      navigate(continuePath);
    }
  }, [currentUser, navigate, params]);

  const onSubmit = async (data) => {
    const { access_token, refresh_token } = await authServices.login(data);
    if (access_token) {
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      dispatch(authServices.getCurrentUser());
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
      />

      <QRCode />
      <FooterLogin />
    </>
  );
};

export default LoginForm;
