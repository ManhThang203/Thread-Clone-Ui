// React & Redux
import { useDispatch } from "react-redux";

// Components
import MainMenu from "@/components/user/UserMenu/MainMenu";
import ThemeMenu from "@/components/user/UserMenu/ThemeMenu";
import LanguageMenu from "@/components/user/UserMenu/LanguageMenu";

// Hooks & Actions
import { setTheme } from "@/features/theme/themeSlice";
import { useLogout } from "@/hooks/useLogout";
import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";

function UserMenu({ children }) {
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

  /* Khi người dùng chọn một theme mới từ ThemeMenu */
  const handleSelectTheme = (newTheme) => {
    dispatch(setTheme(newTheme));
    setOpenThemeMenu(false);
  };

  /* Mở menu chính (UserMenu), đồng thời đóng 2 menu con nếu đang mở */
  const hanldeOpenUserMenu = () => {
    setOpenUserMenu(true);
    setOpenThemeMenu(false);
    setOpenLanguageMenu(false);
  };

  return (
    <>
      {/* Menu chính (thường là avatar hoặc nút user) */}
      <MainMenu
        openUserMenu={openUserMenu}
        setOpenUserMenu={setOpenUserMenu}
        handleOpenTheme={handleOpenTheme}
        handleOpenLanguage={handleOpenLanguage}
        handleLogout={handleLogout}
      >
        {children}
      </MainMenu>

      {/* Menu chọn theme (light / dark / system ...) */}
      <ThemeMenu
        theme={theme}
        openThemeMenu={openThemeMenu}
        setOpenThemeMenu={setOpenThemeMenu}
        handleSelectTheme={handleSelectTheme}
      />

      {/* Menu chọn ngôn ngữ */}
      <LanguageMenu
        openLanguageMenu={openLanguageMenu}
        handleOpenLanguage={handleOpenLanguage}
        hanldeOpenUserMenu={hanldeOpenUserMenu}
      />
    </>
  );
}

export default UserMenu;
