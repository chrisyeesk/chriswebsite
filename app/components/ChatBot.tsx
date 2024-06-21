'use client';
import { useState, useEffect } from 'react';
import { Chat } from './chat';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatCloud = () => {
  return (
    <motion.div
      className="fixed right-[73px] bottom-[100px] bg-white w-56 border border-gray-300 shadow-lg rounded-lg p-4 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <p>Chat with my AI chatbot to know more about me!</p>
    </motion.div>
  );
};

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showChatCloud, setShowChatCloud] = useState(false);

  const handleChatOpen = () => {
    setIsChatOpen(true);
    setButtonDisabled(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
    setButtonDisabled(false);
  };

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowChatCloud(true);
      const hideTimer = setTimeout(() => {
        setShowChatCloud(false);
      }, 5000);
      return () => clearTimeout(hideTimer);
    }, 5000);

    return () => clearTimeout(showTimer);
  }, []);

  const chatWindowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="relative">
      {/* Chat Window */}
      {isChatOpen && (
        <motion.div
          className="fixed bottom-5 right-5 bg-white w-[340px] sm:w-[380px] h-[450px] border border-gray-300 shadow-lg rounded-lg p-4 flex flex-col z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={chatWindowVariants}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={handleChatClose}
            className="self-end rounded-full focus:outline-none"
          >
            <X />
          </button>
          <div className="flex-1 mt-2">
            <Chat />
          </div>
        </motion.div>
      )}

      {/* Chat Button */}
      {!buttonDisabled && (
        <motion.button
          onClick={handleChatOpen}
          className="fixed bottom-12 right-7 bg-gradient-to-br from-purple-500 to-pink-500 transform transition-transform duration-300 hover:-translate-y-1 text-white p-4 rounded-full shadow-lg focus:outline-none z-50"
        >
          <MessageCircle size={32} strokeWidth={3} absoluteStrokeWidth />
        </motion.button>
      )}

      {/* Chat Cloud */}
      <AnimatePresence>
        {showChatCloud && !isChatOpen && <ChatCloud />}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
