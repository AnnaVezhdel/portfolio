import moneyGuardImg from "@/public/MoneyGuard.webp";
import phonebookImg from "@/public/Phonebook.webp";
import JeffesonImg from "@/public/Jefferson.webp";
import watchCharmImg from "@/public/WatchCharm.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contacts",
    hash: "#contacts",
  },
] as const;


export const projectsData = [
  {
    title: "MoneyGuard",
    description:
      "Money Guard is a web application for managing personal finances by tracking income and expences. I was responsible for implementing the authentication system, configuring routing structure, other tasks in a team project.",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    imageUrl: moneyGuardImg,
    link: "https://run-your-budget-fc-110.vercel.app/",
  },
  {
    title: "Phonebook",
    description:
      "PhoneBook is a web application that enables users to efficiently manage their contacts by adding, deleting, and searching.",
    tags: ["React", "Redux", "REST API", "Tailwind", "Redux", "DaisyUI", "Axios"],
    imageUrl: phonebookImg,
    link: "https://phonebook-hw-react.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "Team project to create a portfolio site with an adaptive and user-friendly design.",
    tags: ["JavaScript", "HTML", "CSS", "Responsive Web Design", "Git"],
    imageUrl: JeffesonImg,
    link: "https://aandrea-alex.github.io/alex-template-portfolio/",
    },
  {
    title: "WatchCharm",
    description:
      "Team project to create a site layout for selling premium watches.",
    tags: ["HTML", "CSS", "Responsive Web Design", "Git"],
    imageUrl: watchCharmImg,
    link: "https://viktoriia-khmel.github.io/project-CodeNinjas/",
  },
] as const;

export const skillsData = [
  {
    title: "HTML",
    path: "/tech/html.svg",
  },
  {
    title: "CSS",
    path: "/tech/css.svg",
  },
  {
    title: "JavaSctipt",
    path: "/tech/javascript.svg",
  },
  {
    title: "TypeScript",
    path: "/tech/typescript.svg",
  },
  {
    title: "ReactJS",
    path: "/tech/react.svg",
  },
  {
    title: "Redux",
    path: "/tech/redux.svg",
  },
  {
    title: "TailWind",
    path: "/tech/tailwind.svg",
  },

  {
    title: "NodeJS",
    path: "/tech/nodejs.svg",
  },
  {
    title: "Express",
    path: "/tech/express.svg",
  },
  {
    title: "NextJS",
    path: "/tech/nextjs.svg",
  },
  {
    title: "MongoDB",
    path: "/tech/mongodb.svg",
  },
  {
    title: "Git",
    path: "/tech/git.svg",
  },
  {
    title: "Github",
    path: "/tech/github.svg",
  },
  {
    title: "Figma",
    path: "/tech/figma.svg",
  },
] as const;

export const CONTACTS_ITEMS = [
  {
    icon: "/icons/mail.svg",
    link: "mailto:avezhdel@gmail.com",
    title: "Email",
    text: "avezhdel@gmail.com",
  },
  {
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/in/anna-vezhdel",
    title: "LinkedIn",
    text: "www.linkedin.com/in/anna-vezhdel",
  },

  {
    icon: "/icons/mobile.svg",
    link: "tel:+420770656805",
    title: "Mobile",
    text: "+420770656805",
  },
  {
    icon: "/icons/github.svg",
    link: "https://github.com/AnnaVezhdel",
    title: "GitHub",
    text: "@AnnaVezhdel",
  },
  {
    icon: "/icons/telegram.svg",
    link: "https://t.me/anna_vezhdel",
    title: "Telegram",
    text: "@anna_vezhdel",
  },
];