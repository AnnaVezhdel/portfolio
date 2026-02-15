"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";

import logo from "../app/favicon.ico";
import Image from "next/image";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <header className="z-[999] relative ">
      <motion.div
        className="fixed items-center top-0 left-1/2 h-[4.5rem] rounded-none bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-sm sm:top-6 sm:h-[3.25rem] w-full sm:rounded-full max-w-6xl p-4 dark:bg-gray-800 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex items-center w-full justify-between fixed top-[0.15rem] left-1/2 -translate-x-1/2 py-2  sm:h-[initial] sm:py-0">
          <motion.div
            className="flex max-h-[3rem] gap-1 px-4 py-1"
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
              className="w-12 h-10"
              src={logo}
              alt="logo"
              width={48}
              height={40}
            />
            <p className="flex justify-center items-center text-gray-950 font-light dark:text-gray-400">
              websites & more
            </p>
          </motion.div>
          <ul className="px-4 flex justify-center items-center gap-8 text-[0.9rem] font-medium text-gray-500 dark:text-gray-500">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "0", opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "uppercase hover:text-gray-950 dark:hover:text-gray-300 transition",
                    {
                      "text-gray-950 dark:text-gray-300 font-semibold":
                        activeSection === link.name,
                    },
                  )}
                  href={link.hash}
                  onClick={() => setActiveSection(link.name)}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <ThemeSwitch />
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
