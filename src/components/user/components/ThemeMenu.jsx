import { useMobileDetection } from "@/hooks";
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
}) {
  const isMobile = useMobileDetection(); // ✨ Dùng custom hook thay vì useState + useEffect
  console.log(isMobile);

  return (
    <DropdownMenu open={openThemeMenu} onOpenChange={setOpenThemeMenu}>
      {/* Trigger ảo */}
      <DropdownMenuTrigger asChild>
        <button
          className="pointer-events-none absolute flex h-10 w-10 items-center justify-center opacity-0"
          style={
            isMobile
              ? { position: "fixed", left: "16px", top: "20px" }
              : { position: "fixed", left: "30px", top: "calc(100vh - 50px)" }
          }
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isMobile ? "start" : "start"}
        side={isMobile ? "bottom" : "bottom"}
        sideOffset={isMobile ? 8 : 8}
        className={`bg-popover border-border z-[9999] rounded-xl border p-2 shadow-lg ${isMobile
          ? "w-[calc(100vw-400px)] max-w-sm origin-top-left"
          : "w-56 origin-top-right"
          }`}
        // Thêm onCloseAutoFocus để ngăn focus quay lại trigger
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="border-border relative mb-6 flex h-8 items-center justify-center border-b pb-3">
          <button
            onClick={() => {
              hanldeOpenUserMenu();
              setOpenThemeMenu(false);
            }}
            type="button"
            className="absolute top-0 bottom-0 left-0 flex w-10 cursor-pointer items-center justify-center transition-colors duration-200"
          >
            <MoveLeft className="text-foreground h-5 w-5" />
          </button>

          <span className="text-foreground/90 text-md flex-1 text-center font-medium">
            Giao diện
          </span>
        </div>
        <DropdownMenuItem
          className={`text-foreground rounded-lg p-3 text-[15px] font-medium hover:cursor-pointer ${theme === "light" ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"}`}
          onClick={(e) => {
            e.preventDefault();
            handleSelectTheme("light");
          }}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Sáng</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className={`text-foreground rounded-lg p-3 text-[15px] font-medium hover:cursor-pointer ${theme === "dark" ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"}`}
          onClick={(e) => {
            e.preventDefault();
            handleSelectTheme("dark");
          }}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Tối</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className={`text-foreground rounded-lg p-3 text-[15px] font-medium hover:cursor-pointer ${theme === "system" ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"}`}
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
