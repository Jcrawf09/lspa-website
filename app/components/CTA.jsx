'use client';
import{useEffect,useRef,useState}from'react';
import{useLanguage}from'../i18n/LanguageProvider';

export default function CTA(){
const{t,lang}=useLanguage();
const ref=useRef(null);
const[visible,setVisible]=useState(false);
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisible(true);},{threshold:0.15});if(ref.current)o.observe(ref.current);return()=>o.disconnect();},[]);
const fade=(d)=>({opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(32px)',transition:'all 0.8s cubic-bezier(0.16,1,0.3,1) '+d+'s'});

const heading=lang==='es'?'Listo para Inscribir?':'Ready to Enroll?';
const headingAccent=lang==='es'?'Contactanos!':'Contact Us!';
const desc=lang==='es'?'Toda inscripcion comienza con una llamada o correo a LSPA. Gratis para residentes de Trenton con ninos de 3, 4 o 5 anos antes del 30 de septiembre.':'All enrollment begins with a call or email to LSPA. Free for Trenton residents with children ages 3, 4, or 5 by September 30th.';
const spanishLine=lang==='es'?'':'Preescolar gratis para familias de Trenton.';
const callBtn=lang==='es'?'Llama':'Call';
const emailBtn=lang==='es'?'Envianos un Correo':'Email Us';

return(
<section id='contact' ref={ref} className='py-24 md:py-32 relative overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#2A3A5E 50%,#1B4A6B 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 30% 50%,rgba(75,163,227,0.1),transparent 60%),radial-gradient(ellipse at 70% 50%,rgba(247,201,72,0.06),transparent 50%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div style={fade(0)}>
<h2 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(30px,5vw,52px)'}}>{heading} <span style={{color:'#F7C948'}}>{headingAccent}</span></h2>
<p className='text-lg mb-2' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:550,margin:'0 auto'}}>{desc}</p>
{spanishLine&&<p className='text-sm italic mb-8' style={{color:'rgba(255,255,255,0.45)'}}>{spanishLine}</p>}
{!spanishLine&&<div className='mb-8'/>}
<div className='flex gap-4 justify-center flex-wrap'>
<a href='tel:6093967171' className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none'}}>{String.fromCodePoint(0x1F4DE)} {callBtn} (609) 396-7171</a>
<a href='mailto:lauraspelmanacademy@gmail.com' className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg border-2 hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',borderColor:'rgba(255,255,255,0.25)',color:'#FFFFFF',textDecoration:'none'}}>{String.fromCodePoint(0x2709)} {emailBtn}</a>
</div>
</div>
</div>
</section>
);}
