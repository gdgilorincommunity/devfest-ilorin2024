import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { ctaLinks } from "@/data";

const ThankYouHomeHero = () => {
  return (
    <section className="px-4 lg:px-20 bg-devfest-hero pt-10 h-[calc(100vh_-_130px)]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 relative z-10 h-full">
        <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900 lg:w-[1000px] mx-auto">
          Thank you for attending Devfest Ilorin 2024
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:px-10 mt-5 w-full lg:w-fit">
          <Button
            as={Link}
            href={ctaLinks.photosOne.link}
            target="_blank"
            borderRadius={50}
            py={8}
            className="flex items-center gap-2 !font-bold w-full"
          >
            Photos for Day 1 <BsArrowUpRight />
          </Button>

          <Button
            as={Link}
            href={ctaLinks.photosTwo.link}
            target="_blank"
            borderRadius={50}
            py={8}
            className="flex items-center gap-2 !font-bold w-full"
          >
            Photos for Day 2 <BsArrowUpRight />
          </Button>

          <Button
            as={Link}
            href={ctaLinks.photosThree.link}
            target="_blank"
            borderRadius={50}
            py={8}
            className="flex items-center gap-2 !font-bold w-full"
          >
            Photos for Day 3 <BsArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThankYouHomeHero;
