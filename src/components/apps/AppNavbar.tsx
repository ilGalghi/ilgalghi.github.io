import { useLanguage } from '../../hooks/useLanguage';
import { Link, useLocation } from 'react-router-dom';
import { APP_ACCENT, useBreakpoint } from './AppMocks';

export const AppNavbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const { pathname } = useLocation();
  const { isMobile } = useBreakpoint();
  const isAppList = pathname === '/app';

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      padding: '16px 0',
      background: 'rgba(10, 10, 11, 0.88)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid #16161b',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: isMobile ? '0 20px' : '0 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit', minWidth: 0 }}>
          <svg width="26" height="26" viewBox="0 0 26 26" style={{ display: 'block', flexShrink: 0 }}>
            <rect x="1" y="1" width="24" height="24" rx="4" fill="none" stroke="#2a2a32" strokeWidth="1" />
            <rect x="6" y="6" width="6" height="6" fill={APP_ACCENT} />
            <rect x="14" y="6" width="6" height="6" fill="none" stroke="#e8e8ea" strokeWidth="1" />
            <rect x="6" y="14" width="6" height="6" fill="none" stroke="#e8e8ea" strokeWidth="1" />
            <rect x="14" y="14" width="6" height="6" fill="#e8e8ea" />
          </svg>
          {!isMobile && (
            <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 20, letterSpacing: -0.3, color: '#e8e8ea', whiteSpace: 'nowrap' }}>
              Leonardo Galgano
            </span>
          )}
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 13, fontFamily: 'Geist Mono, monospace', letterSpacing: 0.5, flexShrink: 0 }}>
          {isAppList && !isMobile && (
            <span style={{ color: '#e8e8ea', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 6, height: 6, background: APP_ACCENT, borderRadius: '50%', display: 'inline-block' }} />
              APPS
            </span>
          )}
          <div style={{ display: 'flex', border: '1px solid #1f1f24', borderRadius: 4, overflow: 'hidden' }}>
            {(['EN', 'IT'] as const).map(l => (
              <button
                key={l}
                onClick={() => { if (language !== l) toggleLanguage(); }}
                style={{
                  padding: '6px 12px', border: 'none', cursor: 'pointer',
                  background: language === l ? '#1a1a20' : 'transparent',
                  color: language === l ? '#e8e8ea' : '#6b6b73',
                  fontFamily: 'Geist Mono, monospace', fontSize: 11, letterSpacing: 1,
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
