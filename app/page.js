"use client";
import { useState } from "react";
import artikel from "@/data/artikel";
import { filterArtikel } from "@/lib/filter";
import Grid from "@/components/ui/Grid";
import Card from "@/components/ui/Card";
import SearchFilter from "@/components/ui/SearchFilter";
import Slider from "@/components/ui/Slider";
import Hero from "@/components/landing/Hero";
import ProductGrid from "@/components/landing/ProductGrid";
import Testimonial from "@/components/landing/Testimonial";
import About from "@/components/landing/About";
import FinalCTA from "@/components/landing/FinalCTA";
import StickyWhatsapp from "@/components/StickyWhatsapp";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
        <StickyWhatsapp />
      </body>
    </html>
  );
}
export const metadata = {
  title: "Lakoffie | Kopi Bubuk dengan Karakter Rasa Berbeda",
  description:
    "Lakoffie menghadirkan kopi bubuk lokal dengan karakter rasa unik. Dari pahit beraroma gula jawa, body kental, hingga asam elegan ala café.",
  keywords: [
    "kopi bubuk",
    "kopi robusta",
    "kopi temanggung",
    "kopi lampung",
    "kopi salatiga",
    "kopi gula jawa",
    "kopi lokal",
  ],
  openGraph: {
    title: "Lakoffie | Kopi Bubuk Lokal Rasa Ala Café",
    description:
      "Ngopi ala café dengan harga bersahabat. Kopi bubuk Lakoffie hadir dengan karakter rasa berbeda.",
    type: "website",
  },
};

export default function Home() {
  const [filtered, setFiltered] = useState(artikel);

  const handleFilter = (keyword, wilayah) => {
    setFiltered(filterArtikel(artikel, keyword, wilayah));
  };

  return (
    <>
    <Hero />
      <ProductGrid />
      <Testimonial />
      <About />
      <FinalCTA />
      <Slider items={artikel.slice(0, 3).map(a => <Card key={a.id} data={a} />)} />

      <SearchFilter onChange={handleFilter} />

      <Grid>
        {filtered.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </Grid>
    </>
  );
}
