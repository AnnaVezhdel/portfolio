"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../app/favicon.ico";
import Image from "next/image";
import ThemeSwitch from "./theme-switch";
import useActiveSection from "../hooks/useActiveSection.js";

export default function Header() {
  const sectionIds = links.map((link) => link.hash.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-[20] relative">
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
            <Link className="flex" href={""}>
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
            </Link>
          </motion.div>
          <div className="flex">
            <ul className="hidden md:flex px-4 justify-center items-center gap-8 text-[0.9rem] font-medium text-gray-500 dark:text-gray-500">
              {links.map((link) => (
                <motion.li
                  key={link.hash}
                  initial={{ y: -100, x: "-50%", opacity: 0 }}
                  animate={{ y: 0, x: "0", opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "uppercase text-base hover:text-gray-950 dark:hover:text-gray-300 transition",
                      {
                        "text-gray-950 dark:text-gray-300 font-semibold":
                          activeSection === link.hash.replace("#", ""),
                      },
                    )}
                    href={link.hash}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex justify-center items-center gap-6 px-4">
              <button
                className="md:hidden flex shadow-2xl border border-gray-300 border-opacity-40 rounded-full p-2 bg-zinc-100 hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-800"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <MdClose /> : <RxHamburgerMenu />}
              </button>
              <ThemeSwitch />
            </div>
          </div>
        </nav>
      </motion.div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed flex top-24 w-full backdrop-blur-sm md:hidden bg-white dark:bg-gray-800 shadow-lg p-10 flex-col gap-6 bg-opacity-90 dark:bg-opacity-80"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                className={clsx(
                  "uppercase m-auto text-xl text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-gray-300 hover:font-semibold transition",
                  {
                    "font-semibold text-gray-950 dark:text-white":
                      activeSection === link.hash.replace("#", ""),
                  },
                )}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
