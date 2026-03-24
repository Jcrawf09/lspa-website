"use client";
import { useState, useEffect } from "react";

const faces = [
  <svg key={1} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="38" fill="#FDDBB4"/><ellipse cx="27" cy="35" rx="5" ry="6" fill="#F7C3A0"/><ellipse cx="53" cy="35" rx="5" ry="6" fill="#F7C3A0"/><circle cx="27" cy="34" r="3" fill="#5B3A29"/><circle cx="53" cy="34" r="3" fill="#5B3A29"/><circle cx="28" cy="33" r="1" fill="white"/><circle cx="54" cy="33" r="1" fill="white"/><path d="M33 50 Q40 57 47 50" stroke="#C87941" strokeWidth="2.5" fill="none" strokeLinecap="round"/><ellipse cx="40" cy="16" rx="14" ry="8" fill="#8B4513"/><circle cx="28" cy="12" r="5" fill="#FF69B4"/><circle cx="32" cy="10" r="5" fill="#FF69B4"/><circle cx="30" cy="13" r="3" fill="#FF1493"/></svg>,
  <svg key={2} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="38" fill="#C8854A"/><ellipse cx="27" cy="36" rx="5" ry="6" fill="#B5712D"/><ellipse cx="53" cy="36" rx="5" ry="6" fill="#B5712D"/><circle cx="27" cy="35" r="3" fill="#3B2314"/><circle cx="53" cy="35" r="3" fill="#3B2314"/><circle cx="28" cy="34" r="1" fill="white"/><circle cx="54" cy="34" r="1" fill="white"/><path d="M33 51 Q40 58 47 51" stroke="#8B4513" strokeWidth="2.5" fill="none" strokeLinecap="round"/><ellipse cx="40" cy="14" rx="18" ry="9" fill="#CC2200"/><rect x="22" y="20" width="36" height="5" rx="2" fill="#CC2200"/><rect x="18" y="22" width="10" height="4" rx="2" fill="#AA1100"/></svg>,
  <svg key={3} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="38" fill="#F2C888"/><ellipse cx="27" cy="36" rx="5" ry="6" fill="#E8B870"/><ellipse cx="53" cy="36" rx="5" ry="6" fill="#E8B870"/><circle cx="27" cy="35" r="3" fill="#4A3020"/><circle cx="53" cy="35" r="3" fill="#4A3020"/><circle cx="28" cy="34" r="1" fill="white"/><circle cx="54" cy="34" r="1" fill="white"/><path d="M33 51 Q40 58 47 51" stroke="#C87040" strokeWidth="2.5" fill="none" strokeLinecap="round"/><ellipse cx="40" cy="15" rx="16" ry="9" fill="#E8C840"/><ellipse cx="52" cy="18" rx="5" ry="4" fill="#9B59B6"/><ellipse cx="56" cy="15" rx="4" ry="3" fill="#8E44AD"/></svg>,
  <svg key={4} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="38" fill="#8B5E3C"/><ellipse cx="27" cy="36" rx="5" ry="6" fill="#7A4F2D"/><ellipse cx="53" cy="36" rx="5" ry="6" fill="#7A4F2D"/><circle cx="27" cy="35" r="3" fill="#2C1A0E"/><circle cx="53" cy="35" r="3" fill="#2C1A0E"/><circle cx="28" cy="34" r="1" fill="white"/><circle cx="54" cy="34" r="1" fill="white"/><path d="M33 51 Q40 58 47 51" stroke="#5A3010" strokeWidth="2.5" fill="none" strokeLinecap="round"/><ellipse cx="40" cy="15" rx="16" ry="8" fill="#2E7D32"/><rect x="24" y="21" width="32" height="5" rx="2" fill="#2E7D32"/></svg>,
  <svg key={5} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="38" fill="#FDDBB4"/><ellipse cx="27" cy="36" rx="5" ry="6" fill="#F7C3A0"/><ellipse cx="53" cy="36" rx="5" ry="6" fill="#F7C3A0"/><circle cx="27" cy="35" r="3" fill="#5B3A29"/><circle cx="53" cy="35" r="3" fill="#5B3A29"/><circle cx="28" cy="34" r="1" fill="white"/><circle cx="54" cy="34" r="1" fill="white"/><path d="M33 50 Q40 57 47 50" stroke="#C87941" strokeWidth="2.5" fill="none" strokeLinecap="round"/><ellipse cx="40" cy="14" rx="14" ry="8" fill="#3B2314"/><circle cx="50" cy="18" r="4" fill="#FFD700"/><circle cx="50" cy="12" r="3" fill="#FF6B6B"/><circle cx="54" cy="16" r="3" fill="#FF6B6B"/><circle cx="54" cy="22" r="3" fill="#FF6B6B"/><circle cx="46" cy="22" r="3" fill="#FF6B6B"/><circle cx="46" cy="14" r="3" fill="#FF6B6B"/></svg>,
  <svg key={6} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="38" fill="#C8854A"/><ellipse cx="27" cy="36" rx="5" ry="6" fill="#B5712D"/><ellipse cx="53" cy="36" rx="5" ry="6" fill="#B5712D"/><circle cx="27" cy="35" r="3" fill="#3B2314"/><circle cx="53" cy="35" r="3" fill="#3B2314"/><circle cx="28" cy="34" r="1" fill="white"/><circle cx="54" cy="34" r="1" fill="white"/><path d="M33 51 Q40 58 47 51" stroke="#8B4513" strokeWidth="2.5" fill="none" strokeLinecap="round"/><ellipse cx="40" cy="14" rx="14" ry="8" fill="#E8C840"/><circle cx="52" cy="10" r="7" fill="#E8C840"/><circle cx="52" cy="10" r="4" fill="#D4B020"/></svg>,
  <svg key={7} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="38" fill="#8B5E3C"/><ellipse cx="27" cy="36" rx="5" ry="6" fill="#7A4F2D"/><ellipse cx="53" cy="36" rx="5" ry="6" fill="#7A4F2D"/><circle cx="27" cy="35" r="3" fill="#2C1A0E"/><circle cx="53" cy="35" r="3" fill="#2C1A0E"/><circle cx="28" cy="34" r="1" fill="white"/><circle cx="54" cy="34" r="1" fill="white"/><path d="M33 51 Q40 58 47 51" stroke="#5A3010" strokeWidth="2.5" fill="none" strokeLinecap="round"/><ellipse cx="40" cy="14" rx="14" ry="8" fill="#3B2314"/><circle cx="28" cy="12" r="5" fill="#4BA3E3"/><circle cx="32" cy="10" r="5" fill="#4BA3E3"/><circle cx="30" cy="13" r="3" fill="#2980B9"/></svg>,
  <svg key={8} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="38" fill="#F2C888"/><ellipse cx="27" cy="36" rx="5" ry="6" fill="#E8B870"/><ellipse cx="53" cy="36" rx="5" ry="6" fill="#E8B870"/><circle cx="27" cy="35" r="3" fill="#4A3020"/><circle cx="53" cy="35" r="3" fill="#4A3020"/><circle cx="28" cy="34" r="1" fill="white"/><circle cx="54" cy="34" r="1" fill="white"/><path d="M33 51 Q40 58 47 51" stroke="#C87040" strokeWidth="2.5" fill="none" strokeLinecap="round"/><circle cx="28" cy="16" r="8" fill="#E8640A"/><circle cx="40" cy="12" r="8" fill="#E8640A"/><circle cx="52" cy="16" r="8" fill="#E8640A"/><circle cx="22" cy="24" r="7" fill="#E8640A"/><circle cx="58" cy="24" r="7" fill="#E8640A"/></svg>,
  <svg key={9} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="38" fill="#FDDBB4"/><ellipse cx="27" cy="36" rx="5" ry="6" fill="#F7C3A0"/><ellipse cx="53" cy="36" rx="5" ry="6" fill="#F7C3A0"/><circle cx="27" cy="35" r="3" fill="#5B3A29"/><circle cx="53" cy="35" r="3" fill="#5B3A29"/><circle cx="28" cy="34" r="1" fill="white"/><circle cx="54" cy="34" r="1" fill="white"/><path d="M34 50 Q40 56 46 50" stroke="#C87941" strokeWidth="2" fill="none" strokeLinecap="round"/><ellipse cx="40" cy="15" rx="15" ry="8" fill="#D4A030"/><rect x="20" y="20" width="40" height="5" rx="2.5" fill="#FF69B4"/></svg>,
  <svg key={10} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="38" fill="#8B5E3C"/><ellipse cx="27" cy="36" rx="5" ry="6" fill="#7A4F2D"/><ellipse cx="53" cy="36" rx="5" ry="6" fill="#7A4F2D"/><circle cx="27" cy="35" r="3" fill="#2C1A0E"/><circle cx="53" cy="35" r="3" fill="#2C1A0E"/><circle cx="28" cy="34" r="1" fill="white"/><circle cx="54" cy="34" r="1" fill="white"/><path d="M33 51 Q40 58 47 51" stroke="#5A3010" strokeWidth="2.5" fill="none" strokeLinecap="round"/><circle cx="28" cy="16" r="7" fill="#3B2314"/><circle cx="40" cy="11" r="7" fill="#3B2314"/><circle cx="52" cy="16" r="7" fill="#3B2314"/><circle cx="22" cy="25" r="6" fill="#3B2314"/><circle cx="58" cy="25" r="6" fill="#3B2314"/><polygon points="40,6 41.5,11 47,11 42.5,14 44,19 40,16 36,19 37.5,14 33,11 38.5,11" fill="#F7C948"/></svg>,
];

