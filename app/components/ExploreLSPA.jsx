'use client';
import { useEffect, useState, useRef } from 'react';

const SLIDES = [
  { img: '/images/gallery/IMG_4244.PNG', phrase: 'Every morning begins with possibility', sub: 'Doors open at 7:30 AM across both campuses' },
  { img: '/images/gallery/IMG_4252.PNG', phrase: 'Learning through curiosity', sub: 'Creative Curriculum — NJ state aligned' },
  { img: '/images/gallery/IMG_4257.PNG', phrase: 'Where creativity has no limits', sub: 'Art, music, and hands-on discovery every day' },
  { img: '/images/gallery/IMG_4261.PNG', phrase: 'Growing strong, mind and body', sub: 'Physical education woven into every week' },
  { img: '/images/gallery/IMG_4264.PNG', phrase: 'A community that lifts every child', sub: 'Free for all Trenton families — no subsidy required' },
];

const CSS = [
  '@keyframes rainbowBorder{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}',
  '@keyframes backdropIn{from{opacity:0}to{opacity:1}}',
  '@keyframes modalIn{from{opacity:0;transform:translateY(40px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}',
  '@keyframes phraseIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}',
  '@keyframes progressBar{from{width:0%}to{width:100%}}',
  '.slide-phrase{animation:phraseIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards}',
  '.explore-modal::-webkit-scrollbar{width:0}',
].join(' ');

