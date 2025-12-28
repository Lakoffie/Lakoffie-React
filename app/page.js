"use client";

import { useState } from "react";

/* =========================
   🔴 NONAKTIF SEMENTARA
   Aktifkan lagi kalau data sudah ada
========================= */

// import artikel from "@/data/artikel";
// import { filterArtikel } from "@/lib/filter";

// import Grid from "@/components/ui/Grid";
// import Card from "@/components/ui/Card";
// import SearchFilter from "@/components/ui/SearchFilter";
// import Slider from "@/components/ui/Slider";

/* ========================= */
import AppShell from "../components/layout/AppShell.jsx";
import Hero from "../components/landing/Hero.jsx";
import ProductGrid from "../components/landing/ProductGrid.jsx";
import Testimonial from "../components/landing/Testimonial.jsx";
import About from "../components/landing/About.jsx";
import FinalCTA from "../components/landing/FinalCTA.jsx";

export default function Home() {
  // const [filtered, setFiltered] = useState(artikel);

  // const handleFilter = (keyword, wilayah) => {
  //   setFiltered(filterArtikel(artikel, keyword, wilayah));
  // };

  return (
    <>
     <AppShell>
      {/* HERO + PRODUK */}
      <Hero />
      <ProductGrid />

      {/* TESTIMONI & TRUST */}
      <Testimonial />
      <About />

      {/* CTA */}
      <FinalCTA />

      {/*
      =========================
      🔴 ARTIKEL (NONAKTIF)
      =========================

      <Slider
        items={artikel.slice(0, 3).map((a) => (
          <Card key={a.id} data={a} />
        ))}
      />

      <SearchFilter onChange={handleFilter} />

      <Grid>
        {filtered.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Grid>
      */}
    </>
  );
}
