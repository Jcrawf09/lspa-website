const fs = require('fs');
const path = require('path');

const base = process.argv[2] || '.';
const log = [];

function ensure(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ─── 1. STAFF / TEAM PAGE ────────────────────────────────────────────────
ensure(path.join(base, 'app', 'our-team'));

const staffPage = `'use client';
import{useState}from'react';

const categories=[
{title:'Administration',color:'#1B2D5B',roles:[
{name:'Director',credentials:'',campus:'Both Campuses'},
{name:'Assistant Director',credentials:'',campus:'Both Campuses'},
{name:'Office Manager',credentials:'',campus:'Trenton Campus'},
{name:'Office Coordinator',credentials:'',campus:'Lawrence Campus'},
]},
{title:'Lead Teachers',color:'#4CAF50',roles:[
{name:'Lead Teacher',credentials:'NJ P-3 Certified',campus:'Trenton Campus'},
{name:'Lead Teacher',credentials:'NJ P-3 Certified',campus:'Trenton Campus'},
{name:'Lead Teacher',credentials:'NJ P-3 Certified',campus:'Trenton Campus'},
{name:'Lead Teacher',credentials:'NJ P-3 Certified',campus:'Trenton Campus'},
{name:'Lead Teacher',credentials:'NJ CE Certified',campus:'Lawrence Campus'},
{name:'Lead Teacher',credentials:'NJ CE Certified',campus:'Lawrence Campus'},
{name:'Lead Teacher',credentials:'NJ CE Certified',campus:'Lawrence Campus'},
{name:'Lead Teacher',credentials:'NJ CE Certified',campus:'Lawrence Campus'},
]},
{title:'Teacher Assistants',color:'#4BA3E3',roles:[
{name:'Teacher Assistant',credentials:'CDA Credential',campus:'Trenton Campus'},
{name:'Teacher Assistant',credentials:'CDA Credential',campus:'Trenton Campus'},
{name:'Teacher Assistant',credentials:'CDA Credential',campus:'Lawrence Campus'},
{name:'Teacher Assistant',credentials:'CDA Credential',campus:'Lawrence Campus'},
]},
{title:'Support Staff',color:'#F5A623',roles:[
{name:'Food Service Coordinator',credentials:'',campus:'Both Campuses'},
{name:'Custodian',credentials:'',campus:'Trenton Campus'},
{name:'Custodian',credentials:'',campus:'Lawrence Campus'},
]},
];

function Avatar({color}){
return(
<svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
<circle cx='40' cy='40' r='40' fill={color+'15'}/>
<circle cx='40' cy='30' r='12' fill={color+'30'}/>
<ellipse cx='40' cy='58' rx='18' ry='14' fill={color+'30'}/>
</svg>
);
}

export default function OurTeam(){
const[filter,setFilter]=useState('All');
const campuses=['All','Trenton Campus','Lawrence Campus','Both Campuses'];

return(
<div style={{minHeight:'100vh'}}>

<section className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#2A3A5E 50%,#1B4A6B 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 30% 50%,rgba(247,201,72,0.08),transparent 60%),radial-gradient(ellipse at 70% 40%,rgba(75,163,227,0.06),transparent 50%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(247,201,72,0.1)',border:'1px solid rgba(247,201,72,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#F7C948'}}>Our People</span></div>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>Meet Our <span style={{color:'#F5A623'}}>Team</span></h1>
<p className='text-lg' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:550,margin:'0 auto'}}>Dedicated educators and staff committed to giving every child the best start in life.</p>
</div>
</section>

<section className='py-8' style={{background:'#FFFFFF'}}>
<div className='max-w-5xl mx-auto px-4 md:px-8'>
<div className='flex gap-2 justify-center flex-wrap'>
{campuses.map(c=>(
<button key={c} onClick={()=>setFilter(c)} className='px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer' style={{fontFamily:'DM Sans',background:filter===c?'#1B2D5B':'#F3F4F6',color:filter===c?'#FFFFFF':'#6B7280',border:'none'}}>{c}</button>
))}
</div>
</div>
</section>

{categories.map((cat,ci)=>{
const filtered=filter==='All'?cat.roles:cat.roles.filter(r=>r.campus===filter||r.campus==='Both Campuses');
if(filtered.length===0)return null;
return(
<section key={ci} className='py-12 md:py-16' style={{background:ci%2===0?'#FFFFFF':'#F8FAFB'}}>
<div className='max-w-5xl mx-auto px-4 md:px-8'>
<div className='flex items-center gap-3 mb-8'>
<div className='w-1.5 h-8 rounded-full' style={{background:cat.color}}/>
<h2 className='font-bold text-2xl' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{cat.title}</h2>
<div className='text-sm font-semibold px-3 py-1 rounded-full' style={{fontFamily:'DM Sans',background:cat.color+'15',color:cat.color}}>{filtered.length} staff</div>
</div>
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
{filtered.map((person,pi)=>(
<div key={pi} className='text-center p-5 rounded-2xl border hover:shadow-lg transition-all' style={{borderColor:'#e5e7eb',background:'#FFFFFF'}}>
<div className='flex justify-center mb-3'><Avatar color={cat.color}/></div>
<div className='font-bold text-sm mb-0.5' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>Name TBD</div>
<div className='text-xs font-semibold mb-1' style={{fontFamily:'DM Sans',color:cat.color}}>{person.name}</div>
{person.credentials&&<div className='text-xs mb-1' style={{fontFamily:'DM Sans',color:'#9CA3AF'}}>{person.credentials}</div>}
<div className='inline-block px-2 py-0.5 rounded-full text-xs mt-1' style={{fontFamily:'DM Sans',background:'#F3F4F6',color:'#6B7280'}}>{person.campus}</div>
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
fs.writeFileSync(path.join(base, 'app', 'our-team', 'page.jsx'), staffPage);
log.push('CREATED app/our-team/page.jsx - Staff page with 19 placeholder slots, campus filter, SVG avatars');

// ─── 2. SEO LAYOUTS FOR EVERY SUBPAGE ─────────────────────────────────────
const seoPages = {
  'about-us': { title: 'About Us | Laura Spelman Preschool Academy', desc: 'Learn about LSPA, our mission, and over 30 years of free preschool education in Trenton, NJ.' },
  'enrollment': { title: 'Enroll Your Child | Laura Spelman Preschool Academy', desc: 'Free preschool enrollment for Trenton families. Download forms, learn requirements, and start the process.' },
  'careers': { title: 'Careers | Laura Spelman Preschool Academy', desc: 'Join the LSPA team. View current openings for teachers, assistants, and staff at our Trenton and Lawrence campuses.' },
  'gallery': { title: 'Gallery | Laura Spelman Preschool Academy', desc: 'See our classrooms, students, and campuses in action at Laura Spelman Preschool Academy.' },
  'resources': { title: 'Family Resources | Laura Spelman Preschool Academy', desc: 'Helpful links, NJ family support programs, and learning resources for LSPA families.' },
  'our-team': { title: 'Our Team | Laura Spelman Preschool Academy', desc: 'Meet the dedicated teachers, assistants, and staff at Laura Spelman Preschool Academy.' },
  'privacy-policy': { title: 'Privacy Policy | Laura Spelman Preschool Academy', desc: 'FERPA and COPPA compliant privacy policy for Laura Spelman Preschool Academy.' },
};

for (const [folder, meta] of Object.entries(seoPages)) {
  const layoutPath = path.join(base, 'app', folder, 'layout.jsx');
  const layout = `export const metadata = {
  title: '${meta.title}',
  description: '${meta.desc}',
  openGraph: {
    title: '${meta.title}',
    description: '${meta.desc}',
    type: 'website',
    siteName: 'Laura Spelman Preschool Academy',
    url: 'https://lspalearn.org/${folder}',
  },
};

export default function Layout({ children }) {
  return children;
}
`;
  fs.writeFileSync(layoutPath, layout);
}
log.push('CREATED SEO layout.jsx for 7 subpages (title, description, Open Graph)');

// ─── 3. UPDATE ROOT LAYOUT METADATA + STRUCTURED DATA ────────────────────
const rootLayoutPath = path.join(base, 'app', 'layout.jsx');
if (fs.existsSync(rootLayoutPath)) {
  let rootLayout = fs.readFileSync(rootLayoutPath, 'utf8');

  // Add structured data script if not already present
  if (!rootLayout.includes('schema.org')) {
    const structuredData = `
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              "name": "Laura Spelman Preschool Academy",
              "alternateName": "LSPA",
              "url": "https://lspalearn.org",
              "telephone": "+1-609-396-7171",
              "email": "lauraspelmanacademy@verizon.net",
              "description": "Free, high-quality preschool education for Trenton families in partnership with the Trenton Board of Education.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "540 N. Olden Avenue",
                  "addressLocality": "Trenton",
                  "addressRegion": "NJ",
                  "postalCode": "08638",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "1040 Spruce Street",
                  "addressLocality": "Lawrence",
                  "addressRegion": "NJ",
                  "postalCode": "08648",
                  "addressCountry": "US"
                }
              ],
              "sameAs": [],
              "priceRange": "Free",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "07:30",
                "closes": "17:00"
              }
            })
          }}
        />`;

    // Insert before closing </head>
    rootLayout = rootLayout.replace('</head>', structuredData + '\n      </head>');
    fs.writeFileSync(rootLayoutPath, rootLayout);
    log.push('UPDATED layout.jsx - Added Schema.org ChildCare structured data');
  }
}

// ─── 4. SITEMAP ───────────────────────────────────────────────────────────
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://lspalearn.org/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://lspalearn.org/about-us</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://lspalearn.org/enrollment</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://lspalearn.org/our-team</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://lspalearn.org/gallery</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://lspalearn.org/careers</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://lspalearn.org/resources</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://lspalearn.org/privacy-policy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>
`;
fs.writeFileSync(path.join(base, 'public', 'sitemap.xml'), sitemap);
log.push('CREATED public/sitemap.xml');

