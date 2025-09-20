'use client';

import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import { LinkPreview } from '@/components/ui/link-preview';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

interface TechStackProps {
  isDarkMode?: boolean;
}

export default function TechStack({ isDarkMode = false }: TechStackProps) {
  const { ref } = useSectionInView('Stack');

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

  const techItems = [
    { name: "Next.js", url: "https://nextjs.org/", img: "/tech stack/nextjs.png", className: "w-36 2xl:w-64" },
    { name: "React", url: "https://reactjs.org/", img: "/tech stack/react.webp", className: "w-24 2xl:w-36" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com/", img: "/tech stack/tailwind.png", className: "w-20 2xl:w-36" },
    { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/", img: "/tech stack/csharp.png", className: "w-40 2xl:w-56" },
    { name: "Azure", url: "https://azure.microsoft.com/", img: "/azure.png", className: "w-32 2xl:w-52" },
    { name: "AWS", url: "https://aws.amazon.com/", img: "/tech stack/aws.png", className: "w-32 2xl:w-52" },
    { name: "Node.js", url: "https://nodejs.org/", img: "/tech stack/node.png", className: "w-32 2xl:w-52" },
    { name: "Docker", url: "https://www.docker.com/", img: "/tech stack/docker.webp", className: "w-20 2xl:w-44" },
  ];

  return (
    <>
      <div className="" ref={ref}>
        <motion.div
          ref={refScroll}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          id="techstack"
          className="scroll-mt-28"
        >
          <Title name="Tech Stack" isDarkMode={isDarkMode} />
        
          <div className="mb-20 px-4 sm:px-20 md:px-4 xl:px-40">
            <div className="items-center justify-items-center grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 max-w-6xl mx-auto">
              {techItems.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring" as const,
                    stiffness: 100,
                    damping: 10
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group"
                >
                  <LinkPreview
                    url={tech.url}
                    className="relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-xl"
                  >
                    <div className={`p-4 rounded-xl transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800/30 hover:bg-gray-700/40' 
                        : ''
                    } backdrop-blur-sm border border-opacity-20 ${
                      isDarkMode ? 'border-white' : 'border-gray-100'
                    }`}>
                      <Image
                        src={tech.img}
                        width={10}
                        height={10}
                        alt={`${tech.name} Logo`}
                        className={`${tech.className} transition-transform duration-300 group-hover:scale-105`}
                        unoptimized
                      />
                    </div>
                  </LinkPreview>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

