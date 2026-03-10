'use client';
import{useState}from'react';
import{useLanguage}from'../i18n/LanguageProvider';
import Link from'next/link';

const staffData=[
{catKey:'directors',color:'#1B2D5B',icon:String.fromCodePoint(0x1F3DB),people:[
{name:'Jessica Toro',campus:'540 N. Olden Ave'},
{name:'Joleen Rhoden',campus:'1040 Spruce St'},
]},
{catKey:'teachingStaff',color:'#4CAF50',icon:String.fromCodePoint(0x1F4DA),people:[
{name:'Mary Allen',campus:'540 N. Olden Ave'},
{name:'Julie Olsen',campus:'540 N. Olden Ave'},
{name:'Kelly McCormick',campus:'540 N. Olden Ave'},
{name:'Deborah Long',campus:'540 N. Olden Ave'},
{name:'Ayesha Rahman',campus:'540 N. Olden Ave'},
{name:'Diane Howard',campus:'540 N. Olden Ave'},
{name:'Lisa Verdi',campus:'540 N. Olden Ave'},
{name:'Julie Moyer',campus:'1040 Spruce St'},
{name:'Pamela Rodriguez',campus:'1040 Spruce St'},
{name:'__OPEN__',campus:'1040 Spruce St'},
]},
{catKey:'substituteTeachers',color:'#8BC34A',icon:String.fromCodePoint(0x1F4D6),people:[
{name:'Advika Rao',campus:'1040 Spruce St'},
]},
{catKey:'teacherAssistants',color:'#4BA3E3',icon:String.fromCodePoint(0x1F91D),people:[
{name:'Delia Lima',campus:'540 N. Olden Ave'},
{name:'Jameliz Brisita',campus:'540 N. Olden Ave'},
{name:'Deborah Tyler',campus:'540 N. Olden Ave'},
{name:'Joelliz Brisita',campus:'540 N. Olden Ave'},
{name:'Margarita Gilleo',campus:'540 N. Olden Ave'},
{name:'Celeste Rivera',campus:'540 N. Olden Ave'},
{name:'Dayana Salinas',campus:'1040 Spruce St'},
{name:'Juanny Peralta',campus:'1040 Spruce St'},
{name:'Kavita Bharti',campus:'1040 Spruce St'},
{name:'Celeste Sarmiento',campus:'1040 Spruce St'},
]},
{catKey:'familyWorkers',color:'#9C27B0',icon:String.fromCodePoint(0x1F46A),people:[
{name:'Samira Jurado',campus:'540 N. Olden Ave'},
{name:'Lucrecia Morales',campus:'540 N. Olden Ave'},
{name:'Alissa Garzon-Torres',campus:'1040 Spruce St'},
]},
];

function Avatar({color,name}){
const initials=name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
return(<div style={{width:72,height:72,borderRadius:'50%',background:color+'18',display:'flex',alignItems:'center',justifyContent:'center',border:'2px solid '+color+'30'}}><span style={{fontFamily:'Fredoka',fontSize:'1.5rem',fontWeight:'bold',color:color,letterSpacing:1}}>{initials}</span></div>);
}

function OpenPositionCard({color,lang}){
return(
<div
  className="relative group"
  style={{cursor:"default"}}
>
  {/* ── Hover Popup ────────────────────────────── */}
  <div
    className="absolute left-1/2 bottom-full mb-0 z-20
                opacity-0 translate-y-2
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-250 pointer-events-none group-hover:pointer-events-auto"
    style={{transform:"translateX(-50%)",minWidth:180}}
  >
    <div
      className="rounded-2xl shadow-2xl p-4 text-center"
      style={{background:"#ffffff",border:"2px solid "+color+"40"}}
    >
      <div
        className="text-sm font-bold mb-1"
        style={{color:"#1a2e4a",fontFamily:"Fredoka, sans-serif",fontSize:"1rem"}}
      >
        We are Hiring!
      </div>
      <div className="text-xs mb-3" style={{color:"#666"}}>
        Join our team of early childhood educators and make a difference.
      </div>
      <a
        href="/careers"
        className="inline-block text-xs font-bold py-1.5 px-4 rounded-full"
        style={{
          background:"linear-gradient(135deg,"+color+","+color+"cc)",
          color:"#ffffff",
          textDecoration:"none",
          letterSpacing:"0.04em"
        }}
      >
        View Openings &rarr;
      </a>
    </div>
    {/* Invisible bridge — keeps mouse in hover zone between popup and card */}
    <div
      className="absolute left-0 right-0"
      style={{bottom:-16,height:16,background:"transparent"}}
    />
    {/* Diamond arrow pointing down toward the card */}
    <div
      className="absolute left-1/2"
      style={{
        bottom:-6,
        transform:"translateX(-50%) rotate(45deg)",
        width:12,
        height:12,
        background:"#ffffff",
        borderRight:"2px solid "+color+"40",
        borderBottom:"2px solid "+color+"40"
      }}
    />
  </div>

  {/* ── The + Card ─────────────────────────────── */}
  <div
    className="text-center p-4 rounded-2xl border-2 border-dashed transition-all"
    style={{
      borderColor:color+"50",
      background:"linear-gradient(135deg,"+color+"08,"+color+"15)"
    }}
  >
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-2 transition-all group-hover:scale-110"
      style={{background:color+"20",color:color}}
    >
      +
    </div>
    <div className="text-xs font-semibold" style={{color:color+"cc"}}>
      Join Our Team
    </div>
  </div>
</div>
);
}

