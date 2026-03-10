const fs = require("fs");
console.log("Fixing Footer quick links...\n");
let f = fs.readFileSync("app/components/Footer.jsx", "utf8");
f = f.replace(
  'const links = ["About", "Programs", "Gallery", "Enrollment", "Contact Us", "Careers", "Resources"];',
  'const links = [{l:"About",h:"/#about"},{l:"Programs",h:"/#programs"},{l:"Gallery",h:"/gallery"},{l:"Enrollment",h:"/enrollment"},{l:"Contact Us",h:"/#contact"},{l:"Careers",h:"/careers"},{l:"Resources",h:"/resources"}];'
);
f = f.replace('{l}', '{l.l}');
f = f.replace('{l}', '{l.l}');
f = f.replace('href="#"', 'href={l.h}');
f = f.replace('key={l}', 'key={l.l}');
fs.writeFileSync("app/components/Footer.jsx", f, "utf8");
console.log("Done! Footer links now point to real pages.");
