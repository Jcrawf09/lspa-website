const fs = require('fs');

console.log('Fixing layout...\n');

// ------------------------------------------------------------
// 1. UPDATE layout.jsx - Add Nav and Footer
// ------------------------------------------------------------
const layout = `import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata = {title:'Laura Spelman Preschool Academy | Free Preschool in Trenton, NJ',description:'Free, high-quality preschool education for Trenton families.'};

export default function RootLayout({children}){
  return(
    <html lang='en'>
      <body style={{background:'#FFFDF7'}}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
`;

fs.writeFileSync('app/layout.jsx', layout, 'utf8');
console.log('1. layout.jsx updated - Nav and Footer now on every page.');

// ------------------------------------------------------------
// 2. REMOVE Nav and Footer imports/usage from page.jsx
// ------------------------------------------------------------
let page = fs.readFileSync('app/page.jsx', 'utf8');

// Remove Nav import
page = page.replace(/import\s+Nav\s+from\s+['"]\.\/components\/Nav['"];\s*/g, '');
// Remove Footer import
page = page.replace(/import\s+Footer\s+from\s+['"]\.\/components\/Footer['"];\s*/g, '');
// Remove <Nav/> from JSX
page = page.replace(/<Nav\s*\/>/g, '');
// Remove <Footer/> from JSX
page = page.replace(/<Footer\s*\/>/g, '');

fs.writeFileSync('app/page.jsx', page, 'utf8');
console.log('2. page.jsx updated - Removed Nav and Footer (now in layout).');

console.log('\nDone! Nav and Footer will now appear on every page.');
console.log('Check localhost:3000/resources - header should be there.');
