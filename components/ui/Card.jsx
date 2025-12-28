import Link from "next/link";

export default function Card({ data }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <img
        src={data.gambar}
        alt={data.judul}
        className="rounded-lg mb-3"
      />
      <h3 className="font-bold text-lg mb-2">{data.judul}</h3>
      <p className="text-sm text-gray-600 mb-3">{data.ringkas}</p>

      <Link
        href={`/artikel/${data.slug}`}
        className="text-amber-600 font-semibold"
      >
        Baca selengkapnya →
      </Link>
    </div>
  );
}