const quotes = [
  { text: "You can do hard things.",                       color: "#FFEEF2", accent: "#E91E8C",  bg: "linear-gradient(135deg,#FF6B9D,#E91E8C)" },
  { text: "Be curious. Ask questions. Explore!",           color: "#EEF5FF", accent: "#1E6FE9",  bg: "linear-gradient(135deg,#4BA3E3,#1E6FE9)" },
  { text: "Mistakes help us learn and grow.",              color: "#FFFBEE", accent: "#E97A1E",  bg: "linear-gradient(135deg,#F7C948,#E97A1E)" },
  { text: "Dream big, little one!",                        color: "#EFFFEE", accent: "#1EAE53",  bg: "linear-gradient(135deg,#56D17A,#1EAE53)" },
  { text: "Every day is a chance to try something new.",   color: "#F5EEFF", accent: "#8B1EE9",  bg: "linear-gradient(135deg,#C47BF5,#8B1EE9)" },
  { text: "Kindness is a superpower.",                     color: "#FFEEF2", accent: "#E91E8C",  bg: "linear-gradient(135deg,#FF6B9D,#E91E8C)" },
  { text: "You belong here. Always.",                      color: "#EEF5FF", accent: "#1E6FE9",  bg: "linear-gradient(135deg,#4BA3E3,#1E6FE9)" },
  { text: "Your voice matters.",                           color: "#FFFBEE", accent: "#E97A1E",  bg: "linear-gradient(135deg,#F7C948,#E97A1E)" },
  { text: "Be brave. Be kind. Be you.",                    color: "#EFFFEE", accent: "#1EAE53",  bg: "linear-gradient(135deg,#56D17A,#1EAE53)" },
  { text: "Together we grow stronger.",                    color: "#F5EEFF", accent: "#8B1EE9",  bg: "linear-gradient(135deg,#C47BF5,#8B1EE9)" },
];

