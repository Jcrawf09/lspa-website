/**
 * add-staff-popup.js
 * Adds a hover popup to the Join Our Team card on the Our Team page.
 * Run from lspa-website root: node add-staff-popup.js .
 */

const fs = require("fs");
const path = require("path");

const root = process.argv[2] || ".";
const filePath = path.join(root, "app", "our-team", "page.jsx");

if (!fs.existsSync(filePath)) {
  console.error("ERROR: Could not find", filePath);
  console.error("Make sure you are passing the correct root, e.g.: node add-staff-popup.js .");
  process.exit(1);
}

let src = fs.readFileSync(filePath, "utf8");

// ─── 1. Ensure useState is imported ────────────────────────────────────────
if (!src.includes("useState")) {
  // If "use client" is present, add the import right after it
  if (src.includes('"use client"')) {
    src = src.replace(
      '"use client";',
      '"use client";\nimport { useState } from "react";'
    );
  } else {
    // Prepend to file
    src = 'import { useState } from "react";\n' + src;
  }
  console.log("  + Added useState import");
} else {
  console.log("  - useState already imported, skipping");
}

// ─── 2. Find the Link to /careers ──────────────────────────────────────────
// We locate the start of the Link block using the href
const CAREERS_MARKER = "href='/careers'";
const linkStart = src.indexOf(CAREERS_MARKER);

if (linkStart === -1) {
  console.error("ERROR: Could not find href='/careers' in the file.");
  console.error("The page may not have the Join Our Team card, or it uses a different href.");
  process.exit(1);
}

// Walk backwards to find the opening < of the <Link tag
let tagOpen = linkStart;
while (tagOpen > 0 && src[tagOpen] !== "<") tagOpen--;

// Walk forward past the closing > of the opening <Link ...>
let tagClose = linkStart;
while (tagClose < src.length && src[tagClose] !== ">") tagClose++;
tagClose++; // include the ">"

// Now find the matching </Link> by counting JSX depth
let depth = 1;
let pos = tagClose;
while (pos < src.length && depth > 0) {
  if (src.slice(pos, pos + 6) === "<Link " || src.slice(pos, pos + 5) === "<Link") {
    // Nested Link (unlikely but safe)
    depth++;
    pos += 5;
  } else if (src.slice(pos, pos + 7) === "</Link>") {
    depth--;
    if (depth === 0) break;
    pos += 7;
  } else {
    pos++;
  }
}

if (depth !== 0) {
  console.error("ERROR: Could not find the closing </Link> for the careers card.");
  console.error("The JSX may be unbalanced.");
  process.exit(1);
}

const linkEnd = pos + 7; // include </Link>

const originalBlock = src.slice(tagOpen, linkEnd);
console.log("\n  Original block found (first 120 chars):");
console.log("  " + originalBlock.slice(0, 120).replace(/\n/g, " ") + "...\n");

// ─── 3. Build the replacement — card with popup, no outer Link ─────────────
// The popup will have its own internal "View Openings" anchor.
// The card itself becomes a relative container; hover triggers CSS group.

const REPLACEMENT = `<div
  className="relative group"
  style={{cursor:"default"}}
>
  {/* ── Hover Popup ────────────────────────────── */}
  <div
    className="absolute left-1/2 bottom-full mb-3 z-20
                opacity-0 translate-y-2
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-250 pointer-events-none group-hover:pointer-events-auto"
    style={{transform:"translateX(-50%)",minWidth:180}}
  >
    <div
      className="rounded-2xl shadow-2xl p-4 text-center"
      style={{background:"#ffffff",border:"2px solid "+color+"40"}}
    >
      <div
        className="text-sm font-bold mb-1"
        style={{color:"#1a2e4a",fontFamily:"Fredoka, sans-serif",fontSize:"1rem"}}
      >
        We are Hiring!
      </div>
      <div className="text-xs mb-3" style={{color:"#666"}}>
        Join our team of early childhood educators and make a difference.
      </div>
      <a
        href="/careers"
        className="inline-block text-xs font-bold py-1.5 px-4 rounded-full"
        style={{
          background:"linear-gradient(135deg,"+color+","+color+"cc)",
          color:"#ffffff",
          textDecoration:"none",
          letterSpacing:"0.04em"
        }}
      >
        View Openings &rarr;
      </a>
    </div>
    {/* Diamond arrow pointing down toward the card */}
    <div
      className="absolute left-1/2"
      style={{
        bottom:-6,
        transform:"translateX(-50%) rotate(45deg)",
        width:12,
        height:12,
        background:"#ffffff",
        borderRight:"2px solid "+color+"40",
        borderBottom:"2px solid "+color+"40"
      }}
    />
  </div>

  {/* ── The + Card ─────────────────────────────── */}
  <div
    className="text-center p-4 rounded-2xl border-2 border-dashed transition-all"
    style={{
      borderColor:color+"50",
      background:"linear-gradient(135deg,"+color+"08,"+color+"15)"
    }}
  >
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-2 transition-all group-hover:scale-110"
      style={{background:color+"20",color:color}}
    >
      +
    </div>
    <div className="text-xs font-semibold" style={{color:color+"cc"}}>
      Join Our Team
    </div>
  </div>
</div>`;

// ─── 4. Splice into source ──────────────────────────────────────────────────
const patched = src.slice(0, tagOpen) + REPLACEMENT + src.slice(linkEnd);

// ─── 5. Write back ─────────────────────────────────────────────────────────
fs.writeFileSync(filePath, patched, "utf8");

console.log("  SUCCESS: Hover popup added to Join Our Team card.");
console.log("  File written to:", filePath);
console.log("\n  Refresh localhost:3000/our-team and hover over the + card.");
