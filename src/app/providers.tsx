"use client";

import ThemeProvider from "@/lib/providers/themeProvider";
import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";

import NavMenu from "@/components/menu/NavMenu";
import Footer from "@/components/footer";

interface ProvidersProp {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProp) {
  const pathname = usePathname();
  const path = pathname === "/" ? "home" : pathname.replace(/\//gi, "");

  return (
    <ThemeProvider>
      <ReactLenis root options={{ duration: 0.8, easing: (t) => t }}>
        <NavMenu currentPath={path as any} />
        <main>{children}</main>
        <Footer />
      </ReactLenis>
    </ThemeProvider>
  );
}
