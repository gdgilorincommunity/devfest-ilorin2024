import React from "react";
import devfestFrame from "@public/devfest-lanyard.png";
import DateAndLocation from "@/components/2024/date-and-location";
import Image from "next/image";

import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { ctaLinks, sponsors } from "@/data/2024";

export default function SponsorsPage() {
  const renderSponsors = (type: string) => {
    return sponsors
      .filter((sponsor) => sponsor.type === type)
      .map((sponsor, index) => (
        <Link
          key={index}
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="border-4 border-[#1E1E1E] p-4 rounded-xl flex items-center bg-[#F0F0F0]"
        >
          <Image alt="sponsor" src={sponsor.img} className="" />
        </Link>
      ));
  };

  return (
    <div className="px-4 lg:px-20 container mx-auto">
      <section className="lg:w-[1100px] mx-auto pt-10">
        <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900">
          Our sponsors
        </h1>

        <p className="text-wrap text-center text-[18px] text-primary-gray font-bold lg:w-[900px] mx-auto">
          We extend our heartfelt gratitude to our esteemed sponsors for their
          invaluable support. Your partnership helps make DevFest Ilorin 2024 an
          extraordinary event, fostering innovation and connecting the tech
          community. Thank you for being a crucial part of our journey!
        </p>

        <DateAndLocation />
      </section>

      <section className="py-10 lg:py-20">
        <Image src={devfestFrame} alt="devfest-frame" />

        <div className="space-y-10 mt-10">
          <div>
            <div className="p-2 rounded-full w-fit border-2 border-black text-primary-body font-semibold text-lg capitalize bg-[#FF7DAF]">
              Platinum Sponsors
            </div>
            <div className="mt-4 grid lg:grid-cols-2 gap-10">
              {renderSponsors("platinum")}
            </div>
          </div>

          <div>
            <div className="p-2 rounded-full w-fit border-2 border-black text-primary-body font-semibold text-lg capitalize bg-[#FF7DAF]">
              Gold Sponsors
            </div>
            <div className="mt-4 grid lg:grid-cols-3 gap-10">
              {renderSponsors("gold")}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <Button
            as={Link}
            href={ctaLinks.sponsor.link}
            borderRadius={50}
            py={8}
            className="!bg-primary-body !text-white hover:opacity-80 flex items-center gap-2"
          >
            Sponsor Us <BsArrowUpRight />
          </Button>
        </div>
      </section>
    </div>
  );
}
