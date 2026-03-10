const fs = require('fs');

// ── 1. RESOURCES — add Learning Games to Learning at Home ──────────────────
let r = fs.readFileSync('app/resources/page.jsx', 'utf8');

// English section — add after Trenton Free Public Library
const oldEN = `{name:'Trenton Free Public Library',desc:'Free books, programs, and digital resources',link:'https://www.trentonfpl.org',type:'external'},
  ]},
];`;

const newEN = `{name:'Trenton Free Public Library',desc:'Free books, programs, and digital resources',link:'https://www.trentonfpl.org',type:'external'},
    {name:'LSPA Learning Games',desc:'ABC · Colors · Counting — play right here on the LSPA site',link:'/learn',type:'internal'},
  ]},
];`;

// Spanish section — add after Biblioteca Publica de Trenton
const oldES = `{name:'Biblioteca Publica de Trenton',desc:'Libros gratis, programas y recursos digitales',link:'https://www.trentonfpl.org',type:'external'},
  ]},
];`;

const newES = `{name:'Biblioteca Publica de Trenton',desc:'Libros gratis, programas y recursos digitales',link:'https://www.trentonfpl.org',type:'external'},
    {name:'Juegos de Aprendizaje LSPA',desc:'ABC · Colores · Contar — juega aqui mismo en el sitio de LSPA',link:'/learn',type:'internal'},
  ]},
];`;

if (r.includes(oldEN)) {
  r = r.replace(oldEN, newEN);
  console.log('EN Learning Games added.');
} else { console.error('EN target not found.'); }

if (r.includes(oldES)) {
  r = r.replace(oldES, newES);
  console.log('ES Learning Games added.');
} else { console.error('ES target not found.'); }

// Handle the internal link type in the render — add a case for type:'internal'
const oldRender = `return(
                    <a key={j} href={item.link} target='_blank' rel='noopener noreferrer'
                      className='block p-5 rounded-2xl border bg-white hover:shadow-lg transition-all' style={{borderColor:'#e5e7eb',textDecoration:'none'}}>
                      <div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1rem'}}>{item.name}</div>
                      <div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem'}}>{item.desc}</div>
                      <div className='mt-2 text-xs font-semibold' style={{color:'#F7C948'}}>&#8599; {t('resources.externalLink')}</div>
                    </a>
                  );`;

const newRender = `if(item.type==='internal'){
                    return(
                      <a key={j} href={item.link}
                        className='block p-5 rounded-2xl border bg-white hover:shadow-lg transition-all' style={{borderColor:'rgba(75,163,227,0.35)',textDecoration:'none',background:'linear-gradient(135deg,rgba(75,163,227,0.05),rgba(34,197,94,0.04))'}}>
                        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:4}}>
                          <span style={{fontSize:'1.4rem'}}>🎮</span>
                          <div className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1rem'}}>{item.name}</div>
                        </div>
                        <div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem',marginBottom:8}}>{item.desc}</div>
                        <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(75,163,227,0.1)',border:'1px solid rgba(75,163,227,0.3)',borderRadius:999,padding:'4px 12px'}}>
                          <span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#4BA3E3'}}>{lang==='es'?'Jugar ahora ▶':'Play now ▶'}</span>
                        </div>
                      </a>
                    );
                  }
                  return(
                    <a key={j} href={item.link} target='_blank' rel='noopener noreferrer'
                      className='block p-5 rounded-2xl border bg-white hover:shadow-lg transition-all' style={{borderColor:'#e5e7eb',textDecoration:'none'}}>
                      <div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1rem'}}>{item.name}</div>
                      <div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem'}}>{item.desc}</div>
                      <div className='mt-2 text-xs font-semibold' style={{color:'#F7C948'}}>&#8599; {t('resources.externalLink')}</div>
                    </a>
                  );`;

if (r.includes(oldRender)) {
  r = r.replace(oldRender, newRender);
  console.log('Internal link render case added.');
} else { console.error('Render target not found.'); }

fs.writeFileSync('app/resources/page.jsx', r, 'utf8');
console.log('Resources page updated.');

// ── 2. FOOTER — remove all PLC / Madison Thomas references ────────────────
let f = fs.readFileSync('app/components/Footer.jsx', 'utf8');

// Remove the poweredBy line from JSX rendering (multiple possible patterns)
f = f
  // Remove any JSX line containing Madison or poweredBy
  .replace(/.*[Pp]owered[Bb]y.*\n/g, '')
  .replace(/.*Madison Thomas.*\n/g, '')
  .replace(/.*PLC.*\n/g, '')
  .replace(/.*Princeton Ledger.*\n/g, '')
  // Clean up t('footer.poweredBy') calls
  .replace(/\{t\('footer\.poweredBy'\)\}/g, '')
  // Remove any double blank lines left behind
  .replace(/\n{3,}/g, '\n\n');

fs.writeFileSync('app/components/Footer.jsx', f, 'utf8');
console.log('Footer PLC/Madison Thomas references removed.');

// Also clean from i18n files just in case
['app/i18n/en.json', 'app/i18n/es.json'].forEach(p => {
  if (!fs.existsSync(p)) return;
  let j = fs.readFileSync(p, 'utf8');
  j = j.replace(/"poweredBy"\s*:\s*"[^"]*",?\n?/g, '');
  fs.writeFileSync(p, j, 'utf8');
  console.log('Cleaned poweredBy from', p);
});

console.log('\nAll done.');
