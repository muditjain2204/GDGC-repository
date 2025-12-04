import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2800); // Duration of splash
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-slate-950">
      <div className="relative flex items-center justify-center mb-8">
        {/* Animated Circles mimicking Google colors */}
        <motion.div
          className="absolute w-32 h-32 rounded-full border-4 border-google-blue"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full border-4 border-google-red"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-16 h-16 rounded-full border-4 border-google-yellow"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-google-green"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        />
      </div>
      
      <motion.h1
        className="text-4xl font-bold tracking-tighter text-slate-800 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        GDGC <span className="text-google-blue">Members</span>
      </motion.h1>
      
      <motion.p
        className="mt-2 text-slate-500 dark:text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        Connect. Learn. Grow.
      </motion.p>
    </div>
  );
};

export default SplashScreen;
