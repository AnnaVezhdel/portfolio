"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profilPic from "../public/avatar.webp";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
        <div className="flex flex-col gap-5">
          <motion.h1
            initial={{
              x: -500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="text-center text-xl text-gray-900 sm:text-2xl"
          >
            Hi, I’m <span className="font-bold">Anna</span>. A passionate{" "}
            <span className="font-bold">front-end developer</span> from
            Humpolec, Czechia.📍
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-4 flex-col sm:flex-row"
            initial={{
              x: -500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <Link
              href="#contact"
              className="group bg-gray-900 font-medium text-white px-7 py-3 flex items-center gap-2 rounded-full md:px-9 md:text-xl outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              href="/Anna_Vezhdel_CV.pdf"
              download
              className="group cursor-pointer bg-white px-7 py-3 font-medium flex items-center gap-2 rounded-full md:px-9 md:text-xl outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
            >
              Download CV{" "}
              <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
            </a>
          </motion.div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilPic}
              alt="avatar"
              width={240}
              height={240}
              className="rounded-full object-contain border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-2 right-2 text-4xl sm:text-5xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
    </section>
  );
}
