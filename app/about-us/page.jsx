'use client';
import { useState, useEffect, useRef } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

/* ───────────────────────────────────────────────
   ABOUT LSPA — /about-us
   Sections: Hero · Founder · Timeline · By the Numbers · Vision
   ─────────────────────────────────────────────── */

// Fade-in on scroll hook
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
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── HERO ─── */
function AboutHero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: 420,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a5c3a 0%, #2e7d52 40%, #48a870 100%)',
      overflow: 'hidden',
    }}>
      {/* decorative circles */}
      <div style={{ position:'absolute', width:320, height:320, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.08)', top:-80, right:-60 }} />
      <div style={{ position:'absolute', width:200, height:200, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.06)', bottom:-40, left:'10%' }} />

      <div style={{ position:'relative', zIndex:2, textAlign:'center', padding:'80px 24px 60px', maxWidth:720 }}>
        <p style={{ fontFamily:'DM Sans', fontSize:13, fontWeight:600, letterSpacing:3, textTransform:'uppercase', color:'rgba(255,255,255,0.65)', marginBottom:16 }}>
          Our Story
        </p>
        <h1 style={{ fontFamily:'DM Sans', fontSize:'clamp(32px, 5vw, 52px)', fontWeight:700, color:'#fff', lineHeight:1.15, margin:'0 0 20px' }}>
          About Laura Spelman<br />Preschool Academy
        </h1>
        <p style={{ fontFamily:'DM Sans', fontSize:18, color:'rgba(255,255,255,0.82)', lineHeight:1.6, maxWidth:560, margin:'0 auto' }}>
          Laura Spelman Preschool Academy is a district-partnered preschool operating under contract with Trenton Public Schools Office of Early Childhood. We provide free, high-quality preschool education to families across the city.
        </p>
      </div>
    </section>
  );
}

