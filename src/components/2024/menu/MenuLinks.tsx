import { ctaLinks, menuLinks, newMenuLinks } from "@/data/2024";
import React from "react";
import { NavMenuProps } from "./NavMenu";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function MenuLinks({ currentPath }: NavMenuProps) {
  const pathname = usePathname();
  const normalizedPath = currentPath.startsWith("/")
    ? currentPath
    : `/${currentPath}`;

  const linksToRender = pathname === "/" ? newMenuLinks : menuLinks;

  return (
    <div className="flex flex-row gap-5 px-5 lg:w-auto lg:h-auto lg:bg-transparent lg:relative lg:items-center lg:gap-10">
      <ul className="flex flex-row items-center gap-10 font-medium overflow-x-auto">
        {linksToRender.map((link) => {
          return (
            <li
              key={link.path}
              className={clsx({
                "text-devfest-active border-b-2 border-devfest-active":
                  normalizedPath.toLowerCase() === link.path.toLowerCase(),
              })}
            >
              <Link href={link.path} target={link.isExternal ? "_blank" : ""}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
      {pathname === "/" && (
        <Button
          as={Link}
          href="/2024"
          borderRadius={50}
          py={8}
          display={{ base: "none", lg: "flex" }}
          className="flex items-center gap-2 !font-bold"
        >
          2024 <BsArrowUpRight />
        </Button>
      )}
    </div>
  );
}
