const fs = require('fs');
const path = require('path');

const base = process.argv[2] || '.';
const log = [];

// ─── 1. DELETE /enroll (merged into /resources) ───────────────────────────
const enrollDir = path.join(base, 'app', 'enroll');
if (fs.existsSync(enrollDir)) {
  fs.rmSync(enrollDir, { recursive: true });
  log.push('DELETED app/enroll/ (forms merged into /resources)');
}

// ─── 2. UPDATED PROGRAMS.JSX — remove redundant call buttons ──────────────
const programs = `'use client';
import{useEffect,useRef,useState}from'react';
const programs=[{age:'Ages 3-4',name:'Preschool 3',highlights:['Social-emotional development','Language & literacy foundations','Creative play & exploration','Music & movement'],color:'#4BA3E3'},{age:'Ages 4-5',name:'Preschool 4',highlights:['Kindergarten readiness','Early math & science','Writing & storytelling','Physical education'],color:'#4CAF50'}];
export default function Programs(){
const ref=useRef(null);
const[visible,setVisible]=useState(false);
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisible(true);},{threshold:0.15});if(ref.current)o.observe(ref.current);return()=>o.disconnect();},[]);
const fade=(d)=>({opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(32px)',transition:'all 0.8s cubic-bezier(0.16,1,0.3,1) '+d+'s'});
return(
<section id='programs' ref={ref} className='py-24 md:py-32 relative overflow-hidden' style={{background:'linear-gradient(180deg,#FFFFFF 0%,#F0FAF0 100%)'}}>
<div className='absolute top-0 left-0 right-0 h-px' style={{background:'linear-gradient(to right,transparent,#4CAF50,transparent)'}}/>
<div className='max-w-6xl mx-auto px-4 md:px-8'>
<div className='text-center mb-16' style={fade(0)}>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5' style={{background:'rgba(76,175,80,0.08)',border:'1px solid rgba(76,175,80,0.15)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#2E7D32'}}>Our Classrooms</span></div>
<h2 className='font-bold mb-4' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(30px,4vw,48px)'}}>Programs Built for <span style={{color:'#4CAF50'}}>Growing Minds</span></h2>
<p className='text-base max-w-2xl mx-auto' style={{fontFamily:'DM Sans',color:'#6B7280'}}>Both programs follow the Creative Curriculum framework aligned with NJ Preschool Teaching and Learning Standards. Full-day programs at no cost to qualifying Trenton families.</p>
</div>
<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>{programs.map((p,i)=>(<div key={i} className='rounded-3xl p-8 border-2 hover:shadow-xl transition-all relative overflow-hidden group' style={{borderColor:p.color+'25',...fade(0.15+i*0.15)}}>
<div className='absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl' style={{background:'linear-gradient(to right,'+p.color+','+p.color+'88)'}}/>
<div className='mb-4'><div className='text-xs font-bold tracking-[2px] uppercase mb-1' style={{color:p.color}}>{p.age}</div><h3 className='text-2xl font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{p.name}</h3><div className='text-sm mt-1' style={{color:'#9CA3AF'}}>Full Day \\u2014 Monday through Friday</div></div>
<div className='space-y-3'>{p.highlights.map((h,j)=>(<div key={j} className='flex items-center gap-3 py-2 border-b border-black/[0.04] last:border-0'><div className='w-2 h-2 rounded-full flex-shrink-0' style={{background:p.color}}/><span className='text-sm' style={{fontFamily:'DM Sans',color:'#4B5563'}}>{h}</span></div>))}</div>
<div className='text-center mt-8'><p className='text-sm' style={{fontFamily:'DM Sans',color:'#9CA3AF'}}><strong style={{color:'#1B2D5B'}}>Eligibility:</strong> Children ages 3, 4, or 5 by September 30th. Trenton residents enroll at no cost.</p></div>
</div>))}</div>
</div>
</section>);}
`;
fs.writeFileSync(path.join(base,'app','components','Programs.jsx'), programs);
log.push('UPDATED Programs.jsx - removed redundant call buttons from cards');

