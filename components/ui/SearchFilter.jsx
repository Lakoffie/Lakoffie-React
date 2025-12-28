"use client";
import { useState } from "react";

export default function SearchFilter({ onChange }) {
  const [keyword, setKeyword] = useState("");
  const [wilayah, setWilayah] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        placeholder="Cari kopi / tag..."
        className="border p-2 rounded"
        onChange={(e) => {
          setKeyword(e.target.value);
          onChange(e.target.value, wilayah);
        }}
      />

      <select
        className="border p-2 rounded"
        onChange={(e) => {
          setWilayah(e.target.value);
          onChange(keyword, e.target.value);
        }}
      >
        <option value="">Semua Wilayah</option>
        <option value="Kedu">Kedu</option>
        <option value="Tingkir">Tingkir</option>
      </select>
    </div>
  );
}
