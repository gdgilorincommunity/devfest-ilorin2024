import React from "react";
import SectionTitle from "@/components/2024/section-title";
import { InfiniteMovingCards } from "@/components/2024/infinite-moving-cards";
import { communityPartners } from "@/data/2024";

const CommunityPartners = () => {
  return (
    <section className="bg-[#FFD427] py-10 lg:py-20">
      <div className="px-4 lg:px-20 container mx-auto">
        <SectionTitle title="Community Partners" />
      </div>

      <div className="mt-10 flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={communityPartners}
          direction="right"
          speed="fast"
          custom
        />
      </div>
    </section>
  );
};

export default CommunityPartners;
