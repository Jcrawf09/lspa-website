const fs = require('fs');
const path = require('path');

// ============================================================
// LSPA WEBSITE MASTER UPDATE SCRIPT
// Run: node master-update.js
// ============================================================

console.log('Starting LSPA website updates...\n');

// ------------------------------------------------------------
// 1. UPDATE NAV - Add Resources link
// ------------------------------------------------------------
console.log('1. Updating Nav.jsx...');
let nav = fs.readFileSync('app/components/Nav.jsx', 'utf8');
if (!nav.includes("'Resources'") && !nav.includes('"Resources"')) {
  nav = nav.replace(
    "{href:'#contact',label:'Contact'}",
    "{href:'/resources',label:'Resources'},{href:'#contact',label:'Contact'}"
  );
  fs.writeFileSync('app/components/Nav.jsx', nav, 'utf8');
  console.log('   Nav updated with Resources link.');
} else {
  console.log('   Nav already has Resources - skipping.');
}

// ------------------------------------------------------------
// 2. UPDATE PROGRAMS - Change AGE 4 to AGE 4-5
// ------------------------------------------------------------
console.log('2. Updating Programs.jsx...');
let programs = fs.readFileSync('app/components/Programs.jsx', 'utf8');
if (programs.includes("AGE 4") && !programs.includes("AGE 4-5")) {
  programs = programs.replace(/AGE 4(?!-)/g, 'AGE 4-5');
  fs.writeFileSync('app/components/Programs.jsx', programs, 'utf8');
  console.log('   Programs updated: AGE 4 -> AGE 4-5.');
} else {
  console.log('   Programs already shows AGE 4-5 or not found - skipping.');
}

// ------------------------------------------------------------
// 3. CREATE RESOURCES PAGE
// ------------------------------------------------------------
console.log('3. Creating Resources page...');
if (!fs.existsSync('app/resources')) {
  fs.mkdirSync('app/resources', { recursive: true });
}