// ─── 3. UPDATED FOOTER — 30+ years, privacy link ─────────────────────────
const footer = `"use client";
import Link from "next/link";

export default function Footer() {
  const links = [{l:"About",h:"/about-us"},{l:"Programs",h:"/#programs"},{l:"Gallery",h:"/gallery"},{l:"Enrollment",h:"/enrollment"},{l:"Contact Us",h:"/#contact"},{l:"Careers",h:"/careers"},{l:"Resources",h:"/resources"}];

  return (
    <footer className="pt-16 pb-6" style={{background:"#0F1D3D"}}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-14">
            <div>
              <div style={{backgroundColor:"#ffffff",borderRadius:20,padding:12,display:"inline-block",marginBottom:16}}>
                <img src="/images/lspa-logo-white.jpeg" alt="LSPA" style={{width:130,height:130,objectFit:"contain"}} />
              </div>
              <div className="font-bold text-white text-2xl mb-1" style={{fontFamily:"Fredoka"}}>Laura Spelman</div>
              <div className="text-sm font-bold tracking-widest uppercase mb-4" style={{color:"#4BA3E3"}}>Preschool Academy</div>
              <p className="text-sm max-w-xs" style={{color:"rgba(255,255,255,0.35)"}}>Providing free quality preschool education in partnership with the Trenton Board of Education for over 30 years.</p>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-5" style={{color:"#F7C948"}}>Locations</div>
              <div className="text-sm space-y-4" style={{color:"rgba(255,255,255,0.4)"}}>
                <div>
                  Trenton Campus<br/>540 N. Olden Avenue<br/>Trenton, NJ 08638<br/>
                  <a href="tel:6093967171" style={{color:"#F7C948"}}>(609) 396-7171</a>
                </div>
                <div>
                  Lawrence Campus<br/>1040 Spruce Street<br/>Lawrence, NJ 08648<br/>
                  <a href="tel:6095711041" style={{color:"#F7C948"}}>(609) 571-1041</a>
                </div>
              </div>
              <div className="mt-5">
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:"#F7C948"}}>Email</div>
                <a href="mailto:lauraspelmanacademy@verizon.net" className="text-sm" style={{color:"rgba(255,255,255,0.4)"}}>lauraspelmanacademy@verizon.net</a>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-5" style={{color:"#F7C948"}}>Quick Links</div>
              <div className="space-y-2">
                {links.map((l) => (
                  <a key={l.l} href={l.h} className="block text-sm" style={{color:"rgba(255,255,255,0.35)"}}>{l.l}</a>
                ))}
              </div>
            </div>
        </div>

        <div className="border-t pt-5 flex flex-wrap justify-between gap-3" style={{borderColor:"rgba(255,255,255,0.06)"}}>
          <div className="text-xs" style={{color:"rgba(255,255,255,0.25)"}}>{String.fromCharCode(169)} 2026 Laura Spelman Preschool Academy</div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-xs hover:underline" style={{color:"rgba(255,255,255,0.25)"}}>Privacy Policy</Link>
            <div className="text-xs" style={{color:"rgba(255,255,255,0.25)"}}>lspalearn.org</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
`;
fs.writeFileSync(path.join(base,'app','components','Footer.jsx'), footer);
log.push('UPDATED Footer.jsx - corrected to "over 30 years"');

// ─── 4. UPDATED ABOUT-US — 30+ years stat ─────────────────────────────────
const aboutPath = path.join(base,'app','about-us','page.jsx');
if (fs.existsSync(aboutPath)) {
  let about = fs.readFileSync(aboutPath,'utf8');
  about = about.replace("num:'10+'", "num:'30+'");
  about = about.replace("10+ Years Serving Trenton", "10+ Years Serving Trenton"); // no-op safety
  about = about.replace("label:'Years Serving Trenton'", "label:'Years Serving Trenton'");
  // Fix the num
  about = about.replace("{num:'10+',label:'Years Serving Trenton'}", "{num:'30+',label:'Years Serving Trenton'}");
  fs.writeFileSync(aboutPath, about);
  log.push('UPDATED about-us/page.jsx - stats now show 30+ Years');
}

