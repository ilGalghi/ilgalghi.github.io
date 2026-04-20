import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Key } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { AppNavbar } from './AppNavbar';

export const CaissaHowToApiKey = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    title: language === 'IT' ? 'Come creare una chiave API Google per CaissaChess' : 'How to create a Google API Key for CaissaChess',
    desc: language === 'IT' 
      ? 'Alcune funzionalità avanzate di intelligenza artificiale in CaissaChess richiedono una chiave API di Google Cloud. Segui questa guida per generarne una gratuitamente.'
      : 'Some advanced computer vision and AI features in CaissaChess require a Google Cloud API Key. Follow this guide to generate one for free.',
    s1Title: language === 'IT' ? 'Crea un Progetto su Google Cloud' : 'Create a Google Cloud Project',
    s1Desc: language === 'IT' ? 'Vai alla Google Cloud Console. Dovrai accedere con il tuo account Google.' : 'Head over to the Google Cloud Console. You will need to sign in with your Google account.',
    s1Link: language === 'IT' ? 'Apri Google Cloud Console' : 'Open Google Cloud Console',
    s1i1: language === 'IT' ? 'Clicca sul menu a tendina dei progetti in alto a sinistra.' : 'Click on the project dropdown in the top left corner.',
    s1i2: language === 'IT' ? 'Clicca su Nuovo Progetto (New Project).' : 'Click New Project.',
    s1i3: language === 'IT' ? 'Dai un nome al progetto (es. "CaissaChess API") e clicca Crea.' : 'Give your project a name (e.g., "CaissaChess API") and click Create.',
    s2Title: language === 'IT' ? 'Abilita le API Richieste' : 'Enable Required APIs',
    s2Desc: language === 'IT' ? 'Una volta creato e selezionato il progetto, devi abilitare le API specifiche per CaissaChess.' : 'Once your project is created and selected, you need to enable the specific APIs required by CaissaChess.',
    s2i1: language === 'IT' ? 'Vai al menu di navigazione > API e servizi > Libreria.' : 'Go to the navigation menu > APIs & Services > Library.',
    s2i2: language === 'IT' ? 'Cerca "Cloud Vision API".' : 'Search for "Cloud Vision API".',
    s2i3: language === 'IT' ? 'Cliccaci sopra e premi Abilita (Enable).' : 'Click on it and hit Enable.',
    s3Title: language === 'IT' ? 'Genera la Chiave API' : 'Generate the API Key',
    s3Desc: language === 'IT' ? 'Ora che le API sono abilitate, crea le tue credenziali.' : 'Now that the APIS are enabled, create your credentials.',
    s3i1: language === 'IT' ? 'Vai su API e servizi > Credenziali.' : 'Go to APIs & Services > Credentials.',
    s3i2: language === 'IT' ? 'Clicca su + CREA CREDENZIALI in alto.' : 'Click + CREATE CREDENTIALS at the top.',
    s3i3: language === 'IT' ? 'Seleziona Chiave API (API key) dal menu a tendina.' : 'Select API key from the dropdown.',
    s3i4: language === 'IT' ? 'Apparirà un popup con la tua nuova chiave. Copiala.' : 'A popup will appear with your new API key. Copy this key.',
    s4Title: language === 'IT' ? 'Aggiungi la chiave su CaissaChess' : 'Add the Key to CaissaChess',
    s4Desc: language === 'IT' ? 'Infine, apri l\'app CaissaChess sul tuo dispositivo Android.' : 'Finally, open the CaissaChess app on your Android device.',
    s4i1: language === 'IT' ? 'Vai nelle Impostazioni (Settings) dell\'app.' : 'Go to the App Settings.',
    s4i2: language === 'IT' ? 'Trova la sezione Funzionalità Cloud / API.' : 'Find the API Configuration or Cloud Features section.',
    s4i3: language === 'IT' ? 'Incolla la tua nuova Chiave API e salva.' : 'Paste your newly generated API Key and tap Save.',
    warn: language === 'IT' ? 'Importante:' : 'Important:',
    warnText: language === 'IT' 
      ? 'Mantieni la tua API key al sicuro. Google Cloud offre un tier gratuito abbondante, ma per alcuni servizi cloud Google richiede l\'inserimento di un metodo di fatturazione.'
      : 'Keep your API key secure. Do not share it publicly. Google Cloud offers a free tier, but entering billing information is required for the cloud platform.'
  };

  const steps = [
    {
      num: 1,
      title: t.s1Title,
      desc: t.s1Desc,
      link: { text: t.s1Link, url: 'https://console.cloud.google.com/' },
      items: [t.s1i1, t.s1i2, t.s1i3]
    },
    {
      num: 2,
      title: t.s2Title,
      desc: t.s2Desc,
      items: [t.s2i1, t.s2i2, t.s2i3]
    },
    {
      num: 3,
      title: t.s3Title,
      desc: t.s3Desc,
      items: [t.s3i1, t.s3i2, t.s3i3, t.s3i4]
    },
    {
      num: 4,
      title: t.s4Title,
      desc: t.s4Desc,
      items: [t.s4i1, t.s4i2, t.s4i3],
      warning: true
    }
  ];

  return (
    <div className="bg-bg min-h-screen text-text-primary selection:bg-accent/30 selection:text-white">
      <AppNavbar />
      <div className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-10 overflow-x-auto whitespace-nowrap pb-2 text-sm font-medium">
            <Link to="/" className="inline-flex items-center text-text-secondary hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Home
            </Link>
            <span className="text-text-tertiary">/</span>
            <Link to="/app/caissachess" className="inline-flex items-center text-text-secondary hover:text-white transition-colors">
              CaissaChess
            </Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent bg-accent/10 px-3 py-1 rounded-full">API Guide</span>
          </div>
          
          <header className="mb-16 border-b border-white/5 pb-12">
            <div className="bg-surface p-4 rounded-2xl border border-divider w-16 h-16 flex items-center justify-center mb-8 relative group overflow-hidden">
              <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <Key className="w-8 h-8 text-accent relative z-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-text-secondary">
              {t.title}
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
              {t.desc}
            </p>
          </header>

          <section className="space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="bg-surface border border-divider p-8 rounded-2xl hover:border-white/10 transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent font-bold text-xl border border-accent/20 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300 flex-shrink-0">
                    {step.num}
                  </span>
                  <h2 className="text-2xl font-bold">{step.title}</h2>
                </div>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {step.desc}
                </p>
                
                {step.link && (
                  <a 
                    href={step.link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-white font-medium mb-6 group/link transition-colors bg-accent/5 px-4 py-2 border border-accent/10 rounded-lg"
                  >
                    {step.link.text} 
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                )}

                <ul className="space-y-3">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Spazio per futuri screenshot */}
                <div className="mt-8 border-2 border-dashed border-white/10 rounded-xl p-8 flex items-center justify-center text-text-tertiary bg-bg/30">
                  <em>[ User Screenshot / Immagine ]</em>
                </div>

                {step.warning && (
                  <div className="mt-8 bg-red-500/10 p-5 rounded-xl border border-red-500/20 text-red-200">
                    <p className="text-sm leading-relaxed">
                      <strong className="text-red-400">{t.warn}</strong> {t.warnText}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};