const resourcesPage = `"use client";
import Link from "next/link";

const resources = [
  {
    category: "Enrollment & Forms",
    icon: String.fromCodePoint(0x1F4CB),
    items: [
      { name: "Enrollment Application", desc: "Apply for your child's spot at LSPA", link: "#" },
      { name: "Registration Packet", desc: "Required documents for new families", link: "#" },
      { name: "Medical & Immunization Forms", desc: "Health records required for enrollment", link: "#" },
      { name: "Emergency Contact Form", desc: "Update your child's emergency information", link: "#" },
    ]
  },
  {
    category: "Parent Handbook & Policies",
    icon: String.fromCodePoint(0x1F4D6),
    items: [
      { name: "Parent Handbook 2025-2026", desc: "School policies, expectations, and guidelines", link: "#" },
      { name: "Attendance Policy", desc: "Understanding our attendance requirements", link: "#" },
      { name: "Health & Safety Protocols", desc: "How we keep your children safe every day", link: "#" },
      { name: "Pickup & Drop-off Procedures", desc: "Campus arrival and dismissal guidelines", link: "#" },
    ]
  },
  {
    category: "School Calendar & Events",
    icon: String.fromCodePoint(0x1F4C5),
    items: [
      { name: "2025-2026 School Calendar", desc: "Key dates, holidays, and closings", link: "#" },
      { name: "Upcoming Events", desc: "Family nights, field trips, and celebrations", link: "#" },
      { name: "Parent-Teacher Conferences", desc: "Schedule and preparation tips", link: "#" },
      { name: "Summer Program Information", desc: "Details on summer learning opportunities", link: "#" },
    ]
  },
  {
    category: "NJ Family Support",
    icon: String.fromCodePoint(0x1F3E0),
    items: [
      { name: "NJ Child Care Assistance", desc: "Financial help for working families", link: "https://www.childcarenj.gov" },
      { name: "WIC Program", desc: "Nutrition assistance for women, infants & children", link: "https://www.nj.gov/health/fhs/wic/" },
      { name: "Head Start Resources", desc: "Federal early childhood education programs", link: "https://www.benefits.gov/benefit/1912" },
      { name: "NJ 211", desc: "Connect to local health and human services", link: "https://www.nj211.org" },
      { name: "Trenton Public Schools", desc: "District information and updates", link: "https://www.trentonk12.org" },
    ]
  },
  {
    category: "Learning at Home",
    icon: String.fromCodePoint(0x1F393),
    items: [
      { name: "PBS Kids Games", desc: "Educational games for preschool learners", link: "https://pbskids.org" },
      { name: "Starfall", desc: "Reading and math activities for young children", link: "https://www.starfall.com" },
      { name: "Trenton Free Public Library", desc: "Free books, programs, and digital resources", link: "https://www.trentonfpl.org" },
      { name: "Reading Tips for Families", desc: "How to build a love of reading at home", link: "#" },
    ]
  }
];

export default function Resources() {
  return (
    <div style={{minHeight:"100vh"}}>
      <div style={{background:"linear-gradient(170deg,#A8DCFA 0%,#D6ECFB 30%,#E8F7EA 60%,#FFFDF7 100%)",padding:"8rem 1rem 3rem"}}>
        <div style={{maxWidth:"900px",margin:"0 auto",textAlign:"center"}}>
          <h1 style={{fontFamily:"Fredoka",fontSize:"clamp(32px,5vw,56px)",color:"#1B2D5B",marginBottom:"0.5rem"}}>Family Resources</h1>
          <p style={{fontFamily:"DM Sans",fontSize:"1.1rem",color:"#6B7280",maxWidth:"600px",margin:"0 auto"}}>Everything you need to support your child's learning journey at Laura Spelman Preschool Academy.</p>
        </div>
      </div>
      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"3rem 1rem 4rem"}}>
        {resources.map((section, i) => (
          <div key={i} style={{marginBottom:"3rem"}}>
            <h2 style={{fontFamily:"Fredoka",fontSize:"1.5rem",color:"#1B2D5B",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"}}>
              <span style={{fontSize:"1.8rem"}}>{section.icon}</span> {section.category}
            </h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"1rem"}}>
              {section.items.map((item, j) => (
                <a key={j} href={item.link} target={item.link.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                  style={{display:"block",padding:"1.25rem",borderRadius:"12px",border:"1px solid #e5e7eb",background:"#fff",textDecoration:"none",transition:"all 0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}}
                  onMouseOver={e => {e.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.1)";e.currentTarget.style.borderColor="#F7C948"}}
                  onMouseOut={e => {e.currentTarget.style.boxShadow="0 1px 3px rgba(0,0,0,0.06)";e.currentTarget.style.borderColor="#e5e7eb"}}
                >
                  <div style={{fontFamily:"Fredoka",fontWeight:"bold",color:"#1B2D5B",marginBottom:"0.25rem",fontSize:"1rem"}}>{item.name}</div>
                  <div style={{fontFamily:"DM Sans",color:"#6B7280",fontSize:"0.9rem"}}>{item.desc}</div>
                  {item.link.startsWith("http") && <div style={{marginTop:"0.5rem",fontSize:"0.8rem",color:"#F7C948",fontWeight:"600"}}>External Link</div>}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{background:"#0F1D3D",padding:"2rem 1rem",textAlign:"center"}}>
        <p style={{color:"rgba(255,255,255,0.7)",fontFamily:"DM Sans",marginBottom:"0.5rem"}}>
          Need help? Contact us at <a href="tel:6093967171" style={{color:"#F7C948",textDecoration:"none"}}>(609) 396-7171</a> or <a href="mailto:lauraspelmanacademy@verizon.net" style={{color:"#F7C948",textDecoration:"none"}}>lauraspelmanacademy@verizon.net</a>
        </p>
        <Link href="/" style={{color:"#F7C948",textDecoration:"none",fontFamily:"Fredoka"}}>Back to Home</Link>
      </div>
    </div>
  );
}
`;
fs.writeFileSync('app/resources/page.jsx', resourcesPage, 'utf8');
console.log('   Resources page created.');

