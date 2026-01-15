import LanguageMenu from "@/components/user/components/LanguageMenu";
import ThemeMenu from "@/components/user/components/ThemeMenu";
import MainMenu from "./MainMenu";

import { useUserMenu } from "@/hooks";

function UserMenuMobile({ children }) {
  const {
    openUserMenu,
    setOpenUserMenu,
    handleOpenTheme,
    handleOpenLanguage,
    handleLogout,
    theme,
    openThemeMenu,
    setOpenThemeMenu,
    handleSelectTheme,
    handleOpenUserMenu,
    openLanguageMenu,
    setOpenLanguageMenu,
  } = useUserMenu();

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
        hanldeOpenUserMenu={handleOpenUserMenu}
      />

      {/* Menu chọn ngôn ngữ */}
      <LanguageMenu
        openLanguageMenu={openLanguageMenu}
        setOpenLanguageMenu={setOpenLanguageMenu}
        hanldeOpenUserMenu={handleOpenUserMenu}
      />
    </>
  );
}

export default UserMenuMobile;
