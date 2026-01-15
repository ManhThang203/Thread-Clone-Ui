import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sun, Moon, Laptop, MoveLeft } from "lucide-react";

function ThemeMenu({
  openThemeMenu,
  setOpenThemeMenu,
  hanldeOpenUserMenu,
  theme,
  handleSelectTheme,
  left,
}) {
  return (
    <DropdownMenu open={openThemeMenu} onOpenChange={setOpenThemeMenu}>
      {/* Trigger ảo, không hiển thị */}
      <DropdownMenuTrigger />
      <DropdownMenuContent
        align="end"
        className={`bg-popover border-border ${left ? "relative top-5 -left-17" : "relative -right-6 bottom-10"} w-56 origin-top-left rounded-xl p-2`}
        // Thêm onCloseAutoFocus để ngăn focus quay lại trigger
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="relative mb-6 flex h-8 items-center justify-center">
          <button
            onClick={() => {
              hanldeOpenUserMenu();
              setOpenThemeMenu(false);
            }}
            type="button"
            className="absolute top-0 bottom-0 left-0 flex w-10 cursor-pointer items-center justify-center transition-colors duration-200"
          >
            <MoveLeft className="h-5 w-5" />
          </button>

          <span className="text-foreground/90 text-md flex-1 text-center font-medium">
            Giao diện
          </span>
        </div>
        <DropdownMenuItem
          className={`text-[15px] font-medium hover:cursor-pointer ${theme === "light" ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"}`}
          onClick={(e) => {
            e.preventDefault();
            handleSelectTheme("light");
          }}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Sáng</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className={`my-2 text-[15px] font-medium hover:cursor-pointer ${theme === "dark" ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"}`}
          onClick={(e) => {
            e.preventDefault();
            handleSelectTheme("dark");
          }}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Tối</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className={`text-[15px] font-medium hover:cursor-pointer ${theme === "system" ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"}`}
          onClick={(e) => {
            e.preventDefault();
            handleSelectTheme("system");
          }}
        >
          <Laptop className="mr-2 h-4 w-4" />
          <span>Hệ thống</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeMenu;
