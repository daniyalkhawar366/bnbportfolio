"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { Content, KeyTextField, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
        <div className="flex items-center justify-between">
          <NameLogo />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          <li className="first:mt-8">
            <Link
              className="group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 "
              href="/about"
              onClick={() => setOpen(false)}
            >
              <span className="absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
              <span className="relative">About</span>
            </Link>
          </li>
          <li>
            <Link
              className="group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 "
              href="/services"
              onClick={() => setOpen(false)}
            >
              <span className="absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
              <span className="relative">Services</span>
            </Link>
          </li>
          <li>
            <Link
              className="group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 "
              href="/contact"
              onClick={() => setOpen(false)}
            >
              <span className="absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
              <span className="relative">Contact</span>
            </Link>
          </li>
        </div>
        <DesktopMenu pathname={pathname} />
      </ul>
    </nav>
  );
}

function NameLogo() {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      Daniyal Khawar
    </Link>
  );
}

function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      <li>
        <Link
          className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
          href="/about"
        >
          <span className="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0" />
          <span className="relative">About</span>
        </Link>
      </li>
      <span className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline" aria-hidden="true">/</span>
      <li>
        <Link
          className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
          href="/services"
        >
          <span className="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0" />
          <span className="relative">Services</span>
        </Link>
      </li>
      <span className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline" aria-hidden="true">/</span>
      <li>
        <Link
          className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
          href="/contact"
        >
          <span className="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0" />
          <span className="relative">Contact</span>
        </Link>
      </li>
    </div>
  );
}
