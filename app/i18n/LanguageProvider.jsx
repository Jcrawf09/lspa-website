'use client';
import{createContext,useContext,useState,useEffect}from'react';
import en from'./en.json';
import es from'./es.json';

const translations={en,es};
const LanguageContext=createContext();

export function LanguageProvider({children}){
const[lang,setLang]=useState('en');
const[loaded,setLoaded]=useState(false);

useEffect(()=>{
// Check localStorage first (manual override)
const saved=localStorage.getItem('lspa-lang');
if(saved&&translations[saved]){setLang(saved);setLoaded(true);return;}

// Auto-detect from browser
const browserLang=navigator.language||navigator.userLanguage||'en';
const prefix=browserLang.toLowerCase().split('-')[0];
if(prefix==='es'){setLang('es');}
setLoaded(true);
},[]);

const switchLanguage=(newLang)=>{
if(translations[newLang]){
setLang(newLang);
localStorage.setItem('lspa-lang',newLang);
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

// Get nested value that might be array or object
const tObj=(key)=>{
const keys=key.split('.');
let val=translations[lang];
for(const k of keys){
if(val&&typeof val==='object'&&k in val)val=val[k];
else return null;
}
return val;
};

return(
<LanguageContext.Provider value={{lang,switchLanguage,t,tObj,loaded}}>
{children}
</LanguageContext.Provider>
);
}

export function useLanguage(){
const ctx=useContext(LanguageContext);
if(!ctx)throw new Error('useLanguage must be used within LanguageProvider');
return ctx;
}
