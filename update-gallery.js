const fs = require("fs");

console.log("Updating Gallery with real photos...\n");

const gallery = `"use client";
import Link from "next/link";
import { useState } from "react";

const photos = [
  "/images/gallery/IMG_4244.PNG",
  "/images/gallery/IMG_4245.PNG",
  "/images/gallery/IMG_4246.PNG",
  "/images/gallery/IMG_4247.PNG",
  "/images/gallery/IMG_4248.PNG",
  "/images/gallery/IMG_4249.PNG",
  "/images/gallery/IMG_4250.PNG",
  "/images/gallery/IMG_4251.PNG",
  "/images/gallery/IMG_4252.PNG",
  "/images/gallery/IMG_4253.PNG",
  "/images/gallery/IMG_4254.PNG",
  "/images/gallery/IMG_4255.PNG",
  "/images/gallery/IMG_4256.PNG",
  "/images/gallery/IMG_4257.PNG",
  "/images/gallery/IMG_4258.PNG",
  "/images/gallery/IMG_4259.PNG",
  "/images/gallery/IMG_4260.PNG",
  "/images/gallery/IMG_4261.PNG",
  "/images/gallery/IMG_4262.PNG",
  "/images/gallery/IMG_4263.PNG",
  "/images/gallery/IMG_4264.PNG"
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{minHeight:"100vh"}}>
      <div style={{background:"linear-gradient(170deg,#A8DCFA 0%,#D6ECFB 30%,#E8F7EA 60%,#FFFDF7 100%)",padding:"8rem 1rem 3rem"}}>
        <div style={{maxWidth:"900px",margin:"0 auto",textAlign:"center"}}>
          <h1 style={{fontFamily:"Fredoka",fontSize:"clamp(32px,5vw,56px)",color:"#1B2D5B",marginBottom:"0.5rem"}}>Photo Gallery</h1>
          <p style={{fontFamily:"DM Sans",fontSize:"1.1rem",color:"#6B7280",maxWidth:"600px",margin:"0 auto"}}>See what makes Laura Spelman Preschool Academy a special place to learn and grow.</p>
        </div>
      </div>

      <div style={{maxWidth:"1200px",margin:"0 auto",padding:"3rem 1rem 4rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"1rem"}}>
          {photos.map((src, i) => (
            <div key={i} onClick={() => setSelected(src)} style={{borderRadius:"12px",overflow:"hidden",cursor:"pointer",aspectRatio:"4/3",position:"relative",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",transition:"transform 0.2s"}}
              onMouseOver={e => e.currentTarget.style.transform="scale(1.02)"}
              onMouseOut={e => e.currentTarget.style.transform="scale(1)"}
            >
              <img src={src} alt={"LSPA photo " + (i+1)} style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </div>
          ))}
        </div>

        <div style={{background:"#f9fafb",borderRadius:"16px",padding:"2.5rem",textAlign:"center",marginTop:"3rem"}}>
          <h3 style={{fontFamily:"Fredoka",color:"#1B2D5B",fontSize:"1.3rem",marginBottom:"0.5rem"}}>Want to see more?</h3>
          <p style={{fontFamily:"DM Sans",color:"#6B7280",marginBottom:"1rem"}}>Schedule a campus tour and see our classrooms in person.</p>
          <a href="tel:6093967171" style={{display:"inline-block",padding:"0.75rem 2rem",background:"linear-gradient(to right,#F7C948,#F5A623)",borderRadius:"999px",color:"#0F1D3D",fontFamily:"Fredoka",fontWeight:"bold",textDecoration:"none"}}>Call (609) 396-7171</a>
        </div>
      </div>

      {selected && (
        <div onClick={() => setSelected(null)} style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,cursor:"pointer",padding:"2rem"}}>
          <img src={selected} alt="LSPA" style={{maxWidth:"90vw",maxHeight:"85vh",objectFit:"contain",borderRadius:"8px"}} />
          <div style={{position:"absolute",top:"1.5rem",right:"2rem",color:"#fff",fontSize:"2rem",fontFamily:"Fredoka",cursor:"pointer"}}>X</div>
        </div>
      )}
    </div>
  );
}
`;

fs.writeFileSync("app/gallery/page.jsx", gallery, "utf8");
console.log("Gallery updated with 21 real photos.");
console.log("Features: responsive grid, hover zoom, click to enlarge, lightbox viewer.");
console.log("\nCheck localhost:3000/gallery");
