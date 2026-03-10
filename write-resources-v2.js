const fs = require('fs');

const content = `'use client';
import Link from'next/link';
import{useState}from'react';
import{useLanguage}from'../i18n/LanguageProvider';

// ── PDF documents for modals ──────────────────────────────────────────────────
const calendarDocs = [
  {title:'2025-2026 School Year Calendar',file:'/documents/school-calendar-2025-2026.pdf'},
];

const happeningDocs = [
  {title:'Bedtime Routines Workshop Flyer',file:'/documents/bedtime-routines-workshop.pdf',date:'March 11, 2026'},
];

// ── Shared PDF Modal ──────────────────────────────────────────────────────────
function PdfModal({title,docs,onClose,lang}){
  const[active,setActive]=useState(0);
  const current=docs[active];
  return(
    <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(10,20,50,0.82)',backdropFilter:'blur(8px)',padding:'1rem'}}>
      <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:20,width:'100%',maxWidth:780,maxHeight:'92vh',display:'flex',flexDirection:'column',overflow:'hidden',boxShadow:'0 32px 80px rgba(0,0,0,0.45)'}}>

        {/* Header */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 1.25rem 1rem 1.5rem',borderBottom:'1px solid #e5e7eb',background:'linear-gradient(135deg,#1B2D5B,#1B4A6B)',flexShrink:0}}>
          <div>
            <div style={{fontFamily:'Fredoka',fontSize:'1.15rem',fontWeight:700,color:'#fff'}}>{title}</div>
            {docs.length>1&&<div style={{fontFamily:'DM Sans',fontSize:'0.75rem',color:'rgba(255,255,255,0.6)',marginTop:2}}>{lang==='es'?'Selecciona un documento:':'Select a document:'}</div>}
          </div>
          <button onClick={onClose} style={{background:'rgba(255,255,255,0.15)',border:'none',color:'#fff',borderRadius:'50%',width:34,height:34,fontSize:'1rem',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'DM Sans',flexShrink:0}}>&#x2715;</button>
        </div>

        {/* Tab strip — only shown when multiple docs */}
        {docs.length>1&&(
          <div style={{display:'flex',gap:8,padding:'0.75rem 1.5rem',background:'#F8FAFB',borderBottom:'1px solid #e5e7eb',overflowX:'auto',flexShrink:0}}>
            {docs.map((d,i)=>(
              <button key={i} onClick={()=>setActive(i)} style={{fontFamily:'DM Sans',fontSize:'0.82rem',fontWeight:600,padding:'6px 14px',borderRadius:999,border:'none',cursor:'pointer',whiteSpace:'nowrap',background:active===i?'#1B2D5B':'#e5e7eb',color:active===i?'#fff':'#374151',transition:'all 0.2s'}}>{d.title}</button>
            ))}
          </div>
        )}

        {/* Single doc meta row */}
        {docs.length===1&&(
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0.6rem 1.5rem',background:'#F8FAFB',borderBottom:'1px solid #e5e7eb',flexShrink:0}}>
            <span style={{fontFamily:'DM Sans',fontSize:'0.82rem',color:'#6B7280'}}>{current.title}</span>
            <a href={current.file} download style={{fontFamily:'Fredoka',fontSize:'0.85rem',fontWeight:600,color:'#fff',background:'#1B2D5B',padding:'6px 16px',borderRadius:999,textDecoration:'none',display:'flex',alignItems:'center',gap:6}}>
              <span>&#8595;</span>{lang==='es'?'Descargar':'Download'}
            </a>
          </div>
        )}

        {/* Multi doc action bar */}
        {docs.length>1&&(
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0.5rem 1.5rem',background:'#fff',borderBottom:'1px solid #e5e7eb',flexShrink:0}}>
            <span style={{fontFamily:'DM Sans',fontSize:'0.8rem',color:'#9CA3AF'}}>{current.date||''}</span>
            <a href={current.file} download style={{fontFamily:'Fredoka',fontSize:'0.85rem',fontWeight:600,color:'#fff',background:'#1B2D5B',padding:'6px 16px',borderRadius:999,textDecoration:'none',display:'flex',alignItems:'center',gap:6}}>
              <span>&#8595;</span>{lang==='es'?'Descargar':'Download'}
            </a>
          </div>
        )}

        {/* PDF Viewer */}
        <div style={{flex:1,overflow:'hidden',background:'#525659',minHeight:400}}>
          <iframe src={current.file+'#toolbar=0&navpanes=0'} style={{width:'100%',height:'100%',minHeight:420,border:'none'}} title={current.title}/>
        </div>

        {/* Footer */}
        <div style={{padding:'0.75rem 1.5rem',background:'#F8FAFB',borderTop:'1px solid #e5e7eb',display:'flex',alignItems:'center',justifyContent:'space-between',flexShrink:0}}>
          <span style={{fontFamily:'DM Sans',fontSize:'0.75rem',color:'#9CA3AF'}}>{lang==='es'?'Si el PDF no carga, descargalo arriba.':'If the PDF does not load, use the download button above.'}</span>
          <a href={current.file} target='_blank' rel='noopener noreferrer' style={{fontFamily:'DM Sans',fontSize:'0.75rem',color:'#4BA3E3',textDecoration:'none'}}>{lang==='es'?'Abrir en nueva pestana':'Open in new tab'} &#8599;</a>
        </div>

      </div>
    </div>
  );
}

// ── Upcoming Events Modal ─────────────────────────────────────────────────────
function UpcomingModal({onClose,lang}){
  return(
    <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(10,20,50,0.82)',backdropFilter:'blur(8px)',padding:'1.5rem'}}>
      <div onClick={e=>e.stopPropagation()} style={{background:'linear-gradient(145deg,#1B2D5B 0%,#1B4A6B 55%,#2A5451 100%)',borderRadius:24,maxWidth:460,width:'100%',padding:'2.75rem 2rem',textAlign:'center',position:'relative',boxShadow:'0 32px 80px rgba(0,0,0,0.5)',border:'1px solid rgba(255,255,255,0.08)'}}>
        <button onClick={onClose} style={{position:'absolute',top:16,right:18,background:'rgba(255,255,255,0.1)',border:'none',color:'#fff',borderRadius:'50%',width:34,height:34,fontSize:'1rem',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'DM Sans'}}>&#x2715;</button>
        <div style={{fontSize:'2.2rem',marginBottom:'0.75rem'}}>&#x1F31F; &#x2728; &#x1F31F;</div>
        <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(247,201,72,0.15)',border:'1px solid rgba(247,201,72,0.35)',borderRadius:999,padding:'4px 16px',marginBottom:'1.25rem'}}>
          <span style={{fontFamily:'DM Sans',fontSize:'0.68rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'#F7C948'}}>{lang==='es'?'Muy Pronto':'Coming Soon'}</span>
        </div>
        <h2 style={{fontFamily:'Fredoka',fontSize:'clamp(22px,5vw,30px)',color:'#FFFFFF',fontWeight:700,lineHeight:1.25,marginBottom:'1rem'}}>
          {lang==='es'?'Grandes Cosas Vienen':'Big Things Are Coming'}
          <br/><span style={{color:'#F7C948'}}>{lang==='es'?'a la Familia LSPA':'to the LSPA Family'}</span>
        </h2>
        <p style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.78)',fontSize:'0.92rem',lineHeight:1.75,maxWidth:340,margin:'0 auto 1.5rem'}}>
          {lang==='es'
            ?'Estamos preparando algo increible: noches familiares, excursiones y celebraciones especiales. Mantente atento a tu correo y a esta pagina.'
            :'We are planning something special for our families \u2014 family nights, field trips, and celebrations. Stay tuned to your inbox and this page.'}
        </p>
        <div style={{width:48,height:3,background:'linear-gradient(90deg,#F7C948,#F5A623)',borderRadius:99,margin:'0 auto 1.25rem'}}/>
        <p style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.4)',fontSize:'0.75rem'}}>
          {lang==='es'?'Actualizaciones proximamente \u2014 LSPA':'Check back soon \u2014 LSPA'}
        </p>
      </div>
    </div>
  );
}

// ── Section data ──────────────────────────────────────────────────────────────
const sectionsEN=[
  {category:'School Calendar & Events',icon:String.fromCodePoint(0x1F4C5),items:[
    {name:'2025-2026 School Calendar',desc:'Key dates, holidays, and closings',type:'calendar'},
    {name:'Upcoming Events',desc:'Family nights, field trips, and celebrations',type:'upcoming'},
    {name:"What's Happening at LSPA",desc:'Workshops, flyers, and community updates',type:'happening'},
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
    {name:'Calendario Escolar 2025-2026',desc:'Fechas importantes, feriados y cierres',type:'calendar'},
    {name:'Proximos Eventos',desc:'Noches familiares, excursiones y celebraciones',type:'upcoming'},
    {name:'Lo Que Pasa en LSPA',desc:'Talleres, volantes y actualizaciones comunitarias',type:'happening'},
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

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Resources(){
  const{t,lang}=useLanguage();
  const sections=lang==='es'?sectionsES:sectionsEN;
  const[modal,setModal]=useState(null); // 'calendar' | 'upcoming' | 'happening' | null

  return(
    <div style={{minHeight:'100vh'}}>

      {modal==='calendar'&&<PdfModal title={lang==='es'?'Calendario Escolar 2025-2026':'2025-2026 School Calendar'} docs={calendarDocs} onClose={()=>setModal(null)} lang={lang}/>}
      {modal==='upcoming'&&<UpcomingModal onClose={()=>setModal(null)} lang={lang}/>}
      {modal==='happening'&&<PdfModal title={lang==='es'?'Lo Que Pasa en LSPA':"What's Happening at LSPA"} docs={happeningDocs} onClose={()=>setModal(null)} lang={lang}/>}

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
                  if(['calendar','upcoming','happening'].includes(item.type)){
                    return(
                      <button key={j} onClick={()=>setModal(item.type)}
                        className='block p-5 rounded-2xl border bg-white hover:shadow-lg transition-all text-left w-full group' style={{borderColor:'#e5e7eb',cursor:'pointer'}}>
                        <div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1rem'}}>{item.name}</div>
                        <div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem'}}>{item.desc}</div>
                        <div className='mt-2 text-xs font-semibold' style={{color:'#4BA3E3'}}>{lang==='es'?'Ver documentos':'View documents'} &#8594;</div>
                      </button>
                    );
                  }
                  return(
                    <a key={j} href={item.link} target='_blank' rel='noopener noreferrer'
                      className='block p-5 rounded-2xl border bg-white hover:shadow-lg transition-all' style={{borderColor:'#e5e7eb',textDecoration:'none'}}>
                      <div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1rem'}}>{item.name}</div>
                      <div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem'}}>{item.desc}</div>
                      <div className='mt-2 text-xs font-semibold' style={{color:'#F7C948'}}>&#8599; {t('resources.externalLink')}</div>
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
          <Link href='/enrollment' className='text-sm font-bold hover:underline' style={{fontFamily:'Fredoka',color:'#4BA3E3'}}>{t('resources.visitEnrollment')} &#8594;</Link>
        </div>
      </section>

    </div>
  );
}
`;

fs.writeFileSync('app/resources/page.jsx', content, 'utf8');
console.log('Resources page written successfully.');
