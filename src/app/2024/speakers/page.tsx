"use client";

import { ctaLinks, speakers } from "@/data/2024";
import DateAndLocation from "@/components/2024/date-and-location";
import SpeakersCard from "@/components/2024/speakers-card";

import devfestFrame from "@public/devfest-lanyard.png";
// import lanyard from "@public/icons/lanyard-white-bg.svg";
// import plus from "@public/plus.png";

import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

export default function SpeakersPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Conference", "Workshop", "Panelist"];

  const filteredSpeakers = speakers.filter((speaker) => {
    if (selectedCategory === "All") return true;
    return speaker.day.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="px-4 lg:px-20 container mx-auto">
      <section className="lg:w-[1100px] mx-auto pt-10">
        <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900">
          Our Speakers
        </h1>

        <p className="text-wrap text-center text-[18px] text-primary-gray font-bold lg:w-[900px] mx-auto">
          Join us at DevFest Ilorin 2024 from October 17 to 19 for 3 days of
          inspiring talks, interactive workshops, and unparalleled networking
          opportunities.{" "}
        </p>

        <DateAndLocation />
      </section>

      <section className="py-10 lg:py-20">
        <div className="flex flex-wrap gap-4 justify-center pt-6 pb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`p-2 px-4 rounded-full ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-[#CACACA] text-[#1E1E1E] hover:opacity-80"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {filteredSpeakers.length > 0 ? (
            filteredSpeakers.map((speaker, index) => (
              <SpeakersCard {...speaker} key={index} />
            ))
          ) : (
            <p className="text-center col-span-3">No speakers found.</p>
          )}

          {/* <aside className="border-4 border-black rounded-xl relative bg-white">
            <div className="bg-[#57CAFF] p-2 rounded-full w-[70px] text-center absolute border-2 border-black top-2 left-2 text-primary-body">
              and
            </div>

            <div className="flex items-center justify-center py-20 h-[195px]">
              <Image src={plus} alt="plus" className="w-[80px]" />
            </div>

            <div className="border-b-4 border-black"></div>

            <div className="p-4 bg-white overflow-hidden rounded-b-xl my-2">
              <div className="flex items-center justify-center">
                <Image src={lanyard} alt="lanyard" className="w-[70%]" />
              </div>

              <h2 className="text-3xl text-center font-bold mt-4 text-black">
                You
              </h2>

              <div className="flex justify-center mt-4">
                <Button
                  as={Link}
                  href={ctaLinks.speak.link}
                  target="_blank"
                  borderRadius={50}
                  py={8}
                  display={{ base: "none", lg: "flex" }}
                  className="!bg-primary-body !text-white hover:opacity-80 flex items-center gap-2"
                >
                  Apply to speak <BsArrowUpRight />
                </Button>
              </div>
            </div>
          </aside> */}
        </div>
      </section>

      <section className="">
        <Image src={devfestFrame} alt="devfest-frame" />
      </section>

      <div className="flex items-center justify-center gap-4 py-20">
        <Button
          as={Link}
          href={ctaLinks.register.link}
          target="_blank"
          borderRadius={50}
          py={8}
          className="!bg-[#33A852] !text-white hover:opacity-80 flex items-center gap-2"
        >
          Register Now <BsArrowUpRight />
        </Button>

        <Button
          as={Link}
          href="/schedule"
          borderRadius={50}
          py={8}
          className="!bg-[#2763E9] !text-white hover:opacity-80 flex items-center gap-2"
        >
          View Agenda
          <BsArrowUpRight />
        </Button>
      </div>
    </div>
  );
}
