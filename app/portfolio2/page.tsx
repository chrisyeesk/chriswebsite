"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Moon,
  Sun,
  CircleCheckBig,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Chris's Data
const PROJECTS = [
  {
    title: "AI Chatbot Assistant",
    description: "An AI chatbot built using Retrieval-Augmented-Generation (RAG) concept. Built with Next.js, TypeScript, LangChain, OpenAI API, and deployed to AWS EC2.",
    category: "AI PLATFORM",
    image: "/chatbot.png",
    link: "http://chris-assistant.com",
    tech: ["Next.js", "TypeScript", "LangChain", "OpenAI API", "AWS EC2"]
  },
  {
    title: "Chris E-commerce",
    description: "A modern e-commerce platform with clean design and smooth user experience. Features product catalog, shopping cart, and checkout functionality.",
    category: "WEB APP",
    image: "/ecommerce.png",
    link: "https://chris-ecommerce.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS", "Stripe"]
  },
  {
    title: "AT Service Center Agent",
    description: "An intelligent service center agent system that helps customers with inquiries, appointments, and technical support using advanced AI capabilities.",
    category: "AI PLATFORM",
    image: "/service-center.png",
    link: "#",
    tech: ["AI/ML", "Natural Language Processing", "Customer Service", "Automation"]
  },
  {
    title: "Basketball Team Management",
    description: "Full-stack application for managing basketball team operations including player statistics, game scheduling, and team communication.",
    category: "WEB APP",
    image: "/basketball.png",
    link: "#",
    tech: ["React.js", "Redux", "Express.js", "MongoDB", "AWS EC2"]
  }
];

