"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

interface ProviderWrapperProps {
  children: ReactNode;
}

const ProviderWrapper: React.FC<ProviderWrapperProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
