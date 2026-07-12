import React from "react";
import devfestFrame from "@public/devfest-lanyard.png";
import Image from "next/image";

type SectionTitleProps = {
  title: string;
  size?: "lg";
  smallFrameSize?: boolean;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  size,
  smallFrameSize,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
      <h1
        className={`font-semibold ${
          size === "lg" ? "text-2xl lg:text-4xl" : "text-2xl"
        }`}
      >
        {title}
      </h1>
      <Image
        src={devfestFrame}
        alt="devfest-frame"
        className={smallFrameSize ? "lg:w-[60%]" : "lg:w-[80%]"}
      />
    </div>
  );
};
export default SectionTitle;
