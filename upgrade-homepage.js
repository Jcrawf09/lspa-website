const fs = require('fs');
const path = require('path');

// ─── UPGRADED PROGRAMS.JSX ─────────────────────────────────────────────────
const programs = `'use client';
import{useEffect,useRef,useState}from'react';
const programs=[{age:'Ages 3-4',name:'Preschool 3',highlights:['Social-emotional development','Language & literacy foundations','Creative play & exploration','Music & movement'],color:'#4BA3E3'},{age:'Ages 4-5',name:'Preschool 4',highlights:['Kindergarten readiness','Early math & science','Writing & storytelling','Physical education'],color:'#4CAF50'}];
export default function Programs(){
const ref=useRef(null);
const[visible,setVisible]=useState(false);
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisible(true);},{threshold:0.15});if(ref.current)o.observe(ref.current);return()=>o.disconnect();},[]);
const fade=(d)=>({opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(32px)',transition:'all 0.8s cubic-bezier(0.16,1,0.3,1) '+d+'s'});
return(
<section id='programs' ref={ref} className='py-24 md:py-32 relative overflow-hidden' style={{background:'linear-gradient(180deg,#FFFFFF 0%,#F0FAF0 100%)'}}>
<div className='absolute top-0 left-0 right-0 h-px' style={{background:'linear-gradient(to right,transparent,#4CAF50,transparent)'}}/>
<div className='max-w-6xl mx-auto px-4 md:px-8'>
<div className='text-center mb-16' style={fade(0)}>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5' style={{background:'rgba(76,175,80,0.08)',border:'1px solid rgba(76,175,80,0.15)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#2E7D32'}}>Our Classrooms</span></div>
<h2 className='font-bold mb-4' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(30px,4vw,48px)'}}>Programs Built for <span style={{color:'#4CAF50'}}>Growing Minds</span></h2>
<p className='text-base max-w-2xl mx-auto' style={{fontFamily:'DM Sans',color:'#6B7280'}}>Both programs follow the Creative Curriculum framework. Full-day programs at no cost to qualifying Trenton families.</p>
</div>
<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>{programs.map((p,i)=>(<div key={i} className='rounded-3xl p-8 border-2 hover:shadow-xl transition-all relative overflow-hidden group' style={{borderColor:p.color+'25',...fade(0.15+i*0.15)}}>
<div className='absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl' style={{background:'linear-gradient(to right,'+p.color+','+p.color+'88)'}}/>
<div className='mb-4'><div className='text-xs font-bold tracking-[2px] uppercase mb-1' style={{color:p.color}}>{p.age}</div><h3 className='text-2xl font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{p.name}</h3><div className='text-sm mt-1' style={{color:'#9CA3AF'}}>Full Day \u2014 Monday through Friday</div></div>
<div className='space-y-3'>{p.highlights.map((h,j)=>(<div key={j} className='flex items-center gap-3 py-2 border-b border-black/[0.04] last:border-0'><div className='w-2 h-2 rounded-full flex-shrink-0' style={{background:p.color}}/><span className='text-sm' style={{fontFamily:'DM Sans',color:'#4B5563'}}>{h}</span></div>))}</div>
<div className='text-center mt-8'><a href='tel:6093967171' className='inline-block px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>Call for More Information \u2013 (609) 396-7171</a></div>
<div className='text-center mt-10'><p className='text-sm' style={{fontFamily:'DM Sans',color:'#9CA3AF'}}><strong style={{color:'#1B2D5B'}}>Eligibility:</strong> Children ages 3, 4, or 5 by September 30th. Trenton residents enroll at no cost.</p></div>
</div>))}</div>
</div>
</section>);}
`;

