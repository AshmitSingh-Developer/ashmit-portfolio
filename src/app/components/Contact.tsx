'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { motion, useInView } from 'framer-motion';

import emailjs from '@emailjs/browser';

import { toast } from '@/lib/toast';

import PageHeader from './parts/PageHeader';
import IrisGateCard from './parts/ContactIrisGate'

const todayDate = new Date().toDateString();
const currentYear =  new Date().getFullYear();


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState('idle');
  const [emailError, setEmailError] = useState('');

  // Simple refs for intersection observer
  const formCardRef = useRef(null);
  const infoCardRef = useRef(null);
  const socialCardRef = useRef(null);
  const availableCardRef = useRef(null);

  // Optimized useInView with larger threshold for better performance
  const formInView = useInView(formCardRef, { once: true, margin: "-50px" });
  const infoInView = useInView(infoCardRef, { once: true, margin: "-50px" });
  const socialInView = useInView(socialCardRef, { once: true, margin: "-50px" });
  const availableInView = useInView(availableCardRef, { once: true, margin: "-50px" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      setEmailStatus('idle');
    }
  };

  // Debounced email validation
  useEffect(() => {
    const timer = setTimeout(async () => {
      const email = formData.email.trim();
      if (!email) return;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailStatus('invalid');
        setEmailError('Please enter a valid email format.');
        return;
      }

      try {
        setEmailStatus('validating');
        const res = await fetch(
          `https://emailvalidation.abstractapi.com/v1/?api_key=a8173eb2d8f2478e9ee9c5e3314947bb&email=${encodeURIComponent(email)}`
        );
        const data = await res.json();

        if (data.deliverability !== 'DELIVERABLE' || data.is_disposable_email?.value) {
          setEmailStatus('invalid');
          setEmailError("Your email doesn't look right. Please enter a valid one.");
        } else {
          setEmailStatus('valid');
          setEmailError('');
        }
      } catch (err) {
        console.error('Email validation API failed:', err);
        setEmailStatus('valid');
        setEmailError('');
      }
    }, 800); // Increased debounce time

    return () => clearTimeout(timer);
  }, [formData.email]);

  const handleSubmit = async () => {
    const { name, email, subject, message } = formData;
   
    // Check if all fields are empty
    if (!name.trim() && !email.trim() && !subject.trim() && !message.trim()) {
      toast.error('Please complete the form before submitting.');
      return;
    }
    // Check if individual fields are empty
    if (!name.trim()) {
      toast.error('Please enter your name.');
      return;
    }
    if (!email.trim()) {
      toast.error('Please enter your email.');
      return;
    }  
    if (!subject.trim()) {
      toast.error('Please add a subject to your message.');
      return;
    }
    if (!message.trim()) {
      toast.error('Don’t forget to write your message.');
      return;
    }
    if (emailStatus === 'invalid') {
      toast.error('The email address entered is not valid. Please check and try again.');
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_qovrkwj',
        'template_0w3jp87',
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          submission_date: todayDate,
          current_year: currentYear,
        },
        'yyvp-66Vcp3hTfJ3f'
      );

      toast.success('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (emailError) {
      console.error('EmailJS error:', emailError);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simplified, optimized animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const, // Optimized easing
        staggerChildren: 0.05 // Reduced stagger
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }
    }
  };

  const socialVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: i * 0.08, // Reduced delay
      }
    })
  };

  const contactItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: i * 0.1,
      }
    })
  };

  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center py-16 px-6 sm:px-12 md:px-20 lg:px-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
       <div>
        <PageHeader 
        subtitle="Get in Touch" 
        title="Contact Me" 
      />
       </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Contact Form Card */}
          <motion.div 
            ref={formCardRef}
            className="lg:col-span-3 p-8 rounded-2xl shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ 
              y: -2,
              transition: { duration: 0.2 } 
            }}
          >
            <motion.h4 
              className="text-xl unselectable font-semibold text-white mb-6"
              variants={itemVariants}
            >
              Send Me a Message
            </motion.h4>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block unselectable text-sm font-medium text-gray-200 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3  bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200" 
                    placeholder="Your name" 
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block unselectable text-sm font-medium text-gray-200 mb-2">
                    Your Email
                  </label>
                  <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200" 
                    placeholder="your@email.com" 
                  />
                  {emailStatus === 'invalid' && (
                    <motion.p 
                      className="text-sm text-rose-400 mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {emailError}
                    </motion.p>
                  )}
                  {emailStatus === 'validating' && (
                    <motion.p 
                      className="text-sm text-cyan-400 mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      Validating email...
                    </motion.p>
                  )}
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block unselectable text-sm font-medium text-gray-200 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200" 
                  placeholder="What's this about?" 
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block unselectable text-sm font-medium text-gray-200 mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={9} 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none" 
                  placeholder="Tell me about your project or just say hi!"
                  required
                />
              </motion.div>
              
              <motion.button                  
                type="button"                  
                disabled={isSubmitting || emailStatus === 'invalid' || emailStatus === 'validating'}                 
                onClick={handleSubmit}                 
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-Helvetica rounded-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"                 
                variants={itemVariants}                 
                whileHover={{ scale: 1.01 }}                 
                whileTap={{ scale: 0.99 }}               
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300" />
                
                <span className="relative z-10">                   
                  {isSubmitting ? 'Sending...' : 'Send Message'}                 
                </span>                 
                
                {isSubmitting && (                   
                  <motion.div                     
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg opacity-30"                     
                    initial={{ x: '-100%' }}                     
                    animate={{ x: '100%' }}                     
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}                   
                  />                 
                )}               
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contact Information Card */}
            <motion.div 
              ref={infoCardRef}
              className="p-8 rounded-2xl shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 } 
              }}
            >
              <motion.h4 
                className="text-xl unselectable font-semibold text-white mb-6"
                variants={itemVariants}
              >
                Contact Information
              </motion.h4>
              
              <div className="space-y-5">
                {[
                  { icon: MdPhone, text: "+123 456 7890" },
                  { icon: MdOutlineEmail, text: "ashmit25092001singh@gmail.com" },
                  { icon: MdLocationOn, text: "India" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                      variants={contactItemVariants}
                      custom={index}
                      whileHover={{ 
                        x: 4,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="p-2 rounded-full bg-cyan-400/10">
                        <Icon size={16} className="text-cyan-400" />
                      </div>
                      <span>{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Follow Me Card */}
            <motion.div 
              ref={socialCardRef}
              className="p-8 rounded-2xl shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
              initial="hidden"
              animate={socialInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 } 
              }}
            >
              <motion.h4 
                className="text-xl unselectable font-semibold text-white mb-6"
                variants={itemVariants}
              >
                Follow Me
              </motion.h4>
              {/* Social links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: FaLinkedinIn, label: "LinkedIn", color: "from-blue-500 to-blue-600", glowColor: "shadow-blue-500/50" },
                  { icon: FaGithub, label: "GitHub", color: "from-gray-600 to-gray-700", glowColor: "shadow-gray-400/50" },
                  { icon: FaXTwitter, label: "X (Twitter)", color: "from-gray-700 to-gray-900", glowColor: "shadow-gray-300/50" },
                  { icon: FaInstagram, label: "Instagram", color: "from-pink-500 to-purple-600", glowColor: "shadow-pink-500/50" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center gap-3 p-4 rounded-xl text-gray-300 
                        border border-white/40 backdrop-blur-md bg-black/30
                        hover:border-cyan-400/80 hover:bg-black/50 hover:text-white
                        hover:shadow-xl hover:${social.glowColor}
                        relative overflow-hidden group
                        transition-all duration-300 ease-out
                        transform-gpu will-change-transform
                      `}
                      variants={socialVariants}
                      custom={index}
                      whileHover={{ 
                        scale: 1.03,
                        y: -2,
                        transition: { 
                          duration: 0.15,
                          ease: "easeOut"
                        }
                      }}
                      whileTap={{ 
                        scale: 0.97,
                        transition: { duration: 0.1 }
                      }}
                    >
                      {/* Animated gradient background */}
                      <div className={`
                        absolute inset-0 bg-gradient-to-r ${social.color} 
                        opacity-0 group-hover:opacity-25 
                        transition-opacity duration-300 ease-out
                      `} />
                      
                      {/* Shimmer effect */}
                      <div className="
                        absolute inset-0 
                        bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        -skew-x-12 -translate-x-full
                        group-hover:translate-x-full
                        transition-transform duration-700 ease-out
                      " />
                      
                      {/* Content */}
                      <div className="relative z-10 flex items-center gap-3">
                        <Icon 
                          size={16} 
                          className="
                            group-hover:text-cyan-400 group-hover:scale-110
                            transition-all duration-300 ease-out
                            drop-shadow-sm
                          " 
                        />
                        <span className="
                          text-sm font-medium 
                          group-hover:text-white group-hover:font-semibold
                          transition-all duration-300 ease-out
                          drop-shadow-sm
                        ">
                          {social.label}
                        </span>
                      </div>
                      
                      {/* Glow ring effect */}
                      <div className="
                        absolute inset-0 rounded-xl 
                        ring-0 group-hover:ring-2 group-hover:ring-cyan-400/30
                        transition-all duration-300 ease-out
                      " />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Available Card */}
            <IrisGateCard 
              availableCardRef={availableCardRef}
              availableInView={availableInView}
              cardVariants={cardVariants}
              itemVariants={itemVariants}
            />
            {/* <motion.div 
              ref={availableCardRef}
              className="p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-lg border border-green-400/20 text-center hover:border-green-400/40 transition-colors duration-300"
              initial="hidden"
              animate={availableInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 } 
              }}
            >
              <motion.div 
                className="flex unselectable items-center justify-center gap-3 mb-3"
                variants={itemVariants}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                </div>
                <h4 className="text-lg unselectable font-semibold text-white">Available for new opportunities</h4>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 unselectable text-sm"
                variants={itemVariants}
              >
                I am actively seeking new roles and collaborations.
              </motion.p>
            </motion.div> */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;