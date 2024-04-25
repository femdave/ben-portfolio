import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  eventnub,
  lanepact,
  upwork,
  brainnest,
  next,
  yoom,
  landing,
  marcel,
  itua,
  chigozie,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "next",
    icon: next,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "EventNub",
    icon: eventnub,
    iconBg: "#383E56",
    date: "Jan 2023 - Feb 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Lanepact",
    icon: lanepact,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Brainnest",
    icon: brainnest,
    iconBg: "#383E56",
    date: "Jan 2020 - Jun 2020",
    points: [
      "Collaborate on the creation and implementation of user interfaces and experiences for web applications.",
      "Assist in the coding and integration of new features and functionalities.",
      "Contribute to improving the speed and efficiency of Brinnest's web applications through code optimization and performance enhancements.",
      "Support the testing process by writing and executing tests, identifying bugs, and ensuring the overall quality of Brinnest's frontend applications.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Ensuring code quality and performance through thorough testing, debugging, and optimization practices to deliver high-quality deliverables.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Ben was an absolute pleasure. His attention to details and expertise in frontend development significantly elevated our project. Their ability to translate our vision into a polished user interface exceeded our expectations.",
    name: "Marcel Nwankwo",
    designation: "CEO",
    company: "Lanepact",
    image: marcel,
  },
  {
    testimonial:
      "Ben is a true professional in frontend development. His responsiveness, dedication, and technical skills were instrumental in delivering a high-quality product on time and within budget.",
    name: "Chigozie Ofoji",
    designation: "CTO",
    company: "EventNub",
    image: chigozie,
  },
  {
    testimonial:
      "I had the pleasure of collaborating with Ben on a frontend project, and I couldn't be more impressed. His creativity, problem-solving skills, and commitment to excellence were evident throughout the entire process.",
    name: "Itua Emmauel",
    designation: "COO",
    company: "Lanepact",
    image: itua,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/femdave/cars_showcase",
  },
  {
    name: "Yoom",
    description:
      "Web application that enables users start instant sessions, schedule future meetings, and seamlessly join ongoing discussions, streamlining collaboration efforts effortlessly.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: yoom,
    source_code_link: "https://github.com/femdave/zoom_clone",
  },
  {
    name: "Gericht Resturant",
    description: "A resturant landing page",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: landing,
    source_code_link: "https://github.com/femdave/gericht-resturant",
  },
];

export { services, technologies, experiences, testimonials, projects };