// ------------------------------------------------------------
// 4. CREATE GALLERY PAGE
// ------------------------------------------------------------
console.log('4. Creating Gallery page...');
if (!fs.existsSync('app/gallery')) {
  fs.mkdirSync('app/gallery', { recursive: true });
}

const galleryPage = `"use client";
import Link from "next/link";

const galleries = [
  {
    title: "Classroom Learning",
    desc: "Our students exploring, creating, and discovering every day.",
    photos: [
      { src: "/images/gallery/classroom-1.jpg", alt: "Students engaged in circle time" },
      { src: "/images/gallery/classroom-2.jpg", alt: "Art project exploration" },
      { src: "/images/gallery/classroom-3.jpg", alt: "Reading corner activities" },
      { src: "/images/gallery/classroom-4.jpg", alt: "Math manipulatives play" },
    ]
  },
  {
    title: "Outdoor Play",
    desc: "Fresh air, movement, and fun on our playgrounds.",
    photos: [
      { src: "/images/gallery/outdoor-1.jpg", alt: "Playground fun" },
      { src: "/images/gallery/outdoor-2.jpg", alt: "Nature exploration" },
      { src: "/images/gallery/outdoor-3.jpg", alt: "Group games" },
      { src: "/images/gallery/outdoor-4.jpg", alt: "Outdoor learning" },
    ]
  },
  {
    title: "Special Events",
    desc: "Celebrations, field trips, and family gatherings.",
    photos: [
      { src: "/images/gallery/events-1.jpg", alt: "Holiday celebration" },
      { src: "/images/gallery/events-2.jpg", alt: "Family night" },
      { src: "/images/gallery/events-3.jpg", alt: "Graduation ceremony" },
      { src: "/images/gallery/events-4.jpg", alt: "Community event" },
    ]
  }
];

export default function Gallery() {
  return (
    <div style={{minHeight:"100vh"}}>
      <div style={{background:"linear-gradient(170deg,#A8DCFA 0%,#D6ECFB 30%,#E8F7EA 60%,#FFFDF7 100%)",padding:"8rem 1rem 3rem"}}>
        <div style={{maxWidth:"900px",margin:"0 auto",textAlign:"center"}}>
          <h1 style={{fontFamily:"Fredoka",fontSize:"clamp(32px,5vw,56px)",color:"#1B2D5B",marginBottom:"0.5rem"}}>Photo Gallery</h1>
          <p style={{fontFamily:"DM Sans",fontSize:"1.1rem",color:"#6B7280",maxWidth:"600px",margin:"0 auto"}}>See what makes Laura Spelman Preschool Academy a special place to learn and grow.</p>
        </div>
      </div>
      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"3rem 1rem 4rem"}}>
        {galleries.map((section, i) => (
          <div key={i} style={{marginBottom:"3rem"}}>
            <h2 style={{fontFamily:"Fredoka",fontSize:"1.5rem",color:"#1B2D5B",marginBottom:"0.25rem"}}>{section.title}</h2>
            <p style={{fontFamily:"DM Sans",color:"#6B7280",marginBottom:"1rem"}}>{section.desc}</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:"1rem"}}>
              {section.photos.map((photo, j) => (
                <div key={j} style={{borderRadius:"12px",overflow:"hidden",aspectRatio:"4/3",background:"#e5e7eb",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <div style={{textAlign:"center",padding:"1rem",color:"#9ca3af",fontFamily:"DM Sans",fontSize:"0.85rem"}}>
                    <div style={{fontSize:"2rem",marginBottom:"0.5rem"}}>&#128247;</div>
                    {photo.alt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{background:"#f9fafb",borderRadius:"16px",padding:"2.5rem",textAlign:"center",marginTop:"2rem"}}>
          <h3 style={{fontFamily:"Fredoka",color:"#1B2D5B",fontSize:"1.3rem",marginBottom:"0.5rem"}}>Want to see more?</h3>
          <p style={{fontFamily:"DM Sans",color:"#6B7280",marginBottom:"1rem"}}>Schedule a campus tour and see our classrooms in person.</p>
          <a href="tel:6093967171" style={{display:"inline-block",padding:"0.75rem 2rem",background:"linear-gradient(to right,#F7C948,#F5A623)",borderRadius:"999px",color:"#0F1D3D",fontFamily:"Fredoka",fontWeight:"bold",textDecoration:"none"}}>Call (609) 396-7171</a>
        </div>
      </div>
      <div style={{background:"#0F1D3D",padding:"2rem 1rem",textAlign:"center"}}>
        <Link href="/" style={{color:"#F7C948",textDecoration:"none",fontFamily:"Fredoka"}}>Back to Home</Link>
      </div>
    </div>
  );
}
`;
fs.writeFileSync('app/gallery/page.jsx', galleryPage, 'utf8');
console.log('   Gallery page created.');

