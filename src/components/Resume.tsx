import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { GraduationCap, Briefcase, Calendar, Building2, ExternalLink } from 'lucide-react';

const TimelineItem = ({ 
  item, 
  type
}: { 
  item: any; 
  type: 'education' | 'experience';
}) => {
  return (
    <div className="relative pl-10 mb-8 last:mb-0">
      {/* Timeline Dot — centered on the line at left-4 (16px): 16px - 5px (half of w-2.5) = 11px */}
      <div className="absolute left-[11px] top-[42px] w-2.5 h-2.5 outline outline-4 outline-bg rounded-full bg-accent z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
      >
        {type === 'experience' && item.link ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/link w-fit mb-2">
            <h3 className="font-bold text-white text-lg md:text-xl group-hover/link:text-accent transition-colors">
              {item.title}
            </h3>
            <span className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover/link:bg-accent/20 group-hover/link:border-accent/30 text-text-secondary group-hover/link:text-accent transition-all duration-300">
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>
        ) : (
          <h3 className="font-bold text-white text-lg md:text-xl mb-2">
            {type === 'education' ? item.degree || item.school : item.title}
          </h3>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-text-secondary font-medium mb-4">
          <div className="flex items-center gap-2">
            {type === 'education' ? <GraduationCap className="w-4 h-4 text-text-secondary" /> : <Building2 className="w-4 h-4 text-text-secondary" />}
            {type === 'experience' && item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                {item.company}
              </a>
            ) : (
              <span>{type === 'education' ? item.school : item.company}</span>
            )}
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2 text-accent/90">
            <Calendar className="w-4 h-4 text-accent/70" />
            <span className="text-accent/80 font-mono text-xs">{item.period}</span>
          </div>
        </div>
        
        <p className="text-text-secondary text-sm leading-relaxed">
          {item.description}
        </p>

        {type === 'experience' && item.tags && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
            {item.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-text-secondary border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export const Resume = () => {
  const { language } = useLanguage();
  const eduData = content[language].education;
  const expData = content[language].experience;

  return (
    <section id="resume" className="py-24 bg-bg relative border-t border-white/5 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Education Column */}
          <div className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-white">
                <GraduationCap className="w-6 h-6 text-accent" />
                {eduData.title}
              </h2>
            </motion.div>

            <div className="relative">
               {/* Global line — at left-4 (16px), matching dot center */}
               <div className="absolute left-4 top-8 bottom-4 w-[1px] bg-gradient-to-b from-accent/50 to-transparent" />
               <div className="flex flex-col relative">
                {eduData.items.map((item: any) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    type="education"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-white">
                <Briefcase className="w-6 h-6 text-accent" />
                {expData.title}
              </h2>
            </motion.div>

            <div className="relative">
               {/* Global line — at left-4 (16px), matching dot center */}
               <div className="absolute left-4 top-8 bottom-4 w-[1px] bg-gradient-to-b from-accent/50 to-transparent" />
               <div className="flex flex-col relative">
                {expData.items.map((item: any) => (
                  <TimelineItem 
                    key={item.id} 
                    item={item} 
                    type="experience" 
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
