"use client";

import ThemeProvider from "@/lib/providers/themeProvider";
import { ReactLenis } from "lenis/react";

interface ProvidersProp {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProp) {
  return (
    <ThemeProvider>
      <ReactLenis root options={{ duration: 0.8, easing: (t) => t }}>
        <main>{children}</main>
      </ReactLenis>
    </ThemeProvider>
  );
}
