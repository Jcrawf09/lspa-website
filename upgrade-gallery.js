const fs = require("fs");

console.log("Upgrading Gallery to premium...\n");

const gallery = `"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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

function FadeInCard({ children, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
      transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
      transitionDelay: delay + "ms"
    }}>{children}</div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [idx, setIdx] = useState(0);

  const open = (i) => { setIdx(i); setSelected(photos[i]); };
  const close = () => setSelected(null);
  const prev = (e) => { e.stopPropagation(); const n = (idx - 1 + photos.length) % photos.length; setIdx(n); setSelected(photos[n]); };
  const next = (e) => { e.stopPropagation(); const n = (idx + 1) % photos.length; setIdx(n); setSelected(photos[n]); };

  useEffect(() => {
    const handler = (e) => {
      if (!selected) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") { const n = (idx - 1 + photos.length) % photos.length; setIdx(n); setSelected(photos[n]); }
      if (e.key === "ArrowRight") { const n = (idx + 1) % photos.length; setIdx(n); setSelected(photos[n]); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected, idx]);

  const sizes = ["span-2", "", "", "span-tall", "", "span-2", "", "", "", "span-tall", "span-2", "", "", "", "span-2", "", "span-tall", "", "", "", ""];

  return (
    <div style={{minHeight:"100vh",background:"#FFFDF7"}}>
      <style>{\`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .gallery-grid .span-2 { grid-column: span 1; }
        }
        .span-2 { grid-column: span 2; }
        .span-tall { grid-row: span 2; }
        .gallery-card {
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease;
        }
        .gallery-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }
        .gallery-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,29,61,0.4) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .gallery-card:hover::after { opacity: 1; }
        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .gallery-card:hover img { transform: scale(1.08); }
        .lightbox-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.5rem;
          transition: all 0.2s;
          font-family: Fredoka;
        }
        .lightbox-arrow:hover { background: rgba(247,201,72,0.3); border-color: #F7C948; }
        .lightbox-counter {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.6);
          font-family: "DM Sans";
          font-size: 0.9rem;
          background: rgba(0,0,0,0.3);
          padding: 0.4rem 1.2rem;
          border-radius: 999px;
          backdrop-filter: blur(4px);
        }
      \`}</style>

      <div style={{background:"linear-gradient(170deg,#F7C948 0%,#F5A623 20%,#E8F7EA 50%,#A8DCFA 100%)",padding:"8rem 1rem 4rem",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"-50px",right:"-50px",width:"200px",height:"200px",borderRadius:"50%",background:"rgba(255,255,255,0.15)",animation:"float 6s ease-in-out infinite"}}></div>
        <div style={{position:"absolute",bottom:"-30px",left:"10%",width:"120px",height:"120px",borderRadius:"50%",background:"rgba(255,255,255,0.1)",animation:"float 8s ease-in-out infinite 1s"}}></div>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{fontFamily:"Fredoka",fontSize:"1rem",color:"#0F1D3D",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"0.75rem",fontWeight:"600"}}>Step Inside Our World</div>
          <h1 style={{fontFamily:"Fredoka",fontSize:"clamp(40px,6vw,72px)",color:"#0F1D3D",marginBottom:"0.5rem",lineHeight:1.1}}>
            Little Moments,<br/><span style={{background:"linear-gradient(to right,#1B2D5B,#4BA3E3)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Big Memories</span>
          </h1>
          <p style={{fontFamily:"DM Sans",fontSize:"1.15rem",color:"rgba(15,29,61,0.7)",maxWidth:"550px",margin:"0 auto"}}>Every smile, every discovery, every friendship — captured at Laura Spelman Preschool Academy.</p>
        </div>
      </div>

      <div style={{padding:"3rem 1rem 4rem"}}>
        <div className="gallery-grid">
          {photos.map((src, i) => (
            <FadeInCard key={i} delay={(i % 6) * 100}>
              <div className={"gallery-card " + (sizes[i] || "")} onClick={() => open(i)}
                style={{aspectRatio: sizes[i] === "span-tall" ? "3/5" : sizes[i] === "span-2" ? "2/1" : "4/3"}}>
                <img src={src} alt={"LSPA moment " + (i + 1)} loading="lazy" />
              </div>
            </FadeInCard>
          ))}
        </div>

        <div style={{maxWidth:"800px",margin:"4rem auto 0",background:"linear-gradient(135deg,#0F1D3D,#1B2D5B)",borderRadius:"24px",padding:"3rem 2rem",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,left:0,right:0,height:"4px",background:"linear-gradient(to right,#F7C948,#F5A623,#4BA3E3)"}}></div>
          <h3 style={{fontFamily:"Fredoka",color:"#fff",fontSize:"1.5rem",marginBottom:"0.5rem"}}>Come See It In Person</h3>
          <p style={{fontFamily:"DM Sans",color:"rgba(255,255,255,0.6)",marginBottom:"1.5rem"}}>Schedule a tour and experience the LSPA difference for your family.</p>
          <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
            <a href="tel:6093967171" style={{padding:"0.85rem 2.5rem",background:"linear-gradient(to right,#F7C948,#F5A623)",borderRadius:"999px",color:"#0F1D3D",fontFamily:"Fredoka",fontWeight:"bold",textDecoration:"none",fontSize:"1.05rem",boxShadow:"0 4px 15px rgba(247,201,72,0.4)",transition:"transform 0.2s"}}
              onMouseOver={e => e.currentTarget.style.transform="translateY(-2px)"}
              onMouseOut={e => e.currentTarget.style.transform="translateY(0)"}
            >Call (609) 396-7171</a>
            <Link href="/enrollment" style={{padding:"0.85rem 2.5rem",border:"2px solid rgba(255,255,255,0.3)",borderRadius:"999px",color:"#fff",fontFamily:"Fredoka",fontWeight:"bold",textDecoration:"none",fontSize:"1.05rem",transition:"all 0.2s"}}
              onMouseOver={e => {e.currentTarget.style.borderColor="#F7C948";e.currentTarget.style.color="#F7C948"}}
              onMouseOut={e => {e.currentTarget.style.borderColor="rgba(255,255,255,0.3)";e.currentTarget.style.color="#fff"}}
            >Enroll Today</Link>
          </div>
        </div>
      </div>

      {selected && (
        <div onClick={close} style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.92)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"2rem",backdropFilter:"blur(8px)"}}>
          <img src={selected} alt="LSPA" style={{maxWidth:"85vw",maxHeight:"80vh",objectFit:"contain",borderRadius:"12px",boxShadow:"0 20px 60px rgba(0,0,0,0.5)",transition:"opacity 0.3s"}} />
          <div className="lightbox-arrow" onClick={prev} style={{left:"1.5rem"}}>&#8249;</div>
          <div className="lightbox-arrow" onClick={next} style={{right:"1.5rem"}}>&#8250;</div>
          <div onClick={close} style={{position:"absolute",top:"1.5rem",right:"2rem",color:"rgba(255,255,255,0.6)",fontSize:"1.5rem",cursor:"pointer",fontFamily:"Fredoka",width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",background:"rgba(255,255,255,0.1)",transition:"all 0.2s"}}
            onMouseOver={e => {e.currentTarget.style.background="rgba(255,255,255,0.2)";e.currentTarget.style.color="#fff"}}
            onMouseOut={e => {e.currentTarget.style.background="rgba(255,255,255,0.1)";e.currentTarget.style.color="rgba(255,255,255,0.6)"}}
          >X</div>
          <div className="lightbox-counter">{idx + 1} / {photos.length}</div>
        </div>
      )}
    </div>
  );
}
`;

fs.writeFileSync("app/gallery/page.jsx", gallery, "utf8");
console.log("Gallery upgraded to premium!");
console.log("Features:");
console.log("  - 'Little Moments, Big Memories' hero with floating orbs");
console.log("  - Masonry grid (wide, tall, standard cards)");
console.log("  - Scroll-triggered fade-in animations");
console.log("  - Hover lift + zoom + gradient overlay");
console.log("  - Lightbox with arrow navigation + keyboard support");
console.log("  - Photo counter in lightbox");
console.log("  - CTA section with gradient rainbow bar");
console.log("\nCheck localhost:3000/gallery");
