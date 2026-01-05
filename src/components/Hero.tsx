
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

export const Hero = () => {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 opacity-30 animate-pulse" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {t.title}
            <span className="text-accent">.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-1 mb-8"
        >
          {t.subtitle.map((line, index) => (
            <p key={index} className="text-lg md:text-xl text-text-secondary font-light">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-6"
        >
          <a href="https://github.com/ilGalghi" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110">
            <Github className="w-7 h-7" />
          </a>
          <a href="https://linkedin.com/in/leonardogalgano" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-accent hover:bg-accent-glow text-bg transition-all hover:scale-110">
            <Linkedin className="w-7 h-7" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};
