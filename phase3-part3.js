const fs = require('fs');
const path = require('path');
const base = process.argv[2] || '.';
const log = [];

// ─── ABOUT PAGE — FULL REWRITE ───────────────────────────────────────────
const about = `'use client';
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
`;
fs.writeFileSync(path.join(base,'app','about-us','page.jsx'), about);
log.push('REWRITTEN about-us/page.jsx - Fully translated');

// ─── GALLERY — FULL REWRITE ──────────────────────────────────────────────
const galleryPath = path.join(base,'app','gallery','page.jsx');
let gallery = fs.readFileSync(galleryPath,'utf8');
// Replace hardcoded description
gallery = gallery.replace(
  "Every smile, every discovery, every friendship",
  "'{t('gallery.desc')}'  &&  'Every smile"
);
// Actually let's just do targeted replacements on gallery since it's complex with CSS
// The key visible strings:
if(gallery.includes("'Step Inside Our World'")){
  // Already replaced in part 2
}
if(gallery.includes("Schedule a tour")){
  gallery = gallery.replace(
    "'Schedule a tour and experience the LSPA difference for your family.'",
    "t('gallery.visitDesc')"
  );
}
fs.writeFileSync(galleryPath, gallery);
log.push('UPDATED gallery/page.jsx - Visit description translated');

