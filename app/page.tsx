import Link from 'next/link';
import { ArrowRight, User, Bot, Headphones } from 'lucide-react';

export default function Home() {
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
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
            Chris&apos;s Digital Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of innovative projects showcasing AI, web development, and modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

        {/* Footer note */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-lg">
            Click on any project to dive deeper into the experience
          </p>
        </div>
      </div>
    </main>
  );
}
