'use client';
import{useState}from'react';
import{useLanguage}from'../i18n/LanguageProvider';

const benefitsEN=[
  {icon:'💰',title:'Competitive Pay',desc:'Salary commensurate with experience and NJ certification level'},
  {icon:'📚',title:'Professional Development',desc:'Ongoing training opportunities and continuing education support'},
  {icon:'❤️',title:'Meaningful Work',desc:'Make a lasting impact on young children in the Trenton community'},
  {icon:'📅',title:'School Schedule',desc:'Follow the Trenton Public Schools calendar with holidays and breaks'},
  {icon:'🤝',title:'Supportive Team',desc:'Work alongside dedicated educators who share your passion'},
  {icon:'🏠',title:'Two Campuses',desc:'Opportunities at our Trenton and Lawrence locations'},
];
const benefitsES=[
  {icon:'💰',title:'Pago Competitivo',desc:'Salario acorde con la experiencia y nivel de certificacion de NJ'},
  {icon:'📚',title:'Desarrollo Profesional',desc:'Oportunidades continuas de capacitacion y apoyo de educacion continua'},
  {icon:'❤️',title:'Trabajo con Proposito',desc:'Haz un impacto duradero en los ninos de la comunidad de Trenton'},
  {icon:'📅',title:'Horario Escolar',desc:'Sigue el calendario de las Escuelas Publicas de Trenton con feriados y recesos'},
  {icon:'🤝',title:'Equipo de Apoyo',desc:'Trabaja junto a educadores dedicados que comparten tu pasion'},
  {icon:'🏠',title:'Dos Campus',desc:'Oportunidades en nuestras ubicaciones de Trenton y Lawrence'},
];

const openingsEN=[
  {
    title:'Elementary School Teacher',
    location:'1040 Spruce St',
    type:'Full-Time',
    pay:'$57,922 – $66,651 per year',
    indeed:'https://www.indeed.com/viewjob?jk=4d43e49c2b70eba3',
    desc:'We are seeking a passionate and dedicated Elementary School Teacher to join our educational team. The ideal candidate will foster a positive and engaging learning environment for students, encouraging their academic growth and personal development. This role involves implementing a curriculum that meets the diverse needs of students, promoting a love for learning, and supporting their social and emotional well-being.',
    duties:[
      'Develop and implement lesson plans aligned with educational standards',
      'Utilize effective behavior management techniques',
      'Support children with autism and other special needs through tailored strategies',
      'Collaborate with parents, colleagues, and administration',
      'Assess student progress and adjust teaching strategies accordingly',
      'Participate in professional development opportunities',
    ],
    reqs:[
      'NJ P-3 certification required',
      "Bachelor's degree in Education or related field; teaching certification preferred",
      'Experience working with children in an educational setting highly desirable',
      'Strong understanding of childhood development principles',
      'Excellent communication skills, both verbal and written',
      'Commitment to fostering a safe, nurturing classroom environment',
    ],
    benefits:['Health insurance','Dental insurance','Vision insurance','Paid time off'],
    schedule:'Monday to Friday',
  },
  {
    title:'Retired Elementary School Teacher',
    location:'1040 Spruce St',
    type:'Full-Time',
    pay:'$57,922 – $66,651 per year',
    indeed:'https://www.indeed.com/viewjob?jk=e6dbbc0c5f9a0ad2',
    desc:'Looking for retired school teachers and educators with a passion for teaching and making a difference, interested in reentering the workforce while supplementing their income. Flexible schedules offered and competitive pay. Lots of fun, engagement, and classroom support provided in a nurturing classroom environment.',
    duties:[
      'Lead classroom instruction aligned with NJ standards',
      'Mentor and support fellow educators',
      'Engage students through proven teaching methods',
      'Collaborate with administration and families',
      'Maintain a positive and structured classroom environment',
    ],
    reqs:[
      'NJ P-3 certification required',
      'Must hold a teaching certificate issued by the State of New Jersey',
      'Experience in elementary education',
      'Passion for working with young children',
      'Flexible schedule availability',
    ],
    benefits:['Health insurance','Dental insurance','Vision insurance','Paid time off'],
    schedule:'Flexible — Monday to Friday',
  },
  {
    title:'Teacher Assistant',
    location:'1040 Spruce St',
    type:'Full-Time',
    pay:'$26,338 – $31,112 per year',
    desc:'Laura Spelman Preschool Academy is seeking a dedicated and nurturing Teacher Assistant to support high-quality early childhood education in alignment with NJDOE Preschool Program Implementation Guidelines, Trenton Board of Education standards, and the Office of Early Childhood (OOEC) framework. The Teacher Assistant works alongside the Lead Teacher to deliver a structured, play-based learning environment for children ages 3–5.',
    duties:[
      'Assist the Lead Teacher in implementing daily lesson plans aligned with the NJ Preschool Teaching and Learning Standards',
      'Support small group and individualized instruction to reinforce learning objectives',
      'Supervise children during classroom activities, meals, transitions, and outdoor play',
      'Help maintain a safe, clean, and organized classroom environment consistent with OOEC licensing requirements',
      'Observe and document child behavior and development under teacher direction',
      'Communicate respectfully with families and serve as a bridge between home and school',
      'Assist with preparation of instructional materials and learning centers',
      'Support implementation of positive behavior strategies and social-emotional learning',
    ],
    reqs:[
      'High school diploma or GED required (per N.J.A.C. 6A:13A-4.3)',
      'Child Development Associate (CDA) credential preferred',
      "Associate's degree in Early Childhood Education or related field a plus",
      'First Aid and CPR certification required (or willingness to obtain)',
      'Must pass NJ criminal background check (CARI/CHRI)',
      'Experience working with preschool-aged children preferred',
      'Bilingual English/Spanish a plus',
      'Ability to follow lesson plans and take direction from Lead Teacher',
    ],
    benefits:['Supportive team environment','Professional development opportunities','Paid time off','Growth pathway toward Lead Teacher role'],
    schedule:'Monday to Friday',
  },
];

