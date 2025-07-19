import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

let toastRoot: HTMLDivElement | null = null;
let reactRoot: ReturnType<typeof createRoot> | null = null;

if (typeof window !== 'undefined' && !toastRoot) {
  toastRoot = document.createElement('div');
  toastRoot.className = 'fixed top-6 right-6 z-[9999] space-y-3 max-w-md';
  document.body.appendChild(toastRoot);
}

let currentId = 0;
const activeToasts: { id: number; message: string; type: string; duration: number }[] = [];

let updateToasts: React.Dispatch<React.SetStateAction<typeof activeToasts>> | null = null;

const ToastRenderer = () => {
  const [toasts, setToasts] = useState([...activeToasts]);
  useEffect(() => {
    updateToasts = setToasts;
    return () => {
      updateToasts = null;
    };
  }, []);

  return (
    <AnimatePresence>
      {toasts.map((toast) => (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className={`
            relative p-4 mb-3 rounded-xl text-white text-sm font-medium
            shadow-lg backdrop-blur-lg
            ${
              toast.type === 'success'
                ? 'bg-emerald-500/20 border border-emerald-500/40'
                : 'bg-rose-500/20 border border-rose-500/40'
            }
          `}
        >
          {toast.message}
          <motion.div
            initial={{ width: '100%' }}
            animate={{ width: 0 }}
            transition={{ duration: toast.duration / 1000 }}
            className={`absolute bottom-0 left-0 h-[3px] ${
              toast.type === 'success' ? 'bg-emerald-400' : 'bg-rose-400'
            }`}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

const ensureRenderer = () => {
  if (toastRoot && !reactRoot) {
    reactRoot = createRoot(toastRoot);
    reactRoot.render(<ToastRenderer />);
  }
};

const showToast = (type: 'success' | 'error', message: string, duration = 4000) => {
  const id = ++currentId;
  activeToasts.push({ id, message, type, duration });
  updateToasts?.([...activeToasts]);
  ensureRenderer();

  setTimeout(() => {
    const index = activeToasts.findIndex((t) => t.id === id);
    if (index !== -1) {
      activeToasts.splice(index, 1);
      updateToasts?.([...activeToasts]);
    }
  }, duration);
};

export const toast = {
  success: (message: string, duration?: number) => showToast('success', message, duration),
  error: (message: string, duration?: number) => showToast('error', message, duration),
};
