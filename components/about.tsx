"use client";

import Image from "next/image";
import React from "react";
import laptopImg from "../public/laptop.webp";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex flex-col py-8 md:py-24 px-4 gap-6"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex max-w-4xl gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="hidden sm:flex min-w-70 w-full"
        >
          <Image
            src={laptopImg}
            alt="laptopImage"
            width={240}
            height={240}
            className="rounded-lg object-cover w-full"
          />
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="text-gray-600 text-2xl flex  flex-col gap-4"
        >
          Inspired web developer with strong analytical thinking and excellent
          organizational skills. <br />
          <span>
            With a focus on growth, creative problem-solving, and teamwork, I am
            a fast learner ready to tackle challenges and deliver impactful
            results.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
