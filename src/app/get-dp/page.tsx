"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import DpForm from "@/components/dp/dp-form";
import DpCanvas from "@/components/dp/dp-canvas";
import DateAndLocation from "@/components/date-and-location";
import blueImage from "@public/dp/blue.jpg";
import yellowImage from "@public/dp/yellow.jpg";
import redImage from "@public/dp/red.jpg";
import greenImage from "@public/dp/green.jpg";

const colors = [
  { name: "Blue", value: "blue", image: blueImage.src },
  { name: "Yellow", value: "yellow", image: yellowImage.src },
  { name: "Red", value: "red", image: redImage.src },
  { name: "Green", value: "green", image: greenImage.src },
];

export default function GetDpPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const generate = useCallback(() => {
    if (canvasRef.current && selectedColor) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const containerWidth = canvas.clientWidth;
        const dpr = window.devicePixelRatio || 1;

        const width = containerWidth;
        const height = width;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);

        ctx.clearRect(0, 0, width, height);

        const backgroundImage = new Image();
        backgroundImage.src =
          colors.find((color) => color.value === selectedColor)?.image || "";

        backgroundImage.onload = () => {
          ctx.drawImage(backgroundImage, 0, 0, width, height);

          if (profilePicture) {
            const profileImage = new Image();
            profileImage.src = profilePicture;

            profileImage.onload = () => {
              const profilePicX = width * 0.11;
              const profilePicY = height * 0.256;

              const profilePicWidth = width * 0.37;
              const profilePicHeight = height * 0.365;

              const imgWidth = profileImage.width;
              const imgHeight = profileImage.height;

              const scale = Math.max(
                profilePicWidth / imgWidth,
                profilePicHeight / imgHeight
              );
              const scaledWidth = imgWidth * scale;
              const scaledHeight = imgHeight * scale;

              const x = profilePicX + (profilePicWidth - scaledWidth) / 2;
              const y = profilePicY + (profilePicHeight - scaledHeight) / 2;

              const cornerRadius =
                Math.min(profilePicWidth, profilePicHeight) * 0.07;

              ctx.save();
              ctx.beginPath();
              ctx.moveTo(x + cornerRadius, y);
              ctx.lineTo(x + scaledWidth - cornerRadius, y);
              ctx.arc(
                x + scaledWidth - cornerRadius,
                y + cornerRadius,
                cornerRadius,
                -Math.PI / 2,
                0
              );
              ctx.lineTo(x + scaledWidth, y + scaledHeight - cornerRadius);
              ctx.arc(
                x + scaledWidth - cornerRadius,
                y + scaledHeight - cornerRadius,
                cornerRadius,
                0,
                Math.PI / 2
              );
              ctx.lineTo(x + cornerRadius, y + scaledHeight);
              ctx.arc(
                x + cornerRadius,
                y + scaledHeight - cornerRadius,
                cornerRadius,
                Math.PI / 2,
                Math.PI
              );
              ctx.lineTo(x, y + cornerRadius);
              ctx.arc(
                x + cornerRadius,
                y + cornerRadius,
                cornerRadius,
                Math.PI,
                -Math.PI / 2
              );
              ctx.closePath();
              ctx.clip();
              ctx.drawImage(profileImage, x, y, scaledWidth, scaledHeight);
              ctx.restore();
            };
          }

          const textX = width / 3.4;
          const textY = height * 0.75;

          ctx.font = `${Math.floor(width * 0.05)}px Google Sans`;
          ctx.fillStyle = "black";
          ctx.textAlign = "center";
          ctx.fillText(name, textX, textY);
        };
      }
    }
  }, [name, profilePicture, selectedColor]);

  useEffect(() => {
    generate();

    const handleResize = () => {
      generate();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [generate]);

  return (
    <div className="px-4 lg:px-20 container mx-auto">
      <section className="lg:w-[1100px] mx-auto pt-10">
        <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900">
          Show demmm!🥳
        </h1>
        <p className="text-wrap text-center text-[18px] text-primary-gray font-bold lg:w-[900px] mx-auto">
          Generate and share your unique Devfest Ilorin 2024 DP
        </p>
        <DateAndLocation />
      </section>

      <section className="py-10 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <DpForm
            name={name}
            setName={setName}
            setProfilePicture={setProfilePicture}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            colors={colors}
          />

          <div className="flex justify-center lg:justify-end">
            <DpCanvas
              name={name}
              profilePicture={profilePicture}
              canvasRef={canvasRef}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
