"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"

const menu = [
  { name: "Home", path: "/" },
  { name: "Mitra", path: "/mitra" },
  { name: "Artikel", path: "/artikel" }
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <span className="font-bold text-brand text-lg">
            Lakoffie
          </span>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6">
            {menu.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`nav-link ${
                  pathname === item.path ? "nav-link-active" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-brand"></span>
            <span className="w-6 h-0.5 bg-brand"></span>
            <span className="w-6 h-0.5 bg-brand"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {menu.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`text-lg ${
                  pathname === item.path
                    ? "text-accent font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
