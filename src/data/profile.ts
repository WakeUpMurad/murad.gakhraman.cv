export type Locale = 'en' | 'ru'

export type WorkCase = {
  id: string
  category: string
  title: string
  summary: string
  outcome: string
  outcomeLabel: string
  stack: string[]
  contributions: string[]
  featured?: boolean
}

type Experience = {
  company: string
  role: string
  period: string
  summary: string
  contributions: string[]
  detailsLabel?: string
}

type Contact = {
  label: string
  value: string
  href: string
}

export type ProfileContent = {
  metadata: { title: string; description: string }
  ui: {
    skip: string
    brand: string
    work: string
    experience: string
    stack: string
    contact: string
    language: string
    navigation: string
    talk: string
    download: string
    contribution: string
    backToTop: string
    resume: string
  }
  hero: {
    eyebrow: string
    firstName: string
    lastName: string
    promise: string
    intro: string
    location: string
    availability: string
    currentLabel: string
    currentCompany: string
    currentRole: string
    portraitAlt: string
  }
  stats: { value: string; label: string; detail: string }[]
  work: { eyebrow: string; title: string; intro: string; cases: WorkCase[] }
  experience: { eyebrow: string; title: string; intro: string; jobs: Experience[] }
  stack: {
    eyebrow: string
    title: string
    intro: string
    groups: { title: string; skills: string[]; description: string }[]
  }
  education: {
    title: string
    items: { institution: string; qualification: string; href?: string; linkLabel?: string }[]
  }
  learning: {
    title: string
    intro: string
    projects: { title: string; stack: string; href: string; linkLabel: string }[]
  }
  contact: { eyebrow: string; title: string; body: string; availability: string; links: Contact[] }
  footer: string
}

const contactLinks = {
  email: 'mailto:my_pad@mail.ru',
  telegram: 'https://t.me/murad_savage',
  linkedin: 'https://www.linkedin.com/in/murad-gakhramanov/',
  github: 'https://github.com/WakeUpMurad',
  phone: 'tel:+79534215577',
}

export const emailHref = contactLinks.email

