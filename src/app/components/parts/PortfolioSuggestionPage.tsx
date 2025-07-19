'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SuggestPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24 bg-gradient-to-b from-black via-neutral-900 to-black text-white"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Let's Build Something Great
      </motion.h1>

      <motion.p
        className="text-center max-w-2xl text-lg text-gray-300 mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        I&apos;m passionate about creating fast, beautiful, and user-friendly websites.
        Whether it's a portfolio, SaaS dashboard, or landing page &lsquo; I bring both design and code together to deliver value. Let&apos;s work together to turn your vision into reality.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link href="/contact">
          <Button
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white text-base rounded-xl transition-all shadow-md"
          >
            Send a Message
          </Button>
        </Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="px-6 py-3 border-white text-white text-base rounded-xl hover:bg-white hover:text-black transition-all"
          >
            View Resume
          </Button>
        </a>
      </motion.div>
    </motion.section>
  );
}
