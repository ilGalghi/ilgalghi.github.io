import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { AppNavbar } from './AppNavbar';
import { AppFooter, PhoneFrame, DesktopWindow, LapisCalcMock, CaissaBoardMock, APP_ACCENT, useBreakpoint } from './AppMocks';

const MONO = { fontFamily: 'Geist Mono, monospace' } as const;
const SERIF = { fontFamily: '"Instrument Serif", serif' } as const;

interface AppDef {
  id: string;
  name: string;
  tag: string;
  platform: string;
  stack: string[];
  route: string;
  preview: 'phone-lapis' | 'phone-caissa';
}

export const AppList = () => {
  const { language } = useLanguage();
  const { isMobile } = useBreakpoint();
  const lang = language === 'IT' ? 'it' : 'en';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const t = {
    kicker:  lang === 'it' ? 'Lavori selezionati' : 'Selected work',
    title:   lang === 'it' ? 'App e progetti'     : 'Apps & Projects',
    intro:   lang === 'it'
      ? 'Un piccolo catalogo personale. Ogni app risolve bene un problema, senza pubblicità né tracciamento.'
      : 'A small, personal catalog. Each app solves one problem well, without ads or tracking.',
    count:   lang === 'it' ? 'pubblicate' : 'shipped',
    view:    lang === 'it' ? 'Apri' : 'View',
    platform: lang === 'it' ? 'Piattaforma' : 'Platform',
    stack:   'Stack',
    shipped: lang === 'it' ? 'Pubblicata' : 'Shipped',
  };

  const apps: AppDef[] = [
    {
      id: 'lapiscalc', name: 'LapisCalc',
      tag:   lang === 'it'
        ? 'Una calcolatrice elegante, tranquilla e senza pubblicità per Android.'
        : 'A calm, elegant, ad-free calculator for Android.',
      platform: 'Android', stack: ['Flutter', 'Dart'],
      route: '/app/lapiscalc', preview: 'phone-lapis',
    },
    {
      id: 'caissa', name: 'Caissa Node',
      tag:   lang === 'it'
        ? 'Una moderna app di scacchi con un tutor AI sempre con te.'
        : 'A modern desktop chess app with an AI tutor in your pocket.',
      platform: 'Android · Desktop', stack: ['Electron', 'React'],
      route: '/app/caissachess', preview: 'phone-caissa',
    },
  ];

  const pad = isMobile ? '0 20px' : '0 40px';

  return (
    <div style={{ background: '#0a0a0b', minHeight: '100vh', color: '#e8e8ea' }}>
      <AppNavbar />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: pad }}>
        <div style={{ paddingTop: isMobile ? 32 : 48 }}>

          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'baseline', gap: 16, paddingBottom: 32, borderBottom: '1px solid #1a1a20', marginBottom: 40 }}>
            <div>
              <div style={{ ...MONO, fontSize: 11, color: '#6b6b73', letterSpacing: 1.5, textTransform: 'uppercase' }}>{t.kicker}</div>
              <h1 style={{ ...SERIF, fontWeight: 400, fontSize: 'clamp(48px, 9vw, 120px)', lineHeight: 0.95, letterSpacing: -2, margin: '8px 0 0', color: '#e8e8ea' }}>
                {t.title}
              </h1>
              <p style={{ fontSize: isMobile ? 15 : 17, color: '#9a9aa4', maxWidth: 520, marginTop: 14, lineHeight: 1.5 }}>{t.intro}</p>
            </div>
            <div style={{ textAlign: 'right', ...MONO, color: '#6b6b73', fontSize: 12 }}>
              <div style={{ fontSize: isMobile ? 32 : 42, color: '#e8e8ea', ...SERIF, lineHeight: 1 }}>02</div>
              <div style={{ marginTop: 4, letterSpacing: 1, fontSize: 10 }}>{t.count.toUpperCase()}</div>
            </div>
          </div>

          {/* Side-by-side or stacked cards */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', borderTop: '1px solid #1a1a20' }}>
            {apps.map((app, i) => <AppCard key={app.id} app={app} index={i} t={t} isMobile={isMobile} />)}
          </div>

        </div>
        <AppFooter lang={language} />
      </div>
    </div>
  );
};

