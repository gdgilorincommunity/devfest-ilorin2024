import React from "react";
import timeIcon from "@public/icons/time.svg";
import Image from "next/image";

type LongEventScheduleCardProps = {
  title: string;
  time: string;
  className: string;
};

export const LongEventScheduleCard: React.FC<LongEventScheduleCardProps> = ({
  title,
  time,
  className,
}) => {
  return (
    <aside className={className}>
      <div className="bg-white rounded-xl p-8 h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center font-bold text-[#1E1E1E]">
          {title}
        </h1>
        {time.trim() !== "" && (
          <p className="text-[#5D5D5D] font-light text-lg flex items-center gap-2 justify-center mt-4">
            <Image src={timeIcon} alt="time" className="w-[20px]" />{" "}
            <span>{time}</span>
          </p>
        )}
      </div>
    </aside>
  );
};

type ShortEventScheduleCardProps = {
  title: string;
  time: string;
  duration: string;
  session?: string;
  speaker: string;
  img?: any[] | any;
};

export const ShortEventScheduleCard: React.FC<ShortEventScheduleCardProps> = ({
  title,
  time,
  duration,
  session,
  speaker,
  img,
}) => {
  return (
    <aside className="bg-white rounded-xl p-4 h-full">
      <div className="grid lg:grid-cols-2 lg:gap-10">
        <h1
          className={`text-2xl font-bold ${
            session === "Engineering"
              ? "text-[#32A852]"
              : session === "Cybersecurity"
              ? "text-[#EA4435]"
              : session === "AI/ML"
              ? "text-[#F8AB19]"
              : "text-[#136FDE]"
          }`}
        >
          {session}
        </h1>

        <div>
          <p className="text-[#5D5D5D] font-light flex items-center gap-2 text-sm">
            <Image src={timeIcon} alt="time" className="w-[15px]" />{" "}
            <span className="font-medium">{time}</span>
          </p>

          <p className="text-sm text-[#999999] font-light">{duration}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-10 mt-6 lg:mt-2 text-[#5D5D5D]">
        <p className="mr-4">{title}</p>

        <div className="flex items-center gap-1 mt-2 lg:mt-0">
          {Array.isArray(img) ? (
            img.map((imageSrc, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt={speaker}
                className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9] object-cover"
              />
            ))
          ) : img ? (
            <Image
              src={img}
              alt={speaker}
              className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9] object-cover"
            />
          ) : (
            <div className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9]" />
          )}
          <p className="font-medium text-sm">{speaker}</p>
        </div>
      </div>
    </aside>
  );
};

type PanelEventScheduleCardProps = {
  title: string;
  time: string;
  duration: string;
  session: string;
  speakers: string[];
  imgs: any[];
};

export const PanelEventScheduleCard: React.FC<PanelEventScheduleCardProps> = ({
  title,
  time,
  duration,
  session,
  speakers,
  imgs,
}) => {
  return (
    <aside className="bg-white rounded-xl p-4 h-full">
      <div className="grid lg:grid-cols-2 lg:gap-10">
        <h1 className="text-2xl font-bold text-[#32A852]">{session}</h1>

        <div>
          <p className="text-[#5D5D5D] font-light flex items-center gap-2 text-sm">
            <Image src={timeIcon} alt="time" className="w-[15px]" />{" "}
            <span className="font-medium">{time}</span>
          </p>

          <p className="text-sm text-[#999999] font-light">{duration}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-10 mt-6 lg:mt-2 text-[#5D5D5D]">
        <p className="mr-4">{title}</p>

        <div className="flex flex-col mt-2 lg:mt-0">
          <div className="flex items-center gap-1">
            {imgs.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="speaker"
                className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9] object-cover"
              />
            ))}
          </div>

          <div className="flex gap-1 flex-wrap mt-2">
            {speakers.map((speaker, index) => (
              <p className="font-medium text-sm w-fit" key={index}>
                {speaker}
                {index < speakers.length - 1 && ", "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

type IntroductionEventScheduleCardProps = {
  title: string;
  time: string;
  className: string;
};

export const IntroductionEventScheduleCard: React.FC<
  IntroductionEventScheduleCardProps
> = ({ title, time, className }) => {
  return (
    <aside className={className}>
      <div className="bg-white rounded-xl p-4 h-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-[#136FDE]">{title}</h1>

        <div className="flex justify-center items-center gap-6 mt-4">
          <div className="flex items-center gap-1  mt-2 lg:mt-0">
            <div className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9]" />
            <p className="font-medium text-sm">Host</p>
          </div>

          {time.trim() !== "" && (
            <p className="text-[#5D5D5D] font-light flex items-center gap-2 justify-center">
              <Image src={timeIcon} alt="time" className="w-[15px]" />{" "}
              <span>{time}</span>
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};

type TrackEventScheduleCardProps = {
  title: string;
  className: string;
  bgColor: string;
};

export const TrackEventScheduleCard: React.FC<TrackEventScheduleCardProps> = ({
  title,
  className,
  bgColor,
}) => {
  return (
    <aside className={className}>
      <div
        className="rounded-xl p-8 h-full flex flex-col justify-center items-center"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <h1 className="text-3xl text-center font-bold text-white">{title}</h1>
      </div>
    </aside>
  );
};
