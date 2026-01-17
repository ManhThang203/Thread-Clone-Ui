// Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Icons
import { ChevronRight, Eye, EyeOff } from "lucide-react";

// Router
import { Link } from "react-router-dom";
import InstagramIcon from "@/components/icons/InstagramIcon";

import PropTypes from "prop-types";
import { Spinner } from "@/components/ui/spinner";
import { useTranslation } from "react-i18next";

function FormLogin({
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
}) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-1/2 left-1/2 z-50 flex w-[400px] -translate-x-1/2 -translate-y-1/2 flex-col pb-12 sm:mt-0 md:mt-20"
    >
      <h1 className="text-foreground mb-6 text-center text-lg font-medium">
        {t("auth.titleLogin")}
      </h1>

      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-3">
        {/* Email / Username */}
        <div>
          <Input
            ref={loginInputRef}
            type="text"
            placeholder="Tên người dùng, số điện thoại hoặc email"
            {...register("login")} // Bỏ phần validation thủ công
            className="border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-14 rounded-2xl"
          />
        </div>

        {/* Password */}
        <div>
          <div className="relative">
            <Input
              ref={passwordInputRef}
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              {...register("password")} // Bỏ phần validation thủ công
              className="border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-14 rounded-2xl pr-12"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setShowPassword(!showPassword)}
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </Button>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          disabled={isSubmitting} // chỉ disable thật khi đang gọi API
          type="submit"
          variant={isFormValid ? "default" : "secondary"}
          className={`h-14 w-full rounded-2xl text-base font-medium transition-all duration-300 ${
            isFormValid && !isSubmitting
              ? "bg-primary hover:bg-primary text-primary-foreground cursor-pointer"
              : "bg-primary hover:bg-primary cursor-not-allowed text-black/40"
          } `}
        >
          {isSubmitting ? <Spinner className="size-8" /> : `${t("auth.login")}`}
        </Button>
      </form>

      {/* Forgot Password */}
      <div className="mt-6 text-center">
        <Link
          to="/forgot-password"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          {t("auth.forgotPassword")}
        </Link>
      </div>

      {/* Divider */}
      <div className="my-6 flex items-center">
        <div className="bg-border h-px flex-1" />
        <span className="text-muted-foreground px-4 text-sm">
          {t("auth.title")}
        </span>
        <div className="bg-border h-px flex-1" />
      </div>

      {/* Continue with Instagram */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="hover:border-foreground flex w-full items-center justify-between rounded-2xl border p-4 transition-all duration-300 hover:cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <InstagramIcon />

          <div className="text-left">
            <div className="font-medium"> {t("auth.ContinueInstagram")} </div>
            <div className="text-sm">@email</div>
          </div>
        </div>
        <ChevronRight className="h-5 w-5" />
      </motion.button>
    </motion.div>
  );
}

FormLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  setShowPassword: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  showPassword: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  loginInputRef: PropTypes.object.isRequired,
  passwordInputRef: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default FormLogin;
