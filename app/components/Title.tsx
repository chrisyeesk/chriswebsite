import React from 'react';

interface TitleProps {
  name: string;
  isDarkMode?: boolean;
}

export default function Title({ name, isDarkMode = false }: TitleProps) {
  return (
    <div
      className={`2xl:text-4xl 2xl:justify-center 2xl:mt-20 2xl:mb-10 px-4 sm:px-20 md:px-40 flex justify-center lg:relative xl:justify-start font-bold text-3xl md:text-5xl mb-5 transition-colors duration-300 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}
    >
      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
        {name}
      </span>
    </div>
  );
}
