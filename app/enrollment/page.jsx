'use client';
import{useState,useRef}from'react';
import Link from'next/link';
import{useLanguage}from'../i18n/LanguageProvider';

const ACCESS_KEY="e9658441-788a-4bda-95f9-1abf712fc1a8";

const PACKET_URL="/forms/2026-2027-Registration-Open-Enrollment-Packet-ALL-STUDENTS.pdf";

const formsData=[
  {
    id:'open-enrollment',
    files:[{label:'Download Packet',href:PACKET_URL}],
    pages:'29',
    uploadLabel:'2026-2027 Registration Open Enrollment Packet',
    overlay:{
      heading:'Enrollment Opens May 1, 2026',
      sub:'Spots are limited. Contact us now to secure your child\'s place before registration opens.',
      cta:true
    }
  },
  {
    id:'social-media',
    files:[{label:'English / Espanol',href:'/forms/LSPA_Social_Media_Release.pdf'}],
    pages:'1',
    uploadLabel:'Social Media Release Form',
    overlay:{
      heading:'Coming Soon',
      sub:'This form will be available for download in advance of the enrollment period.',
      cta:false
    }
  },
];

const inputStyle={width:'100%',padding:'10px 14px',borderRadius:8,border:'1.5px solid #E5E7EB',fontSize:14,fontFamily:'DM Sans',color:'#1F2937',background:'#FFFFFF',outline:'none',boxSizing:'border-box'};

export default function Enrollment(){
const{t,tObj,lang}=useLanguage();
const[expandedForm,setExpandedForm]=useState(null);
const[uploadState,setUploadState]=useState('idle');
const[formData,setFormData]=useState({parentName:'',parentEmail:'',childName:'',phone:'',notes:''});
const[files,setFiles]=useState([]);
const[errors,setErrors]=useState({});
const[dragActive,setDragActive]=useState(false);
const fileInputRef=useRef(null);
const uploadRefs=useRef({});

const steps=tObj('enrollment.steps')||[];
const forms=tObj('enrollment.forms')||[];
const requirements=tObj('enrollment.requirements')||[];
const faqs=tObj('enrollment.faqs')||[];

const validate=()=>{
const errs={};
if(!formData.parentName.trim())errs.parentName=t('enrollment.required');
if(!formData.parentEmail.trim())errs.parentEmail=t('enrollment.required');
else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail))errs.parentEmail=t('enrollment.invalidEmail');
if(!formData.childName.trim())errs.childName=t('enrollment.required');
if(files.length===0)errs.files=t('enrollment.attachError');
return errs;
};
const handleFiles=(nf)=>{const arr=Array.from(nf).filter(f=>{const e=f.name.toLowerCase();return(e.endsWith('.pdf')||e.endsWith('.jpg')||e.endsWith('.jpeg')||e.endsWith('.png')||e.endsWith('.heic')||e.endsWith('.docx'))&&f.size<=10*1024*1024;});setFiles(prev=>[...prev,...arr].slice(0,5));};
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

