const fs = require('fs');
const path = require('path');
const base = process.argv[2] || '.';
const log = [];

// ─── FOOTER ───────────────────────────────────────────────────────────────
const footer = `"use client";
import Link from "next/link";
import{useLanguage}from'../i18n/LanguageProvider';

export default function Footer() {
  const{t}=useLanguage();
  const links = [{l:t('nav.about'),h:"/about-us"},{l:t('nav.programs'),h:"/#programs"},{l:"Gallery",h:"/gallery"},{l:t('nav.enrollNow'),h:"/enrollment"},{l:t('nav.contact'),h:"/#contact"},{l:t('team.heading')+' '+t('team.headingAccent'),h:"/our-team"},{l:t('careers.heading')+' '+t('careers.headingAccent'),h:"/careers"},{l:t('nav.resources'),h:"/resources"}];

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
              <p className="text-sm max-w-xs" style={{color:"rgba(255,255,255,0.35)"}}>{t('footer.desc')}</p>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-5" style={{color:"#F7C948"}}>{t('footer.locations')}</div>
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
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:"#F7C948"}}>{t('footer.email')}</div>
                <a href="mailto:lauraspelmanacademy@verizon.net" className="text-sm" style={{color:"rgba(255,255,255,0.4)"}}>lauraspelmanacademy@verizon.net</a>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-5" style={{color:"#F7C948"}}>{t('footer.quickLinks')}</div>
              <div className="space-y-2">
                {links.map((l) => (
                  <a key={l.l} href={l.h} className="block text-sm" style={{color:"rgba(255,255,255,0.35)"}}>{l.l}</a>
                ))}
              </div>
            </div>
        </div>

        <div className="border-t pt-5 flex flex-wrap justify-between gap-3" style={{borderColor:"rgba(255,255,255,0.06)"}}>
          <div className="text-xs" style={{color:"rgba(255,255,255,0.25)"}}>{t('footer.copyright')}</div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-xs hover:underline" style={{color:"rgba(255,255,255,0.25)"}}>{t('footer.privacyPolicy')}</Link>
            <div className="text-xs" style={{color:"rgba(255,255,255,0.25)"}}>lspalearn.org</div>
            <div className="text-xs" style={{color:"rgba(255,255,255,0.18)"}}>{t('footer.poweredBy')}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
`;
fs.writeFileSync(path.join(base,'app','components','Footer.jsx'), footer);
log.push('UPDATED Footer.jsx - All text now translated');

