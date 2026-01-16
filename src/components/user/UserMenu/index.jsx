import LanguageMenu from "@/components/user/components/LanguageMenu";
import ThemeMenu from "@/components/user/components/ThemeMenu";

import { useUserMenu } from "@/hooks";
import MainMenu from "./MainMenu";

function UserMenu({ children }) {
  const {
    openUserMenu,
    theme,
    openThemeMenu,
    openLanguageMenu,
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
      <div>
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
          handleOpenLanguage={handleOpenLanguage}
          hanldeOpenUserMenu={handleOpenUserMenu}
          setOpenLanguageMenu={setOpenLanguageMenu}
        />
      </div>
    </>
  );
}

export default UserMenu;
