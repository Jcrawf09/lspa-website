const fs = require('fs');
const path = require('path');

// ─── UPDATED ABOUT US PAGE ────────────────────────────────────────────────
const aboutUs = `'use client';
import{useEffect,useRef,useState}from'react';
import Nav from'../components/Nav';
import Footer from'../components/Footer';
import Link from'next/link';

const milestones=[
{year:'2025-2026',title:'A Year of Growth',items:[
'Upgraded classroom learning materials and furniture across both campuses',
'Enhanced outdoor play areas with new age-appropriate equipment',
'Implemented enriched Creative Curriculum units aligned with NJ Preschool Teaching and Learning Standards',
'Launched new parent communication tools and school website',
'Strengthened teacher professional development with district coaching partnerships',
'Expanded bilingual family resources for English and Spanish-speaking households',
]},
{year:'2026-2027',title:'Looking Ahead',items:[
'Expanding classroom capacity to serve more Trenton families',
'Introducing STEAM-focused enrichment activities across all age groups',
'Developing a dedicated mobile app for real-time parent updates and digital check-in',
'Adding after-school enrichment programming for enrolled students',
'Deepening community partnerships for family wellness and support services',
'Continuing investment in teacher training and instructional quality',
]},
];

const stats=[
{num:'2',label:'Campuses'},{num:'10+',label:'Years Serving Trenton'},{num:'100+',label:'Families Served Annually'},{num:'Free',label:'For Trenton Residents'},
];

export default function AboutUs(){
const heroRef=useRef(null);
const[heroVis,setHeroVis]=useState(false);
const timeRef=useRef(null);
const[timeVis,setTimeVis]=useState(false);
const statsRef=useRef(null);
const[statsVis,setStatsVis]=useState(false);
const visionRef=useRef(null);
const[visionVis,setVisionVis]=useState(false);

useEffect(()=>{
const obs=(ref,set)=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)set(true);},{threshold:0.15});if(ref.current)o.observe(ref.current);return o;};
const o1=obs(heroRef,setHeroVis);const o2=obs(timeRef,setTimeVis);const o3=obs(statsRef,setStatsVis);const o4=obs(visionRef,setVisionVis);
return()=>{o1.disconnect();o2.disconnect();o3.disconnect();o4.disconnect();};
},[]);

const fade=(vis,d=0)=>({opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(32px)',transition:'all 0.8s cubic-bezier(0.16,1,0.3,1) '+d+'s'});

return(<>
<Nav/>
<main>
{/* HERO */}
<section className='relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#2A4A3E 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 30% 40%,rgba(76,175,80,0.1),transparent 60%),radial-gradient(ellipse at 70% 60%,rgba(75,163,227,0.08),transparent 50%)'}}/>
<div className='absolute bottom-0 left-0 right-0 h-px' style={{background:'linear-gradient(to right,transparent,rgba(247,201,72,0.3),transparent)'}}/>
<div ref={heroRef} className='max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div style={fade(heroVis,0)}>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(247,201,72,0.1)',border:'1px solid rgba(247,201,72,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#F7C948'}}>About LSPA</span></div>
<h1 className='font-bold text-white mb-6' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>Where Little Dreams Grow Into <span style={{color:'#F5A623'}}>Big Futures</span></h1>
<p className='text-lg max-w-2xl mx-auto' style={{color:'rgba(255,255,255,0.75)'}}>Laura Spelman Preschool Academy is a district-partnered preschool operating under contract with Trenton Public Schools Office of Early Childhood. We provide free, high-quality preschool education to families across the city.</p>
</div>
</div>
</section>

{/* STATS BAR */}
<section ref={statsRef} className='py-12 md:py-16' style={{background:'#F8FAFB'}}>
<div className='max-w-5xl mx-auto px-4 md:px-8'>
<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>{stats.map((s,i)=>(
<div key={i} className='text-center' style={fade(statsVis,i*0.1)}>
<div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(28px,4vw,40px)'}}>{s.num}</div>
<div className='text-sm font-medium' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{s.label}</div>
</div>
))}</div>
</div>
</section>

{/* TIMELINE */}
<section className='py-20 md:py-28' style={{background:'#FFFFFF'}}>
<div className='max-w-4xl mx-auto px-4 md:px-8'>
<div className='text-center mb-16' style={fade(timeVis,0)}>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5' style={{background:'rgba(76,175,80,0.08)',border:'1px solid rgba(76,175,80,0.15)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#2E7D32'}}>Our Journey</span></div>
<h2 className='font-bold mb-4' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(28px,4vw,44px)'}}>Building Something <span style={{color:'#4CAF50'}}>That Lasts</span></h2>
</div>
<div ref={timeRef} className='space-y-12'>{milestones.map((m,mi)=>(
<div key={mi} className='relative rounded-3xl border-2 p-8 md:p-10 overflow-hidden' style={{borderColor:mi===0?'#4BA3E320':'#4CAF5020',...fade(timeVis,0.15+mi*0.2)}}>
<div className='absolute top-0 left-0 right-0 h-1.5' style={{background:mi===0?'linear-gradient(to right,#4BA3E3,#4BA3E388)':'linear-gradient(to right,#4CAF50,#4CAF5088)'}}/>
<div className='flex items-center gap-4 mb-6'>
<div className='w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0' style={{background:mi===0?'#4BA3E315':'#4CAF5015'}}>
<span className='text-lg font-bold' style={{fontFamily:'Fredoka',color:mi===0?'#4BA3E3':'#4CAF50'}}>{mi===0?'Now':'Next'}</span>
</div>
<div>
<div className='text-sm font-bold tracking-[2px] uppercase' style={{color:mi===0?'#4BA3E3':'#4CAF50'}}>{m.year}</div>
<h3 className='text-2xl font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{m.title}</h3>
</div>
</div>
<div className='grid md:grid-cols-2 gap-3'>{m.items.map((item,j)=>(
<div key={j} className='flex items-start gap-3 py-2'>
<div className='w-2 h-2 rounded-full flex-shrink-0 mt-1.5' style={{background:mi===0?'#4BA3E3':'#4CAF50'}}/>
<span className='text-sm' style={{fontFamily:'DM Sans',color:'#4B5563'}}>{item}</span>
</div>
))}</div>
</div>
))}</div>
</div>
</section>

{/* VISION */}
<section ref={visionRef} className='py-20 md:py-28 relative' style={{background:'#1B2D5B'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 50% 50%,rgba(247,201,72,0.06),transparent 60%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div style={fade(visionVis,0)}>
<h2 className='font-bold text-white mb-6' style={{fontFamily:'Fredoka',fontSize:'clamp(28px,4vw,44px)'}}>Our <span style={{color:'#F5A623'}}>Mission</span></h2>
<p className='text-lg leading-relaxed mb-8' style={{color:'rgba(255,255,255,0.8)'}}>Every child in Trenton deserves access to a world-class early education. LSPA exists to make that a reality - providing safe, nurturing, and academically rigorous classrooms where children build the foundation for a lifetime of learning.</p>
<p className='text-base italic' style={{color:'rgba(255,255,255,0.5)'}}>A district-partnered provider under the Trenton Public Schools Office of Early Childhood</p>
</div>
</div>
</section>

{/* LSPA LOGO */}
<section className='py-12' style={{background:'#F8FAFB'}}>
<div className='flex flex-col items-center'>
<img src='/images/lspa-logo.png' alt='LSPA' style={{width:80,height:80,objectFit:'contain',margin:'0 auto 8px'}}/>
<p style={{fontFamily:'Fredoka',fontSize:14,fontWeight:700,color:'#1B2D5B',textAlign:'center'}}>Laura Spelman</p>
<p style={{fontFamily:'DM Sans',fontSize:9,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'#4BA3E3',textAlign:'center'}}>Preschool Academy</p>
<p className='mt-2' style={{fontFamily:'DM Sans',fontSize:12,color:'#9CA3AF',textAlign:'center'}}>540 N. Olden Avenue, Trenton, NJ 08638 &nbsp;|&nbsp; 1040 Spruce Street, Lawrence, NJ 08648</p>
</div>
</section>
</main>
<Footer/>
</>);
}
`;

