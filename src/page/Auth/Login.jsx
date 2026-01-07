// React
import { useState } from "react";
import { Link } from "react-router";

// Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Icons
import { ChevronRight, Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = username.length > 0 && password.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mx-auto max-w-md"
    >
      <h1 className="mb-6 text-center text-lg font-medium text-white">
        Đăng nhập bằng tài khoản Instagram
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder="Tên người dùng, số điện thoại hoặc email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-14 rounded-2xl"
        />

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-14 rounded-2xl pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-muted-foreground hover:text-foreground absolute top-1/2 right-4 -translate-y-1/2 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <Button
          type="submit"
          disabled={!isFormValid}
          className="h-14 w-full rounded-2xl text-base font-medium transition-all duration-300"
          variant={isFormValid ? "default" : "secondary"}
        >
          Đăng nhập
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link
          to="/forgot-password"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          Quên mật khẩu?
        </Link>
      </div>

      <div className="my-6 flex items-center">
        <div className="bg-border h-px flex-1" />
        <span className="text-muted-foreground px-4 text-sm">hoặc</span>
        <div className="bg-border h-px flex-1" />
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="flex w-full items-center justify-between rounded-2xl border p-4 transition-colors"
        style={{
          background: "hsl(var(--threads-card))",
          borderColor: "hsl(var(--threads-border))",
        }}
      >
        <div className="flex items-center gap-4">
          <div className="text-left">
            <div
              className="font-medium"
              style={{ color: "hsl(var(--threads-card-foreground))" }}
            >
              Tiếp tục bằng Instagram
            </div>
            <div
              className="text-sm"
              style={{ color: "hsl(var(--threads-text-muted))" }}
            >
              @username
            </div>
          </div>
        </div>
        <ChevronRight
          className="h-5 w-5"
          style={{ color: "hsl(var(--threads-text-muted))" }}
        />
      </motion.button>
    </motion.div>
  );
};

export default LoginForm;
