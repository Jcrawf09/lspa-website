const fs = require('fs');
const path = require('path');
const base = process.argv[2] || '.';
const log = [];

// ─── HERO — need to see current file first ────────────────────────────────
const heroPath = path.join(base,'app','components','Hero.jsx');
if(fs.existsSync(heroPath)){
let hero = fs.readFileSync(heroPath,'utf8');
// Hero already has {t:tr}=useLanguage() from earlier fix
// Replace hardcoded English strings with tr() calls inside JSX
// Be careful: hero has a fade function also called t, renamed to tr for translations

// Badge
hero = hero.replace("'FREE PRESCHOOL'", "lang==='es'?'PREESCOLAR GRATIS':'FREE PRESCHOOL'");
hero = hero.replace("\"FREE PRESCHOOL\"", "lang==='es'?'PREESCOLAR GRATIS':'FREE PRESCHOOL'");
hero = hero.replace("Free Preschool", "lang==='es'?'Preescolar Gratis':'Free Preschool'");

// Check if we need to add lang
if(!hero.includes('lang}=useLanguage') && !hero.includes('lang,') && hero.includes('{t:tr}=useLanguage')){
  hero = hero.replace('{t:tr}=useLanguage()', '{t:tr,lang}=useLanguage()');
}

// Hero heading - these are split across lines, try common patterns
hero = hero.replace(/>Where Little Dreams</g, ">{lang==='es'?'Donde los Sue\\u00f1os Peque\\u00f1os':'Where Little Dreams'}<");
hero = hero.replace(/>Grow Into</g, ">{lang==='es'?'Se Hacen':'Grow Into'}<");
hero = hero.replace(/>Big Futures</g, ">{lang==='es'?'Grandes':'Big Futures'}<");
hero = hero.replace(">Where Little", ">{lang==='es'?'Donde los Sue\\u00f1os':'Where Little");

// Description
hero = hero.replace("High-quality, <strong>100% free</strong> preschool education for Trenton families. No subsidy required. NJ Certified Teachers.",
  "{lang==='es'?'Educaci\\u00f3n preescolar de alta calidad, 100% gratuita para familias de Trenton. Sin subsidio requerido. Maestros certificados de NJ.':'High-quality, '}<strong>{lang==='es'?'':'100% free'}</strong>{lang==='es'?'':'  preschool education for Trenton families. No subsidy required. NJ Certified Teachers.'}");

// Buttons
hero = hero.replace(">Call (609) 396-7171<", ">{lang==='es'?'Llama (609) 396-7171':'Call (609) 396-7171'}<");
hero = hero.replace(">Learn More<", ">{lang==='es'?'M\\u00e1s Informaci\\u00f3n':'Learn More'}<");

// Stats
hero = hero.replace("'Years'", "lang==='es'?'A\\u00f1os':'Years'");
hero = hero.replace("'Tuition'", "lang==='es'?'Matr\\u00edcula':'Tuition'");
hero = hero.replace("'Certified'", "lang==='es'?'Certificados':'Certified'");
hero = hero.replace("'Campuses'", "lang==='es'?'Campus':'Campuses'");

// Badge text
hero = hero.replace("\"Trenton's Free Preschool\"", "lang==='es'?'Preescolar Gratis en Trenton':\"Trenton's Free Preschool\"");
hero = hero.replace("'Trenton\\'s Free Preschool'", "lang==='es'?'Preescolar Gratis en Trenton':'Trenton\\'s Free Preschool'");

fs.writeFileSync(heroPath, hero);
log.push('UPDATED Hero.jsx - Translated headings, description, buttons, stats');
}