<section className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#2A3A5E 50%,#3D2A5E 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 30% 50%,rgba(247,201,72,0.08),transparent 60%),radial-gradient(ellipse at 70% 40%,rgba(75,163,227,0.06),transparent 50%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(247,201,72,0.1)',border:'1px solid rgba(247,201,72,0.2)'}}>
<span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#F7C948'}}>{t('enrollment.badge')}</span>
</div>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>
{t('enrollment.heading')} <span style={{color:'#F5A623'}}>{t('enrollment.headingAccent')}</span>
</h1>
<p className='text-lg mb-2' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:600,margin:'0 auto'}}>{t('enrollment.desc')}</p>
<p className='text-sm italic mb-8' style={{color:'rgba(255,255,255,0.45)'}}>{t('enrollment.spanishSubtitle')}</p>
<a href='tel:6093967171' className='inline-block px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>
{t('enrollment.callToEnroll')} {String.fromCharCode(8211)} (609) 396-7171
</a>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#FFFFFF'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8'>
<div className='text-center mb-12'>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5' style={{background:'rgba(76,175,80,0.08)',border:'1px solid rgba(76,175,80,0.15)'}}>
<span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#2E7D32'}}>{t('enrollment.stepsBadge')}</span>
</div>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>
{t('enrollment.stepsHeading')} <span style={{color:'#4CAF50'}}>{t('enrollment.stepsAccent')}</span>
</h2>
</div>
<div className='space-y-4'>
{steps.map((step,i)=>(
<div key={i} className='flex gap-4 items-start p-5 rounded-2xl border transition-all hover:shadow-md' style={{borderColor:'#e5e7eb',background:'#fff'}}>
<div className='flex items-center justify-center font-bold text-lg flex-shrink-0' style={{minWidth:48,height:48,borderRadius:'50%',fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>{i+1}</div>
<div>
<div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1.1rem'}}>{step.title}</div>
<div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.95rem'}}>{step.desc}</div>
</div>
</div>
))}
</div>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#F8FAFB'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8'>
<div className='text-center mb-4'>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5' style={{background:'rgba(75,163,227,0.08)',border:'1px solid rgba(75,163,227,0.15)'}}>
<span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#4BA3E3'}}>{t('enrollment.formsBadge')}</span>
</div>
<h2 className='font-bold mb-2' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>
{t('enrollment.formsHeading')} <span style={{color:'#4BA3E3'}}>{t('enrollment.formsAccent')}</span>
</h2>
<p className='text-sm mb-8' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{t('enrollment.formsDesc')}</p>
<div style={{background:'linear-gradient(135deg,#FFF8E7,#FFF3CD)',border:'2px solid #F5A623',borderRadius:16,padding:'1.25rem 1.5rem',marginBottom:'2rem',display:'flex',gap:'1rem',alignItems:'flex-start',textAlign:'left'}}>
<div style={{fontSize:'1.5rem',flexShrink:0,marginTop:2}}>&#x26A0;&#xFE0F;</div>
<div>
<div style={{fontFamily:'Fredoka',fontSize:'1.05rem',fontWeight:700,color:'#92400E',marginBottom:'0.35rem'}}>
{lang==='es'?'Formularios en papel requeridos':'Original Hard Copy Required'}
</div>
<div style={{fontFamily:'DM Sans',fontSize:'0.88rem',color:'#78350F',lineHeight:1.65}}>
{lang==='es'
?'Todos los formularios deben ser impresos, completados a mano y entregados en persona en nuestra oficina. La carga de archivos en este sitio es solo para revision previa. Siempre se requiere el original en papel.'
:'All enrollment forms must be printed, completed by hand, and brought in as original copies to our office. Uploading your forms here is for pre-review only — the original hard copy is always required to complete enrollment.'}
</div>
<div style={{display:'flex',gap:12,marginTop:'0.75rem',flexWrap:'wrap'}}>
<div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(245,166,35,0.15)',border:'1px solid rgba(245,166,35,0.4)',borderRadius:999,padding:'4px 12px'}}><span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#92400E'}}>&#x2460; Print the form</span></div>
<div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(245,166,35,0.15)',border:'1px solid rgba(245,166,35,0.4)',borderRadius:999,padding:'4px 12px'}}><span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#92400E'}}>&#x2461; Fill by hand</span></div>
<div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(245,166,35,0.15)',border:'1px solid rgba(245,166,35,0.4)',borderRadius:999,padding:'4px 12px'}}><span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#92400E'}}>&#x2462; Bring original to LSPA</span></div>
<div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(75,163,227,0.12)',border:'1px solid rgba(75,163,227,0.3)',borderRadius:999,padding:'4px 12px'}}><span style={{fontFamily:'DM Sans',fontSize:'0.75rem',fontWeight:700,color:'#1B4A6B'}}>&#x2463; Upload below for pre-review (optional)</span></div>
</div>
</div>
</div>
</div>

