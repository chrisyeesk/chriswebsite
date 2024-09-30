'use client';

import { useRef } from 'react';
import React from 'react';
import Image from 'next/image';
import { WobbleCard } from '@/components/ui/wobble-card';
import { LinkPreview } from '@/components/ui/link-preview';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience = ({
  experience,
  index,
}: {
  experience: any;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollYProgress = useScroll({ target: ref, offset: ['0 1', '1.33 1'] });
  const scaleProgress = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    [0.7, 1]
  );
  const opacityProgress = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    [0.8, 1]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <WobbleCard containerClassName="items-center h-full mb-4 bg-[#10172A] min-h-[300px] 2xl:min-h-[400px] lg:min-h-[300px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <div className="2xl:mb-4 mb-4 mt-2 md:text-2xl 2xl:text-3xl lg:text-3xl text-xl text-white font-semibold">
              {experience.title}
            </div>
            <div className="2xl:mb-1 flex items-center">
              <Image
                src={experience.logo}
                width={experience.logoWidth}
                height={experience.logoHeight}
                alt="logo"
                className="mr-3 2xl:mr-5 shadow-2xl rounded-sm 2xl:w-10"
              />
              <div className="md:text-2xl 2xl:text-2xl lg:text-3xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
                {experience.company}
              </div>
            </div>
          </div>
          <div className="2xl:text-2xl mb-5 2xl:mb-10 mt-3 ml-1">
            {experience.dateRange}
          </div>
          <ul className="2xl:text-xl lg:max-w-[1150px] text-slate-400 text-sm md:text-base lg:text-md">
            {experience.highlights.map((highlight: any, idx: number) => (
              <li key={idx} className="">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </WobbleCard>
    </motion.div>
  );
};

export default Experience;
