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
      <WobbleCard containerClassName="h-full mb-4 bg-[#10172A] min-h-[300px] lg:min-h-[300px]">
        <div className="max-w-5xl">
          <div className="flex items-center">
            <Image
              src={experience.logo}
              width={experience.logoWidth}
              height={experience.logoHeight}
              alt="logo"
              className="rounded-sm"
            />
            <div className="ml-2 text-xl md:text-2xl lg:text-3xl text-white font-semibold tracking-[-0.015em]">
              {experience.title}
              <span className="ml-1 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
                {experience.company}
              </span>
            </div>
          </div>
          <div className="mt-3 ml-1">{experience.dateRange}</div>
          <ul className="text-slate-400 text-sm md:text-base lg:text-md">
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

// Define experience data
const experiences = [
  {
    logo: '/sindy_logo.png',
    logoWidth: 40,
    logoHeight: 40,
    title: 'Software Engineer Intern at ',
    company: 'Sindy.ai',
    url: 'https://sindy.ai/',
    dateRange: 'Apr 2024 - July 2024',
    highlights: [
      'Contributed to building a full-stack application using Next.js, Typescript, Tailwind, Python Fast API, Shadcn and PostgreSQL.',
      'Built a Retrieval-Augmented Generation (RAG) Chatbot using LangChain and Socket.io.',
      'Deployed multiple docker containers application to AWS ECS Fargate and automated CI/CD workflow using GitHub Actions.',
      "Built Sign-in and Sign-up pages using Clerk and assign user roles (admin and normal user) to user accounts using Clerk's API.",
      'Created automated email templates using React Email and send automated email using Resend.',
      'Built backend API endpoints for PostgreSQL CRUD operations using Python Fast API.',
      'Wrote end-to-end testing scripts using Playwright and Cypress and performed website load testing using Artillery.',
    ],
  },
  {
    logo: '/webby_logo.jpeg',
    logoWidth: 37,
    logoHeight: 37,
    title: 'Frontend Engineer Intern at ',
    company: 'Webby Group',
    url: 'https://www.webbygroup.com/',
    dateRange: 'Dec 2022 - Feb 2023',
    highlights: [
      'Contributed to building a full-stack application using Typescript, React.js, Redux Toolkit, Material UI, MongoDB and Node.js.',
      'Designed and built MongoDB Database. Created GraphQL Schema to interact with MongoDB Database.',
      'Built backend API endpoints using Express.js and Node.js.',
      'Worked on website translation using i18next module.',
    ],
  },
  {
    logo: '/intel_logo.png',
    logoWidth: 50,
    logoHeight: 65,
    title: 'Process and Equipment Engineer at ',
    company: 'Intel Corporation',
    url: 'https://www.intel.com/content/www/us/en/homepage.html',
    dateRange: 'Mar 2020 - Sep 2021',
    highlights: [
      'Created a Visual C#.NET software to track equipment parts changed.',
      'Automated equipment log file analysis using Python and send automated reporting emails using Python.',
      'Coached technicians to troubleshoot and fix Intel CPU manufacturing equipment.',
      'Implemented product quality control and preventive measures to ensure high product reliability.',
    ],
  },
  {
    logo: '/advanced_energy_logo.png',
    logoWidth: 37,
    logoHeight: 37,
    title: 'Process Engineer at ',
    company: 'Advanced Energy Industries',
    url: 'https://www.advancedenergy.com/en-us/',
    dateRange: 'Nov 2018 - Jan 2019 & Nov 2017 - Jan 2018',
    highlights: [
      'Created a Visual C#.NET software to track equipment parts changed.',
      'Automated equipment log file analysis using Python and send automated reporting emails using Python.',
      'Coached technicians to troubleshoot and fix Intel CPU manufacturing equipment.',
      'Implemented product quality control and preventive measures to ensure high product reliability.',
    ],
  },
];

export default Experience;
