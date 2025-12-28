"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#4b2e1f] text-amber-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* === LEFT : LOGO & TAGLINE === */}
        <div className="flex-1 text-center md:text-left">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl font-extrabold tracking-wide">
              LAKOFFIE
            </h1>
            <p className="text-xs tracking-widest text-amber-300">
              kopi bubuk murni
            </p>
          </Link>
        </div>

        {/* === NAVBAR DESKTOP === */}
        <nav className="hidden md:flex gap-8 font-semibold">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/mitra" className="hover:text-white transition">
            Mitra
          </Link>
          <Link href="/artikel" className="hover:text-white transition">
            Artikel
          </Link>
        </nav>

        {/* === HAMBURGER (MOBILE) === */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* === MOBILE MENU === */}
      {open && (
        <div className="md:hidden bg-[#3e2418] border-t border-amber-800">
          <nav className="flex flex-col text-center py-4 space-y-4 font-semibold">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/mitra"
              onClick={() => setOpen(false)}
              className="hover:text-white"
            >
              Mitra
            </Link>
            <Link
              href="/artikel"
              onClick={() => setOpen(false)}
              className="hover:text-white"
            >
              Artikel
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
