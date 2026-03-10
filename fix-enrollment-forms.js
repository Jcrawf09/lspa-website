const fs = require('fs');
let content = fs.readFileSync('app/enrollment/page.jsx', 'utf8');

// 1. Update formsData — registration packet gets real files, others stay coming soon
const oldFormsData = `const formsData=[
{id:'open-enrollment',files:[{label:'English',href:'/forms/LSPA_Open_Enrollment_EN.pdf'},{label:'Espanol',href:'/forms/LSPA_Open_Enrollment_ES.pdf'}],pages:'13',uploadLabel:'Open Enrollment Checklist'},
{id:'registration',files:[{label:'English',href:'/forms/LSPA_Registration_Packet_EN.pdf'},{label:'Espanol',href:'/forms/LSPA_Registration_Packet_ES.pdf'}],pages:'10',uploadLabel:'Registration Packet'},
{id:'social-media',files:[{label:'English / Espanol',href:'/forms/LSPA_Social_Media_Release.pdf'}],pages:'1',uploadLabel:'Social Media Release Form'},
];`;

const newFormsData = `const formsData=[
{id:'open-enrollment',files:[{label:'English',href:'/forms/LSPA_Open_Enrollment_EN.pdf'},{label:'Espanol',href:'/forms/LSPA_Open_Enrollment_ES.pdf'}],pages:'13',uploadLabel:'Open Enrollment Checklist',comingSoon:true},
{id:'registration',files:[{label:'English',href:'/documents/LSPA_Complete_Enrollment_Packet_2025-2026.pdf'},{label:'Espanol',href:'/documents/LSPA_Paquete_Inscripcion_2025-2026_ES.pdf'}],pages:'8',uploadLabel:'Registration Packet',comingSoon:false},
{id:'social-media',files:[{label:'English / Espanol',href:'/forms/LSPA_Social_Media_Release.pdf'}],pages:'1',uploadLabel:'Social Media Release Form',comingSoon:true},
];`;

if (content.includes(oldFormsData)) {
  content = content.replace(oldFormsData, newFormsData);
  console.log('formsData updated.');
} else {
  console.error('formsData target not found.');
  process.exit(1);
}

// 2. Replace the form card rendering to handle comingSoon overlay
const oldCardStart = `<div key={fd.id} className='rounded-2xl border-2 overflow-hidden transition-all' style={{borderColor:expandedForm===fd.id?'#F5A623':'#e5e7eb',boxShadow:expandedForm===fd.id?'0 8px 30px rgba(27,42,74,0.1)':'0 1px 4px rgba(0,0,0,0.04)'}}>
<div className='p-6'>`;

const newCardStart = `<div key={fd.id} className='rounded-2xl border-2 overflow-hidden transition-all' style={{borderColor:fd.comingSoon?'#e5e7eb':expandedForm===fd.id?'#F5A623':'#e5e7eb',boxShadow:expandedForm===fd.id?'0 8px 30px rgba(27,42,74,0.1)':'0 1px 4px rgba(0,0,0,0.04)',position:'relative'}}>
{fd.comingSoon&&(
  <div style={{position:'absolute',inset:0,zIndex:10,borderRadius:14,backdropFilter:'blur(3px)',background:'rgba(248,250,252,0.88)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:10}}>
    <div style={{background:'linear-gradient(135deg,#1B2D5B,#1B4A6B)',borderRadius:999,padding:'6px 20px',display:'inline-flex',alignItems:'center',gap:8,boxShadow:'0 4px 16px rgba(27,42,74,0.25)'}}>
      <span style={{fontSize:'0.9rem'}}>&#x1F512;</span>
      <span style={{fontFamily:'Fredoka',fontSize:'0.95rem',fontWeight:700,color:'#fff',letterSpacing:0.5}}>{lang==='es'?'Proximo Disponible':'Coming Soon'}</span>
    </div>
    <p style={{fontFamily:'DM Sans',fontSize:'0.78rem',color:'#6B7280',textAlign:'center',maxWidth:220,lineHeight:1.5,margin:0}}>
      {lang==='es'?'Este formulario sera actualizado por el distrito. Vuelve pronto.':'This form is being updated by the district. Check back soon.'}
    </p>
  </div>
)}
<div className='p-6'>`;

if (content.includes(oldCardStart)) {
  content = content.replace(oldCardStart, newCardStart);
  console.log('Coming soon overlay added.');
} else {
  console.error('Card start target not found.');
  process.exit(1);
}

fs.writeFileSync('app/enrollment/page.jsx', content, 'utf8');
console.log('Done.');
