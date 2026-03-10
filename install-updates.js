// ═══════════════════════════════════════════════════════════════
//  LSPA WEBSITE UPDATE SCRIPT
//  Run from: C:\Users\johnt\Downloads\lspa-website
//  Command:  node install-updates.js
// ═══════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('  CREATED: ' + filePath + ' (' + content.length + ' bytes)');
}

console.log('\n========================================');
console.log('  LSPA Website Update Installer');
console.log('========================================\n');

// ─────────────────────────────────────────────
// 1. CREATE: app/components/LearnMoreModal.jsx
// ─────────────────────────────────────────────
console.log('[1/4] Creating LearnMoreModal component...');

const learnMoreModal = `'use client';
import { useState, useEffect } from 'react';

const features = [
  { emoji: '\\ud83d\\udcda', title: 'Creative Curriculum', text: 'Research-backed learning through play and hands-on discovery.', color: '#3B82F6' },
  { emoji: '\\ud83d\\udc69\\u200d\\ud83c\\udfeb', title: 'NJ Certified Teachers', text: 'Every classroom led by a state-certified early childhood educator.', color: '#10B981' },
  { emoji: '\\ud83e\\udd1d', title: 'Family Partnership', text: 'Bilingual family liaisons connect you with community resources.', color: '#F59E0B' },
  { emoji: '\\ud83c\\udf08', title: 'Two Locations', text: '540 N. Olden Ave in Trenton and 1040 Spruce St in Lawrence.', color: '#EF4444' },
  { emoji: '\\ud83c\\udfa8', title: 'Enrichment Programs', text: 'Music, art, physical education, and technology in daily learning.', color: '#8B5CF6' },
  { emoji: '\\ud83c\\udf0d', title: 'Bilingual Support', text: 'English and Spanish-speaking staff ensuring every family feels welcome.', color: '#0EA5E9' },
];

function FeatureCard({ feature, index, isVisible }) {
  const [hovered, setHovered] = useState(false);
  const { emoji, title, text, color } = feature;
  const d = (0.2 + index * 0.08).toFixed(2);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', background: hovered ? '#f8faf9' : '#fff',
        borderRadius: 16, padding: '28px 24px', cursor: 'default',
        border: '1px solid #e8efe9', overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        transition: 'opacity 0.5s ease ' + d + 's, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ' + d + 's, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        boxShadow: hovered ? '0 8px 24px ' + color + '22, 0 0 0 1px ' + color + '33' : '0 2px 8px rgba(0,0,0,0.04)',
        borderColor: hovered ? color + '44' : '#e8efe9',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: color, transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)' }} />
      <div style={{ fontSize: 32, marginBottom: 12, lineHeight: 1, transform: hovered ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)', display: 'inline-block' }}>{emoji}</div>
      <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, fontWeight: 700, color: '#1a3a2a', margin: '0 0 8px' }}>{title}</h3>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#6b8f7b', lineHeight: 1.6, margin: 0 }}>{text}</p>
    </div>
  );
}

export default function LearnMoreModal({ open, onClose }) {
  const [phase, setPhase] = useState('closed');

  useEffect(() => {
    if (open && phase === 'closed') {
      setPhase('entering');
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase('open')));
    }
    if (!open && (phase === 'open' || phase === 'entering')) {
      setPhase('exiting');
      const t = setTimeout(() => setPhase('closed'), 500);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (phase === 'closed') return;
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [phase, onClose]);

  useEffect(() => {
    if (phase !== 'closed') { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
    return () => { document.body.style.overflow = ''; };
  }, [phase]);

  if (phase === 'closed') return null;
  const vis = phase === 'open';

  return (
    <>
      <style>{\`
        @keyframes lmShimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes lmFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes lmGlow { 0%,100% { box-shadow: 0 32px 80px rgba(0,0,0,.25), 0 0 20px rgba(72,168,112,.15); } 50% { box-shadow: 0 32px 80px rgba(0,0,0,.25), 0 0 40px rgba(72,168,112,.3); } }
      \`}</style>

      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 9998,
        background: 'rgba(10,30,20,0.65)',
        backdropFilter: vis ? 'blur(12px)' : 'blur(0)',
        WebkitBackdropFilter: vis ? 'blur(12px)' : 'blur(0)',
        opacity: vis ? 1 : 0,
        transition: 'opacity 0.4s ease, backdrop-filter 0.5s ease',
      }} />

      <div style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24, pointerEvents: vis ? 'auto' : 'none',
      }}>
        <div onClick={e => e.stopPropagation()} style={{
          position: 'relative', width: '100%', maxWidth: 880, maxHeight: '85vh', overflowY: 'auto',
          background: '#fff', borderRadius: 24,
          opacity: vis ? 1 : 0,
          transform: vis ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(40px)',
          transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease',
          animation: vis ? 'lmGlow 3s ease-in-out infinite' : 'none',
        }}>
          {/* Animated rainbow bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4, borderRadius: '24px 24px 0 0',
            background: 'linear-gradient(90deg, #2e7d52, #48a870, #F59E0B, #3B82F6, #8B5CF6, #2e7d52)',
            backgroundSize: '200% 100%',
            animation: vis ? 'lmShimmer 4s linear infinite' : 'none',
          }} />

          {/* Close button */}
          <button onClick={onClose} style={{
            position: 'sticky', top: 16, float: 'right', marginRight: 16, marginTop: 16, zIndex: 10,
            width: 40, height: 40, borderRadius: '50%', border: 'none', cursor: 'pointer',
            background: 'rgba(0,0,0,0.06)', color: '#4a6355', fontSize: 20, fontWeight: 600,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'rotate(90deg)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'rotate(0deg)'; }}
          >\\u2715</button>

          <div style={{ padding: '48px 40px 40px', clear: 'both' }}>
            {/* Header */}
            <div style={{
              textAlign: 'center', marginBottom: 40,
              opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.15s',
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'linear-gradient(135deg,#2e7d52,#48a870)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
                animation: vis ? 'lmFloat 3s ease-in-out infinite' : 'none',
                boxShadow: '0 8px 24px rgba(46,125,82,0.25)',
              }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: '#fff', fontFamily: 'DM Sans' }}>LS</span>
              </div>
              <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(24px,4vw,36px)', fontWeight: 700, color: '#1a3a2a', lineHeight: 1.2, margin: '0 0 12px' }}>
                A Legacy of Nurturing{' '}
                <span style={{ background: 'linear-gradient(135deg,#2e7d52,#48a870)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Young Minds</span>
              </h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: '#6b8f7b', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
                For over 20 years, Laura Spelman Preschool Academy has served the Trenton community with completely free, high-quality preschool education.
              </p>
            </div>

            {/* Feature cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20 }}>
              {features.map((f, i) => <FeatureCard key={i} feature={f} index={i} isVisible={vis} />)}
            </div>

            {/* Bottom CTA */}
            <div style={{
              textAlign: 'center', marginTop: 36,
              opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.7s',
            }}>
              <a href="/about-us" style={{
                display: 'inline-block', fontFamily: 'DM Sans, sans-serif',
                fontSize: 15, fontWeight: 600, color: '#fff',
                background: 'linear-gradient(135deg,#2e7d52,#48a870)',
                padding: '14px 36px', borderRadius: 50, textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(46,125,82,0.3)',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(46,125,82,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(46,125,82,0.3)'; }}
              >Read Our Full Story \\u2192</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
`;

