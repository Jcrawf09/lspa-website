'use client';
import{useLanguage}from'../i18n/LanguageProvider';
import{useEffect,useRef,useState}from'react';
const campuses=[{name:'',address:'540 N. Olden Avenue',city:'Trenton, NJ 08638',phone:'(609) 396-7171',phonePure:'6093967171',color:'#4BA3E3'},{name:'',address:'1040 Spruce Street',city:'Lawrence, NJ 08648',phone:'(609) 571-1041',phonePure:'6095711041',color:'#4CAF50'}];
export default function Locations(){
const{t,lang}=useLanguage();
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
<h2 className='font-bold mb-4' style={{fontFamily:'Fredoka',color:'#FFFFFF',fontSize:'clamp(30px,4vw,48px)'}}>{lang==='es'?'Dos Campus, ':'Two Campuses, '}<span style={{color:'#F5A623'}}>{lang==='es'?'Una Misi\u00f3n':lang==='es'?'Una Misi\u00f3n':'One Mission'}</span></h2>
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
