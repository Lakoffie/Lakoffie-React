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

export default function Home() {
  const [filtered, setFiltered] = useState(artikel);

  const handleFilter = (keyword, wilayah) => {
    setFiltered(filterArtikel(artikel, keyword, wilayah));
  };

  return (
    <>
      {/* HERO + PRODUK */}
      <Hero />
      <ProductGrid />

      {/* TESTIMONI & TRUST */}
      <Testimonial />
      <About />

      {/* CTA */}
      <FinalCTA />

      {/* SLIDER ARTIKEL */}
      <Slider
        items={artikel.slice(0, 3).map((a) => (
          <Card key={a.id} data={a} />
        ))}
      />

      {/* SEARCH & FILTER */}
      <SearchFilter onChange={handleFilter} />

      {/* GRID ARTIKEL */}
      <Grid>
        {filtered.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Grid>
    </>
  );
}
