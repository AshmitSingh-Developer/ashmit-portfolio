'use client';
import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import Footer from './PortfolioFooter';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SpaceBackground from './HireMePageBG';
import Navbar from '../PagesNavbar';
import Image from 'next/image';

import { toast } from '@/lib/toast';

// For CustomDropdown component
interface CustomDropdownProps {
  placeholder: string;
  options: string[];
  selected: string | null;
  setSelected: (value: string) => void;
  id: string;
  className?: string;
}
// For InputGroup component
interface InputGroupProps {
  label: string | React.ReactNode;
  children: React.ReactNode;
  id: string;
}
interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  company: string;
  message: string;
  suitableDate: Date | null;
  time: string | null;
  communication: string | null;
}
interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  responseTime: string;
  image: string;
  upcomingProject: { name: string; url: string };
  socialLinks: { twitter: string; linkedin: string; github: string };
}

interface UseFormStateReturn {
  formData: FormData;
  updateField: (field: keyof FormData, value: FormData[]) => void;
  reset: () => void;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  emailStatus: 'idle' | 'validating' | 'invalid' | 'valid';
  emailError: string;
}


// Submit button
const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
  <motion.button
    variants={ANIMATION_VARIANTS.item}
    whileHover={!isSubmitting ? "hover" : {}}
    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
    type="submit"
    disabled={isSubmitting}
    className={`w-full text-black text-[18px] font-Helvetica py-2 px-6 rounded-md transition-opacity ${
      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    style={{
      backgroundSize: '200% 200%',
      backgroundImage: 'linear-gradient(45deg, #007bff, #00c851, #007bff)',
    }}
    animate={!isSubmitting ? {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    } : {}}
    transition={{
      duration: 2,
      ease: 'linear',
      repeat: Infinity,
    }}
  >
    {isSubmitting ? 'Sending...' : 'Send Message'}
  </motion.button>
);

// Constants
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  },
  item: { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  option: {
    initial: { backgroundColor: 'rgba(31, 41, 55, 0)', scale: 1 },
    hover: { backgroundColor: 'rgba(55, 65, 81, 1)', scale: 1.03 },
  },
};

const FORM_OPTIONS = {
  communication: ['Email', 'Phone Call', 'Video Call', 'Text Message'],
  time: ['Morning (9 AM - 12 PM)', 'Afternoon (12 PM - 5 PM)', 'Evening (5 PM - 8 PM)', 'Anytime (9 PM - 11 PM)'],
};

const INPUT_STYLE = "w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200";

const PROFILE_DATA: ProfileData = {
  name: "Ashmit Singh",
  title: "Full Stack Developer",
  subtitle: "Software Engineer",
  email: "ashmit@example.com",
  phone: "+91 XXXXX XXXXX",
  location: "India",
  status: "Available",
  responseTime: "Within 24hrs",
  image: "/my-avatar2.png",
  upcomingProject: { name: "Ashmit.ai", url: "https://ashmit.ai" },
  socialLinks: {
    twitter: "#",
    linkedin: "#",
    github: "#"
  }
};

// Utility Components
const StatusIndicator = memo(() => (
  
  <motion.div
    className="relative"
    animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="w-2 h-2 bg-green-500 rounded-full" />
    <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping" />
  </motion.div>
));
StatusIndicator.displayName = "StatusIndicator";

const SocialIcon = memo(({ href, children, label }: { href: string; children: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors group"
    aria-label={label}
  >
    {children}
  </a>
));
SocialIcon.displayName = "SocialIcon";
const ContactItem = memo(({ icon, label, value, onClick }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  onClick?: () => void; 
}) => (
  <div 
    className="flex items-center gap-4 text-gray-300 hover:text-cyan-600 transition-colors duration-300 cursor-pointer"
    onClick={onClick}
  >
    <div className="p-2 rounded-full bg-cyan-400/10">{icon}</div>
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm text-white">{value}</p>
    </div>
  </div>
));
ContactItem.displayName = "ContactItem";
const StatusCard = memo(({ label, value, className = "" }: { label: string; value: string | React.ReactNode; className?: string }) => (
  <div 
    className={`flex unselectable items-center justify-between p-3 rounded-lg transition-all duration-300 ease-in-out ${className}`}
    style={{
      background: 'linear-gradient(145deg, rgba(10, 10, 20, 0.7), rgba(20, 20, 40, 0.7))',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    }}
  >
    <span className="text-sm text-gray-300">{label}</span>
    <div className="flex items-center gap-2">{value}</div>
  </div>
));
StatusCard.displayName = "StatusCard";

// Profile Components
const ProfileImage = memo(({ src, alt }: { src: string; alt: string }) => (
  <div className="relative mb-6">
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={144}
        height={144}
        className="w-36 h-36 rounded-full object-cover shadow-lg"
        loading="lazy"
      />
    </div>
    <div className="absolute inset-[-2px] rounded-full border-2 border-cyan-400/20 animate-pulse" />
  </div>
));
ProfileImage.displayName = "ProfileImage";

const ProfileInfo = memo(({ data }: { data: ProfileData }) => (
  <div className="text-center unselectable">
    <h2 className="text-2xl font-bold  overflow-visible bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text mb-2 font-Helvetica">
      {data.name}
    </h2>
    <p className="text-lg text-cyan-400 font-medium mb-1">{data.title}</p>
    <p className="text-sm text-gray-400">{data.subtitle}</p>
  </div>
));
ProfileInfo.displayName = "ProfileInfo";

const ContactInfo = memo(({ data, onCopy }: { data: ProfileData; onCopy: (text: string) => void }) => {
  const icons = {
    email: (
      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    phone: (
      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    location: (
      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  };

  return (
    <div className="w-full space-y-3">
      <ContactItem 
        icon={icons.email} 
        label="Email" 
        value={data.email} 
        onClick={() => onCopy(data.email)} 
      />
      <ContactItem 
        icon={icons.phone} 
        label="Phone" 
        value={data.phone} 
        onClick={() => onCopy(data.phone)} 
      />
      <ContactItem 
        icon={icons.location} 
        label="Location" 
        value={data.location} 
      />
    </div>
  );
});
ContactInfo.displayName = "ContactInfo";

const SocialLinks = memo(({ links }: { links: ProfileData['socialLinks'] }) => (
  <div className="flex justify-center gap-4">
    <SocialIcon href={links.twitter} label="Twitter">
      <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    </SocialIcon>
    <SocialIcon href={links.linkedin} label="LinkedIn">
      <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </SocialIcon>
    <SocialIcon href={links.github} label="GitHub">
      <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </SocialIcon>
  </div>
));
SocialLinks.displayName = "SocialLinks";

// Optimized Dropdown Component
const CustomDropdown = memo(({ placeholder, options, selected, setSelected, id, className = '' }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleToggle = useCallback(() => setIsOpen(prev => !prev), []);
  const handleSelect = useCallback((option) => {
    setSelected(option);
    setIsOpen(false);
  }, [setSelected]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <motion.div
        id={id}
        tabIndex={0}
        className={`${INPUT_STYLE} ${!selected ? 'text-gray-400' : 'text-white'} ${className} flex justify-between items-center cursor-pointer`}
        onClick={handleToggle}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), handleToggle())}
        role="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {selected || placeholder}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>▼</motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full mt-2 bg-gray-800 rounded-md shadow-lg z-10 overflow-hidden dropdown-options-glassy"
            role="listbox"
          >
            {options.map((option) => (
              <motion.div
                key={option}
                className="ml-1 p-2 font-Avertastd cursor-pointer"
                onClick={() => handleSelect(option)}
                variants={ANIMATION_VARIANTS.option}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2 }}
                role="option"
                aria-selected={selected === option}
              >
                {option}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

CustomDropdown.displayName = "CustomDropdown";

// Optimized InputGroup Component
const InputGroup = memo(({ label, children, id }: InputGroupProps) => (
  <motion.div variants={ANIMATION_VARIANTS.item} className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-300">
      {label}
    </label>
    {children}
  </motion.div>
));
InputGroup.displayName = "InputGroup";

// Profile Card Component
const ProfileCard = memo(({ data, onCopy, isMobile }: { 
  data: ProfileData; 
  onCopy: (text: string) => void; 
  isMobile?: boolean; 
}) => {
  const statusValue = (
    <>
      <StatusIndicator />
      <span className="text-sm text-green-400 font-medium">{data.status}</span>
    </>
  );
  ProfileCard.displayName = "ProfileCard";

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="z-10 md:hidden glassy flex flex-col items-center justify-center p-8 rounded-lg h-fit"
      >
        <ProfileImage src={data.image} alt="Profile" />
        <ProfileInfo data={data} />
        
        <div className="w-full mt-3.5  md:mt-0 space-y-4 mb-6">
          <StatusCard label="Status" value={statusValue} />
          <StatusCard label="Response Time" value={<span className="text-sm text-cyan-400 font-medium">{data.responseTime}</span>} />
        </div>

        <ContactInfo  data={data} onCopy={onCopy} />

        <div className="w-full mt-6 pt-6 border-t border-white/10">
          <SocialLinks links={data.socialLinks} />
        </div>
      </motion.div>
    );
  }

  return (
    <div className="hidden md:col-span-3 md:flex md:flex-col md:space-y-8">
      {/* Profile Image & Info Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glassy p-8 rounded-lg flex flex-col items-center justify-center"
      >
        <ProfileImage src={data.image} alt="Profile" />
        <ProfileInfo  data={data} />
        <div className="w-full mt-6 space-y-4">
          <StatusCard label="Status" value={statusValue} />
          <StatusCard label="Response Time" value={<span className="text-sm text-cyan-400 font-medium">{data.responseTime}</span>} />
        </div>
      </motion.div>

      {/* Contact Info Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="glassy p-8 rounded-lg w-full"
      >
        <h4 className="text-xl unselectable font-semibold text-white mb-6">Contact Information</h4>
        <ContactInfo data={data} onCopy={onCopy} />
      </motion.div>

      {/* Social Links Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="glassy p-8 rounded-lg w-full"
      >
        <h4 className="text-xl unselectable font-semibold text-white mb-6">Social Links</h4>
        <div className="w-full pt-2">
          <SocialLinks links={data.socialLinks} />
        </div>
      </motion.div>

      {/* More Info Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="glassy p-8 rounded-lg w-full space-y-4"
      >
        <h4 className="text-xl unselectable font-semibold text-white mb-6">More from {data.name.split(' ')[0]}</h4>
        <div className="w-full space-y-3">
          <a href={data.upcomingProject.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-300 hover:text-cyan-600 transition-colors duration-300 cursor-pointer group">
            <div className="p-2 rounded-full bg-cyan-400/10 group-hover:bg-cyan-500/20">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-white">Upcoming Project: {data.upcomingProject.name}</p>
            </div>
          </a>
          <a href="/suggestion-page" target="_blank" rel="noopener noreferrer" 
            className="flex items-center gap-4 text-gray-300 hover:text-cyan-600 transition-colors duration-300 cursor-pointer group">
            <div className="p-2 rounded-full bg-cyan-400/10 group-hover:bg-cyan-500/20">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-white">Suggest a feature for me</p>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
});

const useFormState = (): UseFormStateReturn => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '', email: '', mobile: '', company: '', message: '',
    suitableDate: null, time: null, communication: null,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'validating' | 'invalid' | 'valid'>('idle');
  const [emailError, setEmailError] = useState('');
 

const updateField = useCallback((field: keyof FormData, value: any) => {
  setFormData(prev => ({ ...prev, [field]: value }));
}, []);

  
  const reset = useCallback(() => {
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      company: '',
      message: '',
      suitableDate: null,
      time: null,
      communication: null,
    });
    setEmailStatus('idle');
    setEmailError('');
  }, []);

  // 🧠 Live email validation effect
useEffect(() => {
  if (!formData.email) {
    setEmailStatus("idle");
    setEmailError("");
    return;
  }

  setEmailStatus("validating");

  const timeout = setTimeout(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(formData.email.trim())) {
      setEmailStatus("valid");
      setEmailError("");
    } else {
      setEmailStatus("invalid");
      setEmailError("Please enter a valid email address");
    }
  }, 600);

  return () => clearTimeout(timeout);
}, [formData.email]);


  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    
    if (emailStatus === 'invalid') {
      toast.error("Please enter a valid email.");
      return;
    }

    if (formData.mobile.trim()) {
      const mobileRegex = /^\d{10}$/;
      if (!mobileRegex.test(formData.mobile)) {
        toast.error("Please enter a valid 10-digit mobile number");
        return;
      }
    }
    // ✅ Validate preferred date
    if (!formData.suitableDate) {
      toast.error("Please select a suitable date");
      return;
    }

    // ✅ Validate preferred time
    if (!formData.time) {
      toast.error("Please select a preferred time");
      return;
    }

    // ✅ Validate communication method
    if (!formData.communication) {
      toast.error("Please choose a communication method");
      return;
    }
 
    if (typeof formData.message !== 'string' || formData.message.trim() === '') {
      toast.error("Please enter your message");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData); // Debug log
      console.log('Message value:', formData.message, typeof formData.message);
      
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          suitableDate: formData.suitableDate?.toISOString() || null,
        }),
      });

      const result = await res.json();
      console.log('Server response:', result); // Debug log

      if (!res.ok) {
        throw new Error(result.error || `Server error: ${res.status}`);
      }

      toast.success("Message sent successfully!");
      reset(); // Reset the form
      
    } catch (err: any) {
      console.error('Submission error:', err);
      toast.error(err.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, reset,emailStatus]);

  return { formData, updateField, handleSubmit, isSubmitting, emailStatus, emailError };
};

// Main component
const HireMePage: React.FC = () => {
  const { formData, updateField, handleSubmit, isSubmitting ,emailStatus,emailError} = useFormState();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleCopy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToastMessage(`Copied: ${text}`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
      setToastMessage('Failed to copy.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }, []);

  return (
    <>
      <SpaceBackground />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 pt-12 overflow-hidden relative"
      >
        {/* Background gradients */}
        <div className="absolute inset-0 z-0 bg-gradient-radial from-blue-900/30 to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-4xl  py-8 z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
            {/* Profile Card */}
            
             {/* Profile Card - Mobile (Single Card) */}
            {/* Profile Card - Mobile (Single Card) */}
            <ProfileCard data={PROFILE_DATA} onCopy={handleCopy} isMobile />
            <ProfileCard data={PROFILE_DATA} onCopy={handleCopy} />
            

            {/* Form */}
            <motion.div
              variants={ANIMATION_VARIANTS.container}
              initial="hidden"
              animate="visible"
              className="glassy z-10 md:col-span-7"
            >
              <h2 className="text-3xl unselectable font-Helvetica font-bold mb-4 text-center">
                Let&apos;s Work Together
              </h2>

              <motion.form
                variants={ANIMATION_VARIANTS.container}
                className="space-y-6 unselectable"
                onSubmit={handleSubmit}
              >
                <InputGroup label="Full Name" id="fullName">
                  <motion.input
                    id="fullName"
                    variants={ANIMATION_VARIANTS.item}
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    className={INPUT_STYLE}
                    required
                  />
                </InputGroup>

                <InputGroup label="Email Address" id="email">
                  <motion.input
                    id="email"
                    variants={ANIMATION_VARIANTS.item}
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="Enter your email address"
                    className={INPUT_STYLE}
                    required
                  />
                      {emailStatus === 'invalid' && (
                        <motion.p className="text-sm text-rose-400 mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          {emailError}
                        </motion.p>
                      )}
                      {emailStatus === 'validating' && (
                        <motion.p className="text-sm text-cyan-400 mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          Validating email...
                        </motion.p>
                      )}
                 
                </InputGroup>

                <InputGroup
                  label={<span>Mobile Number <span className="text-xs text-gray-500">(optional)</span></span>}
                  id="mobile"
                >
                  <motion.input
                    id="mobile"
                    variants={ANIMATION_VARIANTS.item}
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => updateField('mobile', e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
                    maxLength={10}
                    placeholder="Enter your phone number"
                    className={INPUT_STYLE}
                  />
                </InputGroup>

                <InputGroup
                  label={<span>Company/Organization <span className="text-xs text-gray-500">(if applicable)</span></span>}
                  id="company"
                >
                  <motion.input
                    id="company"
                    variants={ANIMATION_VARIANTS.item}
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateField('company', e.target.value)}
                    placeholder="Enter company name"
                    className={INPUT_STYLE}
                  />
                </InputGroup>

                <InputGroup label="Suitable Date" id="suitableDate">
                  <DatePicker
                    selected={formData.suitableDate}
                    onChange={(date) => updateField('suitableDate', date)}
                    minDate={new Date()}
                    placeholderText="Select a date"
                    className={`${INPUT_STYLE} unselectable`}
                    calendarClassName="custom-datepicker-calendar"
                    dayClassName={() => "custom-datepicker-day"}
                    popperClassName="custom-datepicker-popper"
                    dateFormat="MMMM d, yyyy"
                  />
                </InputGroup>

                <InputGroup label="Best Time to Connect" id="time">
                  <CustomDropdown
                    id="time"
                    placeholder="Select a time"
                    options={FORM_OPTIONS.time}
                    selected={formData.time}
                    setSelected={(value) => updateField('time', value)}
                  />
                </InputGroup>

                <InputGroup label="Communication Method" id="communication">
                  <CustomDropdown
                    id="communication"
                    placeholder="Select a method"
                    className="placeholder-gray-400"
                    options={FORM_OPTIONS.communication}
                    selected={formData.communication}
                    setSelected={(value) => updateField('communication', value)}
                  />
                </InputGroup>

                <InputGroup label="Your Message" id="message">
                  <motion.textarea
                    id="message"
                    variants={ANIMATION_VARIANTS.item}
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Tell me about your project..."
                    className={`${INPUT_STYLE} min-h-[100px] resize-y`}
                    rows={11}
                  />
                </InputGroup>
                
              {/* Submit Button */}
              <SubmitButton isSubmitting={isSubmitting} />
               
              </motion.form>
            </motion.div>
          </div>
        </motion.div>

        

        <div className="z-10 w-full">
          <Footer />
        </div>
      </motion.div>

      <style jsx global>{`
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }
        
        .glassy {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 3;
        }
 
        
        .dropdown-options-glassy {
          background: linear-gradient(145deg, rgba(5, 5, 15, 0.98), rgba(10, 15, 25, 0.98));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 123, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 123, 255, 0.1);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        .react-datepicker__header {
          background-color: rgba(0, 0, 0, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .react-datepicker__current-month, .react-datepicker__day-name, .react-datepicker__day {
          color: #fff;
        }
        
        .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
          background-color: #007bff;
          color: #fff;
        }
        
        .react-datepicker__day--outside-month {
          color: #aaa;
        }
        
        .react-datepicker__day:hover {
          background-color: rgba(255, 255, 255, 0.2);
          color: #000000;
        }
        
        .react-datepicker__day--disabled:hover {
          background-color: transparent;
          cursor: not-allowed;
        }
        
        .react-datepicker__navigation-icon::before {
          border-color: #fff;
        }
        
        .react-datepicker__navigation--previous, .react-datepicker__navigation--next {
          top: 11px;
        }
        
        .react-datepicker__navigation--previous {
          left: 10px;
        }
        
        .react-datepicker__navigation--next {
          right: 10px;
        }
        
        .react-datepicker__triangle {
          display: none;
        }
        
        .react-datepicker-popper {
          z-index: 20;
        }
        
        .react-datepicker {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
        }
        
        .react-datepicker__month {
          min-height: 200px;
        }
      `}</style>
      

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 text-white px-6 py-3 rounded-full shadow-xl flex items-center space-x-2 z-50"
            style={{
              background: 'linear-gradient(135deg, rgba(25, 25, 70, 0.95), rgba(40, 40, 90, 0.95))',
              border: '1px solid rgba(100, 100, 255, 0.2)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


SubmitButton.displayName = "SubmitButton";


export default HireMePage;