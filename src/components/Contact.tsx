
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { Mail, Github, Linkedin, ArrowUp, Smartphone, Globe } from 'lucide-react';

export const Contact = () => {
  const { language } = useLanguage();
  const t = content[language].contact;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 border-t border-white/5 relative bg-bg-secondary/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t.title}
            <span className="text-accent">.</span>
          </h2>
          
          <a
            href="mailto:contact@example.com" // Replace with actual if known, or generic
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent/10 text-accent font-medium hover:bg-accent hover:text-bg transition-all mb-12 border border-accent/20"
          >
            <Mail className="w-5 h-5" />
            {t.email}
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-12">
            <a href="https://github.com/ilGalghi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-accent/40 text-text-secondary hover:text-white transition-colors">
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/leonardogalgano/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-accent/40 text-text-secondary hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="https://telcedo.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-accent/40 text-text-secondary hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">Telcedo</span>
            </a>
            <a href="https://play.google.com/store/apps/dev?id=4935235036652631052" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-accent/40 text-text-secondary hover:text-white transition-colors">
              <Smartphone className="w-5 h-5" />
              <span className="text-sm font-medium">Play Store</span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 text-sm text-text-secondary/60">
            <p>{t.footer}</p>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
