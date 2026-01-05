// React
import { NavLink } from "react-router-dom";

// Components
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { navItems } from "../navItems";

function MobileNav() {
  return (
    <NavigationMenu className="fixed right-0 bottom-0 left-0 h-12.5 max-w-full bg-white/90 backdrop-blur-xs sm:block md:hidden">
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

export default MobileNav;
