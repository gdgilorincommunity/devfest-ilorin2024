import { motion } from 'framer-motion'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image'
import React from 'react'

interface ConfettiProps {
    src: string | StaticImageData;
    delay: number;
    width?: number;
    height?: number;
    top: number;
    left: number;
}

export default function Confetti({ src, delay, top, left, width = 48, height = 48, }: ConfettiProps) {
  return (
      <motion.div
          className={`relative`}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            top,
            left,
          }}
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1, rotate: [90, 45, 0] }}
          transition={{
              type: 'spring',
              stiffness: 80,
              damping: 10,
              duration: 2,
              ease: 'easeOut',
              delay,
          }}
      >
          <Image
              src={src}
              alt={""}
              width={width}
              height={height}
              className="w-auto h-full"
          />
      </motion.div>
  )
}
