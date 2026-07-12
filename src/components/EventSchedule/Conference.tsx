import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import lanyard from "@public/icons/lanyard-white-bg.svg";
import { ctaLinks } from "@/data";
import {
  LongEventScheduleCard,
  PanelEventScheduleCard,
  ShortEventScheduleCard,
} from "./EventScheduleCard";
import {
  schedule,
  scheduleFour,
  scheduleThree,
  scheduleTwo,
} from "@/data/schedule";

import aliyu from "@public/speakers/aliyu.png";
import tosin from "@public/speakers/tosin.png";
import alaran from "@public/speakers/alaran.png";
import etiene from "@public/speakers/etiene.png";

import taiye from "@public/speakers/taiye.png";
import samuel from "@public/speakers/samuel.png";
import goodness from "@public/speakers/goodness.png";
import temi from "@public/speakers/temi.png";

const Conference: React.FC = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-4 pb-10 lg:pb-20">
        <LongEventScheduleCard
          title="Arrival & Registration"
          time="8:00 AM - 9:00 AM"
          className="lg:col-span-2"
        />
        {schedule.map((schedule, index) => (
          <ShortEventScheduleCard key={index} {...schedule} />
        ))}
        <LongEventScheduleCard
          title="Tea-Break & Games"
          time="11:55 AM - 12:10 PM"
          className="lg:col-span-2"
        />
        <PanelEventScheduleCard
          session="Panel Discussion"
          title="AI, Ethics, and the Future of Work"
          imgs={[aliyu, tosin, alaran, etiene]}
          time="12:10 PM - 12:35 PM"
          duration="25 minutes"
          speakers={[
            "Aliyu Ramat",
            "Tosin Yusuf",
            "Alaran Khaerat",
            "Etienne Essenoh",
          ]}
        />
        {scheduleTwo.map((schedule, index) => (
          <ShortEventScheduleCard key={index} {...schedule} />
        ))}
        <LongEventScheduleCard
          title="Break"
          time=""
          className="lg:col-span-2"
        />
        <LongEventScheduleCard
          title="Family Group Photo"
          time="1:28 PM - 1:43 PM"
          className="lg:col-span-2"
        />
        <LongEventScheduleCard
          title="Lunch Break & Games"
          time="1:43 PM - 2:03 PM"
          className="lg:col-span-2"
        />
        {scheduleThree.map((schedule, index) => (
          <ShortEventScheduleCard key={index} {...schedule} />
        ))}
        <PanelEventScheduleCard
          session="Panel Discussion"
          title="Building Tech Solutions for African Challenges"
          imgs={[taiye, samuel, goodness, temi]}
          time="2:18 PM - 2:43 PM"
          duration="25 minutes"
          speakers={[
            "Abubakar Taiye Hassanat",
            "Samuel Afolabi",
            "Goodness Adebayo",
            "Temi Kolawole",
          ]}
        />
        {scheduleFour.map((schedule, index) => (
          <ShortEventScheduleCard key={index} {...schedule} />
        ))}
        <LongEventScheduleCard
          title="Closing Remarks & Gifts"
          time=""
          className="lg:col-span-2"
        />
      </div>

      <div
        className="border-4 border-[#1E1E1E] rounded-[25px] p-4"
        style={{
          backgroundColor: "#C3ECF6",
        }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mt-4 text-black">Day 3</h1>
          <div className="p-2 rounded-full w-fit border-2 border-black text-primary-body capitalize  bg-[#57CAFF]">
            Conference
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-10">
          <Image src={lanyard} alt="lanyard" className="w-[300px] mt-14" />

          <h2
            className="font-bold text-5xl my-8"
            style={{
              color: "#57CAFF",
              textShadow:
                "1px 0 black, -1px 0 black, 0 1px black, 0 -1px black",
            }}
          >
            Free
          </h2>

          <div className="flex flex-col justify-center items-center">
            <p className="text-lg text-primary-body">
              Full day of conference in web, mobile, cloud, Design
            </p>
            <Button
              as="a"
              href={ctaLinks.register.link}
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

export default Conference;
