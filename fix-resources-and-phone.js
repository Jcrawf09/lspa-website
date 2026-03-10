const fs = require('fs');
const path = require('path');

// --- 1. Wire PDFs into resources page ---
const resourcesPath = path.join('app', 'resources', 'page.jsx');
let resources = fs.readFileSync(resourcesPath, 'utf8');

// English calendar
resources = resources.replace(
  `{name:'2025-2026 School Calendar',desc:'Key dates, holidays, and closings',link:'#'}`,
  `{name:'2025-2026 School Calendar',desc:'Key dates, holidays, and closings',link:'/documents/school-calendar-2025-2026.pdf'}`
);

// English upcoming events
resources = resources.replace(
  `{name:'Upcoming Events',desc:'Family nights, field trips, and celebrations',link:'#'}`,
  `{name:'Upcoming Events',desc:'Family nights, field trips, and celebrations',link:'/documents/bedtime-routines-workshop.pdf'}`
);

// Spanish calendar
resources = resources.replace(
  `{name:'Calendario Escolar 2025-2026',desc:'Fechas importantes, feriados y cierres',link:'#'}`,
  `{name:'Calendario Escolar 2025-2026',desc:'Fechas importantes, feriados y cierres',link:'/documents/school-calendar-2025-2026.pdf'}`
);

// Spanish upcoming events
resources = resources.replace(
  `{name:'Proximos Eventos',desc:'Noches familiares, excursiones y celebraciones',link:'#'}`,
  `{name:'Proximos Eventos',desc:'Noches familiares, excursiones y celebraciones',link:'/documents/bedtime-routines-workshop.pdf'}`
);

fs.writeFileSync(resourcesPath, resources, 'utf8');
console.log('Resources page updated with PDF links.');

// --- 2. Update Spruce St phone number site-wide ---
const filesToCheck = [
  path.join('app', 'components', 'Locations.jsx'),
  path.join('app', 'components', 'Footer.jsx'),
  path.join('app', 'i18n', 'en.json'),
  path.join('app', 'i18n', 'es.json'),
];

filesToCheck.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping (not found): ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  // Only replace phone number in Spruce St context
  // Replace pattern: Spruce St entries that have the old number
  // We look for the old number and replace only when near Spruce
  const updated = content
    .replace(/1040 Spruce[\s\S]{0,200}609-396-7171/g, (match) =>
      match.replace('609-396-7171', '609-571-1041')
    )
    .replace(/1040 Spruce[\s\S]{0,200}\(609\) 396-7171/g, (match) =>
      match.replace('(609) 396-7171', '(609) 571-1041')
    );
  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Updated Spruce phone in: ${filePath}`);
  } else {
    console.log(`No Spruce phone change needed in: ${filePath}`);
  }
});

console.log('Done.');
