"use client";

import { createContext, useContext } from "react";
import { MotionValue } from "framer-motion";

export const ScrollContext = createContext<MotionValue<number> | null>(null);

export function useScrollyProgress() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollyProgress must be used within ScrollyCanvas");
  }
  return context;
}
