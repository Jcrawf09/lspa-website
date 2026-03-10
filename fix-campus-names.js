const fs = require('fs');

function patch(filepath, fn) {
  if (!fs.existsSync(filepath)) { console.log('SKIP (not found):', filepath); return; }
  const before = fs.readFileSync(filepath, 'utf8');
  const after = fn(before);
  if (before === after) { console.log('NO CHANGE:', filepath); return; }
  fs.writeFileSync(filepath, after, 'utf8');
  console.log('PATCHED:', filepath);
}

// ── our-team/page.jsx ──────────────────────────────────────────────────────
patch('app/our-team/page.jsx', s => {
  return s
    // data values
    .replace(/campus:'Trenton Campus'/g, "campus:'540 N. Olden Ave'")
    .replace(/campus:'Lawrence Campus'/g, "campus:'1040 Spruce St'")
    .replace(/campus: 'Trenton Campus'/g, "campus: '540 N. Olden Ave'")
    .replace(/campus: 'Lawrence Campus'/g, "campus: '1040 Spruce St'")
    // remove room assignments e.g.  ,room:'1'  or ,room:'2'
    .replace(/,room:'[^']*'/g, '')
    .replace(/,room: '[^']*'/g, '')
    // campusDisplay function
    .replace(/c==='Trenton Campus'\?'Olden Ave':'Spruce St'/, "c==='540 N. Olden Ave'?'Olden Ave':'Spruce St'")
    // filter labels object keys and values
    .replace(/'Trenton Campus':\s*lang\s*===\s*'es'\s*\?\s*'Campus de Trenton'\s*:\s*'Trenton Campus'/g,
             "'540 N. Olden Ave': lang === 'es' ? '540 N. Olden Ave' : '540 N. Olden Ave'")
    .replace(/'Lawrence Campus':\s*lang\s*===\s*'es'\s*\?\s*'Campus de Lawrence'\s*:\s*'Lawrence Campus'/g,
             "'1040 Spruce St': lang === 'es' ? '1040 Spruce St' : '1040 Spruce St'")
    // filter button array
    .replace("'All','Trenton Campus','Lawrence Campus'", "'All','540 N. Olden Ave','1040 Spruce St'")
    // any remaining string references
    .replace(/['"]Trenton Campus['"]/g, "'540 N. Olden Ave'")
    .replace(/['"]Lawrence Campus['"]/g, "'1040 Spruce St'");
});

// ── careers/page.jsx ───────────────────────────────────────────────────────
patch('app/careers/page.jsx', s => {
  return s
    .replace(/location:\s*["']Trenton Campus["']/g, 'location: "540 N. Olden Ave"')
    .replace(/location:\s*["']Lawrence Campus["']/g, 'location: "1040 Spruce St"')
    .replace(/['"]Trenton Campus['"]/g, '"540 N. Olden Ave"')
    .replace(/['"]Lawrence Campus['"]/g, '"1040 Spruce St"');
});

// ── components/Footer.jsx ─────────────────────────────────────────────────
patch('app/components/Footer.jsx', s => {
  // Remove the label lines "Trenton Campus<br/>" and "Lawrence Campus<br/>"
  return s
    .replace(/Trenton Campus<br\/>/g, '')
    .replace(/Lawrence Campus<br\/>/g, '')
    .replace(/['"]Trenton Campus['"]/g, '"540 N. Olden Ave"')
    .replace(/['"]Lawrence Campus['"]/g, '"1040 Spruce St"');
});

// ── i18n/en.json ──────────────────────────────────────────────────────────
patch('app/i18n/en.json', s => {
  return s
    .replace(/"trentonCampus":\s*"Trenton Campus"/g, '"trentonCampus": "540 N. Olden Ave"')
    .replace(/"lawrenceCampus":\s*"Lawrence Campus"/g, '"lawrenceCampus": "1040 Spruce St"')
    .replace(/Trenton or Lawrence campus/g, '540 N. Olden Ave or 1040 Spruce St location')
    .replace(/['"]Trenton Campus['"]/g, '"540 N. Olden Ave"')
    .replace(/['"]Lawrence Campus['"]/g, '"1040 Spruce St"');
});

// ── i18n/es.json ──────────────────────────────────────────────────────────
patch('app/i18n/es.json', s => {
  return s
    .replace(/Campus de Trenton/g, '540 N. Olden Ave')
    .replace(/Campus de Lawrence/g, '1040 Spruce St')
    .replace(/['"]Trenton Campus['"]/g, '"540 N. Olden Ave"')
    .replace(/['"]Lawrence Campus['"]/g, '"1040 Spruce St"');
});

// ── components/Locations.jsx (safety pass) ────────────────────────────────
patch('app/components/Locations.jsx', s => {
  return s
    .replace(/Trenton Campus/g, '540 N. Olden Ave')
    .replace(/Lawrence Campus/g, '1040 Spruce St');
});

// ── about-us/page.jsx (safety pass) ───────────────────────────────────────
patch('app/about-us/page.jsx', s => {
  return s
    .replace(/Trenton Campus/g, '540 N. Olden Ave')
    .replace(/Lawrence Campus/g, '1040 Spruce St');
});

console.log('\nDone. Refresh localhost:3000 to verify.');
