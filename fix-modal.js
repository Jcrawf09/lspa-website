// ═══════════════════════════════════════════════════════════════
//  FIX MODAL — Restore feature cards, put gallery BELOW them
//  Run from: C:\Users\johnt\Downloads\lspa-website
//  Command:  node fix-modal.js
// ═══════════════════════════════════════════════════════════════

const fs = require('fs');

console.log('\n========================================');
console.log('  Fixing LearnMoreModal');
console.log('========================================\n');

const filePath = 'app/components/LearnMoreModal.jsx';
if (!fs.existsSync(filePath)) {
  console.log('ERROR: ' + filePath + ' not found!');
  process.exit(1);
}

let m = fs.readFileSync(filePath, 'utf8');

// Check if gallery state exists, if not add it
if (!m.includes('showGallery')) {
  m = m.replace(
    "const [phase, setPhase] = useState('closed');",
    "const [phase, setPhase] = useState('closed');\n  const [showGallery, setShowGallery] = useState(false);\n  const [lightbox, setLightbox] = useState(-1);"
  );
  console.log('  Added gallery state');
}

// Reset showGallery when modal closes
if (!m.includes('setShowGallery(false)')) {
  m = m.replace(
    "if (phase !== 'closed') { document.body.style.overflow = 'hidden'; }",
    "if (phase === 'closed') { setShowGallery(false); setLightbox(-1); }\n    if (phase !== 'closed') { document.body.style.overflow = 'hidden'; }"
  );
}

// Now find the feature cards grid section and what comes after
// The cards are in: <div style={{ display: 'grid', gridTemplateColumns...
// We need to find what's AFTER the cards grid closing </div> and BEFORE the final closing </div>s

// Strategy: Find the "Inside Our Classrooms" section or the old gallery section and replace it
// Also find any remnant of "Read Our Full Story" or "Peek Inside"

// Let's find the cards grid end and replace everything between there and the closing divs
var cardsGridMarker = "gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))'";
var cardsIdx = m.indexOf(cardsGridMarker);

if (cardsIdx === -1) {
  console.log('  WARNING: Could not find feature cards grid');
  // Try alternate format
  cardsGridMarker = "gridTemplateColumns:'repeat(auto-fit, minmax(230px, 1fr))'";
  cardsIdx = m.indexOf(cardsGridMarker);
}

