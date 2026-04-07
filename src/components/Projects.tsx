import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { Globe, Smartphone, Github, Trophy, FolderGit2 } from 'lucide-react';

const getLinkIcon = (url: string) => {
  if (url.includes('github.com')) return <Github className="w-4 h-4" />;
  if (url.includes('play.google.com')) return <Smartphone className="w-4 h-4" />;
  return <Globe className="w-4 h-4" />;
};

const CompetitionCard = ({ item, index }: { item: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative p-6 rounded-3xl bg-accent/5 border border-accent/20 hover:bg-accent/8 hover:border-accent/40 transition-all duration-300 flex flex-col gap-4 shadow-lg hover:shadow-accent/10"
  >
    {/* Top row: rank badge + year */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-full">
        <Trophy className="w-3 h-3" />
        {item.subtitle}
      </div>
      <span className="text-xs font-mono text-text-secondary/80 bg-white/5 border border-white/5 px-3 py-1 rounded-full">
        {item.period}
      </span>
    </div>

    {/* Title + company */}
    <div>
      <h3 className="font-bold text-white text-lg leading-snug">{item.title}</h3>
      <p className="text-text-secondary text-sm font-medium mt-1">{item.company}</p>
    </div>

    {/* Description */}
    <p className="text-text-secondary text-sm leading-relaxed flex-1">{item.description}</p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2">
      {item.tags.map((tag: string) => (
        <span
          key={tag}
          className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent/90 border border-accent/20"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ item, index }: { item: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 flex flex-col gap-4 shadow-lg hover:shadow-accent/5"
  >
    {/* Title row */}
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
      <div>
        {item.link ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/link w-fit">
            <h3 className="font-bold text-white group-hover/link:text-accent transition-colors text-lg">
              {item.title}
            </h3>
            <span className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover/link:bg-accent/20 group-hover/link:border-accent/30 text-text-secondary group-hover/link:text-accent transition-all duration-300 hover:scale-110 shadow-sm">
              {getLinkIcon(item.link)}
            </span>
          </a>
        ) : (
          <h3 className="font-bold text-white text-lg">{item.title}</h3>
        )}
        <p className="text-text-secondary font-medium mt-1.5 text-sm">{item.company}</p>
      </div>
      <span className="text-sm font-mono text-text-secondary/80 bg-white/5 border border-white/5 px-3 py-1 rounded-full w-fit whitespace-nowrap h-fit">
        {item.period}
      </span>
    </div>

    {/* Description */}
    <p className="text-text-secondary leading-relaxed text-sm flex-1">{item.description}</p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2">
      {item.tags.map((tag: string) => (
        <span
          key={tag}
          className="font-medium rounded-full bg-accent/10 text-accent/90 border border-accent/20 shadow-sm text-xs px-2.5 py-1"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const SubsectionLabel = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="flex items-center gap-3 mb-6"
  >
    <span className="text-accent">{icon}</span>
    <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
      {label}
    </span>
    <div className="flex-1 h-px bg-white/5" />
  </motion.div>
);

export const Projects = () => {
  const { language } = useLanguage();
  const t = content[language].projects;

  return (
    <section id="projects" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section title */}
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

        <div className="flex flex-col gap-14">

          {/* Competitions */}
          <div>
            <SubsectionLabel
              icon={<Trophy className="w-4 h-4" />}
              label={t.competitionsLabel}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.competitions.map((item: any, i: number) => (
                <CompetitionCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <SubsectionLabel
              icon={<FolderGit2 className="w-4 h-4" />}
              label={t.projectsLabel}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.items.map((item: any, i: number) => (
                <ProjectCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
