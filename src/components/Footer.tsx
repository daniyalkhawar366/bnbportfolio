import clsx from "clsx";
import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { isFilled } from "@prismicio/client";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            Daniyal Khawar
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} Daniyal Khawar
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            <li>
              <Link className="group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400" href="/about">About</Link>
            </li>
            <span className="text-4xl font-thin leading-[0] text-slate-400" aria-hidden="true">/</span>
            <li>
              <Link className="group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400" href="/services">Services</Link>
            </li>
            <span className="text-4xl font-thin leading-[0] text-slate-400" aria-hidden="true">/</span>
            <li>
              <Link className="group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400" href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          <a
            href="https://www.instagram.com/__dnyl__/"
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label="Daniyal Khawar on Instagram"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/daniyal-khawar-506344304"
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label="Daniyal Khawar on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            >
              <FaLinkedin />
          </a>
          <a
            href="/contact"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label="Contact Daniyal Khawar"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </Bounded>
  );
}
