import lanyard from "@public/icons/lanyard-white-bg.svg";
import Image, { StaticImageData } from "next/image";
import React from "react";

type TeamCardProps = {
  image: StaticImageData;
  name: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ image, name }) => {
  return (
    <aside className="border-4 border-black rounded-xl relative">
      <Image src={image} alt={name} className="rounded-t-lg w-full -mt-[1px]" />

      <div className="p-4 bg-white overflow-hidden rounded-b-xl">
        <div className="flex items-center justify-between">
          <Image src={lanyard} alt="lanyard" className="w-full" />
        </div>

        <h2 className="text-2xl font-bold mt-4 text-black text-center">
          {name}
        </h2>
      </div>
    </aside>
  );
};

export default TeamCard;
