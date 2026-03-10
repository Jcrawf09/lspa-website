const fs = require('fs');

const staff = `'use client';
import{useState}from'react';

const staffData=[
{category:'Directors',color:'#1B2D5B',icon:String.fromCodePoint(0x1F3DB),people:[
{role:'Director',campus:'Trenton Campus'},
{role:'Director',campus:'Lawrence Campus'},
]},
{category:'Teaching Staff',color:'#4CAF50',icon:String.fromCodePoint(0x1F4DA),people:[
{role:'Lead Teacher',campus:'Trenton Campus',room:'Classroom 1'},
{role:'Lead Teacher',campus:'Trenton Campus',room:'Classroom 2'},
{role:'Lead Teacher',campus:'Trenton Campus',room:'Classroom 3'},
{role:'Lead Teacher',campus:'Trenton Campus',room:'Classroom 4'},
{role:'Lead Teacher',campus:'Trenton Campus',room:'Classroom 5'},
{role:'Lead Teacher',campus:'Trenton Campus',room:'Classroom 6'},
{role:'Lead Teacher',campus:'Trenton Campus',room:'Classroom 7'},
{role:'Lead Teacher',campus:'Lawrence Campus',room:'Classroom 1'},
{role:'Lead Teacher',campus:'Lawrence Campus',room:'Classroom 2'},
{role:'Lead Teacher',campus:'Lawrence Campus',room:'Classroom 3'},
]},
{category:'Teacher Assistants',color:'#4BA3E3',icon:String.fromCodePoint(0x1F91D),people:[
{role:'Teacher Assistant',campus:'Trenton Campus',room:'Classroom 1'},
{role:'Teacher Assistant',campus:'Trenton Campus',room:'Classroom 2'},
{role:'Teacher Assistant',campus:'Trenton Campus',room:'Classroom 3'},
{role:'Teacher Assistant',campus:'Trenton Campus',room:'Classroom 4'},
{role:'Teacher Assistant',campus:'Trenton Campus',room:'Classroom 5'},
{role:'Teacher Assistant',campus:'Trenton Campus',room:'Classroom 6'},
{role:'Teacher Assistant',campus:'Trenton Campus',room:'Classroom 7'},
{role:'Teacher Assistant',campus:'Lawrence Campus',room:'Classroom 1'},
{role:'Teacher Assistant',campus:'Lawrence Campus',room:'Classroom 2'},
{role:'Teacher Assistant',campus:'Lawrence Campus',room:'Classroom 3'},
]},
{category:'Family Workers',color:'#9C27B0',icon:String.fromCodePoint(0x1F46A),people:[
{role:'Family Worker',campus:'Trenton Campus'},
{role:'Family Worker',campus:'Trenton Campus'},
{role:'Family Worker',campus:'Lawrence Campus'},
]},
{category:'Office Staff',color:'#FF9800',icon:String.fromCodePoint(0x1F4CB),people:[
{role:'Clerical',campus:'Trenton Campus'},
{role:'Clerical',campus:'Trenton Campus'},
]},
{category:'Security',color:'#607D8B',icon:String.fromCodePoint(0x1F6E1),people:[
{role:'Security Guard',campus:'Trenton Campus'},
{role:'Security Guard',campus:'Lawrence Campus'},
]},
{category:'Food Service',color:'#E91E63',icon:String.fromCodePoint(0x1F372),people:[
{role:'Food Service',campus:'Trenton Campus'},
]},
];

const totalStaff=staffData.reduce((sum,cat)=>sum+cat.people.length,0);

function Avatar({color}){
return(
<svg width='72' height='72' viewBox='0 0 72 72' fill='none'>
<circle cx='36' cy='36' r='36' fill={color+'12'}/>
<circle cx='36' cy='27' r='10' fill={color+'30'}/>
<ellipse cx='36' cy='52' rx='16' ry='12' fill={color+'30'}/>
</svg>
);
}

export default function OurTeam(){
const[filter,setFilter]=useState('All');
const campuses=['All','Trenton Campus','Lawrence Campus'];

return(
<div style={{minHeight:'100vh'}}>

<section className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#2A3A5E 50%,#1B4A6B 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 30% 50%,rgba(247,201,72,0.08),transparent 60%),radial-gradient(ellipse at 70% 40%,rgba(75,163,227,0.06),transparent 50%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(247,201,72,0.1)',border:'1px solid rgba(247,201,72,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#F7C948'}}>Our People</span></div>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>Meet Our <span style={{color:'#F5A623'}}>Team</span></h1>
<p className='text-lg mb-6' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:550,margin:'0 auto'}}>30 dedicated educators and staff across two campuses, committed to giving every child the best start in life.</p>
<div className='flex gap-6 justify-center flex-wrap'>
<div className='text-center'><div className='text-3xl font-bold' style={{fontFamily:'Fredoka',color:'#F7C948'}}>10</div><div className='text-xs uppercase tracking-wider' style={{color:'rgba(255,255,255,0.5)'}}>Classrooms</div></div>
<div style={{width:1,background:'rgba(255,255,255,0.15)',alignSelf:'stretch'}}/>
<div className='text-center'><div className='text-3xl font-bold' style={{fontFamily:'Fredoka',color:'#F7C948'}}>2</div><div className='text-xs uppercase tracking-wider' style={{color:'rgba(255,255,255,0.5)'}}>Campuses</div></div>
<div style={{width:1,background:'rgba(255,255,255,0.15)',alignSelf:'stretch'}}/>
<div className='text-center'><div className='text-3xl font-bold' style={{fontFamily:'Fredoka',color:'#F7C948'}}>30</div><div className='text-xs uppercase tracking-wider' style={{color:'rgba(255,255,255,0.5)'}}>Team Members</div></div>
</div>
</div>
</section>

<section className='py-6 sticky top-[72px] z-20' style={{background:'#FFFDF7',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>
<div className='max-w-5xl mx-auto px-4 md:px-8'>
<div className='flex gap-2 justify-center flex-wrap'>
{campuses.map(c=>(
<button key={c} onClick={()=>setFilter(c)} className='px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer' style={{fontFamily:'DM Sans',background:filter===c?'#1B2D5B':'#F3F4F6',color:filter===c?'#FFFFFF':'#6B7280',border:'none'}}>{c}{c!=='All'?' ('+staffData.reduce((s,cat)=>s+cat.people.filter(p=>p.campus===c).length,0)+')':' ('+totalStaff+')'}</button>
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
<h2 className='font-bold text-xl' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{cat.category}</h2>
<div className='text-xs font-bold px-3 py-1 rounded-full' style={{fontFamily:'DM Sans',background:cat.color+'15',color:cat.color}}>{filtered.length}</div>
</div>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
{filtered.map((person,pi)=>(
<div key={pi} className='text-center p-4 rounded-2xl border hover:shadow-lg transition-all group' style={{borderColor:'#e5e7eb',background:'#FFFFFF'}}>
<div className='flex justify-center mb-3 group-hover:-translate-y-1 transition-transform'><Avatar color={cat.color}/></div>
<div className='font-bold text-sm mb-0.5' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>Name TBD</div>
<div className='text-xs font-semibold mb-1' style={{fontFamily:'DM Sans',color:cat.color}}>{person.role}</div>
{person.room&&<div className='text-xs mb-1' style={{fontFamily:'DM Sans',color:'#9CA3AF'}}>{person.room}</div>}
<div className='inline-block px-2 py-0.5 rounded-full text-xs' style={{fontFamily:'DM Sans',background:person.campus==='Trenton Campus'?'#EBF5FB':'#E8F5E9',color:person.campus==='Trenton Campus'?'#1B2D5B':'#2E7D32'}}>{person.campus==='Trenton Campus'?'Olden Ave':'Spruce St'}</div>
</div>
))}
</div>
</div>
</section>
);
})}

<section className='py-16' style={{background:'#1B2D5B'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center'>
<h3 className='font-bold text-white mb-3' style={{fontFamily:'Fredoka',fontSize:'1.5rem'}}>Want to Join Our <span style={{color:'#F7C948'}}>Team?</span></h3>
<p className='mb-6' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)'}}>We are always looking for passionate educators to make a difference.</p>
<a href='/careers' className='inline-block px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none'}}>View Open Positions</a>
</div>
</section>

</div>
);}
`;

fs.writeFileSync('app/our-team/page.jsx', staff);
console.log('our-team/page.jsx updated: 30 staff, correct breakdown, no credentials');
console.log('  Olden (Trenton): 7T + 7TA + 1Dir + 2Cler + 2FW + 1Sec + 1Food = 21');
console.log('  Spruce (Lawrence): 3T + 3TA + 1Dir + 1FW + 1Sec = 9');
