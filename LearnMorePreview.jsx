import { useState, useEffect } from "react";

const features = [
  { emoji: "\ud83d\udcda", title: "Creative Curriculum", text: "Research-backed learning through play and hands-on discovery.", color: "#3B82F6" },
  { emoji: "\ud83d\udc69\u200d\ud83c\udfeb", title: "NJ Certified Teachers", text: "Every classroom led by a state-certified early childhood educator.", color: "#10B981" },
  { emoji: "\ud83e\udd1d", title: "Family Partnership", text: "Bilingual family liaisons connect you with community resources.", color: "#F59E0B" },
  { emoji: "\ud83c\udf08", title: "Two Locations", text: "540 N. Olden Ave in Trenton and 1040 Spruce St in Lawrence.", color: "#EF4444" },
  { emoji: "\ud83c\udfa8", title: "Enrichment Programs", text: "Music, art, physical education, and technology in daily learning.", color: "#8B5CF6" },
  { emoji: "\ud83c\udf0d", title: "Bilingual Support", text: "English and Spanish-speaking staff ensuring every family feels welcome.", color: "#0EA5E9" },
];

function FeatureCard({ feature, index, isVisible }) {
  const [hovered, setHovered] = useState(false);
  const { emoji, title, text, color } = feature;
  const delayVal = (0.2 + index * 0.08).toFixed(2);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", background: hovered ? "#f8faf9" : "#fff",
        borderRadius: 16, padding: "28px 24px", cursor: "default",
        border: "1px solid #e8efe9", overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
        transition: "opacity 0.5s ease " + delayVal + "s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) " + delayVal + "s, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        boxShadow: hovered ? "0 8px 24px " + color + "22, 0 0 0 1px " + color + "33" : "0 2px 8px rgba(0,0,0,0.04)",
        borderColor: hovered ? color + "44" : "#e8efe9",
      }}
    >
      <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:color, transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin:"left", transition:"transform 0.4s cubic-bezier(0.34,1.56,0.64,1)" }} />
      <div style={{ fontSize:32, marginBottom:12, lineHeight:1, transform: hovered ? "scale(1.15)" : "scale(1)", transition:"transform 0.3s cubic-bezier(0.34,1.56,0.64,1)", display:"inline-block" }}>{emoji}</div>
      <h3 style={{ fontFamily:"system-ui", fontSize:17, fontWeight:700, color:"#1a3a2a", margin:"0 0 8px" }}>{title}</h3>
      <p style={{ fontFamily:"system-ui", fontSize:14, color:"#6b8f7b", lineHeight:1.6, margin:0 }}>{text}</p>
    </div>
  );
}

