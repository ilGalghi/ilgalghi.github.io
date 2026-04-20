import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { AppNavbar } from './AppNavbar';
import {
  AppFooter, PhoneFrame, LapisCalcMock, LapisConverterMock, LapisDateMock,
  MetaRow, FeatureCard, LinkButton, GooglePlayIcon, APP_ACCENT, useBreakpoint,
} from './AppMocks';

const MONO = { fontFamily: 'Geist Mono, monospace' } as const;
const SERIF = { fontFamily: '"Instrument Serif", serif' } as const;

export const AppLapisCalc = () => {
  const { language } = useLanguage();
  const { isMobile } = useBreakpoint();
  const lang = language === 'IT' ? 'it' : 'en';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const t = {
    back: lang === 'it' ? 'Torna alle app' : 'Back to apps',
    shipped: lang === 'it' ? 'Pubblicata' : 'Shipped',
    hero1: lang === 'it' ? 'La matematica di tutti i giorni,' : 'Everyday math,',
    hero2: lang === 'it' ? 'in silenzio.' : 'quietly done.',
    desc: lang === 'it'
      ? 'LapisCalc unisce una calcolatrice completa a un convertitore di unità avanzato. Material Design 3, temi automatici, cinque lingue, zero pubblicità.'
      : 'LapisCalc combines a full calculator with an advanced unit converter. Material Design 3, automatic themes, five languages, zero ads.',
    getPlay: lang === 'it' ? 'Scarica su Google Play' : 'Get it on Google Play',
    viewGithub: lang === 'it' ? 'Vedi su GitHub' : 'View on GitHub',
    platform: lang === 'it' ? 'Piattaforma' : 'Platform',
    version: lang === 'it' ? 'Versione' : 'Version',
    languages: lang === 'it' ? 'Lingue' : 'Languages',
    license: lang === 'it' ? 'Licenza' : 'License',
    builtWith: lang === 'it' ? 'Costruito con' : 'Built with',
    features: lang === 'it' ? 'Funzionalità' : 'Features',
    featuresHeadline: lang === 'it' ? 'Superficie ridotta. Potenza elevata.' : 'Small surface. Deep capability.',
    categories: lang === 'it' ? 'Categorie del convertitore' : 'Converter categories',
    screenshots: lang === 'it' ? 'Screenshot' : 'Screenshots',
    screenshotsHeadline: lang === 'it' ? 'Tre schermate, cinque lingue.' : 'Three screens, five languages.',
    credit: lang === 'it'
      ? 'Basato su MintCalc di boredcodebyk, ricostruito ed esteso come progetto indipendente.'
      : 'Based on MintCalc by boredcodebyk, rebuilt and extended as an independent project.',
    f: [
      {
        t: lang === 'it' ? 'Calcolatrice standard' : 'Standard calculator',
        d: lang === 'it' ? 'Aritmetica essenziale con cronologia degli ultimi 100 calcoli.' : 'Clean arithmetic with a running history of your last 100 calculations.',
      },
      {
        t: lang === 'it' ? 'Calcolatrice di date' : 'Date calculator',
        d: lang === 'it' ? 'Calcola la durata tra due date, aggiungi o sottrai giorni.' : 'Compute durations between dates, add or subtract days.',
      },
      {
        t: lang === 'it' ? 'Convertitore di unità' : 'Unit converter',
        d: lang === 'it' ? 'Lunghezza, massa, energia, pressione, dati, temperatura — 13 categorie.' : 'Length, mass, energy, pressure, data, temperature — 13 categories in total.',
      },
      {
        t: lang === 'it' ? 'Calcolatrice della mancia' : 'Tip calculator',
        d: lang === 'it' ? 'Divisione rapida con percentuali personalizzabili.' : 'Quick split with customizable percentages.',
      },
      {
        t: 'Material You',
        d: lang === 'it' ? 'Material Design 3 con tema chiaro e scuro automatico.' : 'Material Design 3 with automatic dark and light themes.',
      },
      {
        t: lang === 'it' ? 'Multi-lingua' : 'Multi-language',
        d: lang === 'it' ? 'Italiano, inglese, spagnolo, francese e rumeno.' : 'Italian, English, Spanish, French, and Romanian.',
      },
    ],
  };

  const converterCategories = ['Angle', 'Area', 'Data', 'Energy', 'Length', 'Mass', 'Power', 'Pressure', 'Temperature', 'Time', 'Speed', 'Volume', 'Tip'];

  return (
    <div style={{ background: '#0a0a0b', minHeight: '100vh', color: '#e8e8ea' }}>
      <AppNavbar />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px' }}>

        {/* Back button */}
        <div style={{ paddingTop: 32 }}>
          <Link to="/app" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...MONO, fontSize: 12, color: '#6b6b73', textDecoration: 'none', letterSpacing: 0.5, marginBottom: 40 }}>
            ← {t.back}
          </Link>
        </div>

        {/* Hero */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', gap: 48, alignItems: 'center', paddingBottom: isMobile ? 48 : 80, borderBottom: '1px solid #1a1a20' }}>
          <div>
            <div style={{ ...MONO, fontSize: 11, color: APP_ACCENT, letterSpacing: 1.5 }}>
              ● {t.shipped.toUpperCase()} · v1.2.0
            </div>
            <h1 style={{ ...SERIF, fontWeight: 400, fontSize: isMobile ? 'clamp(52px, 14vw, 80px)' : 'clamp(60px, 8vw, 110px)', lineHeight: 0.95, letterSpacing: -2, margin: '20px 0 0', color: '#e8e8ea' }}>
              {t.hero1}<br />
              <em style={{ fontStyle: 'italic', color: APP_ACCENT }}>{t.hero2}</em>
            </h1>
            <p style={{ fontSize: isMobile ? 16 : 18, color: '#c0c0c8', maxWidth: 480, marginTop: 28, lineHeight: 1.55 }}>{t.desc}</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <LinkButton primary href="https://play.google.com/store/apps/details?id=com.ilgalghi.lapiscalc" accent={APP_ACCENT}>
                <GooglePlayIcon />
                {t.getPlay}
              </LinkButton>
              <LinkButton href="https://github.com/ilGalghi/LapisCalc" accent={APP_ACCENT}>
                {t.viewGithub}
              </LinkButton>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', width: 360, height: 360, borderRadius: '50%', background: `radial-gradient(circle, ${APP_ACCENT}22 0%, transparent 65%)`, filter: 'blur(40px)' }} />
            <div style={{ position: 'relative', transform: 'rotate(-3deg)' }}>
              <PhoneFrame scale={isMobile ? 0.65 : 0.85} accent={APP_ACCENT}>
                <LapisCalcMock scale={isMobile ? 0.65 : 0.85} accent={APP_ACCENT} />
              </PhoneFrame>
            </div>
          </div>
        </div>

        {/* Meta row */}
        <MetaRow items={[
          { label: t.platform, value: 'Android' },
          { label: t.version, value: '1.2.0' },
          { label: t.languages, value: 'EN · IT · ES · FR · RO' },
          { label: t.license, value: 'GPL v3.0' },
          { label: t.builtWith, value: 'Flutter 3 · Dart' },
        ]} />

        {/* Features */}
        <section style={{ marginTop: isMobile ? 56 : 96 }}>
          <div style={{ ...MONO, fontSize: 11, color: '#6b6b73', letterSpacing: 1.5 }}>// {t.features.toUpperCase()}</div>
          <h2 style={{ ...SERIF, fontWeight: 400, fontSize: isMobile ? 40 : 64, lineHeight: 1, letterSpacing: -1.5, margin: '16px 0 40px', color: '#e8e8ea', maxWidth: 700 }}>
            {t.featuresHeadline}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 16 }}>
            {t.f.map((f, i) => (
              <FeatureCard key={i} num={String(i + 1).padStart(2, '0')} title={f.t} desc={f.d} accent={APP_ACCENT} />
            ))}
          </div>
        </section>

        {/* Converter categories */}
        <section style={{ marginTop: isMobile ? 56 : 96 }}>
          <div style={{ ...MONO, fontSize: 11, color: '#6b6b73', letterSpacing: 1.5 }}>// {t.categories.toUpperCase()}</div>
          <div style={{ marginTop: 24, border: '1px solid #1a1a20', borderRadius: 6, overflow: 'hidden' }}>
            {converterCategories.map((c, i) => (
              <div key={c} style={{ display: 'grid', gridTemplateColumns: '60px 1fr auto', padding: '20px 28px', borderBottom: i < converterCategories.length - 1 ? '1px solid #16161b' : 'none', alignItems: 'center', ...MONO }}>
                <span style={{ fontSize: 11, color: '#6b6b73' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 22, ...SERIF, color: '#e8e8ea' }}>{c}</span>
                <span style={{ fontSize: 11, color: APP_ACCENT, letterSpacing: 1 }}>CONVERT →</span>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section style={{ marginTop: isMobile ? 56 : 96 }}>
          <div style={{ ...MONO, fontSize: 11, color: '#6b6b73', letterSpacing: 1.5 }}>// {t.screenshots.toUpperCase()}</div>
          <h2 style={{ ...SERIF, fontWeight: 400, fontSize: isMobile ? 32 : 48, lineHeight: 1, letterSpacing: -1, margin: '16px 0 40px', color: '#e8e8ea' }}>
            {t.screenshotsHeadline}
          </h2>
          <div style={{
            display: isMobile ? 'flex' : 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            overflowX: isMobile ? 'auto' : undefined,
            gap: isMobile ? 24 : 32,
            justifyItems: 'center',
            padding: isMobile ? '40px 20px' : '60px 20px',
            background: 'radial-gradient(ellipse at center, #101015 0%, transparent 70%)',
            border: '1px solid #1a1a20', borderRadius: 6,
          }}>
            {[
              { Mock: LapisCalcMock, label: 'Calculator' },
              { Mock: LapisConverterMock, label: 'Converter' },
              { Mock: LapisDateMock, label: 'Date' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <PhoneFrame scale={0.6} accent={APP_ACCENT}>
                  <s.Mock scale={0.6} accent={APP_ACCENT} />
                </PhoneFrame>
                <div style={{ marginTop: 18, fontSize: 11, color: '#6b6b73', ...MONO, letterSpacing: 1 }}>
                  0{i + 1} / {s.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Credit */}
        <section style={{ marginTop: 80, padding: '40px 0', borderTop: '1px solid #1a1a20' }}>
          <p style={{ fontSize: 13, color: '#6b6b73', ...MONO, maxWidth: 600 }}>{t.credit}</p>
        </section>

        <AppFooter lang={language} />
      </div>
    </div>
  );
};
