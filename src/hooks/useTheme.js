import { useCurrentTheme } from "@/features/theme";
import { useEffect } from "react";

export const useTheme = () => {
  const theme = useCurrentTheme();

  useEffect(() => {
    const root = document.documentElement;

    // Xóa tất cả class cũ trước
    root.classList.remove("dark", "light", "system");

    // Thêm class mới
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.add("light");
    } else if (theme === "system") {
      // Với system, check preference của hệ thống
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(isDark ? "dark" : "light");
    }
  }, [theme]);
};
