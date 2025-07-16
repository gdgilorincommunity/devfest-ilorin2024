"use client";

import NavMenu from "@/components/2024/menu/NavMenu";
import Footer from "@/components/2024/footer";
import { usePathname } from "next/navigation";

export default function TwentyFourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const path = pathname === "/" ? "home" : pathname.replace(/\//gi, "");

  return (
    <>
      <NavMenu currentPath={path as any} />
      {children}
      <Footer />
    </>
  );
}
