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
    type:'Full-Time, Part-Time, Temporary',
    pay:'$57,922 - $66,651 per year',
    indeed:'https://www.indeed.com/viewjob?jk=4d43e49c2b70eba3',
    desc:'The Trenton Board of Education, Office of Early Childhood, seeks a qualified P-3 (or higher) certified teacher to join our partnership program at Laura Spelman Preschool Academy. This is a public education position serving elementary-aged children in a diverse learning environment through Trenton Public Schools. This is not a private daycare position. This is a public-school teaching role with full accountability to New Jersey education standards and Trenton Board of Education requirements. Teachers in this role are accountable to: New Jersey Department of Education standards, Trenton Public Schools curriculum requirements, Office of Early Childhood policies and procedures, and all applicable state and federal education regulations. We are committed to supporting our teachers through ongoing professional development opportunities and fostering a collaborative community dedicated to educational excellence.',
    mandatoryNote:'DO NOT begin the application process if you do not have ALL required documents ready to upload.',
    mandatory:[
      'New Jersey P-3 Teaching Certification (Preschool through 3rd Grade or higher) — CE or CEAS acceptable if actively working toward full certification; CE/CEAS holders must provide evidence of pathway to standard certification',
      "Bachelor's degree in Education, Early Childhood Education, or related field — official transcripts from accredited institution required",
      'Copy of Social Security Card',
      'Photo ID',
      'Up-to-date resume',
      'All applicable teaching certificates: P-3 Standard Certificate, CE or CEAS (if applicable), Director Academy Certificate (if applicable), National Administrator Credential (if applicable), ParaPro Certificate (if applicable)',
      'Official transcripts for all undergraduate, graduate, and P-3 pedagogy programs',
      'Verification of Previous and Present Preschool Employment — original letters on school letterhead with exact dates of employment, full or part-time status, ages of children taught or supervised',
      'Criminal History Review Information (CHRI)',
      'Child Abuse Record Information (CARI)',
      'Application with receipt (submitted through proper channels)',
      'Clearance Letter and Application — DYFS Approved',
    ],
    duties:[
      'Develop and implement engaging lesson plans aligned with New Jersey Student Learning Standards and curriculum requirements that cater to varying student abilities and diverse learning styles',
      'Implement effective classroom management techniques to maintain a productive, positive, respectful, and inclusive classroom atmosphere',
      'Utilize learning technology platforms and digital tools to enhance instructional delivery and student engagement',
      'Assess student progress through formative and summative evaluations, including standardized testing and informal assessments, and adjust teaching strategies accordingly',
      'Provide individualized support and tutoring to students requiring additional help, including those with special education needs or in early intervention programs',
      'Collaborate with parents, colleagues, and specialists to support holistic student development and address behavioral or learning challenges',
      'Incorporate literacy education, math instruction, physical education, and library services into daily lessons to foster well-rounded growth',
      'Teach physical education, encouraging students to engage in physical activity and understand the importance of health and fitness',
      'Support children with autism and other special needs through tailored instructional strategies and early intervention practices',
      'Provide library services by guiding students in research skills and fostering a love for reading',
      'Participate in professional development opportunities to stay current with educational best practices, including Montessori methods',
    ],
    reqs:[
      'NJ P-3 Teaching Certification REQUIRED — CE or CEAS acceptable if actively working toward full certification',
      "Bachelor's degree in Education, Early Childhood Education, or related field REQUIRED",
      'Minimum 1 year teaching experience required',
      'Proven classroom experience with elementary-aged children in diverse educational settings',
      'Strong understanding of childhood development principles and effective teaching methodologies',
      'Knowledge of behavior management strategies and special education practices, including experience with children with autism or in early intervention programs',
      'Familiarity with curriculum development, lesson planning, and standardized testing procedures',
      'Experience with learning technology platforms and digital tools for instruction and assessment',
      'Ability to create inclusive lesson plans that accommodate diverse learning styles',
      'Excellent communication skills, both verbal and written, to effectively interact with students, parents, and staff',
      'Commitment to fostering a safe, nurturing, and stimulating classroom environment',
      'Familiarity with education administration processes is a plus',
      'Must be able to commute to or relocate to Township of Lawrence, NJ 08648 before starting work',
      'English required — Spanish preferred',
    ],
    docsSendTo:'Laura Spelman Preschool Academy, ATTN: Jessica Toro, 540 N Olden Avenue, Trenton, NJ 08638',
    benefits:['Paid time off','Professional development assistance'],
    schedule:'Monday to Friday — In Person',
  },
  {
    title:'Retired Elementary School Teacher',
    location:'1040 Spruce St',
    type:'Full-Time, Part-Time, Temporary',
    pay:'$57,922 - $66,651 per year',
    indeed:'https://www.indeed.com/viewjob?jk=e6dbbc0c5f9a0ad2',
    desc:'The Trenton Board of Education, Office of Early Childhood, seeks a qualified P-3 (or higher) certified retired teacher to join our partnership program at Laura Spelman Preschool Academy. We are looking for retired school teachers and educators with a passion for teaching and making a difference who are interested in reentering the workforce while supplementing their income. Must have a teaching standard issued in the State of New Jersey. Flexible schedules offered and competitive pay. Lots of fun, engagement, and classroom support provided in a nurturing classroom environment. This is a public-school teaching role with full accountability to New Jersey education standards and Trenton Board of Education requirements.',
    mandatoryNote:'DO NOT begin the application process if you do not have ALL required documents ready to upload.',
    mandatory:[
      'New Jersey P-3 Teaching Certification (Preschool through 3rd Grade or higher) — CE or CEAS acceptable if actively working toward full certification; CE/CEAS holders must provide evidence of pathway to standard certification',
      "Bachelor's degree in Education, Early Childhood Education, or related field — official transcripts from accredited institution required",
      'Copy of Social Security Card',
      'Photo ID',
      'Up-to-date resume',
      'All applicable teaching certificates: P-3 Standard Certificate, CE or CEAS (if applicable), Director Academy Certificate (if applicable), National Administrator Credential (if applicable), ParaPro Certificate (if applicable)',
      'Official transcripts for all undergraduate, graduate, and P-3 pedagogy programs',
      'Verification of Previous and Present Preschool Employment — original letters on school letterhead with exact dates, full or part-time status, and ages of children taught',
      'Criminal History Review Information (CHRI)',
      'Child Abuse Record Information (CARI)',
      'Application with receipt (submitted through proper channels)',
      'Clearance Letter and Application — DYFS Approved',
    ],
    duties:[
      'Develop and implement engaging lesson plans aligned with New Jersey Student Learning Standards and curriculum requirements that cater to varying student abilities and diverse learning styles',
      'Implement effective classroom management techniques to maintain a productive, positive, respectful, and inclusive classroom atmosphere',
      'Utilize learning technology platforms and digital tools to enhance instructional delivery and student engagement',
      'Assess student progress through formative and summative evaluations, including standardized testing and informal assessments, and adjust teaching strategies accordingly',
      'Provide individualized support and tutoring to students requiring additional help, including those with special education needs or in early intervention programs',
      'Collaborate with parents, colleagues, and specialists to support holistic student development and address behavioral or learning challenges',
      'Incorporate literacy education, math instruction, physical education, and library services into daily lessons to foster well-rounded growth',
      'Teach physical education, encouraging students to engage in physical activity and understand the importance of health and fitness',
      'Support children with autism and other special needs through tailored instructional strategies and early intervention practices',
      'Provide library services by guiding students in research skills and fostering a love for reading',
      'Participate in professional development opportunities to stay current with educational best practices, including Montessori methods',
    ],
    reqs:[
      'NJ P-3 Teaching Certification REQUIRED — must hold a teaching certificate issued by the State of New Jersey',
      "Bachelor's degree in Education, Early Childhood Education, or related field REQUIRED",
      'Minimum 1 year teaching experience required',
      'Proven classroom experience with elementary-aged children',
      'Strong understanding of childhood development principles and effective teaching methodologies',
      'Knowledge of behavior management strategies and special education practices, including experience with children with autism or in early intervention programs',
      'Familiarity with curriculum development, lesson planning, and standardized testing procedures',
      'Experience with learning technology platforms and digital tools for instruction and assessment',
      'Ability to create inclusive lesson plans accommodating diverse learning styles',
      'Excellent communication skills, both verbal and written, to effectively interact with students, parents, and staff',
      'Commitment to fostering a safe, nurturing, and stimulating classroom environment',
      'Familiarity with education administration processes is a plus',
      'Flexible schedule availability',
      'Must be able to commute to or relocate to Township of Lawrence, NJ 08648 before starting work',
      'English required — Spanish preferred',
    ],
    docsSendTo:'Laura Spelman Preschool Academy, ATTN: Jessica Toro, 540 N Olden Avenue, Trenton, NJ 08638',
    benefits:['Paid time off','Professional development assistance','Flexible scheduling'],
    schedule:'Flexible — Monday to Friday — In Person',
  },
  {
    title:'Teacher Assistant',
    location:'1040 Spruce St',
    type:'Full-Time',
    pay:'$26,338 - $31,112 per year',
    desc:'The Trenton Board of Education, Office of Early Childhood, seeks a dedicated and nurturing Teacher Assistant to join our partnership program at Laura Spelman Preschool Academy. This position supports high-quality early childhood education in alignment with NJDOE Preschool Program Implementation Guidelines, Trenton Board of Education standards, and the Office of Early Childhood (OOEC) framework. The Teacher Assistant works alongside the Lead Teacher to deliver a structured, play-based learning environment for children ages 3-5. This is not a private daycare position. This is a public-school support role with full accountability to New Jersey education standards and Trenton Board of Education requirements.',
    mandatoryNote:'DO NOT begin the application process if you do not have ALL required documents ready to submit.',
    mandatory:[
      'High school diploma or GED (per N.J.A.C. 6A:13A-4.3)',
      "Child Development Associate (CDA) credential (preferred) or Associate's degree in Early Childhood Education or related field",
      'Copy of Social Security Card',
      'Photo ID',
      'Up-to-date resume',
      'First Aid and CPR certification (or willingness to obtain prior to start date)',
      'Criminal History Review Information (CHRI)',
      'Child Abuse Record Information (CARI)',
      'DYFS Clearance Letter and Application — DYFS Approved',
      'Verification of Previous and Present Preschool Employment — original letters on school letterhead with exact dates of employment, full or part-time status, and ages of children supervised',
      'Application with receipt (submitted through proper channels)',
    ],
    duties:[
      'Assist the Lead Teacher in implementing daily lesson plans aligned with the NJ Preschool Teaching and Learning Standards and OOEC curriculum requirements',
      'Support small group and individualized instruction to reinforce learning objectives presented by the Lead Teacher',
      'Supervise children during classroom activities, meals, transitions, and outdoor play in accordance with OOEC licensing requirements',
      'Help maintain a safe, clean, and organized classroom environment consistent with all applicable state and federal regulations',
      'Observe and document child behavior and developmental progress under the direction of the Lead Teacher',
      'Communicate respectfully with families and serve as a bridge between home and school as directed',
      'Assist with preparation of instructional materials, learning centers, and classroom displays',
      'Support implementation of positive behavior strategies and social-emotional learning activities',
      'Assist with meal times, rest periods, and daily routines in accordance with program policies',
      'Participate in professional development opportunities and staff meetings as required',
    ],
    reqs:[
      'High school diploma or GED required (per N.J.A.C. 6A:13A-4.3)',
      'Child Development Associate (CDA) credential preferred',
      "Associate's degree in Early Childhood Education or related field a plus",
      'Minimum 1 year of experience working with preschool-aged children preferred',
      'First Aid and CPR certification required (or willingness to obtain prior to start)',
      'Must pass NJ criminal background check (CARI/CHRI)',
      'DYFS Clearance required',
      'Knowledge of child development principles and age-appropriate teaching practices',
      'Ability to support behavior management strategies and social-emotional learning',
      'Strong communication skills, both verbal and written, to interact with students, families, and staff',
      'Ability to follow lesson plans and take direction from the Lead Teacher',
      'Commitment to fostering a safe, nurturing, and stimulating classroom environment',
      'Bilingual English/Spanish a plus',
      'Must be able to commute to Township of Lawrence, NJ 08648',
    ],
    docsSendTo:'Laura Spelman Preschool Academy, ATTN: Jessica Toro, 540 N Olden Avenue, Trenton, NJ 08638',
    benefits:['Paid time off','Professional development opportunities','Supportive team environment','Growth pathway toward Lead Teacher role'],
    schedule:'Monday to Friday — In Person',
  },
];

