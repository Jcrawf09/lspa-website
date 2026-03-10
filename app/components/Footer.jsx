"use client";
import Link from "next/link";
import{useLanguage}from'../i18n/LanguageProvider';

export default function Footer() {
  const{t}=useLanguage();
  const links = [{l:t('nav.about'),h:"/about-us"},{l:t('nav.programs'),h:"/#programs"},{l:"Gallery",h:"/gallery"},{l:t('nav.enrollNow'),h:"/enrollment"},{l:t('nav.contact'),h:"/#contact"},{l:t('team.heading')+' '+t('team.headingAccent'),h:"/our-team"},{l:t('careers.heading')+' '+t('careers.headingAccent'),h:"/careers"},{l:t('nav.resources'),h:"/resources"}];

  return (
    <footer className="pt-16 pb-6" style={{background:"#0F1D3D"}}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-14">
            <div>
              <div style={{backgroundColor:"#ffffff",borderRadius:20,padding:12,display:"inline-block",marginBottom:16,marginLeft:"auto",marginRight:"auto"}}>
                <img src="/images/lspa-logo-white.jpeg" alt="LSPA" style={{width:130,height:130,objectFit:"contain"}} />
              </div>
              <div className="font-bold text-white text-2xl mb-1" style={{fontFamily:"Fredoka"}}>Laura Spelman</div>
              <div className="text-sm font-bold tracking-widest uppercase mb-4" style={{color:"#4BA3E3"}}>Preschool Academy</div>
              <p className="text-sm max-w-xs" style={{color:"rgba(255,255,255,0.35)"}}>{t('footer.desc')}</p>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-5" style={{color:"#F7C948"}}>{t('footer.locations')}</div>
              <div className="text-sm space-y-4" style={{color:"rgba(255,255,255,0.4)"}}>
                <div>
                  540 N. Olden Avenue<br/>Trenton, NJ 08638<br/>
                  <a href="tel:6093967171" style={{color:"#F7C948"}}>(609) 396-7171</a>
                </div>
                <div>
                  1040 Spruce Street<br/>Lawrence, NJ 08648<br/>
                  <a href="tel:6095711041" style={{color:"#F7C948"}}>(609) 571-1041</a>
                </div>
              </div>
              <div className="mt-5">
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:"#F7C948"}}>{t('footer.email')}</div>
                <a href="mailto:lauraspelmanacademy@verizon.net" className="text-sm" style={{color:"rgba(255,255,255,0.4)"}}>lauraspelmanacademy@verizon.net</a>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-5" style={{color:"#F7C948"}}>{t('footer.quickLinks')}</div>
              <div className="space-y-2">
                {links.map((l) => (
                  <a key={l.l} href={l.h} className="block text-sm" style={{color:"rgba(255,255,255,0.35)"}}>{l.l}</a>
                ))}
              </div>
            </div>
        </div>

        <div className="border-t pt-5 flex flex-wrap justify-between gap-3" style={{borderColor:"rgba(255,255,255,0.06)"}}>
          <div className="text-xs" style={{color:"rgba(255,255,255,0.25)"}}>{t('footer.copyright')}</div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-xs hover:underline" style={{color:"rgba(255,255,255,0.25)"}}>{t('footer.privacyPolicy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
