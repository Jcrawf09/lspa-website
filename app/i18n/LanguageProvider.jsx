'use client';
import{createContext,useContext,useState,useEffect}from'react';
import en from'./en.json';
import es from'./es.json';
const translations={en,es};
const LanguageContext=createContext();

export function LanguageProvider({children}){
const[lang,setLang]=useState('en');
const[loaded,setLoaded]=useState(false);
const[showModal,setShowModal]=useState(false);

useEffect(()=>{
if(typeof window==='undefined')return;
try{
const saved=localStorage.getItem('lspa-lang');
if(saved&&translations[saved]){
setLang(saved);
setLoaded(true);
setShowModal(false);
}else{
setShowModal(true);
setLoaded(true);
}
}catch(e){
setShowModal(true);
setLoaded(true);
}
},[]);

const choose=(newLang)=>{
if(translations[newLang]){
setLang(newLang);
try{localStorage.setItem('lspa-lang',newLang);}catch(e){}
setShowModal(false);
}
};

const switchLanguage=(newLang)=>{
if(translations[newLang]){
setLang(newLang);
try{localStorage.setItem('lspa-lang',newLang);}catch(e){}
}
};

const t=(key)=>{
const keys=key.split('.');
let val=translations[lang];
for(const k of keys){
if(val&&typeof val==='object'&&k in val)val=val[k];
else return key;
}
return val;
};

const tObj=(key)=>{
const keys=key.split('.');
let val=translations[lang];
for(const k of keys){
if(val&&typeof val==='object'&&k in val)val=val[k];
else return null;
}
return val;
};

if(!loaded)return null;

return(
<LanguageContext.Provider value={{lang,switchLanguage,t,tObj,loaded}}>
{showModal&&(
<div style={{position:'fixed',inset:0,zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(27,45,91,0.82)',backdropFilter:'blur(6px)',padding:'1rem'}}>
<div style={{background:'#FFFFFF',borderRadius:28,padding:'3.5rem 2.5rem',maxWidth:500,width:'100%',textAlign:'center',boxShadow:'0 24px 64px rgba(27,45,91,0.25)'}}>
<div style={{width:72,height:72,borderRadius:'50%',background:'linear-gradient(135deg,#1B2D5B,#1B4A6B)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1.5rem',boxShadow:'0 8px 24px rgba(27,45,91,0.3)'}}>
<span style={{fontSize:'2rem'}}>&#x1F310;</span>
</div>
<h2 style={{fontFamily:'Fredoka',fontSize:'2rem',fontWeight:700,color:'#1B2D5B',marginBottom:'0.5rem',lineHeight:1.2}}>
Welcome / Bienvenidos
</h2>
<p style={{fontFamily:'DM Sans',fontSize:'1rem',color:'#6B7280',marginBottom:'0.3rem'}}>
Please choose your language.
</p>
<p style={{fontFamily:'DM Sans',fontSize:'1rem',color:'#6B7280',marginBottom:'2.5rem'}}>
Por favor elige tu idioma.
</p>
<div style={{display:'flex',flexDirection:'column',gap:14,alignItems:'center'}}>
<button
onClick={()=>choose('en')}
style={{fontFamily:'Fredoka',fontSize:'1.2rem',fontWeight:700,color:'#0F1D3D',background:'linear-gradient(to right,#F7C948,#F5A623)',border:'none',borderRadius:999,padding:'14px 48px',cursor:'pointer',width:'100%',maxWidth:320,boxShadow:'0 4px 14px rgba(245,166,35,0.35)',transition:'transform 0.15s'}}
onMouseEnter={e=>e.currentTarget.style.transform='translateY(-2px)'}
onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}
>
&#x1F1FA;&#x1F1F8; Continue in English
</button>
<button
onClick={()=>choose('es')}
style={{fontFamily:'Fredoka',fontSize:'1.2rem',fontWeight:700,color:'#FFFFFF',background:'linear-gradient(135deg,#1B2D5B,#1B4A6B)',border:'none',borderRadius:999,padding:'14px 48px',cursor:'pointer',width:'100%',maxWidth:320,boxShadow:'0 4px 14px rgba(27,45,91,0.3)',transition:'transform 0.15s'}}
onMouseEnter={e=>e.currentTarget.style.transform='translateY(-2px)'}
onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}
>
&#x1F1EA;&#x1F1F8; Continuar en Español
</button>
</div>
<p style={{fontFamily:'DM Sans',fontSize:'0.75rem',color:'#9CA3AF',marginTop:'1.75rem',marginBottom:0}}>
You can change this anytime · Puedes cambiar esto en cualquier momento
</p>
</div>
</div>
)}
{children}
</LanguageContext.Provider>
);
}

export function useLanguage(){
const ctx=useContext(LanguageContext);
if(!ctx)throw new Error('useLanguage must be used within LanguageProvider');
return ctx;
}
