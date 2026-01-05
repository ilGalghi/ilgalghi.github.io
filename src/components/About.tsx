
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

export const About = () => {
  const { language } = useLanguage();
  const t = content[language].about;

  return (
    <section id="about" className="py-20 md:py-32 bg-bg relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-0.5 bg-accent"></span>
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
            {t.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
