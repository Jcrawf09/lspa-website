'use client';
import Link from'next/link';
import{useState,useEffect,useRef}from'react';
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
  const[activeTag,setActiveTag]=useState(null);
  const canvasRef=useRef(null);
  const cardRef=useRef(null);
  const isTouch=typeof window!=='undefined'?('ontouchstart' in window||navigator.maxTouchPoints>0):false;

  const tags=[
    {
      label:'Adaptive Learning',
      labelEs:'Aprendizaje Adaptativo',
      em:false,
      tip:lang==='es'
        ?'LSPALearn está construido sobre los marcos establecidos por el OOEC y TBOE — pero va más allá del currículo. Es un entorno de aprendizaje adaptativo al ritmo individual de cada niño. Ningún niño es apresurado y ningún niño es detenido.'
        :'LSPALearn is built upon the frameworks established by the OOEC and TBOE — but goes above and beyond the curriculum. It is a personalized, pace-adaptive environment built to follow children home. No child is rushed past understanding and no child is held back from advancing.',
    },
    {
      label:'AI Literacy',
      labelEs:'Alfabetización en IA',
      em:true,
      tip:lang==='es'
        ?'Queremos que los niños aprendan lo que impulsa todo esto — IA y codificación. No como una materia electiva. No como una opción futura. Como una alfabetización fundamental, comenzando desde el nivel preescolar.'
        :'We want children to learn what fuels all of this — AI and coding. Not as an elective. Not as a future option. As a foundational literacy, beginning at the preschool level.',
    },
    {
      label:'Coding Foundations',
      labelEs:'Fundamentos de Codificación',
      em:false,
      tip:lang==='es'
        ?'La codificación no solo enseña una habilidad. Le enseña al niño que las herramientas que impulsan el mundo no son fijas — que pueden entenderse, modificarse y crearse.'
        :'Coding does not just teach a child a skill. It teaches them that the tools driving the world around them are not fixed — that they can be understood, modified, and created. It lets a child shape their world of learning to their specific needs, their culture, their language, and their age.',
    },
  ];

  useEffect(()=>{
    const canvas=canvasRef.current;
    const card=cardRef.current;
    if(!canvas||!card)return;
    const gl=canvas.getContext('webgl')||canvas.getContext('experimental-webgl');
    if(!gl)return;
    const sync=()=>{canvas.width=card.offsetWidth;canvas.height=card.offsetHeight;gl.viewport(0,0,canvas.width,canvas.height);};
    sync();
    window.addEventListener('resize',sync);
    const vs=`attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
    const fs=`
precision mediump float;
uniform float u_t;uniform vec2 u_r;
float h(float n){return fract(sin(n)*43758.5453);}
float ns(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i.x+i.y*57.),h(i.x+1.+i.y*57.),f.x),mix(h(i.x+(i.y+1.)*57.),h(i.x+1.+(i.y+1.)*57.),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*ns(p);p*=2.1;a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/u_r;float t=u_t*.00038;
  vec3 col=vec3(.012,.031,.062);
  float n1=fbm(vec2(uv.x*2.8+t*.7,uv.y*1.8+t*.5));
  float n2=fbm(vec2(uv.x*1.9-t*.5,uv.y*2.4+t*.8));
  float w1=sin(uv.x*3.6+t*1.1)*.45+sin(uv.x*7.2+t*1.7)*.25+sin(uv.x*1.8+t*.7)*.3;
  float y1=.3+w1*.1+n1*.06;
  float d1=smoothstep(.22+sin(t*.8+uv.x*2.)*.05,0.,abs(uv.y-y1));
  col+=vec3(.016,.20,.10)*d1*(.6+.28*sin(t*1.3+uv.x*3.2));
  float w2=sin(uv.x*2.4+t*.85+1.2)*.5+sin(uv.x*5.+t*1.4+.8)*.25+sin(uv.x*1.1+t*.6+2.)*.25;
  float y2=.6+w2*.09+n2*.05;
  float d2=smoothstep(.18,0.,abs(uv.y-y2));
  col+=vec3(.010,.10,.20)*d2*(.48+.26*sin(t+1.8+uv.x*2.5));
  float w3=sin(uv.x*4.8+t*1.5+2.4)*.4+sin(uv.x*9.+t*2.2+.3)*.3;
  float y3=.15+w3*.07+n1*.04;
  float d3=smoothstep(.12,0.,abs(uv.y-y3));
  col+=vec3(.028,.44,.22)*d3*(.4+.32*sin(t*1.6+3.2+uv.x*5.5));
  col+=vec3(.28,.18,.04)*smoothstep(.08,0.,abs(uv.y-y3+.04))*(sin(t*5.+uv.x*14.)*.5+.5)*.2;
  vec2 vp=uv-.5;col*=clamp(1.-dot(vp,vp)*2.2,0.,1.);
  gl_FragColor=vec4(clamp(col,0.,1.),1.);
}`;
    const compile=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);return s;};
    const prog=gl.createProgram();
    gl.attachShader(prog,compile(gl.VERTEX_SHADER,vs));
    gl.attachShader(prog,compile(gl.FRAGMENT_SHADER,fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const buf=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,buf);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    const ap=gl.getAttribLocation(prog,'p');
    gl.enableVertexAttribArray(ap);
    gl.vertexAttribPointer(ap,2,gl.FLOAT,false,0,0);
    const ut=gl.getUniformLocation(prog,'u_t');
    const ur=gl.getUniformLocation(prog,'u_r');
    let raf;
    const loop=(ts)=>{
      const w=card.offsetWidth,h=card.offsetHeight;
      if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);}
      gl.uniform1f(ut,ts);gl.uniform2f(ur,w,h);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
      raf=requestAnimationFrame(loop);
    };
    raf=requestAnimationFrame(loop);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',sync);};
  },[]);

  const handlePillClick=(i)=>setActiveTag(activeTag===i?null:i);
  const handlePillEnter=(i)=>{if(!isTouch)setActiveTag(i);};
  const handlePillLeave=()=>{if(!isTouch)setActiveTag(null);};

  const S={
    wrap:{width:'100%',display:'flex',justifyContent:'center',padding:'0 0 20px 0',fontFamily:"'Barlow Condensed', sans-serif",WebkitFontSmoothing:'antialiased'},
    card:{position:'relative',width:'100%',maxWidth:'100%',overflow:'hidden',borderRadius:2},
    aurora:{position:'absolute',inset:0,width:'100%',height:'100%',zIndex:0,pointerEvents:'none'},
    inner:{position:'relative',zIndex:2,background:'rgba(7,17,43,0.70)',border:'1px solid rgba(200,164,74,0.2)',backdropFilter:'blur(20px)',WebkitBackdropFilter:'blur(20px)',padding:'52px 48px 44px',display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center'},
    topLine:{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(to right, transparent, #C8A44A, transparent)'},
    corner:(pos)=>({position:'absolute',width:12,height:12,zIndex:3,...(pos==='tl'?{top:14,left:14,borderTop:'1px solid rgba(200,164,74,.35)',borderLeft:'1px solid rgba(200,164,74,.35)'}:{}),...(pos==='tr'?{top:14,right:14,borderTop:'1px solid rgba(200,164,74,.35)',borderRight:'1px solid rgba(200,164,74,.35)'}:{}),...(pos==='bl'?{bottom:14,left:14,borderBottom:'1px solid rgba(200,164,74,.35)',borderLeft:'1px solid rgba(200,164,74,.35)'}:{}),...(pos==='br'?{bottom:14,right:14,borderBottom:'1px solid rgba(200,164,74,.35)',borderRight:'1px solid rgba(200,164,74,.35)'}:{})}),
    badge:{display:'inline-flex',alignItems:'center',gap:8,fontFamily:"'IBM Plex Mono', monospace",fontSize:8,letterSpacing:'0.32em',textTransform:'uppercase',color:'#C8A44A',fontWeight:400,border:'1px solid rgba(200,164,74,0.2)',padding:'7px 16px',marginBottom:28},
    dot:{width:6,height:6,borderRadius:'50%',background:'#16A865',flexShrink:0},
    title:{fontFamily:"'Barlow Condensed', sans-serif",fontWeight:800,fontSize:52,letterSpacing:'0.04em',textTransform:'uppercase',color:'#E8ECF4',lineHeight:0.95,margin:'0 0 18px 0'},
    sub:{fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:'0.14em',color:'#8C96B0',fontWeight:300,lineHeight:1.9,marginBottom:32,maxWidth:420,textTransform:'uppercase'},
    divider:{width:'100%',height:1,background:'linear-gradient(to right, transparent, rgba(200,164,74,0.15), transparent)',marginBottom:28},
    pills:{display:'flex',gap:10,flexWrap:'wrap',justifyContent:'center',marginBottom:32,position:'relative'},
    pillWrap:{position:'relative'},
    pill:(active,em)=>({fontFamily:"'IBM Plex Mono', monospace",fontSize:8,letterSpacing:'0.22em',textTransform:'uppercase',color:active?(em?'#16A865':'#C8A44A'):(em?'#8C96B0':'#E8ECF4'),fontWeight:300,padding:'9px 18px',border:`1px solid ${active?(em?'rgba(22,168,101,0.55)':'rgba(200,164,74,0.55)'):(em?'rgba(22,168,101,0.22)':'rgba(200,164,74,0.22)')}`,background:active?(em?'rgba(22,168,101,0.08)':'rgba(200,164,74,0.1)'):(em?'rgba(22,168,101,0.03)':'rgba(200,164,74,0.05)'),cursor:'pointer',transition:'all 0.25s',userSelect:'none',WebkitTapHighlightColor:'transparent'}),
    popup:(visible,em)=>({position:'absolute',bottom:'calc(100% + 12px)',left:'50%',transform:`translateX(-50%) translateY(${visible?0:6}px)`,width:290,background:'rgba(4,8,15,0.97)',border:`1px solid ${em?'rgba(22,168,101,0.3)':'rgba(200,164,74,0.3)'}`,padding:'18px 20px',zIndex:200,pointerEvents:visible?'auto':'none',opacity:visible?1:0,transition:'opacity 0.25s, transform 0.25s',textAlign:'left'}),
    popLine:(em)=>({height:1,background:`linear-gradient(to right, transparent, ${em?'#16A865':'#C8A44A'}, transparent)`,marginBottom:10}),
    popLabel:(em)=>({fontFamily:"'IBM Plex Mono', monospace",fontSize:7,letterSpacing:'0.28em',textTransform:'uppercase',color:em?'#16A865':'#C8A44A',fontWeight:400,marginBottom:10}),
    popText:{fontFamily:"'IBM Plex Mono', monospace",fontSize:8.5,letterSpacing:'0.1em',color:'#8C96B0',fontWeight:300,lineHeight:1.85},
    foot:{display:'flex',flexDirection:'column',alignItems:'center',gap:6},
    note:{fontFamily:"'IBM Plex Mono', monospace",fontSize:7.5,letterSpacing:'0.22em',color:'#5C6680',textTransform:'uppercase',fontWeight:300},
    domain:{fontFamily:"'IBM Plex Mono', monospace",fontSize:7.5,letterSpacing:'0.22em',color:'rgba(200,164,74,0.38)',textTransform:'uppercase',fontWeight:300},
  };

  return(
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;700;800&family=IBM+Plex+Mono:wght@300;400&display=swap');
        @keyframes ll-pulse{0%,100%{opacity:.4;transform:scale(.8)}50%{opacity:1;transform:scale(1.2)}}
        @keyframes ll-scan{0%{top:-2px;opacity:0}5%{opacity:1}95%{opacity:1}100%{top:101%;opacity:0}}
        .ll-dot-anim{animation:ll-pulse 2s ease-in-out infinite}
        .ll-scan-anim{position:absolute;left:0;right:0;height:1px;background:linear-gradient(to right,transparent,rgba(200,164,74,.18),transparent);animation:ll-scan 8s ease-in-out infinite;z-index:3;pointer-events:none}
        .ll-popup-arrow{position:absolute;bottom:-6px;left:50%;transform:translateX(-50%) rotate(45deg);width:10px;height:10px;background:rgba(4,8,15,.97)}
        .ll-popup-arrow.gold{border-right:1px solid rgba(200,164,74,.3);border-bottom:1px solid rgba(200,164,74,.3)}
        .ll-popup-arrow.em{border-right:1px solid rgba(22,168,101,.3);border-bottom:1px solid rgba(22,168,101,.3)}
      `}</style>
      <div style={S.wrap}>
        <div ref={cardRef} style={S.card}>
          <canvas ref={canvasRef} style={S.aurora}/>
          <div style={S.inner}>
            <div style={S.topLine}/>
            <div className="ll-scan-anim"/>
            {['tl','tr','bl','br'].map(p=><div key={p} style={S.corner(p)}/>)}
            <div style={S.badge}>
              <span className="ll-dot-anim" style={S.dot}/>
              {lang==='es'?'En Desarrollo':'In Development'}
            </div>
            <h2 style={S.title}>LSPALearn</h2>
            <p style={S.sub}>
              <strong style={{color:'#E8ECF4',fontWeight:400}}>Powered by Madison Thomas Technologies</strong>
              <br/>
              {lang==='es'
                ?'Aprendizaje adaptativo, codificación e IA para la próxima generación de Trenton.'
                :'Adaptive learning, coding, and AI literacy for Trenton\'s next generation.'}
            </p>
            <div style={S.divider}/>
            <div style={S.pills}>
              {tags.map((tag,i)=>(
                <div key={i} style={S.pillWrap}>
                  <div style={S.popup(activeTag===i,tag.em)}>
                    <div style={S.popLine(tag.em)}/>
                    <div style={S.popLabel(tag.em)}>{lang==='es'?tag.labelEs:tag.label}</div>
                    <p style={S.popText}>{tag.tip}</p>
                    <div className={`ll-popup-arrow ${tag.em?'em':'gold'}`}/>
                  </div>
                  <span
                    style={S.pill(activeTag===i,tag.em)}
                    onClick={()=>handlePillClick(i)}
                    onMouseEnter={()=>handlePillEnter(i)}
                    onMouseLeave={handlePillLeave}
                  >
                    {lang==='es'?tag.labelEs:tag.label}
                  </span>
                </div>
              ))}
            </div>
            <div style={S.foot}>
              <div style={S.note}>
                {isTouch
                  ?(lang==='es'?'Toca para saber más':'Tap a pill to learn more')
                  :(lang==='es'?'Pasa el cursor para saber más':'Hover a pill to learn more')}
              </div>
              <div style={S.domain}>madisonthomastechnologies.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
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
    {name:'PBS Kids Games',desc:'Educational games for preschool learners',link:'https://pbskids.org',type:'e
