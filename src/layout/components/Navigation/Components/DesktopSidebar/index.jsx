import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import { navItems } from "../navItems";
import { ThreadsLogo } from "@/components/icons/ThreadsLogo";

function DesktopSidebar() {
  return (
    <aside className="bg-background fixed top-0 left-0 hidden h-screen w-[76px] flex-col items-center border-r py-4 md:flex">
      {/* Logo */}
      <NavLink
        to="/"
        className="hover:bg-muted/50 mb-6 rounded-lg p-3 transition-colors"
      >
        <ThreadsLogo className="size-8" />
      </NavLink>

      {/* Navigation Items */}
      <nav className="flex flex-1 flex-col items-center gap-1">
        {navItems.map((item, index) => {
          return item.path ? (
            <NavLink
              key={item.path}
              to={item.path}
              className="hover:bg-muted/50 rounded-lg p-3 transition-all active:scale-95"
            >
              {({ isActive }) => {
                const Icon =
                  isActive && item.activeIcon ? item.activeIcon : item.icon;
                return (
                  <Icon
                    className={`size-7 ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  />
                );
              }}
            </NavLink>
          ) : (
            <Button
              key={`nav-${index}`}
              variant="ghost"
              className="hover:bg-muted/50 rounded-lg p-3"
            >
              <item.icon className="text-muted-foreground size-7" />
            </Button>
          );
        })}
      </nav>

      {/* More Button */}
      <Button
        variant="ghost"
        className="hover:bg-muted/50 mt-auto rounded-lg p-3"
      >
        <Menu className="text-muted-foreground size-7" />
      </Button>
    </aside>
  );
}

export default DesktopSidebar;
