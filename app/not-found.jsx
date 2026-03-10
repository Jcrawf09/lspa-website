'use client';
import Link from 'next/link';
import{useLanguage}from'./i18n/LanguageProvider';

export default function NotFound() {
  const{t}=useLanguage();
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg,#1B2D5B 0%,#2A3A5E 50%,#3D2A5E 100%)',padding:'2rem'}}>
      <div style={{textAlign:'center',maxWidth:500}}>
        <div style={{fontFamily:'Fredoka',fontSize:'clamp(80px,15vw,160px)',fontWeight:'bold',lineHeight:1,background:'linear-gradient(to right,#F7C948,#F5A623)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>404</div>
        <h1 style={{fontFamily:'Fredoka',color:'#FFFFFF',fontSize:'clamp(20px,3vw,32px)',marginBottom:'0.75rem'}}>{t('notFound.heading')}</h1>
        <p style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)',marginBottom:'2rem'}}>{t('notFound.desc')}</p>
        <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
          <Link href='/' style={{padding:'0.85rem 2.5rem',background:'linear-gradient(to right,#F7C948,#F5A623)',borderRadius:'999px',color:'#0F1D3D',fontFamily:'Fredoka',fontWeight:'bold',textDecoration:'none',fontSize:'1rem'}}>{t('notFound.goHome')}</Link>
          <Link href='/enrollment' style={{padding:'0.85rem 2.5rem',border:'2px solid rgba(255,255,255,0.3)',borderRadius:'999px',color:'#FFFFFF',fontFamily:'Fredoka',fontWeight:'bold',textDecoration:'none',fontSize:'1rem'}}>{t('nav.enrollNow')}</Link>
        </div>
      </div>
    </div>
  );
}
