import React from "react";

import layer from "@public/icons/dates_lanyard.svg";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { ctaLinks } from "@/data";

const DateAndLocation = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-8">
      {/* <aside className="bg-[#34A853] border-4 border-primary-body rounded-xl p-4 w-full min-h-[200px] text-white space-y-5">
        <div className="flex items-center justify-between">
          <p className="">Day 1</p>
          <Image src={layer} alt="layer" className="lg:w-[200px]" />
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-3xl">October 17</h2>
          <p className="text-lg font-semibold">
            MALhub, 1 Ilofa Rd, GRA, Ilorin, Kwara State.
          </p>
        </div>

        <Button
          as={Link}
          href={ctaLinks.workshop.link}
          target="_blank"
          borderRadius={50}
          py={7}
          className="!bg-white !text-[#34A853] hover:opacity-80 flex items-center gap-2 !font-bold"
        >
          Register Now <BsArrowUpRight />
        </Button>
      </aside> */}

      <aside className="bg-[#FF7DAF] border-4 border-primary-body rounded-xl p-4 w-full min-h-[200px] text-white space-y-5">
        <div className="flex items-center justify-between">
          <p className="">Day 2</p>
          <Image src={layer} alt="layer" className="lg:w-[200px]" />
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-3xl">October 18</h2>
          <p className="text-lg font-semibold">
            Private Network, Ilorin, Kwara State.
          </p>
        </div>

        <Button
          as={Link}
          href={ctaLinks.ticket.link}
          target="_blank"
          borderRadius={50}
          py={7}
          className="!bg-white !text-[#FF7DAF] hover:opacity-80 flex items-center gap-2 !font-bold"
        >
          Get Tickets <BsArrowUpRight />
        </Button>
      </aside>

      <aside className="bg-[#136FDE] border-4 border-primary-body rounded-xl p-4 w-full min-h-[200px] text-white space-y-5">
        <div className="flex items-center justify-between">
          <p className="">Day 2</p>
          <Image src={layer} alt="layer" className="lg:w-[200px]" />
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-3xl">October 19</h2>
          <p className="text-lg font-semibold">
            Diamond Arena ( Diamond Park ), Ilorin, Kwara State.
          </p>
        </div>

        <Button
          as={Link}
          href={ctaLinks.register.link}
          target="_blank"
          borderRadius={50}
          py={7}
          className="!bg-white !text-[#136FDE] hover:opacity-80 flex items-center gap-2 !font-bold"
        >
          Get Tickets <BsArrowUpRight />
        </Button>
      </aside>
    </div>
  );
};

export default DateAndLocation;
