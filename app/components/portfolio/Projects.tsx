'use client';
import Image from 'next/image';
import { useRef } from 'react';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Title from '../Title';
import { LinkPreview } from '@/components/ui/link-preview';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  isDarkMode?: boolean;
}

const projects = [
  {
    title: "AI Chatbot Assistant",
    description: "An AI chatbot built using Retrieval-Augmented-Generation (RAG) concept. Built with Next.js, TypeScript, LangChain, OpenAI API, and deployed to AWS EC2.",
    image: "/chatbot.png",
    link: "http://chris-assistant.com",
    tech: ["Next.js", "TypeScript", "LangChain", "OpenAI API", "AWS EC2"]
  },
  {
    title: "Chris E-commerce",
    description: "A modern e-commerce platform with clean design and smooth user experience. Features product catalog, shopping cart, and checkout functionality.",
    image: "/ecommerce.png",
    link: "https://chris-ecommerce.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS", "Stripe"]
  },
  {
    title: "AT Service Center Agent",
    description: "An intelligent service center agent system that helps customers with inquiries, appointments, and technical support using advanced AI capabilities.",
    image: "/service-center.png",
    link: "#",
    tech: ["AI/ML", "Natural Language Processing", "Customer Service", "Automation"]
  },
  {
    title: "Basketball Team Management",
    description: "Full-stack application for managing basketball team operations including player statistics, game scheduling, and team communication.",
    image: "/basketball.png",
    link: "#",
    tech: ["React.js", "Redux", "Express.js", "MongoDB", "AWS EC2"]
  }
];

export function Projects({ isDarkMode = false }: ProjectsProps) {
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
          <Title name="Projects" isDarkMode={isDarkMode} />
        </motion.div>
        <div className="px-4 sm:px-20 md:px-4 xl:px-40">
          <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 hover:from-purple-800/30 hover:via-blue-800/30 hover:to-indigo-800/30 border border-purple-500/20' 
                      : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 hover:from-blue-100 hover:via-indigo-100 hover:to-purple-100 border border-blue-200/50 shadow-lg'
                  } backdrop-blur-sm`}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className={`text-xl font-semibold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                      </h3>
                      {project.link !== "#" && (
                        <LinkPreview url={project.link}>
                          <ExternalLink className={`w-5 h-5 transition-colors ${
                            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                          }`} />
                        </LinkPreview>
                      )}
                    </div>

                    <p className={`text-sm mb-4 leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs rounded-full transition-colors ${
                            isDarkMode
                              ? 'bg-purple-900/30 text-purple-200 border border-purple-500/30'
                              : 'bg-blue-100 text-blue-800 border border-blue-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20"></div>
      </div>
    </>
  );
}
