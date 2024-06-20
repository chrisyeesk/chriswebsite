'use client';
import Image from 'next/image';
import React from 'react';
import { WobbleCard } from '@/components/ui/wobble-card';
import localFont from '@next/font/local';
const playwrite = localFont({ src: './font/playwrite.woff2' });
const sfpro = localFont({ src: './font/sf-pro.woff2' });

export function Experience() {
  return (
    <>
      <div
        className={`px-4 md:px-40 flex justify-center md:relative md:justify-start font-bold mt-20 text-3xl md:text-5xl mb-5`}
      >
        Work Experience
      </div>
      <div className="px-4 mx-auto max-w-6xl font-bold items-center w-full">
        <WobbleCard containerClassName="h-full mb-4 bg-slate-400 min-h-[300px] lg:min-h-[300px]">
          <div className="max-w-5xl">
            <div className="flex items-center">
              <Image
                src="/sindy_logo.png"
                width={40}
                height={40}
                alt="linear demo image"
              />
              <h2 className="ml-2 text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Software Engineer Intern at Sindy.ai
              </h2>
            </div>
            <div className="mt-3 ml-1">Apr 2024 - July 2024</div>
            <ul className="text-sm md:text-base lg:text-lg">
              <li className="mt-3">{`• Contributed to building a full-stack application using Next.js,
              Typescript, Tailwind, Python Fast API, Shadcn and PostgreSQL`}</li>
              <li>{`• Built a Retrieval-Augmented Generation (RAG) Chatbot using LangChain and Socket.io.`}</li>
              <li>{`• Deployed multiple docker containers application to AWS ECS Fargate and automated CI/CD workflow using GitHub Actions.`}</li>
              <li>{`•	Built Sign-in and Sign-up pages using Clerk and assign user roles (admin and normal user) to user accounts using Clerk's API.`}</li>
              <li>{`•	Created automated email templates using React Email and send automated email using Resend.`}</li>
              <li>{`•	Built backend API endpoints for PostgreSQL CRUD operations using Python Fast API.`}</li>
              <li>{`•	Wrote end-to-end testing scripts using Playwright and Cypress and performed website load testing using Artillery.`}</li>
            </ul>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="h-full mb-4 bg-slate-400 min-h-[300px] lg:min-h-[300px]">
          <div className="max-w-5xl">
            <div className="flex items-center">
              <Image
                src="/webby_logo.jpeg"
                width={37}
                height={37}
                alt="linear demo image"
                className="rounded-sm"
              />
              <h2 className="ml-2 text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Frontend Engineer Intern at Webby Group
              </h2>
            </div>
            <div className="mt-3 ml-1">Dec 2022 - Feb 2023</div>{' '}
            <ul className="text-sm md:text-base lg:text-lg">
              <li className="mt-3">{`• Contributed to building a full-stack application using Typescript, React.js, Redux Toolkit, Material UI, MongoDB and Node.js.`}</li>
              <li>{`• Designed and built MongoDB Database. Created GraphQL Schema to interact with MongoDB Database.`}</li>
              <li>{`•	Built backend API endpoints using Express.js and Node.js.`}</li>
              <li>{`•	Worked on website translation using i18next module.`}</li>
            </ul>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="h-full mb-4 bg-slate-400 min-h-[300px] lg:min-h-[300px]">
          <div className="max-w-5xl">
            <div className="flex items-center">
              <Image
                src="/intel_logo.png"
                width={50}
                height={65}
                alt="linear demo image"
                className="rounded-sm"
              />
              <h2 className="ml-2 text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Process and Equipment Engineer at Intel Corporation
              </h2>
            </div>
            <div className="mt-3 ml-1">Mar 2020 - Sep 2021</div>
            <ul className="text-sm md:text-base lg:text-lg">
              <li className="mt-3">{`• Created a Visual C#.NET software to track equipment parts changed.`}</li>
              <li>{`• Automated equipment log file analysis using Python and send automated reporting emails using Python.`}</li>
              <li>{`•	Coached technicians to troubleshoot and fix Intel CPU manufacturing equipment.`}</li>
              <li>{`•	Implement product quality control and preventive measures to ensure high product reliability.`}</li>
            </ul>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="h-full mb-4 bg-slate-400 min-h-[300px] lg:min-h-[300px]">
          <div className="max-w-5xl">
            <div className="flex items-center">
              <Image
                src="/advanced_energy_logo.png"
                width={40}
                height={40}
                alt="linear demo image"
                className="rounded-sm"
              />
              <h2 className="ml-2 text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Process Engineer at Advanced Energy
              </h2>
            </div>
            <div className="mt-3 ml-1">
              Nov 2018 - Jan 2019 & Nov 2017 - Jan 2018
            </div>
            <ul className="text-sm md:text-base lg:text-lg">
              <li className="mt-3">{`• Created a Visual C#.NET software to track equipment parts changed.`}</li>
              <li>{`• Automated equipment log file analysis using Python and send automated reporting emails using Python.`}</li>
              <li>{`•	Coached technicians to troubleshoot and fix Intel CPU manufacturing equipment.`}</li>
              <li>{`•	Implement product quality control and preventive measures to ensure high product reliability.`}</li>
            </ul>
          </div>
        </WobbleCard>
      </div>
    </>
  );
}
