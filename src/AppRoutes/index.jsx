// Đây là import động
import { BrowserRouter, Route, Routes } from "react-router";

import { lazy } from "react";
import DefaultLayout from "@/layout/DefaultLayout";

const Activity = lazy(() => import("@/page/Activity"));
const Search = lazy(() => import("@/page/Search"));
const User = lazy(() => import("@/page/User"));
const Login = lazy(() => import("@/page/Auth/Login"));
const Register = lazy(() => import("@/page/Auth/Register"));
const ResetPassword = lazy(() => import("@/page/Auth/ResetPassword"));
const ForgotPassword = lazy(() => import("@/page/Auth/ForgotPassword"));

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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
