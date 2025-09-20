"use client";

import { Certificates } from '../components/portfolio/Certificates';
import Chatbot from '../components/shared/ChatBot';
import { Contact } from '../components/portfolio/Contact';
import { Education } from '../components/portfolio/Education';
import Experiences from '../components/portfolio/Experiences';
import Head from 'next/head';
import Footer from '../components/portfolio/Footer';
import { Projects } from '../components/portfolio/Projects';
import TechStack from '../components/portfolio/TechStack';
import Introduction from '../components/portfolio/introduction';
import { TestimonyCards } from '../components/portfolio/testimonyCards';
import localFont from 'next/font/local';
import { useState } from 'react';
import { Sun, Moon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const manrope = localFont({
  src: '../components/font/Manrope-ExtraLight.woff2',
  display: 'swap',
});

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/components/font/Manrope-ExtraLight.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous" 
        />
      </Head>
      
      <div className={`min-h-screen transition-all duration-700 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
          : 'bg-gradient-to-br from-blue-50 via-white to-gray-100 text-gray-900'
      }`}>
        {/* Floating Back to Home Button */}
        <Link 
          href="/"
          className={`fixed top-4 left-4 z-50 inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
            isDarkMode 
              ? 'text-gray-300 hover:text-white bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/50' 
              : 'text-gray-700 hover:text-gray-900 bg-white/80 hover:bg-gray-100/80 border border-gray-200/50 shadow-lg'
          }`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        {/* Theme Toggle Button */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-500 hover:scale-110 backdrop-blur-sm border ${
            isDarkMode 
              ? 'bg-gray-800/80 hover:bg-gray-700/80 text-yellow-400 border-gray-700/50' 
              : 'bg-white/80 hover:bg-gray-100/80 text-gray-800 shadow-lg border-gray-200/50'
          }`}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`${manrope.className} mx-auto justify-center flex text-GeistSans min-h-screen w-full flex-col`}
        >
          <Introduction />
          <TestimonyCards />
          <TechStack isDarkMode={isDarkMode} />
          <Experiences />
          <Projects isDarkMode={isDarkMode} />
          <Certificates />
          <Education />
          <Contact />
          <Chatbot />
          <Footer />
        </motion.main>
      </div>
    </>
  );
}
