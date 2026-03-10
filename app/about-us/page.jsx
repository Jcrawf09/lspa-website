'use client';
import{useEffect,useRef,useState}from'react';
import{useLanguage}from'../i18n/LanguageProvider';

const timeline2526=[
'Upgraded classroom learning materials and furniture across both campuses',
'Enhanced outdoor play areas with new age-appropriate equipment',
'Implemented enriched Creative Curriculum units aligned with NJ Preschool Teaching and Learning Standards',
'Launched new parent communication tools and school website',
'Strengthened teacher professional development with district coaching partnerships',
'Expanded bilingual family resources for English and Spanish-speaking households'
];
const timeline2526es=[
'Materiales de aprendizaje y muebles mejorados en ambos campus',
'Areas de juego al aire libre mejoradas con equipo apropiado para la edad',
'Implementacion de unidades enriquecidas del Creative Curriculum alineadas con los Estandares de NJ',
'Lanzamiento de nuevas herramientas de comunicacion para padres y sitio web escolar',
'Fortalecimiento del desarrollo profesional de maestros con alianzas de coaching del distrito',
'Expansion de recursos bilingues para familias de habla inglesa y espanola'
];
const timeline2627=[
'Expanding classroom capacity to serve more Trenton families',
'Introducing STEAM-focused enrichment activities',
'Developing a mobile app for real-time family updates',
'Launching after-school enrichment programming',
'Building new community partnerships for family support services',
'Investing in advanced teacher training and leadership development'
];
const timeline2627es=[
'Expansion de la capacidad de los salones para servir a mas familias de Trenton',
'Introduccion de actividades de enriquecimiento enfocadas en STEAM',
'Desarrollo de una aplicacion movil para actualizaciones en tiempo real',
'Lanzamiento de programacion de enriquecimiento despues de clases',
'Construccion de nuevas alianzas comunitarias para servicios de apoyo familiar',
'Inversion en capacitacion avanzada de maestros y desarrollo de liderazgo'
];

export default function AboutUs(){
const{t,lang}=useLanguage();
const ref=useRef(null);
const[visible,setVisible]=useState(false);
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisible(true);},{threshold:0.1});if(ref.current)o.observe(ref.current);return()=>o.disconnect();},[]);
const fade=(d)=>({opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(28px)',transition:'all 0.7s cubic-bezier(0.16,1,0.3,1) '+d+'s'});

const items2526=lang==='es'?timeline2526es:timeline2526;
const items2627=lang==='es'?timeline2627es:timeline2627;
const aboutDesc=lang==='es'?'Laura Spelman Preschool Academy es un preescolar asociado al distrito que opera bajo contrato con la Oficina de Primera Infancia de las Escuelas Publicas de Trenton. Proveemos educacion preescolar gratuita y de alta calidad a familias de toda la ciudad.':'Laura Spelman Preschool Academy is a district-partnered preschool operating under contract with Trenton Public Schools Office of Early Childhood. We provide free, high-quality preschool education to families across the city.';
const buildingTitle=lang==='es'?'Construyendo Algo':'Building Something';
const buildingAccent=lang==='es'?'Que Perdura':'That Lasts';

return(
<div style={{minHeight:'100vh'}}>
<section className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#1B4A6B 50%,#2A5451 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 30% 50%,rgba(75,163,227,0.08),transparent 60%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(75,163,227,0.1)',border:'1px solid rgba(75,163,227,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#4BA3E3'}}>ABOUT LSPA</span></div>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>{t('about.heading')} <span style={{color:'#F5A623'}}>{t('about.headingAccent')}</span></h1>
<p className='text-lg' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.7)',maxWidth:600,margin:'0 auto'}}>{aboutDesc}</p>
</div>
</section>

<section className='py-6' style={{background:'#FFFFFF'}}>
<div className='max-w-4xl mx-auto px-4 md:px-8'>
<div className='grid grid-cols-4 gap-4 text-center'>
{[{num:'2',label:t('about.stats.campuses')},{num:'30+',label:t('about.stats.years')},{num:'100+',label:t('about.stats.families')},{num:t('about.stats.cost'),label:''}].map((s,i)=>(
<div key={i} className='py-4'><div className='text-2xl md:text-3xl font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{s.num}</div>{s.label&&<div className='text-xs mt-1' style={{fontFamily:'DM Sans',color:'#9CA3AF'}}>{s.label}</div>}</div>
))}
</div>
</div>
</section>

<section ref={ref} className='py-16 md:py-24' style={{background:'#F8FAFB'}}>
<div className='max-w-4xl mx-auto px-4 md:px-8'>
<div className='text-center mb-12' style={fade(0)}>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(28px,4vw,44px)'}}>{buildingTitle} <span style={{color:'#F5A623'}}>{buildingAccent}</span></h2>
</div>

<div className='space-y-8'>
<div className='rounded-3xl border-2 p-8 relative overflow-hidden' style={{borderColor:'#4BA3E320',background:'#FFFFFF',...fade(0.1)}}>
<div className='absolute top-0 left-0 right-0 h-1.5' style={{background:'linear-gradient(to right,#4BA3E3,#4BA3E388)'}}/>
<div className='flex items-center gap-3 mb-6'>
<div className='w-10 h-10 rounded-full flex items-center justify-center' style={{background:'#EBF5FB'}}><span className='text-sm font-bold' style={{color:'#4BA3E3'}}>{t('about.timelineNow')}</span></div>
<div><div className='text-xs font-bold tracking-wider uppercase' style={{color:'#4BA3E3'}}>2025-2026</div><div className='text-lg font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{t('about.timeline2526')}</div></div>
</div>
<div className='grid md:grid-cols-2 gap-4'>
{items2526.map((item,i)=>(<div key={i} className='flex items-start gap-3'><div className='w-2 h-2 rounded-full mt-2 flex-shrink-0' style={{background:'#4BA3E3'}}/><span className='text-sm' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{item}</span></div>))}
</div>
</div>

<div className='rounded-3xl border-2 p-8 relative overflow-hidden' style={{borderColor:'#4CAF5020',background:'#FFFFFF',...fade(0.2)}}>
<div className='absolute top-0 left-0 right-0 h-1.5' style={{background:'linear-gradient(to right,#4CAF50,#4CAF5088)'}}/>
<div className='flex items-center gap-3 mb-6'>
<div className='w-10 h-10 rounded-full flex items-center justify-center' style={{background:'#E8F5E9'}}><span className='text-sm font-bold' style={{color:'#4CAF50'}}>{t('about.timelineNext')}</span></div>
<div><div className='text-xs font-bold tracking-wider uppercase' style={{color:'#4CAF50'}}>2026-2027</div><div className='text-lg font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{t('about.timeline2627')}</div></div>
</div>
<div className='grid md:grid-cols-2 gap-4'>
{items2627.map((item,i)=>(<div key={i} className='flex items-start gap-3'><div className='w-2 h-2 rounded-full mt-2 flex-shrink-0' style={{background:'#4CAF50'}}/><span className='text-sm' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{item}</span></div>))}
</div>
</div>
</div>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#0F1D3D'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center'>
<div className='text-xs font-bold tracking-[3px] uppercase mb-4' style={{color:'#F7C948'}}>{t('about.missionLabel')}</div>
<p className='text-xl md:text-2xl font-medium leading-relaxed' style={{fontFamily:'Fredoka',color:'#FFFFFF'}}>{t('about.missionText')}</p>
</div>
</section>
</div>
);}
