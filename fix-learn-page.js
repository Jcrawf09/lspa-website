const fs = require('fs');

let content = fs.readFileSync('app/learn/page.jsx', 'utf8');

// 1. Fix the "Pick a game" text
content = content.replace(
  `Pick a game to play 👇`,
  `Pick an LSPA Game to Play 👇`
);

// 2. Add back button — inject right after the hero section closing tag
// The hero section ends just before "Pick a game" prompt area
// We look for the prompt paragraph and inject the back button above it
const oldPrompt = `      <p style={{textAlign:'center',fontFamily:'Fredoka,sans-serif',fontSize:'1.3rem',color:'#8892A4',marginBottom:'2rem'}}>Pick an LSPA Game to Play 👇</p>`;

const newPrompt = `      <div style={{textAlign:'center',marginBottom:'1.5rem'}}>
        <a href="/resources" style={{
          display:'inline-flex',alignItems:'center',gap:8,
          fontFamily:'DM Sans,sans-serif',fontSize:'0.88rem',fontWeight:600,
          color:'#4BA3E3',textDecoration:'none',
          background:'rgba(75,163,227,0.08)',
          border:'1px solid rgba(75,163,227,0.25)',
          borderRadius:999,padding:'8px 18px',
          transition:'all 0.2s'
        }}>
          ← Back to Resources
        </a>
      </div>
      <p style={{textAlign:'center',fontFamily:'Fredoka,sans-serif',fontSize:'1.3rem',color:'#8892A4',marginBottom:'2rem'}}>Pick an LSPA Game to Play 👇</p>`;

if (content.includes(oldPrompt)) {
  content = content.replace(oldPrompt, newPrompt);
  console.log('Back button + heading updated.');
} else {
  // Fallback: just fix the text if structure differs slightly
  console.log('Exact prompt match not found — attempting text-only fix.');
  content = content.replace(
    /Pick an LSPA Game to Play 👇<\/p>/,
    `Pick an LSPA Game to Play 👇</p>`
  );
  // Try to find any paragraph near the game picker and inject back button before it
  content = content.replace(
    /<p style=\{[^}]*Pick an LSPA Game/,
    `<div style={{textAlign:'center',marginBottom:'1.5rem'}}>
        <a href="/resources" style={{
          display:'inline-flex',alignItems:'center',gap:8,
          fontFamily:'DM Sans,sans-serif',fontSize:'0.88rem',fontWeight:600,
          color:'#4BA3E3',textDecoration:'none',
          background:'rgba(75,163,227,0.08)',
          border:'1px solid rgba(75,163,227,0.25)',
          borderRadius:999,padding:'8px 18px'
        }}>
          ← Back to Resources
        </a>
      </div>
      <p style={{textAlign:'center',fontFamily:'Fredoka,sans-serif',fontSize:'1.3rem',color:'#8892A4',marginBottom:'2rem'}}>Pick an LSPA Game`
  );
  console.log('Fallback applied.');
}

fs.writeFileSync('app/learn/page.jsx', content, 'utf8');
console.log('Done.');
