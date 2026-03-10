const fs = require('fs');

const hero = `'use client';
import{useLanguage}from'../i18n/LanguageProvider';
import{useEffect,useState}from'react';
import LearnMoreModal from './LearnMoreModal';

export default function Hero() {
const{lang}=useLanguage();
const [showLearnMore, setShowLearnMore] = useState(false);
const[loaded,setLoaded]=useState(false);
useEffect(()=>{setTimeout(()=>setLoaded(true),150);},[]);
const t=(d)=>({opacity:loaded?1:0,transform:loaded?'translateY(0)':'translateY(32px)',transition:'all 0.9s cubic-bezier(0.16,1,0.3,1) '+d+'s'});

const badge=lang==='es'?'PREESCOLAR GRATIS':'FREE PRESCHOOL';
const h1a=lang==='es'?'Donde los Sue\\u00f1os':'Where Little';
const h1b=lang==='es'?'Peque\\u00f1os':'Dreams';
const h1c=lang==='es'?'Se Hacen':'Grow Into';
const h1d=lang==='es'?'Grandes':'Big Futures';
const desc=lang==='es'?'Educaci\\u00f3n preescolar de alta calidad, ':'High-quality, ';
const descBold=lang==='es'?'100% gratuita':'100% free';
const descEnd=lang==='es'?' para familias de Trenton. Sin subsidio requerido. Maestros certificados de NJ.':' preschool education for Trenton families. No subsidy required. NJ Certified Teachers.';
const callBtn=lang==='es'?'Llama (609) 396-7171':'Call (609) 396-7171';
const learnBtn=lang==='es'?'M\\u00e1s Informaci\\u00f3n':'Learn More';
const statsData=[
{n:'30+',l:lang==='es'?'A\\u00f1os':'Years',bg:'rgba(75,163,227,0.08)',c:'#4BA3E3'},
{n:'FREE',l:lang==='es'?'Matr\\u00edcula':'Tuition',bg:'rgba(76,175,80,0.08)',c:'#4CAF50'},
{n:'100%',l:lang==='es'?'Certificados':'Certified',bg:'#FFF3D0',c:'#F5A623'},
{n:'2',l:lang==='es'?'Campus':'Campuses',bg:'rgba(229,75,75,0.08)',c:'#E54B4B'}
];

return(
<section id='home' className='relative min-h-screen flex items-center overflow-hidden' style={{background:'linear-gradient(135deg,#FFECD2 0%,#A8DCFA 50%,#E8F7EA 100%)'}}>
<style>{\`.rainbow-bar{background:linear-gradient(to right,#E54B4B,#F5A623,#F7C948,#4CAF50,#4BA3E3,#1B2D5B);border-radius:6px 6px 0 0;}\`}</style>
<div className='relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-24 grid lg:grid-cols-2 gap-12 items-center'>
<div>
<div style={t(0.2)}><div className='inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-6' style={{background:'rgba(76,175,80,0.1)',borderColor:'rgba(76,175,80,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#2E7D32'}}>{badge}</span></div></div>
<h1 className='font-bold leading-[1.08] mb-5' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(38px,5.5vw,68px)',...t(0.35)}}>{h1a} <span style={{color:'#4BA3E3'}}>{h1b}</span> {h1c} <span style={{background:'linear-gradient(to right,#F7C948,#F5A623)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{h1d}</span></h1>
<p className='text-lg leading-relaxed max-w-xl mb-8' style={{fontFamily:'DM Sans',color:'#6B7280',...t(0.5)}}>{desc}<strong style={{color:'#1B2D5B'}}>{descBold}</strong>{descEnd}</p>
<div className='flex flex-wrap gap-4' style={t(0.65)}><a href='tel:6093967171' className='px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>{callBtn}</a><a href='#' onClick={(e) => { e.preventDefault(); setShowLearnMore(true); }} className='px-8 py-4 rounded-full border-2 font-semibold text-lg' style={{fontFamily:'Fredoka',borderColor:'rgba(75,163,227,0.2)',color:'#1B2D5B',background:'white'}}>{learnBtn}</a></div>
</div>
<div className='hidden lg:flex justify-center' style={t(0.5)}><div className='bg-white rounded-3xl p-4 shadow-2xl border max-w-sm w-full relative overflow-hidden' style={{borderColor:'#D6ECFB'}}><div className='absolute top-0 left-0 right-0 rainbow-bar' style={{height:6}}/><div className='text-center mb-0'><img src='/images/lspa-logo.png' alt='LSPA' style={{width:400,height:400,objectFit:'contain',margin:'0 auto'}}/></div><div className='grid grid-cols-2 gap-3'>{statsData.map((s,i)=>(<div key={i} className='text-center p-4 rounded-2xl' style={{background:s.bg}}><div className='font-bold text-3xl' style={{fontFamily:'Fredoka',color:s.c}}>{s.n}</div><div className='text-[11px] mt-1' style={{color:'#6B7280'}}>{s.l}</div></div>))}</div></div></div>
</div>
{showLearnMore && <LearnMoreModal onClose={() => setShowLearnMore(false)} />}
</section>
);}
`;

fs.writeFileSync('app/components/Hero.jsx', hero);
console.log('Hero.jsx rewritten cleanly with full Spanish translation');
