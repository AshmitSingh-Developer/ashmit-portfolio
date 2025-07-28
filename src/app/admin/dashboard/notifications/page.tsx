'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCircle2, Info, XCircle } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'success',
    title: 'Request Approved',
    message: 'Your hire request was accepted. We’ll reach out shortly.',
    icon: <CheckCircle2 className="text-emerald-400 glow-icon" />,
  },
  {
    id: 2,
    type: 'info',
    title: 'System Update',
    message: 'Dashboard v2.0 is now live with better analytics.',
    icon: <Info className="text-sky-400 glow-icon" />,
  },
  {
    id: 3,
    type: 'error',
    title: 'Payment Failed',
    message: 'Your transaction could not be completed. Retry now.',
    icon: <XCircle className="text-rose-400 glow-icon" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const} },
};

const NotificationCard = ({
  title,
  message,
  icon,
}: {
  title: string;
  message: string;
  icon: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md p-5 hover:shadow-[0_0_30px_#ffffff12] transition-all duration-300 hover:border-white/20"
    >
      <div className="flex items-start sm:items-center gap-4">
        <div className="text-xl sm:text-2xl">{icon}</div>
        <div className="text-white text-sm sm:text-base flex flex-col">
          <h4 className="font-semibold">{title}</h4>
          <p className="text-gray-300 mt-1">{message}</p>
        </div>
      </div>

      {/* Glowing Border Animation */}
      <div className="absolute inset-0 pointer-events-none group-hover:animate-glow-border" />
    </motion.div>
  );
};

const NotificationsPage = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#0e0e10] to-[#1a1a1e] px-4 sm:px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3"
        >
          <Bell className="text-yellow-400 w-7 h-7 animate-pulse" />
          Notification Center
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2"
        >
          {notifications.map((n) => (
            <NotificationCard
              key={n.id}
              title={n.title}
              message={n.message}
              icon={n.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NotificationsPage;
