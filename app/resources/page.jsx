'use client';
import Link from'next/link';
import{useState}from'react';
import{useLanguage}from'../i18n/LanguageProvider';

const calendarDocs=[
  {title:'2025-2026 School Year Calendar',file:'/forms/2025-2026-School-Year-Calendar.pdf',tag:'Official Document'},
];

const flyerLibrary=[
  {
    title:'Scholastic Early Childhood Resources',
    titleEs:'Recursos Educativos Scholastic',
    titleHt:'Resous Edikasyon Scholastic',
    file:'/forms/SCHOOLASTIC04024220260325141351.pdf',
    date:'March 25, 2026',
    dateEs:'25 de marzo de 2026',
    dateHt:'25 mas 2026',
    tag:'Partner',
    tagEs:'Patnè',
    tagHt:'Patnè',
    accent:'#E53E3E',
    icon:'📚',
  },
  {
    title:'Bedtime Routines Workshop',
    titleEs:'Taller de Rutinas para Dormir',
    file:'/forms/bedtime-routines-workshop.pdf',
    date:'March 11, 2026',
    dateEs:'11 de marzo de 2026',
    tag:'Workshop',
    tagEs:'Taller',
    accent:'#8B5CF6',
    icon:'🌙',
  },
];

const TAG_COLORS={
  Workshop:{bg:'#F5F3FF',color:'#8B5CF6',border:'#DDD6FE'},
  Event:{bg:'#EFF6FF',color:'#3B82F6',border:'#BFDBFE'},
  Notice:{bg:'#FFF7ED',color:'#F97316',border:'#FED7AA'},
  Newsletter:{bg:'#F0FDF4',color:'#22C55E',border:'#BBF7D0'},
  Holiday:{bg:'#FFF1F2',color:'#F43F5E',border:'#FECDD3'},
  Partner:{bg:'#FFF5F5',color:'#E53E3E',border:'#FED7D7'},
};

function PdfModal({title,docs,onClose,lang,accent}){
  const[active,setActive]=useState(0);
  const current=docs[active];
  const col=accent||'#F7C948';
  return(
    <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:2000,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(5,10,30,0.92)',backdropFilter:'blur(12px)',padding:'0.75rem'}}>
      <div onClick={e=>e.stopPropagation()} style={{background:'#0F1E3D',borderRadius:20,width:'100%',maxWidth:'96vw',height:'94vh',display:'flex',flexDirection:'column',overflow:'hidden',boxShadow:'0 40px 120px rgba(0,0,0,0.7)',border:'1px solid rgba(255,255,255,0.06)'}}>
        <div style={{background:'linear-gradient(135deg,#0F1E3D 0%,#1B2D5B 60%,#1B4A6B 100%)',flexShrink:0,position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:-60,right:-60,width:200,height:200,borderRadius:'50%',background:'radial-gradient(circle,rgba(75,163,227,0.12),transparent 70%)',pointerEvents:'none'}}/>
          <div style={{height:4,background:'linear-gradient(90deg,'+col+',#4BA3E3,'+col+')',width:'100%'}}/>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1.1rem 1.5rem 1.1rem 2rem',position:'relative',zIndex:1}}>
            <div style={{display:'flex',alignItems:'center',gap:14}}>
              <div style={{width:42,height:42,borderRadius:12,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.12)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.3rem',flexShrink:0}}>
                {accent==='#F5A623'?'\u{1F4C5}':'\u{1F4E2}'}
              </div>
              <div>
                <div style={{fontFamily:'Fredoka',fontSize:'clamp(1rem,2.5vw,1.3rem)',fontWeight:700,color:'#fff',letterSpacing:0.3}}>{title}</div>
                <div style={{fontFamily:'DM Sans',fontSize:'0.72rem',color:col,fontWeight:600,letterSpacing:'1.5px',textTransform:'uppercase',marginTop:2}}>{current.tag||'LSPA Document'}</div>
              </div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:10,flexShrink:0}}>
              <a href={current.file} download style={{fontFamily:'Fredoka',fontSize:'0.9rem',fontWeight:600,color:'#0F1E3D',background:col,padding:'8px 20px',borderRadius:999,textDecoration:'none',display:'flex',alignItems:'center',gap:6,boxShadow:'0 4px 14px rgba(0,0,0,0.3)',whiteSpace:'nowrap'}}>
                &#8595; {lang==='es'?'Descargar':'Download'}
              </a>
              <button onClick={onClose} style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.15)',color:'#fff',borderRadius:'50%',width:36,height:36,fontSize:'1rem',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>&#x2715;</button>
            </div>
          </div>
          {docs.length>1&&(
            <div style={{display:'flex',gap:6,padding:'0 2rem 1rem',overflowX:'auto'}}>
              {docs.map((d,i)=>(
                <button key={i} onClick={()=>setActive(i)} style={{fontFamily:'DM Sans',fontSize:'0.8rem',fontWeight:600,padding:'5px 14px',borderRadius:999,border:'1px solid',cursor:'pointer',whiteSpace:'nowrap',transition:'all 0.2s',background:active===i?col:'transparent',color:active===i?'#0F1E3D':'rgba(255,255,255,0.6)',borderColor:active===i?col:'rgba(255,255,255,0.2)'}}>{d.title}</button>
              ))}
            </div>
          )}
          {docs.length===1&&(
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 2rem 0.85rem',position:'relative',zIndex:1}}>
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <div style={{width:6,height:6,borderRadius:'50%',background:col}}/>
                <span style={{fontFamily:'DM Sans',fontSize:'0.78rem',color:'rgba(255,255,255,0.5)'}}>{current.date||current.title}</span>
              </div>
              <a href={current.file} target='_blank' rel='noopener noreferrer' style={{fontFamily:'DM Sans',fontSize:'0.75rem',color:'rgba(255,255,255,0.4)',textDecoration:'none'}}>
                {lang==='es'?'Abrir en nueva pestana':'Open in new tab'} &#8599;
              </a>
            </div>
          )}
        </div>
        <div style={{flex:1,background:'#2C2C2C',position:'relative',minHeight:0}}>
          <iframe src={current.file+'#toolbar=1&navpanes=0&scrollbar=1&view=FitH'} style={{width:'100%',height:'100%',border:'none',display:'block'}} title={current.title}/>
        </div>
        <div style={{background:'#0a1428',padding:'0.55rem 2rem',display:'flex',alignItems:'center',justifyContent:'space-between',flexShrink:0,borderTop:'1px solid rgba(255,255,255,0.05)'}}>
          <span style={{fontFamily:'DM Sans',fontSize:'0.72rem',color:'rgba(255,255,255,0.3)'}}>{lang==='es'?'Si el PDF no carga, usa el boton de descarga.':'If the PDF does not load, use the Download button above.'}</span>
          <span style={{fontFamily:'DM Sans',fontSize:'0.72rem',color:col,fontWeight:600,letterSpacing:'1px'}}>LSPA</span>
        </div>
      </div>
    </div>
  );
}

