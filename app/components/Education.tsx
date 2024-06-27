'use client';
import React from 'react';
import Image from 'next/image';
import { LinkPreview } from '@/components/ui/link-preview';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useSectionInView } from '@/lib/hooks';
import Title from './Title';

export const Education = () => {
  const { ref } = useSectionInView('Education');
  const refScroll = useRef<HTMLDivElement>(null);

  const scrollYProgress = useScroll({
    target: refScroll,
    offset: ['0 1', '1.1 1'],
  });
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
    <>
      <div className="mb-20" ref={ref}>
        <motion.div
          ref={refScroll}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          id="education"
        >
          <Title name="Education" />
          <section className=" mb-5 px-4 xl:px-40 lg:flex">
            <div className="lg:ml-20 2xl:mx-auto grid grid-cols-7 items-center lg:flex">
              <div className="col-span-2 flex justify-end mr-3">
                <Image
                  width={150}
                  height={150}
                  alt="university of melbourne logo"
                  src="./unimelblogo.svg"
                  className="w-20 sm:w-28 2xl:w-56"
                />
              </div>
              <div className="2xl:mr-40 col-span-5">
                <div className="text-xl 2xl:text-3xl sm:text-2xl">
                  <LinkPreview
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    url="https://www.unimelb.edu.au/"
                  >
                    University of Melbourne
                  </LinkPreview>
                  <div className="2xl:mt-2">Master of Information Technology</div>
                </div>
              </div>
              <div className="col-span-2 lg:ml-6 flex justify-end mr-6 mt-1">
                <Image
                  width={110}
                  height={110}
                  alt="monash logo"
                  src="/monash.png"
                  className="w-14 sm:w-20 2xl:w-40"
                />
              </div>
              <div className="col-span-5 2xl:text-3xl text-xl sm:text-2xl">
                <LinkPreview
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                  url="https://www.monash.edu/"
                >
                  Monash University
                </LinkPreview>
                <div className="2xl:mt-2">Bachelor of Mechanical Engineering (Honours)</div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};
