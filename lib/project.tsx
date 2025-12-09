// Impor ikon-ikon teknologi yang akan digunakan
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiGetx,
  SiSupabase,
  SiPython,
  SiFlask,
  SiRoboflow,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiDocker,     
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiBootstrap,
} from "react-icons/si";


export const projects = [
  {
    slug: 'sidoarjo-superapp',
    title: 'Sidoarjo SuperApp - Integrated Public Services',
    description: 'A SuperApp developed for the Sidoarjo Government, integrating various public services. Features include citizen services, complaints, career information, news, and a local marketplace for MSMEs.',
    image: '/projects/super.webp',
    tech: [
      <SiFlutter key="flutter" />,
      <SiDart key="dart" />,
      <SiLaravel key="laravel" />,
      <SiPostgresql key="postgresql" />,
      <SiDocker key="docker" />, 
      <SiGetx key="getx" />,       
    ],
    link: '/projects/sidoarjo-superapp',
   
  },
    {
    slug: 'spedycheck',
    title: 'SpedyCheck - Child Development Screening App',
    description: 'A mobile application focused on screening child development. It allows parents to perform self-screenings and obtain relevant information through news and articles.',
    image: '/projects/spedycheck.webp',
    tech: [
      <SiFlutter key="flutter" />,
      <SiDart key="dart" />,
      <SiFirebase key="firebase" />,
      <SiSupabase key="supabase" />,
      <SiGetx key="getx" />,    
    ],
    link: '/projects/spedycheck',
  
  },
  {
    slug: 'getcrew',
    title: 'GetCrew - Event Professional Finder Platform',
    description: 'A marketplace platform connecting event organizers with professionals like MCs and photographers. The application facilitates efficient searching, booking, and job detail management.',
    image: '/projects/getcrew.webp',
    tech: [
      <SiFlutter key="flutter" />,
      <SiDart key="dart" />,
      <SiLaravel key="laravel" />,
      <SiMysql key="mysql" />,
      <SiGetx key="getx" />,    
    ],
    link: '/projects/getcrew',
 
  },
  {
    slug: 'bidan-delima',
    title: 'Bidan Delima - Patient Schedule Application',
    description: 'A mobile application for TPMB TMM Djamini (Bidan Delima) in Surabaya, designed to help midwives manage and view daily patient visit schedules. The app features a schedule, midwife contacts, and a feedback form.',
    image: '/projects/bidan.webp',
    tech: [
      <SiFlutter key="flutter" />,
      <SiDart key="dart" />,
      <SiFirebase key="firebase" />,
    ],
    link: '/projects/bidan-delima',
    github: 'https://github.com/tetraxion/bidan_delima' 
  },

  {
    slug: 'Pandu-object-detection',
    title: 'Disability-Friendly Toilet Detection System',
    description: 'This dummy project is built with Roboflow and Flask to practice neural networks and object detection, simulating the detection of accessibility features like toilets and grab bars.',
    image: '/projects/pandu.webp',
    tech: [
      <SiPython key="python" />,
      <SiFlask key="flask" />,
      <SiRoboflow key="roboflow" />,
    ],
    link: '/projects/Pandu-object-detection',
    github: 'https://github.com/dikawp/flask-roboflow'
  },
  {
    slug: 'MerieLocationApp',
    title: 'Merie Location Website',
    description: 'A wedding dress marketplace web application for buying and renting bridal gowns with product catalog, booking system, and customer management features.',
    image: '/projects/marielocation.webp', 
    tech: [
  
      <SiLaravel key="laravel" />,
      <SiHtml5 key="html" />,
      <SiCss3 key="css" />,
      <SiJavascript key="js" />,
      <SiBootstrap key="bootstrap" />,
      <SiMysql key="mysql" />,

    ],
    link: '/projects/MerieLocationApp',
    github: 'https://github.com/tetraxion/MarieLocation.git' 
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website built entirely with Flutter for Web to showcase my projects, skills, and professional background in a consistent and modern interface.',
    image: '/projects/portofLutter.webp', 
    tech: [
      <SiFlutter key="flutter" />,
      <SiDart key="dart" />,
    ],
    link: '/projects/personal-portfolio',
    github: 'https://github.com/tetraxion/Web_Flutter_Portofolio' 
  },
  {
    slug: 'kai-website-clone',
    title: 'KAI Website Clone - Fullstack Booking System',
    description: 'A full-stack clone of the official Kereta Api Indonesia (KAI) website, built with PHP and MySQL. This project aims to replicate the booking functionality, from the server-side logic and database management to the front-end display.',
    image: '/projects/cloneKAI.webp', 
    tech: [
      <SiPhp key="php" />,              
      <SiMysql key="mysql" />,         
      <SiHtml5 key="html" />,           
      <SiCss3 key="css" />,             
      <SiJavascript key="js" />,        
    ],
    link: '/projects/kai-website-clone',
    github: 'https://github.com/tetraxion/KAI_PHP'
  },
  {
    slug: 'nushoptara',
    title: 'NuShoptara.co - E-commerce for Indonesian Crafts',
    description: 'An e-commerce website dedicated to promoting and selling authentic Indonesian crafts. Built with fundamental web technologies to create a clean and accessible user experience.',
    image: '/projects/nushoptara.webp', 
    tech: [
      <SiHtml5 key="html" />,
      <SiCss3 key="css" />,
      <SiJavascript key="js" />,
    ],
    link: '/projects/nushoptara',
    github: 'https://github.com/tetraxion/Nushoptara_html' 
  },
];