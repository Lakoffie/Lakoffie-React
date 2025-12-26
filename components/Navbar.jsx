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
      <nav className="navbar">
        <div className="navbar-inner">

          <span className="navbar-logo">Lakoffie</span>

          <div className="navbar-menu">
            {menu.map(item => (
              <a
                key={item.path}
                href={item.path}
                className={`nav-link ${
                  pathname === item.path ? "nav-active" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="navbar-hamburger"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </nav>

      {open && (
        <div className="navbar-mobile">
          {menu.map(item => (
            <a
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
