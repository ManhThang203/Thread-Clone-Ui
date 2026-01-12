// Components
import FormLogin from "@/components/FormLogin";
import HeaderLogin from "@/components/HeaderLogin";
import FooterLogin from "@/components/FooterLogin";
import QRCode from "@/components/QRCode";
import HeaderLoginMobile from "@/components/HeaderLoginMobile";

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
