"use client";

import Hero from "../components/landing/Hero.jsx";
import ProductGrid from "../components/landing/ProductGrid.jsx";
import Testimonial from "../components/landing/Testimonial.jsx";
import About from "../components/landing/About.jsx";
import FinalCTA from "../components/landing/FinalCTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <Testimonial />
      <About />
      <FinalCTA />
    </>
  );
}