function AppCard({ app, index, t, isMobile }: {
  app: AppDef; index: number;
  t: { view: string; platform: string; stack: string; shipped: string };
  isMobile: boolean;
}) {
  const [hover, setHover] = useState(false);
  const mockScale = isMobile ? 0.52 : 0.6;

  return (
    <Link
      to={app.route}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        padding: isMobile ? '32px 0 32px' : '40px 36px 36px',
        borderRight: !isMobile && index === 0 ? '1px solid #1a1a20' : 'none',
        borderBottom: '1px solid #1a1a20',
        textDecoration: 'none', color: 'inherit',
        background: hover ? 'rgba(74,108,247,0.02)' : 'transparent',
        transition: 'background 300ms',
      }}
    >
      {/* Mockup */}
      <div style={{ height: isMobile ? 300 : 380, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', marginBottom: isMobile ? 24 : 32 }}>
        <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: `radial-gradient(circle, ${APP_ACCENT}14 0%, transparent 65%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />

        {app.preview === 'phone-lapis' ? (
          <div style={{ position: 'relative', transition: 'transform 400ms ease', transform: hover ? 'translateY(-8px) rotate(-1deg)' : 'rotate(-2deg)' }}>
            <PhoneFrame scale={mockScale} accent={APP_ACCENT}>
              <LapisCalcMock scale={mockScale} accent={APP_ACCENT} />
            </PhoneFrame>
          </div>
        ) : (
          <div style={{ position: 'relative', transition: 'transform 400ms ease', transform: hover ? 'translateY(-8px) rotate(1deg)' : 'rotate(2deg)' }}>
            {!isMobile && (
              <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-36%, -50%) scale(0.38)', transformOrigin: 'center',
                opacity: 0.3, filter: 'grayscale(0.4)', pointerEvents: 'none',
              }}>
                <DesktopWindow scale={1} title="caissa-node">
                  <CaissaBoardMock scale={1} accent={APP_ACCENT} />
                </DesktopWindow>
              </div>
            )}
            <div style={{ position: 'relative' }}>
              <PhoneFrame scale={mockScale} accent={APP_ACCENT}>
                <CaissaBoardMock scale={mockScale} accent={APP_ACCENT} />
              </PhoneFrame>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, color: '#6b6b73', fontFamily: 'Geist Mono, monospace', letterSpacing: 1 }}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>—</span>
          <span style={{ color: APP_ACCENT }}>●</span>
          <span>{t.shipped.toUpperCase()}</span>
        </div>

        <h2 style={{
          ...SERIF, fontWeight: 400, fontSize: isMobile ? 44 : 56, lineHeight: 0.95, letterSpacing: -1.5,
          margin: '14px 0 0', color: hover ? APP_ACCENT : '#e8e8ea', transition: 'color 300ms',
        }}>
          {app.name}
        </h2>

        <p style={{ fontSize: 15, color: '#c0c0c8', marginTop: 12, lineHeight: 1.5 }}>{app.tag}</p>

        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'start', gap: '0 28px', fontFamily: 'Geist Mono, monospace', fontSize: 11 }}>
          <div style={{ color: '#6b6b73', letterSpacing: 1 }}>{t.platform.toUpperCase()}</div>
          <div style={{ color: '#6b6b73', letterSpacing: 1 }}>{t.stack.toUpperCase()}</div>
          <div style={{ color: '#e8e8ea', marginTop: 4 }}>{app.platform}</div>
          <div style={{ color: '#e8e8ea', marginTop: 4 }}>{app.stack.join(' · ')}</div>
        </div>

        <div style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, color: APP_ACCENT, fontFamily: 'Geist, sans-serif' }}>
          <span>{t.view} {app.name}</span>
          <span style={{ transition: 'transform 200ms', transform: hover ? 'translateX(6px)' : 'none' }}>→</span>
        </div>
      </div>
    </Link>
  );
}