// ─── PRIVACY POLICY PAGE ──────────────────────────────────────────────────
const privacyPolicy = `'use client';
import Nav from'../components/Nav';
import Footer from'../components/Footer';

export default function PrivacyPolicy(){
return(<>
<Nav/>
<main>
<section className='relative pt-32 pb-16 md:pt-40 md:pb-20' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#2A3A5E 100%)'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(28px,4vw,44px)'}}>Privacy Policy</h1>
<p className='text-base' style={{color:'rgba(255,255,255,0.6)'}}>Last updated: March 2026</p>
</div>
</section>

<section className='py-16 md:py-20' style={{background:'#FFFFFF'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8 space-y-10' style={{fontFamily:'DM Sans',color:'#374151',fontSize:15,lineHeight:1.8}}>

<div>
<h2 className='font-bold text-xl mb-3' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>Introduction</h2>
<p>Laura Spelman Preschool Academy ("LSPA," "we," "our") is committed to protecting the privacy of our students, families, and website visitors. As a district-partnered preschool provider operating under contract with Trenton Public Schools Office of Early Childhood, we comply with all applicable federal and state privacy laws, including the Family Educational Rights and Privacy Act (FERPA), the Children's Online Privacy Protection Act (COPPA), and the New Jersey Department of Education data privacy requirements.</p>
</div>

<div>
<h2 className='font-bold text-xl mb-3' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>Information We Collect</h2>
<p className='mb-3'>We may collect the following types of information through this website and our enrollment process:</p>
<p><strong>Contact Information:</strong> Parent or guardian names, email addresses, phone numbers, and mailing addresses submitted through enrollment forms or contact requests.</p>
<p><strong>Student Information:</strong> Child's name, date of birth, and other information required for enrollment as specified by the Trenton Board of Education and the New Jersey Department of Education.</p>
<p><strong>Website Usage:</strong> Basic analytics data such as pages visited, browser type, and device information. We do not use this data to identify individual visitors.</p>
</div>

<div>
<h2 className='font-bold text-xl mb-3' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>FERPA Compliance</h2>
<p>As a provider operating under the Trenton Public Schools district, LSPA adheres to the Family Educational Rights and Privacy Act (FERPA), 20 U.S.C. 1232g. Under FERPA, parents and legal guardians have the right to inspect and review their child's education records, request corrections to records they believe are inaccurate or misleading, and provide written consent before LSPA discloses personally identifiable information from education records, except where disclosure is permitted by law. Education records are maintained in accordance with the Trenton Board of Education's policies and the New Jersey Student Safety Data System (NJSSDS) requirements.</p>
</div>

<div>
<h2 className='font-bold text-xl mb-3' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>COPPA Compliance</h2>
<p>LSPA complies with the Children's Online Privacy Protection Act (COPPA), 15 U.S.C. 6501-6506. This website is not directed at children under 13 and does not knowingly collect personal information from children. All student information is collected directly from parents or legal guardians through official enrollment processes. Photos or images of students are only used with explicit written consent from the parent or guardian via our Social Media Release Form.</p>
</div>

<div>
<h2 className='font-bold text-xl mb-3' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>How We Use Information</h2>
<p>Information collected is used solely to process enrollment inquiries and applications, communicate with families about their child's education and school activities, comply with reporting requirements of the Trenton Board of Education and the New Jersey Department of Education, and improve the functionality and content of this website.</p>
</div>

<div>
<h2 className='font-bold text-xl mb-3' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>Information Sharing</h2>
<p>We do not sell, trade, or rent personal information to third parties. We may share information only with the Trenton Public Schools Office of Early Childhood as required by our provider contract, the New Jersey Department of Education as required for program compliance and reporting, and other parties when required by law or when necessary to protect the safety of our students.</p>
</div>

<div>
<h2 className='font-bold text-xl mb-3' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>Data Security</h2>
<p>LSPA implements appropriate administrative, technical, and physical safeguards to protect personal information. Digital records are stored securely and access is limited to authorized personnel only. Paper records are maintained in locked storage. We follow data security practices consistent with the New Jersey Department of Education's standards for preschool education providers.</p>
</div>

<div>
<h2 className='font-bold text-xl mb-3' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>Your Rights</h2>
<p>Parents and legal guardians have the right to access personal information we hold about their child, request correction or deletion of inaccurate information, withdraw consent for photo or media use at any time, and file a complaint with the U.S. Department of Education if they believe FERPA rights have been violated. To exercise any of these rights, contact us using the information below.</p>
</div>

<div>
<h2 className='font-bold text-xl mb-3' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>Changes to This Policy</h2>
<p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of this website after changes constitutes acceptance of the revised policy.</p>
</div>

<div>
<h2 className='font-bold text-xl mb-3' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>Contact Us</h2>
<p>If you have questions about this Privacy Policy or how we handle personal information, please contact us:</p>
<p className='mt-2'><strong>Laura Spelman Preschool Academy</strong><br/>540 N. Olden Avenue, Trenton, NJ 08638<br/>Phone: (609) 396-7171<br/>Email: lauraspelmanacademy@verizon.net</p>
</div>

</div>
</section>
</main>
<Footer/>
</>);
}
`;

