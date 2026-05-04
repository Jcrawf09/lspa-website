// Lightweight metadata for the 16 activities.
// Drives filtering, search, and routing — loaded on every library page.
// Heavy bilingual content lives in app/learn/library/data/ (Batch 2).

export const ACTIVITY_INDEX = [
  // -------- Ages 3-4 --------
  {
    slug: 'letter-hunt-at-home',
    age: 'p',
    domain: 'literacy',
    time: '10',
    titleEn: 'Letter Hunt at Home',
    titleEs: 'Búsqueda de Letras en Casa',
    blurbEn: 'Find letters from your child\'s name on cereal boxes, mail, and signs around the house.',
    blurbEs: 'Encuentren letras del nombre de su hijo en cajas de cereal, correo y letreros por la casa.',
    nj: 'NJ PTLS 3.1.5',
    ecers: 'ECERS-3 Item 16',
    tsGold: 'TS GOLD Obj. 16'
  },
  {
    slug: 'story-picture-walk',
    age: 'p',
    domain: 'literacy',
    time: '10',
    titleEn: 'Story Picture Walk',
    titleEs: 'Recorrido por las Imágenes del Cuento',
    blurbEn: 'Talk through the pictures of any book before reading the words. Builds narrative skill.',
    blurbEs: 'Conversen sobre las imágenes de cualquier libro antes de leer las palabras. Desarrolla la habilidad narrativa.',
    nj: 'NJ PTLS 3.4.4',
    ecers: 'ECERS-3 Item 18',
    tsGold: 'TS GOLD Obj. 18'
  },
  {
    slug: 'snack-time-counting',
    age: 'p',
    domain: 'numeracy',
    time: '5',
    titleEn: 'Snack Time Counting',
    titleEs: 'A Contar a la Hora de la Merienda',
    blurbEn: 'Counting practice built into the daily routine. Five minutes, no setup.',
    blurbEs: 'Práctica de contar incorporada a la rutina diaria. Cinco minutos, sin preparación.',
    nj: 'NJ PTLS 4.1.2',
    ecers: 'ECERS-3 Item 25',
    tsGold: 'TS GOLD Obj. 20'
  },
  {
    slug: 'feelings-mirror',
    age: 'p',
    domain: 'socialEmotional',
    time: '5',
    titleEn: 'Feelings Mirror',
    titleEs: 'El Espejo de los Sentimientos',
    blurbEn: 'Name a feeling, make the face, your child copies. Builds emotional vocabulary.',
    blurbEs: 'Nombre un sentimiento, haga la cara, su hijo la copia. Desarrolla el vocabulario emocional.',
    nj: 'NJ PTLS 0.3.1',
    ecers: 'ECERS-3 Item 31',
    tsGold: 'TS GOLD Obj. 2'
  },
  {
    slug: 'helper-of-the-day',
    age: 'p',
    domain: 'socialEmotional',
    time: 'daily',
    titleEn: 'Helper of the Day',
    titleEs: 'Ayudante del Día',
    blurbEn: 'One small daily job that builds responsibility and belonging.',
    blurbEs: 'Una tarea pequeña diaria que desarrolla la responsabilidad y el sentido de pertenencia.',
    nj: 'NJ PTLS 0.5.2',
    ecers: 'ECERS-3 Item 32',
    tsGold: 'TS GOLD Obj. 1'
  },
  {
    slug: 'indoor-obstacle-path',
    age: 'p',
    domain: 'motor',
    time: '15',
    titleEn: 'Indoor Obstacle Path',
    titleEs: 'Pista de Obstáculos en Casa',
    blurbEn: 'Crawl, balance, hop. Gross motor coordination using pillows and chairs.',
    blurbEs: 'Gatear, equilibrarse, brincar. Coordinación motora gruesa con almohadas y sillas.',
    nj: 'NJ PTLS 2.2.1',
    ecers: 'ECERS-3 Item 22',
    tsGold: 'TS GOLD Obj. 4'
  },
  {
    slug: 'my-family-portrait',
    age: 'p',
    domain: 'creative',
    time: '15',
    titleEn: 'My Family Portrait',
    titleEs: 'Retrato de Mi Familia',
    blurbEn: 'Your child draws everyone in the family — pets included. Builds fine motor and identity.',
    blurbEs: 'Su hijo dibuja a toda la familia — incluyendo a las mascotas. Desarrolla motor fino e identidad.',
    nj: 'NJ PTLS 1.4.1',
    ecers: 'ECERS-3 Item 20',
    tsGold: 'TS GOLD Obj. 33'
  },
  {
    slug: 'sink-or-float',
    age: 'p',
    domain: 'science',
    time: '15',
    titleEn: 'Sink or Float?',
    titleEs: '¿Se Hunde o Flota?',
    blurbEn: 'Predict, test, observe. Real scientific inquiry at age four.',
    blurbEs: 'Predecir, probar, observar. Indagación científica real a los cuatro años.',
    nj: 'NJ PTLS 5.1.1',
    ecers: 'ECERS-3 Item 27',
    tsGold: 'TS GOLD Obj. 24'
  },

  // -------- Ages 5-6 (Pre-K & Kindergarten Transition) --------
  {
    slug: 'my-name-in-big-letters',
    age: 'k',
    domain: 'literacy',
    time: '10',
    titleEn: 'My Name in Big Letters',
    titleEs: 'Mi Nombre en Letras Grandes',
    blurbEn: 'Trace, then write your child\'s first name independently. Direct kindergarten readiness.',
    blurbEs: 'Tracen y luego escriban el nombre de su hijo de manera independiente. Preparación directa para el kindergarten.',
    nj: 'NJSLS L.K.1.a',
    ecers: 'ECERS-3 Item 17',
    tsGold: 'TS GOLD Obj. 19'
  },
  {
    slug: 'beginning-sound-sort',
    age: 'k',
    domain: 'literacy',
    time: '15',
    titleEn: 'Beginning Sound Sort',
    titleEs: 'Clasificación por Sonido Inicial',
    blurbEn: 'Sort household objects by their starting sound. Strongest predictor of early reading.',
    blurbEs: 'Clasifiquen objetos de la casa por su sonido inicial. El predictor más fuerte de la lectura temprana.',
    nj: 'NJSLS RF.K.2.d',
    ecers: 'ECERS-3 Item 16',
    tsGold: 'TS GOLD Obj. 15'
  },
  {
    slug: 'number-hunt-to-20',
    age: 'k',
    domain: 'numeracy',
    time: '10',
    titleEn: 'Number Hunt to 20',
    titleEs: 'Búsqueda de Números hasta el 20',
    blurbEn: 'Find numbers 1 to 20 in everyday print. Kindergarten benchmark for numeral recognition.',
    blurbEs: 'Encuentren los números del 1 al 20 en textos cotidianos. Estándar de kindergarten para el reconocimiento de números.',
    nj: 'NJSLS K.CC.A.3',
    ecers: 'ECERS-3 Item 25',
    tsGold: 'TS GOLD Obj. 20'
  },
  {
    slug: 'pattern-maker',
    age: 'k',
    domain: 'numeracy',
    time: '10',
    titleEn: 'Pattern Maker',
    titleEs: 'Creador de Patrones',
    blurbEn: 'Recognize, copy, extend, and create AB and ABC patterns. Foundation for math and reading.',
    blurbEs: 'Reconocer, copiar, extender y crear patrones AB y ABC. Base para matemáticas y lectura.',
    nj: 'NJSLS K.OA.A',
    ecers: 'ECERS-3 Item 26',
    tsGold: 'TS GOLD Obj. 23'
  },
  {
    slug: 'big-feelings-toolkit',
    age: 'k',
    domain: 'socialEmotional',
    time: '15',
    titleEn: 'My Big Feelings Toolkit',
    titleEs: 'Mi Caja de Herramientas para los Sentimientos Grandes',
    blurbEn: 'Three calming strategies your child can use when feelings get big. Self-regulation skill.',
    blurbEs: 'Tres estrategias para calmarse cuando los sentimientos se ponen grandes. Habilidad de autorregulación.',
    nj: 'NJSLS Health 2.1.2.EH.1',
    ecers: 'ECERS-3 Item 31',
    tsGold: 'TS GOLD Obj. 1'
  },
  {
    slug: 'cutting-lines-and-curves',
    age: 'k',
    domain: 'motor',
    time: '15',
    titleEn: 'Cutting Lines & Curves',
    titleEs: 'Recortando Líneas y Curvas',
    blurbEn: 'Scissor practice on straight, zigzag, and curved lines. Fine motor strength.',
    blurbEs: 'Práctica de tijeras en líneas rectas, en zigzag y curvas. Fuerza motora fina.',
    nj: 'NJSLS Health 2.2.2.PF.3',
    ecers: 'ECERS-3 Item 19',
    tsGold: 'TS GOLD Obj. 7'
  },
  {
    slug: 'my-story-book',
    age: 'k',
    domain: 'creative',
    time: '20',
    titleEn: 'My Story Book',
    titleEs: 'Mi Libro de Cuentos',
    blurbEn: 'A four-page book your child writes and illustrates. Beginning, middle, end.',
    blurbEs: 'Un libro de cuatro páginas que su hijo escribe e ilustra. Principio, medio y final.',
    nj: 'NJSLS W.K.3',
    ecers: 'ECERS-3 Item 20',
    tsGold: 'TS GOLD Obj. 19'
  },
  {
    slug: 'plant-a-seed',
    age: 'k',
    domain: 'science',
    time: 'multi',
    titleEn: 'Plant a Seed',
    titleEs: 'Sembrar una Semilla',
    blurbEn: 'Plant, observe, draw, and record over two weeks. Real life-science inquiry.',
    blurbEs: 'Sembrar, observar, dibujar y registrar durante dos semanas. Indagación científica real.',
    nj: 'NJSLS K-LS1-1',
    ecers: 'ECERS-3 Item 27',
    tsGold: 'TS GOLD Obj. 24'
  }
];