const openingsES=[
  {
    title:'Maestra de Escuela Primaria',
    location:'1040 Spruce St',
    type:'Tiempo Completo, Tiempo Parcial, Temporal',
    pay:'$57,922 - $66,651 por ano',
    indeed:'https://www.indeed.com/viewjob?jk=4d43e49c2b70eba3',
    desc:'La Junta de Educacion de Trenton, Oficina de Primera Infancia, busca una maestra certificada P-3 (o superior) para unirse a nuestro programa de asociacion en Laura Spelman Preschool Academy. Este es un puesto de educacion publica que atiende a ninos en edad escolar primaria en un entorno de aprendizaje diverso a traves de las Escuelas Publicas de Trenton. Este no es un puesto de guarderia privada. Es un rol de ensenanza en escuela publica con plena responsabilidad ante los estandares educativos de Nueva Jersey y los requisitos de la Junta de Educacion de Trenton.',
    mandatoryNote:'NO inicie el proceso de solicitud si no tiene TODOS los documentos requeridos listos para cargar.',
    mandatory:[
      'Certificacion de Ensenanza NJ P-3 (Preescolar hasta 3er Grado o superior) — CE o CEAS aceptable si esta trabajando activamente hacia la certificacion completa',
      "Licenciatura en Educacion, Educacion Temprana, o campo relacionado — se requieren transcripciones oficiales de institucion acreditada",
      'Copia de Tarjeta de Seguro Social',
      'Identificacion con foto',
      'Curriculum actualizado',
      'Todos los certificados de ensenanza aplicables: Certificado Estandar P-3, CE o CEAS (si aplica), Certificado de Academia de Director (si aplica), Credencial Nacional de Administrador (si aplica), Certificado ParaPro (si aplica)',
      'Transcripciones oficiales de todos los programas de pregrado, posgrado y pedagogia P-3',
      'Verificacion de Empleo Previo y Actual en Preescolar — cartas originales en papel membretado con fechas exactas de empleo, estado de tiempo completo o parcial, edades de los ninos ensenados o supervisados',
      'Informacion de Revision de Antecedentes Penales (CHRI)',
      'Informacion de Registro de Abuso Infantil (CARI)',
      'Solicitud con recibo (enviada por los canales correspondientes)',
      'Carta de Autorizacion y Solicitud — Aprobada por DYFS',
    ],
    duties:[
      'Desarrollar e implementar planes de leccion alineados con los Estandares de Aprendizaje Estudiantil de NJ y los requisitos del plan de estudios, atendiendo a las diversas habilidades y estilos de aprendizaje de los estudiantes',
      'Implementar tecnicas efectivas de manejo del salon para mantener un ambiente productivo, positivo, respetuoso e inclusivo',
      'Utilizar plataformas de tecnologia educativa y herramientas digitales para mejorar la instruccion y el compromiso estudiantil',
      'Evaluar el progreso de los estudiantes a traves de evaluaciones formativas y sumativas, incluidas pruebas estandarizadas, y ajustar las estrategias de ensenanza en consecuencia',
      'Proporcionar apoyo individualizado y tutoria a los estudiantes que requieren ayuda adicional, incluidos los que tienen necesidades de educacion especial o en programas de intervencion temprana',
      'Colaborar con padres, colegas y especialistas para apoyar el desarrollo integral del estudiante y abordar desafios de comportamiento o aprendizaje',
      'Incorporar educacion literaria, instruccion matematica, educacion fisica y servicios de biblioteca en las lecciones diarias para fomentar un crecimiento integral',
      'Ensenar educacion fisica, alentando a los estudiantes a participar en actividad fisica y comprender la importancia de la salud y el estado fisico',
      'Apoyar a ninos con autismo y otras necesidades especiales a traves de estrategias de instruccion personalizadas y practicas de intervencion temprana',
      'Proporcionar servicios de biblioteca guiando a los estudiantes en habilidades de investigacion y fomentando el amor por la lectura',
      'Participar en oportunidades de desarrollo profesional para mantenerse al dia con las mejores practicas educativas, incluidos los metodos Montessori',
    ],
    reqs:[
      'Certificacion de Ensenanza NJ P-3 REQUERIDA — CE o CEAS aceptable si esta trabajando activamente hacia la certificacion completa',
      'Licenciatura en Educacion, Educacion Temprana, o campo relacionado REQUERIDA',
      'Minimo 1 ano de experiencia en ensenanza requerido',
      'Experiencia comprobada en el salon con ninos en edad escolar primaria en entornos educativos diversos',
      'Solido conocimiento de los principios del desarrollo infantil y metodologias de ensenanza efectivas',
      'Conocimiento de estrategias de manejo del comportamiento y practicas de educacion especial',
      'Familiaridad con el desarrollo curricular, planificacion de lecciones y procedimientos de pruebas estandarizadas',
      'Experiencia con plataformas de tecnologia de aprendizaje y herramientas digitales para instruccion y evaluacion',
      'Capacidad para crear planes de leccion inclusivos que acomoden diversos estilos de aprendizaje',
      'Excelentes habilidades de comunicacion, verbales y escritas, para interactuar efectivamente con estudiantes, padres y personal',
      'Compromiso con un ambiente de aula seguro, enriquecedor y estimulante',
      'Familiaridad con los procesos de administracion educativa es un plus',
      'Debe poder trasladarse o reubicarse en el Municipio de Lawrence, NJ 08648 antes de comenzar',
      'Ingles requerido — Espanol preferido',
    ],
    docsSendTo:'Laura Spelman Preschool Academy, ATTN: Jessica Toro, 540 N Olden Avenue, Trenton, NJ 08638',
    benefits:['Tiempo libre pagado','Asistencia para desarrollo profesional'],
    schedule:'Lunes a viernes — En Persona',
  },
  {
    title:'Maestra de Primaria Jubilada',
    location:'1040 Spruce St',
    type:'Tiempo Completo, Tiempo Parcial, Temporal',
    pay:'$57,922 - $66,651 por ano',
    indeed:'https://www.indeed.com/viewjob?jk=e6dbbc0c5f9a0ad2',
    desc:'La Junta de Educacion de Trenton, Oficina de Primera Infancia, busca una maestra jubilada certificada P-3 (o superior) para unirse a nuestro programa de asociacion en Laura Spelman Preschool Academy. Buscamos maestras jubiladas con pasion por la ensenanza que deseen reincorporarse a la fuerza laboral mientras complementan sus ingresos. Se requiere certificado de ensenanza del Estado de Nueva Jersey. Se ofrecen horarios flexibles y pago competitivo en un ambiente de aula enriquecedor con mucha diversion y compromiso.',
    mandatoryNote:'NO inicie el proceso de solicitud si no tiene TODOS los documentos requeridos listos para cargar.',
    mandatory:[
      'Certificacion de Ensenanza NJ P-3 (Preescolar hasta 3er Grado o superior) — CE o CEAS aceptable si esta trabajando activamente hacia la certificacion completa',
      "Licenciatura en Educacion, Educacion Temprana, o campo relacionado — se requieren transcripciones oficiales de institucion acreditada",
      'Copia de Tarjeta de Seguro Social',
      'Identificacion con foto',
      'Curriculum actualizado',
      'Todos los certificados de ensenanza aplicables: Certificado Estandar P-3, CE o CEAS (si aplica), Certificado de Academia de Director (si aplica), Credencial Nacional de Administrador (si aplica), Certificado ParaPro (si aplica)',
      'Transcripciones oficiales de todos los programas de pregrado, posgrado y pedagogia P-3',
      'Verificacion de Empleo Previo y Actual en Preescolar — cartas originales en papel membretado con fechas exactas, estado de tiempo completo o parcial, y edades de los ninos ensenados',
      'Informacion de Revision de Antecedentes Penales (CHRI)',
      'Informacion de Registro de Abuso Infantil (CARI)',
      'Solicitud con recibo (enviada por los canales correspondientes)',
      'Carta de Autorizacion y Solicitud — Aprobada por DYFS',
    ],
    duties:[
      'Desarrollar e implementar planes de leccion alineados con los Estandares de Aprendizaje Estudiantil de NJ y los requisitos del plan de estudios, atendiendo a las diversas habilidades y estilos de aprendizaje',
      'Implementar tecnicas efectivas de manejo del salon para mantener un ambiente productivo, positivo, respetuoso e inclusivo',
      'Utilizar plataformas de tecnologia educativa y herramientas digitales para mejorar la instruccion y el compromiso estudiantil',
      'Evaluar el progreso de los estudiantes a traves de evaluaciones formativas y sumativas, incluidas pruebas estandarizadas, y ajustar las estrategias en consecuencia',
      'Proporcionar apoyo individualizado y tutoria a los estudiantes que requieren ayuda adicional, incluidos los que tienen necesidades especiales o en programas de intervencion temprana',
      'Colaborar con padres, colegas y especialistas para apoyar el desarrollo integral del estudiante y abordar desafios de comportamiento o aprendizaje',
      'Incorporar educacion literaria, instruccion matematica, educacion fisica y servicios de biblioteca en las lecciones diarias para fomentar un crecimiento integral',
      'Ensenar educacion fisica, alentando a los estudiantes a participar en actividad fisica y comprender la importancia de la salud y el estado fisico',
      'Apoyar a ninos con autismo y otras necesidades especiales a traves de estrategias de instruccion personalizadas y practicas de intervencion temprana',
      'Proporcionar servicios de biblioteca guiando a los estudiantes en habilidades de investigacion y fomentando el amor por la lectura',
      'Participar en oportunidades de desarrollo profesional para mantenerse al dia con las mejores practicas educativas, incluidos los metodos Montessori',
    ],
    reqs:[
      'Certificacion de Ensenanza NJ P-3 REQUERIDA — debe poseer un certificado de ensenanza emitido por el Estado de Nueva Jersey',
      'Licenciatura en Educacion, Educacion Temprana, o campo relacionado REQUERIDA',
      'Minimo 1 ano de experiencia en ensenanza requerido',
      'Experiencia comprobada en el salon con ninos en edad escolar primaria',
      'Solido conocimiento de los principios del desarrollo infantil y metodologias de ensenanza efectivas',
      'Conocimiento de estrategias de manejo del comportamiento y practicas de educacion especial, incluida experiencia con ninos con autismo o en programas de intervencion temprana',
      'Familiaridad con el desarrollo curricular, planificacion de lecciones y procedimientos de pruebas estandarizadas',
      'Experiencia con plataformas de tecnologia de aprendizaje y herramientas digitales para instruccion y evaluacion',
      'Capacidad para crear planes de leccion inclusivos que acomoden diversos estilos de aprendizaje',
      'Excelentes habilidades de comunicacion, verbales y escritas, para interactuar efectivamente con estudiantes, padres y personal',
      'Compromiso con un ambiente de aula seguro, enriquecedor y estimulante',
      'Familiaridad con los procesos de administracion educativa es un plus',
      'Disponibilidad de horario flexible',
      'Debe poder trasladarse o reubicarse en el Municipio de Lawrence, NJ 08648 antes de comenzar',
      'Ingles requerido — Espanol preferido',
    ],
    docsSendTo:'Laura Spelman Preschool Academy, ATTN: Jessica Toro, 540 N Olden Avenue, Trenton, NJ 08638',
    benefits:['Tiempo libre pagado','Asistencia para desarrollo profesional','Horario flexible'],
    schedule:'Flexible — Lunes a viernes — En Persona',
  },
  {
    title:'Asistente de Maestra',
    location:'1040 Spruce St',
    type:'Tiempo Completo',
    pay:'$26,338 - $31,112 por ano',
    desc:'La Junta de Educacion de Trenton, Oficina de Primera Infancia, busca una Asistente de Maestra dedicada y comprometida para unirse al programa de asociacion en Laura Spelman Preschool Academy. Este puesto apoya la educacion de alta calidad en alineacion con las Directrices del NJDOE, los estandares de la Junta de Educacion de Trenton y el marco de la Oficina de Primera Infancia (OOEC). La Asistente trabaja junto a la Maestra Principal para ofrecer un ambiente de aprendizaje estructurado y basado en el juego para ninos de 3 a 5 anos. Este no es un puesto de guarderia privada. Es un rol de apoyo escolar publico con plena responsabilidad ante los estandares educativos de Nueva Jersey.',
    mandatoryNote:'NO inicie el proceso de solicitud si no tiene TODOS los documentos requeridos listos para presentar.',
    mandatory:[
      'Diploma de escuela secundaria o GED (segun N.J.A.C. 6A:13A-4.3)',
      "Credencial CDA preferida o grado asociado en Educacion Temprana o campo relacionado",
      'Copia de Tarjeta de Seguro Social',
      'Identificacion con foto',
      'Curriculum actualizado',
      'Certificacion de Primeros Auxilios y RCP (o disposicion para obtenerla antes de comenzar)',
      'Informacion de Revision de Antecedentes Penales (CHRI)',
      'Informacion de Registro de Abuso Infantil (CARI)',
      'Carta de Autorizacion y Solicitud — Aprobada por DYFS',
      'Verificacion de Empleo Previo y Actual en Preescolar — cartas originales en papel membretado con fechas exactas, estado de tiempo completo o parcial, y edades de los ninos supervisados',
      'Solicitud con recibo (enviada por los canales correspondientes)',
    ],
    duties:[
      'Asistir a la Maestra Principal en la implementacion de planes de leccion diarios alineados con los Estandares de Ensenanza y Aprendizaje Preescolar de NJ y los requisitos del plan de estudios del OOEC',
      'Apoyar la instruccion en grupos pequenos e individualizada para reforzar los objetivos de aprendizaje',
      'Supervisar a los ninos durante actividades, comidas, transiciones y juego al aire libre conforme a los requisitos de licencia del OOEC',
      'Ayudar a mantener un salon seguro, limpio y organizado conforme a todas las regulaciones estatales y federales aplicables',
      'Observar y documentar el comportamiento y desarrollo infantil bajo la direccion de la Maestra Principal',
      'Comunicarse respetuosamente con las familias y servir de enlace entre el hogar y la escuela segun se indique',
      'Asistir con la preparacion de materiales de instruccion, centros de aprendizaje y decoraciones del salon',
      'Apoyar la implementacion de estrategias de comportamiento positivo y actividades de aprendizaje socioemocional',
      'Asistir durante las comidas, periodos de descanso y rutinas diarias de acuerdo con las politicas del programa',
      'Participar en oportunidades de desarrollo profesional y reuniones del personal segun sea requerido',
    ],
    reqs:[
      'Diploma de escuela secundaria o GED requerido (segun N.J.A.C. 6A:13A-4.3)',
      'Credencial CDA preferida',
      "Grado asociado en Educacion Temprana o campo relacionado es un plus",
      'Minimo 1 ano de experiencia trabajando con ninos preescolares preferido',
      'Certificacion de Primeros Auxilios y RCP requerida (o disposicion para obtenerla antes de comenzar)',
      'Debe pasar verificacion de antecedentes de NJ (CARI/CHRI)',
      'Autorizacion DYFS requerida',
      'Conocimiento de los principios del desarrollo infantil y practicas de ensenanza apropiadas para la edad',
      'Capacidad de apoyar estrategias de manejo del comportamiento y aprendizaje socioemocional',
      'Excelentes habilidades de comunicacion, verbales y escritas',
      'Capacidad de seguir planes de leccion y recibir direccion de la Maestra Principal',
      'Compromiso con un ambiente de aula seguro, enriquecedor y estimulante',
      'Bilingual ingles/espanol es un plus',
      'Debe poder trasladarse al Municipio de Lawrence, NJ 08648',
    ],
    docsSendTo:'Laura Spelman Preschool Academy, ATTN: Jessica Toro, 540 N Olden Avenue, Trenton, NJ 08638',
    benefits:['Tiempo libre pagado','Oportunidades de desarrollo profesional','Ambiente de equipo solidario','Camino de crecimiento hacia Maestra Principal'],
    schedule:'Lunes a viernes — En Persona',
  },
];

