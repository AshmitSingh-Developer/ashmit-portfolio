'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navbar from '../../../components/important/PagesNavbar';
import Footer from '../../../components/important/PortfolioFooter';
import { ChevronDown, Check } from 'lucide-react';

const projects = ['Portfolio Website', 'Admin Panel', 'Contact Form', 'Project Showcase', 'Hire Me Form','Other','Suggestion Page'];

export default function SuggestPage() {
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({ name: '', project: '', message: '' });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProjectSelect = (project: string) => {
    setForm({ ...form, project });
    setDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Suggestion submitted:', form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-white overflow-x-hidden">
      <Navbar />

      <section className="w-full px-6 py-20 text-center max-w-6xl mx-auto">
        
          <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 pb-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
         Let&apos;s Build Something Great
        </motion.h1>
        

        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-10">
         I&apos;m passionate about creating fast, beautiful, and user-friendly websites. Whether it&apos;s a portfolio, SaaS dashboard, or landing page. I bring both design and code together to deliver value. Let&apos;s work together to turn your vision into reality. Help me improve! Share your suggestions about any project you&apos;ve seen in my portfolio.
        </p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl text-white shadow-md transition-all"
            onClick={() => setFormVisible(!formVisible)}
          >
            {formVisible ? '   Hide Form    ' : 'Suggest Something'}
          </Button>
          <Button
            className="px-6 py-3 bg-white text-black hover:bg-neutral-200 rounded-xl shadow-md transition-all"
            onClick={() => window.open('https://ashmit-portfolio-gamma.vercel.app/', '_blank')}
          >
            Explore Ashmit
          </Button>
        </motion.div>

        <AnimatePresence>
          {formVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden w-full flex justify-center"
            >
              <form
                onSubmit={handleSubmit}
                className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl max-w-xl w-full shadow-xl space-y-6 transition-all text-left"
              >
                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-sm text-gray-300 font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Custom Dropdown */}
                <div className="space-y-1 relative">
                  <label className="block text-sm text-gray-300 font-medium">Regarding Project</label>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex justify-between items-center shadow-2xs backdrop-blur-[20px] bg-white/10 px-4 py-3 rounded-lg border border-white/10 text-white  hover:bg-white/20 transition-all"
                  >
                    <span>{form.project || 'Select a project'}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute z-10 mt-2 w-full bg-gradient-to-br from-[#05050f] to-[#0a0f19] bg-opacity-90 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl overflow-hidden"
                      >
                        {projects.map((proj) => (
                          <li
                            key={proj}
                            onClick={() => handleProjectSelect(proj)}
                            className="px-4 py-3 hover:bg-white/10 hover:px-2 cursor-pointer flex items-center justify-between transition-all text-white"
                          >
                            {proj}
                            {form.project === proj && <Check className="h-4 w-4 text-cyan-400" />}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-sm text-gray-300 font-medium">Your Suggestion</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-white/10 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="Write your suggestion here..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
                  >
                    Submit Suggestion
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
}