// ─── UPDATED FOOTER WITH PRIVACY LINK ─────────────────────────────────────
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
              <p className="text-sm max-w-xs" style={{color:"rgba(255,255,255,0.35)"}}>Providing free quality preschool education in partnership with the Trenton Board of Education for over 10 years.</p>
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

// ─── WRITE FILES ───────────────────────────────────────────────────────────
const base = process.argv[2] || '.';

// About us
const aboutDir = path.join(base, 'app', 'about-us');
if (!fs.existsSync(aboutDir)) fs.mkdirSync(aboutDir, { recursive: true });
fs.writeFileSync(path.join(aboutDir, 'page.jsx'), aboutUs);

// Privacy policy
const privDir = path.join(base, 'app', 'privacy-policy');
if (!fs.existsSync(privDir)) fs.mkdirSync(privDir, { recursive: true });
fs.writeFileSync(path.join(privDir, 'page.jsx'), privacyPolicy);

// Footer
fs.writeFileSync(path.join(base, 'app', 'components', 'Footer.jsx'), footer);

console.log('Updated:');
console.log('  - app/about-us/page.jsx (removed Melody section, new 2025-2027 timeline)');
console.log('  - app/privacy-policy/page.jsx (new page - FERPA/COPPA compliant)');
console.log('  - app/components/Footer.jsx (added Privacy Policy link, fixed About href)');
