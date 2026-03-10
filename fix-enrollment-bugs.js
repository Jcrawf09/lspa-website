const fs = require('fs');
let c = fs.readFileSync('app/enrollment/page.jsx', 'utf8');

// Fix 1: Social media release — comingSoon false
c = c.replace(
  `{id:'social-media',files:[{label:'English / Espanol',href:'/forms/LSPA_Social_Media_Release.pdf'}],pages:'1',uploadLabel:'Social Media Release Form',comingSoon:true}`,
  `{id:'social-media',files:[{label:'English / Espanol',href:'/forms/LSPA_Social_Media_Release.pdf'}],pages:'1',uploadLabel:'Social Media Release Form',comingSoon:false}`
);

// Fix 2: Replace hardcoded English badge steps with bilingual versions
const oldBadges = `      <div style={{display:'flex',gap:12,marginTop:'0.75rem',flexWrap:'wrap'}}>
      <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(245,166,35,0.15)',border:'1px solid rgba(245,166,35,0.4)',borderRadius:999,padding:'4px 12px'}}>
        <span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#92400E'}}>&#x2460; Print the form</span>
      </div>
      <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(245,166,35,0.15)',border:'1px solid rgba(245,166,35,0.4)',borderRadius:999,padding:'4px 12px'}}>
        <span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#92400E'}}>&#x2461; Fill by hand</span>
      </div>
      <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(245,166,35,0.15)',border:'1px solid rgba(245,166,35,0.4)',borderRadius:999,padding:'4px 12px'}}>
        <span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#92400E'}}>&#x2462; Bring original to LSPA</span>
      </div>
      <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(75,163,227,0.12)',border:'1px solid rgba(75,163,227,0.3)',borderRadius:999,padding:'4px 12px'}}>
        <span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#1B4A6B'}}>&#x2463; Upload below for pre-review (optional)</span>
      </div>
    </div>`;

const newBadges = `      <div style={{display:'flex',gap:12,marginTop:'0.75rem',flexWrap:'wrap'}}>
      <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(245,166,35,0.15)',border:'1px solid rgba(245,166,35,0.4)',borderRadius:999,padding:'4px 12px'}}>
        <span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#92400E'}}>{lang==='es'?'\u2460 Imprima el formulario':'\u2460 Print the form'}</span>
      </div>
      <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(245,166,35,0.15)',border:'1px solid rgba(245,166,35,0.4)',borderRadius:999,padding:'4px 12px'}}>
        <span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#92400E'}}>{lang==='es'?'\u2461 Llene a mano':'\u2461 Fill by hand'}</span>
      </div>
      <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(245,166,35,0.15)',border:'1px solid rgba(245,166,35,0.4)',borderRadius:999,padding:'4px 12px'}}>
        <span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#92400E'}}>{lang==='es'?'\u2462 Lleve el original a LSPA':'\u2462 Bring original to LSPA'}</span>
      </div>
      <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(75,163,227,0.12)',border:'1px solid rgba(75,163,227,0.3)',borderRadius:999,padding:'4px 12px'}}>
        <span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#1B4A6B'}}>{lang==='es'?'\u2463 Cargue abajo para pre-revisi\u00f3n (opcional)':'\u2463 Upload below for pre-review (optional)'}</span>
      </div>
    </div>`;

if (c.includes(oldBadges)) {
  c = c.replace(oldBadges, newBadges);
  console.log('Badge steps translated.');
} else {
  console.warn('Badge steps not found — check manually.');
}

// Fix 3: Also translate the notice heading and body using lang already in scope
// The heading "Original Hard Copy Required" is already using lang check — good.
// The reminder note inside upload panel uses HTML entity for lightbulb which won't render — fix to codePoint
c = c.replace(
  `:'&#128161; Recordatorio: La carga es solo para revision previa. Traiga el original firmado a nuestra oficina para completar la inscripcion.'
      :'&#128161; Reminder: This upload is for pre-review only. Please bring your signed original to our office to complete enrollment.'}`,
  `:'\uD83D\uDCA1 Recordatorio: La carga es solo para revisi\u00f3n previa. Traiga el original firmado a nuestra oficina para completar la inscripci\u00f3n.'
      :'\uD83D\uDCA1 Reminder: This upload is for pre-review only. Please bring your signed original to our office to complete enrollment.'}`
);

fs.writeFileSync('app/enrollment/page.jsx', c, 'utf8');

// Verify
const result = fs.readFileSync('app/enrollment/page.jsx', 'utf8');
const smLine = result.match(/social-media.+/)?.[0];
console.log('Social media line:', smLine);
console.log('Done.');
