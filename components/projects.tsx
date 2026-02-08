import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading>Projects</SectionHeading>
      <div className="flex py-4 sm:py-6 flex-col gap-4 sm:gap-8">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
