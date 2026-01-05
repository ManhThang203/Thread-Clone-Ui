import { Outlet } from "react-router";
import Header from "@/layout/components/Header";
import Navigation from "@/layout/components/Navigation";

function DefaultLayout() {
  return (
    <>
      {/* Header chỉ hiển thị trên desktop (md trở lên), ẩn trên mobile */}
      <Header className="" />

      <div>
        <Outlet />
      </div>

      <Navigation />
    </>
  );
}

export default DefaultLayout;