const reflections = [
  "What hard thing will you try today?",
  "What's one question you've always wanted to ask?",
  "What's a mistake that taught you something?",
  "What big dream lives in your heart?",
  "What new thing will you try this week?",
  "How can you show kindness right now?",
  "Who makes you feel like you belong?",
  "When does your voice feel strongest?",
  "Which of these is easiest for you — and which is hardest?",
  "Who makes you feel stronger just by being there?",
];

const sideFloats = [
  { top:"15%", left:"4px" }, { top:"42%", left:"4px" }, { top:"68%", left:"4px" },
  { top:"15%", right:"4px" }, { top:"42%", right:"4px" }, { top:"68%", right:"4px" },
];

const sparklePositions = [
  {top:"8%",left:"15%"},{top:"12%",right:"18%"},{top:"55%",left:"8%"},
  {top:"60%",right:"10%"},{bottom:"15%",left:"20%"},{bottom:"18%",right:"22%"},
  {top:"35%",left:"5%"},{top:"38%",right:"6%"},
];

export default function Quotes() {
  const [open,       setOpen]       = useState(false);
  const [vis,        setVis]        = useState(false);
  const [reflection, setReflection] = useState(null); // index of tapped card
  const [refVis,     setRefVis]     = useState(false);

  useEffect(() => {
    const h = () => {
      setOpen(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVis(true)));
    };
    window.addEventListener("openQuotesModal", h);
    return () => window.removeEventListener("openQuotesModal", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => {
    setVis(false);
    setTimeout(() => { setOpen(false); setReflection(null); setRefVis(false); }, 360);
  };

  const openReflection = (i) => {
    setReflection(i);
    requestAnimationFrame(() => requestAnimationFrame(() => setRefVis(true)));
  };

  const closeReflection = (e) => {
    e.stopPropagation();
    setRefVis(false);
    setTimeout(() => setReflection(null), 300);
  };

  useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") {
        if (reflection !== null) { setRefVis(false); setTimeout(() => setReflection(null), 300); }
        else close();
      }
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [reflection]);

  if (!open) return null;

  const q = reflection !== null ? quotes[reflection] : null;

  return (
    <>
      <style>{`
        @keyframes floatF   { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-10px) rotate(2deg)} }
        @keyframes pulseS   { 0%,100%{transform:scale(1) rotate(0deg);opacity:.6} 50%{transform:scale(1.6) rotate(15deg);opacity:1} }
        @keyframes rainbowB { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes cPop     { from{transform:scale(.88);opacity:0} to{transform:scale(1);opacity:1} }
        @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes bounceIn { 0%{transform:scale(.5) translateY(30px);opacity:0} 60%{transform:scale(1.08) translateY(-6px);opacity:1} 80%{transform:scale(.97) translateY(2px)} 100%{transform:scale(1) translateY(0)} }
        @keyframes sparkle  { 0%,100%{transform:scale(0) rotate(0deg);opacity:0} 50%{transform:scale(1) rotate(180deg);opacity:1} }
        .qc { cursor:pointer; transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
        .qc:hover { transform:translateY(-5px) scale(1.04) !important; box-shadow:0 14px 32px rgba(0,0,0,.14) !important; }
@media(max-width:640px){.side-float{display:none!important}.quotes-inner{padding:14px 16px 18px!important}}
`}</style>

      {/* Main backdrop */}
      <div onClick={close} style={{
        position:"fixed", inset:0, zIndex:9000,
        background:"rgba(8,16,40,.76)",
        backdropFilter:"blur(8px)", WebkitBackdropFilter:"blur(8px)",
        transition:"opacity .32s ease", opacity: vis ? 1 : 0,
      }}/>

      {/* Main modal shell */}
      <div style={{
        position:"fixed", inset:0, zIndex:9001,
        display:"flex", alignItems:"center", justifyContent:"center",
        padding:"10px clamp(8px,5vw,56px)", pointerEvents:"none",
      }}>
        <div style={{
          width:"100%", maxWidth:1040,
          background:"#FFFDF7", borderRadius:26,
          position:"relative", pointerEvents:"auto", overflow:"visible",
          transition:"opacity .36s ease, transform .36s cubic-bezier(.34,1.3,.64,1)",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0) scale(1)" : "translateY(48px) scale(.94)",
          boxShadow:"0 40px 100px rgba(8,16,40,.36)",
        }}>
          {/* Rainbow bar */}
          <div style={{
            height:7, borderRadius:"26px 26px 0 0",
            background:"linear-gradient(90deg,#F7C948,#4CAF50,#4BA3E3,#9B59B6,#E54B4B,#F7C948)",
            backgroundSize:"300% 300%", animation:"rainbowB 4s ease infinite",
          }}/>

          {/* Close */}
          <button onClick={close} style={{
            position:"absolute", top:14, right:14,
            width:34, height:34, borderRadius:"50%", border:"none",
            background:"rgba(27,45,91,.09)", color:"#1B2D5B",
            fontSize:20, cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center",
            zIndex:10, transition:"background .15s",
          }}
          onMouseEnter={e=>e.currentTarget.style.background="rgba(27,45,91,.18)"}
          onMouseLeave={e=>e.currentTarget.style.background="rgba(27,45,91,.09)"}
          >×</button>

          {/* Side floating faces */}
          {sideFloats.map((p,i) => (
            <div key={i} className="side-float" style={{
              position:"absolute", width:42, height:42,
              borderRadius:"50%", overflow:"hidden",
              border:"2.5px solid white",
              boxShadow:"0 3px 10px rgba(0,0,0,.16)",
              animation:`floatF ${2.8+(i%3)*.55}s ease-in-out infinite`,
              animationDelay:`${(i*.42)%2}s`,
              zIndex:5, ...p,
            }}>{faces[i % faces.length]}</div>
          ))}

          {/* Corner stars */}
          {[{top:16,left:56,d:"0s"},{top:16,right:56,d:".7s"},{bottom:14,left:56,d:"1.2s"},{bottom:14,right:56,d:"1.8s"}]
            .map((st,i)=>(
            <div key={i} style={{
              position:"absolute", fontSize:15,
              animation:`pulseS 2.4s ease-in-out infinite`,
              animationDelay:st.d, zIndex:3, userSelect:"none", color:"#F7C948",
              top:st.top, bottom:st.bottom, left:st.left, right:st.right,
            }}>✦</div>
          ))}

          {/* Content */}
          <div className="quotes-inner" style={{padding:"18px 52px 22px", position:"relative", zIndex:2}}>
            <div style={{textAlign:"center", marginBottom:16}}>
              <div style={{
                display:"inline-block",
                background:"rgba(75,163,227,.12)", color:"#4BA3E3",
                fontSize:".62rem", fontWeight:700, letterSpacing:".16em",
                padding:"4px 14px", borderRadius:999, marginBottom:10,
                fontFamily:"DM Sans, sans-serif",
              }}>WORDS TO GROW BY</div>
              <h2 style={{
                fontFamily:"Fredoka, sans-serif",
                fontSize:"clamp(1.5rem,2.8vw,2.1rem)",
                color:"#1B2D5B", margin:0, lineHeight:1.1,
              }}>Little Hearts, <span style={{color:"#F5A623"}}>Big Inspiration</span></h2>
            </div>

            {/* 5-col grid — fixed card height so tapping never shifts layout */}
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(5,1fr)",
              gap:12,
            }}>
              {quotes.map((qt,i) => (
                <div key={i} className="qc"
                  onClick={() => openReflection(i)}
                  style={{
                    background: qt.color,
                    borderRadius:18,
                    padding:"20px 14px 18px",
                    textAlign:"center",
                    boxShadow:"0 2px 10px rgba(0,0,0,.07)",
                    animation:`cPop .38s ease both`,
                    animationDelay:`${i*.045}s`,
                    border: `2px solid transparent`,
                    height:210,                  /* fixed height — no layout shift */
                    boxSizing:"border-box",
                    display:"flex", flexDirection:"column",
                    alignItems:"center", justifyContent:"center",
                  }}
                >
                  <div style={{
                    width:66, height:66, borderRadius:"50%",
                    margin:"0 auto 12px", overflow:"hidden",
                    background:"white", padding:4,
                    boxShadow:"0 2px 8px rgba(0,0,0,.1)",
                    flexShrink:0,
                  }}>{faces[i]}</div>
                  <p style={{
                    fontFamily:"DM Sans, sans-serif", fontWeight:700,
                    fontSize:".82rem", color:"#1B2D5B",
                    margin:"0 0 8px", lineHeight:1.35,
                    flexGrow:1, display:"flex", alignItems:"center", justifyContent:"center",
                  }}>{qt.text}</p>
                  <div style={{
                    fontFamily:"DM Sans", fontSize:".62rem", fontWeight:700,
                    letterSpacing:".08em", color: qt.accent,
                    flexShrink:0,
                  }}>TAP TO REFLECT ✦</div>
                </div>
              ))}
            </div>

            <p style={{
              textAlign:"center", fontFamily:"DM Sans, sans-serif",
              fontSize:".68rem", color:"rgba(27,45,91,.28)",
              marginTop:14, marginBottom:0,
            }}>Tap any card &nbsp;·&nbsp; Escape or click outside to close</p>
          </div>
        </div>
      </div>

      {/* ── Reflection popup ── */}
      {reflection !== null && q && (
        <>
          {/* Reflection backdrop (above main modal) */}
          <div onClick={closeReflection} style={{
            position:"fixed", inset:0, zIndex:9100,
            background:"rgba(4,8,24,.65)",
            backdropFilter:"blur(6px)", WebkitBackdropFilter:"blur(6px)",
            transition:"opacity .28s ease", opacity: refVis ? 1 : 0,
          }}/>

          {/* Reflection card */}
          <div style={{
            position:"fixed", inset:0, zIndex:9101,
            display:"flex", alignItems:"center", justifyContent:"center",
            pointerEvents:"none",
          }}>
            <div style={{
              width:"min(460px,88vw)",
              borderRadius:28,
              background: q.bg,
              padding:"48px 36px 40px",
              textAlign:"center",
              pointerEvents:"auto",
              position:"relative",
              overflow:"hidden",
              transition:"opacity .3s ease, transform .3s cubic-bezier(.34,1.45,.64,1)",
              opacity: refVis ? 1 : 0,
              transform: refVis ? "scale(1) translateY(0)" : "scale(.7) translateY(40px)",
              boxShadow:"0 32px 80px rgba(0,0,0,.45)",
            }}>
              {/* Sparkle burst */}
              {sparklePositions.map((sp,i)=>(
                <div key={i} style={{
                  position:"absolute", fontSize: 10+(i%3)*4,
                  color:"rgba(255,255,255,.7)",
                  animation:`sparkle ${1.2+(i*.25)%1.2}s ease-in-out ${refVis?i*.1+.1:0}s both`,
                  userSelect:"none", ...sp,
                }}>✦</div>
              ))}

              {/* Close X */}
              <button onClick={closeReflection} style={{
                position:"absolute", top:14, right:14,
                width:32, height:32, borderRadius:"50%", border:"none",
                background:"rgba(255,255,255,.25)", color:"white",
                fontSize:18, cursor:"pointer",
                display:"flex", alignItems:"center", justifyContent:"center",
              }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.4)"}
              onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.25)"}
              >×</button>

              {/* Big face */}
              <div style={{
                width:96, height:96, borderRadius:"50%",
                margin:"0 auto 20px", overflow:"hidden",
                background:"white", padding:5,
                boxShadow:"0 8px 24px rgba(0,0,0,.25)",
                animation: refVis ? "bounceIn .6s cubic-bezier(.34,1.56,.64,1) both" : "none",
              }}>{faces[reflection]}</div>

              {/* Quote text */}
              <p style={{
                fontFamily:"Fredoka, sans-serif",
                fontSize:"clamp(1.3rem,3.5vw,1.75rem)",
                color:"white", margin:"0 0 20px",
                lineHeight:1.25, fontWeight:600,
                textShadow:"0 2px 12px rgba(0,0,0,.2)",
              }}>{q.text}</p>

              {/* Divider */}
              <div style={{
                width:48, height:3, borderRadius:2,
                background:"rgba(255,255,255,.5)",
                margin:"0 auto 18px",
              }}/>

              {/* Reflection prompt */}
              <p style={{
                fontFamily:"DM Sans, sans-serif",
                fontSize:"1rem", color:"rgba(255,255,255,.92)",
                margin:"0 0 6px", lineHeight:1.5, fontStyle:"italic",
              }}>{reflections[reflection]}</p>

              <p style={{
                fontFamily:"DM Sans, sans-serif",
                fontSize:".72rem", color:"rgba(255,255,255,.55)",
                margin:0,
              }}>Tap outside or press Escape to return</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
