"use client";

import Link from 'next/link';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { Chat } from './chat';
import { useState } from 'react';

export default function AIAssistant() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`flex flex-col h-screen transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
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
      
      {/* Floating Theme Toggle Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border ${
          isDarkMode 
            ? 'bg-gray-800/80 hover:bg-gray-700/80 text-yellow-400 border-gray-700/50' 
            : 'bg-white/80 hover:bg-gray-100/80 text-gray-800 shadow-lg border-gray-200/50'
        }`}
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Chat Component */}
      <div className="flex-1 overflow-hidden">
        <Chat isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
