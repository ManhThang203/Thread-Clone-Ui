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
  // ✨ Lưu menu nào đang active để nhớ khi tắt/mở lại
  const [lastActiveMenu, setLastActiveMenu] = useState("main");

  /* Mở menu Theme, đồng thời đóng menu chính (UserMenu) */
  const handleOpenTheme = () => {
    setOpenUserMenu(false);
    setOpenThemeMenu(true);
    setOpenLanguageMenu(false);
    setLastActiveMenu("theme"); // ✨ Lưu theme là menu active hiện tại
  };

  /* Mở menu Language, đồng thời đóng menu chính */
  const handleOpenLanguage = () => {
    setOpenUserMenu(false);
    setOpenThemeMenu(false);
    setOpenLanguageMenu(true);
    setLastActiveMenu("language"); // ✨ Lưu language là menu active hiện tại
  };

  /* Khi người dùng chọn một theme mới từ Themeenu */
  const handleSelectTheme = (newTheme) => {
    dispatch(setTheme(newTheme));
  };

  /* ✨ Handle click icon 3 gạch (hamburger) - toggle menu */
  const handleToggleUserMenu = (newState) => {
    // Nếu đóng menu (newState = false)
    if (newState === false) {
      setOpenUserMenu(false);
      setOpenThemeMenu(false);
      setOpenLanguageMenu(false);
      // Không thay đổi lastActiveMenu - vẫn nhớ menu nào đang active
      return;
    }

    // Nếu mở menu (newState = true) - mở lại menu đã lưu
    if (newState === true) {
      if (lastActiveMenu === "theme") {
        // Mở lại menu theme
        setOpenUserMenu(false);
        setOpenThemeMenu(true);
        setOpenLanguageMenu(false);
      } else if (lastActiveMenu === "language") {
        // Mở lại menu language
        setOpenUserMenu(false);
        setOpenThemeMenu(false);
        setOpenLanguageMenu(true);
      } else {
        // Mở lại menu chính (main)
        setOpenUserMenu(true);
        setOpenThemeMenu(false);
        setOpenLanguageMenu(false);
      }
    }
  };

  /* Mở menu chính (UserMenu), đồng thời đóng 2 menu con nếu đang mở */
  const handleOpenUserMenu = () => {
    setOpenUserMenu(true);
    setOpenThemeMenu(false);
    setOpenLanguageMenu(false);
    setLastActiveMenu("main"); // ✨ Lưu main là menu active hiện tại
  };

  return {
    theme,
    handleLogout,
    openUserMenu,
    openThemeMenu,
    openLanguageMenu,
    setOpenUserMenu: handleToggleUserMenu, // ✨ Truyền handleToggleUserMenu thay vì setOpenUserMenu trực tiếp
    setOpenThemeMenu,
    setOpenLanguageMenu,
    handleOpenTheme,
    handleOpenLanguage,
    handleSelectTheme,
    handleOpenUserMenu,
  };
};
