"use client";

import { SideBarProvider } from "@/context/SideBarContext";
import { PaisProvider } from "@/context/PaisContext";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "react-use-cart";

import React from "react";

export const AppProviders = async ({ children }) => {
  return (
    <CartProvider>
      <AuthProvider>
        <SideBarProvider>
          <PaisProvider>{children}</PaisProvider>
        </SideBarProvider>
      </AuthProvider>
    </CartProvider>
  );
};
