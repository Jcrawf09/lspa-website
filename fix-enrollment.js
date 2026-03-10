const fs = require('fs');
const enrollment = `'use client';
import{useEffect,useRef,useState}from'react';
import Link from'next/link';

const steps=[
{num:'1',title:'Contact Us',desc:'Call (609) 396-7171 or email lauraspelmanacademy@verizon.net to express interest and learn about available spots.'},
{num:'2',title:'Tour a Campus',desc:'Visit our Trenton or Lawrence campus to meet our teachers and see our classrooms in action.'},
{num:'3',title:'Complete Your Forms',desc:'Download and complete the enrollment application and registration packet from our Resources page.'},
{num:'4',title:'Submit Documents',desc:"Bring your completed forms along with your child's birth certificate, immunization records, and proof of Trenton residency."},
{num:'5',title:'Welcome to LSPA!',desc:'Once approved, your child joins the LSPA family. We will schedule an orientation to get started.'}
];

const requirements=[
'Child must be age 3, 4, or 5 by September 30th of the enrollment year',
'Proof of Trenton residency (utility bill, lease, or mortgage statement)',
"Child's birth certificate",
'Up-to-date immunization records',
'Completed enrollment application and registration packet',
'Emergency contact information',
"Physical exam form from your child's doctor"
];

const faqs=[
{q:'Is there a cost for the program?',a:'No. LSPA is completely free for all Trenton families. There is no tuition, no subsidy required, and no hidden fees. Our program is fully funded through the state of New Jersey.'},
{q:'What are the school hours?',a:'Our program runs full day, Monday through Friday, following the Trenton Public Schools calendar.'},
{q:'Do you provide meals?',a:'Yes. Breakfast, lunch, and snacks are provided daily at no cost to families through the CACFP program.'},
{q:'What curriculum do you use?',a:'We use the Creative Curriculum framework, aligned with the New Jersey Preschool Teaching and Learning Standards, with a focus on kindergarten readiness.'},
{q:'Can I enroll mid-year?',a:'Yes, we accept rolling enrollment when spots are available. Contact us to check current availability at either campus.'},
{q:'Do all teachers have certifications?',a:'Yes. All lead teachers hold New Jersey state certifications in early childhood education and participate in ongoing professional development.'}
];

export default function Enrollment(){
const heroRef=useRef(null);
const[heroVis,setHeroVis]=useState(false);
const stepsRef=useRef(null);
const[stepsVis,setStepsVis]=useState(false);
const reqRef=useRef(null);
const[reqVis,setReqVis]=useState(false);
const faqRef=useRef(null);
const[faqVis,setFaqVis]=useState(false);

useEffect(()=>{
const obs=(ref,set)=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)set(true);},{threshold:0.1});if(ref.current)o.observe(ref.current);return o;};
const o1=obs(heroRef,setHeroVis);const o2=obs(stepsRef,setStepsVis);const o3=obs(reqRef,setReqVis);const o4=obs(faqRef,setFaqVis);
return()=>{o1.disconnect();o2.disconnect();o3.disconnect();o4.disconnect();};
},[]);

const fade=(vis,d=0)=>({opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(28px)',transition:'all 0.7s cubic-bezier(0.16,1,0.3,1) '+d+'s'});

return(
<div style={{minHeight:'100vh'}}>

<section ref={heroRef} className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#2A3A5E 50%,#3D2A5E 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 30% 50%,rgba(247,201,72,0.08),transparent 60%),radial-gradient(ellipse at 70% 40%,rgba(75,163,227,0.06),transparent 50%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div style={fade(heroVis,0)}>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(247,201,72,0.1)',border:'1px solid rgba(247,201,72,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#F7C948'}}>Start Here</span></div>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>Enroll Your <span style={{color:'#F5A623'}}>Child</span></h1>
<p className='text-lg mb-2' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:600,margin:'0 auto'}}>Free, high-quality preschool education for Trenton families. No tuition. No subsidy. Just opportunity.</p>
<p className='text-sm italic mb-8' style={{color:'rgba(255,255,255,0.45)'}}>Preescolar gratis para familias de Trenton.</p>
<a href='tel:6093967171' className='inline-block px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>Call to Enroll {String.fromCharCode(8211)} (609) 396-7171</a>
</div>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#FFFFFF'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8'>
<div className='text-center mb-12' style={fade(stepsVis,0)}>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5' style={{background:'rgba(76,175,80,0.08)',border:'1px solid rgba(76,175,80,0.15)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#2E7D32'}}>5 Simple Steps</span></div>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>How to <span style={{color:'#4CAF50'}}>Enroll</span></h2>
</div>
<div ref={stepsRef} className='space-y-4'>
{steps.map((step,i)=>(
<div key={i} className='flex gap-4 items-start p-5 rounded-2xl border transition-all hover:shadow-md' style={{borderColor:'#e5e7eb',background:'#fff',...fade(stepsVis,0.1+i*0.08)}}>
<div className='flex items-center justify-center font-bold text-lg flex-shrink-0' style={{minWidth:48,height:48,borderRadius:'50%',fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>{step.num}</div>
<div><div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1.1rem'}}>{step.title}</div><div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.95rem'}}>{step.desc}</div></div>
</div>
))}
</div>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#F8FAFB'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8'>
<div className='text-center mb-10' style={fade(reqVis,0)}>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>What You <span style={{color:'#4BA3E3'}}>Need</span></h2>
</div>
<div ref={reqRef} className='rounded-3xl p-8 border' style={{background:'#FFFFFF',borderColor:'#e5e7eb'}}>
{requirements.map((req,i)=>(
<div key={i} className='flex items-center gap-3 py-3' style={{borderBottom:i<requirements.length-1?'1px solid #f3f4f6':'none',...fade(reqVis,0.05+i*0.05)}}>
<div className='w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold' style={{background:'#E8F5E9',color:'#2E7D32'}}>{String.fromCharCode(10003)}</div>
<div style={{fontFamily:'DM Sans',color:'#374151',fontSize:'0.95rem'}}>{req}</div>
</div>
))}
</div>
<div className='text-center mt-6'><Link href='/resources' className='text-sm font-semibold hover:underline' style={{fontFamily:'DM Sans',color:'#4BA3E3'}}>Download enrollment forms on our Resources page {String.fromCharCode(8594)}</Link></div>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#FFFFFF'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8'>
<div className='text-center mb-12' style={fade(faqVis,0)}>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>Common <span style={{color:'#F5A623'}}>Questions</span></h2>
</div>
<div ref={faqRef} className='space-y-4'>
{faqs.map((faq,i)=>(
<div key={i} className='p-5 rounded-2xl border' style={{borderColor:'#e5e7eb',background:'#FAFAFA',...fade(faqVis,0.05+i*0.06)}}>
<div className='font-bold mb-2' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{faq.q}</div>
<div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.95rem',lineHeight:1.6}}>{faq.a}</div>
</div>
))}
</div>
</div>
</section>

<section className='py-16' style={{background:'#1B2D5B'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center'>
<h3 className='font-bold text-white mb-3' style={{fontFamily:'Fredoka',fontSize:'1.5rem'}}>Ready to Get <span style={{color:'#F7C948'}}>Started?</span></h3>
<p className='mb-6' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)'}}>Spots fill quickly. Contact us today to secure your child&apos;s place.</p>
<div className='flex gap-4 justify-center flex-wrap'>
<a href='tel:6093967171' className='px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>Call (609) 396-7171</a>
<a href='mailto:lauraspelmanacademy@verizon.net' className='px-8 py-3 rounded-full font-bold border-2 hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',borderColor:'rgba(255,255,255,0.3)',color:'#FFFFFF'}}>Email Us</a>
</div>
</div>
</section>

</div>
);}
`;
fs.writeFileSync('app/enrollment/page.jsx', enrollment);
console.log('enrollment/page.jsx rewritten cleanly');
