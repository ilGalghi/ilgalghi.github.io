import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Cpu, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { AppNavbar } from './AppNavbar';

export const AppList = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    back: language === 'IT' ? 'Torna al Portfolio' : 'Back to Portfolio',
    title: language === 'IT' ? 'Le Mie App' : 'My Apps',
    desc: language === 'IT' 
      ? 'Esplora i miei progetti Android pubblicati sul Google Play Store.'
      : 'Explore my Android projects published on the Google Play Store.',
    apps: [
      {
        id: 'caissachess',
        name: 'CaissaChess',
        desc: language === 'IT' 
          ? 'Toolkit per gli appassionati di scacchi: analisi partite, allenamenti tattica e motori in cloud.'
          : 'Toolkit for chess enthusiasts: game analysis, tactics practice, and cloud engines.',
        icon: <Cpu className="w-10 h-10 text-accent group-hover:scale-110 transition-transform" />,
        link: '/app/caissachess'
      },
      {
        id: 'lapiscalc',
        name: 'LapisCalc',
        desc: language === 'IT'
          ? 'Calcolatrice potente e intuitiva per eseguire calcoli matematici complessi in modo semplice.'
          : 'Powerful and intuitive calculator to perform complex math calculations easily.',
        icon: <Calculator className="w-10 h-10 text-accent group-hover:scale-110 transition-transform" />,
        link: '/app/lapiscalc'
      }
    ]
  };

  return (
    <div className="bg-bg min-h-screen text-text-primary selection:bg-accent/30 selection:text-white">
      <AppNavbar />
      <div className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-text-secondary hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.back}
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-text-secondary">
              {t.title}
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
              {t.desc}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.apps.map((app) => (
              <Link 
                key={app.id} 
                to={app.link}
                className="group bg-surface border border-divider hover:border-accent/40 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                    {app.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-bg border border-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-bg transition-colors">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3">{app.name}</h2>
                <p className="text-text-secondary leading-relaxed">
                  {app.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};