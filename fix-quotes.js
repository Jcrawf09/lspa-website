const fs = require('fs');

const quotes = `"use client";
import { useState, useEffect } from "react";

const KIDS = [
  {
    quote: "You can do hard things.",
    author: "A message for every child",
    bg: "#FDE8E8",
    accent: "#F472B6",
  },
  {
    quote: "Be curious. Ask questions. Explore!",
    author: "A message for every child",
    bg: "#E8F0FE",
    accent: "#3B82F6",
  },
  {
    quote: "Mistakes help us learn and grow.",
    author: "A message for every child",
    bg: "#FEF3C7",
    accent: "#F59E0B",
  },
  {
    quote: "Dream big, little one!",
    author: "A message for every child",
    bg: "#FEF9C3",
    accent: "#16A34A",
  },
  {
    quote: "Kindness makes the world more beautiful.",
    author: "A message for every child",
    bg: "#DCFCE7",
    accent: "#22C55E",
  },
  {
    quote: "Every day is a chance to be amazing.",
    author: "A message for every child",
    bg: "#EDE9FE",
    accent: "#8B5CF6",
  },
];

function KidFace({ index, size = 80 }) {
  const faces = [
    // 0 – girl, light skin, pink bow
    <svg key={0} viewBox="0 0 100 100" width={size} height={size}>
      <circle cx="50" cy="56" r="34" fill="#F5C5A3"/>
      <ellipse cx="50" cy="26" rx="22" ry="14" fill="#5C3D1E"/>
      <circle cx="50" cy="22" r="10" fill="#5C3D1E"/>
      <ellipse cx="36" cy="25" rx="8" ry="5" fill="#F472B6" transform="rotate(-20 36 25)"/>
      <ellipse cx="64" cy="25" rx="8" ry="5" fill="#F472B6" transform="rotate(20 64 25)"/>
      <circle cx="50" cy="24" r="5" fill="#EC4899"/>
      <ellipse cx="39" cy="52" rx="5" ry="6" fill="#fff"/>
      <ellipse cx="61" cy="52" rx="5" ry="6" fill="#fff"/>
      <circle cx="40" cy="53" r="3" fill="#3B1F0A"/>
      <circle cx="62" cy="53" r="3" fill="#3B1F0A"/>
      <circle cx="41" cy="51" r="1" fill="#fff"/>
      <circle cx="63" cy="51" r="1" fill="#fff"/>
      <ellipse cx="32" cy="63" rx="7" ry="4" fill="#F9A8D4" opacity="0.5"/>
      <ellipse cx="68" cy="63" rx="7" ry="4" fill="#F9A8D4" opacity="0.5"/>
      <path d="M38 68 Q50 78 62 68" stroke="#C97C5A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42 68 Q50 74 58 68" fill="#fff"/>
    </svg>,
    // 1 – boy, medium brown, red cap
    <svg key={1} viewBox="0 0 100 100" width={size} height={size}>
      <circle cx="50" cy="56" r="34" fill="#C68642"/>
      <ellipse cx="50" cy="28" rx="26" ry="10" fill="#E53E3E"/>
      <rect x="24" y="24" width="52" height="8" rx="2" fill="#C53030"/>
      <rect x="14" y="30" width="20" height="5" rx="2" fill="#E53E3E"/>
      <ellipse cx="39" cy="52" rx="5" ry="6" fill="#fff"/>
      <ellipse cx="61" cy="52" rx="5" ry="6" fill="#fff"/>
      <circle cx="40" cy="53" r="3" fill="#1A0A00"/>
      <circle cx="62" cy="53" r="3" fill="#1A0A00"/>
      <circle cx="41" cy="51" r="1" fill="#fff"/>
      <circle cx="63" cy="51" r="1" fill="#fff"/>
      <ellipse cx="32" cy="63" rx="7" ry="4" fill="#F9A8D4" opacity="0.4"/>
      <ellipse cx="68" cy="63" rx="7" ry="4" fill="#F9A8D4" opacity="0.4"/>
      <path d="M38 68 Q50 78 62 68" stroke="#8B5E3C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42 68 Q50 74 58 68" fill="#fff"/>
    </svg>,
    // 2 – girl, light tan, blonde, purple bow
    <svg key={2} viewBox="0 0 100 100" width={size} height={size}>
      <circle cx="50" cy="56" r="34" fill="#FDDCB5"/>
      <ellipse cx="50" cy="26" rx="24" ry="14" fill="#D4A017"/>
      <ellipse cx="30" cy="40" rx="9" ry="18" fill="#D4A017"/>
      <ellipse cx="70" cy="40" rx="9" ry="18" fill="#D4A017"/>
      <ellipse cx="64" cy="27" rx="8" ry="5" fill="#A855F7" transform="rotate(20 64 27)"/>
      <ellipse cx="80" cy="27" rx="8" ry="5" fill="#A855F7" transform="rotate(-20 80 27)"/>
      <circle cx="72" cy="26" r="5" fill="#9333EA"/>
      <ellipse cx="39" cy="52" rx="5" ry="6" fill="#fff"/>
      <ellipse cx="61" cy="52" rx="5" ry="6" fill="#fff"/>
      <circle cx="40" cy="53" r="3" fill="#1E3A5F"/>
      <circle cx="62" cy="53" r="3" fill="#1E3A5F"/>
      <circle cx="41" cy="51" r="1" fill="#fff"/>
      <circle cx="63" cy="51" r="1" fill="#fff"/>
      <ellipse cx="32" cy="63" rx="7" ry="4" fill="#F9A8D4" opacity="0.5"/>
      <ellipse cx="68" cy="63" rx="7" ry="4" fill="#F9A8D4" opacity="0.5"/>
      <path d="M38 68 Q50 78 62 68" stroke="#B07850" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42 68 Q50 74 58 68" fill="#fff"/>
    </svg>,
    // 3 – boy, deep brown, green flat cap
    <svg key={3} viewBox="0 0 100 100" width={size} height={size}>
      <circle cx="50" cy="56" r="34" fill="#8D5524"/>
      <ellipse cx="50" cy="27" rx="28" ry="10" fill="#16A34A"/>
      <rect x="22" y="23" width="56" height="9" rx="3" fill="#15803D"/>
      <rect x="12" y="30" width="22" height="5" rx="2" fill="#16A34A"/>
      <ellipse cx="39" cy="52" rx="5" ry="6" fill="#fff"/>
      <ellipse cx="61" cy="52" rx="5" ry="6" fill="#fff"/>
      <circle cx="40" cy="53" r="3" fill="#0A0500"/>
      <circle cx="62" cy="53" r="3" fill="#0A0500"/>
      <circle cx="41" cy="51" r="1" fill="#fff"/>
      <circle cx="63" cy="51" r="1" fill="#fff"/>
      <ellipse cx="32" cy="63" rx="7" ry="4" fill="#F9A8D4" opacity="0.4"/>
      <ellipse cx="68" cy="63" rx="7" ry="4" fill="#F9A8D4" opacity="0.4"/>
      <path d="M38 68 Q50 78 62 68" stroke="#5C3310" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42 68 Q50 74 58 68" fill="#fff"/>
    </svg>,
    // 4 – girl, fair skin, dark hair, flower
    <svg key={4} viewBox="0 0 100 100" width={size} height={size}>
      <circle cx="50" cy="56" r="34" fill="#FDDCB5"/>
      <ellipse cx="50" cy="26" rx="22" ry="14" fill="#1C1008"/>
      <ellipse cx="30" cy="38" rx="8" ry="16" fill="#1C1008"/>
      <ellipse cx="70" cy="38" rx="8" ry="16" fill="#1C1008"/>
      <circle cx="65" cy="19" r="4" fill="#FCD34D"/>
      <circle cx="72" cy="22" r="4" fill="#FCD34D"/>
      <circle cx="72" cy="30" r="4" fill="#FCD34D"/>
      <circle cx="65" cy="33" r="4" fill="#FCD34D"/>
      <circle cx="58" cy="30" r="4" fill="#FCD34D"/>
      <circle cx="58" cy="22" r="4" fill="#FCD34D"/>
      <circle cx="65" cy="26" r="5" fill="#F97316"/>
      <ellipse cx="39" cy="52" rx="5" ry="6" fill="#fff"/>
      <ellipse cx="61" cy="52" rx="5" ry="6" fill="#fff"/>
      <circle cx="40" cy="53" r="3" fill="#1E3A5F"/>
      <circle cx="62" cy="53" r="3" fill="#1E3A5F"/>
      <circle cx="41" cy="51" r="1" fill="#fff"/>
      <circle cx="63" cy="51" r="1" fill="#fff"/>
      <ellipse cx="32" cy="63" rx="7" ry="4" fill="#F9A8D4" opacity="0.5"/>
      <ellipse cx="68" cy="63" rx="7" ry="4" fill="#F9A8D4" opacity="0.5"/>
      <path d="M38 68 Q50 78 62 68" stroke="#B07850" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42 68 Q50 74 58 68" fill="#fff"/>
    </svg>,
    // 5 – boy, medium brown, gold button
    <svg key={5} viewBox="0 0 100 100" width={size} height={size}>
      <circle cx="50" cy="56" r="34" fill="#C68642"/>
      <ellipse cx="50" cy="26" rx="22" ry="14" fill="#3B1F0A"/>
      <circle cx="67" cy="30" r="6" fill="#F59E0B"/>
      <circle cx="67" cy="30" r="3.5" fill="#FDE68A"/>
      <ellipse cx="39" cy="52" rx="5" ry="6" fill="#fff"/>
      <ellipse cx="61" cy="52" rx="5" ry="6" fill="#fff"/>
      <circle cx="40" cy="53" r="3" fill="#1A0A00"/>
      <circle cx="62" cy="53" r="3" fill="#1A0A00"/>
      <circle cx="41" cy="51" r="1" fill="#fff"/>
      <circle cx="63" cy="51" r="1" fill="#fff"/>
      <ellipse cx="32" cy="63" rx="7" ry="4" fill="#F9A8D4" opacity="0.4"/>
      <ellipse cx="68" cy="63" rx="7" ry="4" fill="#F9A8D4" opacity="0.4"/>
      <path d="M38 68 Q50 78 62 68" stroke="#8B5E3C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M42 68 Q50 74 58 68" fill="#fff"/>
    </svg>,
  ];
  return faces[index] || faces[0];
}

const STYLE = \`
  @keyframes rainbowFlow {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes modalPop {
    from { opacity: 0; transform: translate(-50%, -46%) scale(0.9); }
    to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }
  .q-overlay {
    position: fixed; inset: 0; z-index: 9990;
    background-color: rgba(10, 12, 24, 0.80);
    background-image: linear-gradient(
      135deg,
      rgba(229,75,75,0.25) 0%,
      rgba(245,166,35,0.22) 17%,
      rgba(247,201,72,0.20) 33%,
      rgba(76,175,80,0.22) 50%,
      rgba(75,163,227,0.25) 67%,
      rgba(139,92,246,0.22) 83%,
      rgba(229,75,75,0.25) 100%
    );
    background-size: 400% 400%;
    animation: rainbowFlow 8s ease infinite;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .q-modal {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    width: min(460px, 92vw);
    background: #fff;
    border-radius: 28px;
    padding: 2.5rem 2rem 2rem;
    box-shadow: 0 40px 100px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: hidden;
    animation: modalPop 0.32s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  .q-rainbow {
    position: absolute; top: 0; left: 0; right: 0; height: 5px;
    background: linear-gradient(90deg,#E54B4B,#F5A623,#F7C948,#4CAF50,#4BA3E3,#8B5CF6,#E54B4B);
    background-size: 300% 100%;
    animation: rainbowFlow 3s ease infinite;
  }
  .q-card {
    border-radius: 20px;
    padding: 2rem 1.5rem;
    display: flex; flex-direction: column; align-items: center; text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
    border: 2px solid transparent;
    outline: none;
  }
  .q-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 32px rgba(0,0,0,0.1);
  }
\`;

export default function Quotes() {
  const [active, setActive] = useState(null);

  // Inject styles once
  useEffect(() => {
    if (document.getElementById("q-style")) return;
    const el = document.createElement("style");
    el.id = "q-style";
    el.textContent = STYLE;
    document.head.appendChild(el);
  }, []);

  // Escape key
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  const kid = active !== null ? KIDS[active] : null;

  return (
    <>
      {/* SECTION */}
      <section style={{ background: "#FFFDF7", padding: "5rem 1rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <span style={{
              display: "inline-block", background: "#EBF5FF", color: "#2563EB",
              fontFamily: "DM Sans, sans-serif", fontSize: "0.72rem", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              padding: "0.35rem 1rem", borderRadius: "999px",
            }}>Words to Grow By</span>
          </div>
          <h2 style={{
            textAlign: "center", fontFamily: "Fredoka, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#0F1D3D", marginBottom: "3rem",
          }}>
            Little Hearts, <span style={{ color: "#F5A623" }}>Big Inspiration</span>
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: "1.25rem",
          }}>
            {KIDS.map((k, i) => (
              <div
                key={i}
                className="q-card"
                onClick={() => setActive(i)}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActive(i)}
                style={{ background: k.bg, borderColor: "transparent" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = k.accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
              >
                <div style={{
                  background: "#fff", borderRadius: "50%",
                  width: 110, height: 110,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.25rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: 8,
                }}>
                  <KidFace index={i} size={88} />
                </div>
                <p style={{
                  fontFamily: "Fredoka, sans-serif", fontSize: "1.05rem",
                  fontWeight: 600, color: "#0F1D3D", lineHeight: 1.4, marginBottom: "0.75rem",
                }}>{k.quote}</p>
                <span style={{
                  fontSize: "0.7rem", fontFamily: "DM Sans, sans-serif",
                  color: k.accent, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
                }}>Tap to reflect ✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL OVERLAY */}
      {active !== null && (
        <div className="q-overlay" onClick={() => setActive(null)} />
      )}

      {/* MODAL CARD */}
      {active !== null && kid && (
        <div className="q-modal">
          <div className="q-rainbow" />

          {/* Close X */}
          <button
            onClick={() => setActive(null)}
            style={{
              position: "absolute", top: 14, right: 14,
              background: "#f3f4f6", border: "none", borderRadius: "50%",
              width: 32, height: 32, cursor: "pointer",
              fontSize: "0.95rem", color: "#6b7280",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >✕</button>

          {/* Face */}
          <div style={{
            background: kid.bg, borderRadius: "50%",
            width: 160, height: 160,
            display: "flex", alignItems: "center", justifyContent: "center",
            marginTop: "0.75rem", marginBottom: "1.5rem", padding: 14,
            boxShadow: \`0 10px 30px \${kid.accent}55\`,
          }}>
            <KidFace index={active} size={130} />
          </div>

          {/* Quote */}
          <p style={{
            fontFamily: "Fredoka, sans-serif",
            fontSize: "clamp(1.25rem, 4vw, 1.65rem)",
            fontWeight: 600, color: "#0F1D3D",
            lineHeight: 1.35, maxWidth: 360, marginBottom: "1rem",
          }}>
            {"\u201C"}{kid.quote}{"\u201D"}
          </p>

          <div style={{
            width: 44, height: 3, borderRadius: 2,
            background: kid.accent, marginBottom: "0.75rem",
          }} />

          <p style={{
            fontFamily: "DM Sans, sans-serif", fontSize: "0.8rem",
            color: "#9ca3af", fontStyle: "italic", marginBottom: "1.75rem",
          }}>{kid.author}</p>

          <button
            onClick={() => setActive(null)}
            style={{
              padding: "0.65rem 2.2rem",
              background: kid.accent, color: "#fff",
              border: "none", borderRadius: "999px",
              fontFamily: "Fredoka, sans-serif", fontWeight: 600,
              fontSize: "1rem", cursor: "pointer",
              boxShadow: \`0 6px 18px \${kid.accent}55\`,
            }}
          >Close</button>
        </div>
      )}
    </>
  );
}
`;

fs.writeFileSync('app/components/Quotes.jsx', quotes, 'utf8');
console.log('Quotes.jsx written.');

// Patch page.jsx
let page = fs.readFileSync('app/page.jsx', 'utf8');

if (!page.includes("import Quotes")) {
  page = page.replace(
    /import CTA from ['"]\.\/components\/CTA['"];?/,
    "import CTA from './components/CTA';\nimport Quotes from './components/Quotes';"
  );
  console.log('Quotes import added.');
} else {
  console.log('Quotes import already present.');
}

if (!page.includes('<Quotes')) {
  page = page.replace(/<\/main>/, '<Quotes/></main>');
  console.log('<Quotes/> added to render.');
} else {
  console.log('<Quotes/> already in render.');
}

fs.writeFileSync('app/page.jsx', page, 'utf8');
console.log('\nDone. Refresh localhost:3000 and click any card.');
