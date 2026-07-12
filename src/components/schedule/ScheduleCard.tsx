import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import lanyard from "@public/icons/lanyard-white-bg.svg";

type ScheduleItem = {
  day: number;
  type: string;
  price: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
  background: string;
  textColor: string;
};

type ScheduleCardProps = {
  scheduleItem: ScheduleItem;
};

const ScheduleCard: React.FC<ScheduleCardProps> = ({ scheduleItem }) => {
  const { day, type, price, description, button, background, textColor } =
    scheduleItem;

  return (
    <aside
      className="border-4 border-[#1E1E1E] rounded-[25px] p-4"
      style={{
        backgroundColor: background,
      }}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mt-4 text-black">Day {day}</h1>
        <div
          className={`p-2 rounded-full w-fit border-2 border-black text-primary-body capitalize 
                     ${
                       type === "Private Network"
                         ? "bg-[#5CDB6D]"
                         : "bg-[#57CAFF]"
                     }`}
        >
          {type}
        </div>
      </div>
      <Image src={lanyard} alt="lanyard" className="w-full mt-4" />
      <h2
        className="font-bold text-4xl my-8"
        style={{
          color: textColor,
          textShadow: "1px 0 black, -1px 0 black, 0 1px black, 0 -1px black",
        }}
      >
        {price}
      </h2>
      <p className="text-lg text-primary-body">{description}</p>
      <Button
        as="a"
        href={button.link}
        borderRadius={50}
        px={8}
        py={8}
        className={`!text-white hover:opacity-80 mt-4 flex items-center gap-2 ${
          button.text === "Buy Ticket" ? "!bg-[#EA4335]" : "!bg-[#136FDE]"
        }`}
      >
        {button.text} <BsArrowUpRight />
      </Button>
    </aside>
  );
};

export default ScheduleCard;
