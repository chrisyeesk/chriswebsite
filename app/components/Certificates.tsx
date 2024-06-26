'use client';

import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Title from './Title';

const content = [
  {
    title: 'AWS Certified Developer - Associate',
    description:
      'I learnt how to deploy, manage, and operate scalable, highly available, and fault-tolerant systems on AWS. I gained hands-on experience with AWS services and tools, and learnt how to write code that optimizes AWS services.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/aws cd.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Coursera/AWS - AWS Cloud Practitioner Essentials',
    description:
      'Introduction to AWS and its services. Learnt about basic global infrastructure of AWS Cloud and networking. Briefly touched on AWS storage and database. Discussed about security, monitoring, analysis and pricing. Lastly, AWS migration and support were taught.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/aws coursera.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Coursera/IBM - Developing Back-End Apps with Node.js and Express',
    description:
      'I had hands-on on Express.js, Node.js and creating Restful APIs. I learnt about session-based Authentication and Authorisation using JWT token. CRUD Operations and Middleware were taught in the course. Async/await using Axios and Promises were taught.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Coursera Nodejs.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title:
      'Coursera/IBM - Introduction to Containers w/ Docker, Kubernetes & OpenShift',
    description:
      'I learnt to built cloud native applications using Docker and Kubernetes. I created docker image using docker file and pushed to IBM registry. I created and leveraged a YAML deployment file to configure and create resources such as pods, services, replicasets, etc. Autoscaling and rolling updates were taught in the course.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Coursera Kubernetes.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title:
      "Udemy - Next JS: The Complete Developer's Guide (by Stephen Grider)",
    description:
      'I learnt about file-based routing and Next file structure. I learn about Server actions, Next server/client components and static/dynamic routes in detail. Error handling was done using useFormState hook. Next Caching System: Request memorisation, Caching Dynamic Route were taught. Component Streaming using suspense and Next Skeleton were taught. The author taught Next Authentication using OAuth and auth helpers. SQLite database was set up using Prisma ORM. Form Validation was done using mod package.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Udemy Nextjs.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Codecademy - Learn Jquery Course',
    description:
      'I learnt about Jquery event handlers, effects and styling methods. Jquery was used to traverse the DOM.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Learn Jquery.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Codecademy - Learn React Testing',
    description:
      'Jquery: I learnt about matcher functions, testing async code and mocking functions. React Testing Library: I learnt about queries, mimic user events and accessibility.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Learn React Testing.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Codecademy - Learn React Native Course',
    description:
      'I learnt about how to debug react native application using Expo Go. I learnt about React Native Core Components, Styling and Navigation. Authentication using React Context was also taught in the course.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Learn React Native.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Codecademy - Learn Intermediate PHP Course',
    description:
      'PostgreSQL CRUD Operations were performed using PHP. I learnt how to display data from MySQL and PostgreSQL database in a HTML page. External APIs in PHP applications were used. I worked on PHP off-platform using the XAMPP package',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Learn Intermediate Php.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Codecademy - Learn PHP Skill Path',
    description:
      'I learnt about PHP language syntax and learnt how to incorporate PHP logic into a HTML document. I practiced handling HTML form input using PHP.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Learn PHP Certificate.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Certificate of Solidworks Associate (CSWA)',
    description:
      'I learnt how to model various types of mechanical components while preparing for this CSWA exam.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/CSWA Certificate.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'End of the list',
    description:
      'I am committed to life-long learning and I consistently upskill myself to stay relevant in the tech industry.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-1000),var(--emerald-1000))] flex items-center justify-center text-white">
        End of the list
      </div>
    ),
  },
];
export function Certificates() {
  const { ref } = useSectionInView('Certificates');

  const refScroll = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScroll({
    target: refScroll,
    offset: ['0 1', '1.33 1'],
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
          id="certificates"
          className="scroll-mt-28"
        >
          <Title name="Certificates" />
          <div className="px-4 xl:px-40 2xl:p-0 2xl:mx-auto max-w-[1500px]">
            <StickyScroll content={content} />
          </div>
        </motion.div>
      </div>
    </>
  );
}
