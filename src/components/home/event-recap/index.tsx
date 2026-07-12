import React from "react";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import SectionTitle from "@/components/section-title";
import { eventRecapShots } from "@/data";

export default function EventRecap() {
  return (
    <section className="bg-devfest-markee py-10 space-y-10">
      <div className="px-4 lg:px-20 container mx-auto">
        <SectionTitle title="Previous Devfest Recaps:" />
      </div>

      <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={eventRecapShots}
          direction="right"
          speed="fast"
          width80
        />
      </div>
    </section>
  );
}
