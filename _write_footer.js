const fs = require('fs'); const content = String.raw`"use client";
import Link from "next/link";

export default function Footer() {
  const links = ["About","Programs","Gallery","Enrollment","Contact Us","Careers","Resources"];
  return(
    <footer className="pt-16 pb-6" style={{background:"#0F1D3D"}}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-14">
        </div>
      </div>
    </footer>
  );
}`; fs.writeFileSync('app/components/Footer.jsx', content);