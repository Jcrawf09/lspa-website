"use client";
import { useEffect, useRef } from "react";

const kids = [
  { skin: "#F5D0A9", hair: "#3B2314", accent: "#FF6B9D", girl: true },
  { skin: "#8D5524", hair: "#1A1110", accent: "#4BA3E3", girl: false },
  { skin: "#FFDBAC", hair: "#D4A017", accent: "#9B59B6", girl: true },
  { skin: "#C68642", hair: "#2C1608", accent: "#2ECC71", girl: false },
  { skin: "#F1C27D", hair: "#6B3A2A", accent: "#F39C12", girl: true },
  { skin: "#E0AC69", hair: "#4A2912", accent: "#E74C3C", girl: false },
  { skin: "#FFDBAC", hair: "#C0392B", accent: "#1ABC9C", girl: true },
  { skin: "#8D5524", hair: "#1A1110", accent: "#F7C948", girl: false },
  { skin: "#F5D0A9", hair: "#2C1608", accent: "#3498DB", girl: true },
  { skin: "#C68642", hair: "#3B2314", accent: "#E67E22", girl: false },
];

function KidFace({ kid, size = 70 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="52" r="38" fill={kid.skin} />
      {kid.girl ? (
        <>
          <ellipse cx="50" cy="25" rx="35" ry="20" fill={kid.hair} />
          <ellipse cx="25" cy="45" rx="8" ry="18" fill={kid.hair} />
          <ellipse cx="75" cy="45" rx="8" ry="18" fill={kid.hair} />
          <circle cx="30" cy="22" r="8" fill={kid.accent} />
          <circle cx="26" cy="18" r="5" fill={kid.accent} />
          <circle cx="34" cy="18" r="5" fill={kid.accent} />
        </>
      ) : (
        <>
          <ellipse cx="50" cy="28" rx="36" ry="22" fill={kid.hair} />
          <rect x="18" y="15" width="64" height="20" rx="10" fill={kid.accent} />
          <rect x="30" y="10" width="40" height="12" rx="6" fill={kid.accent} />
        </>
      )}
      <circle cx="38" cy="52" r="4" fill="#2C1608" />
      <circle cx="62" cy="52" r="4" fill="#2C1608" />
      <circle cx="39.5" cy="50.5" r="1.5" fill="white" />
      <circle cx="63.5" cy="50.5" r="1.5" fill="white" />
      <ellipse cx="50" cy="65" rx="8" ry="5" fill="#E8756D" opacity="0.9" />
      <path d="M 44 63 Q 50 70 56 63" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="60" r="6" fill="#FFB5B5" opacity="0.4" />
      <circle cx="70" cy="60" r="6" fill="#FFB5B5" opacity="0.4" />
    </svg>
  );
}

const quotes = [
  { text: "You are braver than you believe!", color: "from-pink-400 to-purple-500", bg: "bg-pink-50" },
  { text: "Every day is a chance to learn something new.", color: "from-blue-400 to-cyan-500", bg: "bg-blue-50" },
  { text: "Kindness makes the world more beautiful.", color: "from-green-400 to-emerald-500", bg: "bg-green-50" },
  { text: "Dream big, little one!", color: "from-yellow-400 to-orange-500", bg: "bg-yellow-50" },
  { text: "You can do hard things.", color: "from-red-400 to-pink-500", bg: "bg-red-50" },
  { text: "Be curious. Ask questions. Explore!", color: "from-violet-400 to-indigo-500", bg: "bg-violet-50" },
  { text: "Mistakes help us grow stronger.", color: "from-teal-400 to-green-500", bg: "bg-teal-50" },
  { text: "Your smile lights up the room!", color: "from-amber-400 to-yellow-500", bg: "bg-amber-50" },
  { text: "Friends make everything better.", color: "from-sky-400 to-blue-500", bg: "bg-sky-50" },
  { text: "You are loved just as you are.", color: "from-rose-400 to-pink-500", bg: "bg-rose-50" },
];

const combined = quotes.map((q, i) => ({ ...q, kid: kids[i] }));
const doubled = [...combined, ...combined];

export default function Quotes() {
  const row1 = useRef(null);
  const row2 = useRef(null);

  useEffect(() => {
    const animate = (el, direction) => {
      if (!el) return;
      let pos = direction === "right" ? -(el.scrollWidth / 2) : 0;
      const speed = direction === "left" ? -0.5 : 0.5;
      const w = el.scrollWidth / 2;
      const step = () => {
        pos += speed;
        if (direction === "left" && pos <= -w) pos = 0;
        if (direction === "right" && pos >= 0) pos = -w;
        el.style.transform = "translateX(" + pos + "px)";
        return requestAnimationFrame(step);
      };
      return step();
    };
    const a1 = animate(row1.current, "left");
    const a2 = animate(row2.current, "right");
    return () => { cancelAnimationFrame(a1); cancelAnimationFrame(a2); };
  }, []);

  const Card = ({ q }) => (
    <div className="flex-shrink-0 w-72 mx-3">
      <div className={"rounded-2xl p-[3px] bg-gradient-to-br " + q.color}>
        <div className={q.bg + " rounded-2xl p-5 text-center h-full"}>
          <div className="flex justify-center mb-3">
            <div className="rounded-full bg-white p-1 shadow-md" style={{borderRadius:"50%",overflow:"hidden"}}>
              <KidFace kid={q.kid} size={70} />
            </div>
          </div>
          <p className="text-gray-700 font-semibold text-base leading-snug" style={{fontFamily:"Fredoka"}}>{q.text}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 overflow-hidden" style={{background:"linear-gradient(180deg,#FFFDF7 0%,#E8F7EA 50%,#D6ECFB 100%)"}}>
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4" style={{background:"rgba(75,163,227,0.1)",color:"#4BA3E3"}}>Words to Grow By</div>
        <h2 className="font-bold" style={{fontFamily:"Fredoka",fontSize:"clamp(24px,3.5vw,40px)",color:"#1B2D5B"}}>Little Hearts, <span style={{color:"#F5A623"}}>Big Inspiration</span></h2>
      </div>
      <div className="mb-6">
        <div ref={row1} className="flex" style={{width:"max-content"}}>
          {doubled.map((q, i) => <Card key={"a"+i} q={q} />)}
        </div>
      </div>
      <div>
        <div ref={row2} className="flex" style={{width:"max-content"}}>
          {[...doubled].reverse().map((q, i) => <Card key={"b"+i} q={q} />)}
        </div>
      </div>
    </section>
  );
}