// ------------------------------------------------------------
// 5. CREATE ENROLLMENT PAGE
// ------------------------------------------------------------
console.log('5. Creating Enrollment page...');
if (!fs.existsSync('app/enrollment')) {
  fs.mkdirSync('app/enrollment', { recursive: true });
}

const enrollmentPage = `"use client";
import Link from "next/link";

const steps = [
  { num: "1", title: "Contact Us", desc: "Call (609) 396-7171 or email to express interest and learn about available spots." },
  { num: "2", title: "Tour a Campus", desc: "Visit our Trenton or Lawrence campus to meet our teachers and see our classrooms." },
  { num: "3", title: "Complete Application", desc: "Fill out the enrollment application and gather required documents." },
  { num: "4", title: "Submit Documents", desc: "Bring your completed application, child's birth certificate, immunization records, and proof of Trenton residency." },
  { num: "5", title: "Welcome!", desc: "Once approved, your child joins the LSPA family. We'll schedule an orientation to get started." }
];

const requirements = [
  "Child must be 3 or 4 years old by the district cutoff date",
  "Proof of Trenton residency (utility bill, lease, or mortgage statement)",
  "Child's birth certificate",
  "Up-to-date immunization records",
  "Completed enrollment application",
  "Emergency contact information",
  "Physical exam form from your child's doctor"
];

const faqs = [
  { q: "Is there a cost for the program?", a: "No. LSPA is 100% free for all Trenton families. There is no tuition, no subsidy required, and no hidden fees." },
  { q: "What are the school hours?", a: "Our program runs full day, Monday through Friday, following the Trenton Public Schools calendar." },
  { q: "Do you provide meals?", a: "Yes. Breakfast, lunch, and snacks are provided daily at no cost to families." },
  { q: "What curriculum do you use?", a: "We follow a research-based curriculum aligned with New Jersey Preschool Teaching and Learning Standards, focused on kindergarten readiness." },
  { q: "Can I enroll mid-year?", a: "Yes, we accept rolling enrollment when spots are available. Contact us to check current availability." },
  { q: "Do all teachers have certifications?", a: "Yes. 100% of our lead teachers hold NJ state certifications in early childhood education." }
];

export default function Enrollment() {
  return (
    <div style={{minHeight:"100vh"}}>
      <div style={{background:"linear-gradient(170deg,#A8DCFA 0%,#D6ECFB 30%,#E8F7EA 60%,#FFFDF7 100%)",padding:"8rem 1rem 3rem"}}>
        <div style={{maxWidth:"900px",margin:"0 auto",textAlign:"center"}}>
          <h1 style={{fontFamily:"Fredoka",fontSize:"clamp(32px,5vw,56px)",color:"#1B2D5B",marginBottom:"0.5rem"}}>Enroll Your Child</h1>
          <p style={{fontFamily:"DM Sans",fontSize:"1.1rem",color:"#6B7280",maxWidth:"600px",margin:"0 auto"}}>Free, high-quality preschool education for Trenton families. No tuition. No subsidy. Just opportunity.</p>
          <a href="tel:6093967171" style={{display:"inline-block",marginTop:"1.5rem",padding:"0.75rem 2rem",background:"linear-gradient(to right,#F7C948,#F5A623)",borderRadius:"999px",color:"#0F1D3D",fontFamily:"Fredoka",fontWeight:"bold",textDecoration:"none",fontSize:"1.1rem"}}>Call to Enroll - (609) 396-7171</a>
        </div>
      </div>

      <div style={{maxWidth:"900px",margin:"0 auto",padding:"3rem 1rem"}}>
        <h2 style={{fontFamily:"Fredoka",fontSize:"1.5rem",color:"#1B2D5B",marginBottom:"1.5rem",textAlign:"center"}}>How to Enroll</h2>
        <div style={{display:"flex",flexDirection:"column",gap:"1rem",marginBottom:"3rem"}}>
          {steps.map((step, i) => (
            <div key={i} style={{display:"flex",gap:"1rem",alignItems:"flex-start",padding:"1.25rem",background:"#fff",borderRadius:"12px",border:"1px solid #e5e7eb",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}}>
              <div style={{minWidth:"48px",height:"48px",borderRadius:"50%",background:"linear-gradient(to right,#F7C948,#F5A623)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Fredoka",fontWeight:"bold",fontSize:"1.2rem",color:"#0F1D3D"}}>{step.num}</div>
              <div>
                <div style={{fontFamily:"Fredoka",fontWeight:"bold",color:"#1B2D5B",fontSize:"1.1rem",marginBottom:"0.25rem"}}>{step.title}</div>
                <div style={{fontFamily:"DM Sans",color:"#6B7280",fontSize:"0.95rem"}}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{fontFamily:"Fredoka",fontSize:"1.5rem",color:"#1B2D5B",marginBottom:"1rem",textAlign:"center"}}>What You Need</h2>
        <div style={{background:"#f9fafb",borderRadius:"16px",padding:"2rem",marginBottom:"3rem"}}>
          {requirements.map((req, i) => (
            <div key={i} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem 0",borderBottom: i < requirements.length - 1 ? "1px solid #e5e7eb" : "none"}}>
              <div style={{color:"#4BA3E3",fontSize:"1.2rem",fontWeight:"bold"}}>&#10003;</div>
              <div style={{fontFamily:"DM Sans",color:"#374151"}}>{req}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontFamily:"Fredoka",fontSize:"1.5rem",color:"#1B2D5B",marginBottom:"1.5rem",textAlign:"center"}}>Common Questions</h2>
        <div style={{display:"flex",flexDirection:"column",gap:"1rem",marginBottom:"3rem"}}>
          {faqs.map((faq, i) => (
            <div key={i} style={{padding:"1.25rem",background:"#fff",borderRadius:"12px",border:"1px solid #e5e7eb"}}>
              <div style={{fontFamily:"Fredoka",fontWeight:"bold",color:"#1B2D5B",marginBottom:"0.5rem"}}>{faq.q}</div>
              <div style={{fontFamily:"DM Sans",color:"#6B7280",fontSize:"0.95rem"}}>{faq.a}</div>
            </div>
          ))}
        </div>

        <div style={{background:"#0F1D3D",borderRadius:"16px",padding:"2.5rem",textAlign:"center"}}>
          <h3 style={{fontFamily:"Fredoka",color:"#fff",fontSize:"1.3rem",marginBottom:"0.5rem"}}>Ready to Get Started?</h3>
          <p style={{fontFamily:"DM Sans",color:"rgba(255,255,255,0.7)",marginBottom:"1rem"}}>Spots fill quickly. Contact us today to secure your child's place.</p>
          <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
            <a href="tel:6093967171" style={{padding:"0.75rem 2rem",background:"linear-gradient(to right,#F7C948,#F5A623)",borderRadius:"999px",color:"#0F1D3D",fontFamily:"Fredoka",fontWeight:"bold",textDecoration:"none"}}>Call (609) 396-7171</a>
            <a href="mailto:lauraspelmanacademy@verizon.net" style={{padding:"0.75rem 2rem",border:"2px solid #F7C948",borderRadius:"999px",color:"#F7C948",fontFamily:"Fredoka",fontWeight:"bold",textDecoration:"none"}}>Email Us</a>
          </div>
        </div>
      </div>

      <div style={{background:"#0F1D3D",padding:"2rem 1rem",textAlign:"center",marginTop:"2rem"}}>
        <Link href="/" style={{color:"#F7C948",textDecoration:"none",fontFamily:"Fredoka"}}>Back to Home</Link>
      </div>
    </div>
  );
}
`;
fs.writeFileSync('app/enrollment/page.jsx', enrollmentPage, 'utf8');
console.log('   Enrollment page created.');

