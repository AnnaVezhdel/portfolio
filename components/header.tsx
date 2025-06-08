"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

import logo from "../app/favicon.ico";
import Image from "next/image";

export default function Header() {
  return (
    <header className="z-[999] relative w-full">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[62rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <motion.div
          className="pl-4"
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
          }}
        >
          <Image
            src={logo}
            alt="logo"
            className="ml-8"
            width={38}
            height={38}
          />
          <div className="flex">
            <p className="flex font-light leading-none">websites & more</p>
          </div>
        </motion.div>
      </motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              className=" flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, x: "-50%", opacity: 0 }}
              animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
              <Link
                className="flex items-center justify-center px-3 py-3 hover:text-gray-950 transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
