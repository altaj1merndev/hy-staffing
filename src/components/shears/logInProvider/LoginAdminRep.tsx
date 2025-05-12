"use client"

import { setUser } from "@/app/redux/features/auth.slice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { getCookie, getCurrentUser } from "@/src/shears/utils/cookie";

const LoginAdminRep = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const accessToken = getCookie("hy-staffing");
    if (!accessToken) {
      router.push("/auth/login"); // Redirect to login if there's no token
    } else {
      getCurrentUser({
        accessToken,
      })
        .then((user) => {
          const { email, id, role } = user;
          dispatch(
            setUser({
              email,
              id,
              role,
            })
          );

          // Check if the user is an admin, if not, redirect
          if (role !== "admin") {
            router.push("/");
          }
        })
        .catch((error) => {
          console.error("Failed to fetch user:", error);
          router.push("/auth/login"); // Redirect to login on error
        });
    }
  }, [dispatch, router]);

  return <>{children}</>;
};

export default LoginAdminRep;
