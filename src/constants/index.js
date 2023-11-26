import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web,
  adobeIllustrator,
  affinityPhoto,
  affinityDesigner,
  arduino,
  bootstrap,
  canva,
  cobit,
  codeigniter,
  expressjs,
  golang,
  html5,
  itil,
  laravel,
  microsoftOffice,
  mysql,
  nextjs,
  nuxt,
  photoshop,
  php,
  pmbok,
  postgresql,
  premiere,
  redis,
  sass,
  vuejs,
  logoITDC,
  logoPertamina,
  logoPertaminaClipart,
  logoRoosRekan,
  logoSemenIndonesia,
  logoSSS,
  logoSSSjpg,
  logoTheMandalika,
  arteksLogo,
  arkadev
} from '../assets';
import { code } from 'three/nodes';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'timeline',
    title: 'Timeline'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Web',
    icon: web
  },
  {
    title: 'Mobile Apps',
    icon: mobile
  },
  {
    title: 'IS/IT Management',
    icon: backend
  },
  {
    title: 'Content Management',
    icon: creator
  }
];

const technologies = [
  {
    category: 'language',
    name: 'HTML 5',
    icon: html
  },
  {
    category: 'language',
    name: 'CSS 3',
    icon: css
  },
  {
    category: 'language',
    name: 'JavaScript',
    icon: javascript
  },
  {
    category: 'framework',
    name: 'TypeScript',
    icon: typescript
  },
  {
    category: 'framework',
    name: 'React JS',
    icon: reactjs
  },
  {
    category: 'framework',
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    category: 'framework',
    name: 'Node JS',
    icon: nodejs
  },
  {
    category: 'database',
    name: 'MongoDB',
    icon: mongodb
  },
  {
    category: 'framework',
    name: 'Three JS',
    icon: threejs
  },
  {
    category: 'technology',
    name: 'git',
    icon: git
  },
  {
    category: 'technology',
    name: 'docker',
    icon: docker
  },
  {
    category: 'framework',
    name: 'laravel',
    icon: laravel
  },
  {
    category: 'framework',
    name: 'codeigniter',
    icon: codeigniter
  },
  {
    category: 'database',
    name: 'mysql',
    icon: mysql
  },
  {
    category: 'database',
    name: 'postgresql',
    icon: postgresql
  }
];

const timelineHistory = [
  {
    title: 'Arka Developer',
    company_name: 'Arka Developer',
    icon: arkadev,
    iconBg: '#383E56',
    date: 'October 2019 - November 2023',
    points: [
      'Starting as an Arka Developer, small team members that covering basic apps development'
    ]
  },
  {
    title: 'CV ARKA Teknologi Solusindo',
    company_name: 'ARTEKS',
    icon: arteksLogo,
    iconBg: '#E6DEDD',
    date: 'November 2023 - Present',
    points: ['ARTEKS founded in Lamongan, Evolving Arka Developer to more powerful one']
  }
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
];

export { services, technologies, timelineHistory, testimonials, projects };