writeFile('app/components/LearnMoreModal.jsx', learnMoreModal);


// ─────────────────────────────────────────────
// 2. CREATE: app/about-us/page.jsx
// ─────────────────────────────────────────────
console.log('[2/4] Creating About Us page...');

const aboutPage = `'use client';
import { useState, useEffect, useRef } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.style.opacity = 1; el.style.transform = 'translateY(0)'; } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(32px)', transition: 'opacity 0.7s ease ' + delay + 's, transform 0.7s ease ' + delay + 's', ...style }}>
      {children}
    </div>
  );
}

function AboutHero() {
  return (
    <section style={{
      position: 'relative', minHeight: 420,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a5c3a 0%, #2e7d52 40%, #48a870 100%)',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', top: -80, right: -60 }} />
      <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', bottom: -40, left: '10%' }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '80px 24px 60px', maxWidth: 720 }}>
        <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: 16 }}>Our Story</p>
        <h1 style={{ fontFamily: 'DM Sans', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, margin: '0 0 20px' }}>
          About Laura Spelman<br />Preschool Academy
        </h1>
        <p style={{ fontFamily: 'DM Sans', fontSize: 18, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, maxWidth: 560, margin: '0 auto' }}>
          A district-partnered preschool committed to nurturing every child\\u2019s potential through innovative, research-based early education.
        </p>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
        <FadeIn style={{ flex: '1 1 280px', minWidth: 260 }}>
          <div style={{
            width: '100%', aspectRatio: '3/4', maxWidth: 340, borderRadius: 16,
            background: 'linear-gradient(160deg, #d4edda 0%, #a8d8b9 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 12px 40px rgba(30,90,58,0.12)',
          }}>
            <span style={{ fontFamily: 'DM Sans', fontSize: 14, color: '#2e7d52', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Founder Photo</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.15} style={{ flex: '1 1 360px' }}>
          <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#48a870', marginBottom: 12 }}>Our Founder</p>
          <h2 style={{ fontFamily: 'DM Sans', fontSize: 36, fontWeight: 700, color: '#1a3a2a', lineHeight: 1.2, margin: '0 0 20px' }}>Melody Crawford-Cannon</h2>
          <p style={{ fontFamily: 'DM Sans', fontSize: 16, color: '#4a6355', lineHeight: 1.75, margin: '0 0 16px' }}>
            Melody Crawford-Cannon founded Laura Spelman Preschool Academy with a simple but powerful belief: every child in Trenton deserves access to a world-class early education. With deep roots in the community and a background in business operations, Melody built LSPA from a single classroom into a two-campus program serving families across the city.
          </p>
          <p style={{ fontFamily: 'DM Sans', fontSize: 16, color: '#4a6355', lineHeight: 1.75, margin: 0 }}>
            Under her leadership, LSPA became a trusted district partner through Trenton Public Schools\\u2019 Office of Early Childhood \\u2014 providing high-quality, state-funded preschool programming that meets or exceeds NJDOE standards. Melody\\u2019s vision has always been clear: build something that lasts, and build it for the children who need it most.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

const milestones = [
  { year: '2015', title: 'The Beginning', text: 'Laura Spelman Preschool Academy opens its doors at 540 N. Olden Avenue in Trenton, welcoming its first class of preschool students.' },
  { year: '2017', title: 'District Partnership', text: 'LSPA establishes a formal contract with Trenton Public Schools\\u2019 Office of Early Childhood, becoming a district-partnered preschool provider.' },
  { year: '2019', title: 'Expanding Our Reach', text: 'A second campus opens at 1040 Spruce Street in Lawrence, broadening access for families throughout the greater Trenton area.' },
  { year: '2023', title: 'Curriculum Excellence', text: 'LSPA adopts a research-based curriculum aligned with the New Jersey Preschool Teaching and Learning Standards, earning recognition from district coaches.' },
  { year: '2026', title: 'Growth & Innovation', text: 'Planning begins for a fourth classroom at the Spruce Street campus, alongside a new digital platform to strengthen family engagement.' },
];

function TimelineSection() {
  return (
    <section style={{ padding: '80px 24px', background: '#f7faf8' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FadeIn>
          <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#48a870', textAlign: 'center', marginBottom: 12 }}>Our Journey</p>
          <h2 style={{ fontFamily: 'DM Sans', fontSize: 36, fontWeight: 700, color: '#1a3a2a', textAlign: 'center', margin: '0 0 48px' }}>A Decade of Impact</h2>
        </FadeIn>
        <div style={{ position: 'relative', paddingLeft: 36 }}>
          <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: 'linear-gradient(180deg, #48a870, #d4edda)' }} />
          {milestones.map((m, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ position: 'relative', marginBottom: i < milestones.length - 1 ? 40 : 0 }}>
                <div style={{ position: 'absolute', left: -36, top: 6, width: 24, height: 24, borderRadius: '50%', background: '#fff', border: '3px solid #48a870', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2e7d52' }} />
                </div>
                <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#48a870', margin: '0 0 4px' }}>{m.year}</p>
                <h3 style={{ fontFamily: 'DM Sans', fontSize: 20, fontWeight: 700, color: '#1a3a2a', margin: '0 0 8px' }}>{m.title}</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: 15, color: '#4a6355', lineHeight: 1.7, margin: 0 }}>{m.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { number: '2', label: 'Campuses', sub: 'Trenton & Lawrence' },
  { number: '120+', label: 'Students', sub: 'Enrolled annually' },
  { number: '6', label: 'Classrooms', sub: 'Across both locations' },
  { number: '10+', label: 'Years', sub: 'Serving Trenton families' },
];

function StatsSection() {
  return (
    <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1a5c3a 0%, #2e7d52 100%)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <FadeIn>
          <h2 style={{ fontFamily: 'DM Sans', fontSize: 36, fontWeight: 700, color: '#fff', textAlign: 'center', margin: '0 0 48px' }}>LSPA by the Numbers</h2>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32 }}>
          {stats.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: '36px 24px', textAlign: 'center', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <p style={{ fontFamily: 'DM Sans', fontSize: 44, fontWeight: 800, color: '#fff', margin: '0 0 4px', lineHeight: 1 }}>{s.number}</p>
                <p style={{ fontFamily: 'DM Sans', fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 4px' }}>{s.label}</p>
                <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{s.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <FadeIn>
          <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#48a870', marginBottom: 12 }}>Looking Ahead</p>
          <h2 style={{ fontFamily: 'DM Sans', fontSize: 36, fontWeight: 700, color: '#1a3a2a', margin: '0 0 24px' }}>Our Vision for the Future</h2>
          <p style={{ fontFamily: 'DM Sans', fontSize: 17, color: '#4a6355', lineHeight: 1.8, margin: '0 0 20px' }}>
            Laura Spelman Preschool Academy is growing. With plans for a fourth classroom at our Spruce Street campus, an expanded digital platform for families, and continued investment in teacher development, we\\u2019re building the foundation for the next decade of impact.
          </p>
          <p style={{ fontFamily: 'DM Sans', fontSize: 17, color: '#4a6355', lineHeight: 1.8, margin: 0 }}>
            Our commitment remains the same: provide Trenton\\u2019s youngest learners with the safe, stimulating, and joyful environment they need to thrive \\u2014 from their very first classroom to kindergarten and beyond.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function LogoBadge() {
  return (
    <div style={{ padding: '48px 24px 64px', background: '#f7faf8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #2e7d52, #48a870)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(30,90,58,0.15)', marginBottom: 16 }}>
        <span style={{ fontFamily: 'DM Sans', fontSize: 24, fontWeight: 800, color: '#fff' }}>LS</span>
      </div>
      <p style={{ fontFamily: 'DM Sans', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#2e7d52', margin: '0 0 8px' }}>Laura Spelman</p>
      <p style={{ fontFamily: 'DM Sans', fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#48a870', margin: '0 0 12px' }}>Preschool Academy</p>
      <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: '#8aa69a', margin: 0 }}>540 N. Olden Avenue, Trenton, NJ 08638 \\u00b7 1040 Spruce Street, Lawrence, NJ 08648</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <Nav />
      <AboutHero />
      <FounderSection />
      <TimelineSection />
      <StatsSection />
      <VisionSection />
      <LogoBadge />
      <Footer />
    </main>
  );
}
`;

writeFile('app/about-us/page.jsx', aboutPage);


// ─────────────────────────────────────────────
// 3. MODIFY: Hero.jsx — wire up Learn More modal
// ─────────────────────────────────────────────
console.log('[3/4] Wiring Hero.jsx to use LearnMoreModal...');

if (fs.existsSync('app/components/Hero.jsx')) {
  let hero = fs.readFileSync('app/components/Hero.jsx', 'utf8');
  
  // Check if already modified
  if (hero.includes('LearnMoreModal')) {
    console.log('  SKIPPED: Hero.jsx already has LearnMoreModal imported');
  } else {
    // Add import at the top (after existing imports)
    if (hero.includes("'use client'")) {
      hero = hero.replace("'use client';", "'use client';\nimport { useState } from 'react';\nimport LearnMoreModal from './LearnMoreModal';");
    } else if (hero.includes('"use client"')) {
      hero = hero.replace('"use client";', '"use client";\nimport { useState } from \'react\';\nimport LearnMoreModal from \'./LearnMoreModal\';');
    } else {
      hero = "'use client';\nimport { useState } from 'react';\nimport LearnMoreModal from './LearnMoreModal';\n" + hero;
    }
    
    // Find the export default function and add state
    hero = hero.replace(
      /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{/,
      'export default function $1() {\n  const [showLearnMore, setShowLearnMore] = useState(false);'
    );
    
    // Replace the Learn More link/button to use onClick
    // Try various patterns the href might use
    hero = hero.replace(/href\s*=\s*['"]#about['"]/g, "href='#' onClick={(e) => { e.preventDefault(); setShowLearnMore(true); }}");
    hero = hero.replace(/href\s*=\s*['"]\/#about['"]/g, "href='#' onClick={(e) => { e.preventDefault(); setShowLearnMore(true); }}");
    hero = hero.replace(/href\s*=\s*['"]\/about-us['"]/g, "href='#' onClick={(e) => { e.preventDefault(); setShowLearnMore(true); }}");
    
    // Add the modal component before the closing tag of the return
    // Find the last closing tag pattern
    if (hero.includes('</section>')) {
      // Find the LAST </section> and add modal before it
      const lastIdx = hero.lastIndexOf('</section>');
      hero = hero.slice(0, lastIdx) + '<LearnMoreModal open={showLearnMore} onClose={() => setShowLearnMore(false)} />\n      </section>' + hero.slice(lastIdx + '</section>'.length);
    }
    
    fs.writeFileSync('app/components/Hero.jsx', hero, 'utf8');
    console.log('  MODIFIED: Hero.jsx - added LearnMoreModal import, state, and trigger');
  }
} else {
  console.log('  WARNING: app/components/Hero.jsx not found!');
}


// ─────────────────────────────────────────────
// 4. REMOVE: About/Legacy section from home page
// ─────────────────────────────────────────────
console.log('[4/4] Checking for About section to remove from home page...');

// Check page.jsx for the About section
const pagePath = 'app/page.jsx';
if (fs.existsSync(pagePath)) {
  let page = fs.readFileSync(pagePath, 'utf8');
  
  if (page.includes('About') || page.includes('Legacy') || page.includes('Nurturing')) {
    // Try to remove the About component import
    page = page.replace(/import\s+About\s+from\s+['"]\.\/components\/About['"];?\n?/g, '');
    page = page.replace(/import\s+About\s+from\s+['"]\.\.\/components\/About['"];?\n?/g, '');
    
    // Try to remove <About /> or <About/> from JSX
    page = page.replace(/<About\s*\/>\s*\n?/g, '');
    
    fs.writeFileSync(pagePath, page, 'utf8');
    console.log('  MODIFIED: app/page.jsx - removed About component reference');
  } else {
    console.log('  INFO: No About/Legacy section found in page.jsx');
    console.log('  NOTE: The About section may be in a separate component.');
    console.log('        Check what components are imported in page.jsx.');
  }
} else {
  console.log('  WARNING: app/page.jsx not found!');
}


// ─────────────────────────────────────────────
// DONE
// ─────────────────────────────────────────────
console.log('\n========================================');
console.log('  ALL UPDATES COMPLETE!');
console.log('========================================');
console.log('\nFiles created/modified:');
console.log('  + app/components/LearnMoreModal.jsx (NEW)');
console.log('  + app/about-us/page.jsx (NEW)');
console.log('  ~ app/components/Hero.jsx (MODIFIED)');
console.log('  ~ app/page.jsx (MODIFIED)');
console.log('\nNext steps:');
console.log('  1. Refresh your dev server (npm run dev)');
console.log('  2. Click "Learn More" on the home page - should open modal');
console.log('  3. Visit /about-us for the full About LSPA page');
console.log('  4. The Legacy card section should no longer appear on the home page\n');
