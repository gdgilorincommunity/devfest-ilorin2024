import { menuLinks } from "@/data";
import React from "react";
import { NavMenuProps } from "./NavMenu";
import clsx from "clsx";
import Link from "next/link";

export default function MenuLinks({ currentPath }: NavMenuProps) {
  const normalizedPath = currentPath.startsWith("/")
    ? currentPath
    : `/${currentPath}`;

  return (
    <div className="flex flex-row gap-5 px-5 lg:w-auto lg:h-auto lg:bg-transparent lg:relative lg:items-center lg:gap-10">
      <ul className="flex flex-row items-center gap-10 font-medium overflow-x-auto">
        {menuLinks.map((link) => {
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
    </div>
  );
}