function UpcomingModal({onClose,lang}){
  return(
    <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:2000,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(5,10,30,0.92)',backdropFilter:'blur(12px)',padding:'1.5rem'}}>
      <div onClick={e=>e.stopPropagation()} style={{position:'relative',borderRadius:28,maxWidth:520,width:'100%',overflow:'hidden',boxShadow:'0 40px 120px rgba(0,0,0,0.7)'}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(145deg,#0F1E3D 0%,#1B2D5B 50%,#2A5451 100%)'}}/>
        <div style={{position:'absolute',top:-80,right:-80,width:300,height:300,borderRadius:'50%',background:'radial-gradient(circle,rgba(75,163,227,0.15),transparent 70%)',pointerEvents:'none'}}/>
        <div style={{height:5,background:'linear-gradient(90deg,#F7C948,#F5A623,#4BA3E3,#F7C948)',backgroundSize:'200% 100%',position:'relative',zIndex:1}}/>
        <div style={{padding:'2.5rem 2rem 2.25rem',textAlign:'center',position:'relative',zIndex:1}}>
          <button onClick={onClose} style={{position:'absolute',top:16,right:16,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.12)',color:'rgba(255,255,255,0.7)',borderRadius:'50%',width:34,height:34,fontSize:'0.95rem',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>&#x2715;</button>
          <div style={{marginBottom:'1.25rem'}}>
            <div style={{fontSize:'3rem',lineHeight:1}}>&#x1F389;</div>
          </div>
          <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(247,201,72,0.12)',border:'1px solid rgba(247,201,72,0.3)',borderRadius:999,padding:'5px 18px',marginBottom:'1.5rem'}}>
            <div style={{width:6,height:6,borderRadius:'50%',background:'#F7C948'}}/>
            <span style={{fontFamily:'DM Sans',fontSize:'0.68rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'#F7C948'}}>{lang==='es'?'Muy Pronto':'Coming Soon'}</span>
          </div>
          <h2 style={{fontFamily:'Fredoka',fontSize:'clamp(26px,5vw,38px)',color:'#FFFFFF',fontWeight:700,lineHeight:1.15,marginBottom:'1.1rem'}}>
            {lang==='es'?'Algo Especial':'Something Special'}
            <br/><span style={{background:'linear-gradient(90deg,#F7C948,#F5A623)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{lang==='es'?'esta en camino':'is on its way'}</span>
          </h2>
          <div style={{width:56,height:3,background:'linear-gradient(90deg,#F7C948,#4BA3E3)',borderRadius:99,margin:'0 auto 1.25rem'}}/>
          <p style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.72)',fontSize:'0.95rem',lineHeight:1.8,maxWidth:360,margin:'0 auto 1.75rem'}}>
            {lang==='es'
              ?'Estamos preparando noches familiares increibles, excursiones y celebraciones especiales para nuestras familias.'
              :'We are putting together incredible family nights, field trips, and special celebrations for our LSPA families. Stay tuned to your inbox and check back here.'}
          </p>
          <div style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:14,padding:'0.9rem 1.25rem',display:'inline-block'}}>
            <div style={{fontFamily:'Fredoka',fontSize:'0.9rem',color:'rgba(255,255,255,0.5)',letterSpacing:0.3}}>{lang==='es'?'Actualizaciones proximamente':'Updates coming soon'}</div>
            <div style={{fontFamily:'Fredoka',fontSize:'1rem',color:'#F7C948',fontWeight:600,marginTop:2}}>Laura Spelman Preschool Academy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MTTCard({lang}){
  const[hovered,setHovered]=useState(false);
  const[tagHover,setTagHover]=useState(null);

  const tooltip=lang==='es'
    ?'LSPALearn es una plataforma de aprendizaje movil adaptativa desarrollada por Madison Thomas Technologies. Extiende el salon de clases de LSPA al hogar — con alfabetizacion, codificacion e inteligencia artificial desde los tres anos.'
    :'LSPALearn is a personalized, pace-adaptive mobile learning platform built by Madison Thomas Technologies. It extends LSPA\'s classroom into every home — delivering literacy, coding, and AI foundations starting at age three. Launching soon.';

  const tags=[
    {
      label:'Adaptive Learning',
      labelEs:'Aprendizaje Adaptativo',
      tip:lang==='es'
        ?'La aplicacion esta disenada para adaptarse al ritmo individual de cada nino. Ningun nino es apresurado. Ningun nino es detenido. Los estandares estan alineados con NJBOE, TBOE y OOEC.'
        :'The application adapts to each child\'s individual pace. No child is rushed past understanding. No child is held back from advancing. Standards are aligned with NJBOE, TBOE, and OOEC frameworks.',
    },
    {
      label:'AI Literacy',
      labelEs:'Alfabetizacion en IA',
      tip:lang==='es'
        ?'Queremos que los ninos aprendan lo que impulsa todo esto: IA y codificacion. No como una materia electiva. No como una opcion futura. Como una alfabetizacion fundamental, comenzando desde el nivel preescolar.'
        :'We want children to learn what fuels all of this — AI and coding. Not as an elective. Not as a future option. As a foundational literacy, beginning at the preschool level.',
    },
    {
      label:'Coding Foundations',
      labelEs:'Fundamentos de Codificacion',
      tip:lang==='es'
        ?'La codificacion no solo ensena una habilidad. Le ensena al nino que las herramientas que impulsan el mundo no son fijas — que pueden entenderse, modificarse y crearse.'
        :'Coding does not just teach a child a skill. It teaches them that the tools driving the world around them are not fixed — that they can be understood, modified, and created.',
    },
  ];

  return(
    <div
      className='mb-5 rounded-2xl'
      style={{position:'relative',border:'1px solid rgba(27,45,91,0.15)',boxShadow:'0 2px 8px rgba(0,0,0,0.04)',borderRadius:16}}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>{setHovered(false);setTagHover(null);}}
    >
      {hovered&&tagHover===null&&(
        <div style={{position:'absolute',bottom:'calc(100% + 10px)',left:'50%',transform:'translateX(-50%)',zIndex:100,width:320,background:'#0F1E3D',borderRadius:14,padding:'1rem 1.25rem',boxShadow:'0 16px 40px rgba(0,0,0,0.3)',border:'1px solid rgba(75,163,227,0.2)',pointerEvents:'none'}}>
          <div style={{height:3,background:'linear-gradient(90deg,#1B2D5B,#4BA3E3,#C9A84C)',borderRadius:99,marginBottom:'0.75rem'}}/>
          <p style={{fontFamily:'DM Sans',fontSize:'0.82rem',color:'rgba(255,255,255,0.82)',lineHeight:1.7,margin:0}}>{tooltip}</p>
          <div style={{position:'absolute',bottom:-7,left:'50%',transform:'translateX(-50%)',width:14,height:14,background:'#0F1E3D',border:'1px solid rgba(75,163,227,0.2)',borderTop:'none',borderLeft:'none',rotate:'45deg'}}/>
        </div>
      )}
      <div style={{background:'linear-gradient(135deg,#0F1E3D 0%,#1B2D5B 60%,#1B4A6B 100%)',borderRadius:'16px 16px 0 0',padding:'1rem 1.5rem 0.75rem',borderBottom:'1px solid rgba(75,163,227,0.15)'}}>
        <h2 className='font-bold text-lg flex items-center gap-2' style={{fontFamily:'Fredoka',color:'#FFFFFF',margin:0}}>
          <span className='text-2xl'>&#x1F4F1;</span>
          {lang==='es'?'Plataforma Digital — MTT':'Digital Learning Platform — MTT'}
        </h2>
      </div>
      <div style={{background:'linear-gradient(135deg,#0F1E3D,#1B2D5B)',borderRadius:'0 0 16px 16px',padding:'1.5rem'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'1.5rem 1rem',borderRadius:20,border:'1px dashed rgba(75,163,227,0.25)',background:'rgba(255,255,255,0.03)',position:'relative',overflow:'visible'}}>
          <div style={{position:'absolute',top:-40,right:-40,width:160,height:160,borderRadius:'50%',background:'radial-gradient(circle,rgba(201,168,76,0.08),transparent 70%)',pointerEvents:'none'}}/>
          <div style={{position:'absolute',bottom:-40,left:-40,width:160,height:160,borderRadius:'50%',background:'radial-gradient(circle,rgba(75,163,227,0.08),transparent 70%)',pointerEvents:'none'}}/>
          <div style={{width:60,height:60,borderRadius:'50%',background:'linear-gradient(135deg,#1B2D5B,#1B4A6B)',border:'2px solid rgba(201,168,76,0.4)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.75rem',marginBottom:'1rem',boxShadow:'0 8px 24px rgba(0,0,0,0.3)'}}>
            &#x1F9E0;
          </div>
          <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(201,168,76,0.12)',border:'1px solid rgba(201,168,76,0.3)',borderRadius:999,padding:'4px 16px',marginBottom:'0.85rem'}}>
            <div style={{width:6,height:6,borderRadius:'50%',background:'#C9A84C'}}/>
            <span style={{fontFamily:'DM Sans',fontSize:'0.68rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'#C9A84C'}}>
              {lang==='es'?'EN DESARROLLO':'IN DEVELOPMENT'}
            </span>
          </div>
          <div style={{fontFamily:'Fredoka',fontSize:'1.4rem',fontWeight:700,color:'#FFFFFF',marginBottom:'0.4rem',letterSpacing:0.3}}>
            LSPALearn
          </div>
          <div style={{fontFamily:'DM Sans',fontSize:'0.82rem',color:'rgba(255,255,255,0.5)',marginBottom:'1rem',maxWidth:320,lineHeight:1.6}}>
            {lang==='es'
              ?'Powered by Madison Thomas Technologies — aprendizaje adaptativo, codificacion e IA para la proxima generacion de Trenton.'
              :'Powered by Madison Thomas Technologies — adaptive learning, coding, and AI literacy for Trenton\'s next generation.'}
          </div>
          <div style={{display:'flex',alignItems:'center',gap:10,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:14,padding:'0.65rem 1.1rem',marginBottom:'1.25rem',maxWidth:340}}>
            <span style={{fontSize:'1.3rem',flexShrink:0}}>&#x1F3E0;</span>
            <div style={{textAlign:'left'}}>
              <div style={{fontFamily:'Fredoka',fontSize:'0.88rem',fontWeight:700,color:'rgba(255,255,255,0.85)',lineHeight:1.3}}>
                {lang==='es'?'Disenado para el hogar':'Built for the home'}
              </div>
              <div style={{fontFamily:'DM Sans',fontSize:'0.73rem',color:'rgba(255,255,255,0.4)',lineHeight:1.4,marginTop:2}}>
                {lang==='es'
                  ?'El aprendizaje no termina cuando suena el timbre. LSPALearn sigue a tu hijo a casa.'
                  :'Learning doesn\'t stop when the bell rings. LSPALearn follows your child home.'}
              </div>
            </div>
          </div>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',justifyContent:'center',position:'relative',zIndex:10}}>
            {tags.map((tag,i)=>(
              <div key={i} style={{position:'relative'}}>
                {tagHover===i&&(
                  <div style={{position:'absolute',bottom:'calc(100% + 10px)',left:'50%',transform:'translateX(-50%)',zIndex:200,width:280,background:'#0F1E3D',borderRadius:14,padding:'0.85rem 1rem',boxShadow:'0 16px 40px rgba(0,0,0,0.4)',border:'1px solid rgba(201,168,76,0.25)',pointerEvents:'none'}}>
                    <div style={{height:2,background:'linear-gradient(90deg,#C9A84C,#4BA3E3)',borderRadius:99,marginBottom:'0.6rem'}}/>
                    <div style={{fontFamily:'Fredoka',fontSize:'0.85rem',fontWeight:700,color:'#C9A84C',marginBottom:'0.35rem'}}>{lang==='es'?tag.labelEs:tag.label}</div>
                    <p style={{fontFamily:'DM Sans',fontSize:'0.78rem',color:'rgba(255,255,255,0.8)',lineHeight:1.65,margin:0}}>{tag.tip}</p>
                    <div style={{position:'absolute',bottom:-7,left:'50%',transform:'translateX(-50%)',width:12,height:12,background:'#0F1E3D',border:'1px solid rgba(201,168,76,0.25)',borderTop:'none',borderLeft:'none',rotate:'45deg'}}/>
                  </div>
                )}
                <span
                  onMouseEnter={()=>setTagHover(i)}
                  onMouseLeave={()=>setTagHover(null)}
                  style={{display:'inline-block',fontFamily:'DM Sans',fontSize:'0.72rem',fontWeight:700,padding:'3px 12px',borderRadius:999,background:tagHover===i?'rgba(201,168,76,0.2)':'rgba(75,163,227,0.1)',border:'1px solid '+(tagHover===i?'rgba(201,168,76,0.4)':'rgba(75,163,227,0.2)'),color:tagHover===i?'#C9A84C':'#4BA3E3',cursor:'default',transition:'all 0.2s'}}>
                  {lang==='es'?tag.labelEs:tag.label}
                </span>
              </div>
            ))}
          </div>
          <div style={{marginTop:'1.25rem',fontFamily:'DM Sans',fontSize:'0.75rem',color:'rgba(255,255,255,0.3)'}}>
            {lang==='es'?'Pasa el cursor para saber mas · madisonthomastechnologies.com':'Hover to learn more · madisonthomastechnologies.com'}
          </div>
        </div>
      </div>
    </div>
  );
}

function FlyerLibrary({lang}){
  const[activeFlyer,setActiveFlyer]=useState(null);
  const[filter,setFilter]=useState('All');

  const tags=lang==='es'
    ?['Todos','Taller','Evento','Aviso','Boletin','Feriado']
    :['All','Workshop','Event','Notice','Newsletter','Holiday'];

  const filtered=filter==='All'||filter==='Todos'
    ? flyerLibrary
    : flyerLibrary.filter(f=>(lang==='es'?f.tagEs:f.tag)===filter);

  return(
    <div>
      {activeFlyer&&(
        <PdfModal
          title={lang==='es'?activeFlyer.titleEs:activeFlyer.title}
          docs={[{title:lang==='es'?activeFlyer.titleEs:activeFlyer.title,file:activeFlyer.file,tag:lang==='es'?activeFlyer.tagEs:activeFlyer.tag,date:lang==='es'?activeFlyer.dateEs:activeFlyer.date}]}
          onClose={()=>setActiveFlyer(null)}
          lang={lang}
          accent={activeFlyer.accent}
        />
      )}
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:20}}>
        {tags.map(tag=>(
          <button key={tag} onClick={()=>setFilter(tag)} style={{fontFamily:'DM Sans',fontSize:'0.78rem',fontWeight:700,padding:'5px 14px',borderRadius:999,border:'1px solid',cursor:'pointer',transition:'all 0.2s',background:filter===tag?'#1B2D5B':'transparent',color:filter===tag?'#fff':'#6B7280',borderColor:filter===tag?'#1B2D5B':'#e5e7eb'}}>
            {tag}
          </button>
        ))}
      </div>
      {filtered.length===0?(
        <div style={{textAlign:'center',padding:'2rem',color:'#9CA3AF',fontFamily:'DM Sans',fontSize:'0.9rem'}}>
          {lang==='es'?'No hay elementos en esta categoria.':'No items in this category yet.'}
        </div>
      ):(
        <div style={{display:'grid',gap:14}}>
          {filtered.map((flyer,i)=>{
            const tagKey=flyer.tag;
            const tc=TAG_COLORS[tagKey]||TAG_COLORS['Notice'];
            return(
              <div key={i} style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:16,overflow:'hidden',boxShadow:'0 1px 4px rgba(0,0,0,0.06)',transition:'all 0.2s'}}>
                <div style={{height:4,background:'linear-gradient(90deg,'+flyer.accent+','+flyer.accent+'88)'}}/>
                <div style={{padding:'1rem 1.25rem',display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}>
                  <div style={{display:'flex',alignItems:'center',gap:12,flex:1,minWidth:0}}>
                    <div style={{fontSize:'1.5rem',flexShrink:0}}>{flyer.icon}</div>
                    <div style={{minWidth:0}}>
                      <div style={{fontFamily:'Fredoka',fontSize:'1rem',fontWeight:700,color:'#1B2D5B',marginBottom:3}}>
                        {lang==='es'?flyer.titleEs:flyer.title}
                      </div>
                      <div style={{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap'}}>
                        <span style={{fontFamily:'DM Sans',fontSize:'0.72rem',color:'#9CA3AF'}}>
                          📅 {lang==='es'?flyer.dateEs:flyer.date}
                        </span>
                        <span style={{fontFamily:'DM Sans',fontSize:'0.7rem',fontWeight:700,padding:'2px 10px',borderRadius:999,background:tc.bg,color:tc.color,border:'1px solid '+tc.border}}>
                          {lang==='es'?flyer.tagEs:flyer.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:8,flexShrink:0}}>
                    <button onClick={()=>setActiveFlyer(flyer)} style={{fontFamily:'DM Sans',fontSize:'0.78rem',fontWeight:700,padding:'7px 16px',borderRadius:999,border:'1px solid '+flyer.accent+'44',background:flyer.accent+'12',color:flyer.accent,cursor:'pointer',transition:'all 0.2s',whiteSpace:'nowrap'}}>
                      {lang==='es'?'Ver':'View'} &#8594;
                    </button>
                    <a href={flyer.file} download style={{fontFamily:'DM Sans',fontSize:'0.78rem',fontWeight:700,padding:'7px 16px',borderRadius:999,border:'1px solid #e5e7eb',background:'#F8FAFB',color:'#6B7280',textDecoration:'none',display:'flex',alignItems:'center',gap:4,whiteSpace:'nowrap',transition:'all 0.2s'}}>
                      &#8595; {lang==='es'?'Descargar':'Download'}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const sectionsEN=[
  {category:'School Calendar & Events',icon:String.fromCodePoint(0x1F4C5),bg:'#FFFBF0',cardBg:'linear-gradient(135deg,rgba(245,166,35,0.06),rgba(247,201,72,0.04))',externalAccent:'#F5A623',items:[
    {name:'2025-2026 School Calendar',desc:'Key dates, holidays, and closings',type:'calendar',accent:'#F5A623',icon:'\u{1F4C5}'},
    {name:'Upcoming Events',desc:'Family nights, field trips, and celebrations',type:'upcoming',accent:'#4BA3E3',icon:'\u{1F389}'},
  ]},
  {category:'NJ Family Support',icon:String.fromCodePoint(0x1F3E0),bg:'#F0F7FF',cardBg:'linear-gradient(135deg,rgba(75,163,227,0.07),rgba(75,163,227,0.03))',externalAccent:'#4BA3E3',items:[
    {name:'NJ Child Care Assistance',desc:'Financial help for working families',link:'https://www.childcarenj.gov',type:'external'},
    {name:'WIC Program',desc:'Nutrition assistance for women, infants & children',link:'https://www.nj.gov/health/fhs/wic/',type:'external'},
    {name:'NJ 211',desc:'Connect to local health and human services',link:'https://www.nj211.org',type:'external'},
    {name:'Trenton Public Schools',desc:'District information and updates',link:'https://www.trentonk12.org',type:'external'},
  ]},
  {category:'Learning at Home',icon:String.fromCodePoint(0x1F393),bg:'#F0FFF4',cardBg:'linear-gradient(135deg,rgba(76,175,80,0.07),rgba(76,175,80,0.03))',externalAccent:'#4CAF50',items:[
    {name:'PBS Kids Games',desc:'Educational games for preschool learners',link:'https://pbskids.org',type:'external'},
    {name:'Starfall',desc:'Reading and math activities for young children',link:'https://www.starfall.com',type:'external'},
    {name:'Trenton Free Public Library',desc:'Free books, programs, and digital resources',link:'https://www.trentonfpl.org',type:'external'},
    {name:'LSPA Learning Games',desc:'ABC · Colors · Counting — play right here on the LSPA site',link:'/learn',type:'internal'},
  ]},
];

const sectionsES=[
  {category:'Calendario Escolar y Eventos',icon:String.fromCodePoint(0x1F4C5),bg:'#FFFBF0',cardBg:'linear-gradient(135deg,rgba(245,166,35,0.06),rgba(247,201,72,0.04))',externalAccent:'#F5A623',items:[
    {name:'Calendario Escolar 2025-2026',desc:'Fechas importantes, feriados y cierres',type:'calendar',accent:'#F5A623'},
    {name:'Proximos Eventos',desc:'Noches familiares, excursiones y celebraciones',type:'upcoming',accent:'#4BA3E3'},
  ]},
  {category:'Apoyo Familiar de NJ',icon:String.fromCodePoint(0x1F3E0),bg:'#F0F7FF',cardBg:'linear-gradient(135deg,rgba(75,163,227,0.07),rgba(75,163,227,0.03))',externalAccent:'#4BA3E3',items:[
    {name:'Asistencia de Cuidado Infantil de NJ',desc:'Ayuda financiera para familias trabajadoras',link:'https://www.childcarenj.gov',type:'external'},
    {name:'Programa WIC',desc:'Asistencia nutricional para mujeres, infantes y ninos',link:'https://www.nj.gov/health/fhs/wic/',type:'external'},
    {name:'NJ 211',desc:'Conexion con servicios de salud y servicios humanos locales',link:'https://www.nj211.org',type:'external'},
    {name:'Escuelas Publicas de Trenton',desc:'Informacion y actualizaciones del distrito',link:'https://www.trentonk12.org',type:'external'},
  ]},
  {category:'Aprendizaje en Casa',icon:String.fromCodePoint(0x1F393),bg:'#F0FFF4',cardBg:'linear-gradient(135deg,rgba(76,175,80,0.07),rgba(76,175,80,0.03))',externalAccent:'#4CAF50',items:[
    {name:'PBS Kids Games',desc:'Juegos educativos para aprendices preescolares',link:'https://pbskids.org',type:'external'},
    {name:'Starfall',desc:'Actividades de lectura y matematicas para ninos pequenos',link:'https://www.starfall.com',type:'external'},
    {name:'Biblioteca Publica de Trenton',desc:'Libros gratis, programas y recursos digitales',link:'https://www.trentonfpl.org',type:'external'},
    {name:'Juegos de Aprendizaje LSPA',desc:'ABC · Colores · Contar — juega aqui mismo en el sitio de LSPA',link:'/learn',type:'internal'},
  ]},
];

export default function Resources(){
  const{t,lang}=useLanguage();
  const sections=lang==='es'?sectionsES:sectionsEN;
  const[modal,setModal]=useState(null);

  return(
    <div style={{minHeight:'100vh'}}>
      {modal==='calendar'&&<PdfModal title={lang==='es'?'Calendario Escolar 2025-2026':'2025-2026 School Calendar'} docs={calendarDocs} onClose={()=>setModal(null)} lang={lang} accent='#F5A623'/>}
      {modal==='upcoming'&&<UpcomingModal onClose={()=>setModal(null)} lang={lang}/>}

      <section className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#1B4A6B 50%,#2A5451 100%)'}}>
        <div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 40% 50%,rgba(75,163,227,0.08),transparent 60%)'}}/>
        <div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(75,163,227,0.1)',border:'1px solid rgba(75,163,227,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#4BA3E3'}}>{t('resources.badge')}</span></div>
          <h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>{t('resources.heading')} <span style={{color:'#F5A623'}}>{t('resources.headingAccent')}</span></h1>
          <p className='text-lg' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:550,margin:'0 auto'}}>{t('resources.desc')}</p>
        </div>
      </section>

      <section className='py-16 md:py-24' style={{background:'#F8FAFB'}}>
        <div className='max-w-5xl mx-auto px-4 md:px-8'>

          {sections.map((section,si)=>(
            <div key={si} className='mb-5 rounded-2xl overflow-hidden' style={{border:'1px solid rgba(0,0,0,0.06)',boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
              <div style={{background:section.bg||'#F8FAFB',padding:'1rem 1.5rem 0.75rem',borderBottom:'1px solid rgba(0,0,0,0.05)'}}>
                <h2 className='font-bold text-lg flex items-center gap-2' style={{fontFamily:'Fredoka',color:'#1B2D5B',margin:0}}><span className='text-2xl'>{section.icon}</span>{section.category}</h2>
              </div>
              <div style={{background:section.bg||'#F8FAFB',padding:'1rem 1.5rem 1.5rem'}}>
              <div className='grid md:grid-cols-2 gap-4'>
                {section.items.map((item,j)=>{
                  if(['calendar','upcoming'].includes(item.type)){
                    const ac=item.accent||'#F7C948';
                    return(
                      <button key={j} onClick={()=>setModal(item.type)} className='text-left w-full' style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:16,padding:0,cursor:'pointer',overflow:'hidden',transition:'all 0.25s',boxShadow:'0 1px 4px rgba(0,0,0,0.06)'}}>
                        <div style={{height:5,background:'linear-gradient(90deg,'+ac+','+ac+'99)'}}/>
                        <div style={{padding:'1.1rem 1.25rem 1.25rem'}}>
                          <div style={{fontFamily:'Fredoka',fontSize:'1.05rem',fontWeight:700,color:'#1B2D5B',marginBottom:4}}>{item.name}</div>
                          <div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.88rem',marginBottom:12}}>{item.desc}</div>
                          <div style={{display:'inline-flex',alignItems:'center',gap:6,background:ac+'18',border:'1px solid '+ac+'44',borderRadius:999,padding:'4px 12px'}}>
                            <span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:ac}}>{lang==='es'?'Ver documentos':'View documents'} &#8594;</span>
                          </div>
                        </div>
                      </button>
                    );
                  }
                  if(item.type==='internal'){
                    return(
                      <a key={j} href={item.link} className='block p-5 rounded-2xl border bg-white hover:shadow-lg transition-all' style={{borderColor:'rgba(75,163,227,0.35)',textDecoration:'none',background:'linear-gradient(135deg,rgba(75,163,227,0.05),rgba(34,197,94,0.04))'}}>
                        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:4}}>
                          <span style={{fontSize:'1.4rem'}}>🎮</span>
                          <div className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1rem'}}>{item.name}</div>
                        </div>
                        <div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem',marginBottom:8}}>{item.desc}</div>
                        <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(75,163,227,0.1)',border:'1px solid rgba(75,163,227,0.3)',borderRadius:999,padding:'4px 12px'}}>
                          <span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#4BA3E3'}}>{lang==='es'?'Jugar ahora ▶':'Play now ▶'}</span>
                        </div>
                      </a>
                    );
                  }
                  return(
                    <a key={j} href={item.link} target='_blank' rel='noopener noreferrer' className='block p-5 rounded-2xl border hover:shadow-lg transition-all' style={{borderColor:(section.externalAccent||'#e5e7eb')+'44',textDecoration:'none',background:section.cardBg||'#fff'}}>
                      <div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1rem'}}>{item.name}</div>
                      <div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem'}}>{item.desc}</div>
                      <div className='mt-2 text-xs font-semibold' style={{color:section.externalAccent||'#F7C948'}}>&#8599; {t('resources.externalLink')}</div>
                    </a>
                  );
                })}
              </div>
              </div>
            </div>
          ))}

          <div className='mb-5 rounded-2xl overflow-hidden' style={{border:'1px solid rgba(139,92,246,0.15)',boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
            <div style={{background:'#FAF5FF',padding:'1rem 1.5rem 0.75rem',borderBottom:'1px solid rgba(139,92,246,0.1)'}}>
              <h2 className='font-bold text-lg flex items-center gap-2' style={{fontFamily:'Fredoka',color:'#1B2D5B',margin:0}}>
                <span className='text-2xl'>📢</span>
                {lang==='es'?'Lo Que Pasa en LSPA':"What's Happening at LSPA"}
              </h2>
              <p style={{fontFamily:'DM Sans',fontSize:'0.88rem',color:'#9CA3AF',margin:'4px 0 0'}}>
                {lang==='es'?'Talleres, volantes y actualizaciones comunitarias — mas recientes primero.':'Workshops, flyers, and community updates — newest first.'}
              </p>
            </div>
            <div style={{background:'#FAF5FF',padding:'1rem 1.5rem 1.5rem'}}>
              <FlyerLibrary lang={lang}/>
            </div>
          </div>

          <MTTCard lang={lang}/>

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
