import './globals.css';
import{LanguageProvider}from'./i18n/LanguageProvider';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Quotes from './components/Quotes';
import Script from 'next/script';

export const metadata = {title:'Laura Spelman Preschool Academy | Free Preschool in Trenton, NJ',description:'Free, high-quality preschool education for Trenton families.',icons:{icon:'/favicon.ico',apple:'/apple-touch-icon.png'},verification:{google:'E6Ftv4R8kXrPew1ghUd3dlKOutqqa0ta1TKix-biMow'}};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ChildCare",
      "@id": "https://lspalearn.org/#olden",
      "name": "Laura Spelman Preschool Academy",
      "alternateName": "LSPA",
      "url": "https://lspalearn.org",
      "description": "Free, state-funded preschool for Trenton residents. Children must be 3 or 4 years old by October 1.",
      "telephone": "(609) 396-7171",
      "priceRange": "Free",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "540 N. Olden Ave.",
        "addressLocality": "Trenton",
        "addressRegion": "NJ",
        "postalCode": "08638",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:45",
        "closes": "14:45"
      }],
      "sameAs": ["https://www.facebook.com/LauraSPelmanPreschoolAcademy","https://lauraspelmanpreschoolacademy.org"],
      "isAccessibleForFree": true
    },
    {
      "@type": "ChildCare",
      "@id": "https://lspalearn.org/#spruce",
      "name": "Laura Spelman Preschool Academy — Spruce Street Campus",
      "url": "https://lspalearn.org",
      "description": "Free, state-funded preschool for Trenton and Lawrence residents. Children must be 3 or 4 years old by October 1.",
      "telephone": "(609) 396-7171",
      "priceRange": "Free",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1040 Spruce St.",
        "addressLocality": "Lawrence",
        "addressRegion": "NJ",
        "postalCode": "08648",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:45",
        "closes": "14:45"
      }],
      "sameAs": ["https://www.facebook.com/LauraSPelmanPreschoolAcademy","https://lauraspelmanpreschoolacademy.org"],
      "isAccessibleForFree": true
    }
  ]
};

export default function RootLayout({children}){
  return(
    <html lang='en'>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
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