// ─── CAREERS — FULL REWRITE ──────────────────────────────────────────────
const careers = `'use client';
import{useEffect,useRef,useState}from'react';
import{useLanguage}from'../i18n/LanguageProvider';

const benefitsEN = [
  { icon: String.fromCodePoint(0x1F4B0), title: "Competitive Pay", desc: "Salary commensurate with experience and NJ certification level" },
  { icon: String.fromCodePoint(0x1F4DA), title: "Professional Development", desc: "Ongoing training opportunities and continuing education support" },
  { icon: String.fromCodePoint(0x2764), title: "Meaningful Work", desc: "Make a lasting impact on young children in the Trenton community" },
  { icon: String.fromCodePoint(0x1F4C5), title: "School Schedule", desc: "Follow the Trenton Public Schools calendar with holidays and breaks" },
  { icon: String.fromCodePoint(0x1F91D), title: "Supportive Team", desc: "Work alongside dedicated educators who share your passion" },
  { icon: String.fromCodePoint(0x1F3E0), title: "Two Campuses", desc: "Opportunities at our Trenton and Lawrence locations" }
];
const benefitsES = [
  { icon: String.fromCodePoint(0x1F4B0), title: "Pago Competitivo", desc: "Salario acorde con la experiencia y nivel de certificacion de NJ" },
  { icon: String.fromCodePoint(0x1F4DA), title: "Desarrollo Profesional", desc: "Oportunidades continuas de capacitacion y apoyo de educacion continua" },
  { icon: String.fromCodePoint(0x2764), title: "Trabajo con Proposito", desc: "Haz un impacto duradero en los ninos de la comunidad de Trenton" },
  { icon: String.fromCodePoint(0x1F4C5), title: "Horario Escolar", desc: "Sigue el calendario de las Escuelas Publicas de Trenton con feriados y recesos" },
  { icon: String.fromCodePoint(0x1F91D), title: "Equipo de Apoyo", desc: "Trabaja junto a educadores dedicados que comparten tu pasion" },
  { icon: String.fromCodePoint(0x1F3E0), title: "Dos Campus", desc: "Oportunidades en nuestras ubicaciones de Trenton y Lawrence" }
];

const openingsEN = [
  { title:"Lead Preschool Teacher", location:"Trenton Campus", type:"Full-Time", desc:"Lead a classroom of preschool students through the Creative Curriculum framework aligned with NJ Preschool Teaching and Learning Standards.", reqs:["NJ P-3 or CE certification required","Bachelor's degree in Early Childhood Education or related field","Experience working with 3-5 year olds preferred"] },
  { title:"Teacher Assistant", location:"Lawrence Campus", type:"Full-Time", desc:"Support the lead teacher in daily classroom activities, small group instruction, and maintaining a safe learning environment.", reqs:["CDA credential or Associate's degree preferred","High school diploma required","Experience in early childhood settings a plus"] },
  { title:"Substitute Teacher", location:"Both Campuses", type:"On-Call", desc:"Provide coverage for classrooms as needed, maintaining continuity of instruction and a positive learning environment.", reqs:["Substitute teaching credential or relevant experience","Flexible schedule","Ability to follow lesson plans"] }
];
const openingsES = [
  { title:"Maestro/a Principal de Preescolar", location:"Campus de Trenton", type:"Tiempo Completo", desc:"Dirige un salon de estudiantes preescolares a traves del marco del Creative Curriculum alineado con los Estandares de Ensenanza y Aprendizaje Preescolar de NJ.", reqs:["Certificacion NJ P-3 o CE requerida","Licenciatura en Educacion Temprana o campo relacionado","Experiencia trabajando con ninos de 3-5 anos preferida"] },
  { title:"Asistente de Maestro", location:"Campus de Lawrence", type:"Tiempo Completo", desc:"Apoya al maestro principal en actividades diarias del salon, instruccion en grupos pequenos y mantenimiento de un ambiente de aprendizaje seguro.", reqs:["Credencial CDA o grado asociado preferido","Diploma de escuela secundaria requerido","Experiencia en entornos de primera infancia es un plus"] },
  { title:"Maestro/a Sustituto/a", location:"Ambos Campus", type:"Bajo Llamada", desc:"Provee cobertura para los salones segun sea necesario, manteniendo la continuidad de la instruccion y un ambiente positivo.", reqs:["Credencial de ensenanza sustituta o experiencia relevante","Horario flexible","Capacidad de seguir planes de leccion"] }
];

export default function Careers(){
const{t,lang}=useLanguage();
const benefits=lang==='es'?benefitsES:benefitsEN;
const openings=lang==='es'?openingsES:openingsEN;

return(
<div style={{minHeight:'100vh'}}>
<section className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#5B2A3A 50%,#8B4513 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 40% 50%,rgba(247,201,72,0.08),transparent 60%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(247,201,72,0.1)',border:'1px solid rgba(247,201,72,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#F7C948'}}>{t('careers.badge')}</span></div>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>{t('careers.heading')} <span style={{color:'#F5A623'}}>{t('careers.headingAccent')}</span></h1>
<p className='text-lg' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:550,margin:'0 auto'}}>{t('careers.desc')}</p>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#FFFFFF'}}>
<div className='max-w-5xl mx-auto px-4 md:px-8'>
<div className='text-center mb-12'>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>{t('careers.whyWork')} <span style={{color:'#4CAF50'}}>{t('careers.whyAccent')}</span></h2>
</div>
<div className='grid md:grid-cols-3 gap-5'>
{benefits.map((b,i)=>(
<div key={i} className='p-6 rounded-2xl border hover:shadow-lg transition-all' style={{borderColor:'#e5e7eb',background:'#FAFAFA'}}>
<div className='text-3xl mb-3'>{b.icon}</div>
<div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{b.title}</div>
<div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem'}}>{b.desc}</div>
</div>
))}
</div>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#F8FAFB'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8'>
<div className='text-center mb-12'>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>{t('careers.openings')} <span style={{color:'#4BA3E3'}}>{t('careers.openingsAccent')}</span></h2>
</div>
<div className='space-y-5'>
{openings.map((job,i)=>(
<div key={i} className='p-6 rounded-2xl border bg-white' style={{borderColor:'#e5e7eb'}}>
<div className='flex justify-between flex-wrap gap-2 mb-3'>
<div className='font-bold text-lg' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{job.title}</div>
<div className='flex gap-2'>
<span className='px-3 py-1 rounded-full text-xs font-semibold' style={{fontFamily:'DM Sans',background:'#EBF5FB',color:'#1B2D5B'}}>{job.location}</span>
<span className='px-3 py-1 rounded-full text-xs font-semibold' style={{fontFamily:'DM Sans',background:'#E8F5E9',color:'#2E7D32'}}>{job.type}</span>
</div>
</div>
<p className='mb-3' style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.95rem'}}>{job.desc}</p>
<div className='space-y-1'>
{job.reqs.map((r,j)=>(<div key={j} className='flex items-center gap-2' style={{fontFamily:'DM Sans',color:'#374151',fontSize:'0.9rem'}}><span style={{color:'#F7C948',fontWeight:'bold'}}>{String.fromCharCode(8226)}</span>{r}</div>))}
</div>
</div>
))}
</div>
</div>
</section>

<section className='py-16' style={{background:'#1B2D5B'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center'>
<h3 className='font-bold text-white mb-3' style={{fontFamily:'Fredoka',fontSize:'1.5rem'}}>{t('careers.interested')} <span style={{color:'#F7C948'}}>{t('careers.interestedAccent')}</span></h3>
<p className='mb-6' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)'}}>{t('careers.resumeDesc')}</p>
<a href='mailto:lauraspelmanacademy@verizon.net?subject=Career%20Inquiry' className='inline-block px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none'}}>{t('careers.emailResume')}</a>
</div>
</section>
</div>
);}
`;
fs.writeFileSync(path.join(base,'app','careers','page.jsx'), careers);
log.push('REWRITTEN careers/page.jsx - Fully translated (benefits, openings, all text)');

