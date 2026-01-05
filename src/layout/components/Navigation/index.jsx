import { NavLink } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Heart, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HouseActiveIcon } from "@/components/icons/HouseActiveIcon";
import { House } from "@/components/icons/House";
import { HeartActiveIcon } from "@/components/icons/HeartActiveIcon";
import { User } from "@/components/icons/User";
import { UserActiveIcon } from "@/components/icons/UserActiveIcon";

function Navigation() {
  const navItems = [
    {
      path: "/",
      icon: House,
      activeIcon: HouseActiveIcon,
    },
    {
      path: "/search",
      icon: Search,
    },
    {
      path: "",
      icon: Plus,
    },
    {
      path: "/activity",
      icon: Heart,
      activeIcon: HeartActiveIcon,
    },
    {
      path: "/user",
      icon: User,
      activeIcon: UserActiveIcon,
    },
  ];

  return (
    <NavigationMenu className="fixed right-0 bottom-0 left-0 h-12.5 max-w-full bg-white/90 backdrop-blur-xs">
      <NavigationMenuList className="flex w-dvw">
        {navItems.map((item, index) => {
          return item.path ? (
            <NavigationMenuItem key={item.path} className="flex-1">
              <NavigationMenuLink
                asChild
                className="flex h-10 items-center justify-center"
              >
                <NavLink
                  to={item.path}
                  className="transition-all hover:bg-transparent focus:bg-transparent active:translate-y-0.5 active:scale-90"
                >
                  {({ isActive }) => {
                    const Icon =
                      isActive && item.activeIcon ? item.activeIcon : item.icon;
                    return (
                      <Icon
                        className={`size-6 ${
                          isActive ? "text-black" : "text-gray-400"
                        }`}
                      />
                    );
                  }}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={`nav-${index}`} className="flex-1">
              <Button
                variant="ghost"
                className="h-10 w-full bg-gray-200 hover:cursor-pointer"
              >
                <item.icon className="size-6 text-gray-400" />
              </Button>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;