if (cardsIdx !== -1) {
  console.log('  Found feature cards grid');
  
  // Find the closing </div> of the cards grid
  var afterCards = m.indexOf('</div>', cardsIdx);
  afterCards = m.indexOf('\n', afterCards) + 1;
  
  // Now find where the main content padding div ends
  // Look for the sequence of closing </div> tags at the end of the component
  // We want to insert our gallery section right after the cards grid closes
  
  // Find everything after the cards grid div until we hit the closing structure
  // Let's find the last few </div> before the final </> or return end
  
  // Simpler approach: find everything between the cards grid and the end,
  // remove any existing gallery/button stuff, and insert fresh gallery code
  
  // Find the closing of the cards grid div
  var gridDivStart = m.lastIndexOf('<div', cardsIdx);
  var depth = 0;
  var pos = gridDivStart;
  var gridEnd = -1;
  while (pos < m.length) {
    if (m.substring(pos, pos + 4) === '<div') { depth++; pos += 4; }
    else if (m.substring(pos, pos + 6) === '</div>') {
      depth--;
      if (depth === 0) { gridEnd = pos + 6; break; }
      pos += 6;
    } else { pos++; }
  }
  
  if (gridEnd !== -1) {
    console.log('  Found cards grid end at position ' + gridEnd);
    
    // Now find the closing </div></div></div> structure that ends the modal
    // These are: content padding div, modal panel div, fixed overlay div
    // Count backwards from the end of the file to find where content ends
    
    // Find the return statement's closing or the last few divs
    var closingPattern = '</div>\n      </div>\n    </div>';
    var closingIdx = m.indexOf(closingPattern, gridEnd);
    
    if (closingIdx === -1) {
      // Try with different spacing
      closingPattern = '</div>\n        </div>\n      </div>\n    </div>';
      closingIdx = m.indexOf(closingPattern, gridEnd);
    }
    
    if (closingIdx === -1) {
      // Just find 3 consecutive </div> near the end
      var lastDiv1 = m.lastIndexOf('</div>');
      var lastDiv2 = m.lastIndexOf('</div>', lastDiv1 - 1);
      var lastDiv3 = m.lastIndexOf('</div>', lastDiv2 - 1);
      var lastDiv4 = m.lastIndexOf('</div>', lastDiv3 - 1);
      closingIdx = lastDiv4;
    }
    
    // Replace everything between grid end and closing divs with our gallery
    var galleryCode = '\n\n            {/* PEEK INSIDE CLASSROOMS */}\n            <div style={{ textAlign: \'center\', marginTop: 32 }}>\n              {!showGallery ? (\n                <button onClick={() => setShowGallery(true)} style={{\n                  display: \'inline-flex\', alignItems: \'center\', gap: 10,\n                  fontFamily: \'DM Sans, sans-serif\', fontSize: 15, fontWeight: 600,\n                  color: \'#2e7d52\', background: \'#f0faf4\',\n                  padding: \'14px 32px\', borderRadius: 50, border: \'2px solid #d4edda\',\n                  cursor: \'pointer\', boxShadow: \'0 4px 16px rgba(46,125,82,0.1)\',\n                  transition: \'all 0.3s ease\',\n                }}\n                  onMouseEnter={e => { e.currentTarget.style.background = \'#e0f5ea\'; e.currentTarget.style.borderColor = \'#48a870\'; e.currentTarget.style.transform = \'translateY(-2px)\'; e.currentTarget.style.boxShadow = \'0 8px 24px rgba(46,125,82,0.2)\'; }}\n                  onMouseLeave={e => { e.currentTarget.style.background = \'#f0faf4\'; e.currentTarget.style.borderColor = \'#d4edda\'; e.currentTarget.style.transform = \'translateY(0)\'; e.currentTarget.style.boxShadow = \'0 4px 16px rgba(46,125,82,0.1)\'; }}\n                >\n                  Peek Inside Our Classrooms\n                </button>\n              ) : (\n                <div style={{\n                  marginTop: 8, textAlign: \'left\',\n                  animation: \'lmFloat 0.001s\',\n                }}>\n                  <div style={{ display: \'flex\', alignItems: \'center\', justifyContent: \'space-between\', marginBottom: 16 }}>\n                    <h3 style={{ fontFamily: \'DM Sans, sans-serif\', fontSize: 20, fontWeight: 700, color: \'#1a3a2a\', margin: 0 }}>\n                      Inside Our Classrooms\n                    </h3>\n                    <button onClick={() => { setShowGallery(false); setLightbox(-1); }} style={{\n                      background: \'rgba(0,0,0,0.06)\', border: \'none\', borderRadius: \'50%\',\n                      width: 28, height: 28, cursor: \'pointer\', fontSize: 13, color: \'#4a6355\',\n                      display: \'flex\', alignItems: \'center\', justifyContent: \'center\',\n                      transition: \'background 0.2s\',\n                    }}\n                      onMouseEnter={e => e.currentTarget.style.background = \'rgba(0,0,0,0.12)\'}\n                      onMouseLeave={e => e.currentTarget.style.background = \'rgba(0,0,0,0.06)\'}\n                    >X</button>\n                  </div>\n\n                  {lightbox === -1 ? (\n                    <div style={{\n                      display: \'grid\', gridTemplateColumns: \'repeat(3, 1fr)\', gap: 10,\n                    }}>\n                      {[\n                        { label: \'Circle Time\', gradient: \'linear-gradient(135deg, #667eea, #764ba2)\' },\n                        { label: \'Art Studio\', gradient: \'linear-gradient(135deg, #f093fb, #f5576c)\' },\n                        { label: \'Outdoor Play\', gradient: \'linear-gradient(135deg, #4facfe, #00f2fe)\' },\n                        { label: \'STEM Discovery\', gradient: \'linear-gradient(135deg, #43e97b, #38f9d7)\' },\n                        { label: \'Music Time\', gradient: \'linear-gradient(135deg, #fa709a, #fee140)\' },\n                        { label: \'Snack Time\', gradient: \'linear-gradient(135deg, #a18cd1, #fbc2eb)\' },\n                      ].map((photo, idx) => (\n                        <div key={idx} onClick={() => setLightbox(idx)} style={{\n                          aspectRatio: \'1\', borderRadius: 14, cursor: \'pointer\',\n                          background: photo.gradient, position: \'relative\', overflow: \'hidden\',\n                          display: \'flex\', flexDirection: \'column\', alignItems: \'center\', justifyContent: \'center\',\n                          transition: \'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s\',\n                        }}\n                          onMouseEnter={e => { e.currentTarget.style.transform = \'scale(1.05)\'; e.currentTarget.style.boxShadow = \'0 12px 32px rgba(0,0,0,0.2)\'; }}\n                          onMouseLeave={e => { e.currentTarget.style.transform = \'scale(1)\'; e.currentTarget.style.boxShadow = \'none\'; }}\n                        >\n                          <span style={{ fontFamily: \'DM Sans, sans-serif\', fontSize: 11, fontWeight: 700, color: \'#fff\', textTransform: \'uppercase\', letterSpacing: 1.5, textShadow: \'0 1px 3px rgba(0,0,0,0.3)\' }}>{photo.label}</span>\n                          <span style={{ position: \'absolute\', bottom: 6, right: 8, fontSize: 9, color: \'rgba(255,255,255,0.5)\', fontFamily: \'DM Sans\' }}>Photo placeholder</span>\n                        </div>\n                      ))}\n                    </div>\n                  ) : (\n                    <div style={{ textAlign: \'center\' }}>\n                      <div style={{\n                        width: \'100%\', aspectRatio: \'16/10\', borderRadius: 14, overflow: \'hidden\',\n                        background: [\n                          \'linear-gradient(135deg, #667eea, #764ba2)\',\n                          \'linear-gradient(135deg, #f093fb, #f5576c)\',\n                          \'linear-gradient(135deg, #4facfe, #00f2fe)\',\n                          \'linear-gradient(135deg, #43e97b, #38f9d7)\',\n                          \'linear-gradient(135deg, #fa709a, #fee140)\',\n                          \'linear-gradient(135deg, #a18cd1, #fbc2eb)\',\n                        ][lightbox],\n                        display: \'flex\', flexDirection: \'column\', alignItems: \'center\', justifyContent: \'center\',\n                      }}>\n                        <span style={{ fontFamily: \'DM Sans\', fontSize: 18, fontWeight: 700, color: \'#fff\', textShadow: \'0 2px 8px rgba(0,0,0,0.2)\' }}>\n                          {[\'Circle Time\', \'Art Studio\', \'Outdoor Play\', \'STEM Discovery\', \'Music Time\', \'Snack Time\'][lightbox]}\n                        </span>\n                        <span style={{ fontFamily: \'DM Sans\', fontSize: 12, color: \'rgba(255,255,255,0.6)\', marginTop: 4 }}>Replace with classroom photo</span>\n                      </div>\n                      <div style={{ display: \'flex\', justifyContent: \'center\', gap: 12, marginTop: 14 }}>\n                        <button onClick={() => setLightbox(lightbox > 0 ? lightbox - 1 : 5)} style={{ width: 36, height: 36, borderRadius: \'50%\', border: \'1px solid #e8efe9\', background: \'#fff\', cursor: \'pointer\', fontSize: 16, color: \'#2e7d52\', display: \'flex\', alignItems: \'center\', justifyContent: \'center\' }}>{\'<\'}</button>\n                        <button onClick={() => setLightbox(-1)} style={{ padding: \'6px 18px\', borderRadius: 20, border: \'1px solid #e8efe9\', background: \'#fff\', cursor: \'pointer\', fontSize: 12, fontFamily: \'DM Sans\', fontWeight: 600, color: \'#4a6355\' }}>Back to Grid</button>\n                        <button onClick={() => setLightbox(lightbox < 5 ? lightbox + 1 : 0)} style={{ width: 36, height: 36, borderRadius: \'50%\', border: \'1px solid #e8efe9\', background: \'#fff\', cursor: \'pointer\', fontSize: 16, color: \'#2e7d52\', display: \'flex\', alignItems: \'center\', justifyContent: \'center\' }}>{\'>\'}  </button>\n                      </div>\n                    </div>\n                  )}\n                </div>\n              )}\n            </div>\n';
    
    m = m.substring(0, gridEnd) + galleryCode + m.substring(closingIdx);
    console.log('  Inserted gallery below feature cards');
  }
} else {
  console.log('  ERROR: Could not locate feature cards');
}

fs.writeFileSync(filePath, m, 'utf8');
console.log('\n  DONE! Feature cards stay, gallery appears below them.');
console.log('  Refresh browser.\n');
