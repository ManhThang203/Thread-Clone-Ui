// Icons
import { User } from "@/components/icons/User";
import { House } from "@/components/icons/House";
import { Search, Heart, Plus } from "lucide-react";
import { UserActiveIcon } from "@/components/icons/UserActiveIcon";
import { HouseActiveIcon } from "@/components/icons/HouseActiveIcon";
import { HeartActiveIcon } from "@/components/icons/HeartActiveIcon";

export const navItems = [
  {
    path: "/",
    icon: House,
    activeIcon: HouseActiveIcon,
    label: "Trang chủ",
  },
  {
    path: "/search",
    icon: Search,
    label: "Tìm kiếm",
  },
  {
    path: "",
    icon: Plus,
    label: "Tạo",
  },
  {
    path: "/activity",
    icon: Heart,
    activeIcon: HeartActiveIcon,
    label: "Hoạt động",
  },
  {
    path: "/user",
    icon: User,
    activeIcon: UserActiveIcon,
    label: "Hồ sơ",
  },
];
