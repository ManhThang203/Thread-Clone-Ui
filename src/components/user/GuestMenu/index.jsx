import { useUserMenu } from "@/hooks";
import MainMenu from "./MainMenu";
import LanguageMenu from "@/components/user/components/LanguageMenu";
import ThemeMenu from "@/components/user/components/ThemeMenu";

function GuestMenu({ children }) {
  const {
    openUserMenu,
    openLanguageMenu,
    theme,
    openThemeMenu,
    setOpenUserMenu,
    handleOpenTheme,
    handleOpenLanguage,
    handleLogout,
    setOpenThemeMenu,
    handleSelectTheme,
    handleOpenUserMenu,
    setOpenLanguageMenu,
  } = useUserMenu();
  return (
    <>
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
        handleOpenLanguage={handleOpenLanguage}
        hanldeOpenUserMenu={handleOpenUserMenu}
        setOpenLanguageMenu={setOpenLanguageMenu}
      />
    </>
  );
}

export default GuestMenu;
