'use client';
import { useState, useEffect } from 'react';

const features = [
  { emoji: '📚', title: 'Creative Curriculum', text: 'Research-backed learning through play and hands-on discovery.', color: '#3B82F6' },
  { emoji: '👩‍🏫', title: 'NJ Certified Teachers', text: 'Every classroom led by a state-certified early childhood educator.', color: '#10B981' },
  { emoji: '🤝', title: 'Family Partnership', text: 'Bilingual family liaisons connect you with community resources.', color: '#F59E0B' },
  { emoji: '🌈', title: 'Two Locations', text: '540 N. Olden Ave in Trenton and 1040 Spruce St in Lawrence.', color: '#EF4444' },
  { emoji: '🎨', title: 'Enrichment Programs', text: 'Music, art, physical education, and technology in daily learning.', color: '#8B5CF6' },
  { emoji: '🌍', title: 'Bilingual Support', text: 'English and Spanish-speaking staff ensuring every family feels welcome.', color: '#0EA5E9' },
];

const galleryItems = [
  { label: 'Classroom 1', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
  { label: 'Classroom 2', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
  { label: 'Classroom 3', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
  { label: 'Classroom 4', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
  { label: 'Classroom 5', gradient: 'linear-gradient(135deg, #fa709a, #fee140)' },
  { label: 'Classroom 6', gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)' },
  { label: 'Classroom 7', gradient: 'linear-gradient(135deg, #FF6B6B, #ee5a24)' },
  { label: 'Classroom 8', gradient: 'linear-gradient(135deg, #0abde3, #10ac84)' },
  { label: 'Classroom 9', gradient: 'linear-gradient(135deg, #fd79a8, #e17055)' },
  { label: 'Classroom 10', gradient: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' },
  { label: 'Classroom 11', gradient: 'linear-gradient(135deg, #00b894, #55efc4)' },
];

function FeatureCard({ feature, index, isVisible }) {
  const [hovered, setHovered] = useState(false);
  const { emoji, title, text, color } = feature;
  const d = (0.2 + index * 0.08).toFixed(2);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', background: hovered ? '#f8faf9' : '#fff',
        borderRadius: 16, padding: '28px 24px', cursor: 'default',
        border: '1px solid #e8efe9', overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        transition: 'opacity 0.5s ease ' + d + 's, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ' + d + 's, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        boxShadow: hovered ? '0 8px 24px ' + color + '22, 0 0 0 1px ' + color + '33' : '0 2px 8px rgba(0,0,0,0.04)',
        borderColor: hovered ? color + '44' : '#e8efe9',
      }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: color, transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)' }} />
      <div style={{ fontSize: 32, marginBottom: 12, lineHeight: 1, transform: hovered ? 'scale(1.15)' : 'scale(1)', transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)', display: 'inline-block' }}>{emoji}</div>
      <h3 style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 17, fontWeight: 700, color: '#1a3a2a', margin: '0 0 8px' }}>{title}</h3>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#6b8f7b', lineHeight: 1.6, margin: 0 }}>{text}</p>
    </div>
  );
}

/* ---- GALLERY POPUP (Second modal) ---- */
function GalleryPopup({ open, onClose }) {
  const [gPhase, setGPhase] = useState('closed');
  const [lightbox, setLightbox] = useState(-1);

  useEffect(() => {
    if (open && gPhase === 'closed') {
      setGPhase('entering');
      requestAnimationFrame(() => requestAnimationFrame(() => setGPhase('open')));
    }
    if (!open && (gPhase === 'open' || gPhase === 'entering')) {
      setGPhase('exiting');
      const t = setTimeout(() => { setGPhase('closed'); setLightbox(-1); }, 400);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (gPhase === 'closed') return;
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [gPhase, onClose]);

  if (gPhase === 'closed') return null;
  const gv = gPhase === 'open';

  return (
    <>
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 10001,
        background: 'rgba(5,20,10,0.7)',
        backdropFilter: gv ? 'blur(16px)' : 'blur(0)',
        WebkitBackdropFilter: gv ? 'blur(16px)' : 'blur(0)',
        opacity: gv ? 1 : 0,
        transition: 'opacity 0.35s ease, backdrop-filter 0.4s ease',
      }} />
      <div style={{
        position: 'fixed', inset: 0, zIndex: 10002,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24, pointerEvents: gv ? 'auto' : 'none',
      }}>
        <div onClick={e => e.stopPropagation()} style={{
          position: 'relative', width: '100%', maxWidth: 720, maxHeight: '80vh', overflowY: 'auto',
          background: '#fff', borderRadius: 20,
          opacity: gv ? 1 : 0,
          transform: gv ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(30px)',
          transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease',
          boxShadow: '0 32px 80px rgba(0,0,0,0.3)',
        }}>
          {/* Accent bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4, borderRadius: '20px 20px 0 0',
            background: 'linear-gradient(90deg, #667eea, #f093fb, #4facfe, #43e97b, #fa709a, #a18cd1)',
            backgroundSize: '200% 100%',
            animation: gv ? 'lmShimmer 3s linear infinite' : 'none',
          }} />

          {/* Close */}
          <button onClick={onClose} style={{
            position: 'sticky', top: 12, float: 'right', marginRight: 12, marginTop: 12, zIndex: 10,
            width: 36, height: 36, borderRadius: '50%', border: 'none', cursor: 'pointer',
            background: 'rgba(0,0,0,0.06)', color: '#4a6355', fontSize: 18, fontWeight: 600,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'rotate(90deg)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'rotate(0deg)'; }}
          >X</button>

          <div style={{ padding: '40px 36px 36px', clear: 'both' }}>
            <h2 style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 28, fontWeight: 700, color: '#1a3a2a', margin: '0 0 8px', textAlign: 'center' }}>
              Inside Our Classrooms
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#6b8f7b', textAlign: 'center', margin: '0 0 28px' }}>
              A glimpse into daily life at LSPA
            </p>

            {lightbox === -1 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                {galleryItems.map((photo, idx) => (
                  <div key={idx} onClick={() => setLightbox(idx)} style={{
                    aspectRatio: '1', borderRadius: 14, cursor: 'pointer',
                    background: photo.gradient, position: 'relative', overflow: 'hidden',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.2)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <span style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: 1.5, textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>{photo.label}</span>
                    <span style={{ position: 'absolute', bottom: 6, fontSize: 9, color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans' }}>Photo placeholder</span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '100%', aspectRatio: '16/10', borderRadius: 14,
                  background: galleryItems[lightbox].gradient,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontFamily: 'DM Sans', fontSize: 20, fontWeight: 700, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                    {galleryItems[lightbox].label}
                  </span>
                  <span style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>Replace with classroom photo</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 16 }}>
                  <button onClick={() => setLightbox(lightbox > 0 ? lightbox - 1 : 10)} style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid #e8efe9', background: '#fff', cursor: 'pointer', fontSize: 16, color: '#2e7d52', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f0faf4'; e.currentTarget.style.borderColor = '#48a870'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e8efe9'; }}
                  >{'<'}</button>
                  <button onClick={() => setLightbox(-1)} style={{ padding: '6px 20px', borderRadius: 20, border: '1px solid #e8efe9', background: '#fff', cursor: 'pointer', fontSize: 12, fontFamily: 'DM Sans', fontWeight: 600, color: '#4a6355', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f0faf4'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}
                  >Back to Grid</button>
                  <button onClick={() => setLightbox(lightbox < 10 ? lightbox + 1 : 0)} style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid #e8efe9', background: '#fff', cursor: 'pointer', fontSize: 16, color: '#2e7d52', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f0faf4'; e.currentTarget.style.borderColor = '#48a870'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e8efe9'; }}
                  >{'>'}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

/* ---- MAIN LEARN MORE MODAL ---- */
export default function LearnMoreModal({ open, onClose }) {
  const [phase, setPhase] = useState('closed');
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    if (open && phase === 'closed') {
      setPhase('entering');
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase('open')));
    }
    if (!open && (phase === 'open' || phase === 'entering')) {
      setPhase('exiting');
      const t = setTimeout(() => { setPhase('closed'); setShowGallery(false); }, 500);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (phase === 'closed') return;
    const h = (e) => { if (e.key === 'Escape' && !showGallery) onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [phase, onClose, showGallery]);

  useEffect(() => {
    if (phase !== 'closed') { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
    return () => { document.body.style.overflow = ''; };
  }, [phase]);

  if (phase === 'closed') return null;
  const vis = phase === 'open';

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:"@keyframes lmShimmer{0%{background-position:-200% center}100%{background-position:200% center}}@keyframes lmFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes lmGlow{0%,100%{box-shadow:0 32px 80px rgba(0,0,0,.25),0 0 20px rgba(72,168,112,.15)}50%{box-shadow:0 32px 80px rgba(0,0,0,.25),0 0 40px rgba(72,168,112,.3)}}"}} />

      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 9998,
        background: 'rgba(10,30,20,0.65)',
        backdropFilter: vis ? 'blur(12px)' : 'blur(0)',
        WebkitBackdropFilter: vis ? 'blur(12px)' : 'blur(0)',
        opacity: vis ? 1 : 0,
        transition: 'opacity 0.4s ease, backdrop-filter 0.5s ease',
      }} />

      {/* Main modal */}
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
          {/* Rainbow shimmer bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4, borderRadius: '24px 24px 0 0',
            background: 'linear-gradient(90deg, #2e7d52, #48a870, #F59E0B, #3B82F6, #8B5CF6, #2e7d52)',
            backgroundSize: '200% 100%',
            animation: vis ? 'lmShimmer 4s linear infinite' : 'none',
          }} />

          {/* Close */}
          <button onClick={onClose} style={{
            position: 'sticky', top: 16, float: 'right', marginRight: 16, marginTop: 16, zIndex: 10,
            width: 40, height: 40, borderRadius: '50%', border: 'none', cursor: 'pointer',
            background: 'rgba(0,0,0,0.06)', color: '#4a6355', fontSize: 20, fontWeight: 600,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'rotate(90deg)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'rotate(0deg)'; }}
          >X</button>

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
                overflow: 'hidden',
              }}>
                <img src='/images/lspa-logo.png' alt='LSPA' style={{ width: 40, height: 40, objectFit: 'contain' }}
                  onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.innerHTML = '<span style="font-size:22px;font-weight:800;color:#fff">LS</span>'; }}
                />
              </div>
              <h2 style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 'clamp(24px,4vw,36px)', fontWeight: 700, color: '#1a3a2a', lineHeight: 1.2, margin: '0 0 12px' }}>
                A Legacy of Nurturing{' '}
                <span style={{ background: 'linear-gradient(135deg,#2e7d52,#48a870)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Young Minds</span>
              </h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: '#6b8f7b', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
                For over 30 years, Laura Spelman Preschool Academy has served the Trenton community with completely free, high-quality preschool education.
              </p>
            </div>

            {/* Feature cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20 }}>
              {features.map((f, i) => <FeatureCard key={i} feature={f} index={i} isVisible={vis} />)}
            </div>

            {/* Peek Inside button */}
            <div style={{
              textAlign: 'center', marginTop: 32,
              opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.7s',
            }}>
              <button onClick={() => setShowGallery(true)} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 600,
                color: '#2e7d52', background: '#f0faf4',
                padding: '14px 32px', borderRadius: 50, border: '2px solid #d4edda',
                cursor: 'pointer', boxShadow: '0 4px 16px rgba(46,125,82,0.1)',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#e0f5ea'; e.currentTarget.style.borderColor = '#48a870'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(46,125,82,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f0faf4'; e.currentTarget.style.borderColor = '#d4edda'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(46,125,82,0.1)'; }}
              >
                Peek Inside Our Classrooms
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery popup (second modal on top) */}
      <GalleryPopup open={showGallery} onClose={() => setShowGallery(false)} />
    </>
  );
}
