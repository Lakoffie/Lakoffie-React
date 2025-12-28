"use client";
import { useEffect, useState } from "react";

export default function Slider({ items }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="mb-10">
      {items[index]}
    </div>
  );
}
