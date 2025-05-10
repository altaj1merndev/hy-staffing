
import { useAppDispatch } from "@/app/redux/hoook";
import { removeCookie } from "./cookie";
import { logOutAction } from "@/app/redux/features/auth.slice";

// Custom hook for logging out
export const useLogOut = () => {
  const dispatch = useAppDispatch();
  // Define the logOut function
  const logOut = () => {
    dispatch(logOutAction()); // Dispatch the logOutAction
    removeCookie("accessToken"); // Remove the token (you can handle this more elegantly if needed)
    removeCookie("hy-staffing"); // Remove the token (you can handle this more elegantly if needed)
    window.location.href = "/auth/login"; // Uncomment to redirect to login page
  };

  return { logOut };
};