export default function OurTeam(){
const{lang}=useLanguage();
const[filter,setFilter]=useState('All');

const catNames={
directors:lang==='es'?'Directores':'Directors',
teachingStaff:lang==='es'?'Maestros':'Teachers',
substituteTeachers:lang==='es'?'Maestros Sustitutos':'Substitute Teachers',
teacherAssistants:lang==='es'?'Asistentes de Maestro':'Teacher Assistants',
familyWorkers:lang==='es'?'Trabajadores Familiares':'Family Workers',
};
const campusDisplay=(c)=>c==='540 N. Olden Ave'?'Olden Ave':'Spruce St';
const filterLabels={'All':lang==='es'?'Todos':'All','540 N. Olden Ave': lang === 'es' ? '540 N. Olden Ave' : '540 N. Olden Ave','1040 Spruce St': lang === 'es' ? '1040 Spruce St' : '1040 Spruce St'};
const roomLabel=lang==='es'?'Sal\u00f3n ':'Classroom ';
const staffLabel=lang==='es'?' personal':' staff';
const totalStaff=staffData.reduce((s,c)=>s+c.people.filter(p=>p.name!=='__OPEN__').length,0);

return(
<div style={{minHeight:'100vh'}}>

<section className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#2A3A5E 50%,#1B4A6B 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 30% 50%,rgba(247,201,72,0.08),transparent 60%),radial-gradient(ellipse at 70% 40%,rgba(75,163,227,0.06),transparent 50%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(247,201,72,0.1)',border:'1px solid rgba(247,201,72,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#F7C948'}}>{lang==='es'?'Nuestra Gente':'Our People'}</span></div>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>{lang==='es'?'Conoce a Nuestro ':'Meet Our '}<span style={{color:'#F5A623'}}>{lang==='es'?'Equipo':'Team'}</span></h1>
<p className='text-lg mb-6' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:550,margin:'0 auto'}}>{lang==='es'?'Educadores y personal dedicados en dos campus, comprometidos a darle a cada ni\u00f1o el mejor comienzo en la vida.':'Dedicated educators and staff across two campuses, committed to giving every child the best start in life.'}</p>
<div className='flex gap-6 justify-center flex-wrap'>
<div className='text-center'><div className='text-3xl font-bold' style={{fontFamily:'Fredoka',color:'#F7C948'}}>10</div><div className='text-xs uppercase tracking-wider' style={{color:'rgba(255,255,255,0.5)'}}>{lang==='es'?'Salones':'Classrooms'}</div></div>
<div style={{width:1,background:'rgba(255,255,255,0.15)',alignSelf:'stretch'}}/>
<div className='text-center'><div className='text-3xl font-bold' style={{fontFamily:'Fredoka',color:'#F7C948'}}>2</div><div className='text-xs uppercase tracking-wider' style={{color:'rgba(255,255,255,0.5)'}}>Campus</div></div>
<div style={{width:1,background:'rgba(255,255,255,0.15)',alignSelf:'stretch'}}/>
<div className='text-center'><div className='text-3xl font-bold' style={{fontFamily:'Fredoka',color:'#F7C948'}}>{totalStaff}+</div><div className='text-xs uppercase tracking-wider' style={{color:'rgba(255,255,255,0.5)'}}>{lang==='es'?'Miembros del Equipo':'Team Members'}</div></div>
</div>
</div>
</section>

<section className='py-6 sticky top-[72px] z-20' style={{background:'#FFFDF7',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>
<div className='max-w-5xl mx-auto px-4 md:px-8'>
<div className='flex gap-2 justify-center flex-wrap'>
{['All','540 N. Olden Ave','1040 Spruce St'].map(c=>(
<button key={c} onClick={()=>setFilter(c)} className='px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer' style={{fontFamily:'DM Sans',background:filter===c?'#1B2D5B':'#F3F4F6',color:filter===c?'#FFFFFF':'#6B7280',border:'none'}}>{filterLabels[c]}</button>
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
person.name==='__OPEN__'
? <OpenPositionCard key={pi} color={cat.color} lang={lang}/>
: <div key={pi} className='text-center p-4 rounded-2xl border hover:shadow-lg transition-all group' style={{borderColor:'#e5e7eb',background:'#FFFFFF'}}>
<div className='flex justify-center mb-3 group-hover:-translate-y-1 transition-transform'><Avatar color={cat.color} name={person.name}/></div>
<div className='font-bold text-sm mb-0.5' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{person.name}</div>
{person.room&&<div className='text-xs mb-1' style={{fontFamily:'DM Sans',color:'#9CA3AF'}}>{roomLabel}{person.room}</div>}
<div className='inline-block px-2 py-0.5 rounded-full text-xs' style={{fontFamily:'DM Sans',background:person.campus==='540 N. Olden Ave'?'#EBF5FB':'#E8F5E9',color:person.campus==='540 N. Olden Ave'?'#1B2D5B':'#2E7D32'}}>{campusDisplay(person.campus)}</div>
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
