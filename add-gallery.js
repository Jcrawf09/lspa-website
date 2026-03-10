// ═══════════════════════════════════════════════════════════════
//  ADD PHOTO GALLERY TO LEARN MORE MODAL
//  Run from: C:\Users\johnt\Downloads\lspa-website
//  Command:  node add-gallery.js
// ═══════════════════════════════════════════════════════════════

const fs = require('fs');

console.log('\n========================================');
console.log('  Adding Photo Gallery to Modal');
console.log('========================================\n');

if (!fs.existsSync('app/components/LearnMoreModal.jsx')) {
  console.log('ERROR: LearnMoreModal.jsx not found!');
  process.exit(1);
}

let m = fs.readFileSync('app/components/LearnMoreModal.jsx', 'utf8');

// Step 1: Add gallery state near the top of the component
// Find the phase state and add gallery state after it
m = m.replace(
  "const [phase, setPhase] = useState('closed');",
  "const [phase, setPhase] = useState('closed');\n  const [showGallery, setShowGallery] = useState(false);\n  const [lightbox, setLightbox] = useState(-1);"
);

// Step 2: Replace the "Read Our Full Story" button section with gallery button + gallery view
// Find the whole bottom CTA / Read Our Full Story area
var readIdx = m.indexOf('Read Our Full Story');
if (readIdx === -1) {
  console.log('WARNING: Could not find Read Our Full Story text');
} else {
  // Find the opening <div of this section (go backwards to find the container)
  // Look for the div with textAlign center and marginTop 36
  var searchBack = m.lastIndexOf('<div', readIdx);
  // Go further back to find the wrapper div with style
  var wrapperStart = m.lastIndexOf('<div', searchBack - 1);

  // Find the matching closing tags
  var depth = 0;
  var pos = wrapperStart;
  var endPos = -1;
  while (pos < m.length) {
    if (m.substring(pos, pos + 4) === '<div') { depth++; pos += 4; }
    else if (m.substring(pos, pos + 6) === '</div>') {
      depth--;
      if (depth === 0) { endPos = pos + 6; break; }
      pos += 6;
    } else { pos++; }
  }

  if (endPos !== -1) {
    var gallerySection = `{/* PHOTO GALLERY SECTION */}
            {!showGallery ? (
              <div style={{
                textAlign: 'center', marginTop: 36,
                opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease 0.7s',
              }}>
                <button onClick={() => setShowGallery(true)} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 600,
                  color: '#fff', background: 'linear-gradient(135deg,#2e7d52,#48a870)',
                  padding: '14px 36px', borderRadius: 50, border: 'none', cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(46,125,82,0.3)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(46,125,82,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(46,125,82,0.3)'; }}
                >
                  <span style={{ fontSize: 20 }}>{String.fromCharCode(0x1F4F8)}</span>
                  Peek Inside Our Classrooms
                </button>
              </div>
            ) : (
              <div style={{
                marginTop: 32,
                opacity: showGallery ? 1 : 0,
                transform: showGallery ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 22, fontWeight: 700, color: '#1a3a2a', margin: 0 }}>
                    {String.fromCharCode(0x2728)} Inside Our Classrooms
                  </h3>
                  <button onClick={() => { setShowGallery(false); setLightbox(-1); }} style={{
                    background: 'rgba(0,0,0,0.06)', border: 'none', borderRadius: '50%',
                    width: 32, height: 32, cursor: 'pointer', fontSize: 14, color: '#4a6355',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.06)'}
                  >X</button>
                </div>

                {lightbox === -1 ? (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 12,
                  }}>
                    {[
                      { label: 'Circle Time', gradient: 'linear-gradient(135deg, #667eea, #764ba2)', icon: String.fromCharCode(0x1F4D6) },
                      { label: 'Art Studio', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)', icon: String.fromCharCode(0x1F3A8) },
                      { label: 'Outdoor Play', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)', icon: String.fromCharCode(0x2600, 0xFE0F) },
                      { label: 'STEM Discovery', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)', icon: String.fromCharCode(0x1F52C) },
                      { label: 'Music & Movement', gradient: 'linear-gradient(135deg, #fa709a, #fee140)', icon: String.fromCharCode(0x1F3B5) },
                      { label: 'Snack Time', gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)', icon: String.fromCharCode(0x1F34E) },
                    ].map((photo, idx) => (
                      <div
                        key={idx}
                        onClick={() => setLightbox(idx)}
                        style={{
                          aspectRatio: '1', borderRadius: 16, cursor: 'pointer',
                          background: photo.gradient, position: 'relative', overflow: 'hidden',
                          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s',
                          animation: 'none',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.2)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                      >
                        <span style={{ fontSize: 36, marginBottom: 8, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>{photo.icon}</span>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: 1.5, textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>{photo.label}</span>
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.05)', opacity: 0, transition: 'opacity 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                        />
                        <div style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(255,255,255,0.25)', borderRadius: 20, padding: '4px 10px', fontSize: 10, color: '#fff', fontFamily: 'DM Sans', fontWeight: 600 }}>
                          Photo placeholder
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '100%', aspectRatio: '16/10', borderRadius: 16, overflow: 'hidden',
                      background: [
                        'linear-gradient(135deg, #667eea, #764ba2)',
                        'linear-gradient(135deg, #f093fb, #f5576c)',
                        'linear-gradient(135deg, #4facfe, #00f2fe)',
                        'linear-gradient(135deg, #43e97b, #38f9d7)',
                        'linear-gradient(135deg, #fa709a, #fee140)',
                        'linear-gradient(135deg, #a18cd1, #fbc2eb)',
                      ][lightbox],
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.4s ease',
                    }}>
                      <span style={{ fontSize: 64, marginBottom: 12 }}>{[
                        String.fromCharCode(0x1F4D6),
                        String.fromCharCode(0x1F3A8),
                        String.fromCodePoint(0x2600, 0xFE0F),
                        String.fromCharCode(0x1F52C),
                        String.fromCharCode(0x1F3B5),
                        String.fromCharCode(0x1F34E),
                      ][lightbox]}</span>
                      <span style={{ fontFamily: 'DM Sans', fontSize: 18, fontWeight: 700, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                        {['Circle Time', 'Art Studio', 'Outdoor Play', 'STEM Discovery', 'Music & Movement', 'Snack Time'][lightbox]}
                      </span>
                      <span style={{ fontFamily: 'DM Sans', fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Replace with actual classroom photo</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 16 }}>
                      <button onClick={() => setLightbox(lightbox > 0 ? lightbox - 1 : 5)} style={{
                        width: 40, height: 40, borderRadius: '50%', border: '1px solid #e8efe9',
                        background: '#fff', cursor: 'pointer', fontSize: 18, color: '#2e7d52',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#f0faf4'; e.currentTarget.style.borderColor = '#48a870'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e8efe9'; }}
                      >{String.fromCharCode(0x2190)}</button>
                      <button onClick={() => setLightbox(-1)} style={{
                        padding: '8px 20px', borderRadius: 20, border: '1px solid #e8efe9',
                        background: '#fff', cursor: 'pointer', fontSize: 13, fontFamily: 'DM Sans',
                        fontWeight: 600, color: '#4a6355', transition: 'all 0.2s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#f0faf4'; e.currentTarget.style.borderColor = '#48a870'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e8efe9'; }}
                      >Back to Grid</button>
                      <button onClick={() => setLightbox(lightbox < 5 ? lightbox + 1 : 0)} style={{
                        width: 40, height: 40, borderRadius: '50%', border: '1px solid #e8efe9',
                        background: '#fff', cursor: 'pointer', fontSize: 18, color: '#2e7d52',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#f0faf4'; e.currentTarget.style.borderColor = '#48a870'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e8efe9'; }}
                      >{String.fromCharCode(0x2192)}</button>
                    </div>
                  </div>
                )}
              </div>
            )}`;

    m = m.substring(0, wrapperStart) + gallerySection + m.substring(endPos);
    console.log('  Replaced Read Our Full Story with photo gallery');
  } else {
    console.log('  WARNING: Could not find closing tag for button section');
  }
}

// Step 3: Add useState import if not already there for showGallery
// Already using useState from the existing import, so no change needed

fs.writeFileSync('app/components/LearnMoreModal.jsx', m, 'utf8');

console.log('\n========================================');
console.log('  GALLERY ADDED!');
console.log('========================================');
console.log('\nThe "Read Our Full Story" button is now "Peek Inside Our Classrooms"');
console.log('Clicking it reveals a 6-photo grid with lightbox navigation.');
console.log('Photos are placeholders - swap with real classroom images later.\n');
