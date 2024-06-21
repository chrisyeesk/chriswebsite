'use client';
import Image from 'next/image';
import React from 'react';
import { WobbleCard } from '@/components/ui/wobble-car-two';

export function Projects() {
  return (
    <>
      <div
        className={`px-4 sm:px-20 md:px-40 flex justify-center lg:relative xl:justify-start font-bold mt-20 text-3xl md:text-5xl mb-5`}
      >
        Projects
      </div>
      <div className="grid px-4 lg:px-0 grid-cols-1 lg:grid-cols-3 gap-4 lg:max-w-[1120px] mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-[#10172A]  min-h-[500px] md:min-h-[400px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Chris' AI Assistant
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              An AI chatbot built using Retrieval-Augmented-Generation (RAG)
              concept. It allows people to ask questions about Chris' skills,
              work experience and educational background. The AI chatbot is
              built using Next.js, Typescript, LangChain, OpenAI api, Shadcn and
              deployed to AWS EC2 using nginx.
            </p>
          </div>
          <Image
            src="/chatbot.png"
            width={500}
            height={700}
            alt="linear demo image"
            className="absolute -right-14 md:-right-[17%] lg:-right-[15x%] md:-bottom-32 grayscale filter mt-3 lg:-bottom-24 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="bg-[#10172A] col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Multiple-user Shared Whiteboard Desktop Application
          </h2>
          <p className="mt-4 max-w-[26rem] text-left sm:max-w-[30rem] text-base/6 text-neutral-200">
            Designed and built a whiteboard desktop app using Java where users
            can collaboratively draw, insert shapes, erase objects etc. This
            project is an assignment of the subject COMP90015 Distributed
            Systems of my Master of IT Course at University of Melbourne.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#10172A]  min-h-[500px] md:min-h-[400px] lg:min-h-[300px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Final Year Software Project
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Designed and built a full-stack application for a Basketball Team
              in Australia using React.js, Redux Toolkit, Express.js, Bootstrap
              and MongoDB. Deployed the full-stack application to AWS EC2 and
              set up GitHub CI/CD workflow. Set up Firebase and MongoDB. Wrote
              testing scripts using React Testing Library and Jest. Designed
              website UI using Figma. Adopted Scrum Methodology.
            </p>
          </div>
          <Image
            src="/basketball.png"
            width={700}
            height={500}
            alt="linear demo image"
            className="absolute mt-3 sm:-right-20 -right-14 md:-right-[47%] lg:-right-[10%] md:-bottom-44 lg:-bottom-40 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </>
  );
}
