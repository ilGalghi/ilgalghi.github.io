import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calculator } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { AppNavbar } from './AppNavbar';

export const AppLapisCalc = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    back: language === 'IT' ? 'Torna al Portfolio' : 'Back to Portfolio',
    desc: language === 'IT' 
      ? "Un'app calcolatrice potente, pulita e intuitiva per Android. Esegui calcoli complessi con facilità."
      : "A powerful, clean, and intuitive calculator app for Android. Perform complex calculations with ease.",
    playText: language === 'IT' ? 'Scaricala su Google Play' : 'Get it on Google Play',
    featuresTitle: language === 'IT' ? 'Funzionalità' : 'Features',
    f1: language === 'IT' ? 'Interfaccia utente pulita e moderna' : 'Clean and modern user interface',
    f2: language === 'IT' ? 'Funzioni matematiche avanzate' : 'Advanced mathematical functions',
    f3: language === 'IT' ? 'Cronologia per tracciare i calcoli precedenti' : 'History tape to track previous calculations',
    f4: language === 'IT' ? 'Funzioni di memoria rapide' : 'Quick memory functions',
    f5: language === 'IT' ? 'Supporto Modalità Chiara e Scura' : 'Light and Dark mode support',
    privacyTitle: language === 'IT' ? 'Privacy e Supporto' : 'Privacy & Support',
    privacyDesc: language === 'IT' 
      ? 'LapisCalc rispetta la tua privacy. Non raccogliamo alcun dato personale. Per supporto o feedback, contattami tramite la mia pagina dei contatti.'
      : 'LapisCalc respects your privacy. We do not collect any personal data. For support or feedback, feel free to reach out via my contact page.'
  };

  return (
    <div className="bg-bg min-h-screen text-text-primary selection:bg-accent/30 selection:text-white">
      <AppNavbar />
      <div className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-text-secondary hover:text-white mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.back}
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm border border-accent/20">
                <Calculator className="w-4 h-4" />
                <span>Math & Conversions</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-text-secondary">
                LapisCalc
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-xl">
                {t.desc}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.ilgalghi.lapiscalc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-bg px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t.playText}
                </a>
              </div>
            </div>

            {/* Right Mockup Placeholder */}
            <div className="flex-1 relative w-full max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
              <div className="relative aspect-[9/16] max-h-[600px] mx-auto bg-surface border-4 border-white/10 rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center group">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-white/10 rounded-full" />
                <div className="text-center text-text-secondary p-8">
                  <Calculator className="w-24 h-24 mx-auto mb-4 opacity-50 group-hover:scale-110 transition-transform duration-500 group-hover:text-accent" />
                  <p className="font-medium opacity-50">[ App Screenshot Here ]</p>
                </div>
              </div>
              {/* Floating decorative cards */}
              <div className="absolute top-1/4 -left-8 bg-surface p-4 rounded-2xl border border-divider shadow-xl rotate-[-6deg] hidden md:block">
                 <div className="text-xl font-bold text-accent">sin(θ)</div>
              </div>
              <div className="absolute bottom-1/4 -right-8 bg-surface p-4 rounded-2xl border border-divider shadow-xl rotate-[6deg] hidden md:block flex items-center gap-3">
                 <div className="w-3 h-3 bg-blue-500 rounded-full" />
                 <span className="font-medium">Unit Converter</span>
              </div>
            </div>
          </div>

          <section className="space-y-12">
            <div className="bg-surface border border-divider rounded-2xl p-8 hover:border-white/10 transition-colors">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-accent rounded-full" />
                {t.featuresTitle}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text-secondary">
                {[t.f1, t.f2, t.f3, t.f4, t.f5].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 bg-bg/50 p-4 rounded-xl border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-surface border border-divider rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-accent rounded-full" />
                {t.privacyTitle}
              </h2>
              <p className="text-text-secondary leading-relaxed bg-bg/50 p-6 rounded-xl border border-white/5">
                {t.privacyDesc}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};