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
  { text: "You can do hard things.", color: "#FFEEF2", accent: "#E91E8C" },
  { text: "Be curious. Ask questions. Explore!", color: "#EEF5FF", accent: "#1E6FE9" },
  { text: "Mistakes help us learn and grow.", color: "#FFFBEE", accent: "#E97A1E" },
  { text: "Dream big, little one!", color: "#EFFFEE", accent: "#1EAE53" },
  { text: "Every day is a chance to try something new.", color: "#F5EEFF", accent: "#8B1EE9" },
  { text: "Kindness is a superpower.", color: "#FFEEF2", accent: "#E91E8C" },
  { text: "You belong here. Always.", color: "#EEF5FF", accent: "#1E6FE9" },
  { text: "Your voice matters.", color: "#FFFBEE", accent: "#E97A1E" },
  { text: "Be brave. Be kind. Be you.", color: "#EFFFEE", accent: "#1EAE53" },
  { text: "Together we grow stronger.", color: "#F5EEFF", accent: "#8B1EE9" },
];

const floatPositions = [
  { top: "6%",  left: "4%"   },
  { top: "4%",  left: "35%"  },
  { top: "4%",  left: "68%"  },
  { top: "4%",  right: "4%"  },
  { top: "28%", left: "1%"   },
  { top: "28%", right: "1%"  },
  { top: "52%", left: "1%"   },
  { top: "52%", right: "1%"  },
  { top: "74%", left: "1%"   },
  { top: "74%", right: "1%"  },
  { bottom: "5%", left: "8%"  },
  { bottom: "5%", left: "40%" },
  { bottom: "5%", right: "8%" },
  { bottom: "5%", left: "24%" },
];

export default function Quotes() {
  const [open, setOpen]           = useState(false);
  const [visible, setVisible]     = useState(false);
  const [activeQuote, setActiveQuote] = useState(null);

  useEffect(() => {
    const handler = () => {
      setOpen(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    };
    window.addEventListener("openQuotesModal", handler);
    return () => window.removeEventListener("openQuotesModal", handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else       document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => { setOpen(false); setActiveQuote(null); }, 380);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <>
      <style>{`
        @keyframes floatFace  { 0%,100%{transform:translateY(0) rotate(-3deg)} 50%{transform:translateY(-11px) rotate(3deg)} }
        @keyframes pulseStar  { 0%,100%{transform:scale(1);opacity:.7} 50%{transform:scale(1.5);opacity:1} }
        @keyframes rainbowBar { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes cardPop    { 0%{transform:scale(.9);opacity:0} 100%{transform:scale(1);opacity:1} }
        .q-card { cursor:pointer; transition:transform .18s ease, box-shadow .18s ease; }
        .q-card:hover { transform:translateY(-5px) scale(1.04) !important; box-shadow:0 14px 36px rgba(0,0,0,.14) !important; }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={closeModal}
        style={{
          position:"fixed", inset:0, zIndex:1000,
          background:"rgba(10,20,50,.7)",
          backdropFilter:"blur(7px)", WebkitBackdropFilter:"blur(7px)",
          transition:"opacity .35s ease",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Panel wrapper */}
      <div style={{
        position:"fixed", inset:0, zIndex:1001,
        display:"flex", alignItems:"center", justifyContent:"center",
        padding:16, pointerEvents:"none",
      }}>
        <div style={{
          width:"100%", maxWidth:980, maxHeight:"92vh",
          overflowY:"auto", background:"#FFFDF7",
          borderRadius:28, position:"relative",
          pointerEvents:"auto",
          transition:"opacity .38s ease, transform .38s cubic-bezier(.34,1.36,.64,1)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(52px) scale(.95)",
          boxShadow:"0 36px 90px rgba(10,20,50,.3)",
        }}>
          {/* Rainbow bar */}
          <div style={{
            height:8, borderRadius:"28px 28px 0 0",
            background:"linear-gradient(90deg,#F7C948,#4CAF50,#4BA3E3,#9B59B6,#E54B4B,#F7C948)",
            backgroundSize:"300% 300%", animation:"rainbowBar 4s ease infinite",
          }}/>

          {/* Close btn */}
          <button
            onClick={closeModal}
            style={{
              position:"absolute", top:18, right:18,
              width:36, height:36, borderRadius:"50%", border:"none",
              background:"rgba(27,45,91,.09)", color:"#1B2D5B",
              fontSize:22, cursor:"pointer", display:"flex",
              alignItems:"center", justifyContent:"center",
              zIndex:10, transition:"background .15s", lineHeight:1,
            }}
            onMouseEnter={e=>e.currentTarget.style.background="rgba(27,45,91,.18)"}
            onMouseLeave={e=>e.currentTarget.style.background="rgba(27,45,91,.09)"}
          >×</button>

          {/* Floating faces */}
          {floatPositions.map((pos,i)=>(
            <div key={i} style={{
              position:"absolute", width:46, height:46,
              borderRadius:"50%", overflow:"hidden",
              border:"2px solid white",
              boxShadow:"0 2px 10px rgba(0,0,0,.13)",
              animation:`floatFace ${2.6+(i%4)*.55}s ease-in-out infinite`,
              animationDelay:`${(i*.38)%2.2}s`,
              zIndex:1, ...pos,
            }}>
              {faces[i % faces.length]}
            </div>
          ))}

          {/* Stars */}
          {[
            {top:"10%", left:"18%",  s:18, d:"0s"  },
            {top:"7%",  right:"22%", s:14, d:".5s" },
            {bottom:"10%", left:"14%",  s:16, d:"1s"  },
            {bottom:"7%",  right:"18%", s:12, d:"1.5s"},
          ].map((st,i)=>(
            <div key={i} style={{
              position:"absolute", fontSize:st.s,
              animation:`pulseStar 2s ease-in-out infinite`,
              animationDelay:st.d, zIndex:1, userSelect:"none",
              top:st.top, bottom:st.bottom, left:st.left, right:st.right,
            }}>✦</div>
          ))}

          {/* Inner content */}
          <div style={{padding:"32px 60px 48px", position:"relative", zIndex:2}}>
            <div style={{textAlign:"center", marginBottom:32}}>
              <div style={{
                display:"inline-block",
                background:"rgba(75,163,227,.12)", color:"#4BA3E3",
                fontSize:".68rem", fontWeight:700, letterSpacing:".16em",
                padding:"5px 14px", borderRadius:999, marginBottom:14,
                fontFamily:"DM Sans, sans-serif",
              }}>WORDS TO GROW BY</div>
              <h2 style={{
                fontFamily:"Fredoka, sans-serif",
                fontSize:"clamp(1.7rem,3.5vw,2.5rem)",
                color:"#1B2D5B", margin:0, lineHeight:1.15,
              }}>
                Little Hearts,{" "}
                <span style={{color:"#F5A623"}}>Big Inspiration</span>
              </h2>
            </div>

            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fill, minmax(190px, 1fr))",
              gap:14,
            }}>
              {quotes.map((q,i)=>(
                <div
                  key={i}
                  className="q-card"
                  onClick={()=>setActiveQuote(activeQuote===i ? null : i)}
                  style={{
                    background:q.color, borderRadius:20,
                    padding:"26px 18px 18px", textAlign:"center",
                    boxShadow:"0 2px 12px rgba(0,0,0,.06)",
                    animation:`cardPop .4s ease both`,
                    animationDelay:`${i*.05}s`,
                    border: activeQuote===i ? `2px solid ${q.accent}` : "2px solid transparent",
                  }}
                >
                  <div style={{
                    width:64, height:64, borderRadius:"50%",
                    margin:"0 auto 12px", overflow:"hidden",
                    background:"white", padding:4,
                    boxShadow:"0 2px 8px rgba(0,0,0,.1)",
                  }}>{faces[i]}</div>
                  <p style={{
                    fontFamily:"DM Sans, sans-serif", fontWeight:700,
                    fontSize:".9rem", color:"#1B2D5B",
                    margin:"0 0 8px", lineHeight:1.4,
                  }}>{q.text}</p>
                  {activeQuote !== i
                    ? <div style={{fontFamily:"DM Sans, sans-serif", fontSize:".68rem", fontWeight:700, letterSpacing:".1em", color:q.accent}}>TAP TO REFLECT ✦</div>
                    : <div style={{fontFamily:"DM Sans, sans-serif", fontSize:".8rem", color:q.accent, fontStyle:"italic", lineHeight:1.5}}>What does this mean to you?</div>
                  }
                </div>
              ))}
            </div>

            <p style={{
              textAlign:"center", fontFamily:"DM Sans, sans-serif",
              fontSize:".75rem", color:"rgba(27,45,91,.35)",
              marginTop:26, marginBottom:0,
            }}>
              Tap any card to reflect &nbsp;·&nbsp; Press Escape or click outside to close
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
