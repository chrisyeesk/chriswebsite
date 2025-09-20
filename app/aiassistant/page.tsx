import Link from 'next/link';
import { ArrowLeft, Bot, MessageSquare } from 'lucide-react';

export default function AIAssistant() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Back button */}
        <Link 
          href="/"
          className="inline-flex items-center text-purple-300 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Bot className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Chris AI Assistant
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            An intelligent conversational AI assistant powered by advanced language models
          </p>
        </div>

        {/* Coming Soon Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm border border-purple-700/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-6 h-6 text-purple-300 mr-3" />
              <h2 className="text-2xl font-bold">Coming Soon</h2>
            </div>
            <p className="text-purple-200 text-lg leading-relaxed mb-6">
              This AI Assistant is currently under development. It will feature:
            </p>
            <ul className="space-y-3 text-purple-200">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Natural language processing and understanding
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Contextual conversations and memory
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Task automation and assistance
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Integration with various APIs and services
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-purple-300 text-lg">
              Stay tuned for updates on this exciting project!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
