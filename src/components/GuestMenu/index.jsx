// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Icon
import { ChevronRight } from "lucide-react";

function GuestMenu({ children }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-popover border-border relative -right-6 bottom-0 w-56 origin-bottom-left rounded-xl p-2"
      >
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <span className="text-[15px] font-medium">Giao diện</span>
          </div>
          <ChevronRight className="text-muted-foreground h-5 w-5" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer p-3">
          <span className="text-[15px] font-medium">Báo cáo sự cố</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GuestMenu;
