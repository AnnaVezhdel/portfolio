"use client";

import Image from "next/image";
import React from "react";
import laptopImg from "../public/laptop.webp";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-x-2 py-8 md:py-32 px-5 lg:px-0 gap-2">
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
        className=" hidden sm:flex"
      >
        <Image
          src={laptopImg}
          alt="headshot"
          width={420}
          height={420}
          className="w-full rounded-lg object-cover"
        />
      </motion.div>
      <div className="flex flex-col max-w-full sm:max-w-lg text-center md:text-left  space-y-4 lg:space-y-8">
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
          className="w-fit text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent"
        >
          ABOUT ME
        </motion.h2>
        <div className=" text-start space-y-4">
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
            className="text-gray-600 text-2xl "
          >
            Inspired web developer with strong analytical thinking and excellent
            organizational skills. <br />
            With a focus on growth, creative problem-solving, and teamwork, I am
            a fast learner ready to tackle challenges and deliver impactful
            results
          </motion.p>
        </div>
      </div>
    </section>
  );
}
