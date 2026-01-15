// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronRight } from "lucide-react";

function MainMenu({
  openUserMenu,
  setOpenUserMenu,
  children,
  handleOpenTheme,
  handleOpenLanguage,
  handleLogout,
}) {
  return (
    <DropdownMenu open={openUserMenu} onOpenChange={setOpenUserMenu}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        /* bg-popover và text-popover-foreground sẽ tự lấy màu từ file CSS của bạn */
        className="border-border bg-popover text-popover-foreground relative top-2 left-5 w-56 origin-top-left rounded-xl border p-2 shadow-lg"
      >
        <DropdownMenuItem
          onClick={handleOpenTheme}
          className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none"
        >
          <span className="text-[15px] font-medium">Giao diện</span>
          <ChevronRight className="text-muted-foreground h-5 w-5" />
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

        <DropdownMenuItem
          onClick={handleOpenLanguage}
          className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none"
        >
          <span className="text-[15px] font-medium">Ngôn ngữ</span>
          <ChevronRight className="text-muted-foreground h-5 w-5" />
        </DropdownMenuItem>

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
  );
}

export default MainMenu;
