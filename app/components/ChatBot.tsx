'use client';
import { useState, useEffect } from 'react';
import { Chat } from './chat';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatCloud = () => {
  return (
    <motion.div
      className="fixed 2xl:text-2xl 2xl:w-[360px] 2xl:h-[100px] 2xl:pt-4 2xl:px-5 2xl:right-[150px] 2xl:bottom-[160px] right-[73px] bottom-[100px] bg-white w-56 border border-gray-300 shadow-lg rounded-lg p-4 z-50"
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
    const audio = new Audio('/pop.mp3');
    audio.load();

    const showTimer = setTimeout(() => {
      if (!isChatOpen) {
        setShowChatCloud(true);
        audio.play();
      }

      const hideTimer = setTimeout(() => {
        setShowChatCloud(false);
      }, 5000);
      return () => clearTimeout(hideTimer);
    }, 5000);

    return () => clearTimeout(showTimer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          className="fixed bottom-5 right-5 bg-white w-[340px] 2xl:w-[600px] 2xl:h-[750px] sm:w-[380px] h-[450px] border border-gray-300 shadow-lg rounded-lg p-4 flex flex-col z-50"
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
            <X className="2xl:w-10 2xl:h-8"/>
          </button>
          <div className="flex-1 mt-2">
            <Chat />
          </div>
        </motion.div>
      )}

      {/* Small Chat Button (hidden on 2XL and above) */}
      {!buttonDisabled && (
        <motion.button
          onClick={handleChatOpen}
          className="fixed bottom-12 right-7 bg-gradient-to-br from-purple-500 to-pink-500 transform transition-transform duration-300 hover:-translate-y-1 text-white p-4 rounded-full shadow-lg focus:outline-none z-50 block 2xl:hidden"
        >
          <MessageCircle size={32} strokeWidth={3} absoluteStrokeWidth />
        </motion.button>
      )}

      {/* Large Chat Button (visible only on 2XL and above) */}
      {!buttonDisabled && (
        <motion.button
          onClick={handleChatOpen}
          className="fixed bottom-20 right-20 bg-gradient-to-br from-purple-500 to-pink-500 transform transition-transform duration-300 hover:-translate-y-1 text-white p-5 rounded-full shadow-lg focus:outline-none z-50 hidden 2xl:block"
        >
          <MessageCircle size={35} strokeWidth={5} absoluteStrokeWidth />
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
