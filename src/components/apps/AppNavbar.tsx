import { Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';

export const AppNavbar = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-white hover:text-accent transition-colors">
          LG<span className="text-accent">.</span>
        </Link>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5 text-xs font-medium text-text-primary"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{language}</span>
        </button>
      </div>
    </nav>
  );
};