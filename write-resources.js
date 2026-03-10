const fs = require('fs');
const content = `'use client';
import Link from'next/link';
import{useState}from'react';
import{useLanguage}from'../i18n/LanguageProvider';

const sectionsEN=[
{category:'School Calendar & Events',icon:String.fromCodePoint(0x1F4C5),items:[
{name:'2025-2026 School Calendar',desc:'Key dates, holidays, and closings',link:'/documents/school-calendar-2025-2026.pdf',type:'pdf'},
{name:'Upcoming Events',desc:'Family nights, field trips, and celebrations',link:'#upcoming',type:'modal'},
{name:"What's Happening at LSPA",desc:'Workshops, flyers, and community updates',link:'/documents/bedtime-routines-workshop.pdf',type:'pdf'},
]},
{category:'NJ Family Support',icon:String.fromCodePoint(0x1F3E0),items:[
{name:'NJ Child Care Assistance',desc:'Financial help for working families',link:'https://www.childcarenj.gov',type:'external'},
{name:'WIC Program',desc:'Nutrition assistance for women, infants & children',link:'https://www.nj.gov/health/fhs/wic/',type:'external'},
{name:'NJ 211',desc:'Connect to local health and human services',link:'https://www.nj211.org',type:'external'},
{name:'Trenton Public Schools',desc:'District information and updates',link:'https://www.trentonk12.org',type:'external'},
]},
{category:'Learning at Home',icon:String.fromCodePoint(0x1F393),items:[
{name:'PBS Kids Games',desc:'Educational games for preschool learners',link:'https://pbskids.org',type:'external'},
{name:'Starfall',desc:'Reading and math activities for young children',link:'https://www.starfall.com',type:'external'},
{name:'Trenton Free Public Library',desc:'Free books, programs, and digital resources',link:'https://www.trentonfpl.org',type:'external'},
]},
];

const sectionsES=[
{category:'Calendario Escolar y Eventos',icon:String.fromCodePoint(0x1F4C5),items:[
{name:'Calendario Escolar 2025-2026',desc:'Fechas importantes, feriados y cierres',link:'/documents/school-calendar-2025-2026.pdf',type:'pdf'},
{name:'Proximos Eventos',desc:'Noches familiares, excursiones y celebraciones',link:'#upcoming',type:'modal'},
{name:'Lo Que Pasa en LSPA',desc:'Talleres, volantes y actualizaciones comunitarias',link:'/documents/bedtime-routines-workshop.pdf',type:'pdf'},
]},
{category:'Apoyo Familiar de NJ',icon:String.fromCodePoint(0x1F3E0),items:[
{name:'Asistencia de Cuidado Infantil de NJ',desc:'Ayuda financiera para familias trabajadoras',link:'https://www.childcarenj.gov',type:'external'},
{name:'Programa WIC',desc:'Asistencia nutricional para mujeres, infantes y ninos',link:'https://www.nj.gov/health/fhs/wic/',type:'external'},
{name:'NJ 211',desc:'Conexion con servicios de salud y servicios humanos locales',link:'https://www.nj211.org',type:'external'},
{name:'Escuelas Publicas de Trenton',desc:'Informacion y actualizaciones del distrito',link:'https://www.trentonk12.org',type:'external'},
]},
{category:'Aprendizaje en Casa',icon:String.fromCodePoint(0x1F393),items:[
{name:'PBS Kids Games',desc:'Juegos educativos para aprendices preescolares',link:'https://pbskids.org',type:'external'},
{name:'Starfall',desc:'Actividades de lectura y matematicas para ninos pequenos',link:'https://www.starfall.com',type:'external'},
{name:'Biblioteca Publica de Trenton',desc:'Libros gratis, programas y recursos digitales',link:'https://www.trentonfpl.org',type:'external'},
]},
];

function UpcomingModal({onClose,lang}){
return(
<div onClick={onClose} style={{position:'fixed',inset:0,zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(10,20,50,0.75)',backdropFilter:'blur(6px)',padding:'1.5rem'}}>
<div onClick={e=>e.stopPropagation()} style={{background:'linear-gradient(145deg,#1B2D5B 0%,#1B4A6B 50%,#2A5451 100%)',borderRadius:24,maxWidth:480,width:'100%',padding:'2.5rem 2rem',textAlign:'center',position:'relative',boxShadow:'0 25px 60px rgba(0,0,0,0.4)',border:'1px solid rgba(255,255,255,0.08)'}}>

{/* Close */}
<button onClick={onClose} style={{position:'absolute',top:16,right:18,background:'rgba(255,255,255,0.1)',border:'none',color:'#fff',borderRadius:'50%',width:32,height:32,fontSize:'1.1rem',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'DM Sans'}}>x</button>

{/* Stars */}
<div style={{fontSize:'2.4rem',marginBottom:'0.75rem',letterSpacing:6}}>{'★ ★ ★'}</div>

{/* Badge */}
<div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(247,201,72,0.15)',border:'1px solid rgba(247,201,72,0.3)',borderRadius:999,padding:'4px 14px',marginBottom:'1.25rem'}}>
<span style={{fontFamily:'DM Sans',fontSize:'0.7rem',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'#F7C948'}}>Coming Soon</span>
</div>

{/* Headline */}
<h2 style={{fontFamily:'Fredoka',fontSize:'clamp(22px,5vw,32px)',color:'#FFFFFF',fontWeight:700,lineHeight:1.2,marginBottom:'1rem'}}>
{lang==='es'?'Grandes Eventos Vienen':'Big Things Are Coming'}
<br/>
<span style={{color:'#F7C948'}}>{lang==='es'?'a LSPA':'to LSPA'}</span>
</h2>

{/* Body */}
<p style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.78)',fontSize:'0.95rem',lineHeight:1.7,marginBottom:'1.5rem',maxWidth:360,margin:'0 auto 1.5rem'}}>
{lang==='es'
?'Estamos preparando algo increible para nuestras familias: noches familiares, excursiones y celebraciones especiales. Mantente atento a tu correo y a esta pagina para las proximas actualizaciones.'
:'We are putting together something amazing for our families \u2014 family nights, field trips, and special celebrations. Stay tuned to your inbox and this page for upcoming updates.'}
</p>

{/* Divider */}
<div style={{width:48,height:3,background:'linear-gradient(90deg,#F7C948,#F5A623)',borderRadius:99,margin:'0 auto 1.5rem'}}/>

{/* Footer note */}
<p style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.45)',fontSize:'0.78rem'}}>
{lang==='es'?'Actualizaciones proximamente \u2014 LSPA':'Check back soon \u2014 LSPA'}
</p>

</div>
</div>
);
}

export default function Resources(){
const{t,lang}=useLanguage();
const sections=lang==='es'?sectionsES:sectionsEN;
const[showModal,setShowModal]=useState(false);

return(
<div style={{minHeight:'100vh'}}>

{showModal&&<UpcomingModal onClose={()=>setShowModal(false)} lang={lang}/>}

<section className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#1B4A6B 50%,#2A5451 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 40% 50%,rgba(75,163,227,0.08),transparent 60%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(75,163,227,0.1)',border:'1px solid rgba(75,163,227,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#4BA3E3'}}>{t('resources.badge')}</span></div>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>{t('resources.heading')} <span style={{color:'#F5A623'}}>{t('resources.headingAccent')}</span></h1>
<p className='text-lg' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:550,margin:'0 auto'}}>{t('resources.desc')}</p>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#FFFFFF'}}>
<div className='max-w-5xl mx-auto px-4 md:px-8'>
{sections.map((section,si)=>(
<div key={si} className='mb-12'>
<h2 className='font-bold text-lg mb-4 flex items-center gap-2' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}><span className='text-2xl'>{section.icon}</span>{section.category}</h2>
<div className='grid md:grid-cols-2 gap-4'>
{section.items.map((item,j)=>{
if(item.type==='modal'){
return(
<button key={j} onClick={()=>setShowModal(true)}
className='block p-5 rounded-2xl border bg-white hover:shadow-lg transition-all text-left w-full' style={{borderColor:'#e5e7eb',cursor:'pointer'}}>
<div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1rem'}}>{item.name}</div>
<div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem'}}>{item.desc}</div>
</button>
);
}
return(
<a key={j} href={item.link} target={item.type==='external'?'_blank':'_self'} rel='noopener noreferrer'
className='block p-5 rounded-2xl border bg-white hover:shadow-lg transition-all' style={{borderColor:'#e5e7eb',textDecoration:'none'}}>
<div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1rem'}}>{item.name}</div>
<div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem'}}>{item.desc}</div>
{item.type==='external'&&<div className='mt-2 text-xs font-semibold' style={{color:'#F7C948'}}>{String.fromCodePoint(0x2197)} {t('resources.externalLink')}</div>}
</a>
);
})}
</div>
</div>
))}
</div>
</section>

<section className='py-12' style={{background:'#F8FAFB'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center'>
<p className='text-sm mb-3' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{t('resources.lookingForForms')}</p>
<Link href='/enrollment' className='text-sm font-bold hover:underline' style={{fontFamily:'Fredoka',color:'#4BA3E3'}}>{t('resources.visitEnrollment')} {String.fromCharCode(8594)}</Link>
</div>
</section>

</div>
);
}
`;
fs.writeFileSync('app/resources/page.jsx', content, 'utf8');
console.log('Resources page written successfully.');
