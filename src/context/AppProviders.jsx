import { SideBarProvider } from "@/context/SideBarContext";
import { PaisProvider } from "@/context/PaisContext";
import { AuthProvider } from "@/context/AuthContext";
import React from "react";

export const AppProviders = async ({ children }) => {
  return (
    <AuthProvider>
      <SideBarProvider>
        <PaisProvider>{children}</PaisProvider>
      </SideBarProvider>
    </AuthProvider>
  );
};
