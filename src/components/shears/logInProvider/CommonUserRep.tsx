/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { setUser } from "@/app/redux/features/auth.slice";
import { getCookie, getCurrentUser } from "@/src/shears/utils/cookie";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const CommonUserRep = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = getCookie("hy-staffing");

    getCurrentUser({
      accessToken: accessToken || "",
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
      })
      .catch((error: any) => {
        console.error("Failed to fetch user:", error);
      });
  }, [dispatch]);
  return <>{children}</>;
};

export default CommonUserRep;
