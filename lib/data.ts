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
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "MoneyGuard",
    description:
      "Money Guard is a web application for managing personal finances by tracking income and expences in clear, visual way. I was responsible for implementing the authentication system, configuring routing structure and other tasks in a team project.",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    imageUrl: moneyGuardImg,
  },
  {
    title: "Phonebook",
    description:
      "PhoneBook is a web application that enables users to efficiently manage their contacts by adding, deleting, and searching.",
    tags: ["React", "Redux", "REST API", "Tailwind", "Redux", "DaisyUI", "Axios"],
    imageUrl: phonebookImg,
  },
  {
    title: "Portfolio",
    description:
      "Team project to create a portfolio site with an adaptive and user-friendly design.",
    tags: ["JavaScript", "HTML", "CSS", "Responsive Web Design", "Git"],
    imageUrl: JeffesonImg,
    },
  {
    title: "WatchCharm",
    description:
      "Team project to create a site layout for selling premium watches.",
    tags: ["HTML", "CSS", "Responsive Web Design", "Git"],
    imageUrl: watchCharmImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;