// ---------- Lookup helpers ----------

export function findActivity(slug) {
  return ACTIVITY_INDEX.find(function (a) { return a.slug === slug; }) || null;
}

export function activitiesByAge(age) {
  if (!age || age === 'all') return ACTIVITY_INDEX;
  return ACTIVITY_INDEX.filter(function (a) { return a.age === age; });
}

export function filterActivities(opts) {
  const age    = opts && opts.age;
  const domain = opts && opts.domain;
  const time   = opts && opts.time;
  const lang   = (opts && opts.lang) || 'en';
  const q      = ((opts && opts.query) || '').trim().toLowerCase();

  return ACTIVITY_INDEX.filter(function (a) {
    if (age    && age    !== 'all' && a.age    !== age)    return false;
    if (domain && domain !== 'all' && a.domain !== domain) return false;
    if (time   && time   !== 'all' && a.time   !== time)   return false;
    if (q) {
      const title = (lang === 'es' ? a.titleEs : a.titleEn).toLowerCase();
      const blurb = (lang === 'es' ? a.blurbEs : a.blurbEn).toLowerCase();
      if (title.indexOf(q) === -1 && blurb.indexOf(q) === -1 && a.slug.indexOf(q) === -1) return false;
    }
    return true;
  });
}

export function getDomains() {
  return ['literacy', 'numeracy', 'socialEmotional', 'motor', 'creative', 'science'];
}

export function getAges() {
  return ['p', 'k'];
}

export function getTimes() {
  return ['5', '10', '15', '20', 'daily', 'multi'];
}
