// components/ConfettiContainer.tsx
import { motion } from "framer-motion";
import Confetti from "./Confetti";
import { StaticImageData } from "next/image";
// row 1
import ArrowFunctionImg from "@public/2024/confetti/arrow-function.svg";
import BracketImg from "@public/2024/confetti/bracket.svg";
import OpenCurlyBraceImg from "@public/2024/confetti/open-curlybrace.svg";
import CloseCurlyBraceImg from "@public/2024/confetti/close-curlybrace.svg";
import CommentImg from "@public/2024/confetti/comment.svg";
import SemiColonImg from "@public/2024/confetti/semicolon.svg";
// row 2
import MultiplyImg from "@public/2024/confetti/multiply.svg";
import SpeadImg from "@public/2024/confetti/spread-operator.svg";
import EqualsImg from "@public/2024/confetti/equals.svg";
import DotImg from "@public/2024/confetti/dot.svg";
import SquareBracketImg from "@public/2024/confetti/square-bracket.svg";

import HourGlassImg from "@public/2024/confetti/hour-glass.svg";
import OpenQuoteImg from "@public/2024/confetti/open-quoute.svg";
import ClosingQuoteImg from "@public/2024/confetti/closing-quote.svg";
import ColonImg from "@public/2024/confetti/colon.svg";
import GreatherThanImg from "@public/2024/confetti/greather-than.svg";
import LessThanImg from "@public/2024/confetti/less-than.svg";
import OpenBracketImg from "@public/2024/confetti/open-bracket.svg";
import PlusImg from "@public/2024/confetti/plus.svg";
import { useEffect, useState } from "react";

const defaultSize = 120;

type ConfettiImg = {
  src: string | StaticImageData;
  delay: number;
  width?: number;
  height?: number;
  top?: number;
  left?: number;
};

// top: -50, left: 250,
const initialConfettiItems = {
  row1: [
    { src: ArrowFunctionImg, delay: 0.1 },
    { src: BracketImg, delay: 0.3 },
    { src: OpenCurlyBraceImg, delay: 0.5 },
    { src: CloseCurlyBraceImg, delay: 0.7 },
    { src: CommentImg, delay: 0.9 },
    { src: SemiColonImg, delay: 1.1 },
    { src: SpeadImg, delay: 1.5 },
    { src: SquareBracketImg, delay: 0.1 },
  ],
  row2: [
    { src: EqualsImg, delay: 1.7 },
    { src: DotImg, delay: 1.9, width: 32, height: 32 },
    { src: MultiplyImg, delay: 1.3 },
    { src: HourGlassImg, delay: 0.3, width: 200, height: 200 },
    { src: OpenQuoteImg, delay: 0.5, width: 90, height: 90 },
    { src: ColonImg, delay: 0.9 },
    { src: GreatherThanImg, delay: 1.1 },
    { src: LessThanImg, delay: 1.3 },
    { src: OpenBracketImg, delay: 1.5 },
    { src: PlusImg, delay: 1.7 },
    { src: ClosingQuoteImg, delay: 0.7, width: 75, height: 75 },
  ],
};

const ConfettiContainer = (): JSX.Element => {
  const [confettiItems, setConfettiItems] =
    useState<Record<string, ConfettiImg[]>>(initialConfettiItems);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 3.5,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        const row1 = initialConfettiItems.row1.map((item) => ({
          ...item,
          width: 48,
          height: 48,
          top: 0,
          left: 0,
        }));
        const row2 = initialConfettiItems.row2.map((item) => ({
          ...item,
          width: 48,
          height: 48,
          top: 0,
          left: 0,
        }));
        const updatedItems = { row1, row2 };
        setConfettiItems(updatedItems);
      } else {
        setConfettiItems(initialConfettiItems);
      }
    };

    window.addEventListener("resize", handleResize);

    // Run on initial load
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.div
      className="confetti relative lg:min-h-[300px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="lg:max-w-[1200px] mx-auto flex flex-row flex-wrap justify-center items-center relative w-full">
        {confettiItems.row1.map((item, index) => (
          <Confetti
            key={index}
            src={item.src}
            delay={item.delay}
            width={item.width ?? defaultSize}
            height={item.height ?? defaultSize}
            top={item?.top ?? -10}
            left={item?.left ?? -10}
          />
        ))}
      </div>
      <div className="mx-auto flex flex-row flex-wrap justify-center items-center relative w-full -top-10">
        {confettiItems.row2.map((item, index) => (
          <Confetti
            key={index}
            src={item.src}
            delay={item.delay}
            width={item.width ?? defaultSize}
            height={item.height ?? defaultSize}
            top={item?.top ?? -10}
            left={item?.left ?? -10}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ConfettiContainer;