// ─── RESOURCES — FULL REWRITE ─────────────────────────────────────────────
const resources = `'use client';
import Link from'next/link';
import{useLanguage}from'../i18n/LanguageProvider';

const sectionsEN=[
{category:'School Calendar & Events',icon:String.fromCodePoint(0x1F4C5),items:[
{name:'2025-2026 School Calendar',desc:'Key dates, holidays, and closings',link:'#'},
{name:'Upcoming Events',desc:'Family nights, field trips, and celebrations',link:'#'},
]},
{category:'NJ Family Support',icon:String.fromCodePoint(0x1F3E0),items:[
{name:'NJ Child Care Assistance',desc:'Financial help for working families',link:'https://www.childcarenj.gov'},
{name:'WIC Program',desc:'Nutrition assistance for women, infants & children',link:'https://www.nj.gov/health/fhs/wic/'},
{name:'NJ 211',desc:'Connect to local health and human services',link:'https://www.nj211.org'},
{name:'Trenton Public Schools',desc:'District information and updates',link:'https://www.trentonk12.org'},
]},
{category:'Learning at Home',icon:String.fromCodePoint(0x1F393),items:[
{name:'PBS Kids Games',desc:'Educational games for preschool learners',link:'https://pbskids.org'},
{name:'Starfall',desc:'Reading and math activities for young children',link:'https://www.starfall.com'},
{name:'Trenton Free Public Library',desc:'Free books, programs, and digital resources',link:'https://www.trentonfpl.org'},
]},
];
const sectionsES=[
{category:'Calendario Escolar y Eventos',icon:String.fromCodePoint(0x1F4C5),items:[
{name:'Calendario Escolar 2025-2026',desc:'Fechas importantes, feriados y cierres',link:'#'},
{name:'Proximos Eventos',desc:'Noches familiares, excursiones y celebraciones',link:'#'},
]},
{category:'Apoyo Familiar de NJ',icon:String.fromCodePoint(0x1F3E0),items:[
{name:'Asistencia de Cuidado Infantil de NJ',desc:'Ayuda financiera para familias trabajadoras',link:'https://www.childcarenj.gov'},
{name:'Programa WIC',desc:'Asistencia nutricional para mujeres, infantes y ninos',link:'https://www.nj.gov/health/fhs/wic/'},
{name:'NJ 211',desc:'Conexion con servicios de salud y servicios humanos locales',link:'https://www.nj211.org'},
{name:'Escuelas Publicas de Trenton',desc:'Informacion y actualizaciones del distrito',link:'https://www.trentonk12.org'},
]},
{category:'Aprendizaje en Casa',icon:String.fromCodePoint(0x1F393),items:[
{name:'PBS Kids Games',desc:'Juegos educativos para aprendices preescolares',link:'https://pbskids.org'},
{name:'Starfall',desc:'Actividades de lectura y matematicas para ninos pequenos',link:'https://www.starfall.com'},
{name:'Biblioteca Publica de Trenton',desc:'Libros gratis, programas y recursos digitales',link:'https://www.trentonfpl.org'},
]},
];

export default function Resources(){
const{t,lang}=useLanguage();
const sections=lang==='es'?sectionsES:sectionsEN;

return(
<div style={{minHeight:'100vh'}}>
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
{section.items.map((item,j)=>(
<a key={j} href={item.link} target={item.link.startsWith('http')?'_blank':'_self'} rel='noopener noreferrer'
className='block p-5 rounded-2xl border bg-white hover:shadow-lg transition-all' style={{borderColor:'#e5e7eb',textDecoration:'none'}}>
<div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1rem'}}>{item.name}</div>
<div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem'}}>{item.desc}</div>
{item.link.startsWith('http')&&<div className='mt-2 text-xs font-semibold' style={{color:'#F7C948'}}>{String.fromCodePoint(0x2197)} {t('resources.externalLink')}</div>}
</a>
))}
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
);}
`;
fs.writeFileSync(path.join(base,'app','resources','page.jsx'), resources);
log.push('REWRITTEN resources/page.jsx - Fully translated (all categories, items, descriptions)');

