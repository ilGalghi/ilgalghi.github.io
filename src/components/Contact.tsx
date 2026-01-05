
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

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

          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/ilGalghi" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/leonardogalgano" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
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
