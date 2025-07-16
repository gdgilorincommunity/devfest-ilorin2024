import React from "react";
import Image from "next/image";
import logo from "@public/devfest-25-logo.png";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const Waitlist = () => {
  return (
    <div className="bg-[#ffe7a5] px-10 lg:px-40 py-10 h-[100vh]">
      <nav className="container mx-auto flex items-center justify-between">
        <Image src={logo} alt="logo" className="w-[150px] lg:w-[200px]" />

        <Button
          as={Link}
          href="/2024"
          borderRadius={50}
          py={8}
          display={{ base: "none", lg: "flex" }}
          className="flex items-center gap-2 !font-bold"
        >
          View 2024 <BsArrowUpRight />
        </Button>
      </nav>

      <section className="container mx-auto flex flex-col items-center justify-center gap-2 relative z-10 mt-[10rem]">
        <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold text-gray-900">
          Devfest Ilorin <br /> 2025
        </h1>

        <p className="text-wrap text-center lg:max-w-[912px] text-[18px] text-primary-gray font-bold">
          Join us at DevFest Ilorin 2025 from November 5th to 8th
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:px-10 mt-5 w-full lg:w-fit">
          <Button
            as={Link}
            href="/2024"
            borderRadius={50}
            py={8}
            className="flex items-center gap-2 !font-bold"
          >
            View 2024 <BsArrowUpRight />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Waitlist;
