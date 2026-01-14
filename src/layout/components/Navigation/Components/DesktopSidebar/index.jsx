// React
import { NavLink } from "react-router-dom";

// Components
import { Button } from "@/components/ui/button";
import { ThreadsLogo } from "@/components/icons/ThreadsLogo";
import GuestMenu from "@/components/GuestMenu";

import { navItems } from "@/layout/components/Navigation/Components/navItems";

// Icons
import { Menu } from "lucide-react";
import UserMenu from "@/components/UserMenu";
import { useCurrentUser } from "@/features/auth";

function DesktopSidebar() {
  const currentUser = useCurrentUser();
  const MenuComponent = currentUser ? UserMenu : GuestMenu;
  return (
    <aside className="fixed top-0 left-0 hidden h-dvh w-[76px] flex-col items-center p-2 md:flex">
      {/* Logo */}
      <NavLink to="/" className="p-3">
        <ThreadsLogo className="size-8" />
      </NavLink>

      {/* Navigation Items */}
      <nav className="flex flex-1 flex-col items-center justify-center gap-4">
        {navItems.map((item, index) => {
          return item.path ? (
            <NavLink key={index} to={item.path} className="p-3 active:scale-95">
              {({ isActive }) => {
                const Icon =
                  isActive && item.activeIcon ? item.activeIcon : item.icon;
                return (
                  <Icon
                    className={`size-7 ${
                      isActive ? "text-accent-foreground" : "text-ring"
                    }`}
                  />
                );
              }}
            </NavLink>
          ) : (
            <Button
              key={index}
              variant="ghost"
              className="bg-gray-200 p-3 hover:cursor-pointer hover:bg-gray-200"
            >
              <item.icon className="size-7 text-gray-400" />
            </Button>
          );
        })}
      </nav>

      {/* More Button */}
      <MenuComponent>
        <Button
          variant="ghost"
          className="p-3 hover:cursor-pointer hover:bg-transparent"
        >
          <Menu className="size-7 text-gray-400" />
        </Button>
      </MenuComponent>
    </aside>
  );
}

export default DesktopSidebar;
