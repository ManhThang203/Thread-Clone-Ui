// Đây là import động
import { BrowserRouter, Route, Routes } from "react-router";

import { lazy } from "react";
import DefaultLayout from "@/layout/DefaultLayout";
// Đây là import bất đồng bộ
const Activity = lazy(() => import("@/page/Activity"));
const Search = lazy(() => import("@/page/Search"));
const User = lazy(() => import("@/page/User"));

// Page
const Home = lazy(() => import("@/page/Home"));

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Layout */}
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="activity" element={<Activity />} />
          <Route path="search" element={<Search />} />
          <Route path="User" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