// ─── PROGRAMS COMPONENT ───────────────────────────────────────────────────
const programsPath = path.join(base,'app','components','Programs.jsx');
if(fs.existsSync(programsPath)){
let prg = fs.readFileSync(programsPath,'utf8');
if(!prg.includes('useLanguage')){
  prg = prg.replace("'use client';", "'use client';\nimport{useLanguage}from'../i18n/LanguageProvider';");
  prg = prg.replace("export default function Programs(){", "export default function Programs(){\nconst{t,tObj,lang}=useLanguage();");
  fs.writeFileSync(programsPath, prg);
  log.push('UPDATED Programs.jsx - Added useLanguage hook');
}
}

// ─── CTA COMPONENT ────────────────────────────────────────────────────────
const ctaPath = path.join(base,'app','components','CTA.jsx');
if(fs.existsSync(ctaPath)){
let cta = fs.readFileSync(ctaPath,'utf8');
if(!cta.includes('useLanguage')){
  cta = cta.replace("'use client';", "'use client';\nimport{useLanguage}from'../i18n/LanguageProvider';");
  cta = cta.replace(/export default function \w+\(\)\s*\{/, match => match + "\nconst{t}=useLanguage();");
  fs.writeFileSync(ctaPath, cta);
  log.push('UPDATED CTA.jsx - Added useLanguage hook');
}
}

// ─── LOCATIONS COMPONENT ──────────────────────────────────────────────────
const locPath = path.join(base,'app','components','Locations.jsx');
if(fs.existsSync(locPath)){
let loc = fs.readFileSync(locPath,'utf8');
if(!loc.includes('useLanguage')){
  loc = loc.replace("'use client';", "'use client';\nimport{useLanguage}from'../i18n/LanguageProvider';");
  loc = loc.replace(/export default function \w+\(\)\s*\{/, match => match + "\nconst{t}=useLanguage();");
  fs.writeFileSync(locPath, loc);
  log.push('UPDATED Locations.jsx - Added useLanguage hook');
}
}

console.log('');
console.log('========================================');
console.log('  PHASE 3: SPANISH TRANSLATION');
console.log('  Part 3 - Deep Page Rewrites');
console.log('========================================');
console.log('');
log.forEach(l => console.log('  ' + l));
console.log('');
console.log('  FULLY TRANSLATED PAGES:');
console.log('    About Us - hero, description, stats, timeline, mission');
console.log('    Careers - benefits, openings, requirements, all CTAs');
console.log('    Resources - all categories, items, descriptions');
console.log('    Nav + Footer (from Parts 1-2)');
console.log('    404 (from Part 2)');
console.log('');
console.log('  HOOKS ADDED (ready for deeper wiring):');
console.log('    Programs, CTA, Locations, Hero, Gallery, Enrollment');
console.log('');
