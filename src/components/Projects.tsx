import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { Globe, Smartphone, Github } from 'lucide-react';

const getLinkIcon = (url: string) => {
  if (url.includes('github.com')) return <Github className="w-4 h-4" />;
  if (url.includes('play.google.com')) return <Smartphone className="w-4 h-4" />;
  return <Globe className="w-4 h-4" />;
};

const ProjectCard = ({ item }: { item: any }) => {
  const cardContent = (
    <>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
          <div>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/link w-fit">
                <h3 className="font-bold text-white group-hover/link:text-accent transition-colors text-lg md:text-xl">
                  {item.title}
                </h3>
                <span className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover/link:bg-accent/20 group-hover/link:border-accent/30 text-text-secondary group-hover/link:text-accent transition-all duration-300 hover:scale-110 shadow-sm">
                  {getLinkIcon(item.link)}
                </span>
              </a>
            ) : (
              <h3 className="font-bold text-white text-lg md:text-xl">
                {item.title}
              </h3>
            )}
            <p className="text-text-secondary font-medium mt-1.5 text-sm">{item.company}</p>
          </div>
          <span className="text-sm font-mono text-text-secondary/80 bg-white/5 border border-white/5 shadow-sm px-3 py-1 rounded-full w-fit whitespace-nowrap h-fit">
            {item.period}
          </span>
        </div>
        
        <p className="text-text-secondary leading-relaxed text-sm mt-4">
          {item.description}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 mt-5">
        {item.tags.map((tag: string) => (
          <span
            key={tag}
            className="font-medium rounded-full bg-accent/10 text-accent/90 border border-accent/20 shadow-sm text-xs px-2.5 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-accent/5"
    >
      {cardContent}
    </motion.div>
  );
};

export const Projects = () => {
  const { language } = useLanguage();
  const t = content[language].projects;

  return (
    <section id="projects" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-5 tracking-tight">
            <span className="w-12 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(var(--accent),0.5)]"></span>
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {t.items.map((item: any) => (
             <ProjectCard 
                key={item.id} 
                item={item} 
             />
           ))}
        </div>
      </div>
    </section>
  );
};
