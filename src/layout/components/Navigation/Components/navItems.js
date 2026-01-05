import { Search, Heart, Plus, Menu } from "lucide-react";
import { House } from "@/components/icons/House";
import { HouseActiveIcon } from "@/components/icons/HouseActiveIcon";
import { HeartActiveIcon } from "@/components/icons/HeartActiveIcon";
import { User } from "@/components/icons/User";
import { UserActiveIcon } from "@/components/icons/UserActiveIcon";

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
    path: "/profile",
    icon: User,
    activeIcon: UserActiveIcon,
    label: "Hồ sơ",
  },
];
