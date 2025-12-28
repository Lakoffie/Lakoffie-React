"use client";

import artikel from "../../data/artikel";
import Link from "next/link";

export default function ArtikelPage() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">Artikel Kopi Lakoffie</h1>

      <ul className="space-y-4">
        {artikel.map((item) => (
          <li key={item.id}>
            <Link
              href={`/artikel/${item.slug}`}
              className="text-amber-700 font-semibold hover:underline"
            >
              {item.judul}
            </Link>
            <p className="text-gray-600 text-sm">{item.ringkas}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