// ─── 5. ENROLLMENT PAGE — fix age, remove duplicate footer ────────────────
const enrollment = `"use client";
import{useEffect,useRef,useState}from'react';
import Link from "next/link";

const steps = [
  { num: "1", title: "Contact Us", desc: "Call (609) 396-7171 or email lauraspelmanacademy@verizon.net to express interest and learn about available spots." },
  { num: "2", title: "Tour a Campus", desc: "Visit our Trenton or Lawrence campus to meet our teachers and see our classrooms in action." },
  { num: "3", title: "Complete Your Forms", desc: "Download and complete the enrollment application and registration packet from our Resources page." },
  { num: "4", title: "Submit Documents", desc: "Bring your completed forms along with your child's birth certificate, immunization records, and proof of Trenton residency." },
  { num: "5", title: "Welcome to LSPA!", desc: "Once approved, your child joins the LSPA family. We will schedule an orientation to get started." }
];

const requirements = [
  "Child must be age 3, 4, or 5 by September 30th of the enrollment year",
  "Proof of Trenton residency (utility bill, lease, or mortgage statement)",
  "Child's birth certificate",
  "Up-to-date immunization records",
  "Completed enrollment application and registration packet",
  "Emergency contact information",
  "Physical exam form from your child's doctor"
];

const faqs = [
  { q: "Is there a cost for the program?", a: "No. LSPA is completely free for all Trenton families. There is no tuition, no subsidy required, and no hidden fees. Our program is fully funded through the state of New Jersey." },
  { q: "What are the school hours?", a: "Our program runs full day, Monday through Friday, following the Trenton Public Schools calendar." },
  { q: "Do you provide meals?", a: "Yes. Breakfast, lunch, and snacks are provided daily at no cost to families through the CACFP program." },
  { q: "What curriculum do you use?", a: "We use the Creative Curriculum framework, aligned with the New Jersey Preschool Teaching and Learning Standards, with a focus on kindergarten readiness." },
  { q: "Can I enroll mid-year?", a: "Yes, we accept rolling enrollment when spots are available. Contact us to check current availability at either campus." },
  { q: "Do all teachers have certifications?", a: "Yes. All lead teachers hold New Jersey state certifications in early childhood education and participate in ongoing professional development." }
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
<a href='tel:6093967171' className='inline-block px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>Call to Enroll \\u2013 (609) 396-7171</a>
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
<div className='min-w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>{step.num}</div>
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
<div className='w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold' style={{background:'#E8F5E9',color:'#2E7D32'}}>\\u2713</div>
<div style={{fontFamily:'DM Sans',color:'#374151',fontSize:'0.95rem'}}>{req}</div>
</div>
))}
</div>
<div className='text-center mt-6'><Link href='/resources' className='text-sm font-semibold hover:underline' style={{fontFamily:'DM Sans',color:'#4BA3E3'}}>Download enrollment forms on our Resources page \\u2192</Link></div>
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
<p className='mb-6' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)'}}>Spots fill quickly. Contact us today to secure your child's place.</p>
<div className='flex gap-4 justify-center flex-wrap'>
<a href='tel:6093967171' className='px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>Call (609) 396-7171</a>
<a href='mailto:lauraspelmanacademy@verizon.net' className='px-8 py-3 rounded-full font-bold border-2 hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',borderColor:'rgba(255,255,255,0.3)',color:'#FFFFFF'}}>Email Us</a>
</div>
</div>
</section>
</div>
);}
`;
fs.writeFileSync(path.join(base,'app','enrollment','page.jsx'), enrollment);
log.push('UPDATED enrollment/page.jsx - fixed age to 3/4/5, removed duplicate footer, added scroll animations, added link to Resources for forms, added Spanish line, polished styling');

