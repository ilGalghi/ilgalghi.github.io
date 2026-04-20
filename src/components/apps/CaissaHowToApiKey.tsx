import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { AppNavbar } from './AppNavbar';
import { AppFooter, PhoneFrame, MetaRow, APP_ACCENT, useBreakpoint } from './AppMocks';
import type { CSSProperties } from 'react';

const MONO = { fontFamily: 'Geist Mono, monospace' } as const;
const SERIF = { fontFamily: '"Instrument Serif", serif' } as const;

export const CaissaHowToApiKey = () => {
  const { language } = useLanguage();
  const { isMobile } = useBreakpoint();
  const lang = language === 'IT' ? 'it' : 'en';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const t = {
    back: lang === 'it' ? 'Torna a Caissa Node' : 'Back to Caissa Node',
    kicker: lang === 'it' ? 'Configurazione · 5 minuti' : 'Setup · 5 minutes',
    title: lang === 'it' ? 'Ottenere una chiave API Google Gemini' : 'Get a Google Gemini API key',
    intro: lang === 'it'
      ? 'Le funzioni di coaching e commento di Caissa Node usano Google Gemini. Crei gratis la tua chiave, la incolli nelle Impostazioni e resta sul tuo dispositivo — non la vediamo mai.'
      : 'Caissa Node\'s coaching and commentary features are powered by Google Gemini. You create your own free key, paste it into Settings, and it stays on your device — we never see it or relay it.',
    metaTime: lang === 'it' ? 'Tempo' : 'Time',
    metaTimeV: '~5 min',
    metaCost: lang === 'it' ? 'Costo' : 'Cost',
    metaCostV: lang === 'it' ? 'Piano gratuito' : 'Free tier available',
    metaReq: lang === 'it' ? 'Richiede' : 'Requires',
    metaReqV: lang === 'it' ? 'Account Google' : 'Google account',
    metaWhere: lang === 'it' ? 'Incolla in' : 'Paste into',
    metaWhereV: lang === 'it' ? 'Impostazioni → AI → Chiave API' : 'Settings → AI → API key',
    s1t: lang === 'it' ? 'Apri Google AI Studio' : 'Open Google AI Studio',
    s1d: lang === 'it'
      ? 'Vai su aistudio.google.com e accedi con un account Google. Basta un Gmail personale — niente Cloud Console, niente fatturazione per il piano gratuito.'
      : 'Go to aistudio.google.com and sign in with any Google account. A personal Gmail account is enough — no Cloud Console, no billing setup required for the free tier.',
    s1link: 'aistudio.google.com',
    s2t: lang === 'it' ? 'Apri il pannello chiavi API' : 'Open the API keys panel',
    s2d: lang === 'it'
      ? 'Nella sidebar a sinistra, clicca Get API key. Se non vedi la sidebar, apri prima il menu in alto a sinistra.'
      : 'In the left sidebar, click Get API key. If you don\'t see a sidebar, click the menu icon in the top-left first.',
    s3t: lang === 'it' ? 'Crea una nuova chiave' : 'Create a new key',
    s3d: lang === 'it'
      ? 'Clicca Create API key. Google collegherà la chiave a un progetto esistente o ne creerà uno — va bene entrambe. Accetta i termini se richiesto.'
      : 'Click Create API key. Google will either attach the key to an existing project or offer to create one for you — either is fine. Accept the terms if prompted.',
    s4t: lang === 'it' ? 'Copia la chiave' : 'Copy the key',
    s4d: lang === 'it'
      ? 'La chiave è una stringa lunga che inizia con AIza. Copiala. Puoi tornare in questa pagina in qualsiasi momento, ma trattala come una password.'
      : 'The key is a long string that starts with AIza. Copy it to your clipboard. You can come back to this page any time to view it again, but treat it like a password.',
    s4example: lang === 'it' ? 'AIzaSy… (tienila segreta)' : 'AIzaSy… (keep this secret)',
    s5t: lang === 'it' ? 'Incollala in Caissa Node' : 'Paste it into Caissa Node',
    s5d: lang === 'it'
      ? 'Apri Caissa Node, vai su Impostazioni → AI e incolla la chiave nel campo. Tocca Verifica. Un segno di spunta verde significa che sei pronto.'
      : 'Open Caissa Node, go to Settings → AI, and paste the key into the API key field. Tap Verify. A green checkmark means you\'re ready — the coach, move explanations, and opening notes will light up.',
    safetyTitle: lang === 'it' ? 'Alcune note sulla sicurezza' : 'A few notes on safety',
    safety: [
      lang === 'it'
        ? 'La chiave è memorizzata nello storage sicuro del tuo dispositivo (Keychain / Keystore). Non lascia mai il dispositivo eccetto come parte di chiamate HTTPS dirette a Google.'
        : 'The key is stored in your device\'s secure storage (Keychain / Keystore). It never leaves your device except as part of direct HTTPS calls to Google.',
      lang === 'it'
        ? 'Caissa Node non ha un server. Non c\'è account, niente telemetria, nessun proxy. Se elimini l\'app, la chiave sparisce.'
        : 'Caissa Node doesn\'t have a server. There is no account, no telemetry, no proxy. If you delete the app, the key is gone.',
      lang === 'it'
        ? 'Se sospetti che la chiave sia stata compromessa, revocala da AI Studio → API keys e creane una nuova. Ci vuole meno di un minuto.'
        : 'If you suspect the key was leaked, revoke it from AI Studio → API keys and create a new one. It takes under a minute.',
    ],
    limitsTitle: lang === 'it' ? 'Limiti del piano gratuito' : 'Free tier limits',
    limitsBody: lang === 'it'
      ? 'Il piano gratuito di Google è generoso — più che sufficiente per giocare e per la revisione post-partita. Se raggiungi un limite di frequenza, aspetta un minuto e riprova.'
      : 'Google\'s free tier is generous — more than enough for casual play and post-game review. If you hit a rate limit, wait a minute and try again, or enable billing for higher quotas.',
    troubleTitle: lang === 'it' ? 'Risoluzione dei problemi' : 'Troubleshooting',
    trouble: [
      {
        t: lang === 'it' ? 'Verifica fallisce con 403' : 'Verify fails with 403',
        d: lang === 'it'
          ? 'La Generative Language API potrebbe non essere abilitata sul tuo progetto. Apri le impostazioni della chiave in AI Studio.'
          : 'The Generative Language API may not be enabled on your project. Open the key\'s settings in AI Studio and make sure the API is allowed.',
      },
      {
        t: lang === 'it' ? 'La chiave funziona in AI Studio ma non nell\'app' : 'Key works in AI Studio but not in the app',
        d: lang === 'it'
          ? 'Controlla eventuali spazi quando incolli. La chiave deve iniziare con AIza e avere circa 39 caratteri.'
          : 'Check for stray spaces when pasting. The key should start with AIza and be about 39 characters long.',
      },
      {
        t: lang === 'it' ? 'Voglio ruotare la chiave' : 'I want to rotate the key',
        d: lang === 'it'
          ? 'Crea prima una nuova chiave in AI Studio, incollala in Caissa Node, verifica, poi elimina la vecchia.'
          : 'Create a new key in AI Studio first, paste it into Caissa Node, verify, then delete the old key from AI Studio.',
      },
    ],
    ctaOpen: lang === 'it' ? 'Apri Google AI Studio' : 'Open Google AI Studio',
  };

  const steps = [
    { num: 1, t: t.s1t, d: t.s1d, extra: 'link' as const },
    { num: 2, t: t.s2t, d: t.s2d },
    { num: 3, t: t.s3t, d: t.s3d },
    { num: 4, t: t.s4t, d: t.s4d, extra: 'key' as const },
    { num: 5, t: t.s5t, d: t.s5d, extra: 'phone' as const },
  ];

  return (
    <div style={{ background: '#0a0a0b', minHeight: '100vh', color: '#e8e8ea' }}>
      <AppNavbar />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px' }}>

        {/* Back */}
        <div style={{ paddingTop: 32 }}>
          <Link to="/app/caissachess" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...MONO, fontSize: 12, color: '#6b6b73', textDecoration: 'none', letterSpacing: 0.5, marginBottom: 40 }}>
            ← {t.back}
          </Link>
        </div>

        {/* Hero */}
        <div style={{ paddingBottom: 48, borderBottom: '1px solid #1a1a20', marginBottom: 0 }}>
          <div style={{ ...MONO, fontSize: 11, color: APP_ACCENT, letterSpacing: 1.5, textTransform: 'uppercase' }}>{t.kicker}</div>
          <h1 style={{ ...SERIF, fontWeight: 400, fontSize: isMobile ? 'clamp(36px, 10vw, 60px)' : 'clamp(48px, 7vw, 88px)', lineHeight: 0.98, letterSpacing: -1.5, margin: '12px 0 0', color: '#e8e8ea', maxWidth: 900 }}>
            {t.title}
          </h1>
          <p style={{ fontSize: isMobile ? 15 : 18, color: '#9a9aa4', marginTop: 22, maxWidth: 640, lineHeight: 1.55 }}>{t.intro}</p>
        </div>

        {/* Meta */}
        <MetaRow items={[
          { label: t.metaTime, value: t.metaTimeV },
          { label: t.metaCost, value: t.metaCostV },
          { label: t.metaReq, value: t.metaReqV },
          { label: t.metaWhere, value: t.metaWhereV },
        ]} />

        {/* Steps */}
        <section style={{ marginTop: 72 }}>
          {steps.map(s => (
            <ApiKeyStep key={s.num} num={s.num} total={steps.length} title={s.t} desc={s.d} extra={s.extra} s4example={t.s4example} s1link={t.s1link} isMobile={isMobile} />
          ))}
        </section>

        {/* Safety */}
        <section style={{ marginTop: isMobile ? 56 : 100, padding: '48px 0', borderTop: '1px solid #1a1a20' }}>
          <h3 style={{ ...SERIF, fontWeight: 400, fontSize: 36, color: '#e8e8ea', margin: 0, letterSpacing: -0.5 }}>{t.safetyTitle}</h3>
          <ul style={{ margin: '28px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 700 }}>
            {t.safety.map((s, i) => (
              <li key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 14, alignItems: 'start' }}>
                <div style={{ ...MONO, fontSize: 11, color: APP_ACCENT, letterSpacing: 1, paddingTop: 4 }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: 15, color: '#c0c0c8', lineHeight: 1.6 }}>{s}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* Free tier limits */}
        <section style={{ marginTop: 64, padding: 32, border: '1px solid #1a1a20', borderRadius: 6, background: '#0a0a0b' }}>
          <div style={{ ...MONO, fontSize: 11, color: '#6b6b73', letterSpacing: 1.5, textTransform: 'uppercase' }}>{t.limitsTitle}</div>
          <p style={{ fontSize: 15, color: '#c0c0c8', marginTop: 12, lineHeight: 1.6, maxWidth: 700 }}>{t.limitsBody}</p>
        </section>

        {/* Troubleshooting */}
        <section style={{ marginTop: isMobile ? 56 : 100 }}>
          <h3 style={{ ...SERIF, fontWeight: 400, fontSize: 36, color: '#e8e8ea', margin: 0, letterSpacing: -0.5 }}>{t.troubleTitle}</h3>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {t.trouble.map((q, i) => (
              <div key={i} style={{ padding: 24, border: '1px solid #1a1a20', borderRadius: 6, background: '#0a0a0b' }}>
                <div style={{ ...MONO, fontSize: 11, color: APP_ACCENT, letterSpacing: 1 }}>Q/{String(i + 1).padStart(2, '0')}</div>
                <div style={{ ...SERIF, fontSize: 22, color: '#e8e8ea', marginTop: 10, letterSpacing: -0.3, lineHeight: 1.2 }}>{q.t}</div>
                <p style={{ fontSize: 14, color: '#9a9aa4', marginTop: 10, lineHeight: 1.55 }}>{q.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ marginTop: isMobile ? 56 : 100, padding: '56px 0 40px', borderTop: '1px solid #1a1a20', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          <a
            href="https://aistudio.google.com/apikey"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: APP_ACCENT, color: '#0a0a0b', textDecoration: 'none', fontFamily: 'Geist, sans-serif', fontSize: 15, fontWeight: 500, padding: '16px 26px', borderRadius: 4 }}
          >
            {t.ctaOpen} ↗
          </a>
        </section>

        <AppFooter lang={language} />
      </div>
    </div>
  );
};

// ─── Step component ────────────────────────────────────────────────────────────
function ApiKeyStep({
  num, total, title, desc, extra, s4example, s1link, isMobile,
}: {
  num: number; total: number; title: string; desc: string;
  extra?: 'link' | 'key' | 'phone';
  s4example: string; s1link: string; isMobile: boolean;
}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '60px 1fr' : '80px 1fr 320px', gap: isMobile ? 20 : 40, padding: '40px 0', borderTop: '1px solid #1a1a20' }}>
      {/* Number */}
      <div>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 72, color: APP_ACCENT, lineHeight: 0.9, letterSpacing: -2 }}>
          {String(num).padStart(2, '0')}
        </div>
        <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: '#6b6b73', letterSpacing: 1, marginTop: 8 }}>
          / {String(total).padStart(2, '0')}
        </div>
      </div>

      {/* Body */}
      <div>
        <h4 style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontSize: 32, lineHeight: 1.1, letterSpacing: -0.5, margin: 0, color: '#e8e8ea' }}>
          {title}
        </h4>
        <p style={{ fontSize: 16, color: '#c0c0c8', marginTop: 14, lineHeight: 1.6, maxWidth: 560 }}>{desc}</p>
        {extra === 'link' && (
          <a href="https://aistudio.google.com" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18, padding: '10px 14px', borderRadius: 4, background: '#101015', border: '1px solid #1a1a20', color: '#e8e8ea', textDecoration: 'none', fontFamily: 'Geist Mono, monospace', fontSize: 13 }}>
            <span style={{ color: APP_ACCENT }}>↗</span> {s1link}
          </a>
        )}
        {extra === 'key' && (
          <div style={{ marginTop: 18, padding: '14px 16px', borderRadius: 4, background: '#101015', border: '1px solid #1a1a20', fontFamily: 'Geist Mono, monospace', fontSize: 13, color: '#e8e8ea', display: 'inline-block', letterSpacing: 0.5 }}>
            <span style={{ color: APP_ACCENT }}>●</span>{'  '}{s4example}
          </div>
        )}
      </div>

      {/* Illustration */}
      {!isMobile && <StepIllustration step={num} />}
    </div>
  );
}

