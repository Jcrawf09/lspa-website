const fs = require('fs');
const base = process.argv[2] || '.';

// ─── OUR TEAM — FULL CLEAN REWRITE ───────────────────────────────────────
const team = `'use client';
import{useState}from'react';
import{useLanguage}from'../i18n/LanguageProvider';

const staffData=[
{catKey:'directors',color:'#1B2D5B',icon:String.fromCodePoint(0x1F3DB),people:[
{roleKey:'director',campus:'Trenton Campus',room:''},
{roleKey:'director',campus:'Lawrence Campus',room:''},
]},
{catKey:'teachingStaff',color:'#4CAF50',icon:String.fromCodePoint(0x1F4DA),people:[
{roleKey:'leadTeacher',campus:'Trenton Campus',room:'1'},
{roleKey:'leadTeacher',campus:'Trenton Campus',room:'2'},
{roleKey:'leadTeacher',campus:'Trenton Campus',room:'3'},
{roleKey:'leadTeacher',campus:'Trenton Campus',room:'4'},
{roleKey:'leadTeacher',campus:'Trenton Campus',room:'5'},
{roleKey:'leadTeacher',campus:'Trenton Campus',room:'6'},
{roleKey:'leadTeacher',campus:'Trenton Campus',room:'7'},
{roleKey:'leadTeacher',campus:'Lawrence Campus',room:'1'},
{roleKey:'leadTeacher',campus:'Lawrence Campus',room:'2'},
{roleKey:'leadTeacher',campus:'Lawrence Campus',room:'3'},
]},
{catKey:'teacherAssistants',color:'#4BA3E3',icon:String.fromCodePoint(0x1F91D),people:[
{roleKey:'teacherAssistant',campus:'Trenton Campus',room:'1'},
{roleKey:'teacherAssistant',campus:'Trenton Campus',room:'2'},
{roleKey:'teacherAssistant',campus:'Trenton Campus',room:'3'},
{roleKey:'teacherAssistant',campus:'Trenton Campus',room:'4'},
{roleKey:'teacherAssistant',campus:'Trenton Campus',room:'5'},
{roleKey:'teacherAssistant',campus:'Trenton Campus',room:'6'},
{roleKey:'teacherAssistant',campus:'Trenton Campus',room:'7'},
{roleKey:'teacherAssistant',campus:'Lawrence Campus',room:'1'},
{roleKey:'teacherAssistant',campus:'Lawrence Campus',room:'2'},
{roleKey:'teacherAssistant',campus:'Lawrence Campus',room:'3'},
]},
{catKey:'familyWorkers',color:'#9C27B0',icon:String.fromCodePoint(0x1F46A),people:[
{roleKey:'familyWorker',campus:'Trenton Campus',room:''},
{roleKey:'familyWorker',campus:'Trenton Campus',room:''},
{roleKey:'familyWorker',campus:'Lawrence Campus',room:''},
]},
{catKey:'officeStaff',color:'#FF9800',icon:String.fromCodePoint(0x1F4CB),people:[
{roleKey:'clerical',campus:'Trenton Campus',room:''},
{roleKey:'clerical',campus:'Trenton Campus',room:''},
]},
{catKey:'security',color:'#607D8B',icon:String.fromCodePoint(0x1F6E1),people:[
{roleKey:'securityGuard',campus:'Trenton Campus',room:''},
{roleKey:'securityGuard',campus:'Lawrence Campus',room:''},
]},
{catKey:'foodService',color:'#E91E63',icon:String.fromCodePoint(0x1F372),people:[
{roleKey:'food',campus:'Lawrence Campus',room:''},
]},
];

function Avatar({color}){
return(<svg width='72' height='72' viewBox='0 0 72 72' fill='none'><circle cx='36' cy='36' r='36' fill={color+'12'}/><circle cx='36' cy='27' r='10' fill={color+'30'}/><ellipse cx='36' cy='52' rx='16' ry='12' fill={color+'30'}/></svg>);
}

export default function OurTeam(){
const{lang}=useLanguage();
const[filter,setFilter]=useState('All');

const catNames={directors:lang==='es'?'Directores':'Directors',teachingStaff:lang==='es'?'Maestros':'Teaching Staff',teacherAssistants:lang==='es'?'Asistentes de Maestro':'Teacher Assistants',familyWorkers:lang==='es'?'Trabajadores Familiares':'Family Workers',officeStaff:lang==='es'?'Personal de Oficina':'Office Staff',security:lang==='es'?'Seguridad':'Security',foodService:lang==='es'?'Servicio de Alimentos':'Food Service'};
const roleNames={director:lang==='es'?'Director/a':'Director',leadTeacher:lang==='es'?'Maestro/a Principal':'Lead Teacher',teacherAssistant:lang==='es'?'Asistente de Maestro':'Teacher Assistant',familyWorker:lang==='es'?'Trabajador/a Familiar':'Family Worker',clerical:lang==='es'?'Oficinista':'Clerical',securityGuard:lang==='es'?'Guardia de Seguridad':'Security Guard',food:lang==='es'?'Servicio de Alimentos':'Food Service'};
const campusDisplay=(c)=>c==='Trenton Campus'?'Olden Ave':'Spruce St';
const campusLabel=(c)=>lang==='es'?(c==='Trenton Campus'?'Campus de Trenton':'Campus de Lawrence'):c;
const filterLabels={'All':lang==='es'?'Todos':'All','Trenton Campus':lang==='es'?'Campus de Trenton':'Trenton Campus','Lawrence Campus':lang==='es'?'Campus de Lawrence':'Lawrence Campus'};
const roomLabel=lang==='es'?'Salon ':'Classroom ';
const nameTBD=lang==='es'?'Nombre por Confirmar':'Name TBD';
const staffLabel=lang==='es'?' personal':' staff';
const totalStaff=staffData.reduce((s,c)=>s+c.people.length,0);

return(
<div style={{minHeight:'100vh'}}>

<section className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#2A3A5E 50%,#1B4A6B 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 30% 50%,rgba(247,201,72,0.08),transparent 60%),radial-gradient(ellipse at 70% 40%,rgba(75,163,227,0.06),transparent 50%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(247,201,72,0.1)',border:'1px solid rgba(247,201,72,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#F7C948'}}>{lang==='es'?'Nuestra Gente':'Our People'}</span></div>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>{lang==='es'?'Conoce a Nuestro ':'Meet Our '}<span style={{color:'#F5A623'}}>{lang==='es'?'Equipo':'Team'}</span></h1>
<p className='text-lg mb-6' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:550,margin:'0 auto'}}>{lang==='es'?'30 educadores y personal dedicados en dos campus, comprometidos a darle a cada nino el mejor comienzo en la vida.':'30 dedicated educators and staff across two campuses, committed to giving every child the best start in life.'}</p>
<div className='flex gap-6 justify-center flex-wrap'>
<div className='text-center'><div className='text-3xl font-bold' style={{fontFamily:'Fredoka',color:'#F7C948'}}>10</div><div className='text-xs uppercase tracking-wider' style={{color:'rgba(255,255,255,0.5)'}}>{lang==='es'?'Salones':'Classrooms'}</div></div>
<div style={{width:1,background:'rgba(255,255,255,0.15)',alignSelf:'stretch'}}/>
<div className='text-center'><div className='text-3xl font-bold' style={{fontFamily:'Fredoka',color:'#F7C948'}}>2</div><div className='text-xs uppercase tracking-wider' style={{color:'rgba(255,255,255,0.5)'}}>Campus</div></div>
<div style={{width:1,background:'rgba(255,255,255,0.15)',alignSelf:'stretch'}}/>
<div className='text-center'><div className='text-3xl font-bold' style={{fontFamily:'Fredoka',color:'#F7C948'}}>30</div><div className='text-xs uppercase tracking-wider' style={{color:'rgba(255,255,255,0.5)'}}>{lang==='es'?'Miembros del Equipo':'Team Members'}</div></div>
</div>
</div>
</section>

<section className='py-6 sticky top-[72px] z-20' style={{background:'#FFFDF7',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>
<div className='max-w-5xl mx-auto px-4 md:px-8'>
<div className='flex gap-2 justify-center flex-wrap'>
{['All','Trenton Campus','Lawrence Campus'].map(c=>(
<button key={c} onClick={()=>setFilter(c)} className='px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer' style={{fontFamily:'DM Sans',background:filter===c?'#1B2D5B':'#F3F4F6',color:filter===c?'#FFFFFF':'#6B7280',border:'none'}}>{filterLabels[c]} ({c==='All'?totalStaff:staffData.reduce((s,cat)=>s+cat.people.filter(p=>p.campus===c).length,0)})</button>
))}
</div>
</div>
</section>

{staffData.map((cat,ci)=>{
const filtered=filter==='All'?cat.people:cat.people.filter(p=>p.campus===filter);
if(filtered.length===0)return null;
return(
<section key={ci} className='py-10 md:py-14' style={{background:ci%2===0?'#FFFFFF':'#F8FAFB'}}>
<div className='max-w-5xl mx-auto px-4 md:px-8'>
<div className='flex items-center gap-3 mb-8'>
<span className='text-2xl'>{cat.icon}</span>
<div className='w-1.5 h-8 rounded-full' style={{background:cat.color}}/>
<h2 className='font-bold text-xl' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{catNames[cat.catKey]}</h2>
<div className='text-xs font-bold px-3 py-1 rounded-full' style={{fontFamily:'DM Sans',background:cat.color+'15',color:cat.color}}>{filtered.length}{staffLabel}</div>
</div>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
{filtered.map((person,pi)=>(
<div key={pi} className='text-center p-4 rounded-2xl border hover:shadow-lg transition-all group' style={{borderColor:'#e5e7eb',background:'#FFFFFF'}}>
<div className='flex justify-center mb-3 group-hover:-translate-y-1 transition-transform'><Avatar color={cat.color}/></div>
<div className='font-bold text-sm mb-0.5' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{nameTBD}</div>
<div className='text-xs font-semibold mb-1' style={{fontFamily:'DM Sans',color:cat.color}}>{roleNames[person.roleKey]}</div>
{person.room&&<div className='text-xs mb-1' style={{fontFamily:'DM Sans',color:'#9CA3AF'}}>{roomLabel}{person.room}</div>}
<div className='inline-block px-2 py-0.5 rounded-full text-xs' style={{fontFamily:'DM Sans',background:person.campus==='Trenton Campus'?'#EBF5FB':'#E8F5E9',color:person.campus==='Trenton Campus'?'#1B2D5B':'#2E7D32'}}>{campusDisplay(person.campus)}</div>
</div>
))}
</div>
</div>
</section>
);
})}

<section className='py-16' style={{background:'#1B2D5B'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center'>
<h3 className='font-bold text-white mb-3' style={{fontFamily:'Fredoka',fontSize:'1.5rem'}}>{lang==='es'?'Quieres Unirte a Nuestro ':'Want to Join Our '}<span style={{color:'#F7C948'}}>{lang==='es'?'Equipo?':'Team?'}</span></h3>
<p className='mb-6' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)'}}>{lang==='es'?'Siempre estamos buscando educadores apasionados para hacer la diferencia.':'We are always looking for passionate educators to make a difference.'}</p>
<a href='/careers' className='inline-block px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none'}}>{lang==='es'?'Ver Posiciones Abiertas':'View Open Positions'}</a>
</div>
</section>

</div>
);}
`;
fs.writeFileSync(base+'/app/our-team/page.jsx', team);

