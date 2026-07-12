import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight, BsInfoCircle } from "react-icons/bs";
import lanyard from "@public/icons/lanyard-white-bg.svg";
import { ctaLinks } from "@/data";
import {
  LongEventScheduleCard,
  IntroductionEventScheduleCard,
  TrackEventScheduleCard,
  ShortEventScheduleCard,
} from "./EventScheduleCard";
import {
  engineeringOneSchedules,
  designSchedules,
  engineeringTwoSchedules,
} from "@/data/schedule";

const Workshop: React.FC = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-4 pb-10 lg:pb-20">
        <LongEventScheduleCard
          title="Arrival & Registration"
          time="8:00 AM - 9:00 AM"
          className="lg:col-span-2"
        />
        <IntroductionEventScheduleCard
          time="9:00 AM - 9:15 AM"
          title="Introduction"
          className="lg:col-span-2"
        />
        <div className="lg:col-span-2">
          <p className="text-[#EA4435] text-sm lg:text-center flex lg:items-center gap-2 justify-center italic">
            <BsInfoCircle color="#EA4435" />

            <span>
              All tracks would be going on simultaneously in different breakout
              rooms.
            </span>
          </p>
        </div>
        <TrackEventScheduleCard
          title="Engineering & AI Track I"
          bgColor="#32A852"
          className="lg:col-span-2"
        />
        {engineeringOneSchedules.map((schedule, index) => (
          <ShortEventScheduleCard key={index} {...schedule} />
        ))}
        <TrackEventScheduleCard
          title="Engineering & AI Track II"
          bgColor="#32A852"
          className="lg:col-span-2"
        />
        {engineeringTwoSchedules.map((schedule, index) => (
          <ShortEventScheduleCard key={index} {...schedule} />
        ))}
        <TrackEventScheduleCard
          title="Design Track"
          bgColor="#136FDE"
          className="lg:col-span-2"
        />
        {designSchedules.map((schedule, index) => (
          <ShortEventScheduleCard key={index} {...schedule} />
        ))}
        <LongEventScheduleCard
          title="Tea-Break & Games"
          time="2:00 PM - 2:30 PM"
          className="lg:col-span-2"
        />
        <LongEventScheduleCard
          title="Closing Remarks & Gifts"
          time="2:30 PM - 3:00 PM"
          className="lg:col-span-2"
        />
      </div>

      <div
        className="border-4 border-[#1E1E1E] rounded-[25px] p-4"
        style={{
          backgroundColor: "#F8D8D8",
        }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mt-4 text-black">Day 1</h1>
          <div className="p-2 rounded-full w-fit border-2 border-black text-primary-body capitalize  bg-[#57CAFF]">
            Workshop
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-10">
          <Image src={lanyard} alt="lanyard" className="w-[300px] mt-14" />

          <h2
            className="font-bold text-5xl my-8"
            style={{
              color: "#FF7DAF",
              textShadow:
                "1px 0 black, -1px 0 black, 0 1px black, 0 -1px black",
            }}
          >
            Free
          </h2>

          <div className="flex flex-col justify-center items-center">
            <p className="text-lg text-primary-body">
              Full day of workshop in web, mobile, cloud, Design
            </p>
            <Button
              as="a"
              href={ctaLinks.workshop.link}
              borderRadius={50}
              px={8}
              py={8}
              className="!text-white hover:opacity-80 mt-4 flex items-center gap-2 w-fit"
            >
              Register Now
              <BsArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
