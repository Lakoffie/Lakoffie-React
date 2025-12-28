"use client";

import products from "../../data/products";
import Image from "next/image";

export default function ProductGrid() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-10">
        Pilih Karakter Kopi Favoritmu
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((p) => (
          <div
  key={p.id}
  className="
    bg-white
    rounded-xl
    shadow
    p-4
    transition-all
    duration-300
    ease-out
    hover:-translate-y-[6px]
    hover:shadow-xl
  "
>
            <Image
  src={p.image}
  alt={`Kopi ${p.name} Lakoffie`}
  width={400}
  height={300}
  className="rounded-lg mb-4 object-cover"
  loading="lazy"
/>

            <h3 className="font-bold text-lg">{p.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{p.desc}</p>
            <p className="text-sm mb-3">{p.detail}</p>

            <div className="mb-4">
              <span className="line-through text-gray-400 mr-2">
                Rp{p.oldPrice.toLocaleString()}
              </span>
              <span className="text-amber-600 font-bold">
                Rp{p.price.toLocaleString()}
              </span>
            </div>

            <a
              href="https://wa.me/6285175285640"
              className="text-amber-600 font-semibold hover:underline"
            >
              Tanya Varian Ini →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
