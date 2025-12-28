"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#4b2e1e] text-amber-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3 text-center">
          
          {/* Logo */}
          <Image
  src="/logo-lakoffie.png"
  alt="Lakoffie Kopi Bubuk Murni"
  width={40}
  height={40}
  className="hover:opacity-90 transition-opacity duration-300"
/>

          {/* Copyright */}
          <p className="text-sm tracking-wide">
            © 2026 |{" "}
            <span className="font-semibold text-white">LAKOFFIE</span> | KOPI
            BUBUK MURNI
          </p>

        </div>
      </div>
    </footer>
  );
}
