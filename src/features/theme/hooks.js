import { useSelector } from "react-redux";
import { selectTheme } from "./select";

export const useCurrentTheme = () => {
  const theme = useSelector(selectTheme);
  return theme;
};