// ------------------------------------------------------------
// 6. CREATE CAREERS PAGE
// ------------------------------------------------------------
console.log('6. Creating Careers page...');
if (!fs.existsSync('app/careers')) {
  fs.mkdirSync('app/careers', { recursive: true });
}

const careersPage = `"use client";
import Link from "next/link";

const benefits = [
  { icon: String.fromCodePoint(0x1F4B0), title: "Competitive Pay", desc: "Salary commensurate with experience and NJ certification level" },
  { icon: String.fromCodePoint(0x1F4DA), title: "Professional Development", desc: "Ongoing training opportunities and continuing education support" },
  { icon: String.fromCodePoint(0x2764), title: "Meaningful Work", desc: "Make a lasting impact on young children in the Trenton community" },
  { icon: String.fromCodePoint(0x1F4C5), title: "School Schedule", desc: "Follow the Trenton Public Schools calendar with holidays and breaks" },
  { icon: String.fromCodePoint(0x1F91D), title: "Supportive Team", desc: "Work alongside dedicated educators who share your passion" },
  { icon: String.fromCodePoint(0x1F3E0), title: "Two Campuses", desc: "Opportunities at our Trenton and Lawrence locations" }
];

const openings = [
  {
    title: "Lead Preschool Teacher",
    location: "Trenton Campus",
    type: "Full-Time",
    desc: "Lead a classroom of preschool students through a research-based curriculum aligned with NJ Preschool Teaching and Learning Standards.",
    reqs: ["NJ P-3 or CE certification required", "Bachelor's degree in Early Childhood Education or related field", "Experience working with 3-5 year olds preferred"]
  },
  {
    title: "Teacher Assistant",
    location: "Lawrence Campus",
    type: "Full-Time",
    desc: "Support the lead teacher in daily classroom activities, small group instruction, and maintaining a safe learning environment.",
    reqs: ["CDA credential or Associate's degree preferred", "High school diploma required", "Experience in early childhood settings a plus"]
  },
  {
    title: "Substitute Teacher",
    location: "Both Campuses",
    type: "On-Call",
    desc: "Provide coverage for classrooms as needed, maintaining continuity of instruction and a positive learning environment.",
    reqs: ["Substitute teaching credential or relevant experience", "Flexible schedule", "Ability to follow lesson plans"]
  }
];

export default function Careers() {
  return (
    <div style={{minHeight:"100vh"}}>
      <div style={{background:"linear-gradient(170deg,#A8DCFA 0%,#D6ECFB 30%,#E8F7EA 60%,#FFFDF7 100%)",padding:"8rem 1rem 3rem"}}>
        <div style={{maxWidth:"900px",margin:"0 auto",textAlign:"center"}}>
          <h1 style={{fontFamily:"Fredoka",fontSize:"clamp(32px,5vw,56px)",color:"#1B2D5B",marginBottom:"0.5rem"}}>Join Our Team</h1>
          <p style={{fontFamily:"DM Sans",fontSize:"1.1rem",color:"#6B7280",maxWidth:"600px",margin:"0 auto"}}>Build your career while building futures. Laura Spelman Preschool Academy is always looking for passionate educators.</p>
        </div>
      </div>

      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"3rem 1rem 4rem"}}>
        <h2 style={{fontFamily:"Fredoka",fontSize:"1.5rem",color:"#1B2D5B",marginBottom:"1.5rem",textAlign:"center"}}>Why Work at LSPA?</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1rem",marginBottom:"3rem"}}>
          {benefits.map((b, i) => (
            <div key={i} style={{padding:"1.5rem",background:"#fff",borderRadius:"12px",border:"1px solid #e5e7eb",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}}>
              <div style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>{b.icon}</div>
              <div style={{fontFamily:"Fredoka",fontWeight:"bold",color:"#1B2D5B",marginBottom:"0.25rem"}}>{b.title}</div>
              <div style={{fontFamily:"DM Sans",color:"#6B7280",fontSize:"0.9rem"}}>{b.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontFamily:"Fredoka",fontSize:"1.5rem",color:"#1B2D5B",marginBottom:"1.5rem",textAlign:"center"}}>Current Openings</h2>
        <div style={{display:"flex",flexDirection:"column",gap:"1.25rem",marginBottom:"3rem"}}>
          {openings.map((job, i) => (
            <div key={i} style={{padding:"1.5rem",background:"#fff",borderRadius:"12px",border:"1px solid #e5e7eb",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}}>
              <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"0.5rem",marginBottom:"0.75rem"}}>
                <div style={{fontFamily:"Fredoka",fontWeight:"bold",color:"#1B2D5B",fontSize:"1.15rem"}}>{job.title}</div>
                <div style={{display:"flex",gap:"0.5rem"}}>
                  <span style={{background:"#EBF5FB",color:"#1B2D5B",padding:"0.25rem 0.75rem",borderRadius:"999px",fontSize:"0.8rem",fontFamily:"DM Sans",fontWeight:"600"}}>{job.location}</span>
                  <span style={{background:"#E8F7EA",color:"#2E7D32",padding:"0.25rem 0.75rem",borderRadius:"999px",fontSize:"0.8rem",fontFamily:"DM Sans",fontWeight:"600"}}>{job.type}</span>
                </div>
              </div>
              <p style={{fontFamily:"DM Sans",color:"#6B7280",fontSize:"0.95rem",marginBottom:"0.75rem"}}>{job.desc}</p>
              <div>
                {job.reqs.map((r, j) => (
                  <div key={j} style={{fontFamily:"DM Sans",color:"#374151",fontSize:"0.9rem",paddingLeft:"1rem",position:"relative",marginBottom:"0.25rem"}}>
                    <span style={{position:"absolute",left:0,color:"#F7C948",fontWeight:"bold"}}>&#8226;</span> {r}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{background:"#0F1D3D",borderRadius:"16px",padding:"2.5rem",textAlign:"center"}}>
          <h3 style={{fontFamily:"Fredoka",color:"#fff",fontSize:"1.3rem",marginBottom:"0.5rem"}}>Interested in Joining LSPA?</h3>
          <p style={{fontFamily:"DM Sans",color:"rgba(255,255,255,0.7)",marginBottom:"1rem"}}>Send your resume and cover letter to get started.</p>
          <a href="mailto:lauraspelmanacademy@verizon.net?subject=Career%20Inquiry" style={{display:"inline-block",padding:"0.75rem 2rem",background:"linear-gradient(to right,#F7C948,#F5A623)",borderRadius:"999px",color:"#0F1D3D",fontFamily:"Fredoka",fontWeight:"bold",textDecoration:"none"}}>Email Your Resume</a>
        </div>
      </div>

      <div style={{background:"#0F1D3D",padding:"2rem 1rem",textAlign:"center"}}>
        <Link href="/" style={{color:"#F7C948",textDecoration:"none",fontFamily:"Fredoka"}}>Back to Home</Link>
      </div>
    </div>
  );
}
`;
fs.writeFileSync('app/careers/page.jsx', careersPage, 'utf8');
console.log('   Careers page created.');

// ------------------------------------------------------------
// DONE
// ------------------------------------------------------------
console.log('\n========================================');
console.log('All updates complete!');
console.log('========================================');
console.log('Created/Updated:');
console.log('  - Nav.jsx (added Resources link)');
console.log('  - Programs.jsx (AGE 4 -> AGE 4-5)');
console.log('  - app/resources/page.jsx');
console.log('  - app/gallery/page.jsx');
console.log('  - app/enrollment/page.jsx');
console.log('  - app/careers/page.jsx');
console.log('\nVisit:');
console.log('  http://localhost:3000/resources');
console.log('  http://localhost:3000/gallery');
console.log('  http://localhost:3000/enrollment');
console.log('  http://localhost:3000/careers');
console.log('========================================');
