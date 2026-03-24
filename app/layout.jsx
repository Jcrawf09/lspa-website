import './globals.css';
import{LanguageProvider}from'./i18n/LanguageProvider';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Quotes from './components/Quotes';
import Script from 'next/script';
export const metadata = {title:'Laura Spelman Preschool Academy | Free Preschool in Trenton, NJ',description:'Free, high-quality preschool education for Trenton families.',icons:{icon:'/favicon.ico',apple:'/apple-touch-icon.png'}};
export default function RootLayout({children}){
  return(
    <html lang='en'>
      <body style={{background:'#FFFDF7'}}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YRLG1T53CX" strategy="afterInteractive"/>
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YRLG1T53CX');
        `}</Script>
        <LanguageProvider>
        <Nav/>
        {children}
        <Footer/>
        </LanguageProvider>
      <Quotes /></body>
    </html>
  );
}
