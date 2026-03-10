'use client';
import { useState, useEffect, useCallback } from 'react';

/* ───────────────────────────────────────────────
   LEARN MORE MODAL — Triggered from Hero "Learn More" button
   
   USAGE:  Import into Hero.jsx (or page.jsx):
     import LearnMoreModal from './LearnMoreModal';
   
   Then in your component:
     const [showModal, setShowModal] = useState(false);
     ...
     <button onClick={() => setShowModal(true)}>Learn More</button>
     <LearnMoreModal open={showModal} onClose={() => setShowModal(false)} />
   ─────────────────────────────────────────────── */

const features = [
  { emoji: '📚', title: 'Creative Curriculum', text: 'Research-backed learning through play and hands-on discovery.', color: '#3B82F6' },
  { emoji: '👩‍🏫', title: 'NJ Certified Teachers', text: 'Every classroom led by a state-certified early childhood educator.', color: '#10B981' },
  { emoji: '🤝', title: 'Family Partnership', text: 'Bilingual family liaisons connect you with community resources.', color: '#F59E0B' },
  { emoji: '🌈', title: 'Two Locations', text: '540 N. Olden Ave in Trenton and 1040 Spruce St in Lawrence.', color: '#EF4444' },
  { emoji: '🎨', title: 'Enrichment Programs', text: 'Music, art, physical education, and technology in daily learning.', color: '#8B5CF6' },
  { emoji: '🌍', title: 'Bilingual Support', text: 'English and Spanish-speaking staff ensuring every family feels welcome.', color: '#0EA5E9' },
];

export default function LearnMoreModal({ open, onClose }) {
  const [phase, setPhase] = useState('closed'); // closed | entering | open | exiting

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

  // Close on Escape
  useEffect(() => {
    if (phase === 'closed') return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [phase, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (phase !== 'closed') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [phase]);

  if (phase === 'closed') return null;

  const isVisible = phase === 'open';

  return (
    <>
      {/* ── GLOBAL KEYFRAMES ── */}
      <style>{`
        @keyframes lm-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes lm-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes lm-glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(72,168,112,0.15); }
          50% { box-shadow: 0 0 40px rgba(72,168,112,0.3); }
        }
        @keyframes lm-border-draw {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
      `}</style>

      {/* ── BACKDROP ── */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9998,
          background: 'rgba(10, 30, 20, 0.65)',
          backdropFilter: isVisible ? 'blur(12px)' : 'blur(0px)',
          WebkitBackdropFilter: isVisible ? 'blur(12px)' : 'blur(0px)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.4s ease, backdrop-filter 0.5s ease',
        }}
      />

      {/* ── MODAL PANEL ── */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24,
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            width: '100%', maxWidth: 880,
            maxHeight: '85vh',
            overflowY: 'auto',
            background: '#fff',
            borderRadius: 24,
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? 'scale(1) translateY(0)'
              : 'scale(0.88) translateY(40px)',
            transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease',
            boxShadow: '0 32px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1)',
            animation: isVisible ? 'lm-glow-pulse 3s ease-in-out infinite' : 'none',
          }}
        >
          {/* ── TOP ACCENT BAR ── */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4,
            borderRadius: '24px 24px 0 0',
            background: 'linear-gradient(90deg, #2e7d52, #48a870, #F59E0B, #3B82F6, #8B5CF6, #2e7d52)',
            backgroundSize: '200% 100%',
            animation: isVisible ? 'lm-shimmer 4s linear infinite' : 'none',
          }} />

          {/* ── CLOSE BUTTON ── */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'sticky', top: 16, float: 'right', marginRight: 16, marginTop: 16,
              zIndex: 10,
              width: 40, height: 40, borderRadius: '50%',
              border: 'none', cursor: 'pointer',
              background: 'rgba(0,0,0,0.06)',
              color: '#4a6355',
              fontSize: 20, fontWeight: 600, fontFamily: 'DM Sans, sans-serif',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => { e.target.style.background = 'rgba(0,0,0,0.12)'; e.target.style.transform = 'rotate(90deg)'; }}
            onMouseLeave={(e) => { e.target.style.background = 'rgba(0,0,0,0.06)'; e.target.style.transform = 'rotate(0deg)'; }}
          >
            ✕
          </button>

          <div style={{ padding: '48px 40px 40px', clear: 'both' }}>

            {/* ── HEADER ── */}
            <div style={{
              textAlign: 'center', marginBottom: 40,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.15s',
            }}>
              {/* Logo badge */}
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'linear-gradient(135deg, #2e7d52, #48a870)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
                animation: isVisible ? 'lm-float 3s ease-in-out infinite' : 'none',
                boxShadow: '0 8px 24px rgba(46,125,82,0.25)',
              }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: '#fff', fontFamily: 'DM Sans' }}>LS</span>
              </div>

              <h2 style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 700,
                color: '#1a3a2a',
                lineHeight: 1.2,
                margin: '0 0 12px',
              }}>
                A Legacy of Nurturing{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #2e7d52, #48a870)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Young Minds</span>
              </h2>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 16, color: '#6b8f7b', lineHeight: 1.7,
                maxWidth: 520, margin: '0 auto',
              }}>
                For over 20 years, Laura Spelman Preschool Academy has served the
                Trenton community with completely free, high-quality preschool education.
              </p>
            </div>

            {/* ── FEATURE CARDS GRID ── */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: 20,
            }}>
              {features.map((f, i) => (
                <FeatureCard key={i} feature={f} index={i} isVisible={isVisible} />
              ))}
            </div>

            {/* ── BOTTOM CTA ── */}
            <div style={{
              textAlign: 'center', marginTop: 36,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.7s',
            }}>
              <a
                href="/about-us"
                style={{
                  display: 'inline-block',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 15, fontWeight: 600,
                  color: '#fff',
                  background: 'linear-gradient(135deg, #2e7d52, #48a870)',
                  padding: '14px 36px',
                  borderRadius: 50,
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(46,125,82,0.3)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 32px rgba(46,125,82,0.4)'; }}
                onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 24px rgba(46,125,82,0.3)'; }}
              >
                Read Our Full Story &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── INDIVIDUAL FEATURE CARD ── */
function FeatureCard({ feature, index, isVisible }) {
  const [hovered, setHovered] = useState(false);
  const { emoji, title, text, color } = feature;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? '#f8faf9' : '#fff',
        borderRadius: 16,
        padding: '28px 24px',
        cursor: 'default',
        border: '1px solid #e8efe9',
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateY(0) scale(1)'
          : 'translateY(30px) scale(0.95)',
        transition: `
          opacity 0.5s ease ${0.2 + index * 0.08}s,
          transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.2 + index * 0.08}s,
          background 0.25s ease,
          border-color 0.25s ease,
          box-shadow 0.25s ease
        `,
        boxShadow: hovered
          ? `0 8px 24px ${color}22, 0 0 0 1px ${color}33`
          : '0 2px 8px rgba(0,0,0,0.04)',
        borderColor: hovered ? `${color}44` : '#e8efe9',
        overflow: 'hidden',
      }}
    >
      {/* color accent line at top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: color,
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }} />

      <div style={{
        fontSize: 32, marginBottom: 12, lineHeight: 1,
        transform: hovered ? 'scale(1.15)' : 'scale(1)',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        display: 'inline-block',
      }}>
        {emoji}
      </div>

      <h3 style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 17, fontWeight: 700,
        color: '#1a3a2a',
        margin: '0 0 8px',
      }}>
        {title}
      </h3>

      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 14, color: '#6b8f7b',
        lineHeight: 1.6, margin: 0,
      }}>
        {text}
      </p>
    </div>
  );
}
