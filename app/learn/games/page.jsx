'use client';
import { useState } from 'react';

// ── utils ──────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── data ───────────────────────────────────────────────────────────────────
const ALPHA = [
  {l:'A',e:'🍎'},{l:'B',e:'🐝'},{l:'C',e:'🐱'},{l:'D',e:'🐶'},
  {l:'E',e:'🐘'},{l:'F',e:'🐟'},{l:'G',e:'🍇'},{l:'H',e:'🏠'},
  {l:'I',e:'🍦'},{l:'J',e:'🧃'},{l:'K',e:'🥝'},{l:'L',e:'🦁'},
  {l:'M',e:'🌙'},{l:'N',e:'🪺'},{l:'O',e:'🦉'},{l:'P',e:'🍕'},
  {l:'Q',e:'👸'},{l:'R',e:'🌈'},{l:'S',e:'⭐'},{l:'T',e:'🐢'},
  {l:'U',e:'☂️'},{l:'V',e:'🌋'},{l:'W',e:'🍉'},{l:'X',e:'❎'},
  {l:'Y',e:'🧶'},{l:'Z',e:'🦓'},
];

const COLORS = [
  {n:'Red',   h:'#EF4444'},
  {n:'Blue',  h:'#3B82F6'},
  {n:'Yellow',h:'#EAB308'},
  {n:'Green', h:'#22C55E'},
  {n:'Orange',h:'#F97316'},
  {n:'Purple',h:'#A855F7'},
];

const SHAPES = ['●','■','▲','★','♥','◆'];
const ANIMALS = ['🐶','🐱','🐭','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐸','🐧','🦆','🐺','🦝'];

const ROUNDS = 5;

// ── question generators ────────────────────────────────────────────────────
function makeAlphaQ() {
  const correct = ALPHA[Math.floor(Math.random() * ALPHA.length)];
  const choices = shuffle([correct, ...shuffle(ALPHA.filter(a => a.l !== correct.l)).slice(0, 3)]);
  return { correct, choices };
}

function makeColorQ() {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  const choices = shuffle([color, ...shuffle(COLORS.filter(c => c.n !== color.n)).slice(0, 3)]);
  return { color, shape, choices };
}

function makeCountQ() {
  const count = Math.floor(Math.random() * 8) + 1;
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  const nums = new Set([count]);
  while (nums.size < 4) nums.add(Math.floor(Math.random() * 8) + 1);
  return { count, animal, choices: shuffle([...nums]) };
}

// ── shared sub-components ──────────────────────────────────────────────────
function ProgressBar({ round, total, score }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontFamily: 'Fredoka', fontSize: '0.9rem', color: '#9CA3AF' }}>
          {round + 1} / {total}
        </span>
        <span style={{ fontFamily: 'Fredoka', fontSize: '0.9rem', color: '#F5A623' }}>
          {'⭐'.repeat(score)}
        </span>
      </div>
      <div style={{ height: 8, borderRadius: 999, background: '#E5E7EB', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: ((round) / total * 100) + '%',
          background: 'linear-gradient(to right, #F7C948, #F5A623)',
          borderRadius: 999,
          transition: 'width 0.4s ease',
        }} />
      </div>
    </div>
  );
}

function ResultScreen({ score, total, onReplay, onHome }) {
  const pct = score / total;
  const trophy = pct === 1 ? '🏆' : pct >= 0.6 ? '🥈' : '🥉';
  const msg   = pct === 1 ? 'Perfect! Amazing job!' : pct >= 0.6 ? 'Great job! Keep going!' : 'Nice try! Play again!';
  return (
    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
      <div style={{
        fontSize: 90, marginBottom: 12,
        animation: 'popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275)',
      }}>{trophy}</div>
      <div style={{ fontFamily: 'Fredoka', fontSize: 'clamp(2rem, 8vw, 3rem)', color: '#1B2D5B', lineHeight: 1 }}>
        {score} / {total}
      </div>
      <div style={{ fontFamily: 'DM Sans', color: '#6B7280', marginTop: 8, marginBottom: 28, fontSize: '1rem' }}>
        {msg}
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={onReplay} style={{
          fontFamily: 'Fredoka', fontSize: '1.15rem', fontWeight: 700,
          background: 'linear-gradient(to right, #F7C948, #F5A623)',
          color: '#0F1D3D', border: 'none', borderRadius: 999,
          padding: '14px 36px', cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(245,166,35,0.35)',
        }}>▶ Play Again</button>
        <button onClick={onHome} style={{
          fontFamily: 'Fredoka', fontSize: '1.15rem', fontWeight: 700,
          background: '#1B2D5B', color: '#fff', border: 'none',
          borderRadius: 999, padding: '14px 36px', cursor: 'pointer',
        }}>🏠 All Games</button>
      </div>
      <style>{`@keyframes popIn{0%{transform:scale(0)}100%{transform:scale(1)}}`}</style>
    </div>
  );
}