function StepIllustration({ step }: { step: number }) {
  const frame: CSSProperties = { width: '100%', height: 200, borderRadius: 6, background: '#0a0a0b', border: '1px solid #1a1a20', padding: 16, position: 'relative', overflow: 'hidden', boxSizing: 'border-box' };
  const tabStyle: CSSProperties = { fontFamily: 'Geist Mono, monospace', fontSize: 10, color: '#6b6b73', letterSpacing: 1 };

  if (step === 1) return (
    <div style={frame}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
        {[0,1,2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: '#2a2a32' }} />)}
      </div>
      <div style={{ ...tabStyle, marginBottom: 10 }}>aistudio.google.com</div>
      <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 26, color: '#e8e8ea', lineHeight: 1.1 }}>Google AI<br />Studio</div>
      <div style={{ marginTop: 14, padding: '8px 12px', display: 'inline-block', background: APP_ACCENT, color: '#0a0a0b', borderRadius: 3, fontFamily: 'Geist, sans-serif', fontSize: 11, fontWeight: 500 }}>Sign in with Google</div>
    </div>
  );

  if (step === 2) return (
    <div style={frame}>
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 12, height: '100%' }}>
        <div style={{ borderRight: '1px solid #1a1a20', paddingRight: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {['Prompts','Chat','Tune','Get API key','Docs'].map(l => (
            <div key={l} style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, padding: '5px 6px', borderRadius: 3, background: l === 'Get API key' ? `${APP_ACCENT}22` : 'transparent', color: l === 'Get API key' ? APP_ACCENT : '#6b6b73', border: l === 'Get API key' ? `1px solid ${APP_ACCENT}55` : '1px solid transparent' }}>{l}</div>
          ))}
        </div>
        <div style={{ padding: 8 }}>
          <div style={tabStyle}>API keys</div>
          <div style={{ marginTop: 10, height: 24, background: '#101015', borderRadius: 3, border: '1px dashed #2a2a32' }} />
          <div style={{ marginTop: 8, height: 24, background: '#101015', borderRadius: 3, border: '1px dashed #2a2a32' }} />
        </div>
      </div>
    </div>
  );

  if (step === 3) return (
    <div style={frame}>
      <div style={tabStyle}>Create API key</div>
      <div style={{ marginTop: 14, padding: 12, background: '#101015', border: '1px solid #1a1a20', borderRadius: 4 }}>
        <div style={{ ...tabStyle }}>PROJECT</div>
        <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 13, color: '#e8e8ea', marginTop: 4 }}>My Project • caissa</div>
      </div>
      <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
        <div style={{ padding: '8px 14px', background: '#101015', border: '1px solid #1a1a20', borderRadius: 3, color: '#9a9aa4', fontFamily: 'Geist, sans-serif', fontSize: 11 }}>Cancel</div>
        <div style={{ padding: '8px 14px', background: APP_ACCENT, color: '#0a0a0b', borderRadius: 3, fontFamily: 'Geist, sans-serif', fontSize: 11, fontWeight: 500 }}>Create API key</div>
      </div>
    </div>
  );

  if (step === 4) return (
    <div style={frame}>
      <div style={tabStyle}>Your API key</div>
      <div style={{ marginTop: 14, padding: 14, background: '#101015', border: `1px solid ${APP_ACCENT}55`, borderRadius: 4, fontFamily: 'Geist Mono, monospace', fontSize: 13, color: '#e8e8ea', letterSpacing: 0.5, position: 'relative' }}>
        AIzaSy••••••••••••••••
        <div style={{ position: 'absolute', top: 8, right: 8, fontSize: 10, color: APP_ACCENT, fontFamily: 'Geist Mono, monospace' }}>⎘ COPY</div>
      </div>
      <div style={{ marginTop: 12, fontFamily: 'Geist Mono, monospace', fontSize: 10, color: '#6b6b73' }}>Treat this like a password.</div>
    </div>
  );

  if (step === 5) return (
    <div style={{ ...frame, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ transform: 'scale(0.52)', transformOrigin: 'center' }}>
        <PhoneFrame scale={1} accent={APP_ACCENT}>
          <div style={{ padding: 24, fontFamily: 'Geist, sans-serif' }}>
            <div style={{ fontSize: 10, color: '#6b6b73', letterSpacing: 1, fontFamily: 'Geist Mono, monospace' }}>SETTINGS • AI</div>
            <div style={{ fontSize: 18, color: '#e8e8ea', marginTop: 10, fontWeight: 500 }}>API key</div>
            <div style={{ marginTop: 14, padding: 12, background: '#101015', border: `1px solid ${APP_ACCENT}`, borderRadius: 4, fontFamily: 'Geist Mono, monospace', fontSize: 12, color: '#e8e8ea' }}>
              AIzaSy••••••••
            </div>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8, color: '#4ade80', fontSize: 13 }}>
              <span>✓</span> Verified
            </div>
          </div>
        </PhoneFrame>
      </div>
    </div>
  );

  return null;
}
