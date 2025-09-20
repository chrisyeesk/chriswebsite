/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';
import { useChat } from '@ai-sdk/react';
import { useRef, useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Send, User } from 'lucide-react';

export function Chat() {
  const [showExampleQuestions, setShowExampleQuestions] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { messages, input, setInput, handleInputChange, handleSubmit } =
    useChat({
      api: '/api/chat',
      onError: (e) => {
        console.log(e);
        if (e.message?.includes('401') || e.message?.includes('Incorrect API key')) {
          setError('OpenAI API key is invalid or expired. Please update the API key in the .env file.');
        } else {
          setError('An error occurred while processing your request.');
        }
      },
    });
  const chatParent = useRef<HTMLUListElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    handleSubmit(event);
    setShowExampleQuestions(false);
  };

  const handleClickQuestion = (question: string) => {
    setInput(question);
    setShowExampleQuestions(false);
    setTimeout(() => {
      if (formRef.current) {
        const submitEvent = new Event('submit', {
          bubbles: true,
          cancelable: true,
        });
        formRef.current.dispatchEvent(submitEvent);
      }
    }, 0);
  };

  const handleTextareaKeyDown = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setShowExampleQuestions(false);
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800">
      {/* Main chat area */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Messages container */}
          <div className="flex-1 overflow-y-auto">
            {messages.length === 0 && showExampleQuestions ? (
              /* Welcome screen with examples */
              <div className="max-w-3xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.888 4.73a5.985 5.985 0 0 0-2.904 6.51 6.046 6.046 0 0 0 .516 4.91 6.046 6.046 0 0 0 6.51 2.9 6.065 6.065 0 0 0 10.368-2.719 5.985 5.985 0 0 0 2.904-6.51zm-6.772 4.672a4.109 4.109 0 0 1-1.816.613 4.128 4.128 0 0 1-1.863-.302 4.109 4.109 0 0 1-1.816-.613 4.128 4.128 0 0 1-.302-1.863 4.109 4.109 0 0 1 .613-1.816 4.128 4.128 0 0 1 1.863-.302 4.109 4.109 0 0 1 1.816.613 4.128 4.128 0 0 1 .302 1.863 4.109 4.109 0 0 1-.613 1.816z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                    How can I help you today?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Ask me anything about Chris' background, experience, and skills
                  </p>
                </div>

                {/* Example questions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <button
                    onClick={() => handleClickQuestion('What did Chris study at University?')}
                    className="p-4 text-left border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="font-medium text-gray-900 dark:text-white mb-1">
                      Education
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      What did Chris study at University?
                    </div>
                  </button>
                  
                  <button
                    onClick={() => handleClickQuestion('What programming languages is Chris proficient in?')}
                    className="p-4 text-left border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="font-medium text-gray-900 dark:text-white mb-1">
                      Technical Skills
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      What programming languages is Chris proficient in?
                    </div>
                  </button>
                  
                  <button
                    onClick={() => handleClickQuestion('What did Chris learn in his software engineering internship at Sincidium?')}
                    className="p-4 text-left border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="font-medium text-gray-900 dark:text-white mb-1">
                      Work Experience
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Tell me about Chris' internship at Sincidium
                    </div>
                  </button>
                  
                  <button
                    onClick={() => handleClickQuestion('What projects has Chris worked on?')}
                    className="p-4 text-left border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="font-medium text-gray-900 dark:text-white mb-1">
                      Projects
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      What projects has Chris worked on?
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              /* Chat messages */
              <ul ref={chatParent} className="max-w-3xl mx-auto px-4 py-6 space-y-6">
                {messages.map((m, index) => (
                  <li key={index} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {/* Avatar */}
                      <div className={`flex-shrink-0 ${m.role === 'user' ? 'ml-3' : 'mr-3'}`}>
                        {m.role === 'user' ? (
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <User size={16} className="text-white" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.888 4.73a5.985 5.985 0 0 0-2.904 6.51 6.046 6.046 0 0 0 .516 4.91 6.046 6.046 0 0 0 6.51 2.9 6.065 6.065 0 0 0 10.368-2.719 5.985 5.985 0 0 0 2.904-6.51zm-6.772 4.672a4.109 4.109 0 0 1-1.816.613 4.128 4.128 0 0 1-1.863-.302 4.109 4.109 0 0 1-1.816-.613 4.128 4.128 0 0 1-.302-1.863 4.109 4.109 0 0 1 .613-1.816 4.128 4.128 0 0 1 1.863-.302 4.109 4.109 0 0 1 1.816.613 4.128 4.128 0 0 1 .302 1.863 4.109 4.109 0 0 1-.613 1.816z"/>
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      {/* Message content */}
                      <div className={`rounded-2xl px-4 py-3 ${
                        m.role === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
                      </div>
                    </div>
                  </li>
                ))}
                
                {error && (
                  <li className="flex justify-center">
                    <div className="bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3 max-w-md">
                      <p className="text-red-800 dark:text-red-200 text-sm text-center">⚠️ {error}</p>
                    </div>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <form onSubmit={handleFormSubmit} ref={formRef} className="relative">
            <div className="flex items-end space-x-3">
              <div className="flex-1 relative">
                <Textarea
                  value={input}
                  placeholder="Message Chris AI..."
                  onChange={handleInputChange}
                  onKeyDown={handleTextareaKeyDown}
                  className="min-h-[44px] max-h-32 resize-none border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent pr-12"
                  style={{ touchAction: 'manipulation' }}
                />
                <Button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-2 bottom-2 w-8 h-8 rounded-lg bg-green-500 hover:bg-green-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} className="text-white" />
                </Button>
              </div>
            </div>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            Chris AI can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
}