"use client";

import Image from "next/image";
import EventRecap from "../home/event-recap";
import ThankYouHomeHero from "../home/thank-you-home-hero";
import SpeakerSection from "../home/speaker-section";
import SectionTitle from "../section-title";
import { partners, sponsors } from "@/data/2024";
import Link from "next/link";

export default function ThankYou2024() {
  return (
    <>
      <ThankYouHomeHero />
      <EventRecap />
      <SpeakerSection />

      <section className="bg-[#CCF6C5] py-10 lg:py-20">
        <div className="px-4 lg:px-20 container mx-auto">
          <SectionTitle
            title="Thank you to our sponsors and partners"
            smallFrameSize
            size="lg"
          />

          <div className="grid lg:grid-cols-4 gap-10 mt-10">
            {sponsors.slice(0, 4).map((sponsor, index) => (
              <Link
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="border-4 border-[#1E1E1E] p-4 rounded-xl flex items-center bg-[#F0F0F0]"
              >
                <Image src={sponsor.img} key={index} alt={`sponsor-${index}`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-6 mt-10">
            {partners.map((partner, index) => (
              <Image
                src={partner.src}
                key={index}
                alt={`sponsor-${index}`}
                className={
                  index === 5
                    ? "w-[50px] lg:w-[80px]"
                    : "w-[110px] lg:w-[180px]"
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
