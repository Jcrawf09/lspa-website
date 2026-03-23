'use client';
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
  { title:"Elementary School Teacher", location:"1040 Spruce St", type:"Full-Time", pay:"$57,922 – $66,651 per year", desc:"We are seeking a passionate and dedicated Elementary School Teacher to join our educational team. The ideal candidate will foster a positive and engaging learning environment for students, encouraging academic growth and personal development.", reqs:["Bachelor's degree in Education or related field; teaching certification preferred","Experience working with children in an educational setting highly desirable","Strong understanding of childhood development principles","Excellent communication skills, both verbal and written","Commitment to fostering a safe, nurturing classroom environment"], benefits:["Health, Dental & Vision insurance","Paid time off","Monday to Friday"] },
  { title:"Retired Elementary School Teacher", location:"1040 Spruce St", type:"Full-Time", pay:"$57,922 – $66,651 per year", desc:"Looking for retired teachers and educators with a passion for making a difference, interested in reentering the workforce while supplementing their income. Must hold a NJ teaching certificate. Flexible schedules and competitive pay in a nurturing classroom environment.", reqs:["Must hold a teaching certificate issued by the State of New Jersey","Experience in elementary education","Passion for working with young children","Flexible schedule availability"], benefits:["Health, Dental & Vision insurance","Paid time off","Flexible scheduling"] },
  { title:"Teacher Assistant", location:"1040 Spruce St", type:"Full-Time", desc:"Support the lead teacher in daily classroom activities, small group instruction, and maintaining a safe and engaging learning environment for preschool-aged children.", reqs:["CDA credential or Associate's degree preferred","High school diploma required","Experience in early childhood settings a plus"] }
];
const openingsES = [
  { title:"Maestra de Escuela Primaria", location:"1040 Spruce St", type:"Tiempo Completo", pay:"$57,922 – $66,651 por ano", desc:"Buscamos una maestra apasionada y dedicada para unirse a nuestro equipo educativo. El candidato ideal fomentara un ambiente de aprendizaje positivo, alentando el crecimiento academico y el desarrollo personal.", reqs:["Licenciatura en Educacion o campo relacionado; certificacion preferida","Experiencia trabajando con ninos altamente deseable","Solido conocimiento del desarrollo infantil","Excelentes habilidades de comunicacion","Compromiso con un ambiente de aula seguro y estimulante"], benefits:["Seguro medico, dental y de vision","Tiempo libre pagado","Horario de lunes a viernes"] },
  { title:"Maestra de Primaria Jubilada", location:"1040 Spruce St", type:"Tiempo Completo", pay:"$57,922 – $66,651 por ano", desc:"Buscamos maestras jubiladas con pasion por la ensenanza interesadas en reincorporarse a la fuerza laboral. Se requiere certificado de ensenanza del Estado de Nueva Jersey. Horarios flexibles y pago competitivo.", reqs:["Certificado de ensenanza del Estado de Nueva Jersey requerido","Experiencia en educacion primaria","Pasion por trabajar con ninos","Disponibilidad de horario flexible"], benefits:["Seguro medico, dental y de vision","Tiempo libre pagado","Horario flexible"] },
  { title:"Asistente de Maestra", location:"1040 Spruce St", type:"Tiempo Completo", desc:"Apoya a la maestra principal en actividades diarias del salon, instruccion en grupos pequenos y mantenimiento de un ambiente de aprendizaje seguro.", reqs:["Credencial CDA o grado asociado preferido","Diploma de escuela secundaria requerido","Experiencia en entornos de primera infancia es un plus"] }
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
