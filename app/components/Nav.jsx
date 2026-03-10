'use client';
import{useState,useEffect}from'react';
import{usePathname}from'next/navigation';
import Link from'next/link';
import{useLanguage}from'../i18n/LanguageProvider';

const linkKeys=[
{key:'home',href:'/'},
{key:'about',href:'/about-us'},
{key:'programs',href:'/#programs'},
{key:'locations',href:'/#locations'},
{key:'resources',href:'/resources'},
{key:'contact',href:'/#contact'},
];

export default function Nav(){
const pathname=usePathname();
const{lang,switchLanguage,t}=useLanguage();
const[scrolled,setScrolled]=useState(false);
const[menuOpen,setMenuOpen]=useState(false);

useEffect(()=>{
const h=()=>setScrolled(window.scrollY>20);
window.addEventListener('scroll',h);
return()=>window.removeEventListener('scroll',h);
},[]);

useEffect(()=>{
if(menuOpen)document.body.style.overflow='hidden';
else document.body.style.overflow='';
return()=>{document.body.style.overflow='';};
},[menuOpen]);

const isActive=(href)=>{
if(href==='/')return pathname==='/';
if(href.startsWith('/#'))return pathname==='/';
return pathname.startsWith(href);
};

return(
<>
<div className='w-full text-center py-1.5 text-xs md:text-sm relative z-50' style={{background:'#0F1D3D',color:'rgba(255,255,255,0.8)',fontFamily:'DM Sans'}}>
<div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
<span style={{color:'#F7C948',fontWeight:600}}>{t('topBar.tagline')}</span>
<div className='flex items-center gap-3'>
<button onClick={()=>switchLanguage(lang==='en'?'es':'en')} className='px-2 py-0.5 rounded text-xs font-bold cursor-pointer transition-all hover:opacity-80' style={{background:'rgba(247,201,72,0.15)',color:'#F7C948',border:'1px solid rgba(247,201,72,0.3)',fontFamily:'DM Sans'}}>{lang==='en'?'ES':'EN'}</button>
<a href='tel:6093967171' className='font-bold hover:underline' style={{color:'#F7C948'}}>(609) 396-7171</a>
</div>
</div>
</div>

<nav className={'sticky top-0 z-40 transition-all duration-300 '+(scrolled?'shadow-lg':'')} style={{background:'#FFFDF7',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>
<div className='max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between' style={{height:72}}>

<Link href='/' className='flex items-center gap-3' style={{textDecoration:'none'}}>
<img src='/images/lspa-logo-white.jpeg' alt='LSPA' style={{width:44,height:44,borderRadius:10,objectFit:'contain'}}/>
<div>
<div className='font-bold text-base leading-tight' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>Laura Spelman</div>
<div className='text-xs font-bold tracking-[2px] uppercase' style={{color:'#F5A623'}}>Preschool Academy</div>
</div>
</Link>

<div className='hidden lg:flex items-center gap-1'>
{linkKeys.map(l=>(
<a key={l.key} href={l.href} className='px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200' style={{fontFamily:'DM Sans',color:isActive(l.href)?'#1B2D5B':'#6B7280',background:isActive(l.href)?'rgba(27,45,91,0.06)':'transparent',borderBottom:isActive(l.href)?'2px solid #F5A623':'2px solid transparent'}}>{t('nav.'+l.key)}</a>
))}
<a href='/enrollment' className='ml-2 px-5 py-2 rounded-full font-bold text-sm shadow-lg' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none'}}>{t('nav.enrollNow')}</a>
</div>

<button onClick={()=>setMenuOpen(!menuOpen)} className='lg:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer' style={{background:'none',border:'none',gap:5}}>
<span className='block h-0.5 w-6 rounded-full transition-all duration-300' style={{background:'#1B2D5B',transform:menuOpen?'rotate(45deg) translate(4px,4px)':'none'}}/>
<span className='block h-0.5 w-6 rounded-full transition-all duration-300' style={{background:'#1B2D5B',opacity:menuOpen?0:1}}/>
<span className='block h-0.5 w-6 rounded-full transition-all duration-300' style={{background:'#1B2D5B',transform:menuOpen?'rotate(-45deg) translate(4px,-4px)':'none'}}/>
</button>
</div>
</nav>

{menuOpen&&(
<div className='fixed inset-0 z-30' style={{background:'rgba(15,29,61,0.97)',paddingTop:120}} onClick={()=>setMenuOpen(false)}>
<div className='flex flex-col items-center gap-1' onClick={e=>e.stopPropagation()}>
{linkKeys.map(l=>(
<a key={l.key} href={l.href} onClick={()=>setMenuOpen(false)} className='block py-3 px-4 rounded-xl text-sm font-semibold transition-all mb-1' style={{fontFamily:'DM Sans',background:isActive(l.href)?'linear-gradient(135deg,#2e7d52,#48a870)':'transparent',color:'#fff',minWidth:200,textAlign:'center',textDecoration:'none'}}>{t('nav.'+l.key)}</a>
))}
<div style={{width:'100%',height:1,background:'#e8efe9',margin:'16px 0'}}/>
<button onClick={()=>{switchLanguage(lang==='en'?'es':'en');}} className='px-6 py-2 rounded-full text-sm font-bold cursor-pointer mb-3' style={{fontFamily:'DM Sans',background:'rgba(247,201,72,0.15)',color:'#F7C948',border:'1px solid rgba(247,201,72,0.3)'}}>{lang==='en'?'Cambiar a Espa\u00f1ol':'Switch to English'}</button>
<a href='/enrollment' onClick={()=>setMenuOpen(false)} className='block text-center py-3 rounded-full font-bold text-sm shadow-lg' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none',minWidth:200}}>{t('nav.enrollNow')}</a>
<a href='tel:6093967171' className='block text-center mt-3 py-3 rounded-full font-bold text-sm border-2' style={{fontFamily:'Fredoka',borderColor:'#d4edda',color:'#2e7d52',textDecoration:'none',minWidth:200}}>{t('nav.call')} (609) 396-7171</a>
</div>
</div>
)}
</>
);}
