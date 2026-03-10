/**
 * fix-popup-gap.js
 * Fixes the hover popup gap on the Our Team page so the button stays reachable.
 * Run from lspa-website root: node fix-popup-gap.js .
 */

const fs = require("fs");
const path = require("path");

const root = process.argv[2] || ".";
const filePath = path.join(root, "app", "our-team", "page.jsx");

if (!fs.existsSync(filePath)) {
  console.error("ERROR: Could not find", filePath);
  process.exit(1);
}

let src = fs.readFileSync(filePath, "utf8");

// ── Fix 1: Remove the gap (mb-3 → mb-0) ─────────────────────────────────────
// The bottom margin creates a dead zone the mouse crosses, killing hover.
if (src.includes("bottom-full mb-3")) {
  src = src.replace("bottom-full mb-3", "bottom-full mb-0");
  console.log("  + Removed gap (mb-3 → mb-0)");
} else {
  console.log("  - mb-3 not found, may already be fixed");
}

// ── Fix 2: Add invisible hover bridge below the popup ────────────────────────
// A transparent block that fills the gap between popup bottom and card top,
// keeping the mouse inside the hover zone the whole time.
const BRIDGE_MARKER = "{/* Diamond arrow pointing down toward the card */}";
const BRIDGE_REPLACEMENT = `{/* Invisible bridge — keeps mouse in hover zone between popup and card */}
    <div
      className="absolute left-0 right-0"
      style={{bottom:-16,height:16,background:"transparent"}}
    />
    {/* Diamond arrow pointing down toward the card */}`;

if (src.includes(BRIDGE_MARKER) && !src.includes("Invisible bridge")) {
  src = src.replace(BRIDGE_MARKER, BRIDGE_REPLACEMENT);
  console.log("  + Added invisible hover bridge");
} else if (src.includes("Invisible bridge")) {
  console.log("  - Bridge already present, skipping");
} else {
  console.log("  ! Could not find bridge anchor — popup structure may differ");
}

fs.writeFileSync(filePath, src, "utf8");
console.log("\n  SUCCESS: Hover gap fixed.");
console.log("  Refresh localhost:3000/our-team and hover over the + card.");
console.log("  You should now be able to move the mouse up to the button without it disappearing.");
