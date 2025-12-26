"use client";

import { usePathname } from "next/navigation";

const menu = [
  { name: "Home", path: "/" },
  { name: "Mitra", path: "/mitra" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-logo">Lakoffie</span>

        <div className="flex gap-4">
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
      </div>
    </nav>
  );
}
