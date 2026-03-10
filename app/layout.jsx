import './globals.css';
import{LanguageProvider}from'./i18n/LanguageProvider';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Quotes from './components/Quotes';

export const metadata = {title:'Laura Spelman Preschool Academy | Free Preschool in Trenton, NJ',description:'Free, high-quality preschool education for Trenton families.'};

export default function RootLayout({children}){
  return(
    <html lang='en'>
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
