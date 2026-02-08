"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
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
      className="mx-auto flex p-4 justify-center w-fit text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent uppercase"
    >
      {children}
    </motion.h2>
  );
}
