const fs = require('fs');
const path = require('path');
const base = process.argv[2] || '.';
const log = [];

// ─── PROGRAMS COMPONENT — FULL REWRITE ────────────────────────────────────
const programs = `'use client';
import{useEffect,useRef,useState}from'react';
import{useLanguage}from'../i18n/LanguageProvider';

export default function Programs(){
const{t,tObj,lang}=useLanguage();
const ref=useRef(null);
const[visible,setVisible]=useState(false);
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisible(true);},{threshold:0.15});if(ref.current)o.observe(ref.current);return()=>o.disconnect();},[]);
const fade=(d)=>({opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(32px)',transition:'all 0.8s cubic-bezier(0.16,1,0.3,1) '+d+'s'});

const progs=[
{age:t('programs.ages34'),name:t('programs.preschool3'),highlights:tObj('programs.highlights3')||[],color:'#4BA3E3'},
{age:t('programs.ages45'),name:t('programs.preschool4'),highlights:tObj('programs.highlights4')||[],color:'#4CAF50'}
];

return(
<section id='programs' ref={ref} className='py-24 md:py-32 relative overflow-hidden' style={{background:'linear-gradient(180deg,#FFFFFF 0%,#F0FAF0 100%)'}}>
<div className='absolute top-0 left-0 right-0 h-px' style={{background:'linear-gradient(to right,transparent,#4CAF50,transparent)'}}/>
<div className='max-w-6xl mx-auto px-4 md:px-8'>
<div className='text-center mb-16' style={fade(0)}>
<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5' style={{background:'rgba(76,175,80,0.08)',border:'1px solid rgba(76,175,80,0.15)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#2E7D32'}}>{t('programs.badge')}</span></div>
<h2 className='font-bold mb-4' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(30px,4vw,48px)'}}>{t('programs.heading')} <span style={{color:'#4CAF50'}}>{t('programs.headingAccent')}</span></h2>
<p className='text-base max-w-2xl mx-auto' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{t('programs.desc')}</p>
</div>
<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>{progs.map((p,i)=>(<div key={i} className='rounded-3xl p-8 border-2 hover:shadow-xl transition-all relative overflow-hidden group' style={{borderColor:p.color+'25',...fade(0.15+i*0.15)}}>
<div className='absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl' style={{background:'linear-gradient(to right,'+p.color+','+p.color+'88)'}}/>
<div className='mb-4'><div className='text-xs font-bold tracking-[2px] uppercase mb-1' style={{color:p.color}}>{p.age}</div><h3 className='text-2xl font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{p.name}</h3><div className='text-sm mt-1' style={{color:'#9CA3AF'}}>{t('programs.fullDay')}</div></div>
<div className='space-y-3'>{p.highlights.map((h,j)=>(<div key={j} className='flex items-center gap-3 py-2 border-b border-black/[0.04] last:border-0'><div className='w-2 h-2 rounded-full flex-shrink-0' style={{background:p.color}}/><span className='text-sm' style={{fontFamily:'DM Sans',color:'#4B5563'}}>{h}</span></div>))}</div>
<div className='text-center mt-8'><p className='text-sm' style={{fontFamily:'DM Sans',color:'#9CA3AF'}}><strong style={{color:'#1B2D5B'}}>{lang==='es'?'Elegibilidad:':'Eligibility:'}</strong> {t('programs.eligibility')}</p></div>
</div>))}</div>
</div>
</section>);}
`;
fs.writeFileSync(path.join(base,'app','components','Programs.jsx'), programs);
log.push('REWRITTEN Programs.jsx - Fully translated, fixed \\u2014 bug');

// ─── CTA COMPONENT — FULL REWRITE ────────────────────────────────────────
const ctaPath = path.join(base,'app','components','CTA.jsx');
let ctaOld = '';
if(fs.existsSync(ctaPath)) ctaOld = fs.readFileSync(ctaPath,'utf8');

