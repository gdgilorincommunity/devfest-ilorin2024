import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import lanyard from "@public/icons/lanyard-white-bg.svg";
import { ctaLinks } from "@/data";

const PrivateNetwork: React.FC = () => {
  return (
    <div>
      <h2 className="text-[#1E1E1E] text-4xl mb-5 font-bold text-center">
        Buy Tickets to see Schedule
      </h2>
      <div
        className="border-4 border-[#1E1E1E] rounded-[25px] p-4"
        style={{
          backgroundColor: "#FFE7A5",
        }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mt-4 text-black">Day 2</h1>
          <div className="p-2 rounded-full w-fit border-2 border-black text-primary-body capitalize  bg-[#5CDB6D]">
            Private Network
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-10">
          <Image src={lanyard} alt="lanyard" className="w-[300px] mt-14" />

          <h2
            className="font-bold text-5xl my-8"
            style={{
              color: "#FFD427",
              textShadow:
                "1px 0 black, -1px 0 black, 0 1px black, 0 -1px black",
            }}
          >
            ₦15,000
          </h2>

          <div className="flex flex-col justify-center items-center">
            <p className="text-lg text-primary-body">
              Full day of workshop in web, mobile, cloud, Design
            </p>
            <Button
              as="a"
              href={ctaLinks.ticket.link}
              borderRadius={50}
              px={8}
              py={8}
              className="!text-white hover:opacity-80 mt-4 flex items-center gap-2 !bg-[#EA4335] w-fit"
            >
              Buy Ticket
              <BsArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateNetwork;