const openingsES=[
  {
    title:'Maestra de Escuela Primaria',
    location:'1040 Spruce St',
    type:'Tiempo Completo',
    pay:'$57,922 – $66,651 por ano',
    desc:'Buscamos una maestra apasionada y dedicada para unirse a nuestro equipo educativo. El candidato ideal fomentara un ambiente de aprendizaje positivo y atractivo para los estudiantes, alentando su crecimiento academico y desarrollo personal.',
    duties:[
      'Desarrollar e implementar planes de leccion alineados con los estandares educativos',
      'Utilizar tecnicas efectivas de manejo del comportamiento',
      'Apoyar a ninos con autismo y otras necesidades especiales',
      'Colaborar con padres, colegas y administracion',
      'Evaluar el progreso de los estudiantes y ajustar estrategias',
      'Participar en oportunidades de desarrollo profesional',
    ],
    reqs:[
      'Certificacion NJ P-3 requerida',
      'Licenciatura en Educacion o campo relacionado; certificacion de ensenanza preferida',
      'Experiencia trabajando con ninos altamente deseable',
      'Solido conocimiento de los principios del desarrollo infantil',
      'Excelentes habilidades de comunicacion',
      'Compromiso con un ambiente de aula seguro y estimulante',
    ],
    benefits:['Seguro medico','Seguro dental','Seguro de vision','Tiempo libre pagado'],
    schedule:'Lunes a viernes',
  },
  {
    title:'Maestra de Primaria Jubilada',
    location:'1040 Spruce St',
    type:'Tiempo Completo',
    pay:'$57,922 – $66,651 por ano',
    desc:'Buscamos maestras jubiladas con pasion por la ensenanza interesadas en reincorporarse a la fuerza laboral mientras complementan sus ingresos. Se ofrecen horarios flexibles y pago competitivo en un ambiente de aula enriquecedor.',
    duties:[
      'Liderar la instruccion en el salon alineada con los estandares de NJ',
      'Orientar y apoyar a otros educadores',
      'Involucrar a los estudiantes a traves de metodos de ensenanza comprobados',
      'Colaborar con la administracion y las familias',
      'Mantener un ambiente de aula positivo y estructurado',
    ],
    reqs:[
      'Certificacion NJ P-3 requerida',
      'Debe tener certificado de ensenanza del Estado de Nueva Jersey',
      'Experiencia en educacion primaria',
      'Pasion por trabajar con ninos',
      'Disponibilidad de horario flexible',
    ],
    benefits:['Seguro medico','Seguro dental','Seguro de vision','Tiempo libre pagado'],
    schedule:'Flexible — Lunes a viernes',
  },
  {
    title:'Asistente de Maestra',
    location:'1040 Spruce St',
    type:'Tiempo Completo',
    pay:'$26,338 – $31,112 por ano',
    desc:'Laura Spelman Preschool Academy busca una Asistente de Maestra dedicada y comprometida para apoyar la educacion de alta calidad en alineacion con las Directrices de Implementacion del Programa Preescolar del NJDOE, los estandares de la Junta de Educacion de Trenton y el marco de la Oficina de Primera Infancia (OOEC). La Asistente trabaja junto a la Maestra Principal para ofrecer un ambiente de aprendizaje estructurado y basado en el juego para ninos de 3 a 5 anos.',
    duties:[
      'Asistir a la Maestra Principal en la implementacion de planes de leccion diarios alineados con los Estandares de Ensenanza y Aprendizaje Preescolar de NJ',
      'Apoyar la instruccion en grupos pequenos e individualizada para reforzar los objetivos de aprendizaje',
      'Supervisar a los ninos durante actividades, comidas, transiciones y juego al aire libre',
      'Ayudar a mantener un salon seguro, limpio y organizado conforme a los requisitos de licencia del OOEC',
      'Observar y documentar el comportamiento y desarrollo infantil bajo la direccion de la maestra',
      'Comunicarse respetuosamente con las familias y servir de enlace entre el hogar y la escuela',
      'Asistir con la preparacion de materiales de instruccion y centros de aprendizaje',
      'Apoyar la implementacion de estrategias de comportamiento positivo y aprendizaje socioemocional',
    ],
    reqs:[
      'Diploma de escuela secundaria o GED requerido (segun N.J.A.C. 6A:13A-4.3)',
      'Credencial CDA preferida',
      'Grado asociado en Educacion Temprana o campo relacionado es un plus',
      'Certificacion de Primeros Auxilios y RCP requerida o disposicion para obtenerla',
      'Debe pasar verificacion de antecedentes de NJ (CARI/CHRI)',
      'Experiencia trabajando con ninos preescolares preferida',
      'Bilingual ingles/espanol es un plus',
      'Capacidad de seguir planes de leccion y recibir direccion de la Maestra Principal',
    ],
    benefits:['Ambiente de equipo solidario','Oportunidades de desarrollo profesional','Tiempo libre pagado','Camino de crecimiento hacia Maestra Principal'],
    schedule:'Lunes a viernes',
  },
];

