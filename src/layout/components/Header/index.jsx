// React
import { Link } from "react-router";

// Components
import { ThreadsLogo } from "@/components/icons/ThreadsLogo";
import { Button } from "@/components/ui/button";
import UserMenuMobile from "@/components/user/UserMenuMobile";

// Icons
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCurrentUser } from "@/features/auth";

function Header() {
  const { t } = useTranslation();
  const currentUser = useCurrentUser();
  return (
    <div className="bg-background/90 fixed inset-0 block flex h-15 items-center justify-between px-5 backdrop-blur-xs md:hidden">
      <Link to="/" className="absolute left-1/2 w-8 -translate-x-1/2">
        <ThreadsLogo className="size-8" />
      </Link>
      {currentUser ? (
        <>
          <UserMenuMobile>
            <Button className="hover:text-foreground bg-transparent p-3 !px-0 text-gray-400 hover:cursor-pointer hover:bg-transparent">
              <Menu size={30} className="text-foreground size-8" />
            </Button>
          </UserMenuMobile>
        </>
      ) : (
        <Button
          asChild
          className="bg-foreground hover:bg-foreground p-5 hover:cursor-pointer"
        >
          <Link to="login">{t("auth.login")}</Link>
        </Button>
      )}
    </div>
  );
}
export default Header;
