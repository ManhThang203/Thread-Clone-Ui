// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Icon
import { ChevronRight } from "lucide-react";

function MainMenu({
  openUserMenu,
  setOpenUserMenu,
  children,
  handleOpenTheme,
  handleOpenLanguage,
}) {
  return (
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
          <span className="text-foreground text-[15px] font-medium">
            Giao diện
          </span>
          <ChevronRight className="text-muted-foreground h-5 w-5" />
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleOpenLanguage}
          className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none"
        >
          <span className="text-foreground text-[15px] font-medium">
            Ngôn ngữ
          </span>
          <ChevronRight className="text-muted-foreground h-5 w-5" />
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center justify-between rounded-lg p-3.5 outline-none">
          <span className="text-foreground text-[15px] font-medium">
            Báo cáo hỗ trợ
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MainMenu;
