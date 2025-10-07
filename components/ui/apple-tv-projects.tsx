"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  image: string;
  imageDark?: string;
  link: string;
  tech: string[];
}

export function AppleTVProjects({
  projects,
  onLastProjectScroll
}: {
  projects: Project[];
  onLastProjectScroll?: (isScrolling: boolean) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [imageFixed, setImageFixed] = useState(false);
  const [lastProjectScroll, setLastProjectScroll] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = window.innerHeight / 2;

      // Check if we're in the section
      if (containerRect.top > window.innerHeight || containerRect.bottom < 0) {
        setImageFixed(false);
        return;
      }

      // Calculate which project is active
      const descriptions = container.querySelectorAll('[data-project-index]');
      let newActiveProject = 0;

      descriptions.forEach((desc, index) => {
        // Get the title element (h3) to check when it enters the viewport
        const titleElement = desc.querySelector('h3');
        const titleRect = titleElement?.getBoundingClientRect();

        if (titleRect) {
          // Change image when the title is visible at the bottom of the screen
          // Title top should be less than window height (appearing from bottom)
          if (titleRect.top < window.innerHeight && titleRect.bottom > 0) {
            newActiveProject = index;
          }
        }
      });

      setActiveProject(newActiveProject);

      // Check if first project description is centered - start fixing image
      const firstDesc = descriptions[0];
      if (firstDesc) {
        const firstRect = firstDesc.getBoundingClientRect();
        const firstCenter = firstRect.top + firstRect.height / 2;

        if (firstCenter <= containerCenter && !lastProjectScroll) {
          setImageFixed(true);
        } else if (firstCenter > containerCenter) {
          setImageFixed(false);
        }
      }

      // Check if last project should scroll away
      const lastDesc = descriptions[descriptions.length - 1];
      if (lastDesc) {
        const lastRect = lastDesc.getBoundingClientRect();
        const lastCenter = lastRect.top + lastRect.height / 2;

        if (lastCenter < containerCenter && newActiveProject === projects.length - 1) {
          setLastProjectScroll(true);
          setImageFixed(false);
          onLastProjectScroll?.(true);
        } else if (lastCenter >= containerCenter) {
          setLastProjectScroll(false);
          onLastProjectScroll?.(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects.length, lastProjectScroll, onLastProjectScroll]);

  return (
    <div ref={containerRef} className="relative">
      {/* Image Column - Fixed on right */}
      <div className="hidden lg:block">
        <div
          className={`${
            imageFixed && !lastProjectScroll ? "fixed" : "absolute"
          } -right-8 w-1/2 h-screen flex items-center justify-end pr-0`}
          style={{
            top: imageFixed && !lastProjectScroll ? "0" : lastProjectScroll ? "auto" : "0",
            bottom: lastProjectScroll ? "0" : "auto",
          }}
        >
          <motion.div
            className="relative w-full aspect-[16/10] border-[6px] border-zinc-800 dark:border-zinc-900 shadow-[8px_8px_24px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeProject === index ? 1 : 0,
                  scale: activeProject === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Light mode image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover dark:hidden"
                />
                {/* Dark mode image */}
                <Image
                  src={project.imageDark || project.image}
                  alt={project.title}
                  fill
                  className="object-cover hidden dark:block"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Description Column - Scrollable on left */}
      <div className="lg:w-1/2 w-full">
        {projects.map((project, index) => (
          <div
            key={project.title}
            data-project-index={index}
            className="min-h-screen flex items-center py-20 px-6 lg:px-20 xl:px-40"
          >
            <div className="max-w-xl">
              {/* Mobile Image */}
              <div className="lg:hidden mb-8 relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                {/* Light mode image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover dark:hidden"
                />
                {/* Dark mode image */}
                <Image
                  src={project.imageDark || project.image}
                  alt={project.title}
                  fill
                  className="object-cover hidden dark:block"
                />
              </div>

              <h3 className="text-4xl md:text-5xl font-light mb-6">
                {project.title}
              </h3>

              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
                >
                  View Project
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
