// React
import { Link } from "react-router";

// Components
import { ThreadsLogo } from "@/components/icons/ThreadsLogo";
import { Button } from "@/components/ui/button";

// Icons
import { Menu } from "lucide-react";

function Header() {
  return (
    <div className="bg-background/90 fixed inset-0 block flex h-15 items-center justify-between px-5 backdrop-blur-xs md:hidden">
      <Button className="bg-transparent !px-0 text-gray-400 hover:cursor-pointer hover:bg-transparent">
        <Menu size={30} />
      </Button>
      <Link to="/" className="absolute left-1/2 w-8 -translate-x-1/2">
        <ThreadsLogo className="size-8" />
      </Link>
      <Button className="hover:cursor-pointer">Open app</Button>
    </div>
  );
}
export default Header;
