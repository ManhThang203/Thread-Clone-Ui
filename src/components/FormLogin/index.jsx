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

function FormLogin({
  handleSubmit,
  onSubmit,
  register,
  errors,
  isFormValid,
  showPassword,
  setShowPassword,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-1/2 left-1/2 z-50 flex w-[400px] -translate-x-1/2 -translate-y-1/2 flex-col pb-12 sm:mt-0 md:mt-20"
    >
      <h1 className="mb-6 text-center text-lg font-medium text-white">
        Đăng nhập bằng tài khoản Instagram
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Email / Username */}
        <div>
          <Input
            type="text"
            placeholder="Tên người dùng, số điện thoại hoặc email"
            {...register("email", {
              required: "Vui lòng nhập trường này",
            })}
            className="border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-14 rounded-2xl"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="relative">
            {/* SỬA TỪ <Inpu> THÀNH <Input> */}
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              {...register("password", {
                required: "Vui lòng nhập trường này",
              })}
              className="border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-14 rounded-2xl pr-12"
            />
            <Button
              type="button"
              variant="ghost" // đẹp hơn, không có background khi hover
              size="icon"
              onClick={() => setShowPassword(!showPassword)}
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </Button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isFormValid}
          variant={isFormValid ? "default" : "secondary"}
          className="h-14 w-full rounded-2xl text-base font-medium transition-all duration-300"
        >
          Đăng nhập
        </Button>
      </form>

      {/* Forgot Password */}
      <div className="mt-6 text-center">
        <Link
          to="/forgot-password"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          Quên mật khẩu?
        </Link>
      </div>

      {/* Divider */}
      <div className="my-6 flex items-center">
        <div className="bg-border h-px flex-1" />
        <span className="text-muted-foreground px-4 text-sm">hoặc</span>
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
            <div className="font-medium">Tiếp tục bằng Instagram</div>
            <div className="text-sm">@email</div>
          </div>
        </div>
        <ChevronRight className="h-5 w-5" />
      </motion.button>
    </motion.div>
  );
}

export default FormLogin;