export default function ExploreLSPA({ onClose }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const DURATION = 4000;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setActive(prev => (prev + 1) % SLIDES.length);
    }, DURATION);
    return () => clearTimeout(timerRef.current);
  }, [active, paused]);

  const goTo = (i) => { clearTimeout(timerRef.current); setActive(i); };

  const slide = SLIDES[active];

  return (
    <>
      <style>{CSS}</style>
      <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:900,background:'rgba(10,18,40,0.75)',backdropFilter:'blur(14px)',WebkitBackdropFilter:'blur(14px)',animation:'backdropIn 0.3s ease forwards'}} />
      <div className="explore-modal" style={{position:'fixed',zIndex:901,top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'min(94vw,900px)',maxHeight:'90vh',overflowY:'auto',borderRadius:32,animation:'modalIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards',padding:4,background:'linear-gradient(90deg,#4BA3E3,#4CAF50,#F7C948,#F5A623,#9B59B6,#E54B4B,#4BA3E3)',backgroundSize:'300%',boxShadow:'0 40px 100px rgba(10,18,40,0.5)',animationName:'modalIn,rainbowBorder',animationDuration:'0.45s,4s',animationTimingFunction:'cubic-bezier(0.16,1,0.3,1),ease',animationIterationCount:'1,infinite',animationFillMode:'forwards,none'}}>
        <div style={{background:'#0A1228',borderRadius:29,overflow:'hidden'}}>

          <div style={{position:'relative',height:'clamp(260px,45vw,420px)',overflow:'hidden'}}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {SLIDES.map((s, i) => (
              <div key={i} style={{position:'absolute',inset:0,transition:'opacity 0.9s ease',opacity:i===active?1:0}}>
                <img src={s.img} alt="" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,18,40,0.92) 0%,rgba(10,18,40,0.3) 50%,rgba(10,18,40,0.1) 100%)'}} />
              </div>
            ))}

            <div key={active} style={{position:'absolute',bottom:0,left:0,right:0,padding:'32px 36px',zIndex:2}}>
              <div className="slide-phrase">
                <div style={{fontSize:'clamp(20px,3.5vw,32px)',fontWeight:700,color:'#fff',fontFamily:'Fredoka,sans-serif',lineHeight:1.2,marginBottom:8,textShadow:'0 2px 20px rgba(0,0,0,0.4)'}}>
                  {slide.phrase}
                </div>
                <div style={{fontSize:14,color:'rgba(255,255,255,0.65)',fontFamily:'DM Sans,sans-serif',letterSpacing:'0.3px'}}>
                  {slide.sub}
                </div>
              </div>
            </div>

            <button onClick={onClose} style={{position:'absolute',top:16,right:16,zIndex:10,width:36,height:36,borderRadius:'50%',border:'none',background:'rgba(255,255,255,0.12)',backdropFilter:'blur(8px)',color:'#fff',fontSize:18,fontWeight:700,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>x</button>

            <div style={{position:'absolute',bottom:0,left:0,right:0,height:3,background:'rgba(255,255,255,0.1)',zIndex:3}}>
              <div key={active} style={{height:'100%',background:'linear-gradient(to right,#F7C948,#F5A623)',borderRadius:2,animation:paused?'none':'progressBar '+DURATION+'ms linear forwards'}} />
            </div>
          </div>

          <div style={{padding:'24px 32px 36px'}}>
            <div style={{display:'flex',justifyContent:'center',gap:8,marginBottom:28}}>
              {SLIDES.map((s, i) => (
                <button key={i} onClick={() => goTo(i)} style={{padding:0,border:'none',cursor:'pointer',borderRadius:12,overflow:'hidden',width:i===active?64:40,height:40,transition:'all 0.35s cubic-bezier(0.16,1,0.3,1)',opacity:i===active?1:0.45,outline:i===active?'2px solid #F7C948':'none',outlineOffset:2}}>
                  <img src={s.img} alt="" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </button>
              ))}
            </div>

            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:12,marginBottom:28}}>
              {[
                {n:'30+',l:'Years Serving Trenton',c:'#4BA3E3'},
                {n:'FREE',l:'For All Families',c:'#4CAF50'},
                {n:'100%',l:'Certified Teachers',c:'#F7C948'},
                {n:'10',l:'Classrooms, 2 Campuses',c:'#F5A623'},
              ].map((s,i) => (
                <div key={i} style={{textAlign:'center',padding:'16px 12px',borderRadius:16,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)'}}>
                  <div style={{fontFamily:'Fredoka,sans-serif',fontSize:28,fontWeight:700,color:s.c,lineHeight:1}}>{s.n}</div>
                  <div style={{fontFamily:'DM Sans,sans-serif',fontSize:12,color:'rgba(255,255,255,0.5)',marginTop:4,lineHeight:1.3}}>{s.l}</div>
                </div>
              ))}
            </div>

            <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
              <a href="/enroll" style={{padding:'15px 40px',borderRadius:50,background:'linear-gradient(135deg,#F7C948,#F5A623)',color:'#0F1D3D',fontFamily:'Fredoka,sans-serif',fontSize:17,fontWeight:700,textDecoration:'none',boxShadow:'0 6px 28px rgba(247,201,72,0.35)',display:'inline-block'}}>Enroll Your Child Today</a>
              <a href="tel:6093967171" style={{padding:'15px 32px',borderRadius:50,border:'2px solid rgba(255,255,255,0.15)',color:'#fff',fontFamily:'Fredoka,sans-serif',fontSize:17,fontWeight:700,textDecoration:'none',display:'inline-block'}}>Call Us</a>
            </div>

            <div style={{display:'flex',justifyContent:'center',gap:16,marginTop:20}}>
              <a href="https://www.facebook.com/share/1CHFuAPSdE/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:6,color:'rgba(255,255,255,0.4)',fontFamily:'DM Sans,sans-serif',fontSize:12,textDecoration:'none',transition:'color 0.2s'}}>Facebook</a>
              <span style={{color:'rgba(255,255,255,0.15)'}}>|</span>
              <a href="https://www.instagram.com/lauraspelmanpreschoolacademy?igsh=MTVieWNxaDZlcDdreQ==" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:6,color:'rgba(255,255,255,0.4)',fontFamily:'DM Sans,sans-serif',fontSize:12,textDecoration:'none',transition:'color 0.2s'}}>Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