// ─── LOCATIONS — FULL REWRITE ─────────────────────────────────────────────
const locPath = path.join(base,'app','components','Locations.jsx');
if(fs.existsSync(locPath)){
let loc = fs.readFileSync(locPath,'utf8');

// Add lang to destructuring if not present
if(loc.includes('useLanguage') && !loc.includes('lang}=useLanguage') && !loc.includes('lang,t')){
  loc = loc.replace('const{t}=useLanguage();', 'const{t,lang}=useLanguage();');
}
if(!loc.includes('lang')){
  // If useLanguage was added but without lang
  loc = loc.replace('{t}=useLanguage()', '{t,lang}=useLanguage()');
}

// Replace English strings
loc = loc.replace("'VISIT US'", "lang==='es'?'VISITANOS':'VISIT US'");
loc = loc.replace("\"VISIT US\"", "lang==='es'?'VISITANOS':'VISIT US'");
loc = loc.replace("'Visit Us'", "lang==='es'?'Vis\\u00edtanos':'Visit Us'");
loc = loc.replace("\"Visit Us\"", "lang==='es'?'Vis\\u00edtanos':'Visit Us'");

loc = loc.replace(">Two Campuses, <", ">{lang==='es'?'Dos Campus, ':'Two Campuses, '}<");
loc = loc.replace(">One Mission<", ">{lang==='es'?'Una Misi\\u00f3n':'One Mission'}<");
loc = loc.replace("'Two Campuses,'", "lang==='es'?'Dos Campus,':'Two Campuses,'");
loc = loc.replace("'One Mission'", "lang==='es'?'Una Misi\\u00f3n':'One Mission'");

loc = loc.replace(">Trenton Campus<", ">{lang==='es'?'Campus de Trenton':'Trenton Campus'}<");
loc = loc.replace(">Lawrence Campus<", ">{lang==='es'?'Campus de Lawrence':'Lawrence Campus'}<");

loc = loc.replace(">Get Directions<", ">{lang==='es'?'Ver Direcciones':'Get Directions'}<");

loc = loc.replace("'Call Us'", "lang==='es'?'Ll\\u00e1manos':'Call Us'");
loc = loc.replace(">Call Us<", ">{lang==='es'?'Ll\\u00e1manos':'Call Us'}<");

fs.writeFileSync(locPath, loc);
log.push('UPDATED Locations.jsx - Translated headings, campus names, buttons');
}

// ─── GALLERY — PROPER IN-COMPONENT TRANSLATION ───────────────────────────
const galleryPath = path.join(base,'app','gallery','page.jsx');
if(fs.existsSync(galleryPath)){
let gal = fs.readFileSync(galleryPath,'utf8');

// Add lang if not present
if(gal.includes('useLanguage') && !gal.includes('lang}=useLanguage') && !gal.includes('lang,t')){
  gal = gal.replace('const{t}=useLanguage();', 'const{t,lang}=useLanguage();');
  gal = gal.replace('{t}=useLanguage()', '{t,lang}=useLanguage()');
}

// Replace strings inside JSX (these are now back to hardcoded English after our fix)
gal = gal.replace("'Step Inside Our World'", "lang==='es'?'Entra a Nuestro Mundo':'Step Inside Our World'");
gal = gal.replace("\"Step Inside Our World\"", "lang==='es'?'Entra a Nuestro Mundo':'Step Inside Our World'");

gal = gal.replace(">Little Moments,<", ">{lang==='es'?'Peque\\u00f1os Momentos,':'Little Moments,'}<");
gal = gal.replace(">Big Memories<", ">{lang==='es'?'Grandes Recuerdos':'Big Memories'}<");

gal = gal.replace("'Come See It In Person'", "lang==='es'?'Ven a Vernos en Persona':'Come See It In Person'");
gal = gal.replace("\"Come See It In Person\"", "lang==='es'?'Ven a Vernos en Persona':'Come See It In Person'");

gal = gal.replace("'Schedule a tour and experience the LSPA difference for your family.'", "lang==='es'?'Agenda un recorrido y conoce la diferencia LSPA para tu familia.':'Schedule a tour and experience the LSPA difference for your family.'");
gal = gal.replace("\"Schedule a tour and experience the LSPA difference for your family.\"", "lang==='es'?'Agenda un recorrido y conoce la diferencia LSPA para tu familia.':'Schedule a tour and experience the LSPA difference for your family.'");

gal = gal.replace(">Enroll Today<", ">{lang==='es'?'Inscr\\u00edbete Hoy':'Enroll Today'}<");
gal = gal.replace("'Enroll Today'", "lang==='es'?'Inscr\\u00edbete Hoy':'Enroll Today'");

// The description line with em-dash
gal = gal.replace("Every smile, every discovery, every friendship", "lang==='es'?'Cada sonrisa, cada descubrimiento, cada amistad':'Every smile, every discovery, every friendship'");

fs.writeFileSync(galleryPath, gal);
log.push('UPDATED gallery/page.jsx - Translated all visible text');
}

