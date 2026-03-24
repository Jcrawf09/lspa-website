'use client';
import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';

export default function Hero() {
  const { t, lang } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 150); }, []);
  const anim = (d) => ({ opacity: loaded?1:0, transform: loaded?'translateY(0)':'translateY(32px)', transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) '+d+'s' });

  const stats = [
    { n:'30+',  l: lang==='es'?'Años de Excelencia':'Years of Excellence', bg:'rgba(75,163,227,0.08)',  c:'#4BA3E3' },
    { n:'FREE', l: lang==='es'?'Sin Costo':'Tuition for All',               bg:'rgba(76,175,80,0.08)',   c:'#4CAF50' },
    { n:'100%', l: lang==='es'?'Maestros Certificados':'Certified Teachers', bg:'#FFF3D0',               c:'#F5A623' },
    { n:'2',    l: lang==='es'?'Ubicaciones en Trenton':'Trenton Locations', bg:'rgba(229,75,75,0.08)',  c:'#E54B4B' },
  ];

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{background:'linear-gradient(170deg,#A8DCFA 0%,#D6ECFB 30%,#E8F7EA 60%,#FFFDF7 100%)'}}>
        <div style={{position:'absolute',top:'12%',right:'8%',width:140,height:140,borderRadius:'50%',background:'radial-gradient(circle,rgba(247,201,72,0.55) 0%,transparent 70%)',animation:'sunPulse 4s ease-in-out infinite',pointerEvents:'none'}} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-24 grid lg:grid-cols-2 gap-12 items-center" style={{paddingTop:'clamp(7rem,15vw,10rem)'}}>
          <div>
            <div style={anim(0.2)}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-6" style={{background:'rgba(76,175,80,0.1)',borderColor:'rgba(76,175,80,0.25)'}}>
                <span className="text-xs font-bold tracking-widest uppercase" style={{fontFamily:'DM Sans,sans-serif',color:'#2E7D32'}}>{t('hero.badge')}</span>
              </div>
            </div>
            <h1 className="font-bold leading-tight mb-5" style={{fontFamily:'Fredoka,sans-serif',color:'#1B2D5B',fontSize:'clamp(38px,5.5vw,68px)',...anim(0.35)}}>
              {t('hero.heading1')} <span style={{color:'#4BA3E3'}}>{lang==='es'?'':''}</span>{' '}
              <span style={{background:'linear-gradient(to right,#F7C948,#F5A623)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{t('hero.heading2')}</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-xl mb-8" style={{fontFamily:'DM Sans,sans-serif',color:'#5B6B80',...anim(0.5)}}>
              {t('hero.desc')}
            </p>
            <div className="flex flex-wrap gap-4" style={anim(0.65)}>
              <a href="tel:6093967171" className="px-8 py-4 rounded-full font-bold text-lg shadow-xl" style={{fontFamily:'Fredoka,sans-serif',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none'}}>{t('hero.callBtn')} (609) 396-7171</a>
              <button onClick={() => window.dispatchEvent(new Event("openQuotesModal"))} className="px-8 py-4 rounded-full border-2 font-semibold text-lg" style={{fontFamily:'Fredoka,sans-serif',borderColor:'rgba(27,45,91,0.18)',color:'#1B2D5B',background:'white',cursor:'pointer'}}>{lang==='es'?'Explorar LSPA':'Explore LSPA'}</button>
            </div>
          </div>
          <div className="flex justify-center" style={{...anim(0.5), marginTop:'2rem'}}>
            <div style={{padding:3,borderRadius:28,background:'linear-gradient(90deg,#4BA3E3,#4CAF50,#F7C948,#F5A623,#9B59B6,#E54B4B,#4BA3E3)',backgroundSize:'300% 300%',animation:'rainbowBorder 4s ease infinite',boxShadow:'0 8px 40px rgba(27,45,91,0.12)'}}>
              <div className="bg-white relative overflow-hidden" style={{borderRadius:26,maxWidth:380,width:'100%'}}>
                <div className="absolute top-0 left-0 right-0 rainbow-bar" style={{height:6}} />
                <div style={{padding:40}}>
                  <div className="text-center mb-8">
                    <img src="/images/lspa-logo.png" alt="LSPA" style={{width:220,height:220,objectFit:'contain',margin:'0 auto'}} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {stats.map((s,i) => (
                      <div key={i} className="text-center p-4 rounded-2xl" style={{background:s.bg}}>
                        <div className="font-bold text-3xl" style={{fontFamily:'Fredoka,sans-serif',color:s.c}}>{s.n}</div>
                        <div className="text-xs mt-1" style={{color:'#6B7280'}}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <a href="/enrollment" className="block w-full py-3 rounded-2xl font-bold text-sm shadow-md" style={{fontFamily:'Fredoka,sans-serif',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none'}}>{t('hero.cta')}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@keyframes sunPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.08);opacity:0.85}}@keyframes rainbowBorder{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
      </section>
    </>
  );
}
