import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Chat } from '../components/ai-assistant/chat';

export const runtime = 'edge';

export default function AIAssistant() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <Link 
          href="/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.888 4.73a5.985 5.985 0 0 0-2.904 6.51 6.046 6.046 0 0 0 .516 4.91 6.046 6.046 0 0 0 6.51 2.9 6.065 6.065 0 0 0 10.368-2.719 5.985 5.985 0 0 0 2.904-6.51zm-6.772 4.672a4.109 4.109 0 0 1-1.816.613 4.128 4.128 0 0 1-1.863-.302 4.109 4.109 0 0 1-1.816-.613 4.128 4.128 0 0 1-.302-1.863 4.109 4.109 0 0 1 .613-1.816 4.128 4.128 0 0 1 1.863-.302 4.109 4.109 0 0 1 1.816.613 4.128 4.128 0 0 1 .302 1.863 4.109 4.109 0 0 1-.613 1.816z"/>
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Chris AI
          </h1>
        </div>
        
        <div className="w-20"></div> {/* Spacer for centering */}
      </header>

      {/* Chat Component */}
      <div className="flex-1 overflow-hidden">
        <Chat />
      </div>
    </div>
  );
}
