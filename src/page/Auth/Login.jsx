// Layout
import HeaderLogin from "@/layout/components/HeaderLogin";
import FooterLogin from "@/layout/components/FooterLogin";
// Components
import FormLogin from "@/components/auth/components/FormLogin";
import QRCode from "@/components/QRCode";
import HeaderLoginMobile from "@/layout/components/HeaderLoginMobile";

// Hooks
import { useLoginForm } from "@/hooks";

const LoginForm = () => {
  const {
    handleSubmit,
    onSubmit,
    onError,
    register,
    errors,
    isFormValid,
    showPassword,
    setShowPassword,
    loginInputRef,
    passwordInputRef,
    isSubmitting,
  } = useLoginForm();
  return (
    <>
      <HeaderLogin />
      <HeaderLoginMobile />
      <FormLogin
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        onError={onError}
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
