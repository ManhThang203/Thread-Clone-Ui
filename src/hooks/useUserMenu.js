// React & Redux
import { useDispatch } from "react-redux";

// Components

// Hooks & Actions
import { setTheme } from "@/features/theme/themeSlice";
import { useLogout } from "@/hooks/useLogout";
import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";

export const useUserMenu = () => {
  // Lấy theme hiện tại từ custom hook (có thể từ Redux hoặc context)
  const theme = useTheme();

  // Để dispatch action thay đổi theme lên Redux store
  const dispatch = useDispatch();

  // Custom hook xử lý logout (thường chứa logic gọi API, xóa token, redirect...)
  const { handleLogout } = useLogout();

  // State quản lý việc mở/đóng từng menu
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openThemeMenu, setOpenThemeMenu] = useState(false);
  const [openLanguageMenu, setOpenLanguageMenu] = useState(false);

  /* Mở menu Theme, đồng thời đóng menu chính (UserMenu) */
  const handleOpenTheme = () => {
    setOpenUserMenu(false);
    setOpenThemeMenu(true);
  };

  /* Mở menu Language, đồng thời đóng menu chính */
  const handleOpenLanguage = () => {
    setOpenUserMenu(false);
    setOpenLanguageMenu(true);
  };

  /* Khi người dùng chọn một theme mới từ Themeenu */
  const handleSelectTheme = (newTheme) => {
    dispatch(setTheme(newTheme));
  };

  /* Mở menu chính (UserMenu), đồng thời đóng 2 menu con nếu đang mở */
  const handleOpenUserMenu = () => {
    setOpenUserMenu(true);
    setOpenThemeMenu(false);
    setOpenLanguageMenu(false);
  };

  return {
    theme,
    handleLogout,
    openUserMenu,
    openThemeMenu,
    openLanguageMenu,
    setOpenUserMenu,
    setOpenThemeMenu,
    setOpenLanguageMenu,
    handleOpenTheme,
    handleOpenLanguage,
    handleSelectTheme,
    handleOpenUserMenu,
  };
};
