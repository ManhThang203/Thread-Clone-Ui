// React
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Auth
import * as authServices from "@/services/auth/authService";
import { setCurrentUser } from "@/features/auth";

// Icon
import { ChevronRight } from "lucide-react";

function UserMenu({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await authServices.logout();
    } catch (error) {
      console.log(error);
    } finally {
      localStorage.clear();
      navigate("/login");
      dispatch(setCurrentUser(null));
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-popover border-border relative -right-6 bottom-0 w-56 origin-bottom-left rounded-xl p-2"
      >
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-3.5 hover:bg-gray-50">
          <span className="text-[15px] font-medium text-gray-900">
            Giao diện
          </span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer rounded-lg p-3.5 hover:bg-gray-50">
          <span className="text-[15px] font-medium text-gray-900">
            Thông tin chi tiết
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer rounded-lg p-3.5 hover:bg-gray-50">
          <span className="text-[15px] font-medium text-gray-900">Cài đặt</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-1 bg-gray-100" />

        <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-3.5 hover:bg-gray-50">
          <span className="text-[15px] font-medium text-gray-900">
            Bảng feed
          </span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-3.5 hover:bg-gray-50">
          <span className="text-[15px] font-medium text-gray-900">Đã lưu</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-3.5 hover:bg-gray-50">
          <span className="text-[15px] font-medium text-gray-900">
            Đã thích
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-1 bg-gray-100" />
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between rounded-lg p-3.5 hover:bg-gray-50">
          <span className="text-[15px] font-medium text-gray-900">
            Báo cáo hỗ trợ
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="flex cursor-pointer items-center justify-between rounded-lg p-3.5 hover:bg-gray-50"
        >
          <span className="text-[15px] font-medium text-red-600">
            Đăng xuất
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