// ── GAME 1 — Alphabet Match ────────────────────────────────────────────────
function AlphabetGame({ onBack }) {
  const [round, setRound]       = useState(0);
  const [score, setScore]       = useState(0);
  const [q, setQ]               = useState(() => makeAlphaQ());
  const [selected, setSelected] = useState(null);
  const [done, setDone]         = useState(false);

  const pick = (choice) => {
    if (selected) return;
    setSelected(choice);
    const ok = choice.l === q.correct.l;
    if (ok) setScore(s => s + 1);
    setTimeout(() => {
      if (round + 1 >= ROUNDS) { setDone(true); return; }
      setRound(r => r + 1);
      setQ(makeAlphaQ());
      setSelected(null);
    }, 900);
  };

  const reset = () => { setRound(0); setScore(0); setQ(makeAlphaQ()); setSelected(null); setDone(false); };

  if (done) return <ResultScreen score={score} total={ROUNDS} onReplay={reset} onHome={onBack} />;

  return (
    <div>
      <ProgressBar round={round} total={ROUNDS} score={score} />
      <div style={{
        textAlign: 'center', marginBottom: 28,
        fontFamily: 'Fredoka', fontSize: 'clamp(88px, 22vw, 148px)',
        color: '#1B2D5B', lineHeight: 1,
        filter: 'drop-shadow(2px 4px 0 rgba(27,45,91,0.1))',
      }}>{q.correct.l}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, maxWidth: 380, margin: '0 auto' }}>
        {q.choices.map((c, i) => {
          const isSel = selected?.l === c.l;
          const isRight = c.l === q.correct.l;
          let bg = '#FAFAFA', border = '3px solid #E5E7EB', shadow = '0 2px 8px rgba(0,0,0,0.05)';
          if (isSel && isRight)       { bg = '#DCFCE7'; border = '3px solid #22C55E'; shadow = '0 4px 16px rgba(34,197,94,0.25)'; }
          else if (isSel && !isRight) { bg = '#FEE2E2'; border = '3px solid #EF4444'; shadow = '0 4px 16px rgba(239,68,68,0.2)'; }
          else if (selected && isRight) { bg = '#DCFCE7'; border = '3px solid #22C55E'; }
          return (
            <button key={i} onClick={() => pick(c)} style={{
              fontSize: 'clamp(44px, 12vw, 64px)', lineHeight: 1.15,
              padding: '22px 12px', borderRadius: 22,
              background: bg, border, boxShadow: shadow,
              cursor: selected ? 'default' : 'pointer',
              transition: 'all 0.25s',
              transform: isSel ? 'scale(1.06)' : 'scale(1)',
            }}>{c.e}</button>
          );
        })}
      </div>
    </div>
  );
}

// ── GAME 2 — Color Match ───────────────────────────────────────────────────
function ColorGame({ onBack }) {
  const [round, setRound]       = useState(0);
  const [score, setScore]       = useState(0);
  const [q, setQ]               = useState(() => makeColorQ());
  const [selected, setSelected] = useState(null);
  const [done, setDone]         = useState(false);

  const pick = (choice) => {
    if (selected) return;
    setSelected(choice);
    const ok = choice.n === q.color.n;
    if (ok) setScore(s => s + 1);
    setTimeout(() => {
      if (round + 1 >= ROUNDS) { setDone(true); return; }
      setRound(r => r + 1);
      setQ(makeColorQ());
      setSelected(null);
    }, 900);
  };

  const reset = () => { setRound(0); setScore(0); setQ(makeColorQ()); setSelected(null); setDone(false); };

  if (done) return <ResultScreen score={score} total={ROUNDS} onReplay={reset} onHome={onBack} />;

  return (
    <div>
      <ProgressBar round={round} total={ROUNDS} score={score} />
      <div style={{
        textAlign: 'center', marginBottom: 28,
        fontSize: 'clamp(90px, 24vw, 150px)', lineHeight: 1,
        color: q.color.h,
        filter: 'drop-shadow(3px 5px 0 rgba(0,0,0,0.12))',
        transition: 'color 0.3s',
      }}>{q.shape}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, maxWidth: 380, margin: '0 auto' }}>
        {q.choices.map((c, i) => {
          const isSel = selected?.n === c.n;
          const isRight = c.n === q.color.n;
          let outline = 'none', scale = 1;
          if (isSel && isRight)         { outline = '5px solid #22C55E'; scale = 1.08; }
          else if (isSel && !isRight)   { outline = '5px solid #EF4444'; scale = 0.94; }
          else if (selected && isRight) { outline = '5px solid #22C55E'; scale = 1.04; }
          return (
            <button key={i} onClick={() => pick(c)} style={{
              height: 84, borderRadius: 22,
              background: c.h, border: 'none',
              cursor: selected ? 'default' : 'pointer',
              outline, outlineOffset: 3,
              transform: `scale(${scale})`,
              transition: 'all 0.25s',
              boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
            }} />
          );
        })}
      </div>
    </div>
  );
}