function JobModal({job,onClose,lang}){
  const emailSubject=encodeURIComponent('Application: '+job.title);
  const emailBody=encodeURIComponent('Hello,\n\nI am applying for the '+job.title+' position at Laura Spelman Preschool Academy.\n\nPlease find my resume and cover letter attached.\n\nThank you for your consideration.');
  return(
    <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:2000,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(5,10,30,0.92)',backdropFilter:'blur(12px)',padding:'0.75rem'}}>
      <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:24,width:'100%',maxWidth:640,maxHeight:'90vh',display:'flex',flexDirection:'column',overflow:'hidden',boxShadow:'0 40px 120px rgba(0,0,0,0.4)'}}>
        {/* Header */}
        <div style={{background:'linear-gradient(135deg,#1B2D5B 0%,#1B4A6B 100%)',padding:'1.5rem 2rem',flexShrink:0,position:'relative'}}>
          <div style={{height:4,background:'linear-gradient(90deg,#F7C948,#F5A623)',borderRadius:99,marginBottom:'1rem'}}/>
          <button onClick={onClose} style={{position:'absolute',top:16,right:16,background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.2)',color:'#fff',borderRadius:'50%',width:34,height:34,fontSize:'1rem',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>✕</button>
          <div style={{fontFamily:'Fredoka',fontSize:'1.5rem',fontWeight:700,color:'#fff',marginBottom:6}}>{job.title}</div>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            <span style={{fontFamily:'DM Sans',fontSize:'0.78rem',fontWeight:700,background:'rgba(255,255,255,0.1)',color:'#fff',borderRadius:999,padding:'3px 12px'}}>{job.location}</span>
            <span style={{fontFamily:'DM Sans',fontSize:'0.78rem',fontWeight:700,background:'rgba(75,163,227,0.3)',color:'#7dd3fc',borderRadius:999,padding:'3px 12px'}}>{job.type}</span>
            <span style={{fontFamily:'DM Sans',fontSize:'0.78rem',fontWeight:700,background:'rgba(76,175,80,0.3)',color:'#86efac',borderRadius:999,padding:'3px 12px'}}>💰 {job.pay}</span>
          </div>
        </div>
        {/* Body */}
        <div style={{flex:1,overflowY:'auto',padding:'1.5rem 2rem'}}>
          <p style={{fontFamily:'DM Sans',color:'#374151',fontSize:'0.95rem',lineHeight:1.7,marginBottom:'1.25rem'}}>{job.desc}</p>
          {job.duties&&(
            <div style={{marginBottom:'1.25rem'}}>
              <div style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1.05rem',fontWeight:700,marginBottom:8}}>{lang==='es'?'Responsabilidades':'Duties'}</div>
              {job.duties.map((d,i)=>(<div key={i} style={{display:'flex',gap:8,alignItems:'flex-start',fontFamily:'DM Sans',color:'#374151',fontSize:'0.9rem',marginBottom:5}}><span style={{color:'#F5A623',fontWeight:'bold',flexShrink:0}}>•</span>{d}</div>))}
            </div>
          )}
          <div style={{marginBottom:'1.25rem'}}>
            <div style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1.05rem',fontWeight:700,marginBottom:8}}>{lang==='es'?'Requisitos':'Qualifications'}</div>
            {job.reqs.map((r,i)=>(<div key={i} style={{display:'flex',gap:8,alignItems:'flex-start',fontFamily:'DM Sans',color:'#374151',fontSize:'0.9rem',marginBottom:5}}><span style={{color:'#4BA3E3',fontWeight:'bold',flexShrink:0}}>✓</span>{r}</div>))}
          </div>
          {job.benefits&&(
            <div style={{marginBottom:'1.25rem',background:'#F0FFF4',borderRadius:12,padding:'1rem'}}>
              <div style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1.05rem',fontWeight:700,marginBottom:8}}>{lang==='es'?'Beneficios':'Benefits'}</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                {job.benefits.map((b,i)=>(<span key={i} style={{fontFamily:'DM Sans',fontSize:'0.82rem',fontWeight:600,background:'#fff',border:'1px solid #86efac',color:'#166534',borderRadius:999,padding:'3px 12px'}}>✓ {b}</span>))}
              </div>
            </div>
          )}
          <div style={{fontFamily:'DM Sans',fontSize:'0.88rem',color:'#6B7280',marginBottom:'1.5rem'}}>
            <strong>{lang==='es'?'Horario':'Schedule'}:</strong> {job.schedule}
          </div>
        </div>
        {/* Footer */}
        <div style={{padding:'1.25rem 2rem',borderTop:'1px solid #e5e7eb',flexShrink:0,background:'#FAFAFA',display:'flex',flexDirection:'column',gap:10}}>
          {job.indeed&&(
            <a
              href={job.indeed}
              target='_blank'
              rel='noopener noreferrer'
              style={{display:'block',width:'100%',textAlign:'center',background:'#2164f3',color:'#fff',borderRadius:999,padding:'14px 24px',fontFamily:'Fredoka',fontSize:'1.1rem',fontWeight:700,textDecoration:'none',boxShadow:'0 4px 14px rgba(33,100,243,0.35)'}}
            >
              🔍 {lang==='es'?'Aplicar en Indeed':'Apply on Indeed'}
            </a>
          )}
          <a
            href={`mailto:lauraspelmanacademy@verizon.net?subject=${emailSubject}&body=${emailBody}`}
            style={{display:'block',width:'100%',textAlign:'center',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',borderRadius:999,padding:'14px 24px',fontFamily:'Fredoka',fontSize:'1.1rem',fontWeight:700,textDecoration:'none',boxShadow:'0 4px 14px rgba(247,201,72,0.4)'}}
          >
            📧 {lang==='es'?'Enviar Mi Solicitud':'Apply via Email'}
          </a>
          <p style={{textAlign:'center',fontFamily:'DM Sans',fontSize:'0.78rem',color:'#9CA3AF',marginTop:4}}>
            {lang==='es'?'Envia tu curriculum y carta de presentacion a':'Send your resume and cover letter to'} lauraspelmanacademy@verizon.net
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Careers(){
  const{t,lang}=useLanguage();
  const benefits=lang==='es'?benefitsES:benefitsEN;
  const openings=lang==='es'?openingsES:openingsEN;
  const[selectedJob,setSelectedJob]=useState(null);

  return(
    <div style={{minHeight:'100vh'}}>
      {selectedJob&&<JobModal job={selectedJob} onClose={()=>setSelectedJob(null)} lang={lang}/>}

      <section className='relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden' style={{background:'linear-gradient(135deg,#1B2D5B 0%,#5B2A3A 50%,#8B4513 100%)'}}>
        <div className='absolute inset-0' style={{background:'radial-gradient(ellipse at 40% 50%,rgba(247,201,72,0.08),transparent 60%)'}}/>
        <div className='max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6' style={{background:'rgba(247,201,72,0.1)',border:'1px solid rgba(247,201,72,0.2)'}}><span className='text-xs font-bold tracking-[2.5px] uppercase' style={{fontFamily:'DM Sans',color:'#F7C948'}}>{t('careers.badge')}</span></div>
          <h1 className='font-bold text-white mb-4' style={{fontFamily:'Fredoka',fontSize:'clamp(32px,5vw,56px)'}}>{t('careers.heading')} <span style={{color:'#F5A623'}}>{t('careers.headingAccent')}</span></h1>
          <p className='text-lg' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.75)',maxWidth:550,margin:'0 auto'}}>{t('careers.desc')}</p>
        </div>
      </section>

      <section className='py-16 md:py-24' style={{background:'#FFFFFF'}}>
        <div className='max-w-5xl mx-auto px-4 md:px-8'>
          <div className='text-center mb-12'>
            <h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>{t('careers.whyWork')} <span style={{color:'#4CAF50'}}>{t('careers.whyAccent')}</span></h2>
          </div>
          <div className='grid md:grid-cols-3 gap-5'>
            {benefits.map((b,i)=>(
              <div key={i} className='p-6 rounded-2xl border hover:shadow-lg transition-all' style={{borderColor:'#e5e7eb',background:'#FAFAFA'}}>
                <div className='text-3xl mb-3'>{b.icon}</div>
                <div className='font-bold mb-1' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{b.title}</div>
                <div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem'}}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 md:py-24' style={{background:'#F8FAFB'}}>
        <div className='max-w-3xl mx-auto px-4 md:px-8'>
          <div className='text-center mb-12'>
            <h2 className='font-bold' style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'clamp(26px,3.5vw,40px)'}}>{t('careers.openings')} <span style={{color:'#4BA3E3'}}>{t('careers.openingsAccent')}</span></h2>
          </div>
          <div className='space-y-5'>
            {openings.map((job,i)=>(
              <div key={i} onClick={()=>setSelectedJob(job)} className='p-6 rounded-2xl border bg-white cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all' style={{borderColor:'#e5e7eb'}}>
                <div className='flex justify-between flex-wrap gap-2 mb-2'>
                  <div className='font-bold text-lg' style={{fontFamily:'Fredoka',color:'#1B2D5B'}}>{job.title}</div>
                  <div className='flex gap-2 flex-wrap'>
                    <span className='px-3 py-1 rounded-full text-xs font-semibold' style={{fontFamily:'DM Sans',background:'#EBF5FB',color:'#1B2D5B'}}>{job.location}</span>
                    <span className='px-3 py-1 rounded-full text-xs font-semibold' style={{fontFamily:'DM Sans',background:'#E8F5E9',color:'#2E7D32'}}>{job.type}</span>
                  </div>
                </div>
                <div style={{fontFamily:'DM Sans',color:'#4CAF50',fontSize:'0.9rem',fontWeight:700,marginBottom:6}}>💰 {job.pay}</div>
                <p style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem',marginBottom:12}}>{job.desc.slice(0,120)}...</p>
                <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(27,45,91,0.06)',borderRadius:999,padding:'5px 14px'}}>
                  <span style={{fontFamily:'DM Sans',fontSize:'0.78rem',fontWeight:700,color:'#1B2D5B'}}>{lang==='es'?'Ver detalles y aplicar':'View Details & Apply'} →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16' style={{background:'#1B2D5B'}}>
        <div className='max-w-3xl mx-auto px-4 md:px-8 text-center'>
          <h3 className='font-bold text-white mb-3' style={{fontFamily:'Fredoka',fontSize:'1.5rem'}}>{t('careers.interested')} <span style={{color:'#F7C948'}}>{t('careers.interestedAccent')}</span></h3>
          <p className='mb-6' style={{fontFamily:'DM Sans',color:'rgba(255,255,255,0.6)'}}>{t('careers.resumeDesc')}</p>
          <a href='mailto:lauraspelmanacademy@verizon.net?subject=Career%20Inquiry' className='inline-block px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all' style={{fontFamily:'Fredoka',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',textDecoration:'none'}}>{t('careers.emailResume')}</a>
        </div>
      </section>
    </div>
  );
}
