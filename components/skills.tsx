"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="my-8 sm:my-18 max-w-[48rem] scroll-mt-24">
      <SectionHeading>Skills</SectionHeading>
      <div className="p-6 flex gap-4 sm:gap-12 flex-wrap justify-center">
        {skillsData.map((skill, index) => {
          return (
            <motion.div
              key={skill.title}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className="justify-center items-center hover:cursor-pointer hover:scale-105"
            >
              <div className={`flex flex-col`}>
                <Image
                  src={skill.path}
                  alt={skill.title}
                  width={68}
                  height={68}
                  className="mx-auto"
                />
              </div>
              <h3 className="sm:text-xl text-center sm:mt-2">{skill.title}</h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
