"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="flex p-4 justify-center w-fit text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent"
      >
        MY PROJECTS
      </motion.h2>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
