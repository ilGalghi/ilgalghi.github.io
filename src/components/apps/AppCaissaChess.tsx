import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { AppNavbar } from './AppNavbar';
import {
  AppFooter, PhoneFrame, DesktopWindow, CaissaBoardMock, CaissaAnalysisMock,
  MetaRow, FeatureCard, LinkButton, APP_ACCENT, useBreakpoint,
} from './AppMocks';

const MONO = { fontFamily: 'Geist Mono, monospace' } as const;
const SERIF = { fontFamily: '"Instrument Serif", serif' } as const;

export const AppCaissaChess = () => {
  const { language } = useLanguage();
  const { isMobile } = useBreakpoint();
  const lang = language === 'IT' ? 'it' : 'en';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const t = {
    back: lang === 'it' ? 'Torna alle app' : 'Back to apps',
    shipped: lang === 'it' ? 'Pubblicata' : 'Shipped',
    hero1: lang === 'it' ? 'Gioca. Analizza.' : 'Play. Analyze.',
    hero2: lang === 'it' ? 'Capisci.' : 'Understand.',
    desc: lang === 'it'
      ? 'Un\'applicazione di scacchi con analisi Stockfish, difficoltà regolabile e un tutor AI in linguaggio naturale basato su Google Gemini.'
      : 'A chess application with Stockfish analysis, adjustable difficulty, and a natural-language AI tutor powered by Google Gemini.',
    viewGithub: lang === 'it' ? 'Vedi su GitHub' : 'View on GitHub',
    platform: lang === 'it' ? 'Piattaforma' : 'Platform',
    languages: lang === 'it' ? 'Lingue' : 'Languages',
    license: lang === 'it' ? 'Licenza' : 'License',
    features: lang === 'it' ? 'Funzionalità' : 'Features',
    featuresHeadline: lang === 'it' ? 'Un motore che gioca — e un tutor che spiega.' : 'An engine that plays — and a tutor that explains.',
    screenshots: lang === 'it' ? 'Screenshot' : 'Screenshots',
    screenshotsHeadline: lang === 'it' ? 'Scacchiera, valutazione e coach — insieme.' : 'Board, evaluation, and coach — side by side.',
    ctaKicker: lang === 'it' ? 'Porta la tua chiave' : 'Bring your own key',
    ctaTitle: lang === 'it' ? 'Il coach usa la tua chiave API di Google.' : 'Coach uses your Google API key.',
    ctaBody: lang === 'it'
      ? 'Caissa Node non include una chiave condivisa. Crei gratis una chiave Gemini su Google AI Studio, la incolli una volta nelle Impostazioni e resta sul tuo dispositivo.'
      : 'Caissa Node never ships a shared key. You create a free Gemini API key in Google AI Studio, paste it once in Settings, and it stays on your device.',
    ctaButton: lang === 'it' ? 'Come ottenere una chiave API Google' : 'How to get a Google API key',
    stockfishNote: lang === 'it' ? 'Include Stockfish sotto licenza GPLv3.' : 'Includes Stockfish under GPLv3.',
    f: [
      {
        t: lang === 'it' ? 'Scacchiera interattiva' : 'Interactive board',
        d: lang === 'it' ? 'Trascina i pezzi con evidenziazione delle mosse legali.' : 'Drag and drop pieces with legal-move highlighting.',
      },
      {
        t: lang === 'it' ? 'Motore Stockfish' : 'Stockfish engine',
        d: lang === 'it' ? 'Valutazione in tempo reale e suggerimenti, eseguiti localmente via WebAssembly.' : 'Real-time position evaluation and best-move suggestions, running locally via WebAssembly.',
      },
      {
        t: lang === 'it' ? 'Tutor AI' : 'AI tutor',
        d: lang === 'it' ? 'Fai domande in linguaggio naturale. Ricevi spiegazioni, coaching e analisi.' : 'Ask questions in natural language. Get coaching, move explanations, and analysis.',
      },
      {
        t: lang === 'it' ? 'Difficoltà regolabile' : 'Adjustable difficulty',
        d: lang === 'it' ? 'Affronta il motore da ELO 800 fino alla forza massima.' : 'Face the engine from ELO 800 all the way to MAX strength.',
      },
      {
        t: lang === 'it' ? 'Temi' : 'Themes',
        d: lang === 'it' ? 'Modalità chiara e scura per sessioni lunghe e confortevoli.' : 'Dark and light modes for comfortable long sessions.',
      },
      {
        t: lang === 'it' ? 'Multi-lingua' : 'Multi-language',
        d: lang === 'it' ? 'Traduzioni in inglese e italiano incluse.' : 'English and Italian translations included.',
      },
    ],
  };

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
        <div style={{ paddingBottom: isMobile ? 40 : 60, borderBottom: '1px solid #1a1a20' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto', gap: 40, alignItems: 'end', marginBottom: isMobile ? 36 : 56 }}>
            <div>
              <div style={{ ...MONO, fontSize: 11, color: APP_ACCENT, letterSpacing: 1.5 }}>
                ● {t.shipped.toUpperCase()} · Desktop
              </div>
              <h1 style={{ ...SERIF, fontWeight: 400, fontSize: isMobile ? 'clamp(52px, 14vw, 80px)' : 'clamp(60px, 8vw, 110px)', lineHeight: 0.95, letterSpacing: -2, margin: '20px 0 0', color: '#e8e8ea' }}>
                {t.hero1}<br />
                <em style={{ fontStyle: 'italic', color: APP_ACCENT }}>{t.hero2}</em>
              </h1>
              <p style={{ fontSize: isMobile ? 16 : 18, color: '#c0c0c8', maxWidth: 600, marginTop: 28, lineHeight: 1.55 }}>{t.desc}</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                <LinkButton primary href="https://github.com/ilGalghi/Caissa-Node" accent={APP_ACCENT}>
                  {t.viewGithub}
                </LinkButton>
              </div>
            </div>
            {!isMobile && (
              <div style={{ ...MONO, color: '#6b6b73', fontSize: 11, textAlign: 'right' }}>
                <div>ELO 800 — MAX</div>
                <div style={{ marginTop: 4, color: APP_ACCENT }}>Stockfish + Gemini</div>
              </div>
            )}
          </div>

          {/* Desktop + phone showcase */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', padding: '20px 0' }}>
            <div style={{ position: 'absolute', width: '70%', height: '70%', borderRadius: '50%', background: `radial-gradient(ellipse, ${APP_ACCENT}18 0%, transparent 65%)`, filter: 'blur(60px)' }} />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40 }}>
              {!isMobile && (
                <div style={{ opacity: 0.5, transform: 'scale(0.82)', transformOrigin: 'right center' }}>
                  <DesktopWindow scale={0.75} title="caissa-node — Analysis">
                    <CaissaBoardMock scale={0.75} accent={APP_ACCENT} />
                  </DesktopWindow>
                </div>
              )}
              <PhoneFrame scale={isMobile ? 0.7 : 0.95} accent={APP_ACCENT}>
                <CaissaBoardMock scale={isMobile ? 0.7 : 0.95} accent={APP_ACCENT} />
              </PhoneFrame>
            </div>
          </div>
        </div>

        {/* Meta row */}
        <MetaRow items={[
          { label: t.platform, value: 'Android · Desktop' },
          { label: 'Engine', value: 'Stockfish (WASM)' },
          { label: 'AI', value: 'Google Gemini' },
          { label: t.languages, value: 'EN · IT' },
          { label: t.license, value: 'GPL v3.0' },
        ]} />

        {/* Features */}
        <section style={{ marginTop: isMobile ? 56 : 96 }}>
          <div style={{ ...MONO, fontSize: 11, color: '#6b6b73', letterSpacing: 1.5 }}>// {t.features.toUpperCase()}</div>
          <h2 style={{ ...SERIF, fontWeight: 400, fontSize: isMobile ? 40 : 64, lineHeight: 1, letterSpacing: -1.5, margin: '16px 0 40px', color: '#e8e8ea', maxWidth: 800 }}>
            {t.featuresHeadline}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 16 }}>
            {t.f.map((f, i) => (
              <FeatureCard key={i} num={String(i + 1).padStart(2, '0')} title={f.t} desc={f.d} accent={APP_ACCENT} />
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section style={{ marginTop: isMobile ? 56 : 96 }}>
          <div style={{ ...MONO, fontSize: 11, color: '#6b6b73', letterSpacing: 1.5 }}>// {t.screenshots.toUpperCase()}</div>
          <h2 style={{ ...SERIF, fontWeight: 400, fontSize: isMobile ? 32 : 48, lineHeight: 1, letterSpacing: -1, margin: '16px 0 40px', color: '#e8e8ea' }}>
            {t.screenshotsHeadline}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, overflowX: isMobile ? 'auto' : undefined }}>
            {[
              { title: 'caissa-node — play', Mock: CaissaBoardMock },
              { title: 'caissa-node — analysis', Mock: CaissaAnalysisMock },
            ].map(({ title, Mock }) => (
              <div key={title} style={{ padding: isMobile ? '24px 12px' : '40px 20px', display: 'flex', justifyContent: 'center', background: 'radial-gradient(ellipse at center, #101015 0%, transparent 70%)', border: '1px solid #1a1a20', borderRadius: 6, minWidth: isMobile ? 320 : undefined }}>
                <DesktopWindow scale={isMobile ? 0.42 : 0.78} title={title}>
                  <Mock scale={isMobile ? 0.42 : 0.78} accent={APP_ACCENT} />
                </DesktopWindow>
              </div>
            ))}
          </div>
        </section>

        {/* API key CTA */}
        <section style={{ marginTop: isMobile ? 64 : 100, padding: isMobile ? '36px 24px' : '56px 48px', border: '1px solid #1a1a20', borderRadius: 8, background: 'linear-gradient(135deg, #0c0c10 0%, #0a0a0b 100%)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: `radial-gradient(circle, ${APP_ACCENT}14 0%, transparent 60%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 24 : 48, alignItems: isMobile ? 'flex-start' : 'flex-end' }}>
            <div style={{ flex: 1 }}>
              <div style={{ ...MONO, fontSize: 11, color: APP_ACCENT, letterSpacing: 1.5, textTransform: 'uppercase' }}>{t.ctaKicker}</div>
              <h3 style={{ ...SERIF, fontWeight: 400, fontSize: isMobile ? 32 : 44, lineHeight: 1.05, letterSpacing: -0.5, margin: '14px 0 0', color: '#e8e8ea', maxWidth: 640 }}>
                {t.ctaTitle}
              </h3>
              <p style={{ fontSize: 16, color: '#9a9aa4', marginTop: 18, maxWidth: 580, lineHeight: 1.55 }}>
                {t.ctaBody}
              </p>
            </div>
            <Link
              to="/app/caissachess/how-to-get-api-key"
              style={{
                background: APP_ACCENT, border: 'none', color: '#0a0a0b',
                fontFamily: 'Geist, sans-serif', fontSize: 14, fontWeight: 500,
                padding: '14px 22px', borderRadius: 4, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 10,
                whiteSpace: 'nowrap', textDecoration: 'none', flexShrink: 0,
              }}
            >
              {t.ctaButton} <span>→</span>
            </Link>
          </div>
        </section>

        {/* Stockfish note */}
        <section style={{ marginTop: 80, padding: '40px 0', borderTop: '1px solid #1a1a20' }}>
          <p style={{ fontSize: 13, color: '#6b6b73', ...MONO, maxWidth: 600 }}>{t.stockfishNote}</p>
        </section>

        <AppFooter lang={language} />
      </div>
    </div>
  );
};
