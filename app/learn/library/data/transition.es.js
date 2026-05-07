// Spanish content for the Kindergarten Transition Mini-Guide.
// Mirror structure of transition.en.js — same section types, same shape, Español neutro.
// Imported by app/learn/library/kindergarten/page.jsx based on lang.

export const TRANSITION_ES = {
  meta: {
    title: 'Guía de Transición al Kindergarten',
    subtitle: 'Para las familias de LSPA que se gradúan al kindergarten',
    intro: 'Un paquete bilingüe imprimible — diseñado para descargar, perforar y conservar.'
  },

  sections: [

    // ============== SECTION 1 — WELCOME ==============
    {
      type: 'welcomeLetter',
      heading: 'Sección 1 — Bienvenida',
      subheading: 'Tu hijo está listo',
      paragraphs: [
        'Querida familia de LSPA,',
        'Si está leyendo esto, su hijo se está preparando para dejar Laura Spelman Preschool Academy e ir al kindergarten. Queremos empezar diciendo algo importante: su hijo está listo.',
        'Durante el año, los dos años o los tres años pasados, hemos visto a su hijo crecer hasta convertirse en alguien que puede sentarse y escuchar, escribir su nombre, contar, hacer preguntas, compartir, recuperarse de las decepciones, e intentar cosas difíciles. Hemos visto a usted crecer junto con él — siendo nuestro aliado, haciendo preguntas, presente. El niño que entra al kindergarten en septiembre es el niño que usted crió, con nuestra ayuda, y está listo.',
        'El kindergarten será diferente al preescolar. Días más largos. Clases más grandes. Más estructura. Caras nuevas. Algunas cosas serán difíciles al principio. La mayoría le sorprenderá por la rapidez con que su hijo se adapta.',
        'Este paquete es suyo para conservar. Le guía por todo lo que necesita hacer entre ahora y el primer día de clases. Es bilingüe. Es práctico. Es una ruta.',
        'No está solo. Aún estamos aquí. Mel, Jessica, Joleen, y el maestro del salón de su hijo están a un correo o una llamada de distancia mucho después de septiembre. Queremos saber cómo fue la primera semana. Queremos ver la foto del primer día.',
        'Gracias por confiar a LSPA los años más importantes de la vida temprana de su hijo. Estamos orgullosos de su familia.',
        'Con cariño,',
        'El Equipo de LSPA'
      ]
    },

    // ============== SECTION 2 — WHAT KINDERGARTEN LOOKS LIKE ==============
    {
      type: 'prose',
      heading: 'Sección 2 — Cómo Es el Kindergarten en NJ',
      paragraphs: []
    },
    {
      type: 'dailySchedule',
      heading: 'Un día típico de kindergarten',
      schedule: [
        { time: '8:00', activity: 'Llegada, desayuno en el salón o en la cafetería, instalarse.' },
        { time: '8:30', activity: 'Reunión matutina. Calendario. Clima. Plan del día.' },
        { time: '9:00', activity: 'Bloque de alfabetización. Letras, sonidos, lectura inicial.' },
        { time: '10:30', activity: 'Merienda y recreo.' },
        { time: '11:00', activity: 'Bloque de matemáticas. Contar, formas, patrones, operaciones simples.' },
        { time: '12:00', activity: 'Almuerzo en la cafetería.' },
        { time: '12:45', activity: 'Tiempo tranquilo o descanso.' },
        { time: '1:15', activity: 'Clases especiales (arte, música, gimnasio, biblioteca — rotan a diario).' },
        { time: '2:00', activity: 'Centros. Actividades prácticas en mesas pequeñas.' },
        { time: '2:45', activity: 'Círculo de cierre, empacar, salida.' },
        { time: '3:00', activity: 'Termina el día.' }
      ],
      footnote: 'Los horarios específicos varían según la escuela. Confirme con el kindergarten cuando se abra la inscripción.'
    },
    {
      type: 'bulletList',
      heading: 'Cómo es diferente el kindergarten de NJ del preescolar',
      items: [
        'Día más largo — la mayoría de los kindergartens de NJ duran 6 a 6.5 horas, frente al día de 4 a 6 horas de LSPA.',
        'Clase más grande — las clases de kindergarten suelen tener 20 a 25 niños con un maestro y (a veces) un asistente.',
        'Menos juego, más aprendizaje estructurado — aunque los buenos kindergartens mantienen el juego en el día.',
        'Cafetería — la mayoría de los kindergartens almuerzan en una cafetería compartida con otros grados.',
        'Clases especiales — los niños rotan a arte, música, gimnasio y biblioteca con diferentes maestros.',
        'Autobús, caminata o vehículo compartido — la mayoría de los kindergartens tienen opciones de autobús que LSPA no tiene.',
        'Evaluación estandarizada — los estudiantes de kindergarten son evaluados varias veces al año en estándares iniciales de lectura y matemáticas.'
      ]
    },
    {
      type: 'prose',
      heading: 'La primera semana',
      paragraphs: [
        'La primera semana será difícil. Eso es normal. Espere: niños cansados al final del día, algunas lágrimas en la mañana, unas despedidas difíciles, mucha información nueva que aún no pueden explicar. Espere que lleguen a casa pidiendo merienda inmediatamente, queriendo tiempo tranquilo, y posiblemente resistiendo la nueva rutina.',
        'Lo que es normal: lágrimas, agotamiento, pedir quedarse en casa, extrañar de repente LSPA más que en junio.',
        'Lo que pasa en dos semanas: la mayoría de eso.',
        'Lo que no pasa y requiere una conversación con el maestro de kindergarten: rechazo persistente a ir, no poder separarse al dejarlo después de la tercera semana, señales de miedo a una persona o lugar específico, una regresión en el uso del baño que dura más de unos días, o un comportamiento que le sorprenda.'
      ]
    },

    // ============== SECTION 3 — READINESS CHECKLIST ==============
    {
      type: 'prose',
      heading: 'Sección 3 — Lista de Preparación para el Kindergarten en NJ',
      paragraphs: [
        'Trabaje en esta lista con su hijo desde ahora hasta septiembre. Marque las habilidades a medida que su hijo las domine. Esta lista corresponde a los mismos dominios en los que su hijo ha sido evaluado en LSPA — los mismos dominios que los maestros de kindergarten van a observar.'
      ]
    },
    {
      type: 'checklist',
      heading: 'Social y Emocional',
      items: [
        { id: 'se-01', text: 'Se separa del cuidador sin desbordarse' },
        { id: 'se-02', text: 'Toma turnos con otros niños' },
        { id: 'se-03', text: 'Usa palabras para expresar sentimientos' },
        { id: 'se-04', text: 'Sigue reglas sencillas del salón' },
        { id: 'se-05', text: 'Se recupera de las decepciones sin desbordarse' },
        { id: 'se-06', text: 'Muestra amabilidad con los demás' }
      ]
    },
    {
      type: 'checklist',
      heading: 'Lenguaje y Alfabetización',
      items: [
        { id: 'll-01', text: 'Reconoce la mayoría de las letras del alfabeto' },
        { id: 'll-02', text: 'Identifica sonidos iniciales en palabras habladas' },
        { id: 'll-03', text: 'Escribe su propio nombre' },
        { id: 'll-04', text: 'Vuelve a contar un cuento familiar' },
        { id: 'll-05', text: 'Habla en oraciones completas' },
        { id: 'll-06', text: 'Escucha un cuento de 10 minutos' }
      ]
    },
    {
      type: 'checklist',
      heading: 'Matemáticas',
      items: [
        { id: 'mt-01', text: 'Cuenta hasta 20' },
        { id: 'mt-02', text: 'Reconoce los números del 0 al 10' },
        { id: 'mt-03', text: 'Identifica formas básicas (círculo, cuadrado, triángulo, rectángulo)' },
        { id: 'mt-04', text: 'Clasifica objetos por color, tamaño o forma' },
        { id: 'mt-05', text: 'Crea patrones AB sencillos' },
        { id: 'mt-06', text: 'Compara cantidades (más / menos / igual)' }
      ]
    },
    {
      type: 'checklist',
      heading: 'Físico y Motor',
      items: [
        { id: 'pm-01', text: 'Sostiene el lápiz correctamente' },
        { id: 'pm-02', text: 'Recorta sobre una línea con tijeras' },
        { id: 'pm-03', text: 'Maneja su propia ropa (cierres, botones, zapatos)' },
        { id: 'pm-04', text: 'Usa el baño solo, incluyendo lavarse las manos' },
        { id: 'pm-05', text: 'Corre, salta y se equilibra con control' },
        { id: 'pm-06', text: 'Atrapa y lanza una pelota' }
      ]
    },
    {
      type: 'checklist',
      heading: 'Enfoques al Aprendizaje',
      items: [
        { id: 'al-01', text: 'Se sienta 15 minutos en una actividad estructurada' },
        { id: 'al-02', text: 'Sigue instrucciones de dos pasos' },
        { id: 'al-03', text: 'Intenta cosas nuevas aun cuando no está seguro' },
        { id: 'al-04', text: 'Persiste cuando algo es frustrante' },
        { id: 'al-05', text: 'Hace preguntas' },
        { id: 'al-06', text: 'Muestra curiosidad por el mundo' }
      ]
    },

    // ============== SECTION 4 — TIMELINE ==============
    {
      type: 'prose',
      heading: 'Sección 4 — Cronograma Familiar Mes a Mes',
      paragraphs: [
        'De mayo a septiembre, esto es lo que debe hacer cada mes para que su hijo llegue al kindergarten preparado y con confianza.'
      ]
    },
    {
      type: 'timeline',
      months: [
        {
          name: 'Mayo',
          items: [
            'Visiten juntos el sitio web del kindergarten. Muéstrele a su hijo el edificio, el patio, todo lo que encuentre.',
            'Empiece la lista de preparación. Identifique 1 o 2 áreas donde su hijo necesite más crecimiento.',
            'Lean juntos esta carta de bienvenida. Pídale a su hijo que nombre tres cosas que va a extrañar de LSPA y tres cosas que le emocionan del kindergarten.',
            'Programe una conversación de transición con el maestro de su hijo este mes.'
          ]
        },
        {
          name: 'Junio',
          items: [
            'Compren juntos la lista de útiles del kindergarten. Deje que su hijo cargue un objeto a casa.',
            'Practiquen escribir el nombre todos los días hasta que sea automático.',
            'Pasen por el edificio de la nueva escuela una vez a la semana.',
            'Celebren la graduación de LSPA. Tomen fotos. Guarden el regalo de fin de año.',
            'Lean juntos un libro ilustrado sobre el kindergarten.'
          ]
        },
        {
          name: 'Julio',
          items: [
            'Ajuste la hora de dormir gradualmente — más temprano por 15 minutos a la semana desde mediados de julio.',
            'Practiquen la rutina del baño y la ropa de manera independiente.',
            'Empiecen la práctica de la rutina matutina: vestirse, comer, empacar, salir a una hora específica.',
            'Practiquen recortar, sostener el lápiz y escribir el nombre varias veces a la semana.',
            'Si la familia es bilingüe, hablen de que el kindergarten usará inglés la mayor parte del día. Tranquilícelo: el idioma del hogar se queda en el hogar.'
          ]
        },
        {
          name: 'Agosto',
          items: [
            'Asistan a la orientación del kindergarten y conozcan al maestro. Lleve una o dos preguntas.',
            'Caminen la ruta hacia la parada de autobús o la puerta de la escuela juntos. Practíquenla dos veces.',
            'Empaquen la mochila la noche antes del primer día.',
            'Preparen la ropa del primer día la noche anterior.',
            'Compren o etiqueten todos los útiles del kindergarten. Escriban el nombre de su hijo en todo.'
          ]
        },
        {
          name: 'Septiembre — Primera Semana',
          items: [
            'Tomen la foto del primer día. LSPA les invita a compartirla con nosotros.',
            'Entren con calma y confianza. Su hijo refleja la energía de usted.',
            'Déjelo, un abrazo, váyase. Las despedidas largas lo hacen más difícil. Confíe en el maestro.',
            'Después de la escuela, pregunte: "¿Cuál fue la mejor parte?" en lugar de "¿Cómo te fue?" La primera pregunta saca una respuesta real.',
            'Mantenga la hora de dormir temprano como no negociable las primeras dos semanas.',
            'Mantenga el contacto con LSPA. Mel, Jessica y Joleen quieren noticias.'
          ]
        }
      ]
    },

    // ============== SECTION 5 — HOW TO TALK TO YOUR CHILD ==============
    {
      type: 'prose',
      heading: 'Sección 5 — Cómo Hablar con Su Hijo Sobre el Cambio',
      paragraphs: []
    },
    {
      type: 'scripts',
      heading: 'Cosas comunes que dirá su hijo',
      items: [
        {
          theyMightSay: '"No me quiero ir de LSPA."',
          youCanSay: 'Lo sé. Amas a tus maestros y a tus amigos. Iremos a visitar. Y el kindergarten te traerá maestros nuevos y amigos nuevos también. Ambas cosas pueden ser ciertas.'
        },
        {
          theyMightSay: '"¿Y si no hago amigos?"',
          youCanSay: 'Haces amigos aquí. Harás amigos allá. Puede tomar unos días. Eso está bien. El trabajo del maestro es ayudarte a encontrar a tu gente.'
        },
        {
          theyMightSay: '"¿Y si mi nuevo maestro es malo?"',
          youCanSay: 'Tu maestro de kindergarten escogió este trabajo porque ama trabajar con niños. Si algo no se siente bien, me dices. Lo resolvemos juntos.'
        },
        {
          theyMightSay: '"¿Y si te extraño?"',
          youCanSay: 'Sí me vas a extrañar. Yo también te voy a extrañar. Y el día va a pasar más rápido de lo que piensas. Cuando llegues a casa, yo voy a estar aquí, y nos contamos cómo nos fue.'
        }
      ]
    },
    {
      type: 'prose',
      heading: 'Marco para la conversación calmante',
      paragraphs: [
        'Cuando su hijo se ponga ansioso sobre el kindergarten en los meses antes de septiembre, aquí hay una conversación de cuatro partes que casi siempre ayuda:',
        '1. Nombre lo que está sintiendo. "Estás preocupado por el kindergarten. Tiene sentido."',
        '2. Valide el sentimiento. "Es un cambio grande. Preocupado es un sentimiento normal ante los cambios grandes."',
        '3. Reformule con la verdad. "Has estado preparándote todo el año. Tus maestros dicen que estás listo. Yo te veo listo."',
        '4. Ofrezca una acción pequeña. "Vamos a empacar tu peluche favorito en la mochila para el primer día. Lo puedes guardar en tu cubículo."',
        'Usado pronto y a menudo, este marco de conversación ayuda a su hijo a pasar de la ansiedad a la acción. Repítalo. Las variaciones están bien. Las cuatro partes son lo que funciona.'
      ]
    },

    // ============== SECTION 6 — RESOURCES ==============
    {
      type: 'resources',
      heading: 'Sección 6 — Recursos y Contactos',
      groups: [
        {
          title: 'Escuelas Públicas de Trenton',
          items: [
            'Inscripción al Kindergarten: trenton.k12.nj.us — busque "kindergarten registration."',
            'Número principal de las Escuelas Públicas de Trenton: (609) 656-4900.',
            'Oficina de Educación Temprana en TBOE: contáctela a través del número principal.'
          ]
        },
        {
          title: 'Contacto de LSPA para Preguntas de Transición',
          items: [
            'Melody Crawford-Cannon, Directora Ejecutiva.',
            'Jessica Toro, Directora del Campus Olden.',
            'Joleen Rhoden, Directora del Campus Spruce.',
            'Correo electrónico y números de teléfono disponibles en lspalearn.org.'
          ]
        },
        {
          title: 'Recursos Estatales y Gratuitos',
          items: [
            'Recursos Familiares del Departamento de Educación de NJ: nj.gov/education.',
            'NJ 211 — línea gratuita de ayuda para cualquier necesidad familiar: marque 211.',
            'Biblioteca Pública Gratuita de Trenton: tarjetas gratis, programa de lectura de verano.',
            'Sistema de Bibliotecas del Condado de Mercer: sucursales por todo el condado.',
            'Examen físico pediátrico para kindergarten: programe con el pediatra ahora si aún no lo ha hecho.'
          ]
        }
      ]
    },

    // ============== SECTION 7 — TEACHER NOTE ==============
    {
      type: 'prose',
      heading: 'Sección 7 — Una Nota del Maestro de Su Hijo',
      paragraphs: [
        'Esta página es para que el maestro del salón de LSPA de su hijo escriba una nota personal. Puede compartir una fortaleza, un recuerdo, o un deseo para el kindergarten. Guarde esta página. Muchas familias la enmarcan.',
        '_______________________________________________',
        '_______________________________________________',
        '_______________________________________________',
        '_______________________________________________',
        '_______________________________________________',
        '_______________________________________________',
        '_______________________________________________',
        'Firma: _________________________________',
        'Fecha: _________________________________'
      ]
    },

    // ============== CLOSING ==============
    {
      type: 'closingPage',
      heading: 'Bienvenido al kindergarten.',
      subheading: 'Usted y su hijo pueden con esto.',
      signoff: '— El Equipo de LSPA —'
    }

  ]
};