const cta = `'use client';
import{useEffect,useRef,useState}from'react';
import{useLanguage}from'../i18n/LanguageProvider';

export default function CTA(){
const{t,lang}=useLanguage();
const ref=useRef(null);
const[visible,setVisible]=useState(false);
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisible(true);},{threshold:0.15});if(ref.current)o.observe(ref.current);return()=>o.disconnect();},[]);
const fade=(d)=>({opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(32px)',transition:'all 0.8s cubic-bezier(0.16,1,0.3,1) '+d+'s'});

const heading=lang==='es'?'Listo para Inscribir?':'Ready to Enroll?';
const headingAccent=lang==='es'?'Contactanos!':'Contact Us!';
const desc=lang==='es'?'Toda inscripcion comienza con una llamada o correo a LSPA. Gratis para residentes de Trenton con ninos de 3, 4 o 5 anos antes del 30 de septiembre.':'All enrollment begins with a call or email to LSPA. Free for Trenton residents with children ages 3, 4, or 5 by September 30th.';
const spanishLine=lang==='es'?'':'Preescolar gratis para familias de Trenton.';
const callBtn=lang==='es'?'Llama':'Call';
const emailBtn=lang==='es'?'Envianos un Correo':'Email Us';

return(
<section id='contact' ref={ref} className='py-24 md:py-32 relative overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#2A3A5E 50%,#1B4A6B 100%)'}}>
<div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 30% 50%,rgba(75,163,227,0.1),transparent 60%),radial-gradient(ellipse at 70% 50%,rgba(247,201,72,0.06),transparent 50%)'}}/>
<div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
<div style={fade(0)}>
<h2 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(30px,5vw,52px)'}}>{heading} <span style={{color:'#F7C948'}}>{headingAccent}</span></h2>
<p className='text-lg mb-2' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:550,margin:'0 auto'}}>{desc}</p>
{spanishLine&&<p className='text-sm italic mb-8' style={{color:'rgba(255,255,255,0.45)'}}>{spanishLine}</p>}
{!spanishLine&&<div className='mb-8'/>}
<div className='flex gap-4 justify-center flex-wrap'>
<a href='tel:6093967171' className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none'}}>{String.fromCodePoint(0x1F4DE)} {callBtn} (609) 396-7171</a>
<a href='mailto:lauraspelmanacademy@verizon.net' className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg border-2 hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',borderColor:'rgba(255,255,255,0.25)',color:'#FFFFFF',textDecoration:'none'}}>{String.fromCodePoint(0x2709)} {emailBtn}</a>
</div>
</div>
</div>
</section>
);}
`;
fs.writeFileSync(ctaPath, cta);
log.push('REWRITTEN CTA.jsx - Fully translated');

// ─── ENROLLMENT — FULL REWRITE WITH TRANSLATIONS ─────────────────────────
const enrollment = `'use client';
import{useState,useRef}from'react';
import Link from'next/link';
import{useLanguage}from'../i18n/LanguageProvider';

const ACCESS_KEY="e9658441-788a-4bda-95f9-1abf712fc1a8";

const formsData=[
{id:'open-enrollment',files:[{label:'English',href:'/forms/LSPA_Open_Enrollment_EN.pdf'},{label:'Espanol',href:'/forms/LSPA_Open_Enrollment_ES.pdf'}],pages:'13',uploadLabel:'Open Enrollment Checklist'},
{id:'registration',files:[{label:'English',href:'/forms/LSPA_Registration_Packet_EN.pdf'},{label:'Espanol',href:'/forms/LSPA_Registration_Packet_ES.pdf'}],pages:'10',uploadLabel:'Registration Packet'},
{id:'social-media',files:[{label:'English / Espanol',href:'/forms/LSPA_Social_Media_Release.pdf'}],pages:'1',uploadLabel:'Social Media Release Form'},
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
else if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.parentEmail))errs.parentEmail=t('enrollment.invalidEmail');
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
</div>
<div className='space-y-5'>
{formsData.map((fd,fi)=>{
const form=forms[fi]||{title:fd.id,titleEs:'',desc:''};
return(
<div key={fd.id} className='rounded-2xl border-2 overflow-hidden transition-all' style={{borderColor:expandedForm===fd.id?'#F5A623':'#e5e7eb',boxShadow:expandedForm===fd.id?'0 8px 30px rgba(27,42,74,0.1)':'0 1px 4px rgba(0,0,0,0.04)'}}>
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
<div className='text-center mt-8'><p className='text-sm' style={{fontFamily:'DM Sans',color:'#6B7280'}}>{t('enrollment.troubleMsg')} <a href='mailto:lauraspelmanacademy@verizon.net' className='font-semibold' style={{color:'#4BA3E3'}}>lauraspelmanacademy@verizon.net</a> {t('enrollment.orDropOff')}</p></div>
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
<a href='mailto:lauraspelmanacademy@verizon.net' className='px-8 py-3 rounded-full font-bold border-2 hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',borderColor:'rgba(255,255,255,0.3)',color:'#FFFFFF'}}>{t('enrollment.emailUs')}</a>
</div>
</div>
</section>

</div>
);}
`;
fs.writeFileSync(path.join(base,'app','enrollment','page.jsx'), enrollment);
log.push('REWRITTEN enrollment/page.jsx - Fully translated (hero, steps, forms, requirements, FAQs, CTA, upload UI)');

console.log('');
console.log('========================================');
console.log('  PHASE 3: SPANISH TRANSLATION');
console.log('  Part 4 - Final Deep Rewrites');
console.log('========================================');
console.log('');
log.forEach(l => console.log('  ' + l));
console.log('');
console.log('  NOW FULLY TRANSLATED:');
console.log('    Nav + Top Bar');
console.log('    Footer');
console.log('    Programs (home)');
console.log('    CTA (home)');
console.log('    Enrollment (entire page)');
console.log('    About Us');
console.log('    Careers');
console.log('    Resources');
console.log('    404');
console.log('');
console.log('  REMAINING (hooks added, partial):');
console.log('    Hero (home) - needs full rewrite');
console.log('    Locations (home) - needs full rewrite');
console.log('    Gallery - mostly done');
console.log('    Our Team - key strings done');
console.log('');
