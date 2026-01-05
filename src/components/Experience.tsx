import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

const ExperienceCard = ({ item, isFeatured = false, className = "" }: { item: any, isFeatured?: boolean, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`group relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent/20 transition-all duration-300 flex flex-col justify-between overflow-hidden ${className}`}
  >
    {/* Background Gradient for Featured Card */}
    {isFeatured && (
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    )}

    <div className="relative z-10">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h3 className={`font-bold text-white group-hover:text-accent transition-colors ${isFeatured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
            {item.title}
          </h3>
          <p className={`text-text-secondary font-medium mt-2 ${isFeatured ? 'text-xl' : 'text-lg'}`}>{item.company}</p>
        </div>
        <span className="text-sm font-mono text-text-secondary/60 bg-white/5 px-3 py-1 rounded-full w-fit whitespace-nowrap h-fit">
          {item.period}
        </span>
      </div>
      
      <p className={`text-text-secondary leading-relaxed ${isFeatured ? 'text-lg md:text-xl' : 'text-base'}`}>
        {item.description}
      </p>
    </div>

    <div className="relative z-10 flex flex-wrap gap-2 mt-8">
      {item.tags.map((tag: string) => (
        <span
          key={tag}
          className={`font-medium rounded-full bg-accent/10 text-accent/80 border border-accent/10 ${isFeatured ? 'px-4 py-2 text-sm' : 'text-xs px-3 py-1'}`}
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export const Experience = () => {
  const { language } = useLanguage();
  const t = content[language].experience;

  // Grid configuration:
  // Item 1: Co-Founder - Large square (2x2)
  // Item 2: CV Member - Standard
  // Item 3: SLAM - Standard
  // Item 4: Reply Winner - Wide (2x1)
  // Item 5: Freelance - Standard
  
  const getClassForIndex = (index: number) => {
    switch(index) {
      // Co-Founder & CTO (Item 1)
      case 0: return "lg:col-span-2 lg:row-span-2 min-h-[400px]"; 
      // Reply Student Tech Clash Winner (Item 4)
      case 3: return "lg:col-span-2";
      default: return "";
    }
  };

  return (
    <section id="experience" className="py-20 bg-bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4">
            <span className="w-12 h-1 bg-accent rounded-full"></span>
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
           {t.items.map((item, index) => (
             <ExperienceCard 
                key={item.id} 
                item={item} 
                isFeatured={index === 0}
                className={getClassForIndex(index)}
             />
           ))}
        </div>
      </div>
    </section>
  );
};
