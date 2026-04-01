'use client';
import{useState,useRef}from'react';
import Link from'next/link';
import{useLanguage}from'../i18n/LanguageProvider';

const ACCESS_KEY="e9658441-788a-4bda-95f9-1abf712fc1a8";

const formsData=[
{id:'open-enrollment',files:[{label:'English',href:'/forms/LSPA_Open_Enrollment_EN.pdf'},{label:'Espanol',href:'/forms/LSPA_Open_Enrollment_ES.pdf'}],pages:'13',uploadLabel:'Open Enrollment Checklist',comingSoon:true},
{id:'registration',files:[{label:'English',href:'/forms/LSPA_Complete_Registration_Packet_2025-2026.pdf'},{label:'Espanol',href:'/forms/LSPA_Paquete_Registro_2025-2026_ES.pdf'}],pages:'8',uploadLabel:'Registration Packet',comingSoon:false},
{id:'social-media',files:[{label:'English / Espanol',href:'/forms/LSPA_Social_Media_Release.pdf'}],pages:'1',uploadLabel:'Social Media Release Form',comingSoon:false},
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
const handleFiles=(nf)=>{const arr=Array.from(nf).filter(f=>{const e=f.name.toLowerCase();return(e.endsWith('.pdf')||e.endsWith('.jpg')||e.endsWith('.jpeg')||e.endsWith('.png')||e.endsWith('.heic'))&&f.size<=10*1024*1024;});setFiles(prev=>[...prev,...arr].slice(0,5));};
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
sub.append('access_key',ACCESS_KEY);sub.append('subject','LSPA Form Upload: '+formTitle+' - '+formData.childName);
sub.append('from_name',formData.parentName);sub.append('replyto',formData.parentEmail);
sub.append('Parent Name',formData.parentName);sub.append('Parent Email',formData.parentEmail);
sub.append('Child Name',formData.childName);sub.append('Form Type',formTitle);
sub.append('Phone',formData.phone||'Not provided');sub.append('Notes',formData.notes||'None');
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
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(247,201,72,0.1)',border:'1px solid rgba(247,201,72,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#F7C948'}}>{t('enrollment.badge')}</span></div>
<h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>{t('enrollment.heading')} <span style={{color:'#F5A623'}}>{t('enrollment.headingAccent')}</span></h1>
<p className='text-lg mb-2' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:600,margin:'0 auto'}}>{t('enrollment.desc')}</p>
<p className='text-sm italic mb-8' style={{color:'rgba(255,255,255,0.45)'}}>{t('enrollment.spanishSubtitle')}</p>
<a href='tel:6093967171' className='inline-block px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>{t('enrollment.callToEnroll')} {String.fromCharCode(8211)} (609) 396-7171</a>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#FFFFFF'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8'>
<div className='text-center mb-12'>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5' style={{background:'rgba(76,175,80,0.08)',border:'1px solid rgba(76,175,80,0.15)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#2E7D32'}}>{t('enrollment.stepsBadge')}</span></div>
<h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>{t('enrollment.stepsHeading')} <span style={{color:'#4CAF50'}}>{t('enrollment.stepsAccent')}</span></h2>
</div>
<div className='space-y-4'>
{steps.map((step,i)=>(
<div key={i} className='flex gap-4 items-start p-5 rounded-2xl border transition-all hover:shadow-md' style={{borderColor:'#e5e7eb',background:'#fff'}}>
<div className='flex items-center justify-center font-bold text-lg flex-shrink-0' style={{minWidth:48,height:48,borderRadius:'50%',fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>{i+1}</div>
<div><div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1.1rem'}}>{step.title}</div><div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.95rem'}}>{step.desc}</div></div>
</div>
))}
</div>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#F8FAFB'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8'>
<div className='text-center mb-4'>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5' style={{background:'rgba(75,163,227,0.08)',border:'1px solid rgba(75,163,227,0.15)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#4BA3E3'}}>{t('enrollment.formsBadge')}</span></div>
<h2 className='font-bold mb-2' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>{t('enrollment.formsHeading')} <span style={{color:'#4BA3E3'}}>{t('enrollment.formsAccent')}</span></h2>
<p className='text-sm mb-8' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{t('enrollment.formsDesc')}</p>
<div style={{background:'linear-gradient(135deg,#FFF8E7,#FFF3CD)',border:'2px solid #F5A623',borderRadius:16,padding:'1.25rem 1.5rem',marginBottom:'2rem',display:'flex',gap:'1rem',alignItems:'flex-start'}}>
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
</div>
</div>
<div className='space-y-5'>
{formsData.map((fd,fi)=>{
const form=forms[fi]||{title:fd.id,titleEs:'',desc:''};
return(
<div key={fd.id} className='rounded-2xl border-2 overflow-hidden transition-all' style={{borderColor:fd.comingSoon?'#e5e7eb':expandedForm===fd.id?'#F5A623':'#e5e7eb',boxShadow:expandedForm===fd.id?'0 8px 30px rgba(27,42,74,0.1)':'0 1px 4px rgba(0,0,0,0.04)',position:'relative'}}>
{fd.comingSoon&&(
  <div style={{position:'absolute',inset:0,zIndex:10,borderRadius:14,backdropFilter:'blur(3px)',background:'rgba(248,250,252,0.92)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:10,padding:'1rem'}}>
    <div style={{background:'linear-gradient(135deg,#F5A623,#F7C948)',borderRadius:999,padding:'6px 20px',display:'inline-flex',alignItems:'center',gap:8,boxShadow:'0 4px 16px rgba(245,166,35,0.35)'}}>
      <span style={{fontSize:'0.9rem'}}>&#x1F4C5;</span>
      <span style={{fontFamily:'Fredoka',fontSize:'0.95rem',fontWeight:700,color:'#0F1D3D',letterSpacing:0.5}}>{lang==='es'?'Abre 1 de Mayo':'Opens May 1, 2026'}</span>
    </div>
    <p style={{fontFamily:'Fredoka',fontSize:'1rem',fontWeight:700,color:'#1B2D5B',textAlign:'center',maxWidth:240,lineHeight:1.4,margin:0}}>
      {lang==='es'?'Los cupos se llenan rapido. Contactanos ahora.':'Spots fill fast. Contact us now to get ahead.'}
    </p>
    <p style={{fontFamily:'DM Sans',fontSize:'0.75rem',color:'#6B7280',textAlign:'center',maxWidth:220,lineHeight:1.5,margin:0}}>
      {lang==='es'?'Llama o escribe hoy para asegurar el lugar de tu hijo.':'Call or email today to secure your child\'s place before enrollment opens.'}
    </p>
    <div style={{display:'flex',gap:8,flexWrap:'wrap',justifyContent:'center'}}>
      <a href='tel:6093967171' style={{fontFamily:'Fredoka',fontSize:'0.85rem',fontWeight:700,color:'#0F1D3D',background:'linear-gradient(to right,#F7C948,#F5A623)',borderRadius:999,padding:'6px 16px',textDecoration:'none',boxShadow:'0 2px 8px rgba(245,166,35,0.3)'}}>
        {lang==='es'?'Llama Ahora':'Call Now'}
      </a>
      <a href='mailto:lauraspelmanacademy@gmail.com' style={{fontFamily:'Fredoka',fontSize:'0.85rem',fontWeight:700,color:'#1B2D5B',background:'#fff',border:'2px solid #1B2D5B',borderRadius:999,padding:'6px 16px',textDecoration:'none'}}>
        {lang==='es'?'Escribenos':'Email Us'}
      </a>
    </div>
  </div>
)}
<div className='p-6'>
<h3 className='font-bold text-lg mb-0.5' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{form.title}</h3>
<p className='text-sm font-medium mb-2' style={{fontFamily:'DM Sans',color:'#F5A623'}}>{form.titleEs}</p>
<p className='text-sm mb-4' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{form.desc}</p>
<div className='flex gap-3 flex-wrap items-center'>
{fd.files.map((file,i)=>(
<a key={i} href={file.href} download target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white hover:opacity-90 transition-all' style={{fontFamily:'DM Sans',background:'#1B2D5B'}}>{String.fromCodePoint(0x2B07)} {t('enrollment.download')} {file.label}</a>
))}
<div style={{width:1,height:28,background:'#E5E7EB',margin:'0 4px'}}/>
<button onClick={()=>toggleUpload(fd.id)} className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border-2 transition-all cursor-pointer' style={{fontFamily:'DM Sans',background:expandedForm===fd.id?'#F5A623':'#FFFFFF',color:'#1B2D5B',borderColor:'#F5A623'}}>{expandedForm===fd.id?t('enrollment.close'):t('enrollment.uploadSigned')}</button>
</div>
<div className='mt-2'><span className='text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full' style={{background:'#F3F4F6',color:'#9CA3AF'}}>PDF {String.fromCharCode(183)} {fd.pages} {lang==='es'?'paginas':'pages'}</span></div>
</div>
{expandedForm===fd.id&&(
<div ref={el=>uploadRefs.current[fd.id]=el} className='p-6 border-t' style={{background:'#F9FAFB',borderColor:'#E5E7EB'}}>
<div className='rounded-lg p-3 mb-5 flex items-center gap-2' style={{background:'#DCFCE7',border:'1px solid #BBF7D0'}}>
<span>{String.fromCodePoint(0x1F512)}</span>
<span className='text-xs' style={{fontFamily:'DM Sans',color:'#374151'}}><strong>{lang==='es'?'Envio seguro':'Secure submission'}</strong> {String.fromCharCode(8212)} {t('enrollment.secureNote').split(String.fromCharCode(8212)).pop()}</span>
</div>
{uploadState==='success'&&(
<div className='rounded-2xl p-8 text-center border-2' style={{borderColor:'#16A34A',background:'#FFFFFF'}}>
<div className='w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl' style={{background:'#DCFCE7'}}>{String.fromCodePoint(0x2714)}</div>
<h3 className='text-lg font-bold mb-1' style={{fontFamily:'Fredoka',color:'#16A34A'}}>{t('enrollment.success')}</h3>
<p className='text-sm mb-4' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{t('enrollment.successMsg')}</p>
<button onClick={()=>{setUploadState('idle');setFiles([]);setErrors({});setFormData({parentName:'',parentEmail:'',childName:'',phone:'',notes:''});}} className='px-6 py-2.5 rounded-lg font-semibold text-sm text-white cursor-pointer' style={{fontFamily:'DM Sans',background:'#1B2D5B',border:'none'}}>{t('enrollment.uploadAnother')}</button>
</div>
)}
{uploadState==='error'&&(
<div className='rounded-xl p-5 text-center mb-4' style={{background:'#FEE2E2',border:'2px solid #DC2626'}}>
<p className='font-bold text-sm mb-2' style={{color:'#DC2626'}}>{t('enrollment.errorMsg')}</p>
<button onClick={()=>setUploadState('idle')} className='px-5 py-2 rounded-lg font-semibold text-sm text-white cursor-pointer' style={{fontFamily:'DM Sans',background:'#1B2D5B',border:'none'}}>{t('enrollment.retry')}</button>
</div>
)}
{(uploadState==='idle'||uploadState==='uploading')&&(
<div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
<div><label className='block text-sm font-semibold mb-1' style={{color:'#374151'}}>{t('enrollment.parentName')} <span style={{color:'#DC2626'}}>*</span></label><input type='text' value={formData.parentName} onChange={e=>setFormData(p=>({...p,parentName:e.target.value}))} style={{...inputStyle,borderColor:errors.parentName?'#DC2626':'#E5E7EB'}}/>{errors.parentName&&<span className='text-xs mt-1 block' style={{color:'#DC2626'}}>{errors.parentName}</span>}</div>
<div><label className='block text-sm font-semibold mb-1' style={{color:'#374151'}}>{t('enrollment.email')} <span style={{color:'#DC2626'}}>*</span></label><input type='email' value={formData.parentEmail} onChange={e=>setFormData(p=>({...p,parentEmail:e.target.value}))} style={{...inputStyle,borderColor:errors.parentEmail?'#DC2626':'#E5E7EB'}}/>{errors.parentEmail&&<span className='text-xs mt-1 block' style={{color:'#DC2626'}}>{errors.parentEmail}</span>}</div>
<div><label className='block text-sm font-semibold mb-1' style={{color:'#374151'}}>{t('enrollment.childName')} <span style={{color:'#DC2626'}}>*</span></label><input type='text' value={formData.childName} onChange={e=>setFormData(p=>({...p,childName:e.target.value}))} style={{...inputStyle,borderColor:errors.childName?'#DC2626':'#E5E7EB'}}/>{errors.childName&&<span className='text-xs mt-1 block' style={{color:'#DC2626'}}>{errors.childName}</span>}</div>
<div><label className='block text-sm font-semibold mb-1' style={{color:'#374151'}}>{t('enrollment.phone')}</label><input type='tel' value={formData.phone} onChange={e=>setFormData(p=>({...p,phone:e.target.value}))} placeholder='(609) 000-0000' style={inputStyle}/></div>
</div>
<div className='mt-4'>
<label className='block text-sm font-semibold mb-1' style={{color:'#374151'}}>{t('enrollment.attachForm')} <span style={{color:'#DC2626'}}>*</span></label>
<div onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} onClick={()=>fileInputRef.current?.click()} className='rounded-xl p-6 text-center cursor-pointer transition-all' style={{border:'2px dashed '+(dragActive?'#2563EB':errors.files?'#DC2626':'#D1D5DB'),background:dragActive?'#DBEAFE':'#FFFFFF'}}>
<input ref={fileInputRef} type='file' multiple accept='.pdf,.jpg,.jpeg,.png,.heic' onChange={e=>handleFiles(e.target.files)} style={{display:'none'}}/>
<p className='text-sm font-semibold mb-1' style={{color:'#374151'}}>{dragActive?t('enrollment.dropHere'):t('enrollment.dragDrop')}</p>
<p className='text-xs' style={{color:'#9CA3AF'}}>{t('enrollment.fileTypes')} {String.fromCharCode(183)} Max 10MB {String.fromCharCode(183)} 5 files max</p>
</div>
{errors.files&&<span className='text-xs mt-1 block' style={{color:'#DC2626'}}>{errors.files}</span>}
{files.length>0&&(<div className='mt-2 space-y-1.5'>{files.map((file,i)=>(
<div key={i} className='flex items-center gap-2 px-3 py-2 rounded-lg border' style={{borderColor:'#E5E7EB',background:'#FFFFFF'}}>
<span className='flex-1 text-xs font-medium truncate' style={{color:'#374151'}}>{file.name}</span>
<span className='text-xs flex-shrink-0' style={{color:'#9CA3AF'}}>{formatSize(file.size)}</span>
<button type='button' onClick={e=>{e.stopPropagation();removeFile(i);}} className='w-5 h-5 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 cursor-pointer' style={{background:'#FEE2E2',color:'#DC2626',border:'none'}}>{String.fromCodePoint(0x2715)}</button>
</div>))}</div>)}
</div>
<div className='mt-3'><label className='block text-sm font-semibold mb-1' style={{color:'#374151'}}>{t('enrollment.notes')}</label><textarea value={formData.notes} onChange={e=>setFormData(p=>({...p,notes:e.target.value}))} placeholder={t('enrollment.notesPlaceholder')} rows={2} style={{...inputStyle,resize:'vertical',minHeight:60}}/></div>
<div className='mt-4 rounded-lg p-3' style={{background:'#EFF6FF',border:'1px solid #BFDBFE'}}>
  <p style={{fontFamily:'DM Sans',fontSize:'0.8rem',color:'#1E40AF',textAlign:'center',margin:0}}>
    {lang==='es'
      ?'&#128161; Recordatorio: La carga es solo para revision previa. Traiga el original firmado a nuestra oficina para completar la inscripcion.'
      :'&#128161; Reminder: This upload is for pre-review only. Please bring your signed original to our office to complete enrollment.'}
  </p>
</div>
<div className='mt-5 text-center'>
<button onClick={()=>handleSubmit(fd.uploadLabel)} disabled={uploadState==='uploading'} className='px-10 py-3 rounded-full font-bold text-base shadow-lg cursor-pointer transition-all hover:-translate-y-0.5' style={{fontFamily:'Fredoka',background:uploadState==='uploading'?'#D1D5DB':'linear-gradient(135deg,#1B2D5B 0%,#2D4A7A 100%)',color:'#FFFFFF',border:'none'}}>{uploadState==='uploading'?t('enrollment.submitting'):t('enrollment.submit')}</button>
<p className='text-xs mt-2' style={{color:'#9CA3AF'}}>{String.fromCodePoint(0x1F512)} {t('enrollment.encrypted')} {String.fromCharCode(183)} {t('enrollment.sentDirectly')}</p>
</div>
</div>
)}
</div>
)}
</div>
);})}
</div>
<div className='text-center mt-8'><p className='text-sm' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{t('enrollment.troubleMsg')} <a href='mailto:lauraspelmanacademy@gmail.com' className='font-semibold' style={{color:'#4BA3E3'}}>lauraspelmanacademy@gmail.com</a> {t('enrollment.orDropOff')}</p></div>
</div>
</section>

<section className='py-16 md:py-24' style={{background:'#FFFFFF'}}>
<div className='max-w-3xl mx-auto px-4 md:px-8'>
<div className='text-center mb-10'><h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>{t('enrollment.reqHeading')} <span style={{color:'#4BA3E3'}}>{t('enrollment.reqAccent')}</span></h2></div>
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
<div className='text-center mb-12'><h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>{t('enrollment.faqHeading')} <span style={{color:'#F5A623'}}>{t('enrollment.faqAccent')}</span></h2></div>
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
<h3 className='font-bold text-white mb-3' style={{fontFamily:'Fredoka',fontSize:'1.5rem'}}>{t('enrollment.readyHeading')} <span style={{color:'#F7C948'}}>{t('enrollment.readyAccent')}</span></h3>
<p className='mb-6' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)'}}>{t('enrollment.readyDesc')}</p>
<div className='flex gap-4 justify-center flex-wrap'>
<a href='tel:6093967171' className='px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D'}}>{t('enrollment.callToEnroll')} (609) 396-7171</a>
<a href='mailto:lauraspelmanacademy@gmail.com' className='px-8 py-3 rounded-full font-bold border-2 hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',borderColor:'rgba(255,255,255,0.3)',color:'#FFFFFF'}}>{t('enrollment.emailUs')}</a>
</div>
</div>
</section>

</div>
);}