function JobModal({job,onClose,lang}){
  const emailSubject=encodeURIComponent('Application: '+job.title);
  const emailBody=encodeURIComponent('Hello,\n\nI am applying for the '+job.title+' position at Laura Spelman Preschool Academy.\n\nPlease find my resume and cover letter attached.\n\nThank you for your consideration.');
  return(
    <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:2000,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(5,10,30,0.92)',backdropFilter:'blur(12px)',padding:'0.75rem'}}>
      <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:24,width:'100%',maxWidth:640,maxHeight:'90vh',display:'flex',flexDirection:'column',overflow:'hidden',boxShadow:'0 40px 120px rgba(0,0,0,0.4)'}}>
        <div style={{background:'linear-gradient(135deg,#1B2D5B 0%,#1B4A6B 100%)',padding:'1.5rem 2rem',flexShrink:0,position:'relative'}}>
          <div style={{height:4,background:'linear-gradient(90deg,#F7C948,#F5A623)',borderRadius:99,marginBottom:'1rem'}}/>
          <button onClick={onClose} style={{position:'absolute',top:16,right:16,background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.2)',color:'#fff',borderRadius:'50%',width:34,height:34,fontSize:'1rem',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>X</button>
          <div style={{fontFamily:'Fredoka',fontSize:'1.5rem',fontWeight:700,color:'#fff',marginBottom:6}}>{job.title}</div>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            <span style={{fontFamily:'DM Sans',fontSize:'0.78rem',fontWeight:700,background:'rgba(255,255,255,0.1)',color:'#fff',borderRadius:999,padding:'3px 12px'}}>{job.location}</span>
            <span style={{fontFamily:'DM Sans',fontSize:'0.78rem',fontWeight:700,background:'rgba(75,163,227,0.3)',color:'#7dd3fc',borderRadius:999,padding:'3px 12px'}}>{job.type}</span>
            <span style={{fontFamily:'DM Sans',fontSize:'0.78rem',fontWeight:700,background:'rgba(76,175,80,0.3)',color:'#86efac',borderRadius:999,padding:'3px 12px'}}>$ {job.pay}</span>
          </div>
        </div>
        <div style={{flex:1,overflowY:'auto',padding:'1.5rem 2rem'}}>
          <p style={{fontFamily:'DM Sans',color:'#374151',fontSize:'0.95rem',lineHeight:1.7,marginBottom:'1.25rem'}}>{job.desc}</p>
          {job.mandatory&&(
            <div style={{marginBottom:'1.25rem',background:'#FFF1F1',border:'1px solid #FCA5A5',borderRadius:12,padding:'1rem'}}>
              <div style={{fontFamily:'Fredoka',color:'#991B1B',fontSize:'1.05rem',fontWeight:700,marginBottom:4}}>&#9888; {lang==='es'?'Documentos Obligatorios':'Mandatory Requirements'}</div>
              <div style={{fontFamily:'DM Sans',color:'#991B1B',fontSize:'0.8rem',fontWeight:700,marginBottom:8}}>{job.mandatoryNote}</div>
              <div style={{fontFamily:'DM Sans',color:'#374151',fontSize:'0.82rem',marginBottom:8,fontStyle:'italic'}}>{lang==='es'?'Los documentos requeridos incluyen, entre otros:':'Required documents include, but are not limited to:'}</div>
              {job.mandatory.map((m,i)=>(<div key={i} style={{display:'flex',gap:8,alignItems:'flex-start',fontFamily:'DM Sans',color:'#374151',fontSize:'0.85rem',marginBottom:5}}><span style={{color:'#DC2626',fontWeight:'bold',flexShrink:0}}>&bull;</span>{m}</div>))}
            </div>
          )}
          {job.duties&&(
            <div style={{marginBottom:'1.25rem'}}>
              <div style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1.05rem',fontWeight:700,marginBottom:4}}>{lang==='es'?'Responsabilidades':'Responsibilities'}</div>
              <div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.82rem',marginBottom:8,fontStyle:'italic'}}>{lang==='es'?'Las responsabilidades incluyen, entre otras:':'Responsibilities include, but are not limited to:'}</div>
              {job.duties.map((d,i)=>(<div key={i} style={{display:'flex',gap:8,alignItems:'flex-start',fontFamily:'DM Sans',color:'#374151',fontSize:'0.9rem',marginBottom:5}}><span style={{color:'#F5A623',fontWeight:'bold',flexShrink:0}}>&bull;</span>{d}</div>))}
            </div>
          )}
          <div style={{marginBottom:'1.25rem'}}>
            <div style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1.05rem',fontWeight:700,marginBottom:4}}>{lang==='es'?'Requisitos Esenciales':'Essential Qualifications'}</div>
            <div style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.82rem',marginBottom:8,fontStyle:'italic'}}>{lang==='es'?'Los requisitos incluyen, entre otros:':'Qualifications include, but are not limited to:'}</div>
            {job.reqs.map((r,i)=>(<div key={i} style={{display:'flex',gap:8,alignItems:'flex-start',fontFamily:'DM Sans',color:'#374151',fontSize:'0.9rem',marginBottom:5}}><span style={{color:'#4BA3E3',fontWeight:'bold',flexShrink:0}}>&#10003;</span>{r}</div>))}
          </div>
          {job.benefits&&(
            <div style={{marginBottom:'1.25rem',background:'#F0FFF4',borderRadius:12,padding:'1rem'}}>
              <div style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1.05rem',fontWeight:700,marginBottom:8}}>{lang==='es'?'Beneficios':'Benefits'}</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                {job.benefits.map((b,i)=>(<span key={i} style={{fontFamily:'DM Sans',fontSize:'0.82rem',fontWeight:600,background:'#fff',border:'1px solid #86efac',color:'#166534',borderRadius:999,padding:'3px 12px'}}>&#10003; {b}</span>))}
              </div>
            </div>
          )}
          <div style={{fontFamily:'DM Sans',fontSize:'0.88rem',color:'#6B7280',marginBottom:'1.25rem'}}>
            <strong>{lang==='es'?'Horario':'Schedule'}:</strong> {job.schedule}
          </div>
          {job.docsSendTo&&(
            <div style={{background:'#FFF8E7',border:'1px solid #F5A623',borderRadius:12,padding:'1rem',marginBottom:'0.5rem'}}>
              <div style={{fontFamily:'Fredoka',color:'#1B2D5B',fontSize:'1.05rem',fontWeight:700,marginBottom:6}}>&#9993; {lang==='es'?'Enviar Documentos a':'Submit All Documents To'}</div>
              <div style={{fontFamily:'DM Sans',color:'#374151',fontSize:'0.88rem',lineHeight:1.6,fontWeight:600}}>{job.docsSendTo}</div>
            </div>
          )}
        </div>
        <div style={{padding:'1.25rem 2rem',borderTop:'1px solid #e5e7eb',flexShrink:0,background:'#FAFAFA',display:'flex',flexDirection:'column',gap:10}}>
          {job.indeed&&(
            <a href={job.indeed} target='_blank' rel='noopener noreferrer' style={{display:'block',width:'100%',textAlign:'center',background:'#2164f3',color:'#fff',borderRadius:999,padding:'14px 24px',fontFamily:'Fredoka',fontSize:'1.1rem',fontWeight:700,textDecoration:'none',boxShadow:'0 4px 14px rgba(33,100,243,0.35)'}}>
              &#128269; {lang==='es'?'Aplicar en Indeed':'Apply on Indeed'}
            </a>
          )}
          <a href={`mailto:lauraspelmanacademy@verizon.net?subject=${emailSubject}&body=${emailBody}`} style={{display:'block',width:'100%',textAlign:'center',background:'linear-gradient(to right,#F7C948,#F5A623)',color:'#0F1D3D',borderRadius:999,padding:'14px 24px',fontFamily:'Fredoka',fontSize:'1.1rem',fontWeight:700,textDecoration:'none',boxShadow:'0 4px 14px rgba(247,201,72,0.4)'}}>
            &#128231; {lang==='es'?'Enviar Mi Solicitud':'Apply via Email'}
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
                <div style={{fontFamily:'DM Sans',color:'#4CAF50',fontSize:'0.9rem',fontWeight:700,marginBottom:6}}>$ {job.pay}</div>
                <p style={{fontFamily:'DM Sans',color:'#6B7280',fontSize:'0.9rem',marginBottom:12}}>{job.desc.slice(0,120)}...</p>
                <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(27,45,91,0.06)',borderRadius:999,padding:'5px 14px'}}>
                  <span style={{fontFamily:'DM Sans',fontSize:'0.78rem',fontWeight:700,color:'#1B2D5B'}}>{lang==='es'?'Ver detalles y aplicar':'View Details & Apply'} &#8594;</span>
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
