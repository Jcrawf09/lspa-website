const fs = require('fs');
const path = require('path');

const base = process.argv[2] || '.';
const log = [];

function ensure(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ─── 1. TRANSLATION FILES ────────────────────────────────────────────────
ensure(path.join(base, 'app', 'i18n'));

const en = {
  // Nav
  nav: {
    home: "Home",
    about: "About",
    programs: "Programs",
    locations: "Locations",
    resources: "Resources",
    contact: "Contact",
    enrollNow: "Enroll Now",
    ourTeam: "Our Team",
    call: "Call"
  },

  // Top bar
  topBar: {
    tagline: "Where Little Dreams Grow Into Big Futures"
  },

  // Home - Hero
  hero: {
    badge: "Trenton's Free Preschool",
    heading1: "Where Little Dreams",
    heading2: "Grow Into Big Futures",
    desc: "Free, high-quality preschool education for Trenton families. Two campuses. Zero cost. Endless possibilities.",
    cta: "Start Enrollment",
    callBtn: "Call"
  },

  // Home - Programs
  programs: {
    badge: "Our Classrooms",
    heading: "Programs Built for",
    headingAccent: "Growing Minds",
    desc: "Both programs follow the Creative Curriculum framework aligned with NJ Preschool Teaching and Learning Standards. Full-day programs at no cost to qualifying Trenton families.",
    preschool3: "Preschool 3",
    preschool4: "Preschool 4",
    ages34: "Ages 3-4",
    ages45: "Ages 4-5",
    fullDay: "Full Day \u2014 Monday through Friday",
    highlights3: ["Social-emotional development", "Language & literacy foundations", "Creative play & exploration", "Music & movement"],
    highlights4: ["Kindergarten readiness", "Early math & science", "Writing & storytelling", "Physical education"],
    eligibility: "Children ages 3, 4, or 5 by September 30th. Trenton residents enroll at no cost."
  },

  // Home - CTA
  cta: {
    heading: "Give Your Child the",
    headingAccent: "Best Start",
    desc: "Enrollment is open for children ages 3, 4, or 5 by September 30th. Completely free for Trenton residents.",
    callBtn: "Call to Enroll",
    learnMore: "Learn More"
  },

  // Enrollment
  enrollment: {
    badge: "Start Here",
    heading: "Enroll Your",
    headingAccent: "Child",
    desc: "Free, high-quality preschool education for Trenton families. No tuition. No subsidy. Just opportunity.",
    spanishSubtitle: "Preescolar gratis para familias de Trenton.",
    callToEnroll: "Call to Enroll",
    stepsBadge: "5 Simple Steps",
    stepsHeading: "How to",
    stepsAccent: "Enroll",
    steps: [
      { title: "Contact Us", desc: "Call (609) 396-7171 or email lauraspelmanacademy@verizon.net to express interest and learn about available spots." },
      { title: "Tour a Campus", desc: "Visit our Trenton or Lawrence campus to meet our teachers and see our classrooms in action." },
      { title: "Complete Your Forms", desc: "Download and complete the enrollment application and registration packet below." },
      { title: "Submit Documents", desc: "Bring your completed forms along with your child's birth certificate, immunization records, and proof of Trenton residency." },
      { title: "Welcome to LSPA!", desc: "Once approved, your child joins the LSPA family. We will schedule an orientation to get started." }
    ],
    formsBadge: "Download & Upload",
    formsHeading: "Enrollment",
    formsAccent: "Forms",
    formsDesc: "Download, print, sign, and upload your forms securely. You will receive email confirmation.",
    forms: [
      { title: "Enrollment Application", titleEs: "Solicitud de Inscripci\u00f3n", desc: "District enrollment checklist, student information, eligibility verification, language survey, health forms, and family survey." },
      { title: "Registration Packet", titleEs: "Paquete de Registro", desc: "Complete registration forms including child info, emergency contacts, medical information, policies, and parent verification." },
      { title: "Social Media Release", titleEs: "Autorizaci\u00f3n de Redes Sociales", desc: "Consent form for photographs and video recordings used in school publications and social media." }
    ],
    download: "Download",
    uploadSigned: "Upload Signed Form",
    close: "Close",
    secureNote: "Secure submission \u2014 files go directly to Laura Spelman Preschool Academy. You will receive email confirmation.",
    parentName: "Parent / Guardian Name",
    email: "Email",
    childName: "Child's Name",
    phone: "Phone",
    attachForm: "Attach Signed Form(s)",
    dragDrop: "Click or drag files here",
    dropHere: "Drop files here",
    fileTypes: "PDF, JPG, PNG, HEIC",
    notes: "Notes",
    notesPlaceholder: "Any questions or comments",
    submit: "Submit Form",
    submitting: "Submitting...",
    encrypted: "Encrypted",
    sentDirectly: "Sent directly to LSPA",
    success: "Submitted Successfully!",
    successMsg: "Confirmation sent to your email.",
    uploadAnother: "Upload Another",
    errorMsg: "Error \u2014 Please try again",
    retry: "Retry",
    required: "Required",
    invalidEmail: "Invalid email",
    attachError: "Please attach your signed form",
    troubleMsg: "Having trouble? Email forms directly to",
    orDropOff: "or drop them off at either campus.",
    reqHeading: "What You",
    reqAccent: "Need",
    requirements: [
      "Child must be age 3, 4, or 5 by September 30th of the enrollment year",
      "Proof of Trenton residency (utility bill, lease, or mortgage statement)",
      "Child's birth certificate",
      "Up-to-date immunization records",
      "Completed enrollment application and registration packet",
      "Emergency contact information",
      "Physical exam form from your child's doctor"
    ],
    faqHeading: "Common",
    faqAccent: "Questions",
    faqs: [
      { q: "Is there a cost for the program?", a: "No. LSPA is completely free for all Trenton families. There is no tuition, no subsidy required, and no hidden fees. Our program is fully funded through the state of New Jersey." },
      { q: "What are the school hours?", a: "Our program runs full day, Monday through Friday, following the Trenton Public Schools calendar." },
      { q: "Do you provide meals?", a: "Yes. Breakfast, lunch, and snacks are provided daily at no cost to families through the CACFP program." },
      { q: "What curriculum do you use?", a: "We use the Creative Curriculum framework, aligned with the New Jersey Preschool Teaching and Learning Standards, with a focus on kindergarten readiness." },
      { q: "Can I enroll mid-year?", a: "Yes, we accept rolling enrollment when spots are available. Contact us to check current availability at either campus." },
      { q: "Do all teachers have certifications?", a: "Yes. All lead teachers hold New Jersey state certifications in early childhood education and participate in ongoing professional development." }
    ],
    readyHeading: "Ready to Get",
    readyAccent: "Started?",
    readyDesc: "Spots fill quickly. Contact us today to secure your child's place.",
    emailUs: "Email Us"
  },

  // About
  about: {
    badge: "Our Story",
    heading: "The Story Behind",
    headingAccent: "Our Classrooms",
    stats: { campuses: "Campuses", years: "Years Serving Trenton", families: "Families Served Annually", cost: "Free" },
    timelineNow: "Now",
    timelineNext: "Next",
    timeline2526: "A Year of Growth",
    timeline2627: "Looking Ahead",
    missionLabel: "Our Mission",
    missionText: "To provide every child in Trenton with a safe, nurturing, and enriching learning environment that builds the foundation for lifelong success."
  },

  // Our Team
  team: {
    badge: "Our People",
    heading: "Meet Our",
    headingAccent: "Team",
    desc: "30 dedicated educators and staff across two campuses, committed to giving every child the best start in life.",
    classrooms: "Classrooms",
    campuses: "Campuses",
    teamMembers: "Team Members",
    all: "All",
    trentonCampus: "Trenton Campus",
    lawrenceCampus: "Lawrence Campus",
    oldenAve: "Olden Ave",
    spruceSt: "Spruce St",
    nameTBD: "Name TBD",
    directors: "Directors",
    teachingStaff: "Teaching Staff",
    teacherAssistants: "Teacher Assistants",
    familyWorkers: "Family Workers",
    officeStaff: "Office Staff",
    security: "Security",
    foodService: "Food Service",
    roles: {
      director: "Director",
      leadTeacher: "Lead Teacher",
      teacherAssistant: "Teacher Assistant",
      familyWorker: "Family Worker",
      clerical: "Clerical",
      securityGuard: "Security Guard",
      food: "Food Service"
    },
    joinHeading: "Want to Join Our",
    joinAccent: "Team?",
    joinDesc: "We are always looking for passionate educators to make a difference.",
    viewPositions: "View Open Positions"
  },

  // Careers
  careers: {
    badge: "Careers",
    heading: "Join Our",
    headingAccent: "Team",
    desc: "Build your career while building futures. We are always looking for passionate educators to join the LSPA family.",
    whyWork: "Why Work at",
    whyAccent: "LSPA?",
    openings: "Current",
    openingsAccent: "Openings",
    interested: "Interested in Joining",
    interestedAccent: "LSPA?",
    resumeDesc: "Send your resume and cover letter to get started.",
    emailResume: "Email Your Resume"
  },

  // Gallery
  gallery: {
    badge: "Step Inside Our World",
    heading1: "Little Moments,",
    heading2: "Big Memories",
    desc: "Every smile, every discovery, every friendship \u2014 captured at Laura Spelman Preschool Academy.",
    visitHeading: "Come See It In Person",
    visitDesc: "Schedule a tour and experience the LSPA difference for your family.",
    enrollToday: "Enroll Today"
  },

  // Resources
  resources: {
    badge: "Resources",
    heading: "Family",
    headingAccent: "Resources",
    desc: "Helpful links, school information, and community support for LSPA families.",
    calendar: "School Calendar & Events",
    njSupport: "NJ Family Support",
    learning: "Learning at Home",
    lookingForForms: "Looking for enrollment forms?",
    visitEnrollment: "Visit our Enrollment page to download and submit forms",
    externalLink: "External Link"
  },

  // Privacy
  privacy: {
    heading: "Privacy Policy"
  },

  // 404
  notFound: {
    code: "404",
    heading: "Oops! Page Not Found",
    desc: "The page you are looking for does not exist or has been moved.",
    goHome: "Go Home"
  },

  // Footer
  footer: {
    desc: "Providing free quality preschool education in partnership with the Trenton Board of Education for over 30 years.",
    locations: "Locations",
    quickLinks: "Quick Links",
    email: "Email",
    copyright: "\u00a9 2026 Laura Spelman Preschool Academy",
    privacyPolicy: "Privacy Policy",
    poweredBy: "Powered by Madison Thomas Technologies"
  },

  // Common
  common: {
    english: "English",
    espanol: "Espa\u00f1ol",
    bilingual: "English / Espa\u00f1ol (Bilingual)"
  }
};

// ─── CARIBBEAN LATIN AMERICAN SPANISH ─────────────────────────────────────
const es = {
  nav: {
    home: "Inicio",
    about: "Sobre Nosotros",
    programs: "Programas",
    locations: "Ubicaciones",
    resources: "Recursos",
    contact: "Contacto",
    enrollNow: "Inscr\u00edbete",
    ourTeam: "Nuestro Equipo",
    call: "Llamar"
  },

  topBar: {
    tagline: "Donde los Sue\u00f1os Peque\u00f1os Se Hacen Grandes"
  },

  hero: {
    badge: "Preescolar Gratis en Trenton",
    heading1: "Donde los Sue\u00f1os Peque\u00f1os",
    heading2: "Se Hacen Grandes",
    desc: "Educaci\u00f3n preescolar gratuita y de alta calidad para familias de Trenton. Dos campus. Sin costo. Oportunidades sin l\u00edmites.",
    cta: "Comienza la Inscripci\u00f3n",
    callBtn: "Llama"
  },

  programs: {
    badge: "Nuestros Salones",
    heading: "Programas para",
    headingAccent: "Mentes en Crecimiento",
    desc: "Ambos programas siguen el marco del Creative Curriculum alineado con los Est\u00e1ndares de Ense\u00f1anza y Aprendizaje Preescolar de NJ. Programas de d\u00eda completo sin costo para familias de Trenton que califiquen.",
    preschool3: "Preescolar 3",
    preschool4: "Preescolar 4",
    ages34: "Edades 3-4",
    ages45: "Edades 4-5",
    fullDay: "D\u00eda Completo \u2014 Lunes a Viernes",
    highlights3: ["Desarrollo socioemocional", "Fundamentos del lenguaje y lectura", "Juego creativo y exploraci\u00f3n", "M\u00fasica y movimiento"],
    highlights4: ["Preparaci\u00f3n para kindergarten", "Matem\u00e1ticas y ciencias b\u00e1sicas", "Escritura y narraci\u00f3n", "Educaci\u00f3n f\u00edsica"],
    eligibility: "Ni\u00f1os de 3, 4 o 5 a\u00f1os antes del 30 de septiembre. Residentes de Trenton se inscriben sin costo."
  },

  cta: {
    heading: "Dale a Tu Hijo el",
    headingAccent: "Mejor Comienzo",
    desc: "La inscripci\u00f3n est\u00e1 abierta para ni\u00f1os de 3, 4 o 5 a\u00f1os antes del 30 de septiembre. Completamente gratis para residentes de Trenton.",
    callBtn: "Llama para Inscribir",
    learnMore: "M\u00e1s Informaci\u00f3n"
  },

  enrollment: {
    badge: "Empieza Aqu\u00ed",
    heading: "Inscribe a Tu",
    headingAccent: "Hijo",
    desc: "Educaci\u00f3n preescolar gratuita y de calidad para familias de Trenton. Sin matr\u00edcula. Sin subsidio. Solo oportunidad.",
    spanishSubtitle: "Preescolar gratis para familias de Trenton.",
    callToEnroll: "Llama para Inscribir",
    stepsBadge: "5 Pasos Sencillos",
    stepsHeading: "C\u00f3mo",
    stepsAccent: "Inscribirse",
    steps: [
      { title: "Cont\u00e1ctanos", desc: "Llama al (609) 396-7171 o env\u00eda un correo a lauraspelmanacademy@verizon.net para expresar tu inter\u00e9s y saber sobre los espacios disponibles." },
      { title: "Visita un Campus", desc: "Visita nuestro campus en Trenton o Lawrence para conocer a nuestros maestros y ver los salones en acci\u00f3n." },
      { title: "Completa los Formularios", desc: "Descarga y completa la solicitud de inscripci\u00f3n y el paquete de registro a continuaci\u00f3n." },
      { title: "Entrega los Documentos", desc: "Trae los formularios completos junto con el certificado de nacimiento de tu hijo, los registros de vacunas y prueba de residencia en Trenton." },
      { title: "\u00a1Bienvenido a LSPA!", desc: "Una vez aprobado, tu hijo se une a la familia LSPA. Programaremos una orientaci\u00f3n para comenzar." }
    ],
    formsBadge: "Descarga y Sube",
    formsHeading: "Formularios de",
    formsAccent: "Inscripci\u00f3n",
    formsDesc: "Descarga, imprime, firma y sube tus formularios de forma segura. Recibir\u00e1s confirmaci\u00f3n por correo electr\u00f3nico.",
    forms: [
      { title: "Solicitud de Inscripci\u00f3n", titleEs: "Enrollment Application", desc: "Lista de verificaci\u00f3n de inscripci\u00f3n del distrito, informaci\u00f3n del estudiante, verificaci\u00f3n de elegibilidad, encuesta de idioma, formularios de salud y encuesta familiar." },
      { title: "Paquete de Registro", titleEs: "Registration Packet", desc: "Formularios de registro completos incluyendo informaci\u00f3n del ni\u00f1o, contactos de emergencia, informaci\u00f3n m\u00e9dica, pol\u00edticas y verificaci\u00f3n de padres." },
      { title: "Autorizaci\u00f3n de Redes Sociales", titleEs: "Social Media Release", desc: "Formulario de consentimiento para fotograf\u00edas y grabaciones de video utilizadas en publicaciones escolares y redes sociales." }
    ],
    download: "Descargar",
    uploadSigned: "Subir Formulario Firmado",
    close: "Cerrar",
    secureNote: "Env\u00edo seguro \u2014 los archivos van directamente a Laura Spelman Preschool Academy. Recibir\u00e1s confirmaci\u00f3n por correo.",
    parentName: "Nombre del Padre / Encargado",
    email: "Correo Electr\u00f3nico",
    childName: "Nombre del Ni\u00f1o/a",
    phone: "Tel\u00e9fono",
    attachForm: "Adjunta Formulario(s) Firmado(s)",
    dragDrop: "Haz clic o arrastra archivos aqu\u00ed",
    dropHere: "Suelta los archivos aqu\u00ed",
    fileTypes: "PDF, JPG, PNG, HEIC",
    notes: "Notas",
    notesPlaceholder: "Preguntas o comentarios",
    submit: "Enviar Formulario",
    submitting: "Enviando...",
    encrypted: "Encriptado",
    sentDirectly: "Enviado directamente a LSPA",
    success: "\u00a1Enviado Exitosamente!",
    successMsg: "Confirmaci\u00f3n enviada a tu correo.",
    uploadAnother: "Subir Otro",
    errorMsg: "Error \u2014 Int\u00e9ntalo de nuevo",
    retry: "Reintentar",
    required: "Requerido",
    invalidEmail: "Correo inv\u00e1lido",
    attachError: "Adjunta tu formulario firmado",
    troubleMsg: "Tienes problemas? Env\u00eda los formularios por correo a",
    orDropOff: "o entr\u00e9galos en cualquiera de los dos campus.",
    reqHeading: "Lo Que",
    reqAccent: "Necesitas",
    requirements: [
      "El ni\u00f1o debe tener 3, 4 o 5 a\u00f1os antes del 30 de septiembre del a\u00f1o de inscripci\u00f3n",
      "Prueba de residencia en Trenton (factura de servicios, contrato de alquiler o estado de hipoteca)",
      "Certificado de nacimiento del ni\u00f1o",
      "Registros de vacunas al d\u00eda",
      "Solicitud de inscripci\u00f3n y paquete de registro completos",
      "Informaci\u00f3n de contacto de emergencia",
      "Formulario de examen f\u00edsico del doctor del ni\u00f1o"
    ],
    faqHeading: "Preguntas",
    faqAccent: "Frecuentes",
    faqs: [
      { q: "\u00bfTiene alg\u00fan costo el programa?", a: "No. LSPA es completamente gratis para todas las familias de Trenton. No hay matr\u00edcula, no se requiere subsidio y no hay costos ocultos. Nuestro programa est\u00e1 totalmente financiado por el estado de Nueva Jersey." },
      { q: "\u00bfCu\u00e1l es el horario escolar?", a: "Nuestro programa es de d\u00eda completo, de lunes a viernes, siguiendo el calendario de las Escuelas P\u00fablicas de Trenton." },
      { q: "\u00bfProveen comida?", a: "S\u00ed. El desayuno, almuerzo y meriendas se ofrecen diariamente sin costo para las familias a trav\u00e9s del programa CACFP." },
      { q: "\u00bfQu\u00e9 curr\u00edculo usan?", a: "Usamos el marco del Creative Curriculum, alineado con los Est\u00e1ndares de Ense\u00f1anza y Aprendizaje Preescolar de Nueva Jersey, con enfoque en la preparaci\u00f3n para kindergarten." },
      { q: "\u00bfPuedo inscribir a mitad de a\u00f1o?", a: "S\u00ed, aceptamos inscripci\u00f3n continua cuando hay espacios disponibles. Cont\u00e1ctanos para verificar la disponibilidad en cualquiera de los campus." },
      { q: "\u00bfTodos los maestros tienen certificaciones?", a: "S\u00ed. Todos los maestros principales tienen certificaciones del estado de Nueva Jersey en educaci\u00f3n temprana y participan en desarrollo profesional continuo." }
    ],
    readyHeading: "\u00bfListo para",
    readyAccent: "Comenzar?",
    readyDesc: "Los espacios se llenan r\u00e1pido. Cont\u00e1ctanos hoy para asegurar el lugar de tu hijo.",
    emailUs: "Env\u00edanos un Correo"
  },

  about: {
    badge: "Nuestra Historia",
    heading: "La Historia Detr\u00e1s de",
    headingAccent: "Nuestros Salones",
    stats: { campuses: "Campus", years: "A\u00f1os Sirviendo a Trenton", families: "Familias Atendidas Anualmente", cost: "Gratis" },
    timelineNow: "Ahora",
    timelineNext: "Pr\u00f3ximo",
    timeline2526: "Un A\u00f1o de Crecimiento",
    timeline2627: "Mirando Hacia Adelante",
    missionLabel: "Nuestra Misi\u00f3n",
    missionText: "Proveer a cada ni\u00f1o en Trenton un ambiente de aprendizaje seguro, enriquecedor y acogedor que construya la base para el \u00e9xito de toda la vida."
  },

  team: {
    badge: "Nuestra Gente",
    heading: "Conoce a Nuestro",
    headingAccent: "Equipo",
    desc: "30 educadores y personal dedicados en dos campus, comprometidos a darle a cada ni\u00f1o el mejor comienzo en la vida.",
    classrooms: "Salones",
    campuses: "Campus",
    teamMembers: "Miembros del Equipo",
    all: "Todos",
    trentonCampus: "Campus de Trenton",
    lawrenceCampus: "Campus de Lawrence",
    oldenAve: "Olden Ave",
    spruceSt: "Spruce St",
    nameTBD: "Nombre por Confirmar",
    directors: "Directores",
    teachingStaff: "Maestros",
    teacherAssistants: "Asistentes de Maestro",
    familyWorkers: "Trabajadores Familiares",
    officeStaff: "Personal de Oficina",
    security: "Seguridad",
    foodService: "Servicio de Alimentos",
    roles: {
      director: "Director/a",
      leadTeacher: "Maestro/a Principal",
      teacherAssistant: "Asistente de Maestro",
      familyWorker: "Trabajador/a Familiar",
      clerical: "Oficinista",
      securityGuard: "Guardia de Seguridad",
      food: "Servicio de Alimentos"
    },
    joinHeading: "\u00bfQuieres Unirte a Nuestro",
    joinAccent: "Equipo?",
    joinDesc: "Siempre estamos buscando educadores apasionados para hacer la diferencia.",
    viewPositions: "Ver Posiciones Abiertas"
  },

  careers: {
    badge: "Carreras",
    heading: "\u00danete a Nuestro",
    headingAccent: "Equipo",
    desc: "Construye tu carrera mientras construyes futuros. Siempre estamos buscando educadores apasionados para unirse a la familia LSPA.",
    whyWork: "Por Qu\u00e9 Trabajar en",
    whyAccent: "LSPA?",
    openings: "Posiciones",
    openingsAccent: "Abiertas",
    interested: "\u00bfInteresado en Unirte a",
    interestedAccent: "LSPA?",
    resumeDesc: "Env\u00eda tu resum\u00e9 y carta de presentaci\u00f3n para comenzar.",
    emailResume: "Env\u00eda tu Resum\u00e9"
  },

  gallery: {
    badge: "Entra a Nuestro Mundo",
    heading1: "Peque\u00f1os Momentos,",
    heading2: "Grandes Recuerdos",
    desc: "Cada sonrisa, cada descubrimiento, cada amistad \u2014 capturados en Laura Spelman Preschool Academy.",
    visitHeading: "Ven a Vernos en Persona",
    visitDesc: "Agenda un recorrido y conoce la diferencia LSPA para tu familia.",
    enrollToday: "Inscr\u00edbete Hoy"
  },

  resources: {
    badge: "Recursos",
    heading: "Recursos para",
    headingAccent: "Familias",
    desc: "Enlaces \u00fatiles, informaci\u00f3n escolar y apoyo comunitario para las familias de LSPA.",
    calendar: "Calendario Escolar y Eventos",
    njSupport: "Apoyo Familiar de NJ",
    learning: "Aprendizaje en Casa",
    lookingForForms: "\u00bfBuscas los formularios de inscripci\u00f3n?",
    visitEnrollment: "Visita nuestra p\u00e1gina de Inscripci\u00f3n para descargar y enviar formularios",
    externalLink: "Enlace Externo"
  },

  privacy: {
    heading: "Pol\u00edtica de Privacidad"
  },

  notFound: {
    code: "404",
    heading: "\u00a1P\u00e1gina No Encontrada!",
    desc: "La p\u00e1gina que buscas no existe o fue movida.",
    goHome: "Ir al Inicio"
  },

  footer: {
    desc: "Ofreciendo educaci\u00f3n preescolar gratuita y de calidad en colaboraci\u00f3n con la Junta de Educaci\u00f3n de Trenton por m\u00e1s de 30 a\u00f1os.",
    locations: "Ubicaciones",
    quickLinks: "Enlaces R\u00e1pidos",
    email: "Correo",
    copyright: "\u00a9 2026 Laura Spelman Preschool Academy",
    privacyPolicy: "Pol\u00edtica de Privacidad",
    poweredBy: "Desarrollado por Madison Thomas Technologies"
  },

  common: {
    english: "English",
    espanol: "Espa\u00f1ol",
    bilingual: "English / Espa\u00f1ol (Biling\u00fce)"
  }
};

fs.writeFileSync(path.join(base, 'app', 'i18n', 'en.json'), JSON.stringify(en, null, 2));
fs.writeFileSync(path.join(base, 'app', 'i18n', 'es.json'), JSON.stringify(es, null, 2));
log.push('CREATED app/i18n/en.json - English translations (all pages)');
log.push('CREATED app/i18n/es.json - Caribbean Latin American Spanish translations (all pages)');

// ─── 2. LANGUAGE PROVIDER ─────────────────────────────────────────────────
const provider = `'use client';
import{createContext,useContext,useState,useEffect}from'react';
import en from'./en.json';
import es from'./es.json';

const translations={en,es};
const LanguageContext=createContext();

export function LanguageProvider({children}){
const[lang,setLang]=useState('en');
const[loaded,setLoaded]=useState(false);

useEffect(()=>{
// Check localStorage first (manual override)
const saved=localStorage.getItem('lspa-lang');
if(saved&&translations[saved]){setLang(saved);setLoaded(true);return;}

// Auto-detect from browser
const browserLang=navigator.language||navigator.userLanguage||'en';
const prefix=browserLang.toLowerCase().split('-')[0];
if(prefix==='es'){setLang('es');}
setLoaded(true);
},[]);

const switchLanguage=(newLang)=>{
if(translations[newLang]){
setLang(newLang);
localStorage.setItem('lspa-lang',newLang);
}
};

const t=(key)=>{
const keys=key.split('.');
let val=translations[lang];
for(const k of keys){
if(val&&typeof val==='object'&&k in val)val=val[k];
else return key;
}
return val;
};

// Get nested value that might be array or object
const tObj=(key)=>{
const keys=key.split('.');
let val=translations[lang];
for(const k of keys){
if(val&&typeof val==='object'&&k in val)val=val[k];
else return null;
}
return val;
};

return(
<LanguageContext.Provider value={{lang,switchLanguage,t,tObj,loaded}}>
{children}
</LanguageContext.Provider>
);
}

export function useLanguage(){
const ctx=useContext(LanguageContext);
if(!ctx)throw new Error('useLanguage must be used within LanguageProvider');
return ctx;
}
`;
fs.writeFileSync(path.join(base, 'app', 'i18n', 'LanguageProvider.jsx'), provider);
log.push('CREATED app/i18n/LanguageProvider.jsx - Auto-detect browser language, manual toggle, localStorage persistence');

// ─── 3. UPDATE ROOT LAYOUT ───────────────────────────────────────────────
const layoutPath = path.join(base, 'app', 'layout.jsx');
let layout = fs.readFileSync(layoutPath, 'utf8');

if (!layout.includes('LanguageProvider')) {
  // Add import
  layout = layout.replace(
    "import './globals.css';",
    "import './globals.css';\nimport{LanguageProvider}from'./i18n/LanguageProvider';"
  );

  // Wrap body contents
  layout = layout.replace(
    '<body style={{background:\'#FFFDF7\'}}>',
    "<body style={{background:'#FFFDF7'}}>\n        <LanguageProvider>"
  );
  layout = layout.replace(
    '</body>',
    '        </LanguageProvider>\n      </body>'
  );

  // Make html lang dynamic (can't do server-side easily, so leave as 'en' for now)
  fs.writeFileSync(layoutPath, layout);
  log.push('UPDATED app/layout.jsx - Wrapped app in LanguageProvider');
}

// ─── 4. UPDATE NAV WITH LANGUAGE TOGGLE ───────────────────────────────────
const navPath = path.join(base, 'app', 'components', 'Nav.jsx');
const nav = `'use client';
import{useState,useEffect}from'react';
import{usePathname}from'next/navigation';
import Link from'next/link';
import{useLanguage}from'../i18n/LanguageProvider';

const linkKeys=[
{key:'home',href:'/'},
{key:'about',href:'/about-us'},
{key:'programs',href:'/#programs'},
{key:'locations',href:'/#locations'},
{key:'resources',href:'/resources'},
{key:'contact',href:'/#contact'},
];

export default function Nav(){
const pathname=usePathname();
const{lang,switchLanguage,t}=useLanguage();
const[scrolled,setScrolled]=useState(false);
const[menuOpen,setMenuOpen]=useState(false);

useEffect(()=>{
const h=()=>setScrolled(window.scrollY>20);
window.addEventListener('scroll',h);
return()=>window.removeEventListener('scroll',h);
},[]);

useEffect(()=>{
if(menuOpen)document.body.style.overflow='hidden';
else document.body.style.overflow='';
return()=>{document.body.style.overflow='';};
},[menuOpen]);

const isActive=(href)=>{
if(href==='/')return pathname==='/';
if(href.startsWith('/#'))return pathname==='/';
return pathname.startsWith(href);
};

return(
<>
<div className='w-full text-center py-1.5 text-xs md:text-sm relative z-50' style={{background:'#0F1D3D',color:'rgba(255,255,255,0.8)',fontFamily:'DM Sans'}}>
<div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
<span style={{color:'#F7C948',fontWeight:600}}>{t('topBar.tagline')}</span>
<div className='flex items-center gap-3'>
<button onClick={()=>switchLanguage(lang==='en'?'es':'en')} className='px-2 py-0.5 rounded text-xs font-bold cursor-pointer transition-all hover:opacity-80' style={{background:'rgba(247,201,72,0.15)',color:'#F7C948',border:'1px solid rgba(247,201,72,0.3)',fontFamily:'DM Sans'}}>{lang==='en'?'ES':'EN'}</button>
<a href='tel:6093967171' className='font-bold hover:underline' style={{color:'#F7C948'}}>(609) 396-7171</a>
</div>
</div>
</div>

<nav className={'sticky top-0 z-40 transition-all duration-300 '+(scrolled?'shadow-lg':'')} style={{background:'#FFFDF7',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>
<div className='max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between' style={{height:72}}>

<Link href='/' className='flex items-center gap-3' style={{textDecoration:'none'}}>
<img src='/images/lspa-logo-white.jpeg' alt='LSPA' style={{width:44,height:44,borderRadius:10,objectFit:'contain'}}/>
<div>
<div className='font-bold text-base leading-tight' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>Laura Spelman</div>
<div className='text-xs font-bold tracking-[2px] uppercase' style={{color:'#F5A623'}}>Preschool Academy</div>
</div>
</Link>

<div className='hidden lg:flex items-center gap-1'>
{linkKeys.map(l=>(
<a key={l.key} href={l.href} className='px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200' style={{fontFamily:'DM Sans',color:isActive(l.href)?'#1B2D5B':'#6B7280',background:isActive(l.href)?'rgba(27,45,91,0.06)':'transparent',borderBottom:isActive(l.href)?'2px solid #F5A623':'2px solid transparent'}}>{t('nav.'+l.key)}</a>
))}
<a href='/enrollment' className='ml-2 px-5 py-2 rounded-full font-bold text-sm shadow-lg' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none'}}>{t('nav.enrollNow')}</a>
</div>

<button onClick={()=>setMenuOpen(!menuOpen)} className='lg:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer' style={{background:'none',border:'none',gap:5}}>
<span className='block h-0.5 w-6 rounded-full transition-all duration-300' style={{background:'#1B2D5B',transform:menuOpen?'rotate(45deg) translate(4px,4px)':'none'}}/>
<span className='block h-0.5 w-6 rounded-full transition-all duration-300' style={{background:'#1B2D5B',opacity:menuOpen?0:1}}/>
<span className='block h-0.5 w-6 rounded-full transition-all duration-300' style={{background:'#1B2D5B',transform:menuOpen?'rotate(-45deg) translate(4px,-4px)':'none'}}/>
</button>
</div>
</nav>

{menuOpen&&(
<div className='fixed inset-0 z-30' style={{background:'rgba(15,29,61,0.97)',paddingTop:120}} onClick={()=>setMenuOpen(false)}>
<div className='flex flex-col items-center gap-1' onClick={e=>e.stopPropagation()}>
{linkKeys.map(l=>(
<a key={l.key} href={l.href} onClick={()=>setMenuOpen(false)} className='block py-3 px-4 rounded-xl text-sm font-semibold transition-all mb-1' style={{fontFamily:'DM Sans',background:isActive(l.href)?'linear-gradient(135deg,#2e7d52,#48a870)':'transparent',color:'#fff',minWidth:200,textAlign:'center',textDecoration:'none'}}>{t('nav.'+l.key)}</a>
))}
<div style={{width:'100%',height:1,background:'#e8efe9',margin:'16px 0'}}/>
<button onClick={()=>{switchLanguage(lang==='en'?'es':'en');}} className='px-6 py-2 rounded-full text-sm font-bold cursor-pointer mb-3' style={{fontFamily:'DM Sans',background:'rgba(247,201,72,0.15)',color:'#F7C948',border:'1px solid rgba(247,201,72,0.3)'}}>{lang==='en'?'Cambiar a Espa\\u00f1ol':'Switch to English'}</button>
<a href='/enrollment' onClick={()=>setMenuOpen(false)} className='block text-center py-3 rounded-full font-bold text-sm shadow-lg' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none',minWidth:200}}>{t('nav.enrollNow')}</a>
<a href='tel:6093967171' className='block text-center mt-3 py-3 rounded-full font-bold text-sm border-2' style={{fontFamily:'Fredoka',borderColor:'#d4edda',color:'#2e7d52',textDecoration:'none',minWidth:200}}>{t('nav.call')} (609) 396-7171</a>
</div>
</div>
)}
</>
);}
`;
fs.writeFileSync(navPath, nav);
log.push('UPDATED Nav.jsx - Language toggle (EN/ES button in top bar + mobile menu), translated labels');

// ─── SUMMARY ──────────────────────────────────────────────────────────────
console.log('');
console.log('========================================');
console.log('  PHASE 3: SPANISH TRANSLATION');
console.log('  Part 1 - Infrastructure Complete');
console.log('========================================');
console.log('');
log.forEach(l => console.log('  ' + l));
console.log('');
console.log('  WHAT THIS DOES:');
console.log('  - Auto-detects browser language (Spanish speakers see Spanish)');
console.log('  - EN/ES toggle button in top bar (desktop) and mobile menu');
console.log('  - Remembers language choice on return visits');
console.log('  - Nav labels now translated');
console.log('  - Translation files ready for all pages');
console.log('');
console.log('  NEXT: Part 2 will wire translations into each page component');
console.log('');
