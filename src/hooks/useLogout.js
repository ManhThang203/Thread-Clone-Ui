// React
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

// Auth
import * as authServices from "@/services/auth/authService";
import { setCurrentUser } from "@/features/auth";
export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await authServices.logout();
    } catch (error) {
      console.log(error);
    } finally {
      localStorage.clear();
      navigate("/login");
      dispatch(setCurrentUser(null));
    }
  };
  return { handleLogout };
};
