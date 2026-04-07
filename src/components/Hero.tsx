
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown, FileText } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

export const Hero = () => {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 opacity-30 animate-pulse" />

      {/* Main content — flex-1 so it fills all available space and stays centered */}
      <div className="flex-1 flex items-center justify-center z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
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
            <a href="/CV_Leonardo_Galgano.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-bg font-semibold transition-all hover:scale-105">
              <FileText className="w-6 h-6" />
              <span>CV</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Infinite Logo Carousel — in normal flow, sits naturally below the centered content */}
      <div className="w-full border-y border-white/5 bg-white/5 py-4 overflow-hidden backdrop-blur-md z-20">
        <motion.div
          className="flex items-center justify-start gap-12 sm:gap-24 w-max pr-12 sm:pr-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 120, repeat: Infinity }}
        >
          {/* Duplicate logos for seamless loop (0% → -50%) */}
          {[1, 2].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center justify-start gap-12 sm:gap-24">
              {[...Array(4)].map((_, j) => (
                <div key={j} className="flex shrink-0 items-center justify-start gap-12 sm:gap-24">
                  <img src="/logos/logo-sapienza.webp" alt="Sapienza" className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                  <img src="/logos/logo-reply.webp" alt="Reply" className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                  <img src="/logos/logo-codemotion.webp" alt="Codemotion" className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                  <img src="/logos/logo-fast-charge.webp" alt="Sapienza Fast Charge" className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                  <img src="/logos/logo-eng.webp" alt="Engineering" className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                  <img src="/logos/logo-telcedo.webp" alt="Telcedo" className="h-10 sm:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — anchored at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col items-center gap-2 text-text-secondary/70 py-6"
      >
        <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
};