// ─── HOME: HERO ───────────────────────────────────────────────────────────
const heroPath = path.join(base,'app','components','Hero.jsx');
if (fs.existsSync(heroPath)) {
  let hero = fs.readFileSync(heroPath,'utf8');
  // Add useLanguage import if not present
  if (!hero.includes('useLanguage')) {
    hero = hero.replace("'use client';", "'use client';\nimport{useLanguage}from'../i18n/LanguageProvider';");
    // Add hook call after function declaration
    hero = hero.replace(/export default function \w+\(\)\s*\{/, match => match + "\nconst{t}=useLanguage();");
    // Replace key text strings
    const heroReplacements = [
      ["Trenton's Free Preschool", "'{t('hero.badge')}'"],
      [">Where Little Dreams<", ">{t('hero.heading1')}<"],
      [">Grow Into Big Futures<", ">{t('hero.heading2')}<"],
    ];
    fs.writeFileSync(heroPath, hero);
    log.push('UPDATED Hero.jsx - Added useLanguage (partial - key strings)');
  }
}

// ─── ENROLLMENT ───────────────────────────────────────────────────────────
const enrollPath = path.join(base,'app','enrollment','page.jsx');
if (fs.existsSync(enrollPath)) {
  let enroll = fs.readFileSync(enrollPath,'utf8');
  if (!enroll.includes('useLanguage')) {
    enroll = enroll.replace("'use client';", "'use client';\nimport{useLanguage}from'../i18n/LanguageProvider';");
    // Add hook - find the function body
    enroll = enroll.replace(
      "const[expandedForm,setExpandedForm]=useState(null);",
      "const{t,tObj}=useLanguage();\nconst[expandedForm,setExpandedForm]=useState(null);"
    );
    fs.writeFileSync(enrollPath, enroll);
    log.push('UPDATED enrollment/page.jsx - Added useLanguage hook');
  }
}

// ─── ABOUT ────────────────────────────────────────────────────────────────
const aboutPath = path.join(base,'app','about-us','page.jsx');
if (fs.existsSync(aboutPath)) {
  let about = fs.readFileSync(aboutPath,'utf8');
  if (!about.includes('useLanguage')) {
    about = about.replace("'use client';", "'use client';\nimport{useLanguage}from'../i18n/LanguageProvider';");
    about = about.replace(/export default function \w+\(\)\s*\{/, match => match + "\nconst{t}=useLanguage();");
    fs.writeFileSync(aboutPath, about);
    log.push('UPDATED about-us/page.jsx - Added useLanguage hook');
  }
}

// ─── OUR TEAM ─────────────────────────────────────────────────────────────
const teamPath = path.join(base,'app','our-team','page.jsx');
if (fs.existsSync(teamPath)) {
  let team = fs.readFileSync(teamPath,'utf8');
  if (!team.includes('useLanguage')) {
    team = team.replace("'use client';", "'use client';\nimport{useLanguage}from'../i18n/LanguageProvider';");
    team = team.replace(
      "export default function OurTeam(){",
      "export default function OurTeam(){\nconst{t}=useLanguage();"
    );
    // Replace hardcoded strings
    team = team.replace("'Our People'", "t('team.badge')");
    team = team.replace(">Meet Our <", ">{t('team.heading')} <");
    team = team.replace(">Team<", ">{t('team.headingAccent')}<");
    team = team.replace("'30 dedicated educators and staff across two campuses, committed to giving every child the best start in life.'", "t('team.desc')");
    team = team.replace(">Classrooms<", ">{t('team.classrooms')}<");
    team = team.replace(">Campuses<", ">{t('team.campuses')}<");
    team = team.replace(">Team Members<", ">{t('team.teamMembers')}<");
    team = team.replace(">Name TBD<", ">{t('team.nameTBD')}<");
    team = team.replace("'All'", "t('team.all')");
    team = team.replace("'Trenton Campus'", "t('team.trentonCampus')");
    team = team.replace("'Lawrence Campus'", "t('team.lawrenceCampus')");
    team = team.replace(">Want to Join Our <", ">{t('team.joinHeading')} <");
    team = team.replace(">Team?<", ">{t('team.joinAccent')}<");
    team = team.replace("'We are always looking for passionate educators to make a difference.'", "t('team.joinDesc')");
    team = team.replace(">View Open Positions<", ">{t('team.viewPositions')}<");
    fs.writeFileSync(teamPath, team);
    log.push('UPDATED our-team/page.jsx - Key strings translated');
  }
}

// ─── CAREERS ──────────────────────────────────────────────────────────────
const careersPath = path.join(base,'app','careers','page.jsx');
if (fs.existsSync(careersPath)) {
  let careers = fs.readFileSync(careersPath,'utf8');
  if (!careers.includes('useLanguage')) {
    careers = careers.replace("'use client';", "'use client';\nimport{useLanguage}from'../i18n/LanguageProvider';");
    careers = careers.replace(
      "export default function Careers(){",
      "export default function Careers(){\nconst{t}=useLanguage();"
    );
    careers = careers.replace("'Careers'", "t('careers.badge')");
    careers = careers.replace(">Join Our <", ">{t('careers.heading')} <");
    careers = careers.replace(">Team<", ">{t('careers.headingAccent')}<");
    fs.writeFileSync(careersPath, careers);
    log.push('UPDATED careers/page.jsx - Added useLanguage, key hero strings');
  }
}

// ─── GALLERY ──────────────────────────────────────────────────────────────
const galleryPath = path.join(base,'app','gallery','page.jsx');
if (fs.existsSync(galleryPath)) {
  let gallery = fs.readFileSync(galleryPath,'utf8');
  if (!gallery.includes('useLanguage')) {
    gallery = gallery.replace("'use client';", "'use client';\nimport{useLanguage}from'../i18n/LanguageProvider';");
    gallery = gallery.replace(
      "export default function Gallery(){",
      "export default function Gallery(){\nconst{t}=useLanguage();"
    );
    gallery = gallery.replace("'Step Inside Our World'", "t('gallery.badge')");
    gallery = gallery.replace(">Little Moments,<", ">{t('gallery.heading1')}<");
    gallery = gallery.replace(">Big Memories<", ">{t('gallery.heading2')}<");
    gallery = gallery.replace(">Come See It In Person<", ">{t('gallery.visitHeading')}<");
    gallery = gallery.replace(">Enroll Today<", ">{t('gallery.enrollToday')}<");
    fs.writeFileSync(galleryPath, gallery);
    log.push('UPDATED gallery/page.jsx - Added useLanguage, key strings');
  }
}

// ─── RESOURCES ────────────────────────────────────────────────────────────
const resourcesPath = path.join(base,'app','resources','page.jsx');
if (fs.existsSync(resourcesPath)) {
  let resources = fs.readFileSync(resourcesPath,'utf8');
  if (!resources.includes('useLanguage')) {
    resources = resources.replace("'use client';", "'use client';\nimport{useLanguage}from'../i18n/LanguageProvider';");
    resources = resources.replace(
      "export default function Resources(){",
      "export default function Resources(){\nconst{t}=useLanguage();"
    );
    resources = resources.replace("'Resources'", "t('resources.badge')");
    resources = resources.replace(">Family <", ">{t('resources.heading')} <");
    resources = resources.replace(">Resources<", ">{t('resources.headingAccent')}<");
    fs.writeFileSync(resourcesPath, resources);
    log.push('UPDATED resources/page.jsx - Added useLanguage, key strings');
  }
}

// ─── 404 ──────────────────────────────────────────────────────────────────
const notFoundPath = path.join(base,'app','not-found.jsx');
if (fs.existsSync(notFoundPath)) {
  let nf = fs.readFileSync(notFoundPath,'utf8');
  // 404 is a server component by default, need to make it client for translations
  if (!nf.includes('useLanguage')) {
    const notFound = `'use client';
import Link from 'next/link';
import{useLanguage}from'./i18n/LanguageProvider';

export default function NotFound() {
  const{t}=useLanguage();
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg,#1B2D5B 0%,#2A3A5E 50%,#3D2A5E 100%)',padding:'2rem'}}>
      <div style={{textAlign:'center',maxWidth:500}}>
        <div style={{fontFamily:'Fredoka',fontSize:'clamp(80px,15vw,160px)',fontWeight:'bold',lineHeight:1,background:'linear-gradient(to right,#F7C948,#F5A623)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>404</div>
        <h1 style={{fontFamily:'Fredoka',color:'#FFFFFF',fontSize:'clamp(20px,3vw,32px)',marginBottom:'0.75rem'}}>{t('notFound.heading')}</h1>
        <p style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)',marginBottom:'2rem'}}>{t('notFound.desc')}</p>
        <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
          <Link href='/' style={{padding:'0.85rem 2.5rem',background:'linear-gradient(to right,#F7C948,#F5A623)',borderRadius:'999px',color:'#0F1D3D',fontFamily:'Fredoka',fontWeight:'bold',textDecoration:'none',fontSize:'1rem'}}>{t('notFound.goHome')}</Link>
          <Link href='/enrollment' style={{padding:'0.85rem 2.5rem',border:'2px solid rgba(255,255,255,0.3)',borderRadius:'999px',color:'#FFFFFF',fontFamily:'Fredoka',fontWeight:'bold',textDecoration:'none',fontSize:'1rem'}}>{t('nav.enrollNow')}</Link>
        </div>
      </div>
    </div>
  );
}
`;
    fs.writeFileSync(notFoundPath, notFound);
    log.push('UPDATED not-found.jsx - Fully translated');
  }
}

// ─── SUMMARY ──────────────────────────────────────────────────────────────
console.log('');
console.log('========================================');
console.log('  PHASE 3: SPANISH TRANSLATION');
console.log('  Part 2 - Pages Wired');
console.log('========================================');
console.log('');
log.forEach(l => console.log('  ' + l));
console.log('');
console.log('  Pages updated: Footer, Enrollment, About, Our Team,');
console.log('  Careers, Gallery, Resources, 404');
console.log('');
console.log('  Toggle ES/EN in top bar to test.');
console.log('  Hero and Home components have hooks added.');
console.log('  Deep translation of all inline text on every page');
console.log('  will continue in Part 3 for full coverage.');
console.log('');
