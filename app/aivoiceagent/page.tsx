import Link from 'next/link';
import { ArrowLeft, Headphones, Mic, Volume2 } from 'lucide-react';

export default function AIVoiceAgent() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-900 via-red-800 to-black text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Back button */}
        <Link 
          href="/"
          className="inline-flex items-center text-orange-300 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
            <Headphones className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
            AI Service Center Agent
          </h1>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            A sophisticated voice-enabled AI agent for customer service applications
          </p>
        </div>

        {/* Coming Soon Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 backdrop-blur-sm border border-orange-700/50 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <Volume2 className="w-6 h-6 text-orange-300 mr-3" />
              <h2 className="text-2xl font-bold">Coming Soon</h2>
            </div>
            <p className="text-orange-200 text-lg leading-relaxed mb-6">
              This AI Voice Agent is currently in development. It will feature:
            </p>
            <ul className="space-y-3 text-orange-200">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Real-time voice recognition and processing
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Natural speech synthesis and response
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Multi-language support
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Customer service workflow integration
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Sentiment analysis and emotional intelligence
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-orange-800/20 to-red-800/20 backdrop-blur-sm border border-orange-700/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Mic className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-lg font-semibold">Voice Input</h3>
              </div>
              <p className="text-orange-200 text-sm">
                Advanced speech recognition with noise cancellation and accent adaptation
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-800/20 to-red-800/20 backdrop-blur-sm border border-orange-700/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Volume2 className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-lg font-semibold">Voice Output</h3>
              </div>
              <p className="text-orange-200 text-sm">
                Human-like speech synthesis with emotional tone and personality
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-orange-300 text-lg">
              Revolutionizing customer service with AI-powered voice interactions
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
