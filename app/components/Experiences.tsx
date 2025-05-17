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
      <div className="mb-20" ref={ref}>
        <motion.div
          ref={refScroll}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          className="scroll-mt-28"
        >
          <Title name="Experience" />
        </motion.div>
        <div className="px-4 sm:px-20 md:px-4 xl:px-40">
          <div className="max-w-[1500px] mx-auto text-slate-300 font-bold">
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
    logo: '/RACQ.png',
    logoWidth: 40,
    logoHeight: 40,
    title: 'Digital Full Stack Developer',
    company: 'RACQ',
    url: 'https://www.racq.com.au/',
    dateRange: 'Nov 2024 - present',
    highlights: [
      '• Tech Stack: Typescript, React.js, Vue.js, Tailwind, C#.NET, Sitecore, Docker, AWS, Azure.',
      '• Developed web applications for a leading insurance company in Australia.',
      '• Implement API rate limit through policy setting in Azure API Management.',
      '• Performed website debugging and error analysis using Azure Application Insights and AWS CloudWatch logs.',
      '• Bug fixes for RACQ website.',
    ],
  },
  {
    logo: '/workingmouse_logo.jpeg',
    logoWidth: 40,
    logoHeight: 40,
    title: 'Full Stack Developer',
    company: 'Working Mouse',
    url: 'https://www.workingmouse.com.au/',
    dateRange: 'Nov 2024 - present',
    highlights: [
      '• Tech Stack: Typescript, React.js, Vue.js, C#.NET, Docker, AWS, Azure, GitLab.',
      '• Built the Property Acquisition and Disposal Record website for the Department of Transport and Main Roads (TMR).',
      '• In charge of building the frontend and backend of the website.',
      '• Deployment of the website to AWS ECS Fargate and setting up CI/CD on GitLab.',
      '• Worked on PDF, word and excel file report generation using Gembox.',
      '• Mastered the concept of platform engineering and model-driven engineering.'
    ],
  },
  {
    logo: '/slq.jpg',
    logoWidth: 40,
    logoHeight: 40,
    title: 'Web Development Officer',
    company: 'State Library of Queensland',
    url: 'https://www.slq.qld.gov.au/',
    dateRange: 'Apr 2024 - present',
    highlights: [
      '• Tech Stack: Next.js, Typescript, Tailwind, MUI, PHP, GraphQL, Drupal, MariaDB, Solr, Docker, Lando, GitLab, Jira.',
      '• In charge of building the Queensland Colonial Secretary Website in both frontend and backend.',
      '• Maintained and fixed bugs for Queensland Government websites.',
      '• Set up Tailwind and MUI themes.',
      "• Migrated old websites which uses MUI v4 to MUI v5.",
      '• Used Apache Solr to speed up search queries, create faceted search, pagination, sort query results, filter query results and advanced filtering using AND, OR and NOT logic gates.',
      '• Built backend API endpoints using PHP and debug the API endpoints using XDebug.',
      '• Configured Drupal pages and created/edited site content using Drupal.',
      '• Wrote a data migration script to migrate and reformat data using Drupal migrate API.',
      '• Improved Query Efficiency using TanStack Query.',
      '• Set up query parameters for keyword search, sorting, filtering and page number.',
      '• Mastered lando CLI commands such as lando config, composer install, drush uli, destroy, stop, update, logs, etc.',
      '• Set up and import fonts from Typography.com.',    ],
  },
  {
    logo: '/sindy_logo.png',
    logoWidth: 40,
    logoHeight: 40,
    title: 'Software Engineer Intern',
    company: 'Sindy Labs',
    url: 'https://sindy.ai/',
    dateRange: 'Jan 2024 - Mar 2024',
    highlights: [
      '• Tech Stack: Next.js, Typescript, Tailwind, Python Fast API, Shadcn, PostgreSQL, Docker, AWS ECS, GitHub, Notion.',
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
    title: 'Frontend Engineer Intern',
    company: 'Webby Group',
    url: 'https://www.webbygroup.com/',
    dateRange: 'Dec 2022 - Feb 2023',
    highlights: [
      '• Tech Stack: Typescript, React.js, Redux Toolkit, Material UI, MongoDB, GraphQL, Node.js, GitHub.',
      '• Contributed to building many frontend web pages for the company and took initiatives to build the backend APIs.',
      '• Designed and built MongoDB Database. Created GraphQL Schema to interact with MongoDB Database.',
      '• Built backend API endpoints using Express.js and Node.js.',
      '• Worked on website translation using i18next module.',
    ],
  },
  {
    logo: '/intel_logo.png',
    logoWidth: 50,
    logoHeight: 65,
    title: 'Process and Equipment Engineer',
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
    title: 'Process Engineer',
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
