import { useState, useEffect } from 'react';
import type { CSSProperties, ReactNode } from 'react';

export function useBreakpoint() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return { isMobile: width < 768, isTablet: width < 1024 };
}

export const APP_ACCENT = '#4a6cf7';

// ─── Phone frame ───────────────────────────────────────────────────────────────
export function PhoneFrame({
  children,
  accent = APP_ACCENT,
  scale = 1,
  style = {},
}: {
  children: ReactNode;
  accent?: string;
  scale?: number;
  style?: CSSProperties;
}) {
  const s = scale;
  return (
    <div style={{
      width: 300 * s, height: 620 * s, borderRadius: 44 * s, padding: 8 * s,
      background: 'linear-gradient(140deg, #2a2a31 0%, #131317 55%, #0a0a0b 100%)',
      boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 1px 0 rgba(255,255,255,0.06) inset, 0 40px 80px -20px rgba(0,0,0,0.6), 0 20px 40px -10px ${accent}14`,
      position: 'relative', flexShrink: 0, ...style,
    }}>
      <div style={{
        width: '100%', height: '100%', borderRadius: 36 * s,
        background: '#0a0a0b', overflow: 'hidden', position: 'relative',
        border: '1px solid #1a1a20',
      }}>
        <div style={{
          position: 'absolute', top: 8 * s, left: '50%', transform: 'translateX(-50%)',
          width: 80 * s, height: 22 * s, borderRadius: 999, background: '#000', zIndex: 10,
        }} />
        {children}
      </div>
    </div>
  );
}

// ─── Desktop window ────────────────────────────────────────────────────────────
export function DesktopWindow({
  children,
  title = '',
  scale = 1,
  style = {},
}: {
  children: ReactNode;
  title?: string;
  scale?: number;
  style?: CSSProperties;
}) {
  const s = scale;
  return (
    <div style={{
      width: 820 * s, height: 540 * s, borderRadius: 12 * s,
      background: '#0a0a0b', border: '1px solid #1f1f24',
      boxShadow: `0 1px 0 rgba(255,255,255,0.04) inset, 0 40px 100px -20px rgba(0,0,0,0.7), 0 20px 60px -15px ${APP_ACCENT}14`,
      overflow: 'hidden', display: 'flex', flexDirection: 'column', flexShrink: 0, ...style,
    }}>
      <div style={{
        height: 32 * s, display: 'flex', alignItems: 'center',
        padding: `0 ${12 * s}px`, background: '#101015',
        borderBottom: '1px solid #1a1a20', gap: 6 * s,
      }}>
        {['#3a3a42', '#3a3a42', '#3a3a42'].map((c, i) => (
          <div key={i} style={{ width: 10 * s, height: 10 * s, borderRadius: '50%', background: c }} />
        ))}
        <div style={{ flex: 1, textAlign: 'center', fontSize: 11 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace', letterSpacing: 0.5 }}>
          {title}
        </div>
        <div style={{ width: 40 * s }} />
      </div>
      <div style={{ flex: 1, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

// ─── LapisCalc mock ────────────────────────────────────────────────────────────
export function LapisCalcMock({ accent = APP_ACCENT, scale = 1 }: { accent?: string; scale?: number }) {
  const s = scale;
  type BtnType = 'num' | 'op' | 'eq';
  const btn = (label: string, type: BtnType = 'num') => {
    const bg = type === 'op' ? '#1c1c22' : type === 'eq' ? accent : '#141418';
    const col = type === 'eq' ? '#fff' : type === 'op' ? accent : '#e8e8ea';
    return { label, bg, col, isEq: type === 'eq' };
  };
  const rows = [
    [btn('AC', 'op'), btn('( )', 'op'), btn('%', 'op'), btn('÷', 'op')],
    [btn('7'), btn('8'), btn('9'), btn('×', 'op')],
    [btn('4'), btn('5'), btn('6'), btn('−', 'op')],
    [btn('1'), btn('2'), btn('3'), btn('+', 'op')],
    [btn('±'), btn('0'), btn('.'), btn('=', 'eq')],
  ];
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 44 * s, fontFamily: 'Geist, system-ui, sans-serif', color: '#e8e8ea' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: `0 ${20 * s}px`, fontSize: 11 * s, fontFamily: 'Geist Mono, monospace', color: '#9a9aa4' }}>
        <span>9:41</span><span>●●● 100%</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `${14 * s}px ${18 * s}px ${6 * s}px` }}>
        <div style={{ width: 18 * s, height: 2 * s, background: '#6b6b73', borderRadius: 2, boxShadow: `0 ${5 * s}px 0 #6b6b73, 0 ${10 * s}px 0 #6b6b73` }} />
        <div style={{ fontSize: 13 * s, color: '#9a9aa4' }}>LapisCalc</div>
        <div style={{ width: 14 * s, height: 14 * s, border: '1.5px solid #6b6b73', borderRadius: '50%' }} />
      </div>
      <div style={{ flex: '0 0 auto', padding: `${16 * s}px ${22 * s}px ${20 * s}px`, textAlign: 'right' }}>
        <div style={{ fontSize: 15 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace' }}>128 × 4 + 96</div>
        <div style={{ fontSize: 52 * s, fontWeight: 300, lineHeight: 1, letterSpacing: -1, marginTop: 4 * s }}>608</div>
      </div>
      <div style={{ flex: 1, padding: `${8 * s}px ${12 * s}px ${20 * s}px`, display: 'grid', gridTemplateRows: 'repeat(5, 1fr)', gap: 6 * s }}>
        {rows.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 * s }}>
            {row.map((b, j) => (
              <div key={j} style={{
                background: b.bg, color: b.col, borderRadius: 14 * s,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22 * s, fontWeight: 400,
                border: b.isEq ? 'none' : '1px solid rgba(255,255,255,0.03)',
                boxShadow: b.isEq ? `0 4px 20px -4px ${accent}88` : 'none',
              }}>{b.label}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ height: 5 * s, width: 100 * s, background: '#e8e8ea', borderRadius: 3, margin: `0 auto ${8 * s}px`, opacity: 0.4 }} />
    </div>
  );
}

// ─── LapisCalc converter mock ──────────────────────────────────────────────────
export function LapisConverterMock({ accent = APP_ACCENT, scale = 1 }: { accent?: string; scale?: number }) {
  const s = scale;
  const row = (from: string, to: string, val: string, res: string) => (
    <div key={from + to} style={{ padding: `${14 * s}px ${16 * s}px`, borderBottom: '1px solid #16161b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: 11 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace', textTransform: 'uppercase', letterSpacing: 0.8 }}>{from} → {to}</div>
        <div style={{ fontSize: 20 * s, color: '#e8e8ea', marginTop: 2 * s }}>{val}</div>
      </div>
      <div style={{ fontSize: 18 * s, color: accent, fontFamily: 'Geist Mono, monospace' }}>{res}</div>
    </div>
  );
  return (
    <div style={{ width: '100%', height: '100%', paddingTop: 44 * s, fontFamily: 'Geist, system-ui, sans-serif', color: '#e8e8ea', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: `${16 * s}px ${20 * s}px ${4 * s}px`, fontSize: 11 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace', letterSpacing: 0.8 }}>CONVERTER</div>
      <div style={{ padding: `0 ${20 * s}px ${12 * s}px`, fontSize: 24 * s, fontFamily: '"Instrument Serif", serif' }}>Length</div>
      <div style={{ padding: `${10 * s}px ${16 * s}px`, margin: `0 ${16 * s}px`, background: '#141418', borderRadius: 12 * s, border: `1px solid ${accent}40` }}>
        <div style={{ fontSize: 10 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace' }}>KILOMETERS</div>
        <div style={{ fontSize: 28 * s, color: '#fff', fontFamily: 'Geist Mono, monospace' }}>42.195</div>
      </div>
      <div style={{ textAlign: 'center', fontSize: 14 * s, color: accent, padding: `${10 * s}px 0` }}>⇅</div>
      <div style={{ padding: `${10 * s}px ${16 * s}px`, margin: `0 ${16 * s}px`, background: '#141418', borderRadius: 12 * s, border: '1px solid #1a1a20' }}>
        <div style={{ fontSize: 10 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace' }}>MILES</div>
        <div style={{ fontSize: 28 * s, color: '#e8e8ea', fontFamily: 'Geist Mono, monospace' }}>26.2188</div>
      </div>
      <div style={{ marginTop: 20 * s, borderTop: '1px solid #16161b' }}>
        {row('m', 'ft', '1,000', '3,280.84')}
        {row('cm', 'in', '50', '19.685')}
        {row('yd', 'm', '100', '91.44')}
      </div>
    </div>
  );
}

// ─── LapisCalc date mock ───────────────────────────────────────────────────────
export function LapisDateMock({ accent = APP_ACCENT, scale = 1 }: { accent?: string; scale?: number }) {
  const s = scale;
  return (
    <div style={{ width: '100%', height: '100%', paddingTop: 44 * s, fontFamily: 'Geist, system-ui, sans-serif', color: '#e8e8ea' }}>
      <div style={{ padding: `${16 * s}px ${20 * s}px ${4 * s}px`, fontSize: 11 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace', letterSpacing: 0.8 }}>DATE CALCULATOR</div>
      <div style={{ padding: `0 ${20 * s}px ${20 * s}px`, fontSize: 24 * s, fontFamily: '"Instrument Serif", serif' }}>Duration</div>
      <div style={{ padding: `0 ${16 * s}px`, display: 'flex', flexDirection: 'column', gap: 10 * s }}>
        <div style={{ padding: 14 * s, background: '#141418', borderRadius: 12 * s, border: '1px solid #1a1a20' }}>
          <div style={{ fontSize: 10 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace' }}>FROM</div>
          <div style={{ fontSize: 18 * s, marginTop: 2 * s }}>14 Mar 2024</div>
        </div>
        <div style={{ padding: 14 * s, background: '#141418', borderRadius: 12 * s, border: '1px solid #1a1a20' }}>
          <div style={{ fontSize: 10 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace' }}>TO</div>
          <div style={{ fontSize: 18 * s, marginTop: 2 * s }}>20 Apr 2026</div>
        </div>
      </div>
      <div style={{ padding: `${24 * s}px ${20 * s}px`, textAlign: 'center' }}>
        <div style={{ fontSize: 64 * s, fontWeight: 300, color: accent, lineHeight: 1, fontFamily: '"Instrument Serif", serif' }}>767</div>
        <div style={{ fontSize: 13 * s, color: '#9a9aa4', marginTop: 4 * s, fontFamily: 'Geist Mono, monospace', letterSpacing: 1 }}>DAYS</div>
        <div style={{ fontSize: 12 * s, color: '#6b6b73', marginTop: 16 * s }}>2 years · 1 month · 6 days</div>
      </div>
    </div>
  );
}

// ─── Caissa board mock ─────────────────────────────────────────────────────────
export function CaissaBoardMock({ accent = APP_ACCENT, scale = 1 }: { accent?: string; scale?: number }) {
  const s = scale;
  const light = '#2a2a32', dark = '#16161b';
  const P: Record<string, string> = {
    wK: '♔', wQ: '♕', wR: '♖', wB: '♗', wN: '♘', wP: '♙',
    bK: '♚', bQ: '♛', bR: '♜', bB: '♝', bN: '♞', bP: '♟',
  };
  const board: (string | null)[][] = [
    ['bR','bN','bB','bQ','bK',null,'bN','bR'],
    ['bP','bP','bP',null,null,'bP','bP','bP'],
    [null,null,null,null,null,null,null,null],
    [null,null,null,'bP',null,null,null,null],
    [null,null,null,null,'wP',null,null,null],
    [null,null,'wN',null,null,null,null,null],
    ['wP','wP','wP','wP',null,'wP','wP','wP'],
    ['wR',null,'wB','wQ','wK','wB','wN','wR'],
  ];
  const files = ['a','b','c','d','e','f','g','h'];
  const highlight = { from: [5, 2], to: [4, 3] };
  const lastMove = { from: [6, 4], to: [4, 4] };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', background: '#0a0a0b', color: '#e8e8ea', fontFamily: 'Geist, system-ui, sans-serif' }}>
      {/* sidebar */}
      <div style={{ width: 180 * s, borderRight: '1px solid #1a1a20', display: 'flex', flexDirection: 'column', padding: 14 * s, gap: 14 * s }}>
        <div>
          <div style={{ fontSize: 10 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace', letterSpacing: 1 }}>DIFFICULTY</div>
          <div style={{ fontSize: 16 * s, marginTop: 4 * s }}>ELO 1600</div>
          <div style={{ height: 3 * s, background: '#1a1a20', borderRadius: 2, marginTop: 8 * s, overflow: 'hidden' }}>
            <div style={{ width: '55%', height: '100%', background: accent }} />
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace', letterSpacing: 1 }}>EVALUATION</div>
          <div style={{ fontSize: 22 * s, marginTop: 4 * s, fontFamily: 'Geist Mono, monospace', color: accent }}>+0.34</div>
          <div style={{ fontSize: 10 * s, color: '#6b6b73', marginTop: 2 * s }}>depth 22</div>
          <div style={{ height: 6 * s, background: '#16161b', borderRadius: 3, marginTop: 8 * s, display: 'flex' }}>
            <div style={{ width: '56%', background: '#e8e8ea', borderRadius: '3px 0 0 3px' }} />
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace', letterSpacing: 1 }}>BEST MOVE</div>
          <div style={{ fontSize: 20 * s, marginTop: 4 * s, fontFamily: 'Geist Mono, monospace' }}>Nd5</div>
        </div>
        <div style={{ marginTop: 'auto' }}>
          <div style={{ fontSize: 10 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace', letterSpacing: 1 }}>MOVES</div>
          <div style={{ fontSize: 12 * s, marginTop: 6 * s, fontFamily: 'Geist Mono, monospace', color: '#9a9aa4', lineHeight: 1.7 }}>
            1. e4 d5<br />2. Nc3 ...
          </div>
        </div>
      </div>
      {/* board */}
      <div style={{ flex: 1, padding: 18 * s, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', width: 400 * s, height: 400 * s, border: '1px solid #1a1a20', boxShadow: '0 20px 60px -10px rgba(0,0,0,0.6)' }}>
          {board.map((row, r) => row.map((piece, c) => {
            const isLight = (r + c) % 2 === 0;
            const isHighlighted = (highlight.from[0] === r && highlight.from[1] === c) || (highlight.to[0] === r && highlight.to[1] === c);
            const isLast = (lastMove.from[0] === r && lastMove.from[1] === c) || (lastMove.to[0] === r && lastMove.to[1] === c);
            return (
              <div key={`${r}-${c}`} style={{
                background: isHighlighted ? `${accent}30` : isLast ? '#2a2a3a' : isLight ? light : dark,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 32 * s, color: piece && piece[0] === 'w' ? '#fafafa' : '#16161b',
                position: 'relative', boxShadow: isHighlighted ? `inset 0 0 0 2px ${accent}` : 'none',
              }}>
                {piece && P[piece]}
                {r === 7 && <span style={{ position: 'absolute', bottom: 1, right: 3, fontSize: 8 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace' }}>{files[c]}</span>}
              </div>
            );
          }))}
        </div>
      </div>
      {/* AI panel */}
      <div style={{ width: 200 * s, borderLeft: '1px solid #1a1a20', display: 'flex', flexDirection: 'column', padding: 14 * s }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 * s }}>
          <div style={{ width: 6 * s, height: 6 * s, background: accent, borderRadius: '50%' }} />
          <div style={{ fontSize: 10 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace', letterSpacing: 1 }}>AI TUTOR</div>
        </div>
        <div style={{ flex: 1, marginTop: 12 * s, overflow: 'hidden' }}>
          <div style={{ background: '#141418', padding: 10 * s, borderRadius: 8 * s, fontSize: 11 * s, color: '#e8e8ea', lineHeight: 1.5 }}>Why is Nd5 strong here?</div>
          <div style={{ marginTop: 8 * s, padding: 10 * s, borderRadius: 8 * s, background: 'transparent', border: `1px solid ${accent}40`, fontSize: 11 * s, color: '#e8e8ea', lineHeight: 1.5 }}>
            Nd5 attacks the queen and eyes the weak c7 square. After Qxd5, exd5 leaves you with a strong central pawn…
          </div>
        </div>
        <div style={{ height: 30 * s, border: '1px solid #1a1a20', borderRadius: 6 * s, padding: `0 ${10 * s}px`, display: 'flex', alignItems: 'center', fontSize: 11 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace', marginTop: 8 * s }}>
          Ask anything...
        </div>
      </div>
    </div>
  );
}

// ─── Caissa analysis mock ──────────────────────────────────────────────────────
export function CaissaAnalysisMock({ accent = APP_ACCENT, scale = 1 }: { accent?: string; scale?: number }) {
  const s = scale;
  const moves = [
    ['1.', 'e4', 'd5', '+0.12'], ['2.', 'exd5', 'Qxd5', '+0.34'],
    ['3.', 'Nc3', 'Qa5', '+0.28'], ['4.', 'd4', 'Nf6', '+0.41'],
    ['5.', 'Nf3', 'Bf5', '+0.55'], ['6.', 'Bd2', 'e6', '+0.62'],
    ['7.', 'a3', 'c6', '+0.78'],
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: '#0a0a0b', color: '#e8e8ea', fontFamily: 'Geist, system-ui, sans-serif', padding: 20 * s, display: 'flex', flexDirection: 'column', gap: 14 * s }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <div style={{ fontSize: 10 * s, color: '#6b6b73', fontFamily: 'Geist Mono, monospace', letterSpacing: 1 }}>ANALYSIS</div>
          <div style={{ fontSize: 20 * s, fontFamily: '"Instrument Serif", serif', marginTop: 2 * s }}>Scandinavian Defense</div>
        </div>
        <div style={{ fontSize: 11 * s, color: accent, fontFamily: 'Geist Mono, monospace' }}>+0.78 / d=24</div>
      </div>
      <div style={{ height: 100 * s, background: '#101015', border: '1px solid #1a1a20', borderRadius: 6 * s, position: 'relative', overflow: 'hidden' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
          <line x1="0" y1="50" x2="400" y2="50" stroke="#1f1f24" strokeDasharray="2 4" />
          <polyline fill="none" stroke={accent} strokeWidth="1.5" points="0,52 40,48 80,45 120,46 160,42 200,38 240,36 280,32 320,30 360,26 400,22" />
          <polyline fill={accent} fillOpacity="0.08" stroke="none" points="0,52 40,48 80,45 120,46 160,42 200,38 240,36 280,32 320,30 360,26 400,22 400,100 0,100" />
        </svg>
      </div>
      <div style={{ flex: 1, background: '#101015', border: '1px solid #1a1a20', borderRadius: 6 * s, overflow: 'hidden' }}>
        {moves.map((m, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr 80px', padding: `${8 * s}px ${14 * s}px`, fontSize: 12 * s, fontFamily: 'Geist Mono, monospace', borderBottom: i < moves.length - 1 ? '1px solid #16161b' : 'none', color: '#e8e8ea' }}>
            <span style={{ color: '#6b6b73' }}>{m[0]}</span>
            <span>{m[1]}</span>
            <span>{m[2]}</span>
            <span style={{ color: accent, textAlign: 'right' }}>{m[3]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Shared UI components ──────────────────────────────────────────────────────
export function MetaRow({ items }: { items: { label: string; value: string }[] }) {
  const { isMobile } = useBreakpoint();
  const cols = isMobile ? 2 : items.length;
  const lastRowStart = items.length - (items.length % cols || cols);

  return (
    <div style={{
      borderTop: '1px solid #1a1a20', borderBottom: '1px solid #1a1a20',
      display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`,
      fontFamily: 'Geist Mono, monospace',
    }}>
      {items.map((item, i) => {
        const isLastInRow = (i + 1) % cols === 0 || i === items.length - 1;
        const isInLastRow = i >= lastRowStart;
        return (
          <div key={i} style={{
            padding: '20px 0',
            paddingLeft: i % cols > 0 ? (isMobile ? 20 : 32) : 0,
            borderRight: !isLastInRow ? '1px solid #1a1a20' : 'none',
            borderBottom: !isInLastRow ? '1px solid #1a1a20' : 'none',
          }}>
            <div style={{ fontSize: 10, color: '#6b6b73', letterSpacing: 1.5, textTransform: 'uppercase' }}>{item.label}</div>
            <div style={{ fontSize: isMobile ? 13 : 15, color: '#e8e8ea', marginTop: 6 }}>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
}

export function FeatureCard({ num, title, desc, accent = APP_ACCENT }: { num: string; title: string; desc: string; accent?: string }) {
  return (
    <div style={{ padding: '28px 24px', border: '1px solid #1a1a20', borderRadius: 6, background: '#0a0a0b' }}>
      <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: accent, letterSpacing: 1 }}>F/{num}</div>
      <h3 style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontSize: 22, margin: '10px 0 0', color: '#e8e8ea', letterSpacing: -0.3 }}>{title}</h3>
      <p style={{ fontSize: 14, color: '#9a9aa4', margin: '10px 0 0', lineHeight: 1.55 }}>{desc}</p>
    </div>
  );
}

export function GooglePlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85A1.5 1.5 0 0 1 3 20.5zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zM20.16 10.81c.34.27.59.69.59 1.19s-.25.92-.59 1.19L17.89 14.5 15.39 12l2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z"/>
    </svg>
  );
}

export function LinkButton({ href, primary = false, children, accent = APP_ACCENT }: { href: string; primary?: boolean; children: ReactNode; accent?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '13px 22px', borderRadius: 4, textDecoration: 'none',
      fontFamily: 'Geist, sans-serif', fontSize: 14, fontWeight: 500,
      ...(primary
        ? { background: accent, color: '#0a0a0b', border: `1px solid ${accent}` }
        : { background: 'transparent', color: '#e8e8ea', border: '1px solid #2a2a32' }),
    }}>
      {children}
    </a>
  );
}

export function AppFooter({ lang }: { lang: 'EN' | 'IT' }) {
  const { isMobile } = useBreakpoint();
  return (
    <footer style={{ marginTop: 64, padding: '48px 0 40px', borderTop: '1px solid #16161b', fontFamily: 'Geist Mono, monospace' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, alignItems: 'baseline' }}>
        <div style={{ fontSize: 11, color: '#6b6b73', letterSpacing: 0.5 }}>
          <div>© 2026</div>
          <div style={{ marginTop: 4 }}>Designed and built by Leonardo Galgano</div>
        </div>
        <div style={{ fontSize: 11, color: '#6b6b73', letterSpacing: 0.5, textAlign: isMobile ? 'left' : 'right' }}>
          <div>{lang === 'IT' ? 'ITALIA' : 'ITALY'}</div>
          <div style={{ marginTop: 4, color: APP_ACCENT }}>● AVAILABLE</div>
        </div>
      </div>
      <div style={{
        marginTop: 40, borderTop: '1px solid #16161b', paddingTop: 20,
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8,
        fontSize: 10, color: '#3a3a42', letterSpacing: 1,
      }}>
        <span>{isMobile ? 'INSTRUMENT SERIF · GEIST MONO' : 'TYPOGRAPHY: INSTRUMENT SERIF · GEIST · GEIST MONO'}</span>
        <span>BUILT FROM SCRATCH</span>
      </div>
    </footer>
  );
}
