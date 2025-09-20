"use client";

import Link from 'next/link';
import { ArrowRight, User, Bot, Headphones, ShoppingCart } from 'lucide-react';
import { IconBrandLinkedin, IconFileText, IconPhone, IconMail, IconBrandGithub } from '@tabler/icons-react';
import { FloatingDock } from '@/components/ui/floating-dock';
import { useState } from 'react';

export default function Home() {
  const [showGithubPopup, setShowGithubPopup] = useState(false);

  const projects = [
    {
      title: "Chris Portfolio Website",
      description: "A comprehensive showcase of my professional journey, technical skills, and achievements. Built with Next.js and modern web technologies.",
      href: "/portfolio",
      icon: <User className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Chris AI Assistant",
      description: "An intelligent conversational AI assistant powered by advanced language models, designed to help users with various tasks and queries.",
      href: "/aiassistant",
      icon: <Bot className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Service Center Agent",
      description: "A sophisticated voice-enabled AI agent for customer service applications, featuring natural language processing and voice interaction capabilities.",
      href: "/aivoiceagent",
      icon: <Headphones className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Chris E-commerce",
      description: "A modern e-commerce platform featuring secure payment processing, inventory management, and responsive design. Built with cutting-edge web technologies for optimal user experience.",
      href: "/ecommerce",
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const contactItems = [
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-white" />,
      href: "https://www.linkedin.com/in/chrisysk/",
    },
    {
      title: "CV",
      icon: <IconFileText className="h-full w-full text-white" />,
      href: "https://drive.google.com/file/d/1Umz-YJzUVZp7IW_Kvm0QDCn9B_qIDsg9/view?usp=sharing",
    },
    {
      title: "Phone",
      icon: <IconPhone className="h-full w-full text-white" />,
      href: "tel:+61448581566",
    },
    {
      title: "Email",
      icon: <IconMail className="h-full w-full text-white" />,
      href: "mailto:chrisyeesk@gmail.com",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-white" />,
      href: "#",
      onClick: () => setShowGithubPopup(true),
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-26 w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl md:h-20 font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
            Chris&apos;s Digital Hub
          </h1>
          {/* <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of projects
          </p> */}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {projects.map((project, index) => (
            <Link 
              key={index}
              href={project.href}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-8">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center text-gray-500 group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-gray-700/50">
          {/* <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-white mb-2">Let&apos;s Connect</h3>
            <p className="text-gray-400">Get in touch or learn more about my work</p>
          </div> */}
          
          <div className="flex justify-center">
            <FloatingDock
              items={contactItems}
              desktopClassName="bg-gray-500/50"
              mobileClassName=""
            />
          </div>
        </div>
      </div>

      {/* GitHub Access Popup */}
      {showGithubPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowGithubPopup(false)}>
          <div className="bg-gray-800/90 border border-gray-700/50 rounded-xl p-8 max-w-md mx-4 backdrop-blur-md" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-700/50 rounded-full flex items-center justify-center">
                <IconBrandGithub className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">GitHub Access</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Please connect with Chris to have access to my GitHub repositories. Reach out via LinkedIn or email to discuss collaboration opportunities.
              </p>
              <button 
                onClick={() => setShowGithubPopup(false)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
