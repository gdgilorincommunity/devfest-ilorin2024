import React from "react";
import ScheduleCard from "./ScheduleCard";
import SectionTitle from "../section-title";
import { ctaLinks } from "@/data";

const schedule = [
  // {
  //   day: 1,
  //   type: "Workshop",
  //   price: "Free",
  //   description: "Full day of workshop in web, mobile, cloud, Design",
  //   button: {
  //     text: "Register Now",
  //     link: ctaLinks.workshop.link,
  //   },
  //   background: "#F8D8D8",
  //   textColor: "#FF7DAF",
  // },
  {
    day: 2,
    type: "Private Network",
    price: "₦15,000",
    description: "Full day of workshop in web, mobile, cloud, Design",
    button: {
      text: "Buy Ticket",
      link: ctaLinks.ticket.link,
    },
    background: "#FFE7A5",
    textColor: "#FFD427",
  },
  {
    day: 3,
    type: "Conference",
    price: "Free",
    description: "Full day of conference in web, mobile, cloud, Design",
    button: {
      text: "Register Now",
      link: ctaLinks.register.link,
    },
    background: "#C3ECF6",
    textColor: "#57CAFF",
  },
];

const Schedule: React.FC = () => {
  return (
    <section className="bg-[#F0F0F0] py-10 lg:py-20">
      <div className="px-4 lg:px-20 container mx-auto">
        <SectionTitle title="Schedule" size="lg" />

        <div className="mt-10">
          <div className="grid lg:grid-cols-2 gap-10">
            {schedule.map((item) => (
              <ScheduleCard key={item.day} scheduleItem={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
