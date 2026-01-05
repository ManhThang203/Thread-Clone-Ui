import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { navItems } from "./navItems";

function MobileNav() {
  return (
    <NavigationMenu className="bg-background/90 fixed right-0 bottom-0 left-0 h-14 max-w-full border-t backdrop-blur-sm md:hidden">
      <NavigationMenuList className="flex w-full">
        {navItems.map((item, index) => {
          return item.path ? (
            <NavigationMenuItem key={item.path} className="flex-1">
              <NavigationMenuLink
                asChild
                className="flex h-14 items-center justify-center"
              >
                <NavLink
                  to={item.path}
                  className="transition-all hover:bg-transparent focus:bg-transparent active:scale-90"
                >
                  {({ isActive }) => {
                    const Icon =
                      isActive && item.activeIcon ? item.activeIcon : item.icon;
                    return (
                      <Icon
                        className={`size-6 ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      />
                    );
                  }}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={`nav-${index}`} className="flex-1">
              <Button variant="ghost" className="hover:bg-muted/50 h-14 w-full">
                <item.icon className="text-muted-foreground size-6" />
              </Button>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MobileNav;
