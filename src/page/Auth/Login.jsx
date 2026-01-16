// Layout
import HeaderAuth from "@/layout/components/HeaderAuth";
import FooterAuth from "@/layout/components/FooterAuth";
// Components
import FormLogin from "@/components/auth/components/FormLogin";
import QRCode from "@/components/QRCode";
import HeaderAuthMobile from "@/layout/components/HeaderAuthMobile";

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
      <HeaderAuth />
      <HeaderAuthMobile />
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
      <FooterAuth />
    </>
  );
};

export default LoginForm;
