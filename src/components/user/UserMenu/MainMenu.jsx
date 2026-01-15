// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

function MainMenu({
  openUserMenu,
  setOpenUserMenu,
  children,
  handleOpenTheme,
  handleOpenLanguage,
  handleLogout,
}) {
  const { t } = useTranslation();
  return (
    <DropdownMenu open={openUserMenu} onOpenChange={setOpenUserMenu}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        /* bg-popover và text-popover-foreground sẽ tự lấy màu từ file CSS của bạn */
        className="border-border bg-popover text-popover-foreground relative -right-6 bottom-0 w-56 origin-top-left rounded-xl border p-2 shadow-lg"
      >
        <DropdownMenuItem
          onClick={handleOpenTheme}
          className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none"
        >
          <span className="text-[15px] font-medium">{t("settings.theme")}</span>
          <ChevronRight className="text-muted-foreground h-5 w-5" />
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-lg p-3.5 outline-none">
          <span className="text-[15px] font-medium">
            {t("settings.profile")}
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-lg p-3.5 outline-none">
          <span className="text-[15px] font-medium">
            {t("settings.settings")}
          </span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-border my-1" />

        <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none">
          <span className="text-[15px] font-medium">
            {t("settings.feedPreferences")}
          </span>

          <ChevronRight className="text-muted-foreground h-5 w-5" />
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none">
          <span className="text-[15px] font-medium">{t("settings.saved")}</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none">
          <span className="text-[15px] font-medium">{t("settings.liked")}</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-border my-1" />

        <DropdownMenuItem
          onClick={handleOpenLanguage}
          className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none"
        >
          <span className="text-[15px] font-medium">
            {t("settings.language")}
          </span>
          <ChevronRight className="text-muted-foreground h-5 w-5" />
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none">
          <span className="text-[15px] font-medium">
            {t("settings.support")}
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleLogout}
          /* Dùng biến destructive cho nút đăng xuất */
          className="hover:bg-destructive/10 hover:text-destructive flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none"
        >
          <span className="text-destructive text-[15px] font-medium">
            {t("settings.logout")}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MainMenu;