// ─── 5. ROBOTS.TXT ───────────────────────────────────────────────────────
const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://lspalearn.org/sitemap.xml
`;
fs.writeFileSync(path.join(base, 'public', 'robots.txt'), robots);
log.push('CREATED public/robots.txt');

// ─── 6. 404 PAGE ──────────────────────────────────────────────────────────
const notFound = `import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg,#1B2D5B 0%,#2A3A5E 50%,#3D2A5E 100%)',padding:'2rem'}}>
      <div style={{textAlign:'center',maxWidth:500}}>
        <div style={{fontFamily:'Fredoka',fontSize:'clamp(80px,15vw,160px)',fontWeight:'bold',lineHeight:1,background:'linear-gradient(to right,#F7C948,#F5A623)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>404</div>
        <h1 style={{fontFamily:'Fredoka',color:'#FFFFFF',fontSize:'clamp(20px,3vw,32px)',marginBottom:'0.75rem'}}>Oops! Page Not Found</h1>
        <p style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)',marginBottom:'2rem'}}>The page you are looking for does not exist or has been moved.</p>
        <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
          <Link href='/' style={{padding:'0.85rem 2.5rem',background:'linear-gradient(to right,#F7C948,#F5A623)',borderRadius:'999px',color:'#0F1D3D',fontFamily:'Fredoka',fontWeight:'bold',textDecoration:'none',fontSize:'1rem'}}>Go Home</Link>
          <Link href='/enrollment' style={{padding:'0.85rem 2.5rem',border:'2px solid rgba(255,255,255,0.3)',borderRadius:'999px',color:'#FFFFFF',fontFamily:'Fredoka',fontWeight:'bold',textDecoration:'none',fontSize:'1rem'}}>Enroll Now</Link>
        </div>
      </div>
    </div>
  );
}
`;
fs.writeFileSync(path.join(base, 'app', 'not-found.jsx'), notFound);
log.push('CREATED app/not-found.jsx - Branded 404 page');

// ─── 7. ACTIVE NAV HIGHLIGHT ──────────────────────────────────────────────
const navPath = path.join(base, 'app', 'components', 'Nav.jsx');
if (fs.existsSync(navPath)) {
  const nav = `'use client';