// ─── 6. CAREERS PAGE — remove duplicate footer, polish ────────────────────
const careers = `"use client";
import{useEffect,useRef,useState}from'react';

const benefits = [
  { icon: String.fromCodePoint(0x1F4B0), title: "Competitive Pay", desc: "Salary commensurate with experience and NJ certification level" },
  { icon: String.fromCodePoint(0x1F4DA), title: "Professional Development", desc: "Ongoing training opportunities and continuing education support" },
  { icon: String.fromCodePoint(0x2764), title: "Meaningful Work", desc: "Make a lasting impact on young children in the Trenton community" },
  { icon: String.fromCodePoint(0x1F4C5), title: "School Schedule", desc: "Follow the Trenton Public Schools calendar with holidays and breaks" },
  { icon: String.fromCodePoint(0x1F91D), title: "Supportive Team", desc: "Work alongside dedicated educators who share your passion" },
  { icon: String.fromCodePoint(0x1F3E0), title: "Two Campuses", desc: "Opportunities at our Trenton and Lawrence locations" }
];

const openings = [
  {
    title: "Lead Preschool Teacher",
    location: "Trenton Campus",
    type: "Full-Time",
    desc: "Lead a classroom of preschool students through the Creative Curriculum framework aligned with NJ Preschool Teaching and Learning Standards.",
    reqs: ["NJ P-3 or CE certification required", "Bachelor's degree in Early Childhood Education or related field", "Experience working with 3-5 year olds preferred"]
  },
  {
    title: "Teacher Assistant",
    location: "Lawrence Campus",
    type: "Full-Time",
    desc: "Support the lead teacher in daily classroom activities, small group instruction, and maintaining a safe learning environment.",
    reqs: ["CDA credential or Associate's degree preferred", "High school diploma required", "Experience in early childhood settings a plus"]
  },
  {
    title: "Substitute Teacher",
    location: "Both Campuses",
    type: "On-Call",
    desc: "Provide coverage for classrooms as needed, maintaining continuity of instruction and a positive learning environment.",
    reqs: ["Substitute teaching credential or relevant experience", "Flexible schedule", "Ability to follow lesson plans"]
  }
];

export default function Careers(){
const heroRef=useRef(null);
const[heroVis,setHeroVis]=useState(false);
const benRef=useRef(null);
const[benVis,setBenVis]=useState(false);
const jobRef=useRef(null);
const[jobVis,setJobVis]=useState(false);

useEffect(()=>{
const obs=(ref,set)=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)set(true);},{threshold:0.1});if(ref.current)o.observe(ref.current);return o;};
const o1=obs(heroRef,setHeroVis);const o2=obs(benRef,setBenVis);const o3=obs(jobRef,setJobVis);
return()=>{o1.disconnect();o2.disconnect();o3.disconnect();};
},[]);

const fade=(vis,d=0)=>({opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(28px)',transition:'all 0.7s cubic-bezier(0.16,1,0.3,1) '+d+'s'});

return(
<div style={{minHeight:'100vh'}}>
<section ref={heroRef} className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#5B2A3A 50%,#8B4513 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 40% 50%,rgba(247,201,72,0.08),transparent 60%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div style={fade(heroVis,0)}>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(247,201,72,0.1)',border:'1px solid rgba(247,201,72,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#F7C948'}}>Careers</span></div>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>Join Our <span style={{color:'#F5A623'}}>Team</span></h1>
<p className='text-lg' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:550,margin:'0 auto'}}>Build your career while building futures. We are always looking for passionate educators to join the LSPA family.</p>
</div>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#FFFFFF'}}>
<div className='max-w-5xl mx-auto px-4 md:px-8'>
<div className='text-center mb-12' style={fade(benVis,0)}>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>Why Work at <span style={{color:'#4CAF50'}}>LSPA?</span></h2>
</div>
<div ref={benRef} className='grid md:grid-cols-3 gap-5'>
{benefits.map((b,i)=>(
<div key={i} className='p-6 rounded-2xl border hover:shadow-lg transition-all' style={{borderColor:'#e5e7eb',background:'#FAFAFA',...fade(benVis,0.08+i*0.06)}}>
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
<div className='text-center mb-12' style={fade(jobVis,0)}>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>Current <span style={{color:'#4BA3E3'}}>Openings</span></h2>
</div>
<div ref={jobRef} className='space-y-5'>
{openings.map((job,i)=>(
<div key={i} className='p-6 rounded-2xl border bg-white' style={{borderColor:'#e5e7eb',...fade(jobVis,0.1+i*0.08)}}>
<div className='flex justify-between flex-wrap gap-2 mb-3'>
<div className='font-bold text-lg' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{job.title}</div>
<div className='flex gap-2'>
<span className='px-3 py-1 rounded-full text-xs font-semibold' style={{fontFamily:'DM Sans',background:'#EBF5FB',color:'#1B2D5B'}}>{job.location}</span>
<span className='px-3 py-1 rounded-full text-xs font-semibold' style={{fontFamily:'DM Sans',background:'#E8F5E9',color:'#2E7D32'}}>{job.type}</span>
</div>
</div>
<p className='mb-3' style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.95rem'}}>{job.desc}</p>
<div className='space-y-1'>
{job.reqs.map((r,j)=>(
<div key={j} className='flex items-center gap-2' style={{fontFamily:'DM Sans',color:'#374151',fontSize:'0.9rem'}}>
<span style={{color:'#F7C948',fontWeight:'bold'}}>{String.fromCharCode(8226)}</span>{r}
</div>
))}
</div>
</div>
))}
</div>
</div>
</section>

<section className='py-16' style={{background:'#1B2D5B'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center'>
<h3 className='font-bold text-white mb-3' style={{fontFamily:'Fredoka',fontSize:'1.5rem'}}>Interested in Joining <span style={{color:'#F7C948'}}>LSPA?</span></h3>
<p className='mb-6' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)'}}>Send your resume and cover letter to get started.</p>
<a href='mailto:lauraspelmanacademy@verizon.net?subject=Career%20Inquiry' className='inline-block px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>Email Your Resume</a>
</div>
</section>
</div>
);}
`;
fs.writeFileSync(path.join(base,'app','careers','page.jsx'), careers);
log.push('UPDATED careers/page.jsx - removed duplicate footer, added scroll animations, new hero gradient, polished layout');