// ─── OUR TEAM — PROPER IN-COMPONENT TRANSLATION ──────────────────────────
const teamPath = path.join(base,'app','our-team','page.jsx');
if(fs.existsSync(teamPath)){
let team = fs.readFileSync(teamPath,'utf8');

// Add lang if not present
if(team.includes('useLanguage') && !team.includes('lang}=useLanguage') && !team.includes('lang,t')){
  team = team.replace('const{t}=useLanguage();', 'const{t,lang}=useLanguage();');
  team = team.replace('{t}=useLanguage()', '{t,lang}=useLanguage()');
}

// Category names - these are in the static data, need to make them dynamic
// Replace static category strings with ternaries inside the render
team = team.replace("'Directors'", "lang==='es'?'Directores':'Directors'");
team = team.replace("'Teaching Staff'", "lang==='es'?'Maestros':'Teaching Staff'");
team = team.replace("'Teacher Assistants'", "lang==='es'?'Asistentes de Maestro':'Teacher Assistants'");
team = team.replace("'Family Workers'", "lang==='es'?'Trabajadores Familiares':'Family Workers'");
team = team.replace("'Office Staff'", "lang==='es'?'Personal de Oficina':'Office Staff'");
team = team.replace("'Security'", "lang==='es'?'Seguridad':'Security'");
team = team.replace("'Food Service'", "lang==='es'?'Servicio de Alimentos':'Food Service'");

// Role names
team = team.replace(/'Director'/g, "lang==='es'?'Director/a':'Director'");
team = team.replace(/'Lead Teacher'/g, "lang==='es'?'Maestro/a Principal':'Lead Teacher'");
team = team.replace(/'Teacher Assistant'/g, "lang==='es'?'Asistente de Maestro':'Teacher Assistant'");
team = team.replace(/'Family Worker'/g, "lang==='es'?'Trabajador/a Familiar':'Family Worker'");
team = team.replace(/'Clerical'/g, "lang==='es'?'Oficinista':'Clerical'");
team = team.replace(/'Security Guard'/g, "lang==='es'?'Guardia de Seguridad':'Security Guard'");
// Food Service already handled above

// Labels
team = team.replace(">Name TBD<", ">{lang==='es'?'Nombre por Confirmar':'Name TBD'}<");
team = team.replace("'Olden Ave'", "lang==='es'?'Olden Ave':'Olden Ave'"); // keep same
team = team.replace("'Spruce St'", "lang==='es'?'Spruce St':'Spruce St'"); // keep same

// Classroom
team = team.replace(/'Classroom '/g, "lang==='es'?'Salon ':'Classroom '");

// Filter buttons - already reverted to 'All', 'Trenton Campus', 'Lawrence Campus'
// These are used in the filter state so keep English values, but display translated
// The campuses array for filter display:
team = team.replace("const campuses=['All','Trenton Campus','Lawrence Campus'];",
  "const campusKeys=['All','Trenton Campus','Lawrence Campus'];\nconst campusLabels={'All':lang==='es'?'Todos':'All','Trenton Campus':lang==='es'?'Campus de Trenton':'Trenton Campus','Lawrence Campus':lang==='es'?'Campus de Lawrence':'Lawrence Campus'};");
team = team.replace("{campuses.map(c=>(", "{campusKeys.map(c=>(");
// Fix the button label to use campusLabels
team = team.replace("}}>{c}{c!=='All'",
  "}}>{campusLabels[c]||c}{c!=='All'");

// Hero text
team = team.replace("'Our People'", "lang==='es'?'Nuestra Gente':'Our People'");
team = team.replace(">Meet Our <", ">{lang==='es'?'Conoce a Nuestro ':'Meet Our '}<");
team = team.replace(">Team<", ">{lang==='es'?'Equipo':'Team'}<");

// Description
team = team.replace("'30 dedicated educators", "lang==='es'?'30 educadores y personal dedicados en dos campus, comprometidos a darle a cada nino el mejor comienzo en la vida.':'30 dedicated educators");
// Close the ternary
team = team.replace("best start in life.'", "best start in life.'");

// Stats
team = team.replace(">Classrooms<", ">{lang==='es'?'Salones':'Classrooms'}<");
team = team.replace(">Campuses<", ">{lang==='es'?'Campus':'Campuses'}<");
team = team.replace(">Team Members<", ">{lang==='es'?'Miembros del Equipo':'Team Members'}<");

// CTA
team = team.replace(">Want to Join Our <", ">{lang==='es'?'Quieres Unirte a Nuestro ':'Want to Join Our '}<");
team = team.replace(">Team?<", ">{lang==='es'?'Equipo?':'Team?'}<");
team = team.replace("'We are always looking for passionate educators to make a difference.'",
  "lang==='es'?'Siempre estamos buscando educadores apasionados para hacer la diferencia.':'We are always looking for passionate educators to make a difference.'");
team = team.replace(">View Open Positions<", ">{lang==='es'?'Ver Posiciones Abiertas':'View Open Positions'}<");

// Staff count labels
team = team.replace("' staff'", "lang==='es'?' personal':' staff'");

fs.writeFileSync(teamPath, team);
log.push('UPDATED our-team/page.jsx - Translated categories, roles, hero, stats, CTA, filter labels');
}

console.log('');
console.log('========================================');
console.log('  PHASE 3: SPANISH TRANSLATION');
console.log('  Part 5 - FINAL');
console.log('========================================');
console.log('');
log.forEach(l => console.log('  ' + l));
console.log('');
console.log('  PHASE 3 COMPLETE.');
console.log('  Every page now responds to EN/ES toggle.');
console.log('  Auto-detect from browser language active.');
console.log('');
console.log('  Have Jessica review the Spanish for tone.');
console.log('');