// ─── UPGRADED LOCATIONS.JSX ────────────────────────────────────────────────
const locations = `'use client';
import{useEffect,useRef,useState}from'react';
const campuses=[{name:'',address:'540 N. Olden Avenue',city:'Trenton, NJ 08638',phone:'(609) 396-7171',phonePure:'6093967171',color:'#4BA3E3'},{name:'',address:'1040 Spruce Street',city:'Lawrence, NJ 08648',phone:'(609) 571-1041',phonePure:'6095711041',color:'#4CAF50'}];
export default function Locations(){
const ref=useRef(null);
const[visible,setVisible]=useState(false);
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisible(true);},{threshold:0.15});if(ref.current)o.observe(ref.current);return()=>o.disconnect();},[]);
const fade=(d)=>({opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(32px)',transition:'all 0.8s cubic-bezier(0.16,1,0.3,1) '+d+'s'});
return(
<section id='locations' className='py-24 md:py-32 relative' style={{background:'#1B2D5B'}}>
<div className='absolute top-0 left-0 right-0 h-px' style={{background:'linear-gradient(to right,transparent,#F7C948,transparent)'}}/>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 30% 50%,rgba(75,163,227,0.08),transparent 60%),radial-gradient(ellipse at 70% 50%,rgba(76,175,80,0.08),transparent 60%)'}}/>
<div className='max-w-6xl mx-auto px-4 md:px-8 relative z-10'>
<div className='text-center mb-16' style={fade(0)}>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5' style={{background:'rgba(247,201,72,0.1)',border:'1px solid rgba(247,201,72,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#F7C948'}}>Visit Us</span></div>
<h2 className='font-bold mb-4' style={{fontFamily:'Fredoka',color:'#FFFFFF',fontSize:'clamp(30px,4vw,48px)'}}>Two Campuses, <span style={{color:'#F5A623'}}>One Mission</span></h2>
</div>
<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto' ref={ref}>{campuses.map((c,i)=>(<div key={i} className='bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group' style={fade(0.15+i*0.15)}>
<div className='absolute top-0 left-0 right-0' style={{height:6,background:c.color}}/>
<h3 className='text-xl font-bold mb-4' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{c.name}</h3>
<div className='space-y-3 mb-6'>
<div className='text-sm' style={{color:'#374151'}}>{c.address}<br/>{c.city}</div>
<a href={'tel:'+c.phonePure} className='text-sm font-bold hover:underline' style={{color:c.color}}>{c.phone}</a>
<div className='text-sm' style={{color:'#6B7280'}}>Monday - Friday | Full Day</div>
</div>
<a href={'tel:'+c.phonePure} className='block py-3 rounded-xl text-center font-bold text-sm text-white shadow-md' style={{fontFamily:'Fredoka',background:c.color}}>Call This Campus</a>
</div>))}</div>
</div>
</section>);}
`;

// ─── UPGRADED CTA.JSX ──────────────────────────────────────────────────────
const cta = `'use client';
import{useEffect,useRef,useState}from'react';
export default function CTA(){
const ref=useRef(null);
const[visible,setVisible]=useState(false);
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisible(true);},{threshold:0.2});if(ref.current)o.observe(ref.current);return()=>o.disconnect();},[]);
const fade=(d)=>({opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(24px)',transition:'all 0.8s cubic-bezier(0.16,1,0.3,1) '+d+'s'});
return(
<section id='contact' ref={ref} className='py-20 md:py-28 relative overflow-hidden' style={{background:'linear-gradient(135deg,#1B6BA0 0%,#2A4278 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 20% 80%,rgba(247,201,72,0.1),transparent 50%),radial-gradient(ellipse at 80% 20%,rgba(245,166,35,0.08),transparent 50%)'}}/>
<div className='absolute top-0 left-0 right-0 h-px' style={{background:'linear-gradient(to right,transparent,rgba(255,255,255,0.2),transparent)'}}/>
<div className='max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div style={fade(0)}>
<h2 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(28px,4vw,48px)'}}>Ready to Enroll? <span style={{color:'#F7C948'}}>Contact Us!</span></h2>
<p className='text-lg mb-3' style={{color:'rgba(255,255,255,0.8)'}}>All enrollment begins with a call or email to LSPA. Free for Trenton residents with children ages 3, 4, or 5 by September 30th.</p>
<p className='italic mb-10' style={{color:'rgba(255,255,255,0.6)'}}>Preescolar gratis para familias de Trenton.</p>
</div>
<div className='flex flex-wrap justify-center gap-4' style={fade(0.2)}>
<a href='tel:6093967171' className='inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>
<svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'><path d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z'/></svg>
Call (609) 396-7171</a>
<a href='mailto:lauraspelmanacademy@verizon.net' className='inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all border-2' style={{fontFamily:'Fredoka',background:'rgba(255,255,255,0.1)',borderColor:'rgba(255,255,255,0.3)',color:'#FFFFFF',backdropFilter:'blur(4px)'}}>
<svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'><path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'/><polyline points='22,6 12,13 2,6'/></svg>
Email Us</a>
</div>
</div>
</section>);}
`;

// ─── WRITE FILES ───────────────────────────────────────────────────────────
const base = process.argv[2] || '.';
fs.writeFileSync(path.join(base, 'app', 'components', 'Programs.jsx'), programs);
fs.writeFileSync(path.join(base, 'app', 'components', 'Locations.jsx'), locations);
fs.writeFileSync(path.join(base, 'app', 'components', 'CTA.jsx'), cta);
console.log('Upgraded: Programs.jsx, Locations.jsx, CTA.jsx');
console.log('Changes:');
console.log('  - All 3 sections now have scroll-triggered fade-in animations');
console.log('  - Programs: subtle green gradient bg, "Our Classrooms" badge, thicker color bar on cards');
console.log('  - Locations: DARK navy background (contrast break), gold accent badge, radial glow effects');
console.log('  - CTA: glass-morphism email button (visual hierarchy), phone/email icons, radial light effects');
console.log('  - Thin gradient line dividers between all sections');
console.log('  - Fixed broken unicode in Locations (Monday - Friday | Full Day)');