<div className='space-y-5'>
{formsData.map((fd,fi)=>{
const form=forms[fi]||{title:fd.uploadLabel,titleEs:'',desc:''};
return(
<div key={fd.id} style={{position:'relative',borderRadius:16,overflow:'hidden',border:'2px solid #e5e7eb',boxShadow:'0 1px 4px rgba(0,0,0,0.04)'}}>

{/* Card content — always rendered, greyed underneath overlay */}
<div style={{opacity:0.35,pointerEvents:'none',userSelect:'none'}}>
<div className='p-6'>
<h3 className='font-bold text-lg mb-0.5' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{form.title||fd.uploadLabel}</h3>
<p className='text-sm font-medium mb-2' style={{fontFamily:'DM Sans',color:'#F5A623'}}>{form.titleEs||''}</p>
<p className='text-sm mb-4' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{form.desc||''}</p>
<div className='flex gap-3 flex-wrap items-center'>
{fd.files.map((file,i)=>(
<div key={i} className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white' style={{fontFamily:'DM Sans',background:'#1B2D5B'}}>
{String.fromCodePoint(0x2B07)} {t('enrollment.download')} {file.label}
</div>
))}
<div style={{width:1,height:28,background:'#E5E7EB',margin:'0 4px'}}/>
<div className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border-2' style={{fontFamily:'DM Sans',background:'#FFFFFF',color:'#1B2D5B',borderColor:'#F5A623'}}>
{t('enrollment.uploadSigned')}
</div>
</div>
<div className='mt-2'>
<span className='text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full' style={{background:'#F3F4F6',color:'#9CA3AF'}}>{fd.pages} {lang==='es'?'paginas':'pages'}</span>
</div>
</div>
</div>

{/* Professional overlay */}
<div style={{
  position:'absolute',
  inset:0,
  background:'rgba(15,29,61,0.82)',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  padding:'2rem',
  textAlign:'center',
  gap:12
}}>
  <div style={{
    display:'inline-block',
    background:'linear-gradient(to right,#F7C948,#F5A623)',
    borderRadius:999,
    padding:'5px 20px',
    marginBottom:4
  }}>
    <span style={{fontFamily:'Fredoka',fontSize:'0.85rem',fontWeight:700,color:'#0F1D3D',letterSpacing:0.5}}>
      {fd.overlay.heading}
    </span>
  </div>
  <p style={{fontFamily:'DM Sans',fontSize:'0.875rem',color:'rgba(255,255,255,0.75)',maxWidth:320,lineHeight:1.6,margin:0}}>
    {fd.overlay.sub}
  </p>
  {fd.overlay.cta&&(
    <div style={{display:'flex',gap:10,marginTop:4,flexWrap:'wrap',justifyContent:'center'}}>
      <a href='tel:6093967171' style={{fontFamily:'Fredoka',fontSize:'0.85rem',fontWeight:700,color:'#0F1D3D',background:'linear-gradient(to right,#F7C948,#F5A623)',borderRadius:999,padding:'8px 20px',textDecoration:'none',boxShadow:'0 2px 10px rgba(247,201,72,0.3)'}}>
        Call Now
      </a>
      <a href='mailto:lauraspelmanacademy@gmail.com' style={{fontFamily:'Fredoka',fontSize:'0.85rem',fontWeight:700,color:'#ffffff',background:'transparent',border:'2px solid rgba(255,255,255,0.4)',borderRadius:999,padding:'8px 20px',textDecoration:'none'}}>
        Email Us
      </a>
    </div>
  )}
</div>

</div>
);
})}
</div>

<div className='text-center mt-8'>
<p className='text-sm' style={{fontFamily:'DM Sans',color:'#6B7280'}}>
{t('enrollment.troubleMsg')} <a href='mailto:lauraspelmanacademy@gmail.com' className='font-semibold' style={{color:'#4BA3E3'}}>lauraspelmanacademy@gmail.com</a> {t('enrollment.orDropOff')}
</p>
</div>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#FFFFFF'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8'>
<div className='text-center mb-10'>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>
{t('enrollment.reqHeading')} <span style={{color:'#4BA3E3'}}>{t('enrollment.reqAccent')}</span>
</h2>
</div>
<div className='rounded-3xl p-8 border' style={{background:'#FAFAFA',borderColor:'#e5e7eb'}}>
{requirements.map((req,i)=>(
<div key={i} className='flex items-center gap-3 py-3' style={{borderBottom:i<requirements.length-1?'1px solid #f3f4f6':'none'}}>
<div className='w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold' style={{background:'#E8F5E9',color:'#2E7D32'}}>{String.fromCharCode(10003)}</div>
<div style={{fontFamily:'DM Sans',color:'#374151',fontSize:'0.95rem'}}>{req}</div>
</div>
))}
</div>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#F8FAFB'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8'>
<div className='text-center mb-12'>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>
{t('enrollment.faqHeading')} <span style={{color:'#F5A623'}}>{t('enrollment.faqAccent')}</span>
</h2>
</div>
<div className='space-y-4'>
{faqs.map((faq,i)=>(
<div key={i} className='p-5 rounded-2xl border' style={{borderColor:'#e5e7eb',background:'#FFFFFF'}}>
<div className='font-bold mb-2' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{faq.q}</div>
<div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.95rem',lineHeight:1.6}}>{faq.a}</div>
</div>
))}
</div>
</div>
</section>

<section className='py-16' style={{background:'#1B2D5B'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center'>
<h3 className='font-bold text-white mb-3' style={{fontFamily:'Fredoka',fontSize:'1.5rem'}}>
{t('enrollment.readyHeading')} <span style={{color:'#F7C948'}}>{t('enrollment.readyAccent')}</span>
</h3>
<p className='mb-6' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)'}}>{t('enrollment.readyDesc')}</p>
<div className='flex gap-4 justify-center flex-wrap'>
<a href='tel:6093967171' className='px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>{t('enrollment.callToEnroll')} (609) 396-7171</a>
<a href='mailto:lauraspelmanacademy@gmail.com' className='px-8 py-3 rounded-full font-bold border-2 hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',borderColor:'rgba(255,255,255,0.3)',color:'#FFFFFF'}}>{t('enrollment.emailUs')}</a>
</div>
</div>
</section>

</div>
);
}
