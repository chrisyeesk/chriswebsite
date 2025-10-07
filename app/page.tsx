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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { AppleTVProjects } from "@/components/ui/apple-tv-projects";
import Chatbot from "./components/shared/ChatBot";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Chris's Data
const PROJECTS = [
  {
    title: "AI Chatbot Assistant",
    description: "An AI chatbot built using Retrieval-Augmented-Generation (RAG) concept. Built with Next.js, TypeScript, LangChain, OpenAI API, and deployed to AWS EC2.",
    category: "AI PLATFORM",
    image: "/aiassistant_lightmode.png",
    imageDark: "/aiassistant_darkmode.png",
    link: "/aiassistant",
    tech: ["Next.js", "TypeScript", "LangChain", "OpenAI API", "AWS EC2"]
  },
  {
    title: "Free Time Reward App",
    description: "I developed this app for a teacher in Brisbane Central State School. This macOS/Windows app allows teachers to reward students with free time whenever they achieve something in class. I built it with Electron.js, Next.js, Framer Motion, and Three.js.",
    category: "DESKTOP APP",
    image: "/freetimerewardapp.png",
    link: "https://www.youtube.com/watch?v=1gjnSAshsXg",
    tech: ["Electron.js", "Next.js", "Framer Motion", "Three.js"]
  },
  {
    title: "AI Service Center Agent",
    description: "A Service Center Voice Agent which can hold human-like conversation. It knows when to start and stop talking as the user speaks. Built using Next.js, Node.js, and OpenAI Realtime Voice. Originally deployed using Terraform + Helm to AWS EKS.",
    category: "AI PLATFORM",
    image: "/servicecenter.png",
    link: "https://www.linkedin.com/posts/chrisysk_nextjs-nodejs-aws-activity-7368480269848231938-b58n?utm_source=share&utm_medium=member_desktop&rcm=ACoAACstCU8B9wEno1HmuRyCtohVZflPRRz5pf0",
    tech: ["Next.js", "Node.js", "OpenAI Realtime Voice", "Terraform", "Helm", "AWS EKS"]
  },
  {
    title: "Pitch Fix",
    description: "My first app deployed to the App Store. Pitch Fix helps you master pitch recognition. Built using React Native.",
    category: "MOBILE APP",
    image: "/Pitch Fix.png",
    link: "https://lnkd.in/gGkRhEvs",
    tech: ["React Native", "iOS", "App Store"]
  },
  {
    title: "Personal Portfolio Website",
    description: "My personal portfolio website showcasing my projects, skills, and experience. Features an AI assistant chatbot built using LangChain and OpenAI API. The domain was purchased through AWS Route 53 and deployed to AWS EC2 using nginx.",
    category: "WEB APP",
    image: "/portfolio_lightmode.png",
    imageDark: "/portfolio_darkmode.png",
    link: "https://www.chrisyeeshen.com",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Aceternity UI", "Framer Motion", "Shadcn", "LangChain", "OpenAI API", "AWS Route 53", "AWS EC2", "nginx"]
  },
  {
    title: "Basketball Team Management",
    description: "Full-stack application for a basketball team in Australia. It helps the team to manage learning materials and provide online training to their players.",
    category: "WEB APP",
    image: "/basketball.png",
    link: "#",
    tech: ["React.js", "Redux", "Express.js", "MongoDB", "AWS EC2"]
  }
];

const TESTIMONIALS = [
  {
    quote:
      'Chris delivered the Colonial Secretary project on time with high quality. He required minimal supervision throughout his tenure at the State Library. He demonstrated passion in his work.',
    name: 'Mankit Au',
    title: 'Manager at State Library of Queensland',
  },
  {
    quote:
      'You can rely Chris on almost everything, frontend, authentication, database etc. I recommend Chris to any team who is looking for a full-stack developer.',
    name: 'Taha Ansari',
    title: 'Chief Technology Officer at Sindy.ai',
  },
  {
    quote:
      "Chris took ownership of the project and delivered a high-quality work. Chris consistently upskill himself and up to date with the latest technologies. I will definitely recommend Chris for any project.'",
    name: 'Varshith Meesala',
    title: 'Frontend Lead at Sindy.ai',
  },
  {
    quote:
      'Chris was rehired for his exceptional performance at Advanced Energy. He was willing to learn and demonstrated passion in his work.',
    name: 'WB Ang',
    title: 'Plant Manager at Advanced Energy Industries',
  },
  {
    quote:
      'Chris has exceptional programming skills and brings a lot of value to the team. Chris constantly took initatives and he took full ownership of his work, I highly recommend Chris to any team.',
    name: 'Angelia Ng',
    title: 'Manager at Intel Corporation',
  },
  {
    quote:
      'I worked with Chris during our final year Software Project at University of Melbourne. Chris knows his stuff and have been a great team player. Chris was really good at his frontend work.',
    name: 'Louis Zhou',
    title: 'Software Engineer at Tinyme',
  },
];

