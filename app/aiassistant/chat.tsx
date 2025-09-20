/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';
import { useChat } from '@ai-sdk/react';
import { useRef, useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { BotMessageSquare, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Chat({ isDarkMode = false }: { isDarkMode?: boolean }) {
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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Clear any previous errors
    handleSubmit(event);
  };

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });

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
      e.preventDefault(); // Prevent new line in textarea
      setShowExampleQuestions(false);
      handleSubmit(e); // Call handleSubmit function on Enter press and pass the event object
    }
  };

  return (
    <main className={`flex flex-col w-full h-screen max-h-dvh transition-all duration-700 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
    }`}>
      <section className="container px-4 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex mt-5 items-center"
        >
          <BotMessageSquare size={47} className={`pt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <div>
            <div className={`ml-2 text-xl font-semibold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Chris&apos; AI Assistant
            </div>
            <div className={`text-xs ml-2 font-semibold transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              built by Chris
            </div>
          </div>
        </motion.div>
        <ul
          ref={chatParent}
          className="h-96 flex-grow rounded-xl overflow-y-auto flex flex-col gap-4 p-4"
        >
          <motion.li 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-end"
          >
            <div className={`rounded-2xl py-4 px-6 text-sm max-w-[70%] break-words shadow-md backdrop-blur-sm transition-all duration-500 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500/20' 
                : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-200/30'
            }`}>
              I am Chris&apos; AI assistant. Ask me anything about Chris&apos; educational
              background, work experience and skills.
            </div>
          </motion.li>
          <AnimatePresence mode="popLayout">
            {messages.map((m, index) => (
              <motion.div 
                key={m.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeOut",
                  delay: index * 0.1 
                }}
              >
                {m.role === 'user' ? (
                  <li className="flex justify-start">
                    <div className={`rounded-2xl py-4 px-6 text-sm max-w-[70%] break-words shadow-md backdrop-blur-sm transition-all duration-500 ${
                      isDarkMode 
                        ? 'bg-gray-800/70 text-white border border-gray-700/30' 
                        : 'bg-white/80 text-gray-800 shadow-gray-200/30 border border-gray-200/30'
                    }`}>
                      {m.content}
                    </div>
                  </li>
                ) : (
                  <li className="flex justify-end">
                    <div className={`rounded-2xl py-4 px-6 text-sm max-w-[70%] break-words shadow-md backdrop-blur-sm transition-all duration-500 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border border-blue-500/20' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-200/30'
                    }`}>
                      {m.content}
                    </div>
                  </li>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {error && (
            <motion.li 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-center"
            >
              <div className="rounded-xl py-3 px-5 bg-red-500 text-sm text-white max-w-[90%] break-words text-center shadow-lg">
                ⚠️ {error}
              </div>
            </motion.li>
          )}
        </ul>
      </section>

      <footer className="p-6 mb-4 w-full max-w-4xl mx-auto">
        <AnimatePresence>
          {showExampleQuestions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.section className="mb-4 gap-4 grid md:grid-cols-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    handleClickQuestion('What did Chris Study at University?')
                  }
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm border shadow-lg hover:shadow-xl ${
                    isDarkMode 
                      ? 'border-gray-700/50 bg-gray-800/70 hover:bg-gray-700/70' 
                      : 'border-gray-200/50 bg-white/80 hover:bg-gray-50/80'
                  }`}
                >
                  <div className={`font-semibold mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>💡 Study Background</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    What did Chris Study at University?
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    handleClickQuestion(
                      'What programming language is Chris proficient in?'
                    )
                  }
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm border shadow-lg hover:shadow-xl ${
                    isDarkMode 
                      ? 'border-gray-700/50 bg-gray-800/70 hover:bg-gray-700/70' 
                      : 'border-gray-200/50 bg-white/80 hover:bg-gray-50/80'
                  }`}
                >
                  <div className={`font-semibold mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`}>💻 Technical Skills</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    What programming language is Chris proficient in?
                  </div>
                </motion.div>
              </motion.section>
              <motion.section className="mb-6 gap-4 grid md:grid-cols-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    handleClickQuestion(
                      'What did Chris Learn in his software engineering internship at Sincidium?'
                    )
                  }
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm border shadow-lg hover:shadow-xl ${
                    isDarkMode 
                      ? 'border-gray-700/50 bg-gray-800/70 hover:bg-gray-700/70' 
                      : 'border-gray-200/50 bg-white/80 hover:bg-gray-50/80'
                  }`}
                >
                  <div className={`font-semibold mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>🏢 Work Experience</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    What did Chris Learn in his software engineering internship at Sincidium?
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    handleClickQuestion(
                      'What did Chris Learn during his internship as a frontend developer at Webby Group?'
                    )
                  }
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm border shadow-lg hover:shadow-xl ${
                    isDarkMode 
                      ? 'border-gray-700/50 bg-gray-800/70 hover:bg-gray-700/70' 
                      : 'border-gray-200/50 bg-white/80 hover:bg-gray-50/80'
                  }`}
                >
                  <div className={`font-semibold mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-orange-400' : 'text-orange-600'
                  }`}>🎨 Frontend Development</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    What did Chris Learn during his internship as a frontend developer at Webby Group?
                  </div>
                </motion.div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleFormSubmit}
          className="flex w-full max-w-4xl mx-auto items-end gap-3"
          ref={formRef}
        >
          <div className="flex-1">
            <Textarea
              className={`min-h-[60px] max-h-[120px] rounded-xl border-0 shadow-lg backdrop-blur-sm transition-all duration-300 resize-none ${
                isDarkMode 
                  ? 'bg-gray-800/70 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/50' 
                  : 'bg-white/80 text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500/50'
              }`}
              value={input}
              placeholder="Ask me anything about Chris..."
              onChange={handleInputChange}
              onKeyDown={handleTextareaKeyDown}
              style={{ touchAction: 'manipulation' }}
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              type="submit" 
              className={`h-[60px] w-[60px] rounded-xl shadow-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500'
              }`}
            >
              <Send className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.form>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`text-xs flex mt-4 mb-2 justify-center transition-colors duration-300 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-600'
          }`}
        >
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Response from my AI Assistant does not represent my stance.
          </span>
        </motion.div>
      </footer>
    </main>
  );
}
