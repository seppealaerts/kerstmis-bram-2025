"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SlideNavigationContextType {
  canGoNext: boolean;
  setCanGoNext: (canGo: boolean) => void;
}

const SlideNavigationContext = createContext<SlideNavigationContextType | undefined>(undefined);

export function SlideNavigationProvider({ children }: { children: ReactNode }) {
  const [canGoNext, setCanGoNext] = useState(true);

  return (
    <SlideNavigationContext.Provider value={{ canGoNext, setCanGoNext }}>
      {children}
    </SlideNavigationContext.Provider>
  );
}

export function useSlideNavigation() {
  const context = useContext(SlideNavigationContext);
  if (context === undefined) {
    throw new Error("useSlideNavigation must be used within a SlideNavigationProvider");
  }
  return context;
}