const TECH_STACK = [
  { name: "Next.js", url: "https://nextjs.org/", img: "/tech stack/next.png" },
  { name: "React", url: "https://reactjs.org/", img: "/tech stack/react.webp" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/", img: "/tech stack/tailwind.png" },
  { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/", img: "/tech stack/csharp.png" },
  { name: "Python", url: "https://www.python.org/", img: "/tech stack/python.png" },
  { name: "Sitecore", url: "https://www.sitecore.com/", img: "/tech stack/sitecore.png" },
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

const CERTIFICATES = [
  {
    quote: "Deploy, manage, and operate scalable, highly available, and fault-tolerant systems on AWS. Hands-on experience with AWS services and writing optimized code for AWS.",
    name: "AWS Certified Developer",
    designation: "Associate",
    src: "/aws cd.png",
  },
  {
    quote: "Introduction to AWS services, global infrastructure, networking, storage, databases, security, monitoring, analysis, pricing, migration and support.",
    name: "AWS Cloud Practitioner",
    designation: "Coursera/AWS",
    src: "/aws coursera.png",
  },
  {
    quote: "File-based routing, Server actions, authentication using OAuth, SQLite with Prisma ORM, form validation, caching system, and component streaming.",
    name: "Next.js Complete Guide",
    designation: "Udemy by Stephen Grider",
    src: "/Udemy Nextjs.png",
  },
  {
    quote: "Express.js, creating RESTful APIs, session-based authentication with JWT, CRUD operations, middleware, and async/await using Axios and Promises.",
    name: "Node.js & Express",
    designation: "Coursera/IBM",
    src: "/Coursera Nodejs.png",
  },
  {
    quote: "Build cloud native applications using Docker and Kubernetes. Created Docker images, YAML deployment files, pods, services, autoscaling, and rolling updates.",
    name: "Docker & Kubernetes",
    designation: "Coursera/IBM",
    src: "/Coursera Kubernetes.png",
  },
  {
    quote: "Debug React Native apps with Expo Go, core components, styling, navigation, and authentication using React Context.",
    name: "React Native",
    designation: "Codecademy",
    src: "/Learn React Native.png",
  },
  {
    quote: "Matcher functions, testing async code, mocking functions with Jest. React Testing Library queries, mimic user events, and accessibility testing.",
    name: "React Testing",
    designation: "Codecademy",
    src: "/Learn React Testing.png",
  },
  {
    quote: "jQuery event handlers, effects, styling methods, and DOM traversal techniques.",
    name: "jQuery Course",
    designation: "Codecademy",
    src: "/Learn JQuery.png",
  },
];

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


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLastProjectScrolling, setIsLastProjectScrolling] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Save theme to localStorage and apply to document
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
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
          <nav className="fixed z-20 w-full px-6">
            <div className={`mx-auto mt-2 transition-all duration-300 ${
              isScrolled ? "max-w-4xl" : "max-w-6xl"
            }`}>
              <div className={`relative flex flex-wrap items-center justify-between gap-6 transition-all duration-300 lg:gap-0 ${
                isScrolled
                  ? "py-2 lg:py-3 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg px-6"
                  : "py-3 lg:py-4"
              }`}>
                {/* Logo */}
                <div className="flex w-full justify-between lg:w-auto">
                  <a href="#" className="flex items-center space-x-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full overflow-hidden">
                        <Image
                          src="/myavatar.png"
                          alt="Chris Koay"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <span className="font-bold text-lg tracking-tight">
                        Chris
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
                        {["about", "experience", "projects", "skills", "education", "certificates", "contact"].map((item) => (
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
                    {["about", "experience", "projects", "skills", "education", "certificates", "contact"].map((item) => (
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
          <section id="about" className="min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-gradient-to-tr dark:from-zinc-900 dark:via-zinc-950 dark:to-black">
            {/* Shooting Stars and Stars Background - Dark Mode Only */}
            <div className="hidden dark:block absolute inset-0 z-0 opacity-40">
              <ShootingStars
                minSpeed={10}
                maxSpeed={30}
                minDelay={1200}
                maxDelay={4200}
                starColor="#9E00FF"
                trailColor="#2EB9DF"
              />
              <StarsBackground
                starDensity={0.0003}
                allStarsTwinkle={true}
                twinkleProbability={0.7}
                minTwinkleSpeed={0.5}
                maxTwinkleSpeed={1}
              />
            </div>

            <div className="relative z-10 pt-24 md:pt-36 pb-16 md:pb-24 w-full">

              <div className="mx-auto max-w-7xl px-6">
                <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                  {/* Profile Image */}
                  <FadeInWhenVisible>
                    <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-6 md:mb-8">
                      <div className="relative w-full h-full overflow-hidden">
                        {/* Light mode image */}
                        <Image
                          src="/profile_lightmode.png"
                          alt="Chris Profile"
                          fill
                          className="object-contain dark:hidden"
                          priority
                        />
                        {/* Dark mode image */}
                        <Image
                          src="/profile_darkmode.png"
                          alt="Chris Profile"
                          fill
                          className="object-contain hidden dark:block"
                          priority
                        />
                      </div>
                    </div>
                  </FadeInWhenVisible>

                  {/* <FadeInWhenVisible delay={0.1}>
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
                  </FadeInWhenVisible> */}

                  <FadeInWhenVisible delay={0.2}>
                    <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-light md:text-7xl lg:mt-12 xl:text-[5.25rem]">
                      Full-Stack{" "}
                      <span className="relative inline-block">
                        <span className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400">
                          Developer
                        </span>
                      </span>
                    </h1>
                  </FadeInWhenVisible>

                  <FadeInWhenVisible delay={0.4}>
                    <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-zinc-600 dark:text-zinc-400">
                      I am a software engineer focused on building, deploying and testing full-stack web applications.
                      I use the latest technologies like Framer Motion, Next.js, C#, OpenAI technologies to build stunning and futuristic web applications.
                    </p>
                  </FadeInWhenVisible>

                  <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                    <FadeInWhenVisible delay={0.3}>
                      <Button asChild size="lg" className="relative rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                        <a href="#experience" className="flex items-center gap-2">
                          <span className="relative z-10 text-nowrap">View My Work</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                            <path d="m6 9 6 6 6-6"/>
                          </svg>
                          <div className="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-xl bg-yellow-400/50"></div>
                        </a>
                      </Button>
                    </FadeInWhenVisible>

                    <FadeInWhenVisible delay={0.4}>
                      <Button asChild variant="outline" size="lg" className="rounded-xl">
                        <a href="#contact">
                          <span className="text-nowrap">Get in Touch</span>
                        </a>
                      </Button>
                    </FadeInWhenVisible>
                  </div>
                </div>
              </div>

              {/* <div className="mt-8 sm:mt-12 md:mt-20">
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
              </div> */}
            </div>
          </section>

          {/* Testimony Section */}
          <section id="testimony" className="bg-zinc-100 dark:bg-zinc-900 py-16 md:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center mb-16">
                <FadeInWhenVisible>
                  <h2 className="mx-auto max-w-4xl text-balance text-4xl font-light md:text-5xl lg:text-6xl mb-8">
                    Testimonials
                  </h2>
                </FadeInWhenVisible>
              </div>

              <FadeInWhenVisible delay={0.2}>
                <InfiniteMovingCards
                  items={TESTIMONIALS}
                  direction="right"
                  speed="normal"
                />
              </FadeInWhenVisible>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="bg-zinc-100 dark:bg-zinc-900 py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center mb-16">
                <FadeInWhenVisible>
                  <h2 className="mx-auto max-w-4xl text-balance text-4xl font-light md:text-5xl lg:text-6xl mb-8">
                    Work Experience
                  </h2>
                </FadeInWhenVisible>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {EXPERIENCES.map((exp, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.1}>
                    <Card className="bg-white dark:bg-zinc-950 border dark:border-zinc-800 hover:border-yellow-400 dark:hover:border-yellow-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300">
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

          {/* Projects Section - Apple TV Style */}
          <section id="projects" className="bg-white dark:bg-zinc-950 relative pt-16 lg:pt-20">
            {/* Fixed Header - stays below menu bar until last project scrolls */}
            <div className={`${isLastProjectScrolling ? 'absolute' : 'sticky'} top-16 lg:top-20 z-10 bg-white dark:bg-zinc-950 py-8 md:py-16 w-full`}
                 style={isLastProjectScrolling ? { top: '64px' } : undefined}>
              <div className="mx-auto max-w-7xl px-6">
                <div className="text-center relative">
                  <h2 className="mx-auto max-w-4xl text-balance text-4xl font-light md:text-5xl lg:text-6xl relative z-10">
                    Featured Projects
                  </h2>
                  {/* Lamp light spotlight effect */}
                  <div className="absolute left-1/2 top-full mt-12 -translate-x-1/2 pointer-events-none overflow-visible">
                    {/* Light beam cone */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2"
                         style={{
                           width: '500px',
                           height: '150px',
                           background: 'linear-gradient(180deg, rgba(250,204,21,0.12) 0%, rgba(250,204,21,0.06) 40%, rgba(250,204,21,0.02) 70%, transparent 100%)',
                           clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)',
                           filter: 'blur(50px)'
                         }}>
                    </div>
                    {/* Additional glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[120px] bg-yellow-400/5 blur-[70px]"
                         style={{
                           clipPath: 'polygon(40% 0%, 60% 0%, 90% 100%, 10% 100%)'
                         }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AppleTVProjects projects={PROJECTS} onLastProjectScroll={setIsLastProjectScrolling} />
          </section>

          {/* Tech Stack Section */}
          <section id="skills" className="bg-zinc-100 dark:bg-zinc-900 py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center mb-16">
                <FadeInWhenVisible>
                  <h2 className="mx-auto max-w-4xl text-balance text-4xl font-light md:text-5xl lg:text-6xl mb-8">
                    Tech Stack
                  </h2>
                </FadeInWhenVisible>
              </div>

              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {TECH_STACK.map((tech, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.1}>
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="bg-white dark:bg-zinc-800 border dark:border-zinc-700 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300 hover:scale-105 h-full">
                        <CardContent className="p-3 md:p-6 flex items-center justify-center aspect-square">
                          <div className="relative w-12 h-12 md:w-20 md:h-20 flex items-center justify-center">
                            <Image
                              src={tech.img}
                              alt={tech.name}
                              width={80}
                              height={80}
                              className="transition-transform duration-300 group-hover:scale-110 object-contain"
                              unoptimized
                            />
                          </div>
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
                  <h2 className="mx-auto max-w-4xl text-balance text-4xl font-light md:text-5xl lg:text-6xl mb-8">
                    Education
                  </h2>
                </FadeInWhenVisible>
              </div>

              <div className="max-w-md mx-auto space-y-4">
                <FadeInWhenVisible>
                  <Card className="bg-white dark:bg-zinc-950 border dark:border-zinc-800 hover:border-yellow-400 dark:hover:border-yellow-400 hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src="./unimelblogo.svg"
                          alt="University of Melbourne"
                          width={48}
                          height={48}
                          className="rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">University of Melbourne</h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">Master of Information Technology</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.1}>
                  <Card className="bg-white dark:bg-zinc-950 border dark:border-zinc-800 hover:border-yellow-400 dark:hover:border-yellow-400 hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/monash.png"
                          alt="Monash University"
                          width={48}
                          height={48}
                          className="rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">Monash University</h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">Bachelor of Mechanical Engineering (Honours)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInWhenVisible>
              </div>
            </div>
          </section>

          {/* Certificates Section */}
          <section id="certificates" className="bg-white dark:bg-zinc-950 py-16 md:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center mb-8">
                <FadeInWhenVisible>
                  <h2 className="mx-auto max-w-4xl text-balance text-4xl font-light md:text-5xl lg:text-6xl mb-4">
                    Certifications
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                    I have obtained {CERTIFICATES.length} self-learning certificates.
                  </p>
                </FadeInWhenVisible>
              </div>

              <FadeInWhenVisible delay={0.2}>
                <AnimatedTestimonials testimonials={CERTIFICATES} autoplay={false} />
              </FadeInWhenVisible>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-white dark:bg-zinc-950 py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center mb-16">
                <FadeInWhenVisible>
                  <h2 className="mx-auto max-w-4xl text-balance text-4xl font-light md:text-5xl lg:text-6xl mb-8">
                    Contact
                  </h2>
                </FadeInWhenVisible>
              </div>

              <FadeInWhenVisible delay={0.2}>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 text-lg md:text-xl">
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1Umz-YJzUVZp7IW_Kvm0QDCn9B_qIDsg9/view?usp=sharing"
                      className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      My CV
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/chrisysk/"
                      className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="text-zinc-700 dark:text-zinc-300">0448581566</div>
                  <div className="text-zinc-700 dark:text-zinc-300">chrisyeesk@gmail.com</div>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.4}>
                <div className="flex justify-center mt-12">
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="m18 15-6-6-6 6"/>
                    </svg>
                    Back to Top
                  </Button>
                </div>
              </FadeInWhenVisible>
            </div>
          </section>
        </main>

        {/* Chatbot */}
        <Chatbot />
      </div>
    </div>
  );
}