// ─── GALLERY — CLEAN REWRITE ─────────────────────────────────────────────
const gallery = `'use client';
import{useState,useEffect,useRef}from'react';
import{useLanguage}from'../i18n/LanguageProvider';
import Link from'next/link';

const photos=[
"/images/gallery/IMG_4244.PNG","/images/gallery/IMG_4245.PNG","/images/gallery/IMG_4246.PNG",
"/images/gallery/IMG_4247.PNG","/images/gallery/IMG_4248.PNG","/images/gallery/IMG_4249.PNG",
"/images/gallery/IMG_4250.PNG","/images/gallery/IMG_4251.PNG","/images/gallery/IMG_4252.PNG",
"/images/gallery/IMG_4253.PNG","/images/gallery/IMG_4254.PNG","/images/gallery/IMG_4255.PNG",
"/images/gallery/IMG_4256.PNG","/images/gallery/IMG_4257.PNG","/images/gallery/IMG_4258.PNG",
"/images/gallery/IMG_4259.PNG","/images/gallery/IMG_4260.PNG","/images/gallery/IMG_4261.PNG",
"/images/gallery/IMG_4262.PNG","/images/gallery/IMG_4263.PNG","/images/gallery/IMG_4264.PNG"
];

function FadeInCard({children,delay}){
const ref=useRef(null);const[visible,setVisible]=useState(false);
useEffect(()=>{const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVisible(true);obs.disconnect();}},{threshold:0.1});if(ref.current)obs.observe(ref.current);return()=>obs.disconnect();},[]);
return(<div ref={ref} style={{opacity:visible?1:0,transform:visible?'translateY(0) scale(1)':'translateY(30px) scale(0.97)',transition:'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',transitionDelay:delay+'ms'}}>{children}</div>);
}

export default function Gallery(){
const{lang}=useLanguage();
const[selected,setSelected]=useState(null);
const[idx,setIdx]=useState(0);

const badge=lang==='es'?'Entra a Nuestro Mundo':'Step Inside Our World';
const h1a=lang==='es'?'Pequenos Momentos,':'Little Moments,';
const h1b=lang==='es'?'Grandes Recuerdos':'Big Memories';
const desc=lang==='es'?'Cada sonrisa, cada descubrimiento, cada amistad \\u2014 capturados en Laura Spelman Preschool Academy.':'Every smile, every discovery, every friendship \\u2014 captured at Laura Spelman Preschool Academy.';
const visitH=lang==='es'?'Ven a Vernos en Persona':'Come See It In Person';
const visitD=lang==='es'?'Agenda un recorrido y conoce la diferencia LSPA para tu familia.':'Schedule a tour and experience the LSPA difference for your family.';
const enrollBtn=lang==='es'?'Inscribete Hoy':'Enroll Today';
const callBtnText=lang==='es'?'Llama (609) 396-7171':'Call (609) 396-7171';

const open=(i)=>{setIdx(i);setSelected(photos[i]);};
const close=()=>setSelected(null);
const prev=(e)=>{e.stopPropagation();const n=(idx-1+photos.length)%photos.length;setIdx(n);setSelected(photos[n]);};
const next=(e)=>{e.stopPropagation();const n=(idx+1)%photos.length;setIdx(n);setSelected(photos[n]);};

useEffect(()=>{
const handler=(e)=>{if(!selected)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft'){const n=(idx-1+photos.length)%photos.length;setIdx(n);setSelected(photos[n]);}if(e.key==='ArrowRight'){const n=(idx+1)%photos.length;setIdx(n);setSelected(photos[n]);}};
window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler);
},[selected,idx]);

return(
<div style={{minHeight:'100vh',background:'#FFFDF7'}}>
<style>{\`
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
.g-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;max-width:1200px;margin:0 auto;}
@media(max-width:900px){.g-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:500px){.g-grid{grid-template-columns:1fr;}}
.g-card{border-radius:14px;overflow:hidden;cursor:pointer;position:relative;aspect-ratio:1/1;box-shadow:0 2px 12px rgba(0,0,0,0.08);transition:transform 0.4s cubic-bezier(0.16,1,0.3,1),box-shadow 0.4s ease;}
.g-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,0.18);}
.g-card::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(15,29,61,0.35) 0%,transparent 40%);opacity:0;transition:opacity 0.3s;}
.g-card:hover::after{opacity:1;}
.g-card img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s cubic-bezier(0.16,1,0.3,1);}
.g-card:hover img{transform:scale(1.06);}
.lb-arrow{position:absolute;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.12);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.2);color:white;width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.5rem;transition:all 0.2s;}
.lb-arrow:hover{background:rgba(247,201,72,0.3);border-color:#F7C948;}
\`}</style>

<div style={{background:'linear-gradient(170deg,#F7C948 0%,#F5A623 20%,#E8F7EA 50%,#A8DCFA 100%)',padding:'8rem 1rem 4rem',textAlign:'center',position:'relative',overflow:'hidden'}}>
<div style={{position:'absolute',top:'-50px',right:'-50px',width:'200px',height:'200px',borderRadius:'50%',background:'rgba(255,255,255,0.15)',animation:'float 6s ease-in-out infinite'}}></div>
<div style={{position:'absolute',bottom:'-30px',left:'10%',width:'120px',height:'120px',borderRadius:'50%',background:'rgba(255,255,255,0.1)',animation:'float 8s ease-in-out infinite 1s'}}></div>
<div style={{position:'relative',zIndex:1}}>
<div style={{fontFamily:'Fredoka',fontSize:'1rem',color:'#0F1D3D',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'0.75rem',fontWeight:'600'}}>{badge}</div>
<h1 style={{fontFamily:'Fredoka',fontSize:'clamp(40px,6vw,72px)',color:'#0F1D3D',marginBottom:'0.5rem',lineHeight:1.1}}>
{h1a}<br/><span style={{background:'linear-gradient(to right,#1B2D5B,#4BA3E3)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{h1b}</span>
</h1>
<p style={{fontFamily:'DM Sans',fontSize:'1.15rem',color:'rgba(15,29,61,0.7)',maxWidth:'550px',margin:'0 auto'}}>{desc}</p>
</div>
</div>

<div style={{padding:'3rem 1rem 4rem'}}>
<div className='g-grid'>
{photos.map((src,i)=>(
<FadeInCard key={i} delay={(i%3)*80}>
<div className='g-card' onClick={()=>open(i)}>
<img src={src} alt={'LSPA moment '+(i+1)} loading='lazy'/>
</div>
</FadeInCard>
))}
</div>

<div style={{maxWidth:'800px',margin:'4rem auto 0',background:'linear-gradient(135deg,#0F1D3D,#1B2D5B)',borderRadius:'24px',padding:'3rem 2rem',textAlign:'center',position:'relative',overflow:'hidden'}}>
<div style={{position:'absolute',top:0,left:0,right:0,height:'4px',background:'linear-gradient(to right,#F7C948,#F5A623,#4BA3E3)'}}></div>
<h3 style={{fontFamily:'Fredoka',color:'#fff',fontSize:'1.5rem',marginBottom:'0.5rem'}}>{visitH}</h3>
<p style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)',marginBottom:'1.5rem'}}>{visitD}</p>
<div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
<a href='tel:6093967171' style={{padding:'0.85rem 2.5rem',background:'linear-gradient(to right,#F7C948,#F5A623)',borderRadius:'999px',color:'#0F1D3D',fontFamily:'Fredoka',fontWeight:'bold',textDecoration:'none',fontSize:'1.05rem',boxShadow:'0 4px 15px rgba(247,201,72,0.4)'}}>{callBtnText}</a>
<Link href='/enrollment' style={{padding:'0.85rem 2.5rem',border:'2px solid rgba(255,255,255,0.3)',borderRadius:'999px',color:'#fff',fontFamily:'Fredoka',fontWeight:'bold',textDecoration:'none',fontSize:'1.05rem'}}>{enrollBtn}</Link>
</div>
</div>
</div>

{selected&&(
<div onClick={close} style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.92)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:9999,padding:'2rem',backdropFilter:'blur(8px)'}}>
<img src={selected} alt='LSPA' style={{maxWidth:'85vw',maxHeight:'80vh',objectFit:'contain',borderRadius:'12px',boxShadow:'0 20px 60px rgba(0,0,0,0.5)'}}/>
<div className='lb-arrow' onClick={prev} style={{left:'1.5rem'}}>{String.fromCharCode(8249)}</div>
<div className='lb-arrow' onClick={next} style={{right:'1.5rem'}}>{String.fromCharCode(8250)}</div>
<div onClick={close} style={{position:'absolute',top:'1.5rem',right:'2rem',color:'rgba(255,255,255,0.6)',fontSize:'1.5rem',cursor:'pointer',width:'44px',height:'44px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%',background:'rgba(255,255,255,0.1)'}}>X</div>
<div style={{position:'absolute',bottom:'2rem',left:'50%',transform:'translateX(-50%)',color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans',fontSize:'0.9rem',background:'rgba(0,0,0,0.3)',padding:'0.4rem 1.2rem',borderRadius:'999px'}}>{idx+1} / {photos.length}</div>
</div>
)}
</div>
);}
`;
fs.writeFileSync(base+'/app/gallery/page.jsx', gallery);

console.log('FIXED:');
console.log('  our-team/page.jsx - Full rewrite, translations inside component');
console.log('  gallery/page.jsx - Full rewrite, translations inside component');
console.log('  Both pages should now work without errors');
