import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  IconButton,
  Spacer,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { NavMenuProps } from "./NavMenu";
import { ctaLinks, menuLinks, newMenuLinks } from "@/data";
import clsx from "clsx";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function DrawerMenu({ currentPath }: NavMenuProps) {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const linksToRender = pathname === "/" ? newMenuLinks : menuLinks;

  return (
    <>
      <IconButton
        ref={btnRef}
        colorScheme="primary"
        variant={"ghost"}
        onClick={onOpen}
        aria-label={""}
        icon={<RiMenu3Line size={48} />}
        width={12}
        display={{ base: "flex", lg: "none" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Stack
              as={"ul"}
              divider={<StackDivider />}
              className="flex flex-col items-center gap-10 font-medium overflow-x-auto"
            >
              <li
                key={"home"}
                className={clsx({
                  "text-devfest-active border-b-2 border-devfest-active":
                    currentPath.toLowerCase() === "home",
                })}
              >
                <Link href={"/"} onClick={onClose} passHref prefetch={false}>
                  Home
                </Link>
              </li>
              {linksToRender.map((link) => {
                return (
                  <li
                    key={link.path}
                    className={clsx({
                      "text-devfest-active border-b-2 border-devfest-active":
                        currentPath.toLowerCase() === link.title.toLowerCase(),
                    })}
                  >
                    <Link
                      href={link.path}
                      onClick={onClose}
                      passHref
                      prefetch={false}
                      target={link.isExternal ? "_blank" : ""}
                    >
                      <Text>{link.title}</Text>
                    </Link>
                  </li>
                );
              })}
            </Stack>
            <Spacer />
          </DrawerBody>

          <DrawerFooter>
            <Button
              as={Link}
              href={ctaLinks.register.link}
              target="_blank"
              py={8}
              display={{ base: "none", lg: "flex" }}
              className="flex items-center gap-2"
            >
              Register Now <BsArrowUpRight />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
