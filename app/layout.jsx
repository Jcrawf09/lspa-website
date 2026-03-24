import './globals.css';
import{LanguageProvider}from'./i18n/LanguageProvider';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Quotes from './components/Quotes';
import Script from 'next/script';
export const metadata = {title:'Laura Spelman Preschool Academy | Free Preschool in Trenton, NJ',description:'Free, high-quality preschool education for Trenton families.',icons:{icon:'/favicon.ico',apple:'/apple-touch-icon.png'},verification:{google:'E6Ftv4R8kXrPew1ghUd3dlKOutqqa0ta1TKix-biMow'}};
export default function RootLayout({children}){
  return(
    <html lang='en'>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YRLG1T53CX" strategy="beforeInteractive"/>
        <Script id="google-analytics" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YRLG1T53CX');
        `}</Script>
      </head>
      <body style={{background:'#FFFDF7'}}>
        <LanguageProvider>
        <Nav/>
        {children}
        <Footer/>
        </LanguageProvider>
      <Quotes /></body>
    </html>
  );
}