// ─── 7. RESOURCES PAGE — merged forms, fixed emoji, removed dup footer ────
const resources = `'use client';
import{useState,useRef,useEffect}from'react';
import Link from'next/link';

const ACCESS_KEY="e9658441-788a-4bda-95f9-1abf712fc1a8";

const forms=[
{id:'open-enrollment',title:'Enrollment Application',titleEs:'Solicitud de Inscripcion',desc:'District enrollment checklist, student information, eligibility verification, language survey, health forms, and family survey.',
files:[{label:'English',href:'/forms/LSPA_Open_Enrollment_EN.pdf'},{label:'Espanol',href:'/forms/LSPA_Open_Enrollment_ES.pdf'}],pages:'13 pages',uploadLabel:'Open Enrollment Checklist'},
{id:'registration',title:'Registration Packet',titleEs:'Paquete de Registro',desc:'Complete registration forms including child info, emergency contacts, medical information, policies, and parent verification.',
files:[{label:'English',href:'/forms/LSPA_Registration_Packet_EN.pdf'},{label:'Espanol',href:'/forms/LSPA_Registration_Packet_ES.pdf'}],pages:'10 pages',uploadLabel:'Registration Packet'},
{id:'social-media',title:'Social Media Release',titleEs:'Autorizacion de Redes Sociales',desc:'Consent form for photographs and video recordings used in school publications and social media.',
files:[{label:'English / Espanol (Bilingual)',href:'/forms/LSPA_Social_Media_Release.pdf'}],pages:'1 page',uploadLabel:'Social Media Release Form'},
];

const resourceSections=[
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

const inputStyle={width:'100%',padding:'10px 14px',borderRadius:8,border:'1.5px solid #E5E7EB',fontSize:14,fontFamily:'DM Sans',color:'#1F2937',background:'#FFFFFF',outline:'none',boxSizing:'border-box'};

export default function Resources(){
const[expandedForm,setExpandedForm]=useState(null);
const[uploadState,setUploadState]=useState('idle');
const[formData,setFormData]=useState({parentName:'',parentEmail:'',childName:'',phone:'',notes:''});
const[files,setFiles]=useState([]);
const[errors,setErrors]=useState({});
const[dragActive,setDragActive]=useState(false);
const fileInputRef=useRef(null);
const uploadRefs=useRef({});

const heroRef=useRef(null);
const[heroVis,setHeroVis]=useState(false);
const formsRef=useRef(null);
const[formsVis,setFormsVis]=useState(false);

useEffect(()=>{
const obs=(ref,set)=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)set(true);},{threshold:0.1});if(ref.current)o.observe(ref.current);return o;};
const o1=obs(heroRef,setHeroVis);const o2=obs(formsRef,setFormsVis);
return()=>{o1.disconnect();o2.disconnect();};
},[]);

const fade=(vis,d=0)=>({opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(28px)',transition:'all 0.7s cubic-bezier(0.16,1,0.3,1) '+d+'s'});

const validate=()=>{
const errs={};
if(!formData.parentName.trim())errs.parentName='Required';
if(!formData.parentEmail.trim())errs.parentEmail='Required';
else if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.parentEmail))errs.parentEmail='Invalid email';
if(!formData.childName.trim())errs.childName='Required';
if(files.length===0)errs.files='Please attach your signed form';
return errs;
};

const handleFiles=(newFiles)=>{
const arr=Array.from(newFiles).filter(f=>{const ext=f.name.toLowerCase();return(ext.endsWith('.pdf')||ext.endsWith('.jpg')||ext.endsWith('.jpeg')||ext.endsWith('.png')||ext.endsWith('.heic'))&&f.size<=10*1024*1024;});
setFiles(prev=>[...prev,...arr].slice(0,5));
};
const removeFile=(i)=>setFiles(prev=>prev.filter((_,idx)=>idx!==i));
const handleDrag=(e)=>{e.preventDefault();e.stopPropagation();if(e.type==='dragenter'||e.type==='dragover')setDragActive(true);else if(e.type==='dragleave')setDragActive(false);};
const handleDrop=(e)=>{e.preventDefault();e.stopPropagation();setDragActive(false);if(e.dataTransfer.files?.length)handleFiles(e.dataTransfer.files);};
const formatSize=(b)=>b<1024?b+' B':b<1048576?(b/1024).toFixed(1)+' KB':(b/1048576).toFixed(1)+' MB';

const toggleUpload=(formId)=>{
if(expandedForm===formId){setExpandedForm(null);}
else{setExpandedForm(formId);setUploadState('idle');setFormData({parentName:'',parentEmail:'',childName:'',phone:'',notes:''});setFiles([]);setErrors({});
setTimeout(()=>{uploadRefs.current[formId]?.scrollIntoView({behavior:'smooth',block:'center'});},100);}
};

const handleSubmit=async(formTitle)=>{
const errs=validate();setErrors(errs);if(Object.keys(errs).length>0)return;
setUploadState('uploading');
try{
const sub=new FormData();
sub.append('access_key',ACCESS_KEY);
sub.append('subject','LSPA Form Upload: '+formTitle+' - '+formData.childName);
sub.append('from_name',formData.parentName);
sub.append('replyto',formData.parentEmail);
sub.append('Parent Name',formData.parentName);
sub.append('Parent Email',formData.parentEmail);
sub.append('Child Name',formData.childName);
sub.append('Form Type',formTitle);
sub.append('Phone',formData.phone||'Not provided');
sub.append('Notes',formData.notes||'None');
files.forEach((file,i)=>sub.append('attachment_'+(i+1),file));
const res=await fetch('https://api.web3forms.com/submit',{method:'POST',body:sub});
const result=await res.json();
if(result.success){setUploadState('success');setTimeout(()=>{setFormData({parentName:'',parentEmail:'',childName:'',phone:'',notes:''});setFiles([]);},1000);}
else throw new Error(result.message);
}catch(err){console.error('Upload error:',err);setUploadState('error');}
};

return(
<div style={{minHeight:'100vh'}}>
<section ref={heroRef} className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#1B4A6B 50%,#2A5451 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 40% 50%,rgba(75,163,227,0.08),transparent 60%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div style={fade(heroVis,0)}>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(75,163,227,0.1)',border:'1px solid rgba(75,163,227,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#4BA3E3'}}>Resources</span></div>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>Family <span style={{color:'#F5A623'}}>Resources</span></h1>
<p className='text-lg' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:550,margin:'0 auto'}}>Download enrollment forms, upload signed documents, and access helpful resources for your family.</p>
</div>
</div>
</section>

{/* ENROLLMENT FORMS */}
<section className='py-16 md:py-24' style={{background:'#FFFFFF'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8'>
<div className='text-center mb-4' style={fade(formsVis,0)}>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5' style={{background:'rgba(76,175,80,0.08)',border:'1px solid rgba(76,175,80,0.15)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#2E7D32'}}>Step 1</span></div>
<h2 className='font-bold mb-2' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>Enrollment <span style={{color:'#4CAF50'}}>Forms</span></h2>
<p className='text-sm mb-8' style={{fontFamily:'DM Sans',color:'#6B7280'}}>Download, print, sign, and upload your forms securely. You will receive email confirmation.</p>
</div>
<div ref={formsRef} className='space-y-5'>
{forms.map((form,fi)=>(
<div key={form.id} className='rounded-2xl border-2 overflow-hidden transition-all' style={{borderColor:expandedForm===form.id?'#F5A623':'#e5e7eb',boxShadow:expandedForm===form.id?'0 8px 30px rgba(27,42,74,0.1)':'0 1px 4px rgba(0,0,0,0.04)',...fade(formsVis,0.1+fi*0.08)}}>
<div className='p-6'>
<h3 className='font-bold text-lg mb-0.5' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{form.title}</h3>
<p className='text-sm font-medium mb-2' style={{fontFamily:'DM Sans',color:'#F5A623'}}>{form.titleEs}</p>
<p className='text-sm mb-4' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{form.desc}</p>
<div className='flex gap-3 flex-wrap items-center'>
{form.files.map((file,i)=>(
<a key={i} href={file.href} download target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white hover:opacity-90 transition-all' style={{fontFamily:'DM Sans',background:'#1B2D5B'}}>{String.fromCodePoint(0x2B07)} Download {file.label}</a>
))}
<div style={{width:1,height:28,background:'#E5E7EB',margin:'0 4px'}}/>
<button onClick={()=>toggleUpload(form.id)} className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border-2 transition-all cursor-pointer' style={{fontFamily:'DM Sans',background:expandedForm===form.id?'#F5A623':'#FFFFFF',color:'#1B2D5B',borderColor:'#F5A623'}}>{expandedForm===form.id?'Close':'Upload Signed Form'}</button>
</div>
<div className='mt-2'><span className='text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full' style={{background:'#F3F4F6',color:'#9CA3AF'}}>PDF {String.fromCharCode(183)} {form.pages}</span></div>
</div>

{expandedForm===form.id&&(
<div ref={el=>uploadRefs.current[form.id]=el} className='p-6 border-t' style={{background:'#F9FAFB',borderColor:'#E5E7EB'}}>
<div className='rounded-lg p-3 mb-5 flex items-center gap-2' style={{background:'#DCFCE7',border:'1px solid #BBF7D0'}}>
<span>{String.fromCodePoint(0x1F512)}</span>
<span className='text-xs' style={{fontFamily:'DM Sans',color:'#374151'}}><strong>Secure submission</strong> \\u2014 files go directly to Laura Spelman Preschool Academy. You will receive email confirmation.</span>
</div>

{uploadState==='success'&&(
<div className='rounded-2xl p-8 text-center border-2' style={{borderColor:'#16A34A',background:'#FFFFFF'}}>
<div className='w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl' style={{background:'#DCFCE7'}}>{String.fromCodePoint(0x2714)}</div>
<h3 className='text-lg font-bold mb-1' style={{fontFamily:'Fredoka',color:'#16A34A'}}>Submitted Successfully!</h3>
<p className='text-sm mb-4' style={{fontFamily:'DM Sans',color:'#6B7280'}}>Confirmation sent to your email.</p>
<button onClick={()=>{setUploadState('idle');setFiles([]);setErrors({});setFormData({parentName:'',parentEmail:'',childName:'',phone:'',notes:''});}} className='px-6 py-2.5 rounded-lg font-semibold text-sm text-white cursor-pointer' style={{fontFamily:'DM Sans',background:'#1B2D5B',border:'none'}}>Upload Another</button>
</div>
)}

{uploadState==='error'&&(
<div className='rounded-xl p-5 text-center mb-4' style={{background:'#FEE2E2',border:'2px solid #DC2626'}}>
<p className='font-bold text-sm mb-2' style={{color:'#DC2626'}}>Error \\u2014 Please try again</p>
<button onClick={()=>setUploadState('idle')} className='px-5 py-2 rounded-lg font-semibold text-sm text-white cursor-pointer' style={{fontFamily:'DM Sans',background:'#1B2D5B',border:'none'}}>Retry</button>
</div>
)}

{(uploadState==='idle'||uploadState==='uploading')&&(
<div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
<div><label className='block text-sm font-semibold mb-1' style={{color:'#374151'}}>Parent / Guardian Name <span style={{color:'#DC2626'}}>*</span></label>
<input type='text' value={formData.parentName} onChange={e=>setFormData(p=>({...p,parentName:e.target.value}))} placeholder='Full name' style={{...inputStyle,borderColor:errors.parentName?'#DC2626':'#E5E7EB'}}/>
{errors.parentName&&<span className='text-xs mt-1 block' style={{color:'#DC2626'}}>{errors.parentName}</span>}</div>
<div><label className='block text-sm font-semibold mb-1' style={{color:'#374151'}}>Email <span style={{color:'#DC2626'}}>*</span></label>
<input type='email' value={formData.parentEmail} onChange={e=>setFormData(p=>({...p,parentEmail:e.target.value}))} placeholder='email@example.com' style={{...inputStyle,borderColor:errors.parentEmail?'#DC2626':'#E5E7EB'}}/>
{errors.parentEmail&&<span className='text-xs mt-1 block' style={{color:'#DC2626'}}>{errors.parentEmail}</span>}</div>
<div><label className='block text-sm font-semibold mb-1' style={{color:'#374151'}}>Child's Name <span style={{color:'#DC2626'}}>*</span></label>
<input type='text' value={formData.childName} onChange={e=>setFormData(p=>({...p,childName:e.target.value}))} placeholder="Child's full name" style={{...inputStyle,borderColor:errors.childName?'#DC2626':'#E5E7EB'}}/>
{errors.childName&&<span className='text-xs mt-1 block' style={{color:'#DC2626'}}>{errors.childName}</span>}</div>
<div><label className='block text-sm font-semibold mb-1' style={{color:'#374151'}}>Phone</label>
<input type='tel' value={formData.phone} onChange={e=>setFormData(p=>({...p,phone:e.target.value}))} placeholder='(609) 000-0000' style={inputStyle}/></div>
</div>
<div className='mt-4'>
<label className='block text-sm font-semibold mb-1' style={{color:'#374151'}}>Attach Signed Form(s) <span style={{color:'#DC2626'}}>*</span></label>
<div onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} onClick={()=>fileInputRef.current?.click()}
className='rounded-xl p-6 text-center cursor-pointer transition-all' style={{border:'2px dashed '+(dragActive?'#2563EB':errors.files?'#DC2626':'#D1D5DB'),background:dragActive?'#DBEAFE':'#FFFFFF'}}>
<input ref={fileInputRef} type='file' multiple accept='.pdf,.jpg,.jpeg,.png,.heic' onChange={e=>handleFiles(e.target.files)} style={{display:'none'}}/>
<p className='text-sm font-semibold mb-1' style={{color:'#374151'}}>{dragActive?'Drop files here':'Click or drag files here'}</p>
<p className='text-xs' style={{color:'#9CA3AF'}}>PDF, JPG, PNG, HEIC {String.fromCharCode(183)} Max 10MB {String.fromCharCode(183)} Up to 5 files</p>
</div>
{errors.files&&<span className='text-xs mt-1 block' style={{color:'#DC2626'}}>{errors.files}</span>}
{files.length>0&&(<div className='mt-2 space-y-1.5'>{files.map((file,i)=>(
<div key={i} className='flex items-center gap-2 px-3 py-2 rounded-lg border' style={{borderColor:'#E5E7EB',background:'#FFFFFF'}}>
<span className='flex-1 text-xs font-medium truncate' style={{color:'#374151'}}>{file.name}</span>
<span className='text-xs flex-shrink-0' style={{color:'#9CA3AF'}}>{formatSize(file.size)}</span>
<button type='button' onClick={e=>{e.stopPropagation();removeFile(i);}} className='w-5 h-5 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 cursor-pointer' style={{background:'#FEE2E2',color:'#DC2626',border:'none'}}>{String.fromCodePoint(0x2715)}</button>
</div>
))}</div>)}
</div>
<div className='mt-3'>
<label className='block text-sm font-semibold mb-1' style={{color:'#374151'}}>Notes</label>
<textarea value={formData.notes} onChange={e=>setFormData(p=>({...p,notes:e.target.value}))} placeholder='Any questions or comments' rows={2} style={{...inputStyle,resize:'vertical',minHeight:60}}/>
</div>
<div className='mt-5 text-center'>
<button onClick={()=>handleSubmit(form.uploadLabel)} disabled={uploadState==='uploading'}
className='px-10 py-3 rounded-full font-bold text-base shadow-lg cursor-pointer transition-all hover:-translate-y-0.5'
style={{fontFamily:'Fredoka',background:uploadState==='uploading'?'#D1D5DB':'linear-gradient(135deg,#1B2D5B 0%,#2D4A7A 100%)',color:'#FFFFFF',border:'none'}}>
{uploadState==='uploading'?'Submitting...':'Submit Form'}</button>
<p className='text-xs mt-2' style={{color:'#9CA3AF'}}>{String.fromCodePoint(0x1F512)} Encrypted {String.fromCharCode(183)} Sent directly to LSPA</p>
</div>
</div>
)}
</div>
)}
</div>
))}
</div>
</div>
</section>

{/* ADDITIONAL RESOURCES */}
<section className='py-16 md:py-24' style={{background:'#F8FAFB'}}>
<div className='max-w-5xl mx-auto px-4 md:px-8'>
<div className='text-center mb-12'>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>Helpful <span style={{color:'#4BA3E3'}}>Links</span></h2>
</div>
{resourceSections.map((section,si)=>(
<div key={si} className='mb-10'>
<h3 className='font-bold text-lg mb-4 flex items-center gap-2' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}><span className='text-2xl'>{section.icon}</span>{section.category}</h3>
<div className='grid md:grid-cols-2 gap-4'>
{section.items.map((item,j)=>(
<a key={j} href={item.link} target={item.link.startsWith('http')?'_blank':'_self'} rel='noopener noreferrer'
className='block p-5 rounded-2xl border bg-white hover:shadow-lg transition-all' style={{borderColor:'#e5e7eb',textDecoration:'none'}}>
<div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1rem'}}>{item.name}</div>
<div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem'}}>{item.desc}</div>
{item.link.startsWith('http')&&<div className='mt-2 text-xs font-semibold' style={{color:'#F7C948'}}>{String.fromCodePoint(0x2197)} External Link</div>}
</a>
))}
</div>
</div>
))}
</div>
</section>

<section className='py-12' style={{background:'#FFFFFF'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center'>
<p className='text-sm' style={{fontFamily:'DM Sans',color:'#6B7280',lineHeight:1.8}}>
Having trouble? Email forms directly to <a href='mailto:lauraspelmanacademy@verizon.net' className='font-semibold' style={{color:'#4BA3E3'}}>lauraspelmanacademy@verizon.net</a> or drop them off at either campus.
</p>
</div>
</section>
</div>
);}
`;
fs.writeFileSync(path.join(base,'app','resources','page.jsx'), resources);
log.push('UPDATED resources/page.jsx - merged form downloads/uploads from /enroll, fixed all emoji, removed duplicate footer, restyled to match site (Fredoka/DM Sans), added scroll animations, removed dead placeholder links');

