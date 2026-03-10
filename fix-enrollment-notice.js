const fs = require('fs');
let content = fs.readFileSync('app/enrollment/page.jsx', 'utf8');

// 1. Add bold notice banner right after the forms section heading/desc paragraph
const target = `<p className='text-sm mb-8' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{t('enrollment.formsDesc')}</p>`;
const notice = `<p className='text-sm mb-8' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{t('enrollment.formsDesc')}</p>
<div style={{background:'linear-gradient(135deg,#FFF8E7,#FFF3CD)',border:'2px solid #F5A623',borderRadius:16,padding:'1.25rem 1.5rem',marginBottom:'2rem',display:'flex',gap:'1rem',alignItems:'flex-start'}}>
  <div style={{fontSize:'1.5rem',flexShrink:0,marginTop:2}}>&#x26A0;&#xFE0F;</div>
  <div>
    <div style={{fontFamily:'Fredoka',fontSize:'1.05rem',fontWeight:700,color:'#92400E',marginBottom:'0.35rem'}}>
      {lang==='es'?'Formularios en papel requeridos':'Original Hard Copy Required'}
    </div>
    <div style={{fontFamily:'DM Sans',fontSize:'0.88rem',color:'#78350F',lineHeight:1.65}}>
      {lang==='es'
        ?'Todos los formularios deben ser impresos, completados a mano y entregados en persona en nuestra oficina. La carga de archivos en este sitio es solo para revision previa. Siempre se requiere el original en papel.'
        :'All enrollment forms must be printed, completed by hand, and brought in as original copies to our office. Uploading your forms here is for pre-review only \u2014 the original hard copy is always required to complete enrollment.'}
    </div>
    <div style={{display:'flex',gap:12,marginTop:'0.75rem',flexWrap:'wrap'}}>
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
    </div>
  </div>
</div>`;

if (content.includes(target)) {
  content = content.replace(target, notice);
  console.log('Banner inserted into forms section.');
} else {
  console.error('Target string not found — check file for changes.');
  process.exit(1);
}

// 2. Add a compact reminder above the upload submit button
const submitTarget = `<div className='mt-5 text-center'>`;
const submitReplacement = `<div className='mt-4 rounded-lg p-3' style={{background:'#EFF6FF',border:'1px solid #BFDBFE'}}>
  <p style={{fontFamily:'DM Sans',fontSize:'0.8rem',color:'#1E40AF',textAlign:'center',margin:0}}>
    {lang==='es'
      ?'&#128161; Recordatorio: La carga es solo para revision previa. Traiga el original firmado a nuestra oficina para completar la inscripcion.'
      :'&#128161; Reminder: This upload is for pre-review only. Please bring your signed original to our office to complete enrollment.'}
  </p>
</div>
<div className='mt-5 text-center'>`;

if (content.includes(submitTarget)) {
  content = content.replace(submitTarget, submitReplacement);
  console.log('Reminder added above submit button.');
} else {
  console.warn('Submit target not found — skipping reminder (banner still added).');
}

fs.writeFileSync('app/enrollment/page.jsx', content, 'utf8');
console.log('Done.');
