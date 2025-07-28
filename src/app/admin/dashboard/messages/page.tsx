'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, UserCircle2, MessageCircle } from 'lucide-react';

const messages = [
  { id: 1, from: 'Ashmit', content: 'Hey, I loved your portfolio!', time: '2:15 PM' },
  { id: 2, from: 'You', content: 'Thanks a lot! Appreciate it 🙌', time: '2:17 PM' },
  { id: 3, from: 'Ashmit', content: 'Do you offer freelance work?', time: '2:18 PM' },
  { id: 4, from: 'You', content: 'Yes, feel free to send details here.', time: '2:20 PM' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut' as const} },
};

const MessagesPage = () => {
  const [input, setInput] = useState('');

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0c0c0c] to-[#1b1b1f] py-12 px-4 sm:px-6 md:px-10 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">

        {/* Left Sidebar: Conversations */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md p-4 h-[calc(100vh-8rem)] overflow-y-auto"
        >
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <MessageCircle className="text-teal-400" /> Messages
          </h2>

          <ul className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <li
                key={i}
                className="bg-white/5 hover:bg-white/10 transition rounded-lg p-3 cursor-pointer border border-transparent hover:border-white/10"
              >
                <div className="flex items-center gap-3">
                  <UserCircle2 className="w-8 h-8 text-white/60" />
                  <div>
                    <p className="text-sm font-medium">Ashmit Singh</p>
                    <p className="text-xs text-gray-400">Click to view chat</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Chat Panel */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full md:w-2/3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md h-[calc(100vh-8rem)] flex flex-col"
        >
          <div className="p-4 border-b border-white/10">
            <h3 className="text-lg font-bold">Ashmit Singh</h3>
            <p className="text-xs text-gray-400">Online</p>
          </div>

          {/* Messages list */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
            {messages.map((msg, idx) => (
              <motion.div
                key={msg.id}
                variants={item}
                className={`max-w-[80%] px-4 py-3 rounded-xl text-sm shadow-md backdrop-blur-md ${
                  msg.from === 'You'
                    ? 'ml-auto bg-emerald-500/10 border border-emerald-400/20'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <p className="font-medium">{msg.content}</p>
                <p className="text-xs text-gray-400 mt-1 text-right">{msg.time}</p>
              </motion.div>
            ))}
          </div>

          {/* Input Box */}
          <div className="border-t border-white/10 p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (input.trim()) {
                  // Add your send logic here
                  setInput('');
                }
              }}
              className="flex items-center gap-3"
            >
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border border-white/10 rounded-xl px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-xl transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessagesPage;
