// React & Redux
import { useDispatch } from "react-redux";

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

// Hooks & Actions

import { setTheme } from "@/features/theme/themeSlice";
import { useLogout } from "@/hooks/useLogout";

// Icons
import { ChevronRight, Sun, Moon, Laptop } from "lucide-react";

import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";

function UserMenu({ children }) {
  useTheme();
  const dispatch = useDispatch();
  const { handleLogout } = useLogout();

  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openThemeMenu, setOpenThemeMenu] = useState(false);

  const handleOpenTheme = () => {
    setOpenUserMenu(false);
    setOpenThemeMenu(true);
  };

  const handleSelectTheme = (newTheme) => {
    dispatch(setTheme(newTheme));
    setOpenThemeMenu(false);
  };

  return (
    <>
      <DropdownMenu open={openUserMenu} onOpenChange={setOpenUserMenu}>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          /* bg-popover và text-popover-foreground sẽ tự lấy màu từ file CSS của bạn */
          className="border-border bg-popover text-popover-foreground relative -right-6 bottom-0 w-56 origin-bottom-left rounded-xl border p-2 shadow-lg"
        >
          <DropdownMenuItem
            onClick={handleOpenTheme}
            className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none"
          >
            <span className="text-[15px] font-medium">Giao diện</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-lg p-3.5 outline-none">
            <span className="text-[15px] font-medium">Thông tin chi tiết</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-lg p-3.5 outline-none">
            <span className="text-[15px] font-medium">Cài đặt</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="bg-border my-1" />

          <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none">
            <span className="text-[15px] font-medium">Bảng feed</span>

            <ChevronRight className="text-muted-foreground h-5 w-5" />
          </DropdownMenuItem>

          <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none">
            <span className="text-[15px] font-medium">Đã lưu</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none">
            <span className="text-[15px] font-medium">Đã thích</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="bg-border my-1" />

          <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none">
            <span className="text-[15px] font-medium">Báo cáo hỗ trợ</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={handleLogout}
            /* Dùng biến destructive cho nút đăng xuất */
            className="hover:bg-destructive/10 hover:text-destructive flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none"
          >
            <span className="text-destructive text-[15px] font-medium">
              Đăng xuất
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu open={openThemeMenu} onOpenChange={setOpenThemeMenu}>
        {/* Trigger ảo, không hiển thị */}
        <DropdownMenuTrigger />
        <DropdownMenuContent
          align="end"
          className="bg-popover border-border relative -right-6 bottom-10 w-56 origin-bottom-left rounded-xl p-2"
        >
          <DropdownMenuItem
            className="text-[15px] font-medium hover:cursor-pointer"
            onClick={() => handleSelectTheme("light")}
          >
            <Sun className="mr-2 h-4 w-4" />
            <span>Sáng</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="text-[15px] font-medium hover:cursor-pointer"
            onClick={() => handleSelectTheme("dark")}
          >
            <Moon className="mr-2 h-4 w-4" />
            <span>Tối</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="text-[15px] font-medium hover:cursor-pointer"
            onClick={() => handleSelectTheme("system")}
          >
            <Laptop className="mr-2 h-4 w-4" />
            <span>Hệ thống</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default UserMenu;
