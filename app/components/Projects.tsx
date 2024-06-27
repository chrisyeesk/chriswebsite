'use client';
import Image from 'next/image';
import { useRef } from 'react';

import React from 'react';
import { WobbleCard } from '@/components/ui/wobble-car-two';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Title from './Title';
import { LinkPreview } from '@/components/ui/link-preview';

export function Projects() {
  const { ref } = useSectionInView('Projects');

  const refScroll = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScroll({
    target: refScroll,
    offset: ['0 1', '1.1 1'],
  });
  const scaleProgress = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    [0.8, 1]
  );
  const opacityProgress = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    [0.8, 1]
  );
  return (
    <>
      <div id="projects" ref={ref}>
        <motion.div
          ref={refScroll}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          id="projects"
          className="scroll-mt-28"
        >
          <Title name="Projects" />
          <div className="grid px-4 lg:px-4 grid-cols-1 lg:grid-cols-3 gap-4 2xl:max-w-[1500px] lg:max-w-[1120px] mx-auto w-full">
            <WobbleCard
              containerClassName="2xl:min-h-[700px] col-span-1 lg:col-span-2 h-full bg-[#10172A] min-h-[500px] md:min-h-[400px] lg:min-h-[300px]"
              className=""
            >
              <div className="2xl:p-10 max-w-xs 2xl:max-w-4xl">
                <h2 className="2xl:mb-10  text-left 2xl:text-3xl text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  <LinkPreview
                    url="http://chris-assistant.com"
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                  >
                    chris-assistant.com (AI Chatbot)
                  </LinkPreview>
                </h2>
                <p className="mt-4 text-left 2xl:text-xl text-base/6 text-neutral-200">
                  An AI chatbot built using Retrieval-Augmented-Generation (RAG)
                  concept. It allows people to ask questions about Chris&apos;
                  skills, work experience and educational background. The AI
                  chatbot is built using Next.js, Typescript, LangChain, OpenAI
                  api, Shadcn and deployed to AWS EC2 using nginx.
                </p>
              </div>
              <Image
                src="/chatbot.png"
                width={500}
                height={700}
                alt="linear demo image"
                className="absolute 2xl:w-[1000px] 2xl:-bottom-[450px]  -right-14 md:-right-[29%] lg:-right-[15x%] md:-bottom-32 grayscale filter mt-3 lg:-bottom-24 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="bg-[#10172A] col-span-1 min-h-[300px]">
              <div className="2xl:p-10">
                <h2 className="max-w-80 2xl:mb-10 2xl:text-3xl text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Multiple-user Shared Whiteboard Desktop Application
                </h2>
                <p className="mt-4 2xl:text-xl 2xl:max-w-3xl max-w-[26rem] text-left sm:max-w-[30rem] text-base/6 text-neutral-200">
                  Designed and built a whiteboard desktop app using Java where
                  users can collaboratively draw, insert shapes, erase objects
                  etc. This project is an assignment of the subject COMP90015
                  Distributed Systems of my Master of IT Course at University of
                  Melbourne.
                </p>
              </div>
            </WobbleCard>
            <WobbleCard containerClassName="2xl:min-h-[700px] col-span-1 lg:col-span-3 bg-[#10172A]  min-h-[500px] md:min-h-[400px] lg:min-h-[300px] xl:min-h-[300px]">
              <div className="2xl:p-10 2xl:max-w-4xl max-w-sm">
                <h2 className="2xl:mb-10 max-w-sm 2xl:text-3xl md:max-w-lg 2xl:max-w-4xl text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Final Year Software Project
                </h2>
                <p className="mt-4 2xl:text-xl max-w-[26rem] 2xl:w-[73rem] 2xl:max-w-[150rem] text-left  text-base/6 text-neutral-200">
                  Built a full-stack application for a Basketball Team in
                  Australia using React.js, Redux Toolkit, Express.js and
                  MongoDB. Deployed the application to AWS EC2 and set up GitHub
                  CI/CD. Set up Firebase and MongoDB. Wrote testing scripts
                  using React Testing Library and Jest. Designed website UI
                  using Figma. Adopted Scrum Methodology.
                </p>
              </div>
              <Image
                src="/basketball.png"
                width={700}
                height={500}
                alt="linear demo image"
                className="2xl:w-[1800px] 2xl:-bottom-[650px]  absolute mt-3 sm:-right-20 -right-14 md:-right-[56%] lg:-right-[15%] md:-bottom-44 lg:-bottom-40 object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>
        </motion.div>
        <div className="mt-20"></div>
      </div>
    </>
  );
}