export const profile: Record<Locale, ProfileContent> = {
  en: {
    metadata: {
      title: 'Murad Gakhramanov — Frontend Developer & Tech Lead',
      description:
        'Frontend developer and cluster tech lead in Baku. 5+ years of frontend development experience, React and TypeScript, production fintech products, architecture, code review and mentoring.',
    },
    ui: {
      skip: 'Skip to content',
      brand: 'frontend engineer',
      work: 'Selected work',
      experience: 'Experience',
      stack: 'Stack',
      contact: 'Contact',
      language: 'Choose language',
      navigation: 'Main navigation',
      talk: 'Let’s talk',
      download: 'Download CV',
      contribution: 'My contribution',
      backToTop: 'Back to top',
      resume: 'CV · PDF',
    },
    hero: {
      eyebrow: 'FRONTEND DEVELOPER · TECH LEAD',
      firstName: 'Murad',
      lastName: 'Gakhramanov',
      promise: 'I build reliable products. And help teams build them better.',
      intro:
        '5+ years in frontend development. I lead a team of four and build fintech products with React and TypeScript.',
      location: 'Baku, Azerbaijan',
      availability: 'Open to full-time opportunities',
      currentLabel: 'CURRENTLY AT',
      currentCompany: 'RSHB-Intech',
      currentRole: 'Hands-on frontend lead · Team of 4',
      portraitAlt: 'Portrait of Murad Gakhramanov',
    },
    stats: [
      { value: '5+', label: 'years of frontend development experience', detail: 'React · TypeScript · product delivery' },
      { value: '>5', label: 'insurance products launched', detail: 'In the insurance service I develop' },
      { value: '1.5', label: 'months for the initial insurance frontend', detail: 'Implemented from scratch' },
    ],
    work: {
      eyebrow: '01 / SELECTED WORK',
      title: 'Built for real business.',
      intro:
        'Selected contributions to production banking and service products. Commercial code is private; these cases describe my responsibilities and results.',
      cases: [
        {
          id: 'insurance',
          category: 'FINTECH · PRODUCT OWNERSHIP',
          title: 'Insurance platform',
          summary:
            'Built the initial frontend from scratch in 1.5 months and continued owning its development through production launch. More than 5 insurance products have now been launched through the service. I also contributed to the travel insurance launch.',
          outcome: '>5',
          outcomeLabel: 'insurance products launched',
          stack: ['React', 'TypeScript', 'Zustand', 'TanStack Query'],
          contributions: [
            'Implemented the frontend to corporate UI library standards and created a reusable Layout component as an architectural foundation.',
            'Modernized state management and server data handling with Zustand and React Query; the service was among the first in the company to adopt them.',
            'Contributed to the implementation and launch of the travel insurance product while continuing hands-on frontend ownership.',
            'Worked through requirements, business logic and task decomposition, and helped verify releases when analyst or QA support was unavailable.',
          ],
          featured: true,
        },
        {
          id: 'appointments',
          category: 'SERVICE PLATFORM · REUSABLE UI',
          title: 'Appointment scheduling',
          summary:
            'Implemented more than half of the frontend functionality and built a custom FullCalendar wrapper to support business-specific scheduling scenarios.',
          outcome: '50%+',
          outcomeLabel: 'of functionality implemented',
          stack: ['React', 'TypeScript', 'FullCalendar'],
          contributions: [
            'Implemented more than 50% of the service’s functionality.',
            'Created a custom wrapper around FullCalendar to adapt scheduling behavior to business requirements.',
            'Designed the solution for extension and reuse across other products.',
          ],
        },
        {
          id: 'crm',
          category: 'BUSINESS TOOLS · CODE QUALITY',
          title: 'Finance & business CRM',
          summary:
            'Delivered more than half of the “Own Finance” CRM functionality and improved rendering and API interactions. In “Own Business”, refactored legacy code to make it easier to maintain.',
          outcome: '50%+',
          outcomeLabel: 'of the finance CRM implemented',
          stack: ['React', 'TypeScript', 'Redux Toolkit'],
          contributions: [
            'Implemented more than 50% of the “Own Finance” CRM functionality.',
            'Optimized component rendering and interactions with the API.',
            'Refactored legacy “Own Business” code, removed duplicated logic and improved TypeScript typing.',
          ],
        },
        {
          id: 'partners',
          category: 'PARTNER SERVICES · ARCHITECTURE',
          title: 'Partner programs',
          summary:
            'Rewrote the service frontend from scratch, introducing an updated architecture and consistent development standards that made new features easier to add.',
          outcome: 'Full rewrite',
          outcomeLabel: 'a new frontend foundation',
          stack: ['React', 'TypeScript', 'Reusable UI'],
          contributions: [
            'Rebuilt the frontend from scratch instead of extending accumulated legacy code.',
            'Introduced an updated architecture and shared development standards.',
            'Reduced the time needed to implement new features through a more maintainable foundation.',
          ],
        },
        {
          id: 'builders',
          category: 'SELF-EMPLOYED SERVICES · PRODUCT UI',
          title: 'Website builders',
          summary:
            'Built more than half of a website builder for self-employed users, including templates and section editing. Contributed social profile integration to a separate Vue / Nuxt builder.',
          outcome: '50%+',
          outcomeLabel: 'of the self-employed builder implemented',
          stack: ['React', 'TypeScript', 'Vue 3', 'Nuxt'],
          contributions: [
            'Implemented template management and section editing as part of more than 50% of the self-employed builder’s functionality.',
            'Delivered responsive interfaces for different device sizes.',
            'Integrated social profiles and improved the linking experience in the Vue / Nuxt “Svoe Rodnoe” builder.',
          ],
        },
        {
          id: 'loyalty',
          category: 'LOYALTY · DATA LOADING',
          title: 'Loyalty storefronts',
          summary:
            'Added user geolocation support and improved data loading to reduce unnecessary requests in loyalty storefronts.',
          outcome: 'Fewer requests',
          outcomeLabel: 'more focused data loading',
          stack: ['React', 'TypeScript', 'Geolocation'],
          contributions: [
            'Implemented support for user geolocation.',
            'Optimized data loading to minimize the number of API requests.',
          ],
        },
      ],
    },
    experience: {
      eyebrow: '02 / EXPERIENCE',
      title: 'Hands-on. With a wider view.',
      intro:
        'I combine product development with technical leadership: reviewing code, supporting colleagues and keeping frontend decisions consistent across the cluster.',
      jobs: [
        {
          company: 'RSHB-Intech',
          role: 'Frontend Developer · Cluster Frontend Tech Lead',
          period: 'Aug 2024 — present',
          summary: 'Segment services and additional products cluster',
          contributions: [
            'Lead a frontend team of four within the cluster.',
            'Own frontend development of the insurance service and support frontend quality across the cluster.',
            'Review code, mentor developers and help resolve difficult technical problems across products.',
            'Contribute to architecture and development approaches while staying actively involved in implementation.',
            'Help clarify requirements, decompose tasks and verify functionality when analyst or QA support is unavailable.',
          ],
        },
        {
          company: 'Sberbank',
          role: 'Frontend Developer',
          period: 'Feb 2022 — May 2024',
          summary: 'Placement Management Center',
          contributions: [
            'Developed user interfaces and reusable UI components with React, Redux and TypeScript.',
            'Worked in product sprints, documented functionality in Confluence and collaborated with the product owner.',
            'Participated in testing the Parus system and training its users.',
          ],
        },
        {
          company: 'Sberbank',
          role: 'Earlier banking & operations experience',
          period: 'Mar 2014 — Apr 2023',
          summary: 'Technical support, operational coordination and task ownership',
          detailsLabel: 'Earlier roles and dates',
          contributions: [
            'Expert · Dec 2019 — Apr 2023: coordinated self-service device placement, monitored business plans and prepared reporting.',
            'Chief Engineer · May 2016 — Dec 2019: managed software access incidents and supported internal bank users.',
            'Lead Specialist · Mar 2014 — May 2016: worked with reference data, distributed team tasks and monitored their completion.',
          ],
        },
      ],
    },
    stack: {
      eyebrow: '03 / TOOLKIT',
      title: 'The tools behind the work.',
      intro: 'A focused frontend stack, grounded in the products I have built and maintained.',
      groups: [
        { title: 'Core development', skills: ['React', 'TypeScript', 'JavaScript'], description: 'Typed, maintainable interfaces and reusable components.' },
        { title: 'State & server data', skills: ['Zustand', 'TanStack Query', 'Redux Toolkit'], description: 'Clear separation of client state and server data.' },
        { title: 'Interfaces & delivery', skills: ['HTML', 'CSS', 'Responsive UI', 'Git'], description: 'Corporate UI standards, adaptable layouts and code review.' },
        { title: 'Beyond React', skills: ['Vue 3', 'Nuxt', 'FullCalendar'], description: 'Website builders, social integrations and custom scheduling UI.' },
        { title: 'Engineering practice', skills: ['Code review', 'Mentoring', 'AI-assisted development'], description: 'I use AI in day-to-day development and review the resulting code for quality and maintainability.' },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          institution: 'TOP IT Academy (formerly STEP), Tula',
          qualification: 'Full-Stack Web Development',
          href: 'https://drive.google.com/file/d/1Xf6RQyi25BG1F7R2sudLCbQT3dgZXSyN/view',
          linkLabel: 'View diploma',
        },
        { institution: 'Tula State University', qualification: 'Economics and Management in Mechanical Engineering' },
      ],
    },
    learning: {
      title: 'Personal learning projects',
      intro: 'Earlier practice projects, kept separate from my commercial work.',
      projects: [
        { title: 'Events App', stack: 'React · TypeScript', href: 'https://github.com/WakeUpMurad/ulbi-tv-react-js-pro', linkLabel: 'Source code' },
        { title: 'Crypto Exchanger', stack: 'Vue 3', href: 'https://github.com/WakeUpMurad/vue-crypto-exchanger', linkLabel: 'Source code' },
        { title: 'Book Library', stack: 'React · Redux', href: 'https://wakeupmurad.github.io/book-library-app_react_redux/', linkLabel: 'Live demo' },
      ],
    },
    contact: {
      eyebrow: '04 / GET IN TOUCH',
      title: 'Let’s build something that matters.',
      body: 'Looking for a frontend engineer who can own a product and help a team move forward? I’d be glad to hear about your team.',
      availability: 'Baku, Azerbaijan · Full-time · On-site, hybrid or remote',
      links: [
        { label: 'Email', value: 'my_pad@mail.ru', href: contactLinks.email },
        { label: 'Telegram', value: '@murad_savage', href: contactLinks.telegram },
        { label: 'LinkedIn', value: 'murad-gakhramanov', href: contactLinks.linkedin },
        { label: 'GitHub', value: 'WakeUpMurad', href: contactLinks.github },
        { label: 'Phone', value: '+7 953 421-55-77', href: contactLinks.phone },
      ],
    },
    footer: 'Murad Gakhramanov · Frontend Developer & Tech Lead',
  },
  ru: {
    metadata: {
      title: 'Мурад Гахраманов — Frontend-разработчик и техлид',
      description:
        'Frontend-разработчик и техлид кластера в Баку. 5+ лет опыта во frontend: React и TypeScript, финтех-продукты, архитектура, код-ревью и менторство.',
    },
    ui: {
      skip: 'Перейти к содержимому',
      brand: 'frontend-разработчик',
      work: 'Проекты',
      experience: 'Опыт',
      stack: 'Стек',
      contact: 'Контакты',
      language: 'Выбрать язык',
      navigation: 'Основная навигация',
      talk: 'Связаться',
      download: 'Скачать резюме',
      contribution: 'Мой вклад',
      backToTop: 'Наверх',
      resume: 'Резюме · PDF',
    },
    hero: {
      eyebrow: 'FRONTEND-РАЗРАБОТЧИК · ТЕХЛИД',
      firstName: 'Мурад',
      lastName: 'Гахраманов',
      promise: 'Создаю надёжные продукты. И помогаю командам делать их лучше.',
      intro:
        '5+ лет во frontend. Веду команду из 4 разработчиков и создаю финтех-продукты на React и TypeScript.',
      location: 'Баку, Азербайджан',
      availability: 'Открыт к предложениям на полную занятость',
      currentLabel: 'СЕЙЧАС В',
      currentCompany: 'РСХБ-Интех',
      currentRole: 'Разработка и руководство фронтенд-командой из 4 человек',
      portraitAlt: 'Портрет Мурада Гахраманова',
    },
    stats: [
      { value: '5+', label: 'лет опыта во frontend', detail: 'React · TypeScript · продуктовая разработка' },
      { value: '>5', label: 'страховых продуктов запущено', detail: 'В сервисе, фронтенд которого я развиваю' },
      { value: '1,5', label: 'месяца на первую реализацию фронтенда «Страховок»', detail: 'Разработка с нуля' },
    ],
    work: {
      eyebrow: '01 / ПРОЕКТЫ',
      title: 'Решения для реальных задач.',
      intro:
        'Мой вклад в банковские продукты и сервисы, работающие в промышленной эксплуатации. Коммерческий код закрыт; здесь описаны моя ответственность и результаты.',
      cases: [
        {
          id: 'insurance',
          category: 'ФИНТЕХ · ОТВЕТСТВЕННОСТЬ ЗА ПРОДУКТ',
          title: 'Страховки',
          summary:
            'Реализовал первую версию фронтенда с нуля за 1,5 месяца и продолжил развивать сервис до вывода в промышленную эксплуатацию. На текущий момент в сервисе запущено более 5 страховых продуктов. Также участвовал в запуске страхования путешествующих.',
          outcome: '>5',
          outcomeLabel: 'страховых продуктов запущено',
          stack: ['React', 'TypeScript', 'Zustand', 'TanStack Query'],
          contributions: [
            'Реализовал фронтенд по стандартам корпоративной UI-библиотеки и создал переиспользуемый Layout-компонент — основу архитектуры сервиса.',
            'Обновил управление состоянием и серверными данными с помощью Zustand и React Query. Сервис стал одним из первых в компании, внедривших этот стек.',
            'Участвовал в реализации и запуске страхования путешествующих, продолжая самостоятельно развивать фронтенд продукта.',
            'Помогал прорабатывать требования, бизнес-логику и декомпозицию задач; при отсутствии аналитика или тестировщика участвовал в проверке изменений.',
          ],
          featured: true,
        },
        {
          id: 'appointments',
          category: 'СЕРВИСНАЯ ПЛАТФОРМА · ПЕРЕИСПОЛЬЗУЕМЫЙ UI',
          title: 'Онлайн-запись',
          summary:
            'Реализовал более половины функциональности фронтенда и разработал кастомную обёртку над FullCalendar для бизнес-сценариев онлайн-записи.',
          outcome: '50%+',
          outcomeLabel: 'функциональности реализовано',
          stack: ['React', 'TypeScript', 'FullCalendar'],
          contributions: [
            'Реализовал более 50% функциональности сервиса.',
            'Создал обёртку над FullCalendar, адаптировав календарь к требованиям бизнеса.',
            'Заложил возможность расширения решения и переиспользования в других продуктах.',
          ],
        },
        {
          id: 'crm',
          category: 'БИЗНЕС-ИНСТРУМЕНТЫ · КАЧЕСТВО КОДА',
          title: 'CRM «Свои Финансы» и «Свой Бизнес»',
          summary:
            'Реализовал более половины функциональности CRM «Свои Финансы», оптимизировал рендеринг и работу с API. В CRM «Свой Бизнес» участвовал в рефакторинге легаси-кода.',
          outcome: '50%+',
          outcomeLabel: 'функциональности CRM «Свои Финансы»',
          stack: ['React', 'TypeScript', 'Redux Toolkit'],
          contributions: [
            'Реализовал более 50% функциональности CRM «Свои Финансы».',
            'Оптимизировал рендеринг компонентов и взаимодействие с API.',
            'Устранил дублирование логики и улучшил типизацию в легаси-коде CRM «Свой Бизнес».',
          ],
        },
        {
          id: 'partners',
          category: 'ПАРТНЁРСКИЕ СЕРВИСЫ · АРХИТЕКТУРА',
          title: 'Партнёрские программы',
          summary:
            'Полностью переписал фронтенд сервиса с нуля. Внедрил актуальную архитектуру и единые стандарты разработки, которые упростили добавление новых возможностей.',
          outcome: 'С нуля',
          outcomeLabel: 'новая основа фронтенда',
          stack: ['React', 'TypeScript', 'Reusable UI'],
          contributions: [
            'Переписал фронтенд сервиса с нуля.',
            'Внедрил актуальную архитектуру и общие стандарты разработки.',
            'Сократил время на добавление новых функций за счёт поддерживаемой архитектуры.',
          ],
        },
        {
          id: 'builders',
          category: 'СЕРВИСЫ ДЛЯ САМОЗАНЯТЫХ · ПРОДУКТОВЫЙ UI',
          title: 'Конструкторы сайтов',
          summary:
            'Реализовал более половины функциональности конструктора для самозанятых, включая шаблоны и редактирование секций. В отдельном конструкторе на Vue / Nuxt внедрил интеграцию социальных профилей.',
          outcome: '50%+',
          outcomeLabel: 'функциональности конструктора для самозанятых',
          stack: ['React', 'TypeScript', 'Vue 3', 'Nuxt'],
          contributions: [
            'Реализовал управление шаблонами и редактирование секций — часть более 50% функциональности конструктора для самозанятых.',
            'Обеспечил адаптивность интерфейсов для разных устройств.',
            'Внедрил отображение соцсетей и улучшил процесс их привязки в конструкторе «Своё Родное» на Vue / Nuxt.',
          ],
        },
        {
          id: 'loyalty',
          category: 'ЛОЯЛЬНОСТЬ · ЗАГРУЗКА ДАННЫХ',
          title: 'Витрины лояльности',
          summary:
            'Добавил поддержку геолокации пользователя и оптимизировал загрузку данных, сократив количество лишних запросов.',
          outcome: 'Меньше запросов',
          outcomeLabel: 'оптимизированная загрузка данных',
          stack: ['React', 'TypeScript', 'Geolocation'],
          contributions: [
            'Реализовал поддержку геолокации пользователя.',
            'Оптимизировал загрузку данных, минимизировав количество запросов к API.',
          ],
        },
      ],
    },
    experience: {
      eyebrow: '02 / ОПЫТ',
      title: 'Разработка. С более широким взглядом.',
      intro:
        'Совмещаю продуктовую разработку с техническим лидерством: провожу код-ревью, поддерживаю коллег и помогаю сохранять качество фронтенд-решений всего кластера.',
      jobs: [
        {
          company: 'РСХБ-Интех',
          role: 'Frontend-разработчик · Фронтенд-техлид кластера',
          period: 'Август 2024 — настоящее время',
          summary: 'Кластер «Сегментные сервисы и дополнительные продукты»',
          contributions: [
            'Руковожу фронтенд-командой из 4 человек в рамках кластера.',
            'Самостоятельно развиваю фронтенд «Страховок» и отвечаю за техническое качество фронтенд-решений кластера.',
            'Провожу код-ревью, выступаю ментором и помогаю коллегам решать сложные технические задачи в разных продуктах.',
            'Участвую в выборе архитектуры и подходов к разработке, продолжая писать продуктовый код.',
            'При отсутствии аналитика или тестировщика помогаю уточнять требования, декомпозировать задачи и проверять функциональность.',
          ],
        },
        {
          company: 'Сбербанк',
          role: 'Frontend-разработчик',
          period: 'Февраль 2022 — май 2024',
          summary: 'Центр управления местами размещения',
          contributions: [
            'Разрабатывал интерфейсы и переиспользуемые UI-компоненты на React, Redux и TypeScript.',
            'Работал в продуктовых спринтах, документировал функциональность в Confluence и взаимодействовал с владельцем продукта.',
            'Участвовал в тестировании АС «Парус» и обучении пользователей.',
          ],
        },
        {
          company: 'Сбербанк',
          role: 'Ранний опыт в банковских операциях и поддержке',
          period: 'Март 2014 — апрель 2023',
          summary: 'Техническая поддержка, координация операций и контроль задач',
          detailsLabel: 'Предыдущие роли и периоды',
          contributions: [
            'Эксперт · декабрь 2019 — апрель 2023: координировал размещение устройств самообслуживания, выполнение планов и подготовку отчётности.',
            'Главный инженер · май 2016 — декабрь 2019: решал инциденты с доступом к банковскому ПО и поддерживал внутренних пользователей.',
            'Ведущий специалист · март 2014 — май 2016: работал с нормативно-справочной информацией, распределял задачи группы и контролировал выполнение.',
          ],
        },
      ],
    },
    stack: {
      eyebrow: '03 / СТЕК',
      title: 'Инструменты, проверенные работой.',
      intro: 'Фронтенд-стек, который использую для разработки и поддержки реальных продуктов.',
      groups: [
        { title: 'Основная разработка', skills: ['React', 'TypeScript', 'JavaScript'], description: 'Типизированные интерфейсы и переиспользуемые компоненты.' },
        { title: 'Состояние и серверные данные', skills: ['Zustand', 'TanStack Query', 'Redux Toolkit'], description: 'Разделение состояния клиента и данных сервера.' },
        { title: 'Интерфейсы и разработка', skills: ['HTML', 'CSS', 'Адаптивный UI', 'Git'], description: 'Корпоративные UI-стандарты, адаптивные страницы и код-ревью.' },
        { title: 'За пределами React', skills: ['Vue 3', 'Nuxt', 'FullCalendar'], description: 'Конструкторы сайтов, социальные интеграции и календари.' },
        { title: 'Инженерная практика', skills: ['Код-ревью', 'Менторство', 'Разработка с AI'], description: 'Использую AI в повседневной разработке и проверяю полученный код на качество и поддерживаемость.' },
      ],
    },
    education: {
      title: 'Образование',
      items: [
        {
          institution: 'Компьютерная академия TOP IT (ранее STEP), Тула',
          qualification: 'Full-stack веб-разработка',
          href: 'https://drive.google.com/file/d/1Xf6RQyi25BG1F7R2sudLCbQT3dgZXSyN/view',
          linkLabel: 'Посмотреть диплом',
        },
        { institution: 'Тульский государственный университет', qualification: 'Экономика и управление в машиностроении' },
      ],
    },
    learning: {
      title: 'Личные учебные проекты',
      intro: 'Ранние проекты для практики, отдельно от коммерческого опыта.',
      projects: [
        { title: 'Events App', stack: 'React · TypeScript', href: 'https://github.com/WakeUpMurad/ulbi-tv-react-js-pro', linkLabel: 'Исходный код' },
        { title: 'Crypto Exchanger', stack: 'Vue 3', href: 'https://github.com/WakeUpMurad/vue-crypto-exchanger', linkLabel: 'Исходный код' },
        { title: 'Book Library', stack: 'React · Redux', href: 'https://wakeupmurad.github.io/book-library-app_react_redux/', linkLabel: 'Демо' },
      ],
    },
    contact: {
      eyebrow: '04 / КОНТАКТЫ',
      title: 'Обсудим ваш следующий продукт.',
      body: 'Нужен frontend-разработчик, который возьмёт ответственность за продукт и поможет команде двигаться вперёд? Буду рад узнать о вашей команде.',
      availability: 'Баку, Азербайджан · Полная занятость · Офис, гибрид или удалённо',
      links: [
        { label: 'Почта', value: 'my_pad@mail.ru', href: contactLinks.email },
        { label: 'Telegram', value: '@murad_savage', href: contactLinks.telegram },
        { label: 'LinkedIn', value: 'murad-gakhramanov', href: contactLinks.linkedin },
        { label: 'GitHub', value: 'WakeUpMurad', href: contactLinks.github },
        { label: 'Телефон', value: '+7 953 421-55-77', href: contactLinks.phone },
      ],
    },
    footer: 'Мурад Гахраманов · Frontend-разработчик и техлид',
  },
}
