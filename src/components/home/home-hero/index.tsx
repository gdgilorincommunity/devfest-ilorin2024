import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import ConfettiContainer from "@/components/confetti/ConfettiContainer";
import { ctaLinks } from "@/data";
// import Image from "next/image";
// import sunset from "@public/icons/icon-sunset.svg";

const HomeHero = () => {
  return (
    <section className="px-4 lg:px-20 bg-devfest-hero pt-10">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 relative z-10">
        <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900">
          Devfest Ilorin <br /> 2024
        </h1>

        <p className="text-wrap text-center lg:max-w-[912px] text-[18px] text-primary-gray">
          Join us at DevFest Ilorin 2024 from October 17 to 19 for 3 days of
          inspiring talks, interactive workshops, and unparalleled networking
          opportunities. With over 2,000 attendees, this event is your gateway
          to the latest in AI, Android, Cloud, and more. Don’t miss out on
          Ilorin&apos;s largest tech celebration of the year!
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:px-10 mt-5 w-full lg:w-fit">
          <Button
            as={Link}
            href={ctaLinks.register.link}
            target="_blank"
            borderRadius={50}
            py={8}
            className="flex items-center gap-2 !font-bold w-full"
          >
            Register Now <BsArrowUpRight />
            {/* for conference (Day 3 Main) */}
          </Button>

          {/* <Button
            as={Link}
            href={ctaLinks.workshop.link}
            target="_blank"
            borderRadius={50}
            py={8}
            className="!bg-[#33A852] !text-white hover:opacity-80 flex items-center gap-2 !font-bold w-full"
          >
            Register for workshop (Day 1) <BsArrowUpRight />
          </Button> */}
        </div>
      </div>
      <ConfettiContainer />
    </section>
  );
};

export default HomeHero;
