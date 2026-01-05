import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { GraduationCap } from 'lucide-react';

const EducationCard = ({ item }: { item: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 hover:border-accent/20 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-4">
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-accent/10 rounded-lg shrink-0">
             <GraduationCap className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
              {item.school}
            </h3>
            <p className="text-text-secondary font-medium mt-1 text-base">
              {item.degree}
            </p>
          </div>
        </div>
        <span className="text-sm font-mono text-text-secondary/60 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
          {item.period}
        </span>
      </div>

      <div className="space-y-4">
        <p className="text-text-secondary leading-relaxed text-sm">
          {item.description}
        </p>
        
        {item.activities && (
          <div className="pt-4 border-t border-white/5">
            <p className="text-sm text-text-secondary">
              <strong className="text-white block mb-1">Activities:</strong>
              {item.activities}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export const Education = () => {
  const { language } = useLanguage();
  const t = content[language].education;

  return (
    <section id="education" className="py-20 bg-bg relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4">
            <span className="w-12 h-1 bg-accent rounded-full"></span>
            {t.title}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {t.items.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
