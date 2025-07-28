'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/important/PagesNavbar';
import Footer from '@/components/important/PortfolioFooter';

const projects = ['Portfolio Website', 'Admin Panel', 'Contact Form', 'Project Showcase', 'Other'];

export default function SuggestPage() {
  const [selectedProject, setSelectedProject] = useState('');
  const [form, setForm] = useState({ name: '', project: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Suggestion submitted:', form);
    // Send to API or DB here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-white overflow-x-hidden">
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Let&apos;s Build Something Great
        </motion.h1>

        <p className="text-center max-w-2xl text-gray-300 text-lg mb-12 px-4">
          I&apos;m passionate about creating fast, beautiful, and user-friendly websites.
          Whether it&apos;s a portfolio, SaaS dashboard, or landing page. I bring both design and code together to deliver value. Let&apos;s work together to turn your vision into reality. Help me improve! Share your suggestions about any project you&apos;ve seen in my portfolio.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl max-w-xl w-full shadow-lg space-y-6 transition-all"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>
            <label className="block text-sm mb-1 text-gray-300">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Project</label>
            <select
              name="project"
              required
              value={form.project}
              onChange={handleChange}
              className="w-full bg-white/10 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="" disabled>Select a project</option>
              {projects.map((proj) => (
                <option key={proj} value={proj}>
                  {proj}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Your Suggestion</label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-white/10 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Write your suggestion here..."
            />
          </div>

          <div className="text-center">
            <Button type="submit" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl text-white shadow-md transition-all">
              Submit Suggestion
            </Button>
          </div>
        </motion.form>
      </section>
      <Footer />
    </div>
  );
}