/* ─── FOUNDER / MELODY ─── */
function FounderSection() {
  return (
    <section style={{ padding:'80px 24px', background:'#fff' }}>
      <div style={{ maxWidth:960, margin:'0 auto', display:'flex', flexWrap:'wrap', gap:48, alignItems:'center' }}>
        {/* placeholder portrait */}
        <FadeIn style={{ flex:'1 1 280px', minWidth:260 }}>
          <div style={{
            width:'100%', aspectRatio:'3/4', maxWidth:340,
            borderRadius:16,
            background:'linear-gradient(160deg, #d4edda 0%, #a8d8b9 100%)',
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 12px 40px rgba(30,90,58,0.12)',
          }}>
            <span style={{ fontFamily:'DM Sans', fontSize:14, color:'#2e7d52', fontWeight:600, letterSpacing:1, textTransform:'uppercase' }}>
              Founder Photo
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} style={{ flex:'1 1 360px' }}>
          <p style={{ fontFamily:'DM Sans', fontSize:12, fontWeight:700, letterSpacing:3, textTransform:'uppercase', color:'#48a870', marginBottom:12 }}>
            Our Founder
          </p>
          <h2 style={{ fontFamily:'DM Sans', fontSize:36, fontWeight:700, color:'#1a3a2a', lineHeight:1.2, margin:'0 0 20px' }}>
            Melody Crawford-Cannon
          </h2>
          <p style={{ fontFamily:'DM Sans', fontSize:16, color:'#4a6355', lineHeight:1.75, margin:'0 0 16px' }}>
            Melody Crawford-Cannon founded Laura Spelman Preschool Academy with a
            simple but powerful belief: every child in Trenton deserves access to a
            world-class early education. With deep roots in the community and a
            background in business operations, Melody built LSPA from a single
            classroom into a two-campus program serving families across the city.
          </p>
          <p style={{ fontFamily:'DM Sans', fontSize:16, color:'#4a6355', lineHeight:1.75, margin:0 }}>
            Under her leadership, LSPA became a trusted district partner through
            Trenton Public Schools&rsquo; Office of Early Childhood &mdash; providing
            high-quality, state-funded preschool programming that meets or exceeds
            NJDOE standards. Melody&rsquo;s vision has always been clear: build
            something that lasts, and build it for the children who need it most.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── TIMELINE ─── */
const milestones = [
  { year: '2015', title: 'The Beginning', text: 'Laura Spelman Preschool Academy opens its doors at 540 N. Olden Avenue in Trenton, welcoming its first class of preschool students.' },
  { year: '2017', title: 'District Partnership', text: 'LSPA establishes a formal contract with Trenton Public Schools\u2019 Office of Early Childhood, becoming a district-partnered preschool provider.' },
  { year: '2019', title: 'Expanding Our Reach', text: 'A second campus opens at 1040 Spruce Street in Lawrence, broadening access for families throughout the greater Trenton area.' },
  { year: '2023', title: 'Curriculum Excellence', text: 'LSPA adopts a research-based curriculum aligned with the New Jersey Preschool Teaching and Learning Standards, earning recognition from district coaches.' },
  { year: '2026', title: 'Growth & Innovation', text: 'Planning begins for a fourth classroom at the Spruce Street campus, alongside a new digital platform to strengthen family engagement.' },
];

function TimelineSection() {
  return (
    <section style={{ padding:'80px 24px', background:'#f7faf8' }}>
      <div style={{ maxWidth:800, margin:'0 auto' }}>
        <FadeIn>
          <p style={{ fontFamily:'DM Sans', fontSize:12, fontWeight:700, letterSpacing:3, textTransform:'uppercase', color:'#48a870', textAlign:'center', marginBottom:12 }}>
            Our Journey
          </p>
          <h2 style={{ fontFamily:'DM Sans', fontSize:36, fontWeight:700, color:'#1a3a2a', textAlign:'center', margin:'0 0 48px' }}>
            A Decade of Impact
          </h2>
        </FadeIn>

        <div style={{ position:'relative', paddingLeft:36 }}>
          {/* vertical line */}
          <div style={{ position:'absolute', left:11, top:8, bottom:8, width:2, background:'linear-gradient(180deg, #48a870, #d4edda)' }} />

          {milestones.map((m, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ position:'relative', marginBottom: i < milestones.length - 1 ? 40 : 0 }}>
                {/* dot */}
                <div style={{
                  position:'absolute', left:-36, top:6,
                  width:24, height:24, borderRadius:'50%',
                  background:'#fff', border:'3px solid #48a870',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <div style={{ width:8, height:8, borderRadius:'50%', background:'#2e7d52' }} />
                </div>

                <p style={{ fontFamily:'DM Sans', fontSize:13, fontWeight:700, letterSpacing:2, color:'#48a870', margin:'0 0 4px' }}>{m.year}</p>
                <h3 style={{ fontFamily:'DM Sans', fontSize:20, fontWeight:700, color:'#1a3a2a', margin:'0 0 8px' }}>{m.title}</h3>
                <p style={{ fontFamily:'DM Sans', fontSize:15, color:'#4a6355', lineHeight:1.7, margin:0 }}>{m.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BY THE NUMBERS ─── */
const stats = [
  { number: '2', label: 'Campuses', sub: 'Trenton & Lawrence' },
  { number: '120+', label: 'Students', sub: 'Enrolled annually' },
  { number: '6', label: 'Classrooms', sub: 'Across both locations' },
  { number: '10+', label: 'Years', sub: 'Serving Trenton families' },
];

function StatsSection() {
  return (
    <section style={{ padding:'80px 24px', background:'linear-gradient(135deg, #1a5c3a 0%, #2e7d52 100%)' }}>
      <div style={{ maxWidth:960, margin:'0 auto' }}>
        <FadeIn>
          <h2 style={{ fontFamily:'DM Sans', fontSize:36, fontWeight:700, color:'#fff', textAlign:'center', margin:'0 0 48px' }}>
            LSPA by the Numbers
          </h2>
        </FadeIn>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:32 }}>
          {stats.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{
                background:'rgba(255,255,255,0.1)',
                borderRadius:16, padding:'36px 24px', textAlign:'center',
                backdropFilter:'blur(4px)',
                border:'1px solid rgba(255,255,255,0.12)',
              }}>
                <p style={{ fontFamily:'DM Sans', fontSize:44, fontWeight:800, color:'#fff', margin:'0 0 4px', lineHeight:1 }}>{s.number}</p>
                <p style={{ fontFamily:'DM Sans', fontSize:16, fontWeight:600, color:'rgba(255,255,255,0.9)', margin:'0 0 4px' }}>{s.label}</p>
                <p style={{ fontFamily:'DM Sans', fontSize:13, color:'rgba(255,255,255,0.55)', margin:0 }}>{s.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── VISION ─── */
function VisionSection() {
  return (
    <section style={{ padding:'80px 24px', background:'#fff' }}>
      <div style={{ maxWidth:760, margin:'0 auto', textAlign:'center' }}>
        <FadeIn>
          <p style={{ fontFamily:'DM Sans', fontSize:12, fontWeight:700, letterSpacing:3, textTransform:'uppercase', color:'#48a870', marginBottom:12 }}>
            Looking Ahead
          </p>
          <h2 style={{ fontFamily:'DM Sans', fontSize:36, fontWeight:700, color:'#1a3a2a', margin:'0 0 24px' }}>
            Our Vision for the Future
          </h2>
          <p style={{ fontFamily:'DM Sans', fontSize:17, color:'#4a6355', lineHeight:1.8, margin:'0 0 20px' }}>
            Laura Spelman Preschool Academy is growing. With plans for a fourth
            classroom at our Spruce Street campus, an expanded digital platform for
            families, and continued investment in teacher development, we&rsquo;re
            building the foundation for the next decade of impact.
          </p>
          <p style={{ fontFamily:'DM Sans', fontSize:17, color:'#4a6355', lineHeight:1.8, margin:0 }}>
            Our commitment remains the same: provide Trenton&rsquo;s youngest
            learners with the safe, stimulating, and joyful environment they need to
            thrive &mdash; from their very first classroom to kindergarten and beyond.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── LSPA BADGE ─── */
function LogoBadge() {
  return (
    <div style={{
      padding:'48px 24px 64px', background:'#f7faf8',
      display:'flex', flexDirection:'column', alignItems:'center',
    }}>
      <div style={{
        width:72, height:72, borderRadius:'50%',
        background:'linear-gradient(135deg, #2e7d52, #48a870)',
        display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 8px 24px rgba(30,90,58,0.15)',
        marginBottom:16,
      }}>
        <span style={{ fontFamily:'DM Sans', fontSize:24, fontWeight:800, color:'#fff' }}>LS</span>
      </div>
      <p style={{ fontFamily:'DM Sans', fontSize:11, fontWeight:700, letterSpacing:3, textTransform:'uppercase', color:'#2e7d52', margin:'0 0 8px' }}>
        Laura Spelman
      </p>
      <p style={{ fontFamily:'DM Sans', fontSize:10, fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'#48a870', margin:'0 0 12px' }}>
        Preschool Academy
      </p>
      <p style={{ fontFamily:'DM Sans', fontSize:12, color:'#8aa69a', margin:0 }}>
        540 N. Olden Avenue, Trenton, NJ 08638 &nbsp;&middot;&nbsp; 1040 Spruce Street, Lawrence, NJ 08648
      </p>
    </div>
  );
}

/* ─── PAGE ─── */
export default function AboutPage() {
  return (
    <main style={{ fontFamily:'DM Sans, sans-serif' }}>
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
