'use client';
import React from 'react';
import localFont from 'next/font/local';
import { LinkPreview } from '@/components/ui/link-preview';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const playwrite = localFont({ src: '../../components/font/playwrite.woff2' });

const Introduction = () => {
  const { ref } = useSectionInView('Home');

  return (
    <motion.div
      ref={ref}
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-screen 2xl:max-w-[1500px] 2xl:px-0 max-w-[3000px] mx-auto flex flex-col justify-center px-11 sm:px-20 lg:px-40 pb-20"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:mb-14 2xl:text-[7rem]"
      >
        <div className={`${playwrite.className} mt-24 2xl:mt-2 mb-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent`}>
          Chris&apos;
        </div>
        <div className={`${playwrite.className} mb-14 md:mb-12 lg:mb-20 2xl:mb-10 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent`}>
          Portfolio
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-3xl xl:text-2xl 2xl:text-4xl mb-5 leading-relaxed"
      >
        I am a software engineer focused on building, deploying and testing
        full-stack web applications. I use the latest technologies, such as{' '}
        <LinkPreview
          url="https://www.framer.com/motion/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
        >
          Framer Motion
        </LinkPreview>
        ,{' '}
        <LinkPreview
          url="https://nextjs.org/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 transition-all duration-300"
        >
          Next.js
        </LinkPreview>
        ,{' '}
        <LinkPreview
          url="https://openai.com/index/openai-api/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 transition-all duration-300"
        >
          OpenAI API
        </LinkPreview>{' '}
        and{' '}
        <LinkPreview
          url="https://www.langchain.com/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 transition-all duration-300"
        >
          Langchain
        </LinkPreview>{' '}
        to build stunning and futuristic web applications. I hold an AWS
        Certified Developer - Associate certificate.
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex items-center gap-4 mt-8"
      >
        <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          AWS Certified Developer
        </div>
        <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          Full-Stack Engineer at RACQ
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Introduction;
