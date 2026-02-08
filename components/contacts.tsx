"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { CONTACTS_ITEMS } from "@/lib/data";

export default function Contacts() {
  return (
    <section id="contacts" className="scroll-mt-24">
      <SectionHeading>Contacts</SectionHeading>
      <div className="mt-12 mb-32 grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-5 mx-auto sm:mx-2 ">
        {CONTACTS_ITEMS.map((contact) => (
          <div
            key={contact.title}
            className="flex flex-row items-center space-x-3"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              variants={{
                visible: { scale: 1, opacity: 1 },
                hidden: { scale: 0, opacity: 0 },
              }}
              className="flex"
            >
              <Link
                href={`${contact.link}`}
                className="rounded-full p-4 bg-white shadow-lg"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={contact.icon}
                  alt={contact.title}
                  width={28}
                  height={28}
                />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              variants={{
                visible: { x: 0, opacity: 1 },
                hidden: { x: -50, opacity: 0 },
              }}
            >
              <h1 className=" font-bold text-xl">{contact.title}</h1>
              <Link href={`${contact.link}`} className=" text-gray-500">
                {contact.text}
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