const TECH_STACK = [
  { name: "Next.js", url: "https://nextjs.org/", img: "/tech stack/nextjs.png" },
  { name: "React", url: "https://reactjs.org/", img: "/tech stack/react.webp" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/", img: "/tech stack/tailwind.png" },
  { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/", img: "/tech stack/csharp.png" },
  { name: "Azure", url: "https://azure.microsoft.com/", img: "/azure.png" },
  { name: "AWS", url: "https://aws.amazon.com/", img: "/tech stack/aws.png" },
  { name: "Node.js", url: "https://nodejs.org/", img: "/tech stack/node.png" },
  { name: "Docker", url: "https://www.docker.com/", img: "/tech stack/docker.webp" },
];

const EXPERIENCES = [
  {
    logo: '/RACQ.png',
    title: 'Digital Full Stack Developer',
    company: 'RACQ',
    url: 'https://www.racq.com.au/',
    dateRange: 'Apr 2025 - present',
    highlights: [
      'Tech Stack: Typescript, React.js, Vue.js, Tailwind, C#.NET, Sitecore, Docker, AWS, Azure.',
      'Web development for Queensland\'s best insurance company.',
      'Implemented Website Security Measures including URI injection prevention, API input validation, CSP and CORs configuration.',
      'Implement API rate limit through Azure Resource Management (ARM) and Azure API Management (APIM)',
      'Build new features into RACQ\'s website.',
      'Website deployment using Team City and Octopus Deploy.',
    ],
  },
  {
    logo: '/workingmouse_logo.jpeg',
    title: 'Full Stack Developer',
    company: 'Working Mouse',
    url: 'https://www.workingmouse.com.au/',
    dateRange: 'Nov 2024 - Apr 2025',
    highlights: [
      'Tech Stack: Typescript, React.js, Vue.js, C#.NET, Docker, AWS, Azure, GitLab.',
      'Built the Property Acquisition and Disposal Record website for the Department of Transport and Main Roads (TMR).',
      'Deployment of the website to AWS ECS Fargate and setting up CI/CD on GitLab.',
      'Worked on PDF, word and excel file report generation using Gembox.',
    ],
  },
  {
    logo: '/slq.jpg',
    title: 'Web Development Officer',
    company: 'State Library of Queensland',
    url: 'https://www.slq.qld.gov.au/',
    dateRange: 'Apr 2024 - Oct 2024',
    highlights: [
      'Tech Stack: Next.js, Typescript, Tailwind, MUI, PHP, GraphQL, Drupal, MariaDB, Solr, Docker.',
      'Built Queensland Colonial Secretary Website frontend and backend.',
      'Used Apache Solr for faceted search, pagination, and advanced filtering.',
      'Built backend API endpoints using PHP.',
    ],
  },
  {
    logo: '/sindy_logo.png',
    title: 'Software Engineer Intern',
    company: 'Sindy Labs',
    url: 'https://sindy.ai/',
    dateRange: 'Jan 2024 - Mar 2024',
    highlights: [
      'Tech Stack: Next.js, Typescript, Tailwind, Python Fast API, Shadcn, PostgreSQL, Docker, AWS ECS.',
      'Built a Retrieval-Augmented Generation (RAG) Chatbot using LangChain and Socket.io.',
      'Deployed multiple docker containers to AWS ECS Fargate with GitHub Actions CI/CD.',
    ],
  },
];

export default function Portfolio2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROJECTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in Next.js, React, TypeScript, Tailwind CSS, C#.NET, AWS, Azure, Docker, and AI technologies like LangChain and OpenAI API.",
    },
    {
      question: "What type of projects do you work on?",
      answer:
        "I work on full-stack web applications, AI chatbots, e-commerce platforms, and enterprise-level solutions for companies across various industries.",
    },
    {
      question: "Do you have cloud deployment experience?",
      answer:
        "Yes, I have extensive experience deploying applications to AWS (EC2, ECS Fargate) and Azure, with CI/CD pipelines using GitHub Actions and GitLab.",
    },
    {
      question: "What is your professional background?",
      answer:
        "I'm currently a Digital Full Stack Developer at RACQ with previous experience at Working Mouse, State Library of Queensland, and Sindy Labs. I hold an AWS Certified Developer - Associate certificate.",
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="relative bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-50 hidden opacity-65 lg:block pointer-events-none">
          <div className="absolute left-0 top-0 w-[35rem] h-[80rem] -rotate-45 -translate-y-[21.875rem] rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"></div>
          <div className="absolute left-0 top-0 w-60 h-[80rem] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] translate-x-[5%] -translate-y-1/2"></div>
        </div>

        {/* Navigation */}
        <header>
          <nav className="fixed z-20 w-full px-2">
            <div className={`mx-auto mt-2 px-6 transition-all duration-300 lg:px-12 ${
              isScrolled ? "max-w-4xl" : "max-w-6xl"
            }`}>
              <div className={`relative flex flex-wrap items-center justify-between gap-6 transition-all duration-300 lg:gap-0 ${
                isScrolled
                  ? "py-2 lg:py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg px-6"
                  : "py-3 lg:py-4"
              }`}>
                {/* Logo */}
                <div className="flex w-full justify-between lg:w-auto">
                  <a href="#" className="flex items-center space-x-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">
                        C
                      </div>
                      <span className="font-bold text-lg tracking-tight">
                        chris
                      </span>
                    </div>
                  </a>

                  {/* Mobile Menu */}
                  <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild className="lg:hidden">
                      <Button variant="ghost" size="icon" className="relative z-20 -m-2.5 -mr-4">
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="top" className="w-full">
                      <nav className="flex flex-col space-y-6 text-base mt-6">
                        {["about", "experience", "projects", "skills", "education", "contact"].map((item) => (
                          <a
                            key={item}
                            href={`#${item}`}
                            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white duration-150 capitalize"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item}
                          </a>
                        ))}
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>

                {/* Desktop Menu */}
                <div className="absolute inset-0 m-auto hidden h-fit w-fit lg:block">
                  <ul className="flex gap-8 text-sm">
                    {["about", "experience", "projects", "skills", "education", "contact"].map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item}`}
                          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white block duration-150 capitalize"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Theme Toggle */}
                <div className="hidden lg:flex w-fit items-center gap-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2"
                  >
                    {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="overflow-hidden">
          {/* Hero Section */}
          <section id="about">
            <div className="relative pt-24 md:pt-36">
              <div className="absolute inset-0 top-56 -z-20 lg:top-32 [mask-image:linear-gradient(to_bottom,transparent_35%,black_90%)]">
                <div className="hidden dark:block size-full">
                  <div className="w-full h-full bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950" />
                </div>
              </div>
              <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,rgb(255_255_255_/_1)_75%)] dark:[background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,rgb(9_9_11_/_1)_75%)]"></div>

              <div className="mx-auto max-w-7xl px-6">
                <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                  <FadeInWhenVisible>
                    <div className="relative mx-auto w-fit overflow-hidden rounded-full">
                      <div className="group flex w-fit items-center gap-4 rounded-full border dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-white dark:hover:bg-zinc-800 p-1 pl-4 shadow-md transition-colors duration-300">
                        <span className="animate-shimmer bg-gradient-to-r from-transparent via-zinc-900 dark:via-white/80 via-50% to-transparent bg-[length:200%_100%] bg-clip-text text-transparent text-sm">
                          AWS Certified Developer
                        </span>
                        <Separator orientation="vertical" className="h-4" />
                        <Badge className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                          Full-Stack @ RACQ
                        </Badge>
                      </div>
                    </div>
                  </FadeInWhenVisible>

                  <FadeInWhenVisible delay={0.2}>
                    <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                      Full-Stack{" "}
                      <span className="relative inline-block">
                        <span className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400">
                          Developer
                        </span>
                      </span>{" "}
                      &{" "}
                      <span className="relative inline-block">
                        <span className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400">
                          AI Engineer
                        </span>
                      </span>
                    </h1>
                  </FadeInWhenVisible>

                  <FadeInWhenVisible delay={0.4}>
                    <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-zinc-600 dark:text-zinc-400">
                      I am a software engineer focused on building, deploying and testing full-stack web applications.
                      I use the latest technologies like Framer Motion, Next.js, OpenAI API and Langchain to build stunning and futuristic web applications.
                    </p>
                  </FadeInWhenVisible>

                  <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                    <FadeInWhenVisible delay={0.6}>
                      <Button asChild size="lg" className="relative rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                        <a href="#projects">
                          <span className="relative z-10 text-nowrap">View My Work</span>
                          <div className="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-xl bg-yellow-400/50"></div>
                        </a>
                      </Button>
                    </FadeInWhenVisible>

                    <FadeInWhenVisible delay={0.7}>
                      <Button asChild variant="outline" size="lg" className="rounded-xl">
                        <a href="#contact">
                          <span className="text-nowrap">Get in Touch</span>
                        </a>
                      </Button>
                    </FadeInWhenVisible>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 md:mt-20">
                <FadeInWhenVisible delay={0.8}>
                  <div className="relative px-4 sm:px-6 overflow-hidden">
                    <Card className="relative mx-auto max-w-4xl overflow-hidden p-3 shadow-lg">
                      <div className="relative overflow-hidden rounded-xl aspect-video">
                        <Image
                          src={PROJECTS[0].image}
                          alt="Featured Project"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Card>
                  </div>
                </FadeInWhenVisible>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-white dark:bg-zinc-950 pb-16 pt-16 md:pb-32">
            <div className="relative m-auto max-w-5xl px-6">
              <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:gap-12 md:grid-cols-4">
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "6+", label: "Companies" },
                  { value: "4+", label: "Projects" },
                  { value: "AWS", label: "Certified" },
                ].map((stat, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.1}>
                    <Card className="flex flex-col items-center text-center p-6 border-none shadow-none bg-transparent">
                      <CardContent className="p-0">
                        <div className="text-4xl font-semibold md:text-5xl lg:text-6xl">
                          {stat.value}
                        </div>
                        <div className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm md:text-base">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="bg-zinc-100 dark:bg-zinc-900 py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center mb-16">
                <FadeInWhenVisible>
                  <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold md:text-5xl lg:text-6xl mb-8">
                    Work Experience
                  </h2>
                </FadeInWhenVisible>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {EXPERIENCES.map((exp, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.1}>
                    <Card className="bg-white dark:bg-zinc-950 border dark:border-zinc-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={48}
                            height={48}
                            className="rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 flex items-center gap-1">
                              {exp.company}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">{exp.dateRange}</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CircleCheckBig className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="bg-white dark:bg-zinc-950 py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center mb-16">
                <FadeInWhenVisible>
                  <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold md:text-5xl lg:text-6xl mb-8">
                    Featured Projects
                  </h2>
                </FadeInWhenVisible>
              </div>

              <div className="relative">
                <FadeInWhenVisible>
                  <Card className="relative mx-auto max-w-4xl overflow-hidden p-3 shadow-lg">
                    <div className="relative group w-full">
                      <div className="relative overflow-hidden rounded-xl aspect-video">
                        <div className="absolute inset-0">
                          <a
                            href={PROJECTS[currentSlide].link}
                            className="block w-full h-full cursor-pointer group/link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={PROJECTS[currentSlide].image}
                              alt={PROJECTS[currentSlide].title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover/link:scale-105"
                            />
                          </a>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            setCurrentSlide(
                              (prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length
                            )
                          }
                          className="absolute left-2 md:left-4 top-2 md:top-1/2 md:-translate-y-1/2 z-10 h-8 w-8 md:h-10 md:w-10 rounded-full bg-black/50 text-white md:opacity-0 transition-opacity duration-300 hover:bg-black/70 group-hover:opacity-100"
                        >
                          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            setCurrentSlide((prev) => (prev + 1) % PROJECTS.length)
                          }
                          className="absolute left-12 md:left-auto md:right-4 top-2 md:top-1/2 md:-translate-y-1/2 z-10 h-8 w-8 md:h-10 md:w-10 rounded-full bg-black/50 text-white md:opacity-0 transition-opacity duration-300 hover:bg-black/70 group-hover:opacity-100"
                        >
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                        </Button>

                        <Button
                          asChild
                          size="sm"
                          className="absolute top-2 right-12 md:top-4 md:right-16 z-10 gap-1 md:gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-2 py-1.5 md:px-3 md:py-2 text-xs md:text-sm md:opacity-0 transition-all duration-300 group-hover:opacity-100"
                        >
                          <a href={PROJECTS[currentSlide].link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="hidden sm:inline">View Project</span>
                            <span className="sm:hidden">View</span>
                          </a>
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="absolute top-2 right-2 md:top-4 md:right-4 z-10 h-8 w-8 rounded-full bg-black/50 text-white md:opacity-0 transition-opacity duration-300 hover:bg-black/70 group-hover:opacity-100"
                        >
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>

                        <Badge
                          variant="secondary"
                          className="absolute bottom-12 left-2 md:top-4 md:left-4 md:bottom-auto z-10 bg-black/50 text-white border-none md:opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          {currentSlide + 1} / {PROJECTS.length}
                        </Badge>

                        <div className="absolute inset-x-2 bottom-2 md:inset-x-4 md:bottom-4 z-10 md:opacity-0 transition-all duration-500 ease-out md:transform md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                          <div className="space-y-1 md:space-y-2">
                            <div className="flex justify-start">
                              <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-bold uppercase">
                                {PROJECTS[currentSlide].category}
                              </Badge>
                            </div>
                            <div className="flex justify-start">
                              <h3 className="inline-block bg-black text-white px-2 py-1 md:px-3 md:py-2 text-sm md:text-lg font-bold leading-tight rounded">
                                {PROJECTS[currentSlide].title}
                              </h3>
                            </div>
                            <div className="flex justify-start">
                              <p className="inline-block bg-black/90 text-white px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm leading-relaxed max-w-[90%] md:max-w-[80%] rounded">
                                {PROJECTS[currentSlide].description}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div
                          className="absolute bottom-0 left-0 h-1 bg-yellow-400 transition-all duration-300"
                          style={{
                            width: isPlaying ? `${((currentSlide + 1) / PROJECTS.length) * 100}%` : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </Card>
                </FadeInWhenVisible>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="skills" className="bg-zinc-100 dark:bg-zinc-900 py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center mb-16">
                <FadeInWhenVisible>
                  <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold md:text-5xl lg:text-6xl mb-8">
                    Tech Stack
                  </h2>
                </FadeInWhenVisible>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {TECH_STACK.map((tech, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.1}>
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="bg-white dark:bg-zinc-950 border dark:border-zinc-800 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300 hover:scale-105">
                        <CardContent className="p-6 flex items-center justify-center">
                          <Image
                            src={tech.img}
                            alt={tech.name}
                            width={80}
                            height={80}
                            className="transition-transform duration-300 group-hover:scale-110"
                            unoptimized
                          />
                        </CardContent>
                      </Card>
                    </a>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="bg-white dark:bg-zinc-950 py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center mb-16">
                <FadeInWhenVisible>
                  <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold md:text-5xl lg:text-6xl mb-8">
                    Education
                  </h2>
                </FadeInWhenVisible>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                <FadeInWhenVisible>
                  <Card className="bg-white dark:bg-zinc-950 border dark:border-zinc-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src="./unimelblogo.svg"
                          alt="University of Melbourne"
                          width={64}
                          height={64}
                          className="rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold">University of Melbourne</h3>
                          <p className="text-zinc-600 dark:text-zinc-400">Master of Information Technology</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.1}>
                  <Card className="bg-white dark:bg-zinc-950 border dark:border-zinc-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src="/monash.png"
                          alt="Monash University"
                          width={64}
                          height={64}
                          className="rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold">Monash University</h3>
                          <p className="text-zinc-600 dark:text-zinc-400">Bachelor of Mechanical Engineering (Honours)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInWhenVisible>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="contact" className="bg-zinc-100 dark:bg-zinc-900 py-16 md:py-32">
            <div className="mx-auto max-w-4xl px-6">
              <div className="text-center mb-16">
                <FadeInWhenVisible>
                  <h2 className="mx-auto max-w-4xl text-balance text-4xl font-semibold md:text-5xl lg:text-6xl mb-8">
                    Frequently Asked Questions
                  </h2>
                </FadeInWhenVisible>
              </div>

              <FadeInWhenVisible>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-zinc-600 dark:text-zinc-400 pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeInWhenVisible>
            </div>
          </section>

          {/* Footer */}
          <section className="bg-white dark:bg-zinc-950 py-16">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center">
                <FadeInWhenVisible>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Let&apos;s Work Together
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
                    Interested in collaborating? Feel free to reach out!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl">
                      <Link href="/">Back to Main Site</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-xl">
                      <Link href="/portfolio">View Original Portfolio</Link>
                    </Button>
                  </div>
                </FadeInWhenVisible>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function FadeInWhenVisible({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 20, filter: "blur(12px)" }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
