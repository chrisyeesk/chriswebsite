'use client';
import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
  {
    title: 'AWS Certified Developer - Associate',
    description:
      'I learnt how to deploy, manage, and operate scalable, highly available, and fault-tolerant systems on AWS. I gained hands-on experience with AWS services and tools, and learnt how to write code that optimizes AWS services.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/aws cd.png"
          width={300}
          height={300}
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
          width={300}
          height={300}
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
          width={300}
          height={300}
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
          width={300}
          height={300}
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
          width={300}
          height={300}
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
          width={300}
          height={300}
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
          width={300}
          height={300}
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
          width={300}
          height={300}
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
          width={300}
          height={300}
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
          width={300}
          height={300}
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
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'End of the list',
    description:
      "I am committed to life-long learning and I consistently upskill myself to stay relevant in the tech industry.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function Certificates() {
  return (
    <>
      <div
        className={`px-4 sm:px-20 md:px-40 flex justify-center lg:relative xl:justify-start font-bold mt-20 text-3xl md:text-5xl mb-5`}
        >
        Certificates
      </div>
      <div className="px-4 lg:px-40">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