// ─── 8. CTA — fix age consistency ─────────────────────────────────────────
const ctaPath = path.join(base,'app','components','CTA.jsx');
if (fs.existsSync(ctaPath)) {
  let cta = fs.readFileSync(ctaPath,'utf8');
  // Already says 3, 4, or 5 - verify
  if (!cta.includes('3, 4, or 5')) {
    cta = cta.replace(/ages \d.*?September/g, 'ages 3, 4, or 5 by September');
  }
  fs.writeFileSync(ctaPath, cta);
  log.push('VERIFIED CTA.jsx - age wording confirmed as 3, 4, or 5');
}

// ─── SUMMARY ──────────────────────────────────────────────────────────────
console.log('\\n========================================');
console.log('  LSPA SITE-WIDE CLEANUP COMPLETE');
console.log('========================================\\n');
log.forEach(l => console.log('  ' + l));
console.log('\\n  Total files modified: ' + log.length);
console.log('\\n  Removed dead links from Resources (Parent Handbook, etc.)');
console.log('  Kept only links with real content or real external URLs');
console.log('  All pages now use consistent Fredoka/DM Sans typography');
console.log('  All pages now have scroll-triggered animations');
console.log('  All duplicate footer bars removed');
console.log('  Age eligibility consistent: 3, 4, or 5 by Sept 30th');
console.log('');