import{useState,useEffect}from'react';
import{usePathname}from'next/navigation';
import Link from'next/link';

const links=[
{label:'Home',href:'/'},
{label:'About',href:'/about-us'},
{label:'Programs',href:'/#programs'},
{label:'Locations',href:'/#locations'},
{label:'Resources',href:'/resources'},
{label:'Contact',href:'/#contact'},
];

export default function Nav(){
const pathname=usePathname();
const[scrolled,setScrolled]=useState(false);
const[menuOpen,setMenuOpen]=useState(false);

useEffect(()=>{
const h=()=>setScrolled(window.scrollY>20);
window.addEventListener('scroll',h);
return()=>window.removeEventListener('scroll',h);
},[]);

useEffect(()=>{
if(menuOpen)document.body.style.overflow='hidden';
else document.body.style.overflow='';
return()=>{document.body.style.overflow='';};
},[menuOpen]);

const isActive=(href)=>{
if(href==='/')return pathname==='/';
if(href.startsWith('/#'))return pathname==='/';
return pathname.startsWith(href);
};

return(
<>
{/* Top bar */}
<div className='w-full text-center py-1.5 text-xs md:text-sm relative z-50' style={{background:'#0F1D3D',color:'rgba(255,255,255,0.8)',fontFamily:'DM Sans'}}>
<div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
<span style={{color:'#F7C948',fontWeight:600}}>Where Little Dreams Grow Into Big Futures</span>
<a href='tel:6093967171' className='font-bold hover:underline' style={{color:'#F7C948'}}>(609) 396-7171</a>
</div>
</div>

{/* Main nav */}
<nav className={'sticky top-0 z-40 transition-all duration-300 '+(scrolled?'shadow-lg':'')} style={{background:'#FFFDF7',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>
<div className='max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between' style={{height:72}}>

{/* Logo */}
<Link href='/' className='flex items-center gap-3' style={{textDecoration:'none'}}>
<img src='/images/lspa-logo-white.jpeg' alt='LSPA' style={{width:44,height:44,borderRadius:10,objectFit:'contain'}}/>
<div>
<div className='font-bold text-base leading-tight' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>Laura Spelman</div>
<div className='text-xs font-bold tracking-[2px] uppercase' style={{color:'#F5A623'}}>Preschool Academy</div>
</div>
</Link>

{/* Desktop links */}
<div className='hidden lg:flex items-center gap-1'>
{links.map(l=>(
<a key={l.label} href={l.href} className='px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200' style={{fontFamily:'DM Sans',color:isActive(l.href)?'#1B2D5B':'#6B7280',background:isActive(l.href)?'rgba(27,45,91,0.06)':'transparent',borderBottom:isActive(l.href)?'2px solid #F5A623':'2px solid transparent'}}>{l.label}</a>
))}
<a href='/enrollment' className='ml-2 px-5 py-2 rounded-full font-bold text-sm shadow-lg' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none'}}>Enroll Now</a>
</div>

{/* Mobile hamburger */}
<button onClick={()=>setMenuOpen(!menuOpen)} className='lg:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer' style={{background:'none',border:'none',gap:5}}>
<span className='block h-0.5 w-6 rounded-full transition-all duration-300' style={{background:'#1B2D5B',transform:menuOpen?'rotate(45deg) translate(4px,4px)':'none'}}/>
<span className='block h-0.5 w-6 rounded-full transition-all duration-300' style={{background:'#1B2D5B',opacity:menuOpen?0:1}}/>
<span className='block h-0.5 w-6 rounded-full transition-all duration-300' style={{background:'#1B2D5B',transform:menuOpen?'rotate(-45deg) translate(4px,-4px)':'none'}}/>
</button>
</div>
</nav>

{/* Mobile menu overlay */}
{menuOpen&&(
<div className='fixed inset-0 z-30' style={{background:'rgba(15,29,61,0.97)',paddingTop:120}} onClick={()=>setMenuOpen(false)}>
<div className='flex flex-col items-center gap-1' onClick={e=>e.stopPropagation()}>
{links.map(l=>(
<a key={l.label} href={l.href} onClick={()=>setMenuOpen(false)} className='block py-3 px-4 rounded-xl text-sm font-semibold transition-all mb-1' style={{fontFamily:'DM Sans',background:isActive(l.href)?'linear-gradient(135deg,#2e7d52,#48a870)':'transparent',color:isActive(l.href)?'#fff':'#fff',minWidth:200,textAlign:'center',textDecoration:'none'}}>{l.label}</a>
))}
<div style={{width:'100%',height:1,background:'#e8efe9',margin:'16px 0'}}/>
<a href='/enrollment' onClick={()=>setMenuOpen(false)} className='block text-center py-3 rounded-full font-bold text-sm shadow-lg' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none',minWidth:200}}>Enroll Now</a>
<a href='tel:6093967171' className='block text-center mt-3 py-3 rounded-full font-bold text-sm border-2' style={{fontFamily:'Fredoka',borderColor:'#d4edda',color:'#2e7d52',textDecoration:'none',minWidth:200}}>Call (609) 396-7171</a>
</div>
</div>
)}
</>
);}
`;
  fs.writeFileSync(navPath, nav);
  log.push('UPDATED Nav.jsx - Active page highlight (gold underline), hamburger menu, usePathname routing');
}

// ─── 8. UPDATE FOOTER WITH OUR TEAM LINK ──────────────────────────────────
const footerPath = path.join(base, 'app', 'components', 'Footer.jsx');
if (fs.existsSync(footerPath)) {
  let footer = fs.readFileSync(footerPath, 'utf8');
  if (!footer.includes('our-team')) {
    footer = footer.replace(
      '{l:"Careers",h:"/careers"}',
      '{l:"Our Team",h:"/our-team"},{l:"Careers",h:"/careers"}'
    );
    fs.writeFileSync(footerPath, footer);
    log.push('UPDATED Footer.jsx - Added Our Team to Quick Links');
  }
}

// ─── SUMMARY ──────────────────────────────────────────────────────────────
console.log('');
console.log('========================================');
console.log('  LSPA SITE UPGRADE COMPLETE');
console.log('========================================');
console.log('');
log.forEach(l => console.log('  ' + l));
console.log('');
console.log('  NEW PAGES:');
console.log('    /our-team - Staff directory with 19 placeholder slots');
console.log('    /not-found - Branded 404 page');
console.log('');
console.log('  SEO FILES:');
console.log('    public/sitemap.xml');
console.log('    public/robots.txt');
console.log('    Schema.org structured data in root layout');
console.log('    Open Graph metadata on all 7 subpages');
console.log('');
console.log('  STILL NEEDED (from you):');
console.log('    - Social media URLs (Facebook, Instagram, YouTube, TikTok)');
console.log('    - Staff names and photos when ready');
console.log('    - School calendar dates for Resources page');
console.log('    - Favicon image file (place in public/ as favicon.ico)');
console.log('');