function Modal({ open, onClose }) {
  const [phase, setPhase] = useState("closed");

  useEffect(() => {
    if (open && phase === "closed") {
      setPhase("entering");
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase("open")));
    }
    if (!open && (phase === "open" || phase === "entering")) {
      setPhase("exiting");
      const t = setTimeout(() => setPhase("closed"), 500);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (phase === "closed") return;
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [phase, onClose]);

  if (phase === "closed") return null;
  const vis = phase === "open";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}@keyframes floatBadge{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes glowPulse{0%,100%{box-shadow:0 32px 80px rgba(0,0,0,.25),0 0 20px rgba(72,168,112,.15)}50%{box-shadow:0 32px 80px rgba(0,0,0,.25),0 0 40px rgba(72,168,112,.3)}}" }} />

      <div onClick={onClose} style={{
        position:"fixed", inset:0, zIndex:9998,
        background:"rgba(10,30,20,0.65)",
        backdropFilter: vis ? "blur(12px)" : "blur(0)",
        WebkitBackdropFilter: vis ? "blur(12px)" : "blur(0)",
        opacity: vis ? 1 : 0,
        transition:"opacity 0.4s ease, backdrop-filter 0.5s ease",
      }} />

      <div style={{
        position:"fixed", inset:0, zIndex:9999,
        display:"flex", alignItems:"center", justifyContent:"center",
        padding:24, pointerEvents: vis ? "auto" : "none",
      }}>
        <div onClick={e => e.stopPropagation()} style={{
          position:"relative", width:"100%", maxWidth:880, maxHeight:"85vh", overflowY:"auto",
          background:"#fff", borderRadius:24,
          opacity: vis ? 1 : 0,
          transform: vis ? "scale(1) translateY(0)" : "scale(0.88) translateY(40px)",
          transition:"transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease",
          animation: vis ? "glowPulse 3s ease-in-out infinite" : "none",
        }}>
          <div style={{
            position:"absolute", top:0, left:0, right:0, height:4, borderRadius:"24px 24px 0 0",
            background:"linear-gradient(90deg, #2e7d52, #48a870, #F59E0B, #3B82F6, #8B5CF6, #2e7d52)",
            backgroundSize:"200% 100%",
            animation: vis ? "shimmer 4s linear infinite" : "none",
          }} />

          <button onClick={onClose} style={{
            position:"sticky", top:16, float:"right", marginRight:16, marginTop:16, zIndex:10,
            width:40, height:40, borderRadius:"50%", border:"none", cursor:"pointer",
            background:"rgba(0,0,0,0.06)", color:"#4a6355", fontSize:20, fontWeight:600,
            display:"flex", alignItems:"center", justifyContent:"center",
            transition:"background 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background="rgba(0,0,0,0.12)"; e.currentTarget.style.transform="rotate(90deg)"; }}
            onMouseLeave={e => { e.currentTarget.style.background="rgba(0,0,0,0.06)"; e.currentTarget.style.transform="rotate(0deg)"; }}
          >{"\u2715"}</button>

          <div style={{ padding:"48px 40px 40px", clear:"both" }}>
            <div style={{
              textAlign:"center", marginBottom:40,
              opacity: vis?1:0, transform: vis?"translateY(0)":"translateY(20px)",
              transition:"all 0.6s ease 0.15s",
            }}>
              <div style={{
                width:56, height:56, borderRadius:"50%",
                background:"linear-gradient(135deg,#2e7d52,#48a870)",
                display:"inline-flex", alignItems:"center", justifyContent:"center",
                marginBottom:16,
                animation: vis ? "floatBadge 3s ease-in-out infinite" : "none",
                boxShadow:"0 8px 24px rgba(46,125,82,0.25)",
              }}>
                <span style={{ fontSize:22, fontWeight:800, color:"#fff" }}>LS</span>
              </div>
              <h2 style={{ fontSize:"clamp(24px,4vw,36px)", fontWeight:700, color:"#1a3a2a", lineHeight:1.2, margin:"0 0 12px" }}>
                A Legacy of Nurturing{" "}
                <span style={{ background:"linear-gradient(135deg,#2e7d52,#48a870)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Young Minds</span>
              </h2>
              <p style={{ fontSize:16, color:"#6b8f7b", lineHeight:1.7, maxWidth:520, margin:"0 auto" }}>
                For over 20 years, Laura Spelman Preschool Academy has served the Trenton community with completely free, high-quality preschool education.
              </p>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(230px, 1fr))", gap:20 }}>
              {features.map((f, i) => <FeatureCard key={i} feature={f} index={i} isVisible={vis} />)}
            </div>

            <div style={{
              textAlign:"center", marginTop:36,
              opacity: vis?1:0, transform: vis?"translateY(0)":"translateY(20px)",
              transition:"all 0.6s ease 0.7s",
            }}>
              <button onClick={onClose} style={{
                display:"inline-block", fontSize:15, fontWeight:600, color:"#fff",
                background:"linear-gradient(135deg,#2e7d52,#48a870)",
                padding:"14px 36px", borderRadius:50, border:"none", cursor:"pointer",
                boxShadow:"0 8px 24px rgba(46,125,82,0.3)",
                transition:"transform 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(46,125,82,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(46,125,82,0.3)"; }}
              >
                Read Our Full Story {"\u2192"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function LearnMorePreview() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(160deg, #f0f5e8 0%, #dceee2 50%, #c8e0d0 100%)",
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      fontFamily:"system-ui, sans-serif",
    }}>
      <div style={{ textAlign:"center", maxWidth:680, padding:"0 24px" }}>
        <p style={{ fontSize:12, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"#48a870", marginBottom:16 }}>
          Laura Spelman Preschool Academy
        </p>
        <h1 style={{ fontSize:"clamp(32px,5vw,56px)", fontWeight:700, color:"#1a3a2a", lineHeight:1.1, margin:"0 0 20px" }}>
          Where Every Child{"'"}s Journey <span style={{ color:"#C8922A" }}>Begins</span>
        </h1>
        <p style={{ fontSize:18, color:"#4a6355", lineHeight:1.7, margin:"0 0 32px" }}>
          Free, state-funded preschool education for Trenton families. NJ certified teachers. Two convenient locations.
        </p>
        <button
          onClick={() => setShowModal(true)}
          style={{
            fontSize:16, fontWeight:600, color:"#1a3a2a",
            background:"#fff", border:"2px solid #d4edda",
            padding:"16px 40px", borderRadius:50, cursor:"pointer",
            boxShadow:"0 4px 20px rgba(46,125,82,0.15)",
            transition:"all 0.3s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor="#48a870"; e.currentTarget.style.boxShadow="0 8px 32px rgba(46,125,82,0.25)"; e.currentTarget.style.transform="translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor="#d4edda"; e.currentTarget.style.boxShadow="0 4px 20px rgba(46,125,82,0.15)"; e.currentTarget.style.transform="translateY(0)"; }}
        >
          Learn More
        </button>
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
