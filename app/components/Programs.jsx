'use client';
import{useEffect,useRef,useState}from'react';
import{useLanguage}from'../i18n/LanguageProvider';

export default function Programs(){
const{t,tObj,lang}=useLanguage();
const ref=useRef(null);
const[visible,setVisible]=useState(false);
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisible(true);},{threshold:0.15});if(ref.current)o.observe(ref.current);return()=>o.disconnect();},[]);
const fade=(d)=>({opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(32px)',transition:'all 0.8s cubic-bezier(0.16,1,0.3,1) '+d+'s'});

const progs=[
{age:t('programs.ages34'),name:t('programs.preschool3'),highlights:tObj('programs.highlights3')||[],color:'#4BA3E3'},
{age:t('programs.ages45'),name:t('programs.preschool4'),highlights:tObj('programs.highlights4')||[],color:'#4CAF50'}
];

return(
<section id='programs' ref={ref} className='py-24 md:py-32 relative overflow-hidden' style={{background:'linear-gradient(180deg,#FFFFFF 0%,#F0FAF0 100%)'}}>
<div className='absolute top-0 left-0 right-0 h-px' style={{background:'linear-gradient(to right,transparent,#4CAF50,transparent)'}}/>
<div className='max-w-6xl mx-auto px-4 md:px-8'>
<div className='text-center mb-16' style={fade(0)}>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5' style={{background:'rgba(76,175,80,0.08)',border:'1px solid rgba(76,175,80,0.15)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#2E7D32'}}>{t('programs.badge')}</span></div>
<h2 className='font-bold mb-4' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(30px,4vw,48px)'}}>{t('programs.heading')} <span style={{color:'#4CAF50'}}>{t('programs.headingAccent')}</span></h2>
<p className='text-base max-w-2xl mx-auto' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{t('programs.desc')}</p>
</div>
<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>{progs.map((p,i)=>(<div key={i} className='rounded-3xl p-8 border-2 hover:shadow-xl transition-all relative overflow-hidden group' style={{borderColor:p.color+'25',...fade(0.15+i*0.15)}}>
<div className='absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl' style={{background:'linear-gradient(to right,'+p.color+','+p.color+'88)'}}/>
<div className='mb-4'><div className='text-xs font-bold tracking-[2px] uppercase mb-1' style={{color:p.color}}>{p.age}</div><h3 className='text-2xl font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{p.name}</h3><div className='text-sm mt-1' style={{color:'#9CA3AF'}}>{t('programs.fullDay')}</div></div>
<div className='space-y-3'>{p.highlights.map((h,j)=>(<div key={j} className='flex items-center gap-3 py-2 border-b border-black/[0.04] last:border-0'><div className='w-2 h-2 rounded-full flex-shrink-0' style={{background:p.color}}/><span className='text-sm' style={{fontFamily:'DM Sans',color:'#4B5563'}}>{h}</span></div>))}</div>
<div className='text-center mt-8'><p className='text-sm' style={{fontFamily:'DM Sans',color:'#9CA3AF'}}><strong style={{color:'#1B2D5B'}}>{lang==='es'?'Elegibilidad:':'Eligibility:'}</strong> {t('programs.eligibility')}</p></div>
</div>))}</div>
</div>
</section>);}
