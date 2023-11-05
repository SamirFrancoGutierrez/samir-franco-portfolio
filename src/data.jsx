import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Inicio',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Yo',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portafolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contacto',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Nombre: ',
    description: 'Anthony Samir',
  },

  {
    id: 2,
    title: 'Apellido: ',
    description: 'Franco Gutiérrez',
  },

  {
    id: 3,
    title: 'LinkedIn : ',
    description: 'Samir Franco',
  },

  {
    id: 4,
    title: 'Nacionaliad : ',
    description: 'Peruana',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Disponible',
  },

  {
    id: 6,
    title: 'Ciudad : ',
    description: 'Piura',
  },

  {
    id: 7,
    title: 'Número : ',
    description: '+51 934 714 383 ',
  },

  {
    id: 8,
    title: 'Correo Electrónico : ',
    description: 'contact@samirfranco.tech',
  },

  {
    id: 9,
    title: 'Pasatiempo : ',
    description: 'Nadar,Programar',
  },

  {
    id: 10,
    title: 'Lenguaje : ',
    description: 'Español,Ingles ',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Años de <br /> Experiencia',
  },

  {
    id: 2,
    no: '13+',
    title: 'Proyectos <br /> Completados',
  },

  {
    id: 3,
    no: '12+',
    title: 'Clientes <br /> Satisfechos',
  },

  {
    id: 4,
    no: '15+',
    title: ' Reconocimentos <br /> Ganados',
  },
];

export const resume = [
  {

    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Febrero 2023 - Agosto 2023',
    title: 'Sup. de Logística y Tecnología <span> Transp. Franco </span>',
    desc: 'Lideré la automatización del 70% de procesos logísticos mediante tecnologías y dirigí un equipo de 15 personas .',

  },

  {
    
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Abril 2018 - Actualidad',
    title: 'Docente en Computación <span> Innova Tecnology </span>',
    desc: 'Brindo una enseñanza equilibrada entre teoría y práctica,  aplicando la propuesta pedagógica.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Enero 2005 - 2013',
    title: 'Teleoperador en Atención al Cliente <span> Comdata  </span>',
    desc: 'Optimicé la atención al cliente (70% satisfacción) y logré ventas diarias de 8 productos mediante estrategias de retención.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Julio 2023 - Actualidad ',
    title: 'Programador Front-End <span> Frontend Masters </span>',
    desc: 'Desarrollando nuevos aprendizajes dominando HTML5 , CSS3 y JavaScript (React, Node).',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Febrero 2023 - Julio 2023',
    title: 'Programador Back-End <span> Alura Latam </span>',
    desc: 'Desarrollé habiliadades en  Java (Spring Framework, Hibernate), Python , GitHub y manipulacion de datos en SQL con MySQL .',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Agosto 2022 - Actualidad',
    title: 'Ing. Sistemas y Informática <span> Universidad UTP </span>',
    desc: 'Estudiante desarrollando diferentes habilidades tecnológicas sólidas para resolver problemas y contribuir al éxito empresaria.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML5',
    percentage: '89',
  },

  {
    id: 2,
    title: 'CSS3',
    percentage: '88',
  },

  {
    id: 3,
    title: 'JavaScript',
    percentage: '73',
  },

  {
    id: 4,
    title: 'React',
    percentage: '71',
  },

  {
    id: 5,
    title: 'Java',
    percentage: '90',
  },

  {
    id: 6,
    title: 'Django',
    percentage: '65',
  },

  {
    id: 7,
    title: 'GitHub',
    percentage: '77',
  },

  {
    id: 8,
    title: 'SQL Server',
    percentage: '67',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Aplicación Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Implementación : ',
        desc: 'Aplicación Web',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'Fisholg',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'NodeJs , PHP y ReactJs ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link : ',
        desc: 'https://fisholg.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Página Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Página Web',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'Transportes Franco',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'HTML5 , CSS3, JavaScript y Bootstrap',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link : ',
        desc: 'https://transfranco.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Página Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Página Web',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'Barberia Seven',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'JavaScript y Bootstrap',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link : ',
        desc: 'https://bit.ly/barberia_seven',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Página Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Buenas Prácticas en CSS3',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'Sharon McCutcheon',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'HTML y CS33',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link : ',
        desc: 'https://bit.ly/SharonMc',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Aplicación Web',
    details: [
      {
        title: 'Proyecto : ',
        desc: 'Aplicación Web',
      },
      {
        title: 'Cliente : ',
        desc: 'Cevicheria Jorgito',
      },
      {
        title: 'Lenguaje : ',
        desc: 'ReactJS',
      },
      {
        title: 'Link : ',
        desc: 'https://bit.ly/cevicheJorg',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Sistema de Venta',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Sistema Ágil de Ventas',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'Frieghts Tecnology',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'Java y SQL Server',
      },
      {
        icon: <FiExternalLink />,
        title: 'Repositorio : ',
        desc: 'bit.ly/system-vents',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
