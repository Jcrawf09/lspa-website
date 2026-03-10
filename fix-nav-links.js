const fs = require('fs');

console.log('Fixing Nav links...\n');

let nav = fs.readFileSync('app/components/Nav.jsx', 'utf8');

// Fix anchor links to work from any page
nav = nav.replace("{href:'#home',label:'Home'}", "{href:'/',label:'Home'}");
nav = nav.replace("{href:'#about',label:'About'}", "{href:'/#about',label:'About'}");
nav = nav.replace("{href:'#programs',label:'Programs'}", "{href:'/#programs',label:'Programs'}");
nav = nav.replace("{href:'#locations',label:'Locations'}", "{href:'/#locations',label:'Locations'}");
nav = nav.replace("{href:'#contact',label:'Contact'}", "{href:'/#contact',label:'Contact'}");

fs.writeFileSync('app/components/Nav.jsx', nav, 'utf8');
console.log('Nav links updated:');
console.log('  Home -> /');
console.log('  About -> /#about');
console.log('  Programs -> /#programs');
console.log('  Locations -> /#locations');
console.log('  Resources -> /resources');
console.log('  Contact -> /#contact');
console.log('\nDone! All links now work from any page.');
