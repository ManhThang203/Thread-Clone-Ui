import { MoveLeft } from "lucide-react";
import { ThreadsLogo } from "@/components/icons/ThreadsLogo";
import { Link } from "react-router";
function HeaderLoginMobile() {
  return (
    <div className="md:hidden">
      <div className="fixed top-5 right-0 left-5 flex h-12 items-center justify-center">
        <Link to="/">
          <MoveLeft />
        </Link>
        <ThreadsLogo />
      </div>
    </div>
  );
}

export default HeaderLoginMobile;