// ── GAME 3 — Counting Fun ──────────────────────────────────────────────────
function CountingGame({ onBack }) {
  const [round, setRound]       = useState(0);
  const [score, setScore]       = useState(0);
  const [q, setQ]               = useState(() => makeCountQ());
  const [selected, setSelected] = useState(null);
  const [done, setDone]         = useState(false);

  const pick = (n) => {
    if (selected !== null) return;
    setSelected(n);
    if (n === q.count) setScore(s => s + 1);
    setTimeout(() => {
      if (round + 1 >= ROUNDS) { setDone(true); return; }
      setRound(r => r + 1);
      setQ(makeCountQ());
      setSelected(null);
    }, 900);
  };

  const reset = () => { setRound(0); setScore(0); setQ(makeCountQ()); setSelected(null); setDone(false); };

  if (done) return <ResultScreen score={score} total={ROUNDS} onReplay={reset} onHome={onBack} />;

  return (
    <div>
      <ProgressBar round={round} total={ROUNDS} score={score} />
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 6,
        justifyContent: 'center', alignItems: 'center',
        fontSize: 'clamp(30px, 8vw, 48px)',
        minHeight: 120, marginBottom: 28,
        padding: '12px 0',
        maxWidth: 380, margin: '0 auto 28px',
      }}>
        {Array.from({ length: q.count }).map((_, i) => (
          <span key={i} style={{
            display: 'inline-block',
            animation: `bounce 0.4s ease ${i * 0.06}s both`,
          }}>{q.animal}</span>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, maxWidth: 380, margin: '0 auto' }}>
        {q.choices.map((n, i) => {
          const isSel = selected === n;
          const isRight = n === q.count;
          let bg = '#FAFAFA', border = '3px solid #E5E7EB', color = '#1B2D5B', shadow = '0 2px 8px rgba(0,0,0,0.05)';
          if (isSel && isRight)         { bg = '#DCFCE7'; border = '3px solid #22C55E'; color = '#16A34A'; shadow = '0 4px 16px rgba(34,197,94,0.25)'; }
          else if (isSel && !isRight)   { bg = '#FEE2E2'; border = '3px solid #EF4444'; color = '#DC2626'; }
          else if (selected !== null && isRight) { bg = '#DCFCE7'; border = '3px solid #22C55E'; color = '#16A34A'; }
          return (
            <button key={i} onClick={() => pick(n)} style={{
              fontFamily: 'Fredoka',
              fontSize: 'clamp(40px, 11vw, 60px)',
              fontWeight: 700, color,
              padding: '16px 8px', borderRadius: 22,
              background: bg, border, boxShadow: shadow,
              cursor: selected !== null ? 'default' : 'pointer',
              transition: 'all 0.25s',
              transform: isSel && isRight ? 'scale(1.06)' : 'scale(1)',
            }}>{n}</button>
          );
        })}
      </div>
      <style>{`
        @keyframes bounce {
          0%   { transform: scale(0) rotate(-10deg); opacity: 0; }
          70%  { transform: scale(1.15) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ── GAME SELECTOR ──────────────────────────────────────────────────────────
const GAMES = [
  {
    id: 'alpha',
    label: 'A B C',
    title: 'Alphabet Match',
    desc: 'Match the letter to the right picture',
    color: '#4BA3E3',
    bg: 'linear-gradient(135deg, rgba(75,163,227,0.12), rgba(75,163,227,0.05))',
    border: 'rgba(75,163,227,0.3)',
    icon: '🔤',
  },
  {
    id: 'color',
    label: '🔴🟡🔵',
    title: 'Color Match',
    desc: 'Tap the color that matches the shape',
    color: '#F5A623',
    bg: 'linear-gradient(135deg, rgba(245,166,35,0.12), rgba(245,166,35,0.05))',
    border: 'rgba(245,166,35,0.3)',
    icon: '🎨',
  },
  {
    id: 'count',
    label: '1  2  3',
    title: 'Counting Fun',
    desc: 'Count the animals and pick the number',
    color: '#22C55E',
    bg: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(34,197,94,0.05))',
    border: 'rgba(34,197,94,0.3)',
    icon: '🔢',
  },
];

// ── PAGE ───────────────────────────────────────────────────────────────────
export default function GamesPage() {
  const [game, setGame] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFB' }}>

      <section style={{
        background: 'linear-gradient(135deg, #1B2D5B 0%, #2A3A5E 60%, #1B4A6B 100%)',
        padding: 'clamp(5rem,12vw,8rem) 1rem 2.5rem',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '3.5rem', marginBottom: 10, lineHeight: 1 }}>🎮</div>
        <h1 style={{
          fontFamily: 'Fredoka', color: '#fff',
          fontSize: 'clamp(30px, 6vw, 52px)', margin: '0 0 8px',
        }}>
          Learning <span style={{ color: '#F5A623' }}>Games</span>
        </h1>
        <p style={{
          fontFamily: 'DM Sans', color: 'rgba(255,255,255,0.65)',
          fontSize: '1rem', margin: 0,
        }}>Fun learning for little ones ✨</p>
      </section>

      <div style={{ maxWidth: 540, margin: '0 auto', padding: '2.5rem 1rem 4rem' }}>

        {!game ? (
          <div>
            <p style={{
              fontFamily: 'Fredoka', fontSize: '1.2rem', color: '#9CA3AF',
              textAlign: 'center', marginBottom: 24,
            }}>Pick an LSPA Game to Play 👇</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {GAMES.map(g => (
                <button key={g.id} onClick={() => setGame(g.id)} style={{
                  display: 'flex', alignItems: 'center', gap: 20,
                  padding: '22px 24px', borderRadius: 26,
                  background: '#fff',
                  border: `2px solid ${g.border}`,
                  cursor: 'pointer', textAlign: 'left',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}>
                  <div style={{
                    width: 76, height: 76, borderRadius: 20,
                    background: g.bg,
                    border: `2px solid ${g.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Fredoka', fontSize: '1.1rem', fontWeight: 700,
                    color: g.color, flexShrink: 0, letterSpacing: 2,
                  }}>{g.label}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: 'Fredoka', fontSize: '1.35rem',
                      color: '#1B2D5B', lineHeight: 1.2, marginBottom: 4,
                    }}>{g.title}</div>
                    <div style={{
                      fontFamily: 'DM Sans', fontSize: '0.82rem', color: '#9CA3AF',
                    }}>{g.desc}</div>
                  </div>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: g.bg, border: `2px solid ${g.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: g.color, fontSize: '1rem', flexShrink: 0,
                  }}>▶</div>
                </button>
              ))}
            </div>
          </div>

        ) : (
          <div>
            <button onClick={() => setGame(null)} style={{
              fontFamily: 'DM Sans', fontSize: '0.88rem', fontWeight: 600,
              color: '#6B7280', background: 'none', border: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              gap: 6, marginBottom: 20, padding: 0,
            }}>← All Games</button>

            {(() => {
              const g = GAMES.find(x => x.id === game);
              return (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  marginBottom: 24,
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{g.icon}</span>
                  <span style={{ fontFamily: 'Fredoka', fontSize: '1.4rem', color: '#1B2D5B' }}>{g.title}</span>
                </div>
              );
            })()}

            <div style={{
              background: '#fff', borderRadius: 28,
              padding: 'clamp(24px, 6vw, 40px)',
              boxShadow: '0 8px 40px rgba(27,45,91,0.09)',
            }}>
              {game === 'alpha' && <AlphabetGame onBack={() => setGame(null)} />}
              {game === 'color' && <ColorGame    onBack={() => setGame(null)} />}
              {game === 'count' && <CountingGame onBack={() => setGame(null)} />}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
