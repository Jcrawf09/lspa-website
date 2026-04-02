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
                      <div style={{display:'flex',alignIte
