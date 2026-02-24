"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profilPic from "../public/avatar.webp";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Home() {
  return (
    <section
      id="home"
      className="mt-20 mx-auto max-w-5xl py-8 md:py-16 px-5 scroll-mt-24"
    >
      <div className="flex flex-col items-center justify-center sm:flex-row gap-8">
        <div className="flex flex-col gap-12 max-w-2xl">
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
            className="text-center text-xl text-gray-900 sm:text-2xl dark:text-gray-200"
          >
            Hi, I’m <span className="font-bold">Anna</span> — a junior{" "}
            <span className="font-bold">front-end developer</span> ready to help
            you create a{" "}
            <span className="font-bold">
              dynamic website, commercial project
            </span>{" "}
            or a <span className="font-bold">web application</span>. Feel free
            to contact me
          </motion.h1>
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 text-lg font-medium"
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
              className="min-w-[14.05rem] group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              href="/Anna_Vezhdel_CV.pdf"
              download
              className="min-w-[14rem] group bg-white px-7 py-3 flex justify-center items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
          </motion.div>
        </div>
        <div className="relative">
          <motion.div
            className="aspect-square rounded-full overflow-hidden shadow-xl"
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
              className="object-cover min-w-[10rem]"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-3 right-2 text-4xl"
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
