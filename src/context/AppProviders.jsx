"use client";

import { AfiliadosProvider } from "@/context/AfiliadosContext";

import React from "react";

export const AppProviders = async ({ children }) => {
  return <AfiliadosProvider>{children}</AfiliadosProvider>;
};
