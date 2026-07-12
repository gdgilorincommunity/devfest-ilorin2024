import React from "react";
import DateAndLocation from "@/components/date-and-location";
import Image from "next/image";
import devfestFrame from "@public/devfest-lanyard.png";
import { team } from "@/data/team";
import TeamCard from "@/components/team-card";

export default function TeamPage() {
  return (
    <div className="px-4 lg:px-20 container mx-auto">
      <section className="lg:w-[1100px] mx-auto pt-10">
        <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900">
          Our Team
        </h1>

        <p className="text-wrap text-center text-[18px] text-primary-gray font-bold lg:w-[900px] mx-auto">
          Organisers and volunteers Dedicated. Innovative. Passionate. Discover
          the driving force behind Ilorin&apos;s largest tech event.
        </p>

        <DateAndLocation />
      </section>

      <section className="py-10 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {team.map((teamMember, index) => (
            <TeamCard {...teamMember} key={index} />
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-wrap text-center mb-4 text-3xl lg:text-5xl font-extrabold tracking-tight leading-none text-gray-900">
            And more
          </h3>
        </div>
      </section>

      <section className="pb-10 lg:pb-20">
        <Image src={devfestFrame} alt="devfest-frame" />
      </section>
    </div>
  );
}
