/**
 * 번역 — 모든 문구를 여기서 수정하세요.
 * 한국어(ko, 기본), English(en), Español(es).
 *
 * ⚠️ WORKFLOW: When you change any Korean (ko) text, update the same key
 * in English (en) and Spanish (es) so all three languages stay in sync.
 * Keys are shared (e.g. hero.headline, about.practitioner.bio).
 */

export const translations = {
  ko: {
    brand: { name: '本 본 한의원' },
    nav: {
      about: '소개',
      services: '진료 안내',
      conditions: '진료 과목',
      reviews: '후기',
      faq: '자주 묻는 질문',
      contact: '연락처',
    },
    hero: {
      headline: '몸의 균형을 되찾는 근본 치료',
      subline: '정성과 과학이 만나는 本 본 한의원',
      intro: '통증만 잠시 없애는 치료가 아닌, 몸의 원인을 찾고 회복을 돕는 맞춤 한의학 치료를 제공합니다.',
      bookVisit: '방문 예약',
      call: '전화',
    },
    about: {
      title: '소개',
      approachIntro: '한 분 한 분의 증상과 체질을 정밀하게 분석하여 침, 부항, 뜸, 한약, 근골격 치료를 통합적으로 진행합니다.',
      approachIntro2: '편안한 공간, 철저한 위생 관리, 그리고 숙련된 의료진의 섬세한 진료로 당신의 건강한 일상을 함께 만들어갑니다.',
      philosophyTitle: '진료 철학',
      philosophyBody: '本 본 한의원은 단순한 증상 완화가 아닌 근본 원인 개선을 목표로 합니다.',
      philosophyBody2: '현대적인 진단 방식과 전통 한의학을 결합하여 통증, 만성 질환, 스트레스성 질환, 체형 불균형까지 개인별 맞춤 치료 계획을 수립합니다.',
      practitioner: {
        name: 'Dr. Alex Lee',
        title: '한의사 & 한방약 전문의',
        bio: '10년 이상 한의학 경력을 바탕으로, 침술·부항·한방약을 통해 통증, 스트레스, 만성 질환 완화를 돕고 있습니다. 몸과 마음을 함께 보는 holistic 접근에 힘쓰고 있습니다.',
      },
      aboutImageAlt: '한방 재료와 전통 한의학',
    },
    services: {
      title: '진료 안내',
      subtitle: '건강과 편안함을 위한 다양한 치료를 제공합니다.',
      items: [
        {
          title: '침술',
          description: '멸균된 가는 침을 경락과 경혈에 배치하여 균형을 되찾고, 통증을 줄이며, 자연 치유력을 돕습니다.',
          icon: 'needle',
        },
        {
          title: '부항',
          description: '흡입 컵으로 순환을 촉진하고, 근육 긴장을 풀며, 호흡·소화에도 도움을 줍니다.',
          icon: 'cup',
        },
        {
          title: '뜸',
          description: '쑥을 이용한 온열을 경혈에 가해 기운을 보하고 만성 증상을 다스립니다.',
          icon: 'moxa',
        },
        {
          title: '한방약',
          description: '침술과 함께 맞춤 한방 처방으로 몸 안의 불균형을 다스리고 장기적 웰니스를 도와드립니다.',
          icon: 'herbs',
        },
      ],
    },
    conditions: {
      title: '주요 진료 분야',
      intro: '침술과 한의학은 다양한 증상에 도움이 됩니다. 주요 진료 분야는 다음과 같습니다.',
      list: [
        '침술',
        '전통 한방약',
        '뜸',
        '통증 관리',
        '교통사고 / 업무 손상 치료',
        '전기 자극 치료',
        '온열 척추 치료',
      ],
      notSure: '침술이 맞는지 잘 모르시겠다면, 전화로 상담해 드립니다.',
      expectTitle: '방문 시 참고',
      expectBody: '첫 방문에는 상담과 진찰이 포함됩니다. 건강 이력과 목표를 나눈 뒤 치료 계획을 세웁니다. 첫 회기는 보통 60–75분, 이후 회기는 45–60분 정도입니다. 침은 매우 가늘어 대부분 편안하게 느끼십니다.',
      cta: '첫 방문 예약하기',
    },
    recommended: {
      title: '이런 분들께 추천드립니다',
      items: [
        '병원 치료에도 호전이 없는 만성 통증',
        '반복되는 근육 긴장과 피로',
        '원인을 알 수 없는 몸의 불균형',
        '자연스럽고 부작용 적은 치료를 원하시는 분',
      ],
    },
    closing: {
      line1: '당신의 몸은 이미 회복할 준비가 되어 있습니다.',
      line2: '本 본 한의원이 그 여정을 함께 하겠습니다.',
      cta: '예약 상담하기',
    },
    testimonials: {
      title: '환자 후기',
      subtitle: '함께한 분들의 생생한 이야기입니다.',
      items: [
        {
          quote: 'Dr. Lee와 팀분들이 차분하고 따뜻한 분위기를 만들어 주셨어요. 몇 번 받고 나서 몇 년간의 다른 치료보다 등 통증이 훨씬 나아졌습니다.',
          author: 'Michael R.',
          location: 'Los Angeles',
        },
        {
          quote: '스트레스와 수면 문제로 왔는데, 침술과 한방 조언이 맞물려 일상에 큰 차이가 났어요.',
          author: 'Jennifer L.',
          location: 'Culver City',
        },
        {
          quote: '전문적이고, 정확하고, 정말로 챙겨 주십니다. 효과 좋은 holistic 치료를 찾는 분들께 本 본 한의원을 추천합니다.',
          author: 'David K.',
          location: 'Koreatown',
        },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      subtitle: '침술과 본원에 대한 자주 묻는 질문입니다.',
      items: [
        {
          q: '첫 방문 시 어떤가요?',
          a: '건강 이력과 목표를 이야기한 뒤 간단한 진찰을 합니다. 첫 회기에는 침술이 포함되며 보통 60–75분, 이후 회기는 45–60분 정도입니다.',
        },
        {
          q: '침 맞을 때 아픈가요?',
          a: '대부분 거의 아프지 않습니다. 살짝 찌릿하거나 둔한 느낌, 저릿함이 있을 수 있습니다. 침은 주사나 채혈 바늘보다 훨씬 가늘어요.',
        },
        {
          q: '몇 번 받아야 하나요?',
          a: '증상에 따라 다릅니다. 급성은 몇 번으로 나아질 수 있고, 만성은 더 오래 받을 수 있습니다. 첫 방문 후 계획을 제안해 드립니다.',
        },
        {
          q: '보험 적용이 되나요?',
          a: '제출용 영수증(수퍼빌)을 드립니다. 보험사의 침술 보장 여부는 한번 확인해 보시고, 문의해 주시면 안내해 드립니다.',
        },
      ],
    },
    contact: {
      title: '연락처 & 오시는 길',
      subtitle: '코리아타운에서 만나요. 지도를 스크롤하거나 핀치하여 확대할 수 있습니다.',
      addressLabel: '주소',
      getDirections: '길찾기',
      hoursLabel: '영업 시간',
      reachOut: '연락하기',
      reachOutHint: 'Yelp · 이메일 · ',
      mapZoom: '스크롤 또는 핀치로 확대',
      openInGoogle: 'Google 지도에서 열기',
    },
    footer: {
      copyright: '© {year} {name}. 저작권 법에 따라 모든 권리를 보유합니다.',
    },
    hours: [
      { days: '월요일 – 금요일', time: '9:00 AM – 6:00 PM' },
      { days: '토요일', time: '9:00 AM – 2:00 PM' },
      { days: '일요일', time: '휴업' },
    ],
    aria: {
      toggleMenu: '메뉴 열기/닫기',
      yelp: 'Yelp에서 찾기',
      email: '이메일',
      call: '전화',
    },
  },

  en: {
    brand: { name: 'Bon Acupuncture' },
    nav: {
      about: 'About',
      services: 'Services',
      conditions: 'What We Treat',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      headline: 'Root-level care that restores your body’s balance',
      subline: 'Bon Acupuncture — where care meets science',
      intro: 'Not just temporary pain relief: we find the cause and support lasting recovery with personalized Korean medicine.',
      bookVisit: 'Book a visit',
      call: 'Call',
    },
    about: {
      title: 'About Us',
      approachIntro: "We carefully assess each person's symptoms and constitution, then provide integrated care with acupuncture, cupping, moxibustion, herbal medicine, and musculoskeletal treatment.",
      approachIntro2: "A calm space, strict hygiene, and experienced, attentive care—we're here to help you build a healthier everyday life.",
      philosophyTitle: 'Our approach',
      philosophyBody: 'Bon Acupuncture aims to address the root cause, not only ease symptoms.',
      philosophyBody2: 'By combining modern diagnostic methods with traditional Korean medicine, we create individualized treatment plans for pain, chronic conditions, stress-related disorders, and postural imbalance.',
      practitioner: {
        name: 'Dr. Alex Lee',
        title: 'Licensed Acupuncturist & Herbalist',
        bio: 'With over 10 years of experience in Traditional Chinese Medicine, Dr. Lee helps patients find relief from pain, stress, and chronic conditions through acupuncture, cupping, and herbal medicine. He is dedicated to a whole-person approach to wellness.',
      },
      aboutImageAlt: 'Herbs and traditional Chinese medicine',
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer a range of treatments to support your health and comfort.',
      items: [
        {
          title: 'Acupuncture',
          description: 'Fine, sterilized needles are placed at strategic points to restore balance, reduce pain, and support your body’s natural healing.',
          icon: 'needle',
        },
        {
          title: 'Cupping',
          description: 'Suction cups promote circulation, release muscle tension, and help with respiratory and digestive issues.',
          icon: 'cup',
        },
        {
          title: 'Moxibustion',
          description: 'Warm, gentle heat from mugwort is applied to acupuncture points to boost energy and support chronic conditions.',
          icon: 'moxa',
        },
        {
          title: 'Chinese Herbal Medicine',
          description: 'Custom herbal formulas complement acupuncture to address internal imbalances and support long-term wellness.',
          icon: 'herbs',
        },
      ],
    },
    conditions: {
      title: 'Main treatment areas',
      intro: 'Acupuncture and Korean medicine can support a wide range of conditions. Our main areas include:',
      list: [
        'Acupuncture',
        'Traditional Herbal Medicine',
        'Moxibustion',
        'Pain Management',
        'Auto Accident / Work Injury Care',
        'Electrical Stimulation Therapy',
        'Thermal Spinal Therapy',
      ],
      notSure: 'Not sure if acupuncture is right for you? Give us a call—we’re happy to discuss your concerns.',
      expectTitle: 'What to expect',
      expectBody: 'Your first visit includes a consultation and exam. We’ll talk through your health history and goals, then create a treatment plan. Most initial sessions run 60–75 minutes; follow-ups are typically 45–60 minutes. Needles are very thin and most people find treatment relaxing.',
      cta: 'Book your first visit',
    },
    recommended: {
      title: 'We recommend us if you have',
      items: [
        'Chronic pain that hasn’t improved with other care',
        'Recurring muscle tension and fatigue',
        'Unexplained imbalance in your body',
        'A preference for gentle, low-side-effect treatment',
      ],
    },
    closing: {
      line1: 'Your body is already ready to heal.',
      line2: 'Bon Acupuncture will walk that path with you.',
      cta: 'Book a consultation',
    },
    testimonials: {
      title: 'What Patients Say',
      subtitle: 'Real feedback from people we’ve had the privilege to work with.',
      items: [
        {
          quote: 'Dr. Lee and his team created a calm, welcoming space. After a few sessions, my chronic back pain improved more than years of other treatments.',
          author: 'Michael R.',
          location: 'Los Angeles',
        },
        {
          quote: 'I came in for stress and sleep issues. The acupuncture, combined with herbal recommendations, has made a real difference in my day-to-day life.',
          author: 'Jennifer L.',
          location: 'Culver City',
        },
        {
          quote: 'Professional, knowledgeable, and genuinely caring. I recommend Bon Acupuncture to anyone looking for effective, holistic care.',
          author: 'David K.',
          location: 'Koreatown',
        },
      ],
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Common questions about acupuncture and our practice.',
      items: [
        {
          q: 'What should I expect on my first visit?',
          a: 'We’ll discuss your health history and goals, then perform a brief exam. Your first session may include acupuncture and often runs 60–75 minutes. Follow-ups are typically 45–60 minutes.',
        },
        {
          q: 'Does acupuncture hurt?',
          a: 'Most people feel little to no pain. You may notice a slight pinch, dull ache, or tingling. Needles are very thin—much finer than those used for shots or blood draws.',
        },
        {
          q: 'How many sessions will I need?',
          a: 'It depends on your condition. Acute issues may improve in a few visits; chronic concerns often need a longer course. We’ll recommend a plan after your first visit.',
        },
        {
          q: 'Do you accept insurance?',
          a: 'We can provide a superbill for you to submit to your insurer. Contact us to confirm your plan’s coverage for acupuncture.',
        },
      ],
    },
    contact: {
      title: 'Contact & Location',
      subtitle: 'Visit us in Koreatown. Scroll or pinch to zoom the map.',
      addressLabel: 'Address',
      getDirections: 'Get directions',
      hoursLabel: 'Hours',
      reachOut: 'Reach out',
      reachOutHint: 'Yelp · Email · ',
      mapZoom: 'Scroll or pinch to zoom',
      openInGoogle: 'Open in Google Maps',
    },
    footer: {
      copyright: '© {year} {name}. All rights reserved.',
    },
    hours: [
      { days: 'Mon – Fri', time: '9:00 AM – 6:00 PM' },
      { days: 'Sat', time: '9:00 AM – 2:00 PM' },
      { days: 'Sun', time: 'Closed' },
    ],
    aria: {
      toggleMenu: 'Toggle menu',
      yelp: 'Find us on Yelp',
      email: 'Email',
      call: 'Call',
    },
  },

  es: {
    brand: { name: 'Bon Acupuncture' },
    nav: {
      about: 'Nosotros',
      services: 'Servicios',
      conditions: 'Qué tratamos',
      reviews: 'Opiniones',
      faq: 'Preguntas',
      contact: 'Contacto',
    },
    hero: {
      headline: 'Tratamiento de raíz que recupera el equilibrio de tu cuerpo',
      subline: 'Bon Acupuncture — donde el cuidado se encuentra con la ciencia',
      intro: 'No solo alivio temporal: buscamos la causa y apoyamos la recuperación con medicina coreana personalizada.',
      bookVisit: 'Reservar visita',
      call: 'Llamar',
    },
    about: {
      title: 'Nosotros',
      approachIntro: 'Analizamos con precisión los síntomas y la constitución de cada persona y ofrecemos un tratamiento integral con acupuntura, ventosaterapia, moxibustión, fitoterapia y terapia musculoesquelética.',
      approachIntro2: 'Un espacio tranquilo, higiene rigurosa y un equipo experto y atento—para acompañarte hacia una vida más saludable.',
      philosophyTitle: 'Nuestra filosofía',
      philosophyBody: 'Bon Acupuncture busca mejorar la causa de fondo, no solo aliviar los síntomas.',
      philosophyBody2: 'Combinando métodos diagnósticos modernos y medicina tradicional coreana, elaboramos planes personalizados para dolor, afecciones crónicas, trastornos por estrés y desequilibrios posturales.',
      practitioner: {
        name: 'Dr. Alex Lee',
        title: 'Acupunturista y herbolaria licenciada',
        bio: 'Con más de 10 años de experiencia en Medicina Tradicional China, el Dr. Lee ayuda a sus pacientes a aliviar el dolor, el estrés y afecciones crónicas mediante acupuntura, ventosaterapia y fitoterapia. Se dedica a un enfoque integral del bienestar.',
      },
      aboutImageAlt: 'Hierbas y medicina tradicional china',
    },
    services: {
      title: 'Nuestros servicios',
      subtitle: 'Ofrecemos distintos tratamientos para tu salud y bienestar.',
      items: [
        {
          title: 'Acupuntura',
          description: 'Se insertan agujas finas y estériles en puntos estratégicos para restaurar el equilibrio, reducir el dolor y favorecer la curación natural.',
          icon: 'needle',
        },
        {
          title: 'Ventosaterapia',
          description: 'Las ventosas mejoran la circulación, liberan la tensión muscular y ayudan en problemas respiratorios y digestivos.',
          icon: 'cup',
        },
        {
          title: 'Moxibustión',
          description: 'Se aplica calor suave de artemisa en puntos de acupuntura para estimular la energía y tratar afecciones crónicas.',
          icon: 'moxa',
        },
        {
          title: 'Fitoterapia china',
          description: 'Fórmulas herbales a medida que complementan la acupuntura para tratar desequilibrios internos y un bienestar a largo plazo.',
          icon: 'herbs',
        },
      ],
    },
    conditions: {
      title: 'Principales áreas de tratamiento',
      intro: 'La acupuntura y la medicina coreana pueden ayudar en muchas afecciones. Principales áreas:',
      list: [
        'Acupuntura',
        'Medicina herbal tradicional',
        'Moxibustión',
        'Manejo del dolor',
        'Accidentes de auto / lesiones laborales',
        'Terapia de estimulación eléctrica',
        'Terapia térmica espinal',
      ],
      notSure: '¿No sabe si la acupuntura le conviene? Llámenos y le orientamos.',
      expectTitle: 'Qué esperar',
      expectBody: 'La primera visita incluye consulta y exploración. Repasamos tu historial y objetivos y diseñamos un plan. La primera sesión suele durar 60–75 minutos; las siguientes, 45–60. Las agujas son muy finas y la mayoría se relaja.',
      cta: 'Reservar primera visita',
    },
    recommended: {
      title: 'Le recomendamos visitarnos si tiene',
      items: [
        'Dolor crónico que no ha mejorado con otros tratamientos',
        'Tensión muscular y fatiga recurrentes',
        'Desequilibrios en el cuerpo sin causa clara',
        'Preferencia por un tratamiento suave y con pocos efectos secundarios',
      ],
    },
    closing: {
      line1: 'Su cuerpo ya está listo para recuperarse.',
      line2: 'Bon Acupuncture le acompañará en ese camino.',
      cta: 'Reservar consulta',
    },
    testimonials: {
      title: 'Lo que dicen los pacientes',
      subtitle: 'Comentarios reales de personas con las que hemos tenido el privilegio de trabajar.',
      items: [
        {
          quote: 'El Dr. Lee y su equipo crean un ambiente tranquilo y acogedor. Tras unas sesiones, mi dolor de espalda crónico mejoró más que con años de otros tratamientos.',
          author: 'Michael R.',
          location: 'Los Ángeles',
        },
        {
          quote: 'Vine por estrés y problemas de sueño. La acupuntura y las recomendaciones herbales han cambiado realmente mi día a día.',
          author: 'Jennifer L.',
          location: 'Culver City',
        },
        {
          quote: 'Profesionales, expertos y con una atención genuina. Recomiendo Bon Acupuncture a quien busque un cuidado holístico y efectivo.',
          author: 'David K.',
          location: 'Koreatown',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle: 'Preguntas habituales sobre acupuntura y nuestra práctica.',
      items: [
        {
          q: '¿Qué debo esperar en la primera visita?',
          a: 'Hablamos de tu historial y objetivos y hacemos una exploración breve. La primera sesión suele incluir acupuntura y dura 60–75 minutos. Las siguientes, 45–60 minutos.',
        },
        {
          q: '¿Duele la acupuntura?',
          a: 'La mayoría siente poco o ningún dolor. Puede notar un leve pinchazo, presión o hormigueo. Las agujas son muy finas, más que las de inyecciones o análisis.',
        },
        {
          q: '¿Cuántas sesiones necesitaré?',
          a: 'Depende de tu caso. Problemas agudos pueden mejorar en pocas visitas; los crónicos suelen requerir más. Te proponemos un plan tras la primera visita.',
        },
        {
          q: '¿Aceptan seguro?',
          a: 'Podemos darte una factura (superbill) para presentar a tu aseguradora. Contáctanos para confirmar si tu plan cubre acupuntura.',
        },
      ],
    },
    contact: {
      title: 'Contacto y ubicación',
      subtitle: 'Visítanos en Koreatown. Desplázate o usa el pinch para zoom en el mapa.',
      addressLabel: 'Dirección',
      getDirections: 'Cómo llegar',
      hoursLabel: 'Horario',
      reachOut: 'Contáctanos',
      reachOutHint: 'Yelp · Email · ',
      mapZoom: 'Desplázate o usa pinch para zoom',
      openInGoogle: 'Abrir en Google Maps',
    },
    footer: {
      copyright: '© {year} {name}. Todos los derechos reservados.',
    },
    hours: [
      { days: 'Lun – Vie', time: '9:00 – 18:00' },
      { days: 'Sáb', time: '9:00 – 14:00' },
      { days: 'Dom', time: 'Cerrado' },
    ],
    aria: {
      toggleMenu: 'Abrir/cerrar menú',
      yelp: 'Encuéntranos en Yelp',
      email: 'Email',
      call: 'Llamar',
    },
  },
}
