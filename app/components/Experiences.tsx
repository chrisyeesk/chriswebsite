'use client';

import React from 'react';
import Experience from './Experience';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useSectionInView } from '@/lib/hooks';
import Title from './Title';

const Experiences = () => {
  const { ref } = useSectionInView('Experience');
  const refScroll = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScroll({
    target: refScroll,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    [0.93, 1]
  );
  const opacityProgress = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    [0.8, 1]
  );
  return (
    <>
      <div className="scroll-mt-5" id="experience" ref={ref}>
        <motion.div
          ref={refScroll}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
        >
          <Title name="Experience"/>
        </motion.div>
        <div className="px-4 sm:px-20 md:px-4 xl:px-40" id="experience">
          <div className="max-w-6xl mx-auto text-slate-300 font-bold">
            {experiences.map((experience, index) => (
              <Experience key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
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
      '• Contributed to building a full-stack application using Next.js, Typescript, Tailwind, Python Fast API, Shadcn and PostgreSQL.',
      '• Built a Retrieval-Augmented Generation (RAG) Chatbot using LangChain and Socket.io.',
      '• Deployed multiple docker containers application to AWS ECS Fargate and automated CI/CD workflow using GitHub Actions.',
      "• Built Sign-in and Sign-up pages using Clerk and assign user roles (admin and normal user) to user accounts using Clerk's API.",
      '• Created automated email templates using React Email and send automated email using Resend.',
      '• Built backend API endpoints for PostgreSQL CRUD operations using Python Fast API.',
      '• Wrote end-to-end testing scripts using Playwright and Cypress and performed website load testing using Artillery.',
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
      '• Contributed to building a full-stack application using Typescript, React.js, Redux Toolkit, Material UI, MongoDB and Node.js.',
      '• Designed and built MongoDB Database. Created GraphQL Schema to interact with MongoDB Database.',
      '• Built backend API endpoints using Express.js and Node.js.',
      '• Worked on website translation using i18next module.',
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
      '• Created a Visual C#.NET software to track equipment parts changed.',
      '• Automated equipment log file analysis using Python and send automated reporting emails using Python.',
      '• Coached technicians to troubleshoot and fix Intel CPU manufacturing equipment.',
      '• Implemented product quality control and preventive measures to ensure high product reliability.',
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
      '• Created a Visual C#.NET software to track equipment parts changed.',
      '• Automated equipment log file analysis using Python and send automated reporting emails using Python.',
      '• Coached technicians to troubleshoot and fix Intel CPU manufacturing equipment.',
      '• Implemented product quality control and preventive measures to ensure high product reliability.',
    ],
  },
];

export default Experiences;
