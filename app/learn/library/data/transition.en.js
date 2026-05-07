// English content for the Kindergarten Transition Mini-Guide.
// Imported by app/learn/library/kindergarten/page.jsx
// Spanish content lives in transition.es.js — same structure, mirrored.
//
// Each section has a `type` field that controls how the page component renders it.
// Section types used: welcomeLetter, prose, dailySchedule, bulletList,
// checklist, timeline, scripts, resources, closingPage.

export const TRANSITION_EN = {
  meta: {
    title: 'Kindergarten Transition Mini-Guide',
    subtitle: 'For LSPA families graduating to kindergarten',
    intro: 'A printable, bilingual packet — designed to be downloaded, three-hole-punched, and kept.'
  },

  sections: [

    // ============== SECTION 1 — WELCOME ==============
    {
      type: 'welcomeLetter',
      heading: 'Section 1 — Welcome',
      subheading: 'Your child is ready',
      paragraphs: [
        'Dear LSPA family,',
        'If you are reading this, your child is preparing to leave Laura Spelman Preschool Academy for kindergarten. We want to start by saying something important: your child is ready.',
        'Over the past one, two, or three years, we have watched your child grow into someone who can sit and listen, write their name, count, ask questions, share, recover from disappointment, and try things that are hard. We have watched you grow alongside them — partnering with us, asking questions, showing up. The child who walks into kindergarten in September is the child you raised, with help from us, and they are ready.',
        'Kindergarten will be different than preschool. Longer days. Bigger class. More structure. New faces. Some of it will be hard at first. Most of it will surprise you with how quickly your child adjusts.',
        'This packet is yours to keep. It walks you through everything you need to do between now and the first day of school. It is bilingual. It is practical. It is a roadmap.',
        'You are not alone. We are still here. Mel, Jessica, Joleen, and your child\'s classroom teacher are an email or phone call away long after September. We want to know how the first week went. We want to see the first-day photo.',
        'Thank you for trusting LSPA with the most important years of your child\'s early life. We are proud of your family.',
        'With love,',
        'The LSPA Team'
      ]
    },

    // ============== SECTION 2 — WHAT KINDERGARTEN LOOKS LIKE ==============
    {
      type: 'prose',
      heading: 'Section 2 — What Kindergarten Looks Like in NJ',
      paragraphs: []
    },
    {
      type: 'dailySchedule',
      heading: 'A typical kindergarten day',
      schedule: [
        { time: '8:00', activity: 'Arrival, breakfast in the classroom or cafeteria, settle in.' },
        { time: '8:30', activity: 'Morning meeting. Calendar. Weather. The day\'s plan.' },
        { time: '9:00', activity: 'Literacy block. Letters, sounds, beginning reading.' },
        { time: '10:30', activity: 'Snack and recess.' },
        { time: '11:00', activity: 'Math block. Counting, shapes, patterns, simple operations.' },
        { time: '12:00', activity: 'Lunch in the cafeteria.' },
        { time: '12:45', activity: 'Quiet time or rest.' },
        { time: '1:15', activity: 'Specials (art, music, gym, library — rotates daily).' },
        { time: '2:00', activity: 'Centers. Hands-on activities at small tables.' },
        { time: '2:45', activity: 'Closing circle, pack up, dismissal.' },
        { time: '3:00', activity: 'Day ends.' }
      ],
      footnote: 'Specific times vary by school. Confirm with the kindergarten when registration opens.'
    },
    {
      type: 'bulletList',
      heading: 'How NJ kindergarten differs from preschool',
      items: [
        'Longer day — most NJ kindergartens run 6 to 6.5 hours, vs. LSPA\'s 4 to 6 hour day.',
        'Larger class — kindergarten classes typically have 20 to 25 children with one teacher and (sometimes) one aide.',
        'Less play, more structured learning — though good kindergartens keep play in the day.',
        'Cafeteria — most kindergartens eat lunch in a shared cafeteria with other grades.',
        'Specials — children rotate to art, music, gym, and library taught by different teachers.',
        'Bus, walking, or carpool — most kindergartens have busing options that LSPA does not.',
        'Standardized assessment — kindergarten students are assessed several times a year on early reading and math benchmarks.'
      ]
    },
    {
      type: 'prose',
      heading: 'The first week',
      paragraphs: [
        'The first week will be hard. That is normal. Expect: tired children at the end of the day, some tears in the morning, a few rough drop-offs, lots of new information they cannot yet explain. Expect them to come home and ask for snacks immediately, want quiet time, and possibly resist the new routine.',
        'What is normal: tears, exhaustion, asking to stay home, suddenly missing LSPA more than they did in June.',
        'What passes within two weeks: most of it.',
        'What does not pass and warrants a conversation with the kindergarten teacher: persistent refusal to go, inability to separate at drop-off after week three, signs of fear about a specific person or place, a regression in toileting that lasts more than a few days, or behavior that surprises you.'
      ]
    },

    // ============== SECTION 3 — READINESS CHECKLIST ==============
    {
      type: 'prose',
      heading: 'Section 3 — NJ Kindergarten Readiness Checklist',
      paragraphs: [
        'Work through this checklist with your child between now and September. Mark off skills as your child masters them. This checklist maps to the same domains your child has been assessed on at LSPA — the same domains kindergarten teachers will look for.'
      ]
    },
    {
      type: 'checklist',
      heading: 'Social and Emotional',
      items: [
        { id: 'se-01', text: 'Separates from caregiver without falling apart' },
        { id: 'se-02', text: 'Takes turns with other children' },
        { id: 'se-03', text: 'Uses words to express feelings' },
        { id: 'se-04', text: 'Follows simple class rules' },
        { id: 'se-05', text: 'Recovers from disappointment without melting down' },
        { id: 'se-06', text: 'Shows kindness to others' }
      ]
    },
    {
      type: 'checklist',
      heading: 'Language and Literacy',
      items: [
        { id: 'll-01', text: 'Recognizes most letters of the alphabet' },
        { id: 'll-02', text: 'Identifies beginning sounds in spoken words' },
        { id: 'll-03', text: 'Writes own first name' },
        { id: 'll-04', text: 'Retells a familiar story' },
        { id: 'll-05', text: 'Speaks in complete sentences' },
        { id: 'll-06', text: 'Listens to a 10-minute story' }
      ]
    },
    {
      type: 'checklist',
      heading: 'Mathematics',
      items: [
        { id: 'mt-01', text: 'Counts to 20' },
        { id: 'mt-02', text: 'Recognizes numerals 0 through 10' },
        { id: 'mt-03', text: 'Identifies basic shapes (circle, square, triangle, rectangle)' },
        { id: 'mt-04', text: 'Sorts objects by color, size, or shape' },
        { id: 'mt-05', text: 'Creates simple AB patterns' },
        { id: 'mt-06', text: 'Compares quantities (more / less / same)' }
      ]
    },
    {
      type: 'checklist',
      heading: 'Physical and Motor',
      items: [
        { id: 'pm-01', text: 'Holds a pencil correctly' },
        { id: 'pm-02', text: 'Cuts along a line with scissors' },
        { id: 'pm-03', text: 'Manages own clothing (zippers, buttons, shoes)' },
        { id: 'pm-04', text: 'Uses bathroom independently, including hand-washing' },
        { id: 'pm-05', text: 'Runs, jumps, and balances with control' },
        { id: 'pm-06', text: 'Catches and throws a ball' }
      ]
    },
    {
      type: 'checklist',
      heading: 'Approaches to Learning',
      items: [
        { id: 'al-01', text: 'Sits for 15 minutes during a structured activity' },
        { id: 'al-02', text: 'Follows two-step directions' },
        { id: 'al-03', text: 'Tries new things even when uncertain' },
        { id: 'al-04', text: 'Persists when something is frustrating' },
        { id: 'al-05', text: 'Asks questions' },
        { id: 'al-06', text: 'Shows curiosity about the world' }
      ]
    },

    // ============== SECTION 4 — TIMELINE ==============
    {
      type: 'prose',
      heading: 'Section 4 — Month-by-Month Family Timeline',
      paragraphs: [
        'From May to September, here is what to do each month to help your child arrive at kindergarten ready and confident.'
      ]
    },
    {
      type: 'timeline',
      months: [
        {
          name: 'May',
          items: [
            'Visit the kindergarten website together. Show your child the building, the playground, anything you can find.',
            'Begin the readiness checklist. Identify 1 or 2 areas where your child needs the most growth.',
            'Read this welcome letter together. Let your child name three things they will miss about LSPA and three things they are excited about for kindergarten.',
            'Schedule a transition conversation with your child\'s LSPA teacher this month.'
          ]
        },
        {
          name: 'June',
          items: [
            'Buy the kindergarten supply list together. Let your child carry one item home.',
            'Practice writing the first name daily until it is automatic.',
            'Drive past the new school building once a week.',
            'Celebrate the LSPA graduation. Take photos. Save the year-end gift.',
            'Read a kindergarten-themed picture book together.'
          ]
        },
        {
          name: 'July',
          items: [
            'Adjust bedtime gradually — earlier by 15 minutes per week starting mid-July.',
            'Practice independent bathroom and clothing routines.',
            'Start morning routine practice: dress, eat, pack, leave by a target time.',
            'Practice cutting, pencil grip, and name writing several times a week.',
            'If the family is bilingual, talk about how kindergarten will use English most of the day. Reassure that home language stays at home.'
          ]
        },
        {
          name: 'August',
          items: [
            'Attend the kindergarten orientation and meet the teacher. Bring a question or two.',
            'Walk the route to the bus stop or the school door together. Practice it twice.',
            'Pack the backpack the night before the first day.',
            'Lay out the first-day clothes the night before.',
            'Buy or label all kindergarten supplies. Write your child\'s name on everything.'
          ]
        },
        {
          name: 'September — First Week',
          items: [
            'Take the first-day photo. LSPA welcomes you to send it to us.',
            'Walk in calm and confident. Your child mirrors your energy.',
            'Drop off, hug, leave. Long goodbyes make it harder. Trust the teacher.',
            'After school, ask: "What was the best part?" rather than "How was your day?" The first question gets a real answer.',
            'Keep early bedtime non-negotiable for the first two weeks.',
            'Stay in touch with LSPA. Mel, Jessica, and Joleen want updates.'
          ]
        }
      ]
    },

    // ============== SECTION 5 — HOW TO TALK TO YOUR CHILD ==============
    {
      type: 'prose',
      heading: 'Section 5 — How to Talk to Your Child About the Change',
      paragraphs: []
    },
    {
      type: 'scripts',
      heading: 'Common things your child will say',
      items: [
        {
          theyMightSay: '"I do not want to leave LSPA."',
          youCanSay: 'I know. You love your teachers and your friends. We will visit. And kindergarten is going to bring you new teachers and new friends too. Both can be true.'
        },
        {
          theyMightSay: '"What if I don\'t make friends?"',
          youCanSay: 'You make friends here. You will make friends there. It might take a few days. That is okay. The teacher\'s job is to help you find your people.'
        },
        {
          theyMightSay: '"What if my new teacher is mean?"',
          youCanSay: 'Your kindergarten teacher chose this job because they love working with children. If something does not feel right, you tell me. We figure it out together.'
        },
        {
          theyMightSay: '"What if I miss you?"',
          youCanSay: 'You will. I will miss you too. And the day will go faster than you think. When you get home, I will be here, and we can tell each other about our days.'
        }
      ]
    },
    {
      type: 'prose',
      heading: 'The calm-down conversation framework',
      paragraphs: [
        'When your child gets anxious about kindergarten in the months leading up to September, here is a four-part conversation that almost always helps:',
        '1. Name what they are feeling. "You are feeling worried about kindergarten. That makes sense."',
        '2. Validate the feeling. "It is a big change. Worried is a normal feeling about big changes."',
        '3. Reframe with truth. "You have been preparing all year. Your teachers say you are ready. I see you ready."',
        '4. Offer a small action. "Let\'s pack your favorite stuffed animal in your backpack for the first day. You can keep it in your cubby."',
        'Used early and often, this conversation framework helps your child move from anxiety to action. Repeat it. Variations are fine. The four parts are what work.'
      ]
    },

    // ============== SECTION 6 — RESOURCES ==============
    {
      type: 'resources',
      heading: 'Section 6 — Resources & Contacts',
      groups: [
        {
          title: 'Trenton Public Schools',
          items: [
            'Kindergarten Registration: trenton.k12.nj.us — search "kindergarten registration."',
            'Trenton Public Schools main number: (609) 656-4900.',
            'Office of Early Childhood at TBOE: contact through the main number.'
          ]
        },
        {
          title: 'LSPA Contact for Transition Questions',
          items: [
            'Melody Crawford-Cannon, Executive Director.',
            'Jessica Toro, Director, Olden Campus.',
            'Joleen Rhoden, Director, Spruce Campus.',
            'Email and phone numbers available through lspalearn.org.'
          ]
        },
        {
          title: 'State and Free Resources',
          items: [
            'NJ Department of Education Family Resources: nj.gov/education.',
            'NJ 211 — free help line for any family need: dial 211.',
            'Trenton Free Public Library: free library cards, summer reading program.',
            'Mercer County Library System: branches across the county.',
            'Pediatric well-child kindergarten physical: schedule with your child\'s pediatrician now if not done.'
          ]
        }
      ]
    },

    // ============== SECTION 7 — TEACHER NOTE ==============
    {
      type: 'prose',
      heading: 'Section 7 — A Note from Your Child\'s Teacher',
      paragraphs: [
        'This page is for your child\'s LSPA classroom teacher to write a personal note. They might share a strength, a memory, or a hope for kindergarten. Keep this page. Many families frame it.',
        '_______________________________________________',
        '_______________________________________________',
        '_______________________________________________',
        '_______________________________________________',
        '_______________________________________________',
        '_______________________________________________',
        '_______________________________________________',
        'Signed: _________________________________',
        'Date: _________________________________'
      ]
    },

    // ============== CLOSING ==============
    {
      type: 'closingPage',
      heading: 'Welcome to kindergarten.',
      subheading: 'You and your child have got this.',
      signoff: '— The LSPA Team —'
    }

  ]
};
