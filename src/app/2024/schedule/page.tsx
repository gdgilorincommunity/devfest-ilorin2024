"use client";

import { useState } from "react";
import Conference from "@/components/2024/EventSchedule/Conference";
import PrivateNetwork from "@/components/2024/EventSchedule/PrivateNetwork";
import Workshop from "@/components/2024/EventSchedule/Workshop";
import SectionTitle from "@/components/2024/section-title";

export default function SchedulePage() {
  const [selectedCategory, setSelectedCategory] = useState("Day 1 (Workshop)");

  const categories = [
    "Day 1 (Workshop)",
    "Day 2 (Private Network)",
    "Day 3 (Conference Day)",
  ];

  const renderSchedule = () => {
    switch (selectedCategory) {
      case "Day 1 (Workshop)":
        return <Workshop />;
      case "Day 2 (Private Network)":
        return <PrivateNetwork />;
      case "Day 3 (Conference Day)":
        return <Conference />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="px-4 lg:px-20 container mx-auto">
        <section className="lg:w-[1100px] mx-auto pt-10">
          <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900">
            Event Schedule
          </h1>

          <p className="text-wrap text-center text-[18px] text-primary-gray font-bold lg:w-[900px] mx-auto">
            Join us at DevFest Ilorin 2024 from October 17 to 19 for 3 days of
            inspiring talks, interactive workshops, and unparalleled networking
            opportunities.
          </p>
        </section>
      </div>

      <section className="bg-[#F0F0F0] py-10 lg:py-20">
        <div className="px-4 lg:px-20 container mx-auto">
          <SectionTitle title="Schedule" size="lg" />

          <div className="flex flex-wrap gap-4 justify-center py-10">
            {categories.map((category) => (
              <button
                key={category}
                className={`p-3 px-4 rounded-full ${
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

          <div className="mt-10">{renderSchedule()}</div>
        </div>
      </section>
    </>
  );
}
