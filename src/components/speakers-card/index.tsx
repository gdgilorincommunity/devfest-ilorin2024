import React from "react";
import lanyard from "@public/icons/lanyard-white-bg.svg";
import Image, { StaticImageData } from "next/image";

type SpeakersCardProps = {
  image: StaticImageData;
  name: string;
  role: string;
  day: string;
};

const SpeakersCard: React.FC<SpeakersCardProps> = ({
  image,
  name,
  role,
  day,
}) => {
  return (
    <aside className="border-4 border-black bg-black rounded-xl relative overflow-hidden">
      <div
        className={`p-2 px-4 rounded-full w-fit absolute border-2 border-black top-2 left-2 text-primary-body capitalize ${
          day === "workshop"
            ? "bg-[#5CDB6D]"
            : day === "panelist"
            ? "bg-[#FFE7A5]"
            : "bg-[#57CAFF]"
        }`}
      >
        {day}
      </div>
      <Image src={image} alt={name} className="lg:w-[500px] rounded-t-lg" />

      <div className="p-4 bg-white rounded-b-xl h-full overflow-hidden">
        <div className="flex items-center justify-between">
          <p className="text-button opacity-50 uppercase">SPEAKER</p>
          <Image src={lanyard} alt="lanyard" className="w-[70%]" />
        </div>

        <h2 className="text-[1.6rem] font-bold mt-4 text-black">{name}</h2>
        <p className="font-light text-[14px]">{role}</p>
      </div>
    </aside>
  );
};

export default SpeakersCard